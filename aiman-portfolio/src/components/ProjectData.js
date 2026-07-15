// projectsData.js
const projects = [
    {
      name: "VoyageAI – Intelligent Multi-Agent Travel Planner",
      overview: "VoyageAI is an intelligent multi-agent travel planning assistant that simplifies the process of organizing personalized trips through collaborative AI agents. The system addresses the challenge of coordinating destinations, itineraries, accommodations, transportation, and user preferences within a single workflow by enabling specialized agents to work together and generate context-aware travel plans. A key challenge was designing reliable agent orchestration, maintaining shared conversation state, and integrating real-time travel data while ensuring a seamless user experience. The project demonstrates modern agentic AI principles, scalable system design, and end-to-end deployment practices, providing users with an efficient and personalized travel planning experience.",
      tech: ["Python","Next.js","Flask","LangGraph","LangChain","Llama 3.3 70B","PostgreSQL","REST APIs","Docker","AWS","GitHub"],
      githubLink: "https://github.com/aimee1230/AI-Travel-Consultant.git",
    },
    {
      name: "LabourLink AI – Multilingual RAG Chatbot",
      overview: "Hong Kong Labour Law RAG Assistant is a multilingual Retrieval-Augmented Generation (RAG) system designed to provide accurate, context-aware answers to questions about Hong Kong labour regulations for migrant workers in English and Tagalog. The project addresses the challenge of navigating lengthy legal documents by extracting, preprocessing, and indexing information from multiple official government publications into a searchable knowledge base. A key challenge was developing a document-specific preprocessing and chunking strategy that preserved document structure while improving retrieval quality across diverse document formats. The final system supports multilingual queries, delivers reliable citation-backed responses through semantic search and large language models, and demonstrates the practical application of RAG for legal information retrieval and AI-powered multilingual assistance.",
      tech: ["Python", "LangChain", "Ollama", "Qwen2.5-7B", "BGE-M3", "ChromaDB", "RAG", "Embeddings", "Prompt Engineering"],
      githubLink: "https://github.com/aimee1230/ai-assistant-for-migrant-support.git",
    },
    {
      name: "LeadFlow AI – Multi-Agent Sales Outreach Automation",
      overview: "LeadFlow AI is a multi-agent sales outreach automation system that streamlines lead generation and personalized cold email campaigns through an intelligent AI workflow. The project addresses the challenge of time-consuming manual prospecting by automating company research, lead enrichment, personalized email generation, follow-up creation, and quality validation within a single workflow. A key challenge was orchestrating multiple AI agents, integrating external services, and implementing AI guardrails to ensure accurate, relevant, and high-quality outreach. The final system automatically generates personalized Gmail drafts and significantly reduces manual prospecting effort while improving the scalability and consistency of sales outreach.",
      tech: ["n8n","Python","Groq","LLMs","Firecrawl","Google Sheets API","Gmail API","AI Guardrails","Prompt Engineering"],
      githubLink: "https://github.com/aimee1230/AI-Sales-Outreach-Automation.git",
    },

    {
      name: "EnhanceAI – Real-Time Image Enhancement Web Application",
      overview: "EnhanceAI is a complete web application that addresses the challenge of low-resolution images in real-time scenarios by applying deep learning techniques. The system integrates the Real-ESRGAN model into a Flask backend to deliver high-resolution image outputs with reduced processing latency. Optimized SQL queries and REST APIs streamline data flow and improve backend performance. The project involved comprehensive model research and evaluation, leading to enhanced accuracy and reliability. Deployed on a React-based front end, EnhanceAI demonstrates a scalable and cost-effective alternative to high-end GPU hardware for real-time image enhancement.",
      tech: ["Python","React", "Flask", "SQlite", "REST APIS", "Deep Learning", "REAL-ESRGANS"],
      githubLink: "https://github.com/aimee1230/Image_Resolution_Internship.git",
    },
    {
      name: "IntelliRecruit – AI-Powered Recruitment Platform",
      overview: "IntelliRecruit is a full-stack web application designed to automate and streamline candidate screening in recruitment processes. The system integrates a Llama 2-based chatbot through Django REST APIs to conduct AI-driven interviews and evaluations. A scalable PostgreSQL database ensures fast and reliable data retrieval to support real-time decision-making. The platform’s backend was optimized for performance, while the React front end provided a seamless user experience. Comprehensive UI/UX research and documentation helped communicate technical value to stakeholders, demonstrating reductions in hiring time and operational overhead through intelligent automation.",
      tech: ["Python", "React", "PostgreSQL","Django","REST APIs","LLAMA-2","Langchain","NLTK"],
      githubLink: "https://github.com/aimee1230/Intelli-Recruit.git",
    },
    {
        name: "A Scalable AI Approach to Bird Species Identification for Conservation and Ecological Planning",
        overview: "To support wildlife conservation, this project uses the ResNet-50 model to classify over 80,000 images of 525 bird species, including endangered and critically endangered types. A key challenge was distinguishing visually similar species while maintaining high accuracy across a diverse dataset. The final model achieved 87% classification accuracy and successfully identified all 25 endangered and 12 critically endangered bird species without misclassification. This work was published in an IEEE journal, demonstrating its contribution to AI-driven wildlife conservation and ecological planning.",
        tech: ["Python", "Deep Learning", "ResNet-50"],
         githubLink: "https://github.com/aimee1230/Deep-Learning-Based-Approach-for-Conservation-of-Endangered-Bird-Species.git"
    }
  ];
  
  export default projects