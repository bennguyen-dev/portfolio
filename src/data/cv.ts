import type { CVData } from '@/type';

export const CV: CVData = {
  "personal_details": {
    "name": "LE DUY LINH",
    "contact": {
      "email": "bennguyen.dev.vn@gmail.com",
      "phone": "0342 90 96 96",
      "linkedin": "www.linkedin.com/in/bennguyen-dev",
      "other": "github.com/bennguyen-dev",
      "location": "Hanoi, VietNam"
    }
  },
  "summary_objective": "Frontend Developer with 5+ years of building high-performance, scalable web applications using the ReactJS ecosystem. Experienced in optimizing performance, tackling complex UI challenges, and enhancing user experience (UI/UX). Seeking innovative projects focused on performance, UI/UX, and exploring Al applications.",
  "education": [
    {
      "degree": "Bachelor of Engineering",
      "institution": "HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY",
      "start_date": "2016-12",
      "end_date": "2021-04",
      "field": "Electrical Engineering",
      "grades": "Not specified",
      "location": "HANOI, VIETNAM"
    },
    {
      "degree": "Professional Developer of Open Source PHP",
      "institution": "BACHKHOA-APTECH",
      "start_date": "2019-12",
      "end_date": "2020-04",
      "field": "Application Programming Focus",
      "grades": "Not specified",
      "location": "HANOI, VIETNAM"
    }
  ],
  "experience": [
    {
      "company": "Your.rentals",
      "position": "FRONTEND ENGINEER",
      "start_date": "2023-05",
      "end_date": "Present",
      "duration_months": 24,
      "responsibilities": "Collaborated with Product, PO, and Design teams on UX enhancements; Re-architected calendar views; Integrated React into legacy AngularJS; Established shared component library and test suites; Maintained React Native app; Conducted technical interviews.",
      "achievements": "Boosted signup-to-first-booking conversion rate from 13% to 56%. Increased manageable property scope in calendar from ~1k/1yr to >100k/3yrs. Achieved 85% test coverage.",
      "technologies_used": [
        "React",
        "React Query",
        "TanStack Virtual",
        "Mantine UI",
        "Nx",
        "Zustand",
        "Vite",
        "Playwright",
        "Jest",
        "Jira",
        "React Native",
        "AngularJS"
      ],
      "location": "Skane, Malmö"
    },
    {
      "company": "VMO Holding",
      "position": "FRONTEND DEVELOPER - TEAM LEADER",
      "start_date": "2021-12",
      "end_date": "2023-04",
      "duration_months": 17,
      "responsibilities": "Led a team of 6 developers for an IoT/ML analytics platform (ASSET-ANALYTIC); Designed and implemented dashboard features for large datasets and ML workflows; Optimized chart loading; Co-developed a workflow automation tool; Mentored interns; Provided technical consultation for optimizing charts/tables (ASSET-MANAGEMENT); Developed real-time monitoring features.",
      "achievements": "Reduced workflow setup time by an estimated 50%. Significantly improved large chart loading performance via .txt download. Mentored and trained 10 interns.",
      "technologies_used": [
        "React",
        "SignalR",
        "Plotly.js",
        "MobX-React",
        "Ant Design",
        "Azure DevOps",
        "JavaScript",
        "TypeScript"
      ],
      "location": "Hanoi, Vietnam"
    },
    {
      "company": "Bright Software Solution",
      "position": "FULL-STACK DEVELOPER",
      "start_date": "2020-05",
      "end_date": "2021-12",
      "duration_months": 20,
      "responsibilities": "Gained foundational full-stack experience using ReactJS alongside backend services. Built core portal modules and APIs for a School Management System (MARIO). Developed backend services, integrated search, and implemented user auth/multi-language for a Movie Info App (nJoyShow). Created custom WordPress blocks/modules syncing with a Laravel API for a Business News Site (PUBLIC INSIGHT).",
      "achievements": "Delivered key modules for multiple applications across different domains.",
      "technologies_used": [
        "React",
        "PHP",
        ".NET Core",
        "Node.js",
        "Express.js",
        "Laravel",
        "WordPress",
        "Elasticsearch",
        "MSSQL",
        "MongoDB",
        "Algolia Search",
        "Firebase",
        "AWS",
        "REST APIs",
        "JavaScript"
      ],
      "location": "Hanoi, Vietnam"
    }
  ],
  "projects": [
    {
      "name": "Your.rentals Platform Enhancements",
      "description": "Enhancing the core platform for property rentals, focusing on UX, performance, and modernization.",
      "start_date": "2023-05",
      "end_date": "Present",
      "duration_months": 24,
      "role": "Frontend Engineer",
      "skills": {
        "technical": {
          "programming_languages": [
            "JavaScript",
            "TypeScript"
          ],
          "frameworks": [
            "AngularJS"
          ],
          "libraries": [
            "React",
            "React Query",
            "TanStack Virtual",
            "Mantine UI",
            "Zustand",
            "React Native"
          ],
          "databases": [],
          "tools": [
            "Nx",
            "Vite",
            "Playwright",
            "Jest",
            "Jira",
            "Git"
          ],
          "methodologies": [
            "Agile",
            "Performance Optimization",
            "UI/UX Principles",
            "Monorepo"
          ]
        },
        "soft": [
          "Collaboration",
          "Technical Interviewing"
        ]
      },
      "functionalities": "UX Enhancements (Signup/Booking flow), Scalable Calendar Views (Multi/Single), React component integration into AngularJS, Shared Component Library, Test Suites, React Native App Maintenance",
      "team_size": "Not specified (mentions Product, PO, Design teams)",
      "roles_involved": [
        "Frontend Engineer",
        "Product Manager",
        "Product Owner",
        "Designer"
      ],
      "purpose": "Improve user experience, conversion rates, platform performance, and development efficiency for a property rental platform.",
      "customer_location": "Skane, Malmö (implied)",
      "status": "In Progress",
      "challenges": "Integrating modern React components into a legacy AngularJS application, Scaling calendar views for a large number of properties.",
      "outcomes": "Signup-to-first-booking conversion rate increased from 13% to 56%. Calendar performance significantly improved to handle >100k properties over 3 years. Established robust development practices (Monorepo, testing).",
      "metadata": [
        "Associated with Your.rentals work experience."
      ]
    },
    {
      "name": "ASSET-ANALYTIC (Machine Learning System)",
      "description": "Platform for data experts to visualize IoT datasets, manage ML model training workflows, and perform analytics.",
      "start_date": "2021-12",
      "end_date": "2023-01",
      "duration_months": 13,
      "role": "Team Leader (Frontend)",
      "skills": {
        "technical": {
          "programming_languages": [
            "JavaScript",
            "TypeScript"
          ],
          "frameworks": [],
          "libraries": [
            "React",
            "Plotly.js",
            "MobX-React",
            "Ant Design"
          ],
          "databases": [],
          "tools": [
            "Azure DevOps",
            "Git",
            "Jira"
          ],
          "methodologies": [
            "Agile",
            "Performance Optimization"
          ]
        },
        "soft": [
          "Team Leadership",
          "Mentorship",
          "Communication",
          "Task Management",
          "Progress Reporting"
        ]
      },
      "functionalities": "Dashboard for massive IoT data visualization (tables, charts, heatmaps), ML model training workflow management, Drag-and-drop workflow builder (ingest -> normalize -> predict -> notify) with real-time validation, Large dataset download (.txt).",
      "team_size": "7 (1 Team Lead + 6 Developers)",
      "roles_involved": [
        "Frontend Developer",
        "Team Leader",
        "PM/PO"
      ],
      "purpose": "To build an analytics platform for IoT/Machine Learning data experts.",
      "customer_location": "Hanoi, Vietnam (implied)",
      "status": "Completed",
      "challenges": "Handling visualization of massive datasets (millions of rows), API timeouts with large data transfers, Designing an intuitive workflow builder.",
      "outcomes": "Successfully delivered the platform. Reduced workflow setup time by 50%. Improved chart loading performance and reliability.",
      "metadata": [
        "Associated with VMO Holding work experience."
      ]
    },
    {
      "name": "ASSET-MANAGEMENT (Device Metric Management)",
      "description": "System focused on displaying and monitoring device metrics, requiring performance optimization for charts and tables.",
      "start_date": "2023-02",
      "end_date": "2023-04",
      "duration_months": 3,
      "role": "Frontend Developer / Performance Consultant",
      "skills": {
        "technical": {
          "programming_languages": [
            "JavaScript",
            "TypeScript"
          ],
          "frameworks": [],
          "libraries": [
            "React",
            "SignalR",
            "Plotly.js",
            "MobX-React",
            "Ant Design"
          ],
          "databases": [],
          "tools": [
            "Azure DevOps",
            "Git",
            "Jira"
          ],
          "methodologies": [
            "Performance Optimization"
          ]
        },
        "soft": [
          "Technical Consulting"
        ]
      },
      "functionalities": "Real-time device monitoring using SignalR, Permission-based UI controls, Optimized charts and tables for large datasets.",
      "team_size": "Not specified",
      "roles_involved": [
        "Frontend Developer"
      ],
      "purpose": "To provide a performant interface for monitoring device metrics in real-time.",
      "customer_location": "Hanoi, Vietnam (implied)",
      "status": "Completed",
      "challenges": "Optimizing performance of charts and tables displaying large datasets.",
      "outcomes": "Provided solutions for performance optimization. Contributed features for real-time monitoring and UI controls.",
      "metadata": [
        "Associated with VMO Holding work experience."
      ]
    },
    {
      "name": "MARIO (School Management System)",
      "description": "A system for managing school operations with portals for different user types.",
      "start_date": "2020-12",
      "end_date": "2021-12",
      "duration_months": 12,
      "role": "Full-Stack Developer",
      "skills": {
        "technical": {
          "programming_languages": [
            "JavaScript",
            "C#"
          ],
          "frameworks": [
            ".NET Core"
          ],
          "libraries": [
            "React"
          ],
          "databases": [
            "MSSQL"
          ],
          "tools": [
            "Git",
            "REST APIs"
          ],
          "methodologies": []
        },
        "soft": []
      },
      "functionalities": "Core portal modules (Admin, Teacher, Parent, Student), Backend APIs.",
      "team_size": "Not specified",
      "roles_involved": [
        "Full-Stack Developer"
      ],
      "purpose": "To create a comprehensive school management system.",
      "customer_location": "Hanoi, Vietnam (implied)",
      "status": "Completed",
      "challenges": "Not specified",
      "outcomes": "Delivered core modules for the system.",
      "metadata": [
        "Associated with Bright Software Solution work experience."
      ]
    },
    {
      "name": "nJoyShow (Movie Information App)",
      "description": "An application providing movie information, user authentication, and multi-language support.",
      "start_date": "2020-08",
      "end_date": "2020-12",
      "duration_months": 4,
      "role": "Full-Stack Developer",
      "skills": {
        "technical": {
          "programming_languages": [
            "JavaScript"
          ],
          "frameworks": [
            "Node.js",
            "Express.js"
          ],
          "libraries": [
            "React"
          ],
          "databases": [
            "MongoDB"
          ],
          "tools": [
            "Algolia Search",
            "Firebase",
            "Git",
            "REST APIs"
          ],
          "methodologies": []
        },
        "soft": []
      },
      "functionalities": "Backend services, User authentication, Multi-language features, Search integration.",
      "team_size": "Not specified",
      "roles_involved": [
        "Full-Stack Developer"
      ],
      "purpose": "To create a movie information application.",
      "customer_location": "Hanoi, Vietnam (implied)",
      "status": "Completed",
      "challenges": "Not specified",
      "outcomes": "Developed backend services and key user-facing features.",
      "metadata": [
        "Associated with Bright Software Solution work experience."
      ]
    },
    {
      "name": "PUBLIC INSIGHT (Business News Site)",
      "description": "A business news website with custom WordPress elements synced with a backend API.",
      "start_date": "2020-05",
      "end_date": "2020-10",
      "duration_months": 5,
      "role": "Full-Stack Developer",
      "skills": {
        "technical": {
          "programming_languages": [
            "JavaScript",
            "PHP"
          ],
          "frameworks": [
            "Laravel",
            "WordPress"
          ],
          "libraries": [
            "React"
          ],
          "databases": [],
          "tools": [
            "Git",
            "REST APIs",
            "AWS"
          ],
          "methodologies": []
        },
        "soft": []
      },
      "functionalities": "Custom WordPress blocks, Custom WordPress admin modules, Data synchronization with Laravel backend API.",
      "team_size": "Not specified",
      "roles_involved": [
        "Full-Stack Developer"
      ],
      "purpose": "To build a business news site with custom WordPress features.",
      "customer_location": "Hanoi, Vietnam (implied)",
      "status": "Completed",
      "challenges": "Not specified",
      "outcomes": "Created custom WordPress components and data synchronization.",
      "metadata": [
        "Associated with Bright Software Solution work experience."
      ]
    },
    {
      "name": "SnapOG - Dynamic Open Graph Image Generator",
      "description": "A Micro-SaaS application allowing users to generate dynamic Open Graph images for their websites automatically based on URL parameters.",
      "start_date": "2024-07",
      "end_date": "Present",
      "duration_months": 10,
      "role": "Software Engineer",
      "skills": {
        "technical": {
          "programming_languages": [
            "JavaScript",
            "TypeScript"
          ],
          "frameworks": [
            "Next.js",
            "Node.js"
          ],
          "libraries": [
            "React",
            "Shadcn UI"
          ],
          "databases": [
            "PostgreSQL"
          ],
          "tools": [
            "Prisma",
            "Playwright",
            "AWS EC2",
            "AWS S3",
            "AWS CloudFront",
            "Vercel",
            "Polar.sh",
            "Git"
          ],
          "methodologies": [
            "Micro-SaaS"
          ]
        },
        "soft": []
      },
      "functionalities": "Dynamic Open Graph image generation based on URL parameters, Frontend UI, API routes, Data management, Image generation logic via Playwright on a service worker, Image storage and CDN delivery, Potential monetization integration.",
      "team_size": "1",
      "roles_involved": [
        "Software Engineer"
      ],
      "purpose": "To provide a service for automatically generating dynamic Open Graph images.",
      "customer_location": "Global (Web Application)",
      "status": "In Progress",
      "challenges": "Implementing reliable image generation using Playwright in a service worker, Architecting a scalable Micro-SaaS.",
      "outcomes": "Developed and deployed the application on Vercel with AWS infrastructure for image processing and delivery.",
      "metadata": [
        "Personal Project",
        "Website: snapog.com"
      ]
    }
  ],
  "skills": {
    "technical": {
      "programming_languages": [
        "JavaScript",
        "TypeScript",
        "PHP",
        "C#"
      ],
      "frameworks": [
        "React",
        "Next.js",
        "AngularJS",
        "Remix",
        "Node.js",
        "Express.js",
        ".NET Core",
        "Laravel",
        "WordPress"
      ],
      "libraries": [
        "Mantine UI",
        "Ant Design",
        "Zustand",
        "MobX-React",
        "TanStack Query",
        "TanStack Virtual",
        "Plotly.js",
        "SignalR",
        "Shadcn UI",
        "Tailwind CSS"
      ],
      "databases": [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "DynamoDB",
        "Elasticsearch",
        "MSSQL",
        "Prisma"
      ],
      "tools": [
        "Playwright",
        "Jest",
        "AWS S3",
        "AWS CloudFront",
        "AWS EC2",
        "Azure DevOps",
        "Vercel",
        "Firebase",
        "Docker",
        "Git",
        "Jira",
        "Nx",
        "Vite",
        "REST APIs",
        "Algolia Search",
        "Polar.sh"
      ],
      "methodologies": [
        "Monorepo",
        "Performance Optimization",
        "UI/UX Principles",
        "Agile",
        "Micro-SaaS"
      ]
    },
    "soft": [
      "Team Leadership",
      "Mentorship",
      "Collaboration",
      "Communication",
      "Technical Interviewing"
    ]
  },
  "certifications": [
    {
      "name": "The Degree of engineer in Electrical Engineering",
      "organization": "HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY",
      "date": "2021-11",
      "expiration": "Not specified",
      "credential_id": "Not specified"
    },
    {
      "name": "Professional Developer on Open Source PHP",
      "organization": "BachKhoa Aptech",
      "date": "2020-11",
      "expiration": "Not specified",
      "credential_id": "Not specified"
    }
  ],
  "volunteer_work": [],
  "publications": [],
  "professional_affiliations": [],
  "awards": [
    {
      "name": "BKAP Code War 2020 - Second Prize",
      "description": "Second Prize in a coding competition.",
      "year": "2020",
      "organization": "BKAP (presumably BachKhoa Aptech)"
    },
    {
      "name": "Violympic Math Competition for Grade 9 (2012) - National Bronze Medal",
      "description": "National Bronze Medal in a mathematics competition.",
      "year": "2012",
      "organization": "Violympic"
    }
  ],
  "languages": [
    {
      "language": "Vietnamese",
      "proficiency": "Native"
    },
    {
      "language": "English",
      "proficiency": "Good Reading/Writing, Intermediate Speaking/Listening"
    }
  ],
  "interests": [
    "Performance Optimization",
    "UI/UX",
    "AI applications",
    "Micro-SaaS development"
  ],
  "job_keywords": [
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Performance Optimization",
    "UI/UX",
    "Scalable Web Applications",
    "Agile",
    "Monorepo",
    "Team Leader",
    "Full-Stack Developer",
    "AWS",
    "Node.js",
    "REST APIs",
    "Testing",
    "Playwright",
    "Jest",
    "CI/CD",
    "Micro-SaaS",
    "Component Library",
    "Legacy Modernization",
    "AngularJS",
    "TanStack Query",
    "Mantine UI",
    "Ant Design",
    "Data Visualization",
    "Plotly.js",
    "SignalR",
    "Cloud",
    "DevOps"
  ]
}