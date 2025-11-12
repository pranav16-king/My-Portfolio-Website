// Notes data
const notesData = [
  {
    name: "Python 🐍 Introduction to Data Science",
    desc: "Learn the fundamentals of Data Science using Python — perfect for getting started with analytics and ML workflows.",
    level: "Beginner",
    tags: ["Python", "Data Science", "ML Basics"],
    link: "Notes/Python/1. Introduction_to_Data_Science @unlocked_coding.pdf",
    download: "Notes/Python/1. Introduction_to_Data_Science @unlocked_coding.pdf",
  },
  {
    name: "Python 🐍 Understanding the Conda Environment",
    desc: "Master environment setup and package management using Conda — crucial for any Python Data Science workflow.",
    level: "Beginner",
    tags: ["Python", "Environment", "Conda"],
    link: "Notes/Python/2. Understanding_the_Conda_Environment @unlocked_coding.pdf",
    download: "Notes/Python/2. Understanding_the_Conda_Environment @unlocked_coding.pdf",
  },
  {
    name: "Python 🐍 140 Practice Programs",
    desc: "A compilation of 140 hands-on Python programs to strengthen your coding logic and problem-solving skills.",
    level: "Beginner to Intermediate",
    tags: ["Python", "Practice", "Logic Building"],
    link: "Notes/Python/140 python program.pdf",
    download: "Notes/Python/140 python program.pdf",
  },
  {
    name: "Python 🐍 500 Practice Exams Questions & Answers",
    desc: "Comprehensive set of 500 Python interview and exam questions to test your understanding and prepare for real-world scenarios.",
    level: "Intermediate to Advanced",
    tags: ["Python", "Interview Prep", "Practice"],
    link: "Notes/Python/500 PRACTICE EXAMS QUESTIONS & ANSWERS.pdf",
    download: "Notes/Python/500 PRACTICE EXAMS QUESTIONS & ANSWERS.pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (1)",
    desc: "Detailed guide from Code With Harry — learn Python for Data Science step by step.",
    level: "Beginner",
    tags: ["Python", "Data Science", "Learning"],
    link: "Notes/Python/code with harry data science course handbbok (1).pdf",
    download: "Notes/Python/code with harry data science course handbbok (1).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (2)",
    desc: "Continuation of the Python Data Science handbook covering pandas, NumPy, and visualization techniques.",
    level: "Beginner to Intermediate",
    tags: ["Python", "Pandas", "NumPy"],
    link: "Notes/Python/code with harry data science course handbbok (2).pdf",
    download: "Notes/Python/code with harry data science course handbbok (2).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (3)",
    desc: "Learn data cleaning, transformation, and analysis using Python with practical datasets.",
    level: "Intermediate",
    tags: ["Python", "Data Analysis", "Data Cleaning"],
    link: "Notes/Python/code with harry data science course handbbok (3).pdf",
    download: "Notes/Python/code with harry data science course handbbok (3).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (4)",
    desc: "Understand visualization libraries like Matplotlib and Seaborn for professional data storytelling.",
    level: "Intermediate",
    tags: ["Python", "Visualization", "Seaborn"],
    link: "Notes/Python/code with harry data science course handbbok (4).pdf",
    download: "Notes/Python/code with harry data science course handbbok (4).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (5)",
    desc: "Explore applied data projects and feature engineering techniques in Python.",
    level: "Intermediate to Advanced",
    tags: ["Python", "Feature Engineering", "Projects"],
    link: "Notes/Python/code with harry data science course handbbok (5).pdf",
    download: "Notes/Python/code with harry data science course handbbok (5).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (6)",
    desc: "Deep dive into statistics and probability essentials for Data Science using Python.",
    level: "Intermediate",
    tags: ["Python", "Statistics", "Data Science"],
    link: "Notes/Python/code with harry data science course handbbok (6).pdf",
    download: "Notes/Python/code with harry data science course handbbok (6).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (7)",
    desc: "Machine Learning basics and model evaluation techniques with Python.",
    level: "Intermediate to Advanced",
    tags: ["Python", "Machine Learning", "Evaluation"],
    link: "Notes/Python/code with harry data science course handbbok (7).pdf",
    download: "Notes/Python/code with harry data science course handbbok (7).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (8)",
    desc: "Covers supervised and unsupervised learning algorithms using Python libraries.",
    level: "Advanced",
    tags: ["Python", "ML", "AI"],
    link: "Notes/Python/code with harry data science course handbbok (8).pdf",
    download: "Notes/Python/code with harry data science course handbbok (8).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (9)",
    desc: "Learn advanced visualization and dashboard creation using Python frameworks.",
    level: "Advanced",
    tags: ["Python", "Dashboards", "Visualization"],
    link: "Notes/Python/code with harry data science course handbbok (9).pdf",
    download: "Notes/Python/code with harry data science course handbbok (9).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (10)",
    desc: "Data preprocessing, normalization, and scaling methods for better model performance.",
    level: "Advanced",
    tags: ["Python", "Data Preprocessing", "Modeling"],
    link: "Notes/Python/code with harry data science course handbbok (10).pdf",
    download: "Notes/Python/code with harry data science course handbbok (10).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (11)",
    desc: "Explore applied case studies and complete Data Science workflows using Python.",
    level: "Advanced",
    tags: ["Python", "Case Study", "End-to-End Projects"],
    link: "Notes/Python/code with harry data science course handbbok (11).pdf",
    download: "Notes/Python/code with harry data science course handbbok (11).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (12)",
    desc: "Advanced deep learning and neural network concepts for AI development.",
    level: "Advanced",
    tags: ["Python", "Deep Learning", "AI"],
    link: "Notes/Python/code with harry data science course handbbok (12).pdf",
    download: "Notes/Python/code with harry data science course handbbok (12).pdf",
  },
  {
    name: "Python 🐍 Data Science Course Handbook (13)",
    desc: "Final part of the Data Science series focusing on deployment and optimization.",
    level: "Advanced",
    tags: ["Python", "Deployment", "Optimization"],
    link: "Notes/Python/code with harry data science course handbbok (13).pdf",
    download: "Notes/Python/code with harry data science course handbbok (13).pdf",
  },
  {
    name: "Python 🐍 Master Python",
    desc: "Complete guide to mastering Python programming with examples and exercises.",
    level: "Beginner to Advanced",
    tags: ["Python", "Programming", "Projects"],
    link: "Notes/Python/master python.pdf",
    download: "Notes/Python/master python.pdf",
  },
  {
    name: "Python 🐍 Beginner to Master",
    desc: "Step-by-step path from beginner to pro — includes loops, OOP, and real-world coding.",
    level: "Beginner to Intermediate",
    tags: ["Python", "Learning Path", "OOP"],
    link: "Notes/Python/python beginner to master.pdf",
    download: "Notes/Python/python beginner to master.pdf",
  },
  {
    name: "Python 🐍 Interview Cheatsheet - 1",
    desc: "Quick revision notes and cheat codes for Python technical interviews.",
    level: "Intermediate",
    tags: ["Python", "Interview Prep", "Cheatsheet"],
    link: "Notes/Python/Python Interview Cheatsheet -1.pdf",
    download: "Notes/Python/Python Interview Cheatsheet -1.pdf",
  },
  {
    name: "Python 🐍 Notes",
    desc: "Comprehensive Python notes for quick concept review and syntax recall.",
    level: "Beginner",
    tags: ["Python", "Notes", "Syntax"],
    link: "Notes/Python/Python notes.pdf",
    download: "Notes/Python/Python notes.pdf",
  },
  {
    name: "Python 🐍 Refresher 2",
    desc: "Quick refresher on intermediate Python topics and libraries for coders returning to Python.",
    level: "Intermediate",
    tags: ["Python", "Refresher", "Libraries"],
    link: "Notes/Python/Python_Refresher _2 @unlocked_coding.pdf",
    download: "Notes/Python/Python_Refresher _2 @unlocked_coding.pdf",
  },
  {
    name: "Python 🐍 The Ultimate Handbook",
    desc: "All-in-one Python handbook covering syntax, projects, AI, and automation.",
    level: "Beginner to Advanced",
    tags: ["Python", "AI", "Automation"],
    link: "Notes/Python/The Ultimate Python Handbook.pdf",
    download: "Notes/Python/The Ultimate Python Handbook.pdf",
  },
  {
    name: "Android Devlopment",
    desc: "Android devlopment Notes.",
    level: "Beginner to Advanced",
    tags: ["Android devlopment"],
    link: "Notes/Android notes/Android_CompleteNotes.pdf",
    download: "Notes/Android notes/Android_CompleteNotes.pdf",
  },
  {
    name: "BlockChain",
    desc: "Blockchain.",
    level: "Beginner to Advanced",
    tags: ["Information about blockchain"],
    link: "Notes/BlockChain/001 What is Blockchain.pdf",
    download: "Notes/BlockChain/001 What is Blockchain.pdf",
  },
  {
    name: "C 💻 Notes",
    desc: "Comprehensive C programming notes covering syntax, loops, arrays, and basic data structures — ideal for beginners.",
    level: "Beginner",
    tags: ["C", "Programming", "Basics"],
    link: "Notes/C/c notes.pdf",
    download: "Notes/C/c notes.pdf",
  },
  {
    name: "C 💻 Complete Notes",
    desc: "Detailed notes on C language including pointers, structures, memory management, and file handling with examples.",
    level: "Intermediate",
    tags: ["C", "Pointers", "File Handling"],
    link: "Notes/C/C_Complete_Notes.pdf",
    download: "Notes/C/C_Complete_Notes.pdf",
  },
  {
    name: "C 💻 The Ultimate Handbook",
    desc: "A complete C programming handbook featuring theory, practice exercises, and advanced problem-solving techniques.",
    level: "Beginner to Advanced",
    tags: ["C", "Advanced", "Problem Solving"],
    link: "Notes/C/The Unlimate C Handbook.pdf",
    download: "Notes/C/The Unlimate C Handbook.pdf",
  },
  {
    name: "CSS 💻 The complete notes",
    desc: "A complete Css Notes.",
    level: "Beginner to Advanced",
    tags: ["Css"],
    link: "Notes/CSS/CSS_Complete_Notes.pdf",
    download: "Notes/CSS/CSS_Complete_Notes.pdf",
  },
  {
    name: "Devops 💻DevOps Scenario based Questions",
    desc: "DevOps Scenario based Questions.",
    level: "Beginner to Advanced",
    tags: ["Devops"],
    link: "Notes/Devops/DevOps Scenario based Questions.pdf",
    download: "Notes/Devops/DevOps Scenario based Questions.pdf",
  },
  {
    name: "DSA ⚙️ Algorithms Basics",
    desc: "Introduction to algorithmic thinking, pseudocode, and flow of problem-solving techniques.",
    level: "Beginner",
    tags: ["DSA", "Algorithms", "Logic"],
    link: "Notes/DSA/Algorithms Basics.pdf",
    download: "Notes/DSA/Algorithms Basics.pdf",
  },
  {
    name: "DSA ⚙️ Array",
    desc: "Covers array concepts, memory representation, and essential operations like traversal, insertion, and deletion.",
    level: "Beginner",
    tags: ["DSA", "Array", "Data Structures"],
    link: "Notes/DSA/Array.pdf",
    download: "Notes/DSA/Array.pdf",
  },
  {
    name: "DSA ⚙️ Notes",
    desc: "Comprehensive summary of all DSA fundamentals — arrays, stacks, queues, and linked lists.",
    level: "Beginner to Intermediate",
    tags: ["DSA", "Notes", "Concepts"],
    link: "Notes/DSA/DSA notes.pdf",
    download: "Notes/DSA/DSA notes.pdf",
  },
  {
    name: "DSA ⚙️ Complete",
    desc: "All-in-one complete reference covering core data structures and algorithms with examples in C.",
    level: "Intermediate",
    tags: ["DSA", "C Language", "Full Course"],
    link: "Notes/DSA/DSA_Complete.pdf",
    download: "Notes/DSA/DSA_Complete.pdf",
  },
  {
    name: "DSA ⚙️ Complete Notes",
    desc: "Detailed explanation of sorting, searching, recursion, and linked list implementations.",
    level: "Intermediate to Advanced",
    tags: ["DSA", "Sorting", "Recursion"],
    link: "Notes/DSA/DSA_CompleteNotes.pdf",
    download: "Notes/DSA/DSA_CompleteNotes.pdf",
  },
  {
    name: "DSA ⚙️ Fundamentals of Language C",
    desc: "Understand how the C language supports the foundation for implementing data structures and algorithms.",
    level: "Beginner",
    tags: ["C", "DSA", "Programming Basics"],
    link: "Notes/DSA/One- Fundamentals of Language C.pdf",
    download: "Notes/DSA/One- Fundamentals of Language C.pdf",
  },
  {
    name: "DSA ⚙️ Data Structures Introduction",
    desc: "A beginner-friendly introduction to data structures concepts and their classification.",
    level: "Beginner",
    tags: ["DSA", "Introduction", "Concepts"],
    link: "Notes/DSA/One-_Data Structures Introduction_1.pdf",
    download: "Notes/DSA/One-_Data Structures Introduction_1.pdf",
  },
  {
    name: "DSA ⚙️ Operation in Array",
    desc: "Learn about performing operations on arrays, including insertion, deletion, and traversal in C.",
    level: "Beginner",
    tags: ["DSA", "Arrays", "Implementation"],
    link: "Notes/DSA/One_Operation in Array.pdf",
    download: "Notes/DSA/One_Operation in Array.pdf",
  },
  {
    name: "DSA ⚙️ Linked Lists Implementation Using C",
    desc: "Hands-on guide to implementing singly and doubly linked lists using C language.",
    level: "Intermediate",
    tags: ["DSA", "Linked List", "C Implementation"],
    link: "Notes/DSA/Three- Linked Lists implementation using C (1).pdf",
    download: "Notes/DSA/Three- Linked Lists implementation using C (1).pdf",
  },
  {
    name: "DSA ⚙️ Queue",
    desc: "Concepts and implementation of queues and circular queues using C.",
    level: "Intermediate",
    tags: ["DSA", "Queue", "Data Structures"],
    link: "Notes/DSA/Three_Queue.pdf",
    download: "Notes/DSA/Three_Queue.pdf",
  },
  {
    name: "DSA ⚙️ Stack",
    desc: "Stack operations and implementation in C with examples of infix, prefix, and postfix evaluation.",
    level: "Intermediate",
    tags: ["DSA", "Stack", "Implementation"],
    link: "Notes/DSA/Three_Stack.pdf",
    download: "Notes/DSA/Three_Stack.pdf",
  },
  {
    name: "DSA ⚙️ Operations in Linear Array (C Implementation)",
    desc: "Learn how linear arrays work and perform various operations with C code examples.",
    level: "Beginner to Intermediate",
    tags: ["DSA", "Array", "C Language"],
    link: "Notes/DSA/Two- Operations in Linear Array with implementation in C.pdf",
    download: "Notes/DSA/Two- Operations in Linear Array with implementation in C.pdf",
  },
  {
    name: "DSA ⚙️ Linked Lists Singly",
    desc: "In-depth guide to singly linked lists — creation, insertion, deletion, and traversal techniques.",
    level: "Intermediate",
    tags: ["DSA", "Linked List", "Singly"],
    link: "Notes/DSA/Two_Linked Lists singly.pdf",
    download: "Notes/DSA/Two_Linked Lists singly.pdf",
  },
  {
    name: "DSA ⚙️ Circular Linked List",
    desc: "Learn circular linked list creation and manipulation with examples written in C.",
    level: "Advanced",
    tags: ["DSA", "Circular Linked List", "C Programming"],
    link: "Notes/DSA/Two_Circular Linked List.pdf",
    download: "Notes/DSA/Two_Circular Linked List.pdf",
  },
  {
  name: "📘 Intro to Image Processing with Python",
  desc: "Learn the fundamentals of image processing using Python and OpenCV — color spaces, filters, and transformations.",
  level: "🟢 Beginner",
  tags: ["OpenCV", "Image Processing", "Computer Vision"],
  link: "Notes/Open Cv/01_intro_image_processing_python.pdf",
  download: "Notes/Open Cv/01_intro_image_processing_python.pdf",
},
{
  name: "🔥 Deep Learning & PyTorch Basics",
  desc: "An introduction to PyTorch and deep learning foundations for computer vision tasks.",
  level: "🟡 Intermediate",
  tags: ["PyTorch", "Deep Learning", "AI"],
  link: "Notes/Open Cv/01-2_deep_learning_pytorch_basics.pdf",
  download: "Notes/Open Cv/01-2_deep_learning_pytorch_basics.pdf",
},
{
  name: "🔍 Edge & Line Detection",
  desc: "Master edge and line detection with filters like Canny, Sobel, and Hough Transform in OpenCV.",
  level: "🟡 Intermediate",
  tags: ["OpenCV", "Edge Detection", "Image Processing"],
  link: "Notes/Open Cv/02_edge_and_line_detection.pdf",
  download: "Notes/Open Cv/02_edge_and_line_detection.pdf",
},
{
  name: "🧩 Visualizing CNN Filters",
  desc: "Understand convolutional layers by visualizing CNN filters and feature maps.",
  level: "🟡 Intermediate",
  tags: ["CNN", "Visualization", "Neural Networks"],
  link: "Notes/Open Cv/03_04_appndx_visualizing_cnn_filters.pdf",
  download: "Notes/Open Cv/03_04_appndx_visualizing_cnn_filters.pdf",
},
{
  name: "🧠 Convolutional Neural Networks (CNN)",
  desc: "Learn CNN architecture, training, and use cases for image recognition tasks.",
  level: "🟠 Intermediate → 🔴 Advanced",
  tags: ["Deep Learning", "CNN", "AI"],
  link: "Notes/Open Cv/03_04_convolutional_neural_networks.pdf",
  download: "Notes/Open Cv/03_04_convolutional_neural_networks.pdf",
},
{
  name: "🎨 Deep Semantic Segmentation",
  desc: "Study advanced segmentation techniques like U-Net and Mask R-CNN for computer vision.",
  level: "🔴 Advanced",
  tags: ["Segmentation", "Deep Learning", "Computer Vision"],
  link: "Notes/Open Cv/05_deep_semantic_segmentation.pdf",
  download: "Notes/Open Cv/05_deep_semantic_segmentation.pdf",
},
{
  name: "🧬 Generative Adversarial Networks (GANs)",
  desc: "Explore GANs for generating realistic synthetic images using deep learning.",
  level: "🔴 Advanced",
  tags: ["GAN", "AI", "Deep Learning"],
  link: "Notes/Open Cv/06_generative_adversarial_networks_gan.pdf",
  download: "Notes/Open Cv/06_generative_adversarial_networks_gan.pdf",
},
{
  name: "🎯 Image Alignment Techniques",
  desc: "Learn feature and geometry-based image alignment techniques using OpenCV.",
  level: "🟡 Intermediate",
  tags: ["Alignment", "Computer Vision", "Image Processing"],
  link: "Notes/Open Cv/07_alignment.pdf",
  download: "Notes/Open Cv/07_alignment.pdf",
},
{
  name: "💭 Deep Uncertainty Estimation",
  desc: "Understand uncertainty and confidence estimation in deep learning predictions.",
  level: "🔴 Advanced",
  tags: ["AI", "Deep Learning", "Uncertainty"],
  link: "Notes/Open Cv/08_deep_uncertainty.pdf",
  download: "Notes/Open Cv/08_deep_uncertainty.pdf",
},
{
  name: "🎥 Deep Object Detection",
  desc: "Detailed guide to object detection models like YOLO, SSD, and Faster R-CNN.",
  level: "🔴 Advanced",
  tags: ["Object Detection", "Computer Vision", "Deep Learning"],
  link: "Notes/Open Cv/09_deep_object_detection.pdf",
  download: "Notes/Open Cv/09_deep_object_detection.pdf",
},
{
  name: "📐 Geometry Review for Vision",
  desc: "Essential geometric transformations and 3D camera modeling for computer vision.",
  level: "🟡 Intermediate",
  tags: ["Geometry", "Vision", "OpenCV"],
  link: "Notes/Open Cv/10_geometry_review.pdf",
  download: "Notes/Open Cv/10_geometry_review.pdf",
},
{
  name: "🔭 Stereo Imaging & Depth Estimation",
  desc: "Learn stereo vision and 3D depth estimation for real-world imaging.",
  level: "🔴 Advanced",
  tags: ["Stereo Vision", "3D", "Computer Vision"],
  link: "Notes/Open Cv/11_stereo_imaging.pdf",
  download: "Notes/Open Cv/11_stereo_imaging.pdf",
},
{
  name: "🧱 3D Deep Learning",
  desc: "Study 3D convolutional models and their use in volumetric data and reconstruction.",
  level: "🔴 Advanced",
  tags: ["3D Learning", "Deep Learning", "Vision"],
  link: "Notes/Open Cv/12_3D_deep_learning.pdf",
  download: "Notes/Open Cv/12_3D_deep_learning.pdf",
},
{
  name: "🎯 Deep Object Tracking",
  desc: "Implement object tracking using CNNs, correlation filters, and motion models.",
  level: "🔴 Advanced",
  tags: ["Tracking", "AI", "Computer Vision"],
  link: "Notes/Open Cv/13_deep_object_tracking.pdf",
  download: "Notes/Open Cv/13_deep_object_tracking.pdf",
},
{
  name: "🧪 Deep Computational Imaging",
  desc: "Advanced computational imaging techniques combining deep learning and optics.",
  level: "🔴 Advanced",
  tags: ["Computational Imaging", "Deep Learning", "AI"],
  link: "Notes/Open Cv/14_deep_computational_imaging.pdf",
  download: "Notes/Open Cv/14_deep_computational_imaging.pdf",
},
{
  name: "💼 JavaScript Interview Questions",
  desc: "A rich collection of JavaScript interview Q&A to sharpen your frontend skills.",
  level: "🟠 Intermediate → 🔴 Advanced",
  tags: ["JavaScript", "Interview Prep", "Frontend"],
  link: "Notes/JavaScript/JavaScript interview Quations.pdf",
  download: "Notes/JavaScript/JavaScript interview Quations.pdf",
},
{
  name: "📚 JavaScript Complete Notes",
  desc: "Covers all major JavaScript concepts — from basics to ES6 features and DOM manipulation.",
  level: "🟢 Beginner → 🟡 Intermediate",
  tags: ["JavaScript", "Frontend", "Web Development"],
  link: "Notes/JavaScript/JAVASCRIPT Notes.pdf",
  download: "Notes/JavaScript/JAVASCRIPT Notes.pdf",
},
{
  name: "🧾 JavaScript Chapterwise Notes",
  desc: "Organized, chapter-wise explanation of JavaScript fundamentals for step-by-step learning.",
  level: "🟢 Beginner",
  tags: ["JavaScript", "Learning", "Frontend"],
  link: "Notes/JavaScript/JS_Chapterwise_Notes.pdf",
  download: "Notes/JavaScript/JS_Chapterwise_Notes.pdf",
},

  {
    name: "SQL 🧩",
    desc: "Database queries, joins, and normalization explained.",
    level: "Intermediate",
    tags: ["Database", "Backend"],
    link: "notes/sql.html",
    download: "downloads/sql_notes.pdf",
  },
];

