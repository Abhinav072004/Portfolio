const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Abhinav brought tremendous energy and technical precision to our web projects. His ability to turn complex UI designs into functional, high-performance React apps is top-notch.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.svg",
      title: "MERN Stack Developer",
      date: "July 2023 - Present",
      responsibilities: [
        "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
        "Built reusable components and optimized frontend performance for large-scale projects.",
        "Collaborated with designers and backend teams to ship user-centric features efficiently.",
      ],
    },
    {
      review:
        "Abhinav’s contribution to our blockchain module was game-changing. He implemented secure smart contracts and helped design the system architecture for a decentralized application.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Blockchain Developer",
      date: "January 2023 - June 2023",
      responsibilities: [
        "Designed and deployed Ethereum smart contracts using Solidity and Hardhat.",
        "Integrated blockchain logic with frontend through Web3.js and Ethers.js.",
        "Conducted thorough testing and audits to ensure smart contract security.",
      ],
    },
    {
      review:
        "Abhinav impressed us with his data intuition and ML skills. His models not only performed well but were also neatly documented and production-ready.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "Machine Learning Developer",
      date: "May 2022 - December 2022",
      responsibilities: [
        "Built and deployed machine learning models for classification and recommendation systems.",
        "Used Python, scikit-learn, TensorFlow, and pandas to solve real-world problems.",
        "Collaborated with backend developers to integrate models into REST APIs.",
      ],
    },
  ];
  const expLogos = [
    {
      name: "Mern",
      imgPath: "/images/logo1.png", 
    },
    {
      name: "Blockchain",
      imgPath: "/images/logo2.png", 
    },
    {
      name: "ML",
      imgPath: "/images/logo3.png", 
    },
  ];
  
  const testimonials = [
    {
      name: "adam root",
      mentions: "@adam",
      review:
        "Working with Abhinav Singh was an exceptional experience. His expertise in MERN stack helped us build a fast, scalable, and visually stunning web app. He always goes the extra mile to ensure everything runs smoothly.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Rahul Verma",
      mentions: "@rahulv",
      review:
        "Abhinav’s knowledge in blockchain development is top-tier. He created a secure and efficient smart contract system for our startup. His attention to detail and professionalism is impressive.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Snehal Kapoor",
      mentions: "@snehak",
      review:
        "Abhinav helped us integrate machine learning into our platform for personalized recommendations. The results were beyond what we expected! His ML expertise and clean code made our product truly intelligent.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Ankit Mehta",
      mentions: "@ankitm",
      review:
        "Abhinav Singh is a tech wizard. From building our full-stack dashboard using MERN to deploying a blockchain-based rewards system, he handled everything with ease. Highly recommend him for any complex project.",
      imgPath: "/images/client4.png",
    },
    {
      name: "Tanmay Desai",
      mentions: "@tanxd",
      review:
        "Our team loved working with Abhinav. His innovative use of ML algorithms gave our analytics platform a huge upgrade. Plus, he’s super easy to collaborate with and always meets deadlines.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Vikram Chauhan",
      mentions: "@vikch",
      review:
        "Abhinav’s understanding of blockchain and frontend development is just incredible. He built us a decentralized app with a seamless UI and a bulletproof backend. A true full-stack genius!",
      imgPath: "/images/client6.png",
    },
  ];
  
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
      link: "https://www.instagram.com/abhinav023singh?igsh=MXZleW1qMmNlZmozbA=="
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
      link: "https://github.com/Abhinav072004/"
    },
    {
      name: "x",
      imgPath: "/images/x.png",
      link: "https://x.com/Abhinav12108004"
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      link: "https://www.linkedin.com/in/abhinav-singh-50964727b"
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };
  