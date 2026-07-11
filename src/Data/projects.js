import GlowFox from "../assets/GlowFox.png";
import ObsidianDivide from "../assets/ObsidianDivide.png";
//import AIMeetingSummarizer from "../assets/AIMeetingSummarizer.png";
//import ResumeClassifier from "../assets/ResumeClassifier.png";
//import JobRecommendationSystem from "../assets/JobRecommendationSystem.png";
import NadhiAI from "../assets/NadhiAI.png";
import BiWeekly from "../assets/BiWeekly.png";
//import HireHub from "../assets/HireHub.png";
import RelicBound from "../assets/RelicBond.jpeg";
import DeathVortex from "../assets/DeathVortex.png";


const projects = [
 {
   title:"GlowFox",
   description: "Developed a full-stack collaboration platform for students and indie developers using MERN. Designed RESTful APIs, implemented database-driven CRUD operations, and applied Object-Oriented Programming principles to build scalable and maintainable software components. Performed debugging, testing, and version control throughout the development lifecycle.",
   image: GlowFox,
   github: "https://github.com/SumantBobade/GlowFox",
   live: "https://glow-fox.vercel.app/",
   techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "HTML", "CSS"],
   featured: true,
   category:"Full Stack"
 },
 {
   title: "Obsidian Divide",
   description: " Third-person action game developed in Unity featuring advanced enemy AI mechanics and modular combat systems including weapon switching, melee, and magic-based attacks. Outcome playable, enjoyable game and efficient asset pipelines, achieving a 60% reduction in asset size while maintaining visual quality and stable performance.",
   image: ObsidianDivide,
   github: "https://github.com/SumantBobade/Obsidian-Divide",
   live: "https://sumantbobade.itch.io/obsidian-divide",
   techStack: ["Unity", "C#"],
   featured: true,
   category: "Game Development"
 }, 
 {
   title: "AI Meeting Summarizer",
   description: "Developed an AI-powered meeting summarization tool that transcribes audio, generates concise summaries, and extracts action items. Utilized natural language processing techniques and machine learning algorithms to improve accuracy and user experience.",
   image: "",
   github: "https://github.com/SumantBobade/AI-Meeting-Summarizer",
   live: "https://huggingface.co/spaces/SumantBobade/Audio_Transcription_and_Note_Making",
   techStack: ["Python", "TensorFlow", "Gradio", "Hugging Face Transformers"],
   featured: false,
   category: "AI"
 },
 {
   title: "Resume Classifier",
   description: "Developed a machine learning model to automatically classify resumes based on their content and qualifications. Utilized natural language processing and classification algorithms to improve accuracy and efficiency.",
   image: "",
   github: "https://github.com/SumantBobade/Resume-Classifier",
   live: "https://huggingface.co/spaces/SumantBobade/Resume_Classifer",
   techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
   featured: false,
   category: "AI"
 },
 {
   title:"AI Powered Job Recommendation System using MCP",
   description: "Developed an AI-powered job recommendation system that utilizes the MCP (Model Control Protocol) to provide personalized job suggestions to users based on their skills and preferences.",
   image: "../assets/JobRecommendationSystem.png",
   github: "https://github.com/SumantBobade/Job_Recomendation_Using_MCP",
   live:"",
   techStack: ["Python", "TensorFlow", "Gradio", "Model Context Protocol", "Apify API"],
   featured:"false",
   category:"AI"
    },
    {
   title: "Nadhi AI",
   description: "Nadhi AI is an intelligent legal assistant designed to analyze, understand, and draft Indian legal documents such as shop agreements, Memorandum of Understanding (MoU), and commercial contracts. The system combines Retrieval-Augmented Generation (RAG) and fine-tuned Large Language Models (LLMs) to automate contract analysis, extract key clauses, and generate legally structured documents",
   image: "../assets/NadhiAI.png",
   github: "https://github.com/SumantBobade/Legal-Document-Analysis-and-Drafting-using-LLM-Agent",
   live: null,
   techStack: ["Python", "LangChain", "Groq API", "MERN", "Retrieval-Augmented Generation (RAG)", "Large Language Models (LLMs)"],
   featured: true,
   category: "AI"
    },
    {
        title: "Bi-Weekly Magazine Management System",
        description: "A Windows Forms Desktop Application developed using C# (.NET Framework) for managing bi-weekly magazine publications, subscriber records, and report generation. The application provides an efficient way to perform CRUD operations, manage publication data, and generate professional reports using SAP Crystal Reports.",
        image: "../assets/BiWeekly.png",
        github: "https://github.com/SumantBobade/Bi-Monthly-Magazine",
        live: "https://github.com/SumantBobade/Bi-Monthly-Magazine/tree/main/BiMonthlyBooklet/publish",
        techStack: ["C#", ".NET Framework", "Windows Forms", "SAP Crystal Reports"],
        featured: true,
        category: "Full Stack"
    },
    {
   title:"HireHub",
   description: "A full-stack Job Portal application built with React, ASP.NET Core Web API, Entity Framework Core, SQL Server, JWT Authentication, ASP.NET Identity, Role-Based Authorization, Resume Upload, Search, Filtering, and Pagination.",
   image: "../assets/HireHub.png",
   github: "https://github.com/SumantBobade/HireHub",
   live: "https://hirehub.netlify.app/",
   techStack: ["React", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server", "JWT Authentication", "ASP.NET Identity", "Role-Based Authorization", "Resume Upload", "Search", "Filtering", "Pagination"],
   featured: true,
   category:"Full Stack"
    },
    {
   title: "RelicBound",
   description: "RelicBound is a narrative-driven, exploration-focused RPG where players journey through ruined landscapes to uncover hidden fragments and restore ancient, dormant portals. Set in a stylized low-poly fantasy world with assets generated by Tripo AI, the game combines environmental storytelling with dynamic enemy AI and melee combat.",
   image: "../assets/RelicBond.png",
   github:"https://github.com/SumantBobade/RelicBound",
   live: "https://sumantbobade.itch.io/relicbound",
   techStack: ["Unity", "C#", "Tripo AI"],
   featured: true,
   category: "Game Development"
    },
    {
        title: "DeathVortex",
        description: "Operation Endgame is a sci-fi third-person shooter where players assume the role of an elite cybernetic operative fighting to escape a high-security military facility. The game challenges you to complete dangerous sabotage and intel missions while battling automated drones and turrets controlled by a malevolent, rogue AI known as Mister Computer.",
        image: "../assets/DeathVortex.png",
        github: "https://sumantbobade.itch.io/deathvortex",
        live: "https://sumantbobade.itch.io/deathvortex",
        techStack: ["Unity", "C#"],
        featured: false,
        category: "Game Development"
    }
]

export default projects;