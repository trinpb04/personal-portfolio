// Infinite marquee of the tools in the stack. Logos from Simple Icons CDN.
// Grayscale by default, colorize on hover. CSS in index.css (.logo-loop-*).
const LOGOS = [
  { name: 'Python', slug: 'python' },
  { name: 'Pandas', slug: 'pandas' },
  { name: 'NumPy', slug: 'numpy' },
  { name: 'Jupyter', slug: 'jupyter' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Snowflake', slug: 'snowflake' },
  { name: 'dbt', slug: 'dbt' },
  { name: 'Apache Airflow', slug: 'apacheairflow' },
  { name: 'Power BI', slug: 'powerbi' },
  { name: 'Plotly', slug: 'plotly' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Git', slug: 'git' },
];

function Row() {
  return (
    <div className="logo-loop-track flex items-center gap-12 pr-12 shrink-0">
      {LOGOS.map((l) => (
        <img
          key={l.slug}
          src={`https://cdn.simpleicons.org/${l.slug}`}
          alt={l.name}
          title={l.name}
          loading="lazy"
          className="logo-loop-item h-8 w-auto shrink-0"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      ))}
    </div>
  );
}

export default function LogoLoop() {
  return (
    <div className="logo-loop-mask relative w-full overflow-hidden py-2">
      <div className="flex w-max">
        <Row />
        <Row />
      </div>
    </div>
  );
}
