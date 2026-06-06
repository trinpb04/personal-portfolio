import json
import urllib.request
import re

def update_projects():
    file_path = 'src/data/projects.json'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            projects = json.load(f)
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return
        
    changed = False
    
    for proj in projects:
        url = proj.get('githubUrl', '')
        if url and 'github.com/' in url:
            # Extract owner/repo
            match = re.search(r'github\.com/([^/]+)/([^/]+)', url)
            if match:
                owner, repo = match.groups()
                api_url = f"https://api.github.com/repos/{owner}/{repo}"
                
                try:
                    req = urllib.request.Request(api_url, headers={'User-Agent': 'Mozilla/5.0 (Portfolio Auto Updater)'})
                    with urllib.request.urlopen(req) as response:
                        data = json.loads(response.read().decode('utf-8'))
                        stars = data.get('stargazers_count', proj.get('stars', 0))
                        forks = data.get('forks_count', proj.get('forks', 0))
                        
                        if proj.get('stars') != stars or proj.get('forks') != forks:
                            proj['stars'] = stars
                            proj['forks'] = forks
                            changed = True
                            print(f"Updated {repo}: {stars} stars, {forks} forks.")
                except Exception as e:
                    print(f"Failed to fetch data for {repo}: {e}")

    if changed:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                json.dump(projects, f, indent=2, ensure_ascii=False)
            print("projects.json updated successfully.")
        except Exception as e:
            print(f"Error writing to {file_path}: {e}")
    else:
        print("No updates needed.")

if __name__ == '__main__':
    update_projects()
