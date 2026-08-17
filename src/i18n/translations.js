// =============================================================
// Bilingual content (EN / VI) for the whole portfolio.
// To edit any text, change the matching key under `en` and `vi`.
// Structural data (projects, certifications) lives in /src/data/*.json
// =============================================================

export const translations = {
  en: {
    nav: {
      about: 'About',
      techstack: 'Tech Stack',
      experience: 'Experience',
      dashboards: 'Dashboards',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
      toggleTheme: 'Toggle theme',
      toggleLang: 'Switch to Vietnamese',
    },

    about: {
      eyebrow: 'Data Analyst · Applied Finance & Fintech',
      bio: 'Data Analyst with a domain background in Applied Finance & Fintech. I turn large, messy datasets into clear, actionable insights — building dashboards, automating reporting, and applying SQL, Python and Power BI to support data-driven decisions.',
      exploreWork: 'EXPLORE WORK',
      sourceCode: 'Source Code',
      linkedin: 'LinkedIn',
      location: 'Ho Chi Minh City, Vietnam // 10.7626° N, 106.6602° E',
      yearsBadge: 'Years',
    },

    impact: {
      eyebrow: 'By The Numbers',
      title: 'Measurable Impact',
      subtitle: 'Quantified outcomes from real financial-analysis and data projects.',
      metrics: [
        { value: 25, suffix: '%', label: 'Faster reporting turnaround', sub: 'via Python + Power BI automation' },
        { value: 5, suffix: 'M+', label: 'Sales data rows processed', sub: 'Shopee affiliate dataset' },
        { value: 37, suffix: '%', label: 'MoM commission increase', sub: 'via livestream & KOL spend optimization' },
        { value: 16, suffix: '', label: 'Data Certifications', sub: 'IBM Data Analytics + dbt Labs' },
      ],
      chartTitle: 'Reporting Turnaround (hours / cycle)',
      chartBefore: 'Before',
      chartAfter: 'After',
    },

    techstack: {
      title: 'Core Expertise',
      card1Title: 'Business Planning & Analytics',
      card1Desc:
        'Bridging the gap between raw data and strategic business decisions. Specialized in Financial Modeling, ROI Evaluation, and identifying key business drivers across E-commerce, F&B (Coffee Shop), and Financial sectors through variance analysis.',
      card1Tags: ['Financial Modeling', 'DCF Method', 'Variance Analysis', 'KPI Tracking'],
      eduTitle: 'Education',
      eduDegree: 'Bachelor of Business (Applied Finance & Fintech)',
      eduSchool: 'UEH - ISB / Western Sydney University',
      gpaLabel: 'GPA',
      dataTitle: 'Data Analytics & Econometrics',
      dataDesc:
        'Real-world experience in extracting, cleaning, and visualizing datasets to build econometric models and automate management reporting.',
      radarTitle: 'Skill Proficiency Map',
      radarAxes: ['Python', 'SQL', 'Power BI', 'Excel', 'Econometrics', 'Fin. Modeling'],
      skills: [
        {
          name: 'Python',
          level: 'Starter',
          desc: 'Pandas, Statsmodels, Scikit-learn. Applied in FGLS regression models and time-series macroeconomic forecasting.',
        },
        {
          name: 'SQL & Power BI',
          level: 'Proficient',
          desc: 'Data querying, ETL pipelines, and building interactive dashboards to reduce reporting turnaround time by 25%.',
        },
        {
          name: 'Advanced Excel',
          level: 'Expert',
          desc: 'Power Query, Macros, Complex Array Formulas. Used extensively for business valuation (DCF) and scenario analysis.',
        },
      ],
    },

    experience: {
      title: 'Career Journey',
      items: [
        {
          role: 'Business Analyst',
          company: 'ON25 Corporation',
          period: 'October 2025 - Present',
          keyStat: 'Supported a 37% MoM increase in commission revenue',
          highlights: [
            'Supported a 37% month-on-month increase in commission revenue (Jan) by analysing sales performance to reallocate livestream schedules, host assignments and KOL spend toward the highest-yield slots.',
            'Improved margin by modelling commission rate, NMV/GMV conversion and NMC per order across time slots, shifting the live calendar toward periods with the strongest revenue per session.',
            'Streamlined management reporting using Python, Power Bi and Advanced Excel, processing 2M+ rows per cycle and cutting reporting turnaround time by 25% while improving data integrity.',
            'Led data audit initiatives that improved data reliability across departments, standardising metric definitions and reconciling sources feeding the reporting layer.',
            'Built and maintained integrated financial models for annual budgeting, monthly rolling forecasts and scenario-based planning, working directly with the CEO.',
          ],
        },
        {
          role: 'Trainee Relationship Manager',
          company: 'Military Commercial Joint Stock Bank (MB Bank)',
          period: 'August 2024 - August 2025',
          keyStat: 'Financial Statement Analysis & Credit Decisions',
          highlights: [
            "Performed detailed financial statement analysis to assess clients' profitability, liquidity, and capital structure to support data-driven credit decisions.",
            "Conducted business performance reviews and sector benchmarking to evaluate SMEs' market positioning.",
            'Prospected and developed new corporate clients, building the pipeline from market research, referrals and direct outreach to expand the SME portfolio.',
          ],
        },
      ],
    },

    dashboards: {
      title: 'Power BI Dashboards',
      subtitle: 'Interactive dashboards I built to turn raw operational data into decisions.',
      maskNote: 'Figures masked for client confidentiality',
      pageNote: 'Preview — one page of a larger multi-page Power BI report.',
      items: [
        {
          company: 'ON25 Corporation',
          title: 'Affiliate Sales & Category Performance',
          desc: 'Sales analytics over 5M+ Shopee affiliate rows — analyzing sales performance, host assignments and KOL spend to reallocate livestream schedules, driving a 37% MoM increase in commission revenue.',
          tags: ['Power BI', 'DAX', 'Sales Analytics'],
        },
        {
          company: 'Concentrix × MeadJohnson (Outsourced)',
          title: 'Telesales NUA Performance',
          desc: 'Campaign funnel dashboard for a telesales operation — monitoring the call funnel (completed → connected → quality → order → NUA), target achievement, conversion rates and regional distribution.',
          tags: ['Power BI', 'Funnel Analysis', 'KPI Tracking'],
        },
        {
          company: 'Personal Project',
          title: 'Xom Ecommerce Data Pipeline',
          desc: 'An automated daily ELT pipeline (Airflow, dlt, Snowflake, dbt) extracting data from SQL Server to power 3 comprehensive Power BI dashboards. Features a star schema with shared dimensions and 10 dbt tests for data quality.',
          tags: ['Power BI', 'Data Engineering', 'dbt', 'Airflow', 'Snowflake'],
          url: 'https://app.powerbi.com/view?r=eyJrIjoiOTAwYjNmMjYtZjRmNS00Y2I0LTgxMjYtZjYxYjNkNzhmZWRkIiwidCI6IjM3MGZiM2I4LTMzMDYtNDg5MC05MDYzLWNjMDhiZTc4ODI1NyIsImMiOjEwfQ%3D%3D'
        },
        {
          company: 'Personal Project',
          title: 'First Project DBT pipeline',
          desc: 'An end-to-end data engineering project visualizing the ELT pipeline output. Showcasing sales overview, order count, total quantity, and revenue over time, segmented by market and RFM.',
          tags: ['Power BI', 'Data Engineering', 'dbt'],
          url: 'https://app.powerbi.com/view?r=eyJrIjoiNDQ3ZWEzN2QtYjA4ZC00NWVkLTg4NjMtMThlNWRiOWU2N2I3IiwidCI6IjM3MGZiM2I4LTMzMDYtNDg5MC05MDYzLWNjMDhiZTc4ODI1NyIsImMiOjEwfQ%3D%3D&embedImagePlaceholder=true'
        }
      ],
    },

    projects: {
      title: 'Highlighted Projects',
      all: 'All',
      techStackLabel: 'TECH STACK',
      viewReport: 'View Report',
      liveDemo: 'Launch App',
      academicBadge: 'Academic',
      githubTitle: 'GitHub Activity',
      githubSub: 'Contribution graph (last 12 months)',
      categories: {
        'data-engineering': 'Data Engineering',
        'learning-platform': 'Learning Platform',
        'ai-agent': 'AI Agent',
        'data-crawling': 'Data Crawling',
        'financial-analysis': 'Financial Analysis',
        econometrics: 'Econometrics',
      },
    },

    pagination: {
      prev: 'Prev',
      next: 'Next',
      itemsPerPage: 'Items per page',
      of: 'of'
    },

    certifications: {
      title: 'Certifications',
      skillsAcquired: 'Skills Acquired:',
      issued: 'Issued',
      grade: 'Grade',
      verify: 'Verify Certificate',
      all: 'All',
      categories: {
        'data-science': 'Data Science & AI',
        'data-analysis': 'Data Analysis',
      },
    },

    contact: {
      title: 'Get In Touch',
      subtitle: 'Open for new opportunities in Data Analytics and Finance.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      locationValue: 'Ho Chi Minh City, Vietnam',
    },

    footer: {
      rights: 'All rights reserved.',
    },
  },

  vi: {
    nav: {
      about: 'Giới thiệu',
      techstack: 'Kỹ năng',
      experience: 'Kinh nghiệm',
      dashboards: 'Dashboard',
      projects: 'Dự án',
      certifications: 'Chứng chỉ',
      contact: 'Liên hệ',
      toggleTheme: 'Đổi giao diện',
      toggleLang: 'Chuyển sang Tiếng Anh',
    },

    about: {
      eyebrow: 'Data Analyst · Tài chính Ứng dụng & Fintech',
      bio: 'Data Analyst với nền tảng domain Tài chính Ứng dụng & Fintech. Mình biến những tập dữ liệu lớn và phức tạp thành insight rõ ràng, khả thi — xây dựng dashboard, tự động hóa báo cáo và ứng dụng SQL, Python, Power BI để hỗ trợ ra quyết định dựa trên dữ liệu.',
      exploreWork: 'XEM DỰ ÁN',
      sourceCode: 'Mã nguồn',
      linkedin: 'LinkedIn',
      location: 'TP. Hồ Chí Minh, Việt Nam // 10.7626° N, 106.6602° E',
      yearsBadge: 'Năm KN',
    },

    impact: {
      eyebrow: 'Con Số Biết Nói',
      title: 'Tác Động Đo Lường Được',
      subtitle: 'Kết quả định lượng từ các dự án phân tích tài chính và dữ liệu thực tế.',
      metrics: [
        { value: 25, suffix: '%', label: 'Rút ngắn thời gian báo cáo', sub: 'nhờ tự động hóa Python + Power BI' },
        { value: 5, suffix: 'M+', label: 'Dòng dữ liệu bán hàng xử lý', sub: 'Dữ liệu affiliate Shopee' },
        { value: 37, suffix: '%', label: 'Tăng doanh thu hoa hồng (MoM)', sub: 'nhờ tối ưu lịch livestream & chi phí KOL' },
        { value: 16, suffix: '', label: 'Chứng chỉ Data', sub: 'IBM Data Analytics + dbt Labs' },
      ],
      chartTitle: 'Thời gian hoàn thành báo cáo (giờ / kỳ)',
      chartBefore: 'Trước',
      chartAfter: 'Sau',
    },

    techstack: {
      title: 'Năng Lực Cốt Lõi',
      card1Title: 'Hoạch Định & Phân Tích Kinh Doanh',
      card1Desc:
        'Kết nối dữ liệu thô với các quyết định kinh doanh chiến lược. Chuyên sâu về Mô hình Tài chính, Đánh giá ROI và xác định các yếu tố thúc đẩy kinh doanh trọng yếu trong các lĩnh vực Thương mại điện tử, F&B (Coffee Shop) và Tài chính thông qua phân tích biến động.',
      card1Tags: ['Mô hình Tài chính', 'Phương pháp DCF', 'Phân tích Biến động', 'Theo dõi KPI'],
      eduTitle: 'Học Vấn',
      eduDegree: 'Cử nhân Kinh doanh (Tài chính Ứng dụng & Fintech)',
      eduSchool: 'UEH - ISB / Western Sydney University',
      gpaLabel: 'GPA',
      dataTitle: 'Phân Tích Dữ Liệu & Kinh Tế Lượng',
      dataDesc:
        'Kinh nghiệm thực tế trong việc trích xuất, làm sạch và trực quan hóa dữ liệu để xây dựng mô hình kinh tế lượng và tự động hóa báo cáo quản trị.',
      radarTitle: 'Bản đồ Năng lực',
      radarAxes: ['Python', 'SQL', 'Power BI', 'Excel', 'Kinh tế lượng', 'Mô hình TC'],
      skills: [
        {
          name: 'Python',
          level: 'Cơ bản',
          desc: 'Pandas, Statsmodels, Scikit-learn. Ứng dụng trong mô hình hồi quy FGLS và dự báo vĩ mô theo chuỗi thời gian.',
        },
        {
          name: 'SQL & Power BI',
          level: 'Thành thạo',
          desc: 'Truy vấn dữ liệu, xây dựng pipeline ETL và dashboard tương tác, giúp giảm 25% thời gian xử lý báo cáo.',
        },
        {
          name: 'Excel Nâng Cao',
          level: 'Chuyên sâu',
          desc: 'Power Query, Macros, công thức mảng phức tạp. Sử dụng nhiều cho định giá doanh nghiệp (DCF) và phân tích kịch bản.',
        },
      ],
    },

    experience: {
      title: 'Hành Trình Sự Nghiệp',
      items: [
        {
          role: 'Business Analyst',
          company: 'ON25 Corporation',
          period: 'Tháng 10/2025 - Hiện tại',
          keyStat: 'Thúc đẩy doanh thu hoa hồng tăng 37% (MoM)',
          highlights: [
            'Thúc đẩy doanh thu hoa hồng tăng 37% (MoM) bằng cách phân tích hiệu suất bán hàng để phân bổ lại lịch livestream, nhân sự live và chi phí KOL vào các khung giờ đạt hiệu quả cao nhất.',
            'Cải thiện biên lợi nhuận thông qua mô hình hóa tỷ lệ hoa hồng, tỷ lệ chuyển đổi NMV/GMV và NMC trên mỗi đơn hàng theo từng khung giờ, giúp tối ưu hóa lịch livestream vào các khoảng thời gian mang lại doanh thu cao nhất.',
            'Tinh gọn hệ thống báo cáo quản trị bằng Python, Power BI và Excel nâng cao, xử lý hơn 2 triệu dòng dữ liệu mỗi chu kỳ và giảm 25% thời gian lập báo cáo, đồng thời nâng cao tính toàn vẹn của dữ liệu.',
            'Dẫn dắt các sáng kiến kiểm toán dữ liệu nhằm cải thiện độ tin cậy của dữ liệu giữa các phòng ban, chuẩn hóa định nghĩa chỉ số và đối soát các nguồn cấp dữ liệu cho lớp báo cáo.',
            'Xây dựng và duy trì các mô hình tài chính tích hợp phục vụ lập ngân sách năm, dự báo cuốn chiếu hàng tháng và lập kế hoạch theo kịch bản, làm việc trực tiếp với CEO.',
          ],
        },
        {
          role: 'Chuyên viên Khách hàng Doanh nghiệp tập sự',
          company: 'Ngân hàng TMCP Quân đội (MB Bank)',
          period: 'Tháng 08/2024 - Tháng 05/2025',
          keyStat: 'Phân tích BCTC & Hỗ trợ quyết định tín dụng',
          highlights: [
            'Phân tích chi tiết báo cáo tài chính để đánh giá khả năng sinh lời, thanh khoản và cơ cấu vốn của khách hàng, hỗ trợ các quyết định tín dụng dựa trên dữ liệu.',
            'Đánh giá hiệu quả hoạt động và benchmark theo ngành để xác định vị thế thị trường của các doanh nghiệp SME.',
            'Tìm kiếm và phát triển khách hàng doanh nghiệp mới, xây dựng nguồn khách hàng tiềm năng từ nghiên cứu thị trường, giới thiệu và tiếp cận trực tiếp để mở rộng danh mục SME.',
          ],
        },
      ],
    },

    dashboards: {
      title: 'Dashboard Power BI',
      subtitle: 'Các dashboard tương tác mình xây để biến dữ liệu vận hành thô thành quyết định.',
      maskNote: 'Số liệu đã ẩn theo thỏa thuận bảo mật với khách hàng',
      pageNote: 'Ảnh xem trước — chỉ là một trang trong báo cáo Power BI nhiều trang.',
      items: [
        {
          company: 'ON25 Corporation',
          title: 'Hiệu quả Bán hàng Affiliate & Ngành hàng',
          desc: 'Phân tích bán hàng trên 5M+ dòng dữ liệu affiliate Shopee — phân tích hiệu quả bán hàng, nhân sự live và chi phí KOL để tối ưu hóa lịch livestream, thúc đẩy doanh thu hoa hồng tăng 37% (MoM).',
          tags: ['Power BI', 'DAX', 'Sales Analytics'],
        },
        {
          company: 'Concentrix × MeadJohnson (Outsource)',
          title: 'Hiệu suất Telesales NUA',
          desc: 'Dashboard phễu chiến dịch telesales — theo dõi phễu cuộc gọi (completed → connected → quality → order → NUA), mức đạt mục tiêu, tỉ lệ chuyển đổi và phân bổ theo khu vực.',
          tags: ['Power BI', 'Funnel Analysis', 'KPI Tracking'],
        },
        {
          company: 'Dự án cá nhân',
          title: 'Xom Ecommerce Data Pipeline',
          desc: 'Pipeline ELT tự động hàng ngày (Airflow, dlt, Snowflake, dbt) trích xuất dữ liệu từ SQL Server để phục vụ 3 dashboard Power BI. Cấu trúc star schema với các dimension dùng chung và 10 dbt tests đảm bảo chất lượng dữ liệu.',
          tags: ['Power BI', 'Data Engineering', 'dbt', 'Airflow', 'Snowflake'],
          url: 'https://app.powerbi.com/view?r=eyJrIjoiOTAwYjNmMjYtZjRmNS00Y2I0LTgxMjYtZjYxYjNkNzhmZWRkIiwidCI6IjM3MGZiM2I4LTMzMDYtNDg5MC05MDYzLWNjMDhiZTc4ODI1NyIsImMiOjEwfQ%3D%3D'
        },
        {
          company: 'Dự án cá nhân',
          title: 'Dự án đầu tiên: DBT pipeline',
          desc: 'Dự án data engineering end-to-end trực quan hóa đầu ra của pipeline ELT. Hiển thị tổng quan doanh số, số lượng đơn hàng, tổng số lượng và doanh thu theo thời gian, phân khúc theo thị trường và RFM.',
          tags: ['Power BI', 'Data Engineering', 'dbt'],
          url: 'https://app.powerbi.com/view?r=eyJrIjoiNDQ3ZWEzN2QtYjA4ZC00NWVkLTg4NjMtMThlNWRiOWU2N2I3IiwidCI6IjM3MGZiM2I4LTMzMDYtNDg5MC05MDYzLWNjMDhiZTc4ODI1NyIsImMiOjEwfQ%3D%3D&embedImagePlaceholder=true'
        }
      ],
    },

    projects: {
      title: 'Dự Án Tiêu Biểu',
      all: 'Tất cả',
      techStackLabel: 'CÔNG NGHỆ',
      viewReport: 'Xem báo cáo',
      liveDemo: 'Mở Web App',
      academicBadge: 'Học thuật',
      githubTitle: 'Hoạt động GitHub',
      githubSub: 'Biểu đồ đóng góp (12 tháng gần nhất)',
      categories: {
        'data-engineering': 'Kỹ thuật Dữ liệu',
        'learning-platform': 'Nền tảng Học tập',
        'ai-agent': 'AI Agent',
        'data-crawling': 'Thu thập Dữ liệu',
        'financial-analysis': 'Phân tích Tài chính',
        econometrics: 'Kinh tế lượng',
      },
    },

    pagination: {
      prev: 'Trang trước',
      next: 'Trang sau',
      itemsPerPage: 'Hiển thị',
      of: 'trên'
    },

    certifications: {
      title: 'Chứng chỉ',
      skillsAcquired: 'Kỹ năng đạt được:',
      issued: 'Cấp ngày',
      grade: 'Kết quả',
      verify: 'Xác minh chứng chỉ',
      all: 'Tất cả',
      categories: {
        'data-science': 'Khoa học Dữ liệu & AI',
        'data-analysis': 'Phân tích Dữ liệu',
      },
    },

    contact: {
      title: 'Kết Nối Với Tôi',
      subtitle: 'Sẵn sàng cho các cơ hội mới trong lĩnh vực Phân tích Dữ liệu và Tài chính.',
      emailLabel: 'Email',
      phoneLabel: 'Điện thoại',
      locationLabel: 'Địa điểm',
      locationValue: 'TP. Hồ Chí Minh, Việt Nam',
    },

    footer: {
      rights: 'Bảo lưu mọi quyền.',
    },
  },
};

export default translations;
