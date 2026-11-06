// terminal-cv/config.js
// Put ALL your personal data here. No logic.
// Content matches the CV in resume.pdf.

window.CV_CONFIG = {
  profile: {
    name: "Giorgos Tsilivis",
    title: "Cloud/DevOps Engineer",
    location: "Athens, Greece",
    email: "tsilivisgeo@gmail.com",
    website: null, // this site itself, so `about` doesn't repeat it
    github: "https://github.com/giorgostsilivis",
    linkedin: "https://www.linkedin.com/in/tsilivisgeo/",
    x: "https://x.com/tsilivisgeo",
    resumePdf: "resume.pdf", // set to null if you don't have one yet
    summary:
      "DevOps Engineer with seven years of experience building, automating, and supporting " +
      "infrastructure and microservice-based platforms. Skilled in Python, Linux, Kubernetes, " +
      "AWS, Azure, CI/CD, and GitOps, with a focus on reliable systems and simpler, faster " +
      "deployments. Currently exploring AI agents, RAG pipelines, and local LLMs to speed up " +
      "delivery and support work."
  },

  // Each key is printed as its own line by the `skills` command
  skills: {
    "Languages": ["Python", "Bash", "JavaScript", "SQL"],
    "Cloud & OS": ["AWS", "Azure", "Google Cloud", "Linux"],
    "Kubernetes & containers": ["Kubernetes", "AKS", "EKS", "GKE", "OpenShift", "Nutanix", "Docker", "Podman", "Helm", "Istio"],
    "CI/CD & GitOps": ["Jenkins", "GitLab", "GitHub Actions", "Azure DevOps", "Flux CD", "Argo CD"],
    "Infrastructure as code": ["Terraform", "CloudFormation", "Ansible"],
    "Security": ["HashiCorp Vault", "Azure Key Vault", "cert-manager"],
    "Data & testing": ["Liquibase", "Apache Airflow", "Grafana k6", "ELK"]
  },

  experience: [
    {
      company: "Qualco Technology",
      role: "DevOps Engineer",
      period: "Oct 2023–Present",
      bullets: [
        "Lead DevOps engineering for the Qualco Supply Chain Finance platform, serving enterprise banking customers across multiple regions",
        "Cut production deployment time from one working day to 30–40 minutes through pipeline optimization, deployment automation, and GitOps adoption",
        "Designed and supported microservice architectures and Kubernetes deployment workflows across AKS, OpenShift, and Nutanix",
        "Built and maintained CI/CD and GitOps pipelines with Jenkins, GitLab, Azure DevOps, Flux CD, and Argo CD",
        "Led release planning and coordinated production deployments with QA and development teams",
        "Developed automation tooling in Bash, Python, and JavaScript to streamline operations and reduce manual work",
        "Implemented centralized secrets management with Azure Key Vault and HashiCorp Vault",
        "Supported database migrations with Liquibase and validated production readiness with Grafana k6 load tests",
        "Worked with development teams supporting Java and Angular applications on Tomcat, Apache, and Nginx",
        "Provided production support, including off-hours incidents, for banking clients in the UAE, Saudi Arabia, Qatar, Jordan, and Greece"
      ]
    },
    {
      company: "RocketX",
      role: "Cloud/DevOps Engineer (contract)",
      period: "Oct 2022–Oct 2023",
      bullets: [
        "Took over the Magnify platform from the external software house that had been building it, moving its code, infrastructure, and operations in-house",
        "Migrated all repositories from Bitbucket to GitHub and created CI/CD workflows with GitHub Actions",
        "Launched an AWS EKS cluster to run the whole platform, with CloudWatch monitoring, automated certificate renewal (cert-manager), and Datree policy checks",
        "Codified the AWS infrastructure (two EKS clusters, VPCs, RDS, S3, ElastiCache, Lambda) in Terraform and CloudFormation",
        "Designed and launched an Apache Airflow setup to automate data ingestion from HubSpot CRM and other sources",
        "Developed two serverless APIs with AWS Lambda and API Gateway",
        "Led day-to-day system maintenance and operations"
      ]
    },
    {
      company: "Intracom Telecom",
      role: "Software Engineer (contract)",
      period: "Mar 2022–Sep 2022",
      bullets: [
        "Member of Ericsson's multinational Deployment Unit, virtualizing client hosts and deploying Ericsson Cognitive Software (DOP) on the new VMs",
        "Developed Ansible playbooks to automate the deployment of Ericsson Cognitive Software",
        "Carried out hands-on deployments for TIM Italy and ZAIN Iraq"
      ]
    },
    {
      company: "Deepsea Technologies",
      role: "Integration Engineer",
      period: "May 2020–Mar 2022",
      bullets: [
        "Developed an API integrating client ERP systems with AWS RDS, plus a scheduled mail parser for real-time email ingestion",
        "Containerized data engineering applications and internal tools as part of the move from monolith to microservices",
        "Automated AWS infrastructure with Terraform: CloudFront and S3 static hosting, and EC2 for internal tools and data services",
        "Took part in day-to-day maintenance of the company's AWS infrastructure and the agents on clients' dedicated VMs"
      ]
    },
    {
      company: "Cosmote",
      role: "Technical Support",
      period: "Jul 2019–Feb 2020",
      bullets: [
        "Provided 2nd-level B2B technical support, mainly on networking and VoIP issues"
      ]
    },
    {
      company: "University of Patras",
      role: "Research & Development Intern",
      period: "Jan 2018–May 2019",
      bullets: [
        "Converted legacy C code for passive seismic data simulation to Python and MATLAB at the Patras Seismology Lab",
        "Spent four months on image/video processing with Python and FFmpeg in Irida Labs' AI team"
      ]
    }
  ],

  education: [
    {
      degree: "Postgraduate Degree, Web Engineering",
      school: "Harokopio University, Athens",
      period: "Oct 2019–Sep 2021",
      note: "Grade: 9.48/10"
    },
    {
      degree: "BSc Physics",
      school: "University of Patras",
      period: "Oct 2013–Dec 2018",
      note: "Grade: 7.11/10"
    }
  ],

  projects: [
    {
      name: "Keycloak on GKE + Cloud SQL PoC",
      period: "Jul 2026",
      link: "https://github.com/giorgostsilivis/keycloak-gke-poc",
      desc: "3-replica HA Keycloak cluster on GKE using modular Terraform and Helm, backed by private Cloud SQL over Private Service Connect, with managed TLS, tested Cloud Monitoring alerts, and a sample GitHub Actions pipeline."
    },
    {
      name: "Spindaemon",
      period: "Feb 2023–May 2023",
      link: null,
      desc: "GPT-3.5 Viber chatbot that rewrote direct messages in a more professional style and gave insights on communication effectiveness."
    },
    {
      name: "Synthetic Vessel Trajectories Generation Platform",
      period: "Feb 2021–Oct 2021",
      link: null,
      desc: "Full-stack AI platform (FastAPI, Vanilla JS) combining LSTM networks, a physics kinematics model, and XGBoost to generate vessel trajectories, with REST APIs and Leaflet.js visualization."
    }
  ],

  hobbies: ["Traveling", "Board Games", "Movies", "Basketball", "Combat Sports Nerd", "Beer & Burger Addict"]
};
