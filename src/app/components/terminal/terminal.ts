import { Component, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TerminalLine {
  text: string;
  isCommand: boolean;
  isError?: boolean;
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.scss',
})
export class TerminalComponent implements AfterViewInit {
  @ViewChild('terminalBody') terminalBody!: ElementRef;
  @ViewChild('commandInput') commandInput!: ElementRef;

  currentPath = 'ghizlane@portfolio:~$';
  command = '';
  lines: TerminalLine[] = [];

  resumeData = {
    profile: "Data Analyst with hands-on experience building interactive dashboards and reports (Power BI, Streamlit) and turning raw, multi-source data into clear, business-oriented insights. Skilled in SQL, data modelling, and KPI tracking, with a strong foundation in ETL workflows and data-quality assurance built while processing 10,000+ records daily from 20+ sources. Comfortable partnering directly with business teams to understand requirements and deliver fast, high-impact outputs in fast-paced, remote-first environments. Master's degree in Data Science and Intelligent Systems.",
    experience: [
      {
        company: 'Hasta - Casablanca',
        role: 'Data Analyst & ML Engineer',
        date: 'May 2025 - Present',
        tasks: [
          "Built monitoring and BI dashboards (Streamlit) tracking pipeline health, data freshness, and anomalies across 22 data tables, turning raw operational data into clear, actionable KPIs",
          "Built and maintained ETL pipelines and data models processing 10,000+ records daily from 20+ heterogeneous sources, with multi-source normalisation, deduplication, and automated data-quality monitoring in Python",
          "Defined data validation and governance rules ensuring consistency, accuracy, and traceability of structured datasets used for reporting",
          "Orchestrated end-to-end data workflows with cron on EC2 and AWS EventBridge (extraction, normalisation/deduplication, and quality-reporting jobs), ensuring reliable, on-time data delivery",
          "Designed an information-extraction and validation pipeline for images and documents, applying business logic and automated routing of structured data into DynamoDB",
          "Deployed and maintained production data infrastructure on AWS (Lambda, S3, EC2, EventBridge, CloudWatch) and Docker, with CI/CD pipelines (Git, Bash, cron) for fast, reliable delivery",
          "Designed autonomous data-collection agents (Anthropic API), including a WhatsApp-based agent that gathers and structures data directly into PostgreSQL, replacing a fully manual process",
          "Tech Stack: Python, SQL, PostgreSQL, MongoDB, DynamoDB, AWS (Lambda, S3, EC2, EventBridge, CloudWatch), Docker, Streamlit, Scikit-learn, PyTorch, Anthropic API, Gemini Flash, DeepSeek"
        ]
      },
      {
        company: 'Auto Reduc - Nador',
        role: 'Data Scientist',
        date: 'March 2024 - September 2024',
        tasks: [
          "Developed data-quality monitoring dashboards to track pipeline success rates, detect anomalies, and drive corrective actions",
          "Built automated data-extraction pipelines with error handling and retry logic, improving the reliability of daily data-collection workflows",
          "Defined data cleaning and validation rules for image datasets (OpenCV, Pandas) to ensure quality and consistency before downstream use",
          "Tech Stack: Python, OpenCV, Pandas, Scikit-learn"
        ]
      },
      {
        company: 'Maktoub Tech - Fes',
        role: 'Data Analyst',
        date: 'May 2023 - August 2023',
        tasks: [
          "Produced analytical reports and Power BI dashboards to track KPIs and support fast, data-driven business decisions",
          "Designed and built ETL pipelines to extract, transform, and load scraped e-commerce data into structured, analysis-ready formats",
          "Implemented data validation rules and quality checks to ensure accuracy, consistency, and completeness of collected datasets",
          "Built an automated scheduling system (SQL Server) for daily data extraction and database updates",
          "Tech Stack: Python, SQL Server, Excel, Power BI"
        ]
      }
    ],
    skills: {
      'BI & Data Visualization': [
        'Power BI (reports, interactive dashboards), Streamlit',
        'Data storytelling for business stakeholders'
      ],
      'Data Modelling & ETL': [
        'ETL pipeline design & automation, data modelling, KPI tracking',
        'Data validation & governance rules, deduplication, data quality monitoring'
      ],
      'Databases & SQL': [
        'SQL, PostgreSQL, SQL Server, MySQL',
        'MongoDB, DynamoDB (NoSQL)'
      ],
      'Orchestration & Automation': [
        'n8n (workflow automation), job scheduling with cron and EventBridge',
        'CI/CD (Git, Bash, cron)'
      ],
      'Cloud & Infrastructure': [
        'AWS (Lambda, S3, EC2, DynamoDB, EventBridge, CloudWatch)',
        'Docker, Linux'
      ],
      'Programming & Data Processing': [
        'Python, Pandas, NumPy, Git, regex, asynchronous processing'
      ],
      'Machine Learning & AI': [
        'Scikit-learn, PyTorch, NLP, computer vision',
        'LLM integration (Anthropic API, Gemini Flash, DeepSeek), prompt engineering, RAG'
      ]
    },
    education: [
      {
        school: 'Faculty of Multidisciplinary Studies of Nador',
        degrees: [
          { degree: "Master's Degree in Data Science and Intelligent Systems", date: '2022 - 2024' }
        ]
      },
      {
        school: 'Faculty of Science and Technology of Settat',
        degrees: [
          { degree: 'Bachelor of Computer Science', date: '2019 - 2022' }
        ]
      }
    ],
    contact: {
      address: 'Casablanca, Maroc',
      email: 'ghizlanechtouki2025@gmail.com',
      phone: '+212 654668209',
      linkedin: 'Ghizlane Chtouki'
    },
    projects: [
      { name: 'AI Customer-Service Chatbot', desc: 'WhatsApp customer-service assistant for Hasta\'s car auctions. It understands text, voice notes, images and PDFs, follows written business rules and a knowledge base, and answers with live car and auction data read from Firestore. It runs as a Docker Compose stack on Oracle Cloud behind Caddy, with HTTPS (Let\'s Encrypt) and password protection, plus a browser chat simulator for safe testing.', stack: 'Python, FastAPI, Gemini, WATI (WhatsApp API), Firestore, Docker Compose, Caddy, Let\'s Encrypt, Oracle Cloud, YAML' },
      { name: 'Vehicle Pricing System', desc: 'Predicts the price of a used car in Morocco from its make, model, year, mileage, body type and source. An ensemble of LightGBM, XGBoost, Random Forest and Gradient Boosting is trained on 16,000+ cars from fleet sellers, dealers and classified ads, with about 10% weighted error on a time-split test set. Quantile models and conformal calibration give a price range, SHAP explains each prediction, and a new model is promoted only when it passes automatic quality gates. Served as a Flask web app on Google Cloud Run; a daily bot prices new auction cars and writes the price back to Firestore.', stack: 'Python, Pandas, NumPy, Scikit-learn, LightGBM, XGBoost, SHAP, Joblib, Flask, Google Cloud Run, Firestore' },
      { name: 'Dynamic Web Scraping', desc: 'Collects car adverts and data from 20+ websites, including JavaScript-heavy pages protected against bots. It uses an undetected Chrome browser, rotating Moroccan proxies and automatic captcha solving, then cleans each record and saves it to DynamoDB through an API. Scrapers run on a schedule on EC2.', stack: 'Python, SeleniumBase (UC mode), Selenium, Requests, DataImpulse proxies, CapSolver, AWS Lambda, DynamoDB, EC2, Cron' },
      { name: 'End-to-End Data Pipelines', desc: 'Moves data from 20+ sources into clean, analysis-ready tables, 10,000+ records a day. Scheduled jobs (cron on EC2 and AWS EventBridge) handle extraction, normalisation, deduplication (one licence plate = one car), quality reports and alerts. Repair rules fix impossible values, such as mileage written in thousands or a price with an extra zero, instead of deleting the rows. The output feeds the pricing model and the dashboards.', stack: 'Python, Pandas, SQL, Cron, EventBridge, PostgreSQL, DynamoDB, Firestore, AWS Lambda, Docker' },
      { name: 'AWS Infrastructure Management', desc: 'Runs Hasta\'s production data platform on AWS. Lambda functions behind API Gateway serve and receive data, DynamoDB stores the scraped listings, S3 keeps photos private and shares them with short-lived links, EC2 runs the scheduled scrapers, EventBridge triggers jobs and CloudWatch watches logs and errors. Code is shipped with Git, Bash and cron-based CI/CD.', stack: 'AWS Lambda, API Gateway, DynamoDB, S3, EC2, EventBridge, CloudWatch, IAM, Boto3, Docker, Linux, Git, Bash' },
      { name: 'Vignette & Opposition Automation', desc: 'Automates two vehicle checks. Vignette: a bot opens vignette.ma in an undetected browser, solves the captcha, goes through rotating Moroccan proxies and saves each car\'s vignette result to Firestore and DynamoDB. Opposition: a daily job asks the NARSA service whether a car has an opposition, through a secure SSH tunnel to an Oracle Cloud server in Casablanca, because the site blocks other networks.', stack: 'Python, SeleniumBase, CapSolver, DataImpulse proxies, Requests, SSH tunnel (SOCKS), Oracle Cloud, AWS EC2, Cron, Firestore, DynamoDB' },
      { name: 'WhatsApp Data-Collection Agents', desc: 'Turns WhatsApp messages into structured car data. A listener connects to WhatsApp groups through WAHA, downloads the full history with photos, and groups messages into one advert per car. An LLM splits each advert into brand, model, price and more; photos go to a private S3 bucket and rows go through a Lambda API. A login-protected review page lets the team check and fix each car. A second agent, built with n8n and the Anthropic API, talks with sellers and buyers and saves the conversations in PostgreSQL. Together they replaced a fully manual process.', stack: 'Python, WAHA (GOWS engine), Docker, n8n, Anthropic API, Gemini, PostgreSQL, AWS Lambda, S3, FastAPI, Vercel, Tkinter' },
      { name: 'Pipeline Monitoring Dashboard', desc: 'One screen to see if the data is healthy. It tracks pipeline health, data freshness and anomalies across 22 data tables, and turns raw operational data into clear KPIs, so problems are seen and fixed fast.', stack: 'Streamlit, Python, Pandas, SQL' }
    ],
    certifications: [
      'Power BI - 365 Data Science',
      'AWS Cloud Fundamentals',
      'Data Analysis for Machine Learning - IBM'
    ]
  };