const container = document.getElementById("notesContainer");
const searchBox = document.getElementById("searchBox");

function renderCards(data) {
  container.innerHTML = "";
  data.forEach((note) => {
    const tagsHTML = note.tags
      .map(
        (tag) =>
          `<span class='text-xs bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-2 py-1 rounded-full mr-1'>${tag}</span>`
      )
      .join("");
    const card = document.createElement("div");
    card.className =
      "p-6 rounded-2xl bg-gray-800/70  rounded-3xl backdrop-blur-md border border-cyan-400/30 hover:scale-105 transform transition-all duration-500 glow-hover";
    card.innerHTML = `
            <h3 class="text-2xl font-bold text-cyan-300 mb-2">${note.name}</h3>
            <p class="text-gray-300 mb-4">${note.desc}</p>
            <p class="text-sm text-gray-400 mb-3"><strong>Level:</strong> ${note.level}</p>
            <div class="mb-4">${tagsHTML}</div>
            <div class="flex space-x-3">
              <a href="${note.link}" class="flex-1 text-center py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-gray-900 font-semibold glow-hover">📘 View Notes</a>
              <a href="${note.download}" download class="flex-1 text-center py-2 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-gradient-to-r from-cyan-400 to-purple-500 hover:text-gray-900 font-semibold glow-hover">💾 Download</a>
            </div>
          `;
    container.appendChild(card);
  });
}

