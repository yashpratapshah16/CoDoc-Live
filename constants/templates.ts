export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    content: "",
  },
  {
    id: "software-proposal",
    label: "Software development proposal",
    imageUrl: "/software-proposal.svg",
    content: `
      <h1>Software Development Proposal</h1>
      <h2>Project Overview</h2>
      <p>Brief description of the proposed software development project .< /p>

      <h2>Scope of Work</h2>
      <p>Detailed breakdown of project deliverables and requirements .< /p>

      <h2>Timeline</h2>
      <p>Project milestones and delivery schedule .< /p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms .< /p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    content:`
      <h1>Project Proposal</h1>
      <h2>Executive Summary</h2>
      <p>Brief overview of the project proposal .< /p>

      <h2>Project Goals</h2>
      <p>Key objectives and expected outcomes .< /p>

      <h2>Implementation Plan</h2>
      <p>Strategy and methodology for project execution .< /p>

      <h2>Resources Required</h2>
      <p>Team, equipment, and budget requirements .< /p>
    `
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    content:`
    <p>Your Company Name<br>
    123 Business Rd.<br>
    City, State ZIP Code<br>
    Email: contact@yourcompany.com<br>
    Phone: (123) 456-7890</p>

    <p>May 25, 2025</p>

    <p>Recipient Name<br>
    Job Title<br>
    Company Name<br>
    456 Recipient St.<br>
    City, State ZIP Code</p>

    <h1>Project Proposal</h1>

    <h2>Executive Summary</h2>
    <p>This proposal outlines a project intended to [brief description of the purpose]. The goal is to [main goal or value proposition]. This section provides a concise summary for quick understanding by stakeholders.</p>

    <h2>Project Goals</h2>
    <p>The key objectives of the project are to [list goals]. These include delivering [expected outcomes] that align with the strategic vision of the client’s organization.</p>

    <h2>Implementation Plan</h2>
    <p>The project will be executed in defined phases, including planning, development, testing, and deployment. Our team will follow a suitable methodology to ensure timely delivery and adaptability to changes during execution.</p>

    <h2>Resources Required</h2>
    <p>This project will require a team composed of [roles], equipment including [specific tools if any], and an estimated budget of $[amount]. More detailed estimates and resource planning will be provided upon further discussion.</p>

    <p>Sincerely,</p>

    <p>Your Full Name<br>
    Your Job Title<br>
    Your Company Name</p>

    `
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    content:`
    <h1>Your Full Name</h1>
    <p>Email: your.email@example.com<br>
    Phone: (123) 456-7890<br>
    LinkedIn: linkedin.com/in/yourname<br>
    GitHub: github.com/yourusername</p>

    <h2>Professional Summary</h2>
    <p>Motivated and detail-oriented professional with experience in [industry or role]. Adept at [skills or tools], and committed to delivering high-quality results. Proven ability to work independently and in teams to solve complex problems.</p>

    <h2>Skills</h2>
    <ul>
      <li>Programming Languages: JavaScript, Python, C++</li>
      <li>Frameworks/Tools: React, Node.js, Git, Docker</li>
      <li>Soft Skills: Communication, Problem-Solving, Teamwork</li>
    </ul>

    <h2>Experience</h2>
    <p><b>Job Title</b><br>
    Company Name, Location<br>
    Start Date – End Date</p>
    <ul>
      <li>Brief description of responsibility or achievement.</li>
      <li>Another key contribution or task.</li>
    </ul>

    <p><b>Job Title</b><br>
    Company Name, Location<br>
    Start Date – End Date</p>
    <ul>
      <li>Brief description of responsibility or achievement.</li>
      <li>Another key contribution or task.</li>
    </ul>

    <h2>Education</h2>
    <p>Degree<br>
    University Name, Location<br>
    Graduation Year</p>

    <h2>Projects</h2>
    <p><b>Project Title</b> – Brief description of the project, tools used, and outcome.</p>
    <p><b>Project Title</b> – Brief description of the project, tools used, and outcome.</p>

    <h2>Certifications</h2>
    <ul>
      <li>Certification Name – Issuing Organization</li>
      <li>Certification Name – Issuing Organization</li>
    </ul>

    <h2>Languages</h2>
    <ul>
      <li>English – Fluent</li>
      <li>Spanish – Intermediate</li>
    </ul>
    `
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    content:`
    <p>Your Name<br>
    Your Address<br>
    City, State ZIP Code<br>
    Email: your.email@example.com<br>
    Phone: (123) 456-7890</p>

    <p>Date: May 25, 2025</p>

    <p>Hiring Manager's Name<br>
    Company Name<br>
    Company Address<br>
    City, State ZIP Code</p>

    <h1>Cover Letter</h1>

    <p>Dear Hiring Manager,</p>

    <p>I am writing to express my interest in the [Job Title] position at [Company Name]. With a background in [your field or relevant experience] and a strong passion for [industry or job-specific area], I am confident in my ability to contribute meaningfully to your team.</p>

    <p>In my previous role at [Previous Company], I [mention a key responsibility or achievement]. This experience allowed me to develop strong skills in [relevant skills], which I believe align well with the requirements of the position.</p>

    <p>What draws me to [Company Name] is your commitment to [something specific about the company: innovation, mission, products, culture, etc.]. I am excited about the opportunity to bring my experience in [mention your specialization or area] to support your goals and growth.</p>

    <p>I have attached my resume for your review. I would welcome the opportunity to further discuss how my skills and experiences align with your needs. Thank you for considering my application.</p>

    <p>Sincerely,</p>

    <p>Your Name</p>

    `
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    content:`
    <p>Your Name<br>
    Your Address<br>
    City, State ZIP Code<br>
    Email: your.email@example.com<br>
    Phone: (123) 456-7890</p>

    <p>Date: May 25, 2025</p>

    <p>Recipient's Name<br>
    Recipient's Title<br>
    Company or Organization Name<br>
    Recipient's Address<br>
    City, State ZIP Code</p>

    <p>Dear [Recipient's Name],</p>

    <p>I hope this letter finds you well. I am writing to [state the purpose of your letter clearly and briefly]. This matter is important to me because [explain the reason or context of your letter].</p>

    <p>[Provide supporting details, background information, or any actions you would like the recipient to take.]</p>

    <p>If you need any additional information, please feel free to contact me. I appreciate your attention to this matter and look forward to your response.</p>

    <p>Sincerely,</p>

    <p>Your Name</p>
    `
  },
];