  ngAfterViewInit() {
    this.focusInput();
    this.addWelcomeMessage();
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
      // Only focus if they click inside the terminal container or aren't selecting text
      const target = event.target as HTMLElement;
      if (target.closest('.terminal-container')) {
          this.focusInput();
      }
  }

  focusInput() {
      if(this.commandInput) {
          this.commandInput.nativeElement.focus();
      }
  }

  addWelcomeMessage() {
      this.lines.push({
          text: "Welcome to Ghizlane CHTOUKI's Terminal Portfolio.\nType 'help' to see available commands.",
          isCommand: false
      });
  }

  handleCommand() {
    const trimmedCommand = this.command.trim();
    if (!trimmedCommand) return;

    this.lines.push({ text: `${this.currentPath} ${trimmedCommand}`, isCommand: true });

    const parts = trimmedCommand.split(' ');
    const mainCommand = parts[0].toLowerCase();

    switch (mainCommand) {
      case 'help':
        this.executeHelp();
        break;
      case 'whoami':
        this.executeWhoami();
        break;
      case 'experience':
        this.executeExperience();
        break;
      case 'skills':
        this.executeSkills();
        break;
      case 'education':
        this.executeEducation();
        break;
      case 'projects':
        this.executeProjects();
        break;
      case 'contact':
        this.executeContact();
        break;
      case 'certifications':
        this.executeCertifications();
        break;
      case 'clear':
        this.lines = [];
        break;
      default:
        this.lines.push({ text: `Command not found: ${mainCommand}. Type 'help' for available commands.`, isCommand: false, isError: true });
    }

    this.command = '';
    this.scrollToBottom();
  }