renderCards(notesData);

searchBox.addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase();
  const filtered = notesData.filter((n) =>
    n.name.toLowerCase().includes(search)
  );
  renderCards(filtered);
});

// ✅ Working theme toggle
const toggleBtn = document.getElementById("toggle-theme");
const body = document.getElementById("themeBody");
const navbar = document.getElementById("navbar");
const footer = document.getElementById("footer");

toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.contains("dark-theme");
  if (isDark) {
    // Switch to light mode
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    navbar.classList.add("bg-white/70", "text-gray-800");
    navbar.classList.remove("bg-gray-900/60");
    footer.classList.add("bg-white/70", "text-gray-700");
    footer.classList.remove("bg-gray-900/60");
    toggleBtn.innerHTML = "☀️ Light Mode";
    toggleBtn.classList.remove("from-cyan-500", "to-purple-600");
    toggleBtn.classList.add("from-yellow-400", "to-orange-500");
  } else {
    // Switch to dark mode
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    navbar.classList.remove("bg-white/70", "text-gray-800");
    navbar.classList.add("bg-gray-900/60");
    footer.classList.remove("bg-white/70", "text-gray-700");
    footer.classList.add("bg-gray-900/60");
    toggleBtn.innerHTML = "🌙 Dark Mode";
    toggleBtn.classList.remove("from-yellow-400", "to-orange-500");
    toggleBtn.classList.add("from-cyan-500", "to-purple-600");
  }
});
