// projectsData.js
const projects = [
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
        name: "DeepDetect – Breast Tumor Classifier",
        overview: "This project aims to support early detection of breast tumors using deep learning. A custom CNN model is trained on the BreakHis dataset, incorporating data augmentation for performance improvement, achieving 97% classification accuracy. Machine learning techniques are also applied to the Wisconsin dataset, yielding over 90% accuracy. This dual approach provides robust diagnostic capabilities, aiding healthcare professionals in making faster, more reliable assessments. ",
        tech: ["Python","Tensorflow","Keras","Scikit-learn"],
        githubLink: " ",
    },
    {
        name: "VisionSmart – Object Recognition & Alert System",
        overview: "This project tackles the need for real-time object detection and environmental awareness, especially in safety-critical scenarios. Using YOLOv12 and OpenCV, it identifies room objects and color-based hazards. KMeans clustering enabled dynamic color recognition. A Streamlit interface offers user-friendly interaction, while custom dataset, collected via Selenium and annotated manually, enhances training robustness. The system provides immediate feedback, enhancing safety in smart environments.",
        tech: ["Python", "YOLOv12","OpenCV ","Streamlit","Scikit-learn","Selenium","Roboflow"],
        githubLink: "https://github.com/aimee1230/VisionSmart--AI-Powered-Object-Recognition-and-Interaction-System.git ",
    },
    {
        name: "AI-Powered Air Quality Forecasting and Analysis",
        overview: "This project addresses the pressing issue of air pollution by forecasting and analyzing air quality trends across Pakistan using 15 years of historical data. It applies advanced time series forecasting and clustering models to detect anomalies and uncover pollution drivers. Feature engineering and multiple AI models improve predictive accuracy, aiding in proactive environmental monitoring and policy-making efforts.",
        tech: ["Python", "Scikit-learn", "ARIMA", "Prophet", "XGBoost", "LightGBM", "DBSCAN"],
        githubLink: "https://github.com/aimee1230/Breast-Tumor-Classification-using-CNN.git"
    },
    {
        name: "Deep Learning for Endangered Bird Species Conservation",
        overview: "To support wildlife conservation, this project uses the ResNet-50 model to classify over 80,000 images of 525 bird species, including endangered and critically endangered types. It achieves high accuracy and offers an automated method for species recognition, promoting better tracking and conservation strategies. This work is documented in a co-authored research manuscript, highlighting AI’s contribution to biodiversity preservation.",
        tech: ["Python", "Deep Learning", "ResNet-50"],
         githubLink: "https://github.com/aimee1230/Deep-Learning-Based-Approach-for-Conservation-of-Endangered-Bird-Species.git"
    },
    {
        name: "Enhancing Personalized News Consumption",
        overview: "This project tackles information overload in digital news consumption. By applying machine learning classifiers and word embeddings, it categorizes news efficiently and uses summarization techniques like Textrank and Bard for concise, relevant content delivery. The solution enhances user experience through tailored news feeds, improving accessibility and reducing cognitive fatigue for readers.",
        tech: ["Python", "SVM", "LR", "MNB", "RF", "DTC", "TF-IDF", "GloVe", "Word2Vec", "Textrank", "LexRank", "BART"],
        githubLink: "https://github.com/aimee1230/From-Chaos-to-Clarity--Enhancing-Personalized-News-Consumption-in-the-Digital-Age.git"
    },
    {
        name: "Kaggle User Performance Prediction",
        overview: "This project analyzes Kaggle user engagement, competition participation, and performance using machine learning. It predicts gold medal achievements, competition performance tiers, and user dropout risk. The system uses classification and regression models to identify performance patterns across competitions, notebooks, datasets, and discussions, supporting community engagement and talent recognition.",
        tech: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "MLP", "SVC", "Decision Tree", "Pandas", "Matplotlib", "Seaborn"],
        githubLink: "https://github.com/aimee1230/Kaggle-User-Performance-Prediction.git"
    }
    
  ];
  
  export default projects