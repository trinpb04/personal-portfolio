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
        { value: 10, suffix: '%', label: 'Profit uplift driven', sub: 'via conversion rate & avg. commission analysis' },
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
          role: 'Business Planning and Analysis',
          company: 'ON25 Corporation',
          period: 'October 2025 - Present',
          keyStat: 'Reduced reporting turnaround time by 25%',
          highlights: [
            'Building and maintaining integrated financial models to drive annual budgeting, monthly rolling forecasts, and scenario-based planning.',
            'Executing variance and gap analysis to identify key business drivers and evaluating ROI for strategic investments.',
            'Streamlined management reporting using Python, Power BI, and Advanced Excel, reducing reporting turnaround time by 25% and enhancing data integrity.',
            'Working directly with the CEO and other departments to translate complex financial metrics into actionable business insights.',
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
            "Built financial models to estimate clients' repayment capacity, debt service coverage ratios (DSCR), and sensitivity to interest rate changes.",
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
          desc: 'Sales analytics over 5M+ Shopee affiliate rows — tracking GMV, commission (CMS) efficiency, and category/SKU performance to surface the highest-margin drivers behind a 10% profit uplift.',
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
        { value: 10, suffix: '%', label: 'Tăng lợi nhuận đóng góp', sub: 'qua phân tích conversion rate & % hoa hồng TB' },
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
          role: 'Hoạch định & Phân tích Kinh doanh (BP&A)',
          company: 'ON25 Corporation',
          period: 'Tháng 10/2025 - Hiện tại',
          keyStat: 'Giảm 25% thời gian xử lý báo cáo',
          highlights: [
            'Xây dựng và duy trì các mô hình tài chính tích hợp phục vụ lập ngân sách năm, rolling forecast hàng tháng và lập kế hoạch theo kịch bản.',
            'Thực hiện phân tích biến động (variance) và phân tích khoảng cách (gap) để xác định các yếu tố thúc đẩy kinh doanh trọng yếu, đánh giá ROI cho các khoản đầu tư chiến lược.',
            'Tinh gọn hệ thống báo cáo quản trị bằng Python, Power BI và Excel nâng cao, giảm 25% thời gian xử lý và nâng cao tính toàn vẹn dữ liệu.',
            'Làm việc trực tiếp với CEO và các phòng ban để chuyển hóa các chỉ số tài chính phức tạp thành insight kinh doanh khả thi.',
          ],
        },
        {
          role: 'Chuyên viên Quan hệ Khách hàng (Trainee RM)',
          company: 'Ngân hàng TMCP Quân đội (MB Bank)',
          period: 'Tháng 08/2024 - Tháng 08/2025',
          keyStat: 'Phân tích BCTC & Hỗ trợ quyết định tín dụng',
          highlights: [
            'Phân tích chi tiết báo cáo tài chính để đánh giá khả năng sinh lời, thanh khoản và cơ cấu vốn của khách hàng, hỗ trợ các quyết định tín dụng dựa trên dữ liệu.',
            'Đánh giá hiệu quả hoạt động và benchmark theo ngành để xác định vị thế thị trường của các doanh nghiệp SME.',
            'Xây dựng mô hình tài chính ước lượng khả năng trả nợ, hệ số bao phủ nợ vay (DSCR) và độ nhạy với biến động lãi suất của khách hàng.',
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
          desc: 'Phân tích bán hàng trên 5M+ dòng dữ liệu affiliate Shopee — theo dõi GMV, hiệu quả hoa hồng (CMS) và hiệu suất theo ngành hàng/SKU để tìm ra các yếu tố biên lợi nhuận cao đứng sau mức tăng 10% lợi nhuận.',
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