  executeHelp() {
    const helpText = `
Available commands:
  whoami         - Display profile summary
  experience     - List professional experience
  skills         - Show technical skills
  projects       - List featured projects
  education      - List educational background
  certifications - List certifications
  contact        - Show contact information
  clear          - Clear the terminal screen
  help           - Show this help message
    `;
    this.lines.push({ text: helpText, isCommand: false });
  }

  executeWhoami() {
    this.lines.push({
      text: `Ghizlane CHTOUKI\nData Analyst & ML Engineer\n\n${this.resumeData.profile}`,
      isCommand: false
    });
  }

  executeExperience() {
    let expText = '';
    this.resumeData.experience.forEach(exp => {
      expText += `[${exp.date}] ${exp.company} | ${exp.role}\n`;
      exp.tasks.forEach(task => {
        expText += `  - ${task}\n`;
      });
      expText += '\n';
    });
    this.lines.push({ text: expText, isCommand: false });
  }

  executeSkills() {
    let skillsText = '';
    for (const [category, skillsList] of Object.entries(this.resumeData.skills)) {
      skillsText += `[ ${category} ]\n`;
      skillsList.forEach(skill => {
        skillsText += `  * ${skill}\n`;
      });
      skillsText += '\n';
    }
    this.lines.push({ text: skillsText, isCommand: false });
  }

  executeEducation() {
      let eduText = '';
      this.resumeData.education.forEach(edu => {
          eduText += `${edu.school}\n`;
          edu.degrees.forEach(deg => {
              eduText += `  [${deg.date}] ${deg.degree}\n`;
          });
          eduText += '\n';
      });
      this.lines.push({ text: eduText, isCommand: false });
  }

  executeProjects() {
      let projText = '';
      this.resumeData.projects.forEach(p => {
          projText += `${p.name}\n  ${p.desc}\n  Tools: ${p.stack}\n\n`;
      });
      this.lines.push({ text: projText, isCommand: false });
  }

  executeContact() {
      const c = this.resumeData.contact;
      const contactText = `
Location: ${c.address}
Email:    ${c.email}
Phone:    ${c.phone}
LinkedIn: ${c.linkedin}
      `;
      this.lines.push({ text: contactText, isCommand: false });
  }

  executeCertifications() {
      const certText = this.resumeData.certifications.map(cert => `  * ${cert}`).join('\n');
      this.lines.push({ text: certText, isCommand: false });
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.terminalBody.nativeElement.scrollTop = this.terminalBody.nativeElement.scrollHeight;
      } catch(err) { }
    }, 0);
  }
}
