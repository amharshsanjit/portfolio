export const personalInfo = {
  name: "Harsh Sanjit",
  title: "AI/ML Engineer in the Making",
  roles: [
    "AI/ML Engineer in the Making",
    "Computer Vision & Python Developer",
    "Java & Software Craftsman",
    "IoT & Embedded Systems Enthusiast"
  ],
  education: {
    degree: "B.Tech Computer Science Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    university: "Rungta International Skills University",
    status: "Undergraduate Student",
    highlights: [
      "Specialized coursework in AI/ML algorithms, Computer Vision, and Data Engineering",
      "Core focus on Data Structures & Algorithms with Java, C, and Python",
      "Hands-on embedded systems and IoT device interfacing labs",
      "Database design, SQL modeling, and operating systems architecture"
    ]
  },
  bio: "B.Tech Computer Science Engineering student specializing in AI & ML at Rungta International Skills University. Passionate about engineering intelligent systems that bridge real-world computer vision, desktop automation, and physical IoT hardware.",
  location: "India",
  portfolioUrl: "https://harshsanjit.dev",
  portfolioDomain: "harshsanjit.dev",
  email: "harshsanjit18@gmail.com",
  secondaryEmail: "harshsanjitofficial@gmail.com",
  socialLinks: {
    github: "https://github.com/amharshsanjit",
    linkedin: "https://www.linkedin.com/in/harshsanjit/",
    instagram: "https://www.instagram.com/harsh_sanjit.cse",
    portfolio: "https://harshsanjit.dev"
  },
  metrics: [
    { label: "Core Projects Built", value: "4+" },
    { label: "Tech Stack Tools", value: "12+" },
    { label: "Specialization", value: "AI & ML" },
    { label: "Code Dedication", value: "100%" }
  ]
};

export const skillsData = [
  {
    category: "Languages",
    description: "Core programming languages for algorithmic problem solving and system development",
    skills: [
      { name: "Python", level: "Advanced", icon: "Code", highlight: "Primary language for AI, CV & Jarvis automation", color: "from-yellow-500 to-amber-600" },
      { name: "Java", level: "Proficient", icon: "Coffee", highlight: "Object-oriented software development & DSA", color: "from-orange-500 to-red-600" },
      { name: "C", level: "Proficient", icon: "Cpu", highlight: "Low-level memory management & system fundamentals", color: "from-blue-500 to-indigo-600" },
      { name: "SQL", level: "Intermediate", icon: "Database", highlight: "Relational queries, schema design & data storage", color: "from-emerald-500 to-teal-600" },
      { name: "JavaScript", level: "Intermediate", icon: "Globe", highlight: "Interactive frontend logic & web apps", color: "from-yellow-400 to-yellow-600" },
      { name: "HTML & CSS", level: "Proficient", icon: "Layout", highlight: "Semantic UI markup & modern responsive styling", color: "from-rose-500 to-red-500" },
    ]
  },
  {
    category: "AI / ML & Vision",
    description: "Machine learning pipelines, real-time computer vision, and neural tracking",
    skills: [
      { name: "AI/ML Foundations", level: "Advanced", icon: "Brain", highlight: "Supervised/unsupervised models & predictive analysis", color: "from-red-500 to-crimson-glow" },
      { name: "OpenCV", level: "Proficient", icon: "Eye", highlight: "Real-time image processing, haar cascades & motion tracking", color: "from-red-600 to-rose-700" },
      { name: "MediaPipe", level: "Proficient", icon: "Crosshair", highlight: "High-speed hand landmark detection & gesture tracking", color: "from-cyan-500 to-blue-600" },
      { name: "Computer Vision", level: "Proficient", icon: "Scan", highlight: "Spatial coordinates, feature mapping & optical flow", color: "from-purple-500 to-indigo-600" },
    ]
  },
  {
    category: "Hardware & IoT",
    description: "Embedded computing, microcontroller sensors, and physical system security",
    skills: [
      { name: "IoT Systems", level: "Proficient", icon: "Radio", highlight: "Sensor networks, automation & microcontroller logic", color: "from-emerald-500 to-green-600" },
      { name: "Arduino Platform", level: "Proficient", icon: "Cpu", highlight: "Hardware programming, PIR/ultrasonic sensor integration", color: "from-teal-500 to-cyan-600" },
      { name: "Sensors & Actuators", level: "Intermediate", icon: "Layers", highlight: "Keypads, LCD displays, relays, buzzers & alarms", color: "from-amber-500 to-orange-600" },
    ]
  },
  {
    category: "DevOps & Tools",
    description: "Version control, containerization environments, and developer toolchain",
    skills: [
      { name: "Git", level: "Proficient", icon: "GitBranch", highlight: "Version control, branching workflows & merge hygiene", color: "from-orange-600 to-red-600" },
      { name: "GitHub", level: "Proficient", icon: "Github", highlight: "Open-source collaboration, repository maintenance", color: "from-slate-400 to-slate-600" },
      { name: "Linux", level: "Intermediate", icon: "Terminal", highlight: "CLI navigation, bash scripting & system permissions", color: "from-yellow-500 to-amber-700" },
      { name: "Docker", level: "Foundational", icon: "Box", highlight: "Container concepts, environment isolation & deployment", color: "from-blue-500 to-sky-600" },
    ]
  }
];

export const projectsData = [
  {
    id: "jarvis-ai",
    title: "Jarvis AI Assistant",
    subtitle: "Python-Powered Desktop Voice & Task Automation System",
    category: "AI & Automation",
    badge: "Python • NLP • Automation",
    shortDesc: "An intelligent personal AI desktop assistant built in Python that executes voice commands, handles system automation, searches the web, and automates daily workflows.",
    longDesc: "Jarvis AI Assistant is a voice-activated intelligent desktop companion engineered to bridge natural spoken dialogue with computer actions. Powered by Python, it leverages speech recognition, text-to-speech synthesis, and operating system automation to handle system diagnostics, open applications, search Wikipedia/Google, provide time and weather updates, and manage desktop tasks hands-free.",
    techStack: ["Python", "SpeechRecognition", "Pyttsx3", "OS / Subprocess", "Web Scraping", "APIs"],
    features: [
      "Voice recognition pipeline with low-latency spoken command parsing",
      "Dynamic text-to-speech synthesis with offline audio responses",
      "System automation: volume control, application launching, and shutdown timers",
      "Automated web search, Wikipedia knowledge extraction, and real-time query parsing",
      "Modular command handler architecture allowing easy extension of custom commands"
    ],
    architecture: "Microphone Input ➔ SpeechRecognition STT ➔ Intent Matcher & Action Dispatcher ➔ OS Controller / Web Engine ➔ Pyttsx3 TTS Audio Output",
    githubUrl: "https://github.com/amharshsanjit",
    accentColor: "crimson",
    stats: {
      type: "Desktop AI Engine",
      language: "Python 3.x",
      mode: "Real-time Voice & Text"
    }
  },
  {
    id: "face-motion-tracker",
    title: "Face Motion Tracker",
    subtitle: "Real-Time Facial Landmark & Optical Motion Detection",
    category: "Computer Vision",
    badge: "OpenCV • Python • Motion Analysis",
    shortDesc: "A high-performance computer vision system using OpenCV and Python that tracks facial movement, spatial displacement, and head orientations in real time.",
    longDesc: "Face Motion Tracker is a computer vision application that captures high-frame-rate webcam video to compute facial landmarks, spatial coordinates, and directional motion vectors. Built using Python, OpenCV, and optimized matrix computations, it dynamically detects face position shifts to track movement velocity, boundary crossings, and posture shifts without dedicated hardware sensors.",
    techStack: ["Python", "OpenCV", "NumPy", "Haar Cascade / DNN", "Computer Vision"],
    features: [
      "Real-time webcam video feed stream processing at 30+ FPS",
      "Sub-pixel face boundary estimation and motion vector computation",
      "Dynamic tracking overlay with HUD coordinates and real-time bounding boxes",
      "Noise filtering and smoothing algorithms to eliminate jitter",
      "Motion detection alerts triggered when movement crosses predefined thresholds"
    ],
    architecture: "Webcam Feed ➔ OpenCV Frame Preprocessing (Grayscale / Equalize) ➔ Face Detector ➔ Centroid & Vector Tracker ➔ Visual HUD & Event Logger",
    githubUrl: "https://github.com/amharshsanjit",
    accentColor: "red",
    stats: {
      type: "Vision Pipeline",
      frameRate: "30+ FPS Real-time",
      engine: "OpenCV + NumPy"
    }
  },
  {
    id: "air-canvas",
    title: "AirCanvas",
    subtitle: "Touchless Gesture-Based Drawing via Hand Landmark Tracking",
    category: "Human-Computer Interaction",
    badge: "MediaPipe • OpenCV • Gesture AI",
    shortDesc: "A futuristic touchless drawing canvas that allows users to paint in the air using fingertip gestures tracked through camera vision with MediaPipe and OpenCV.",
    longDesc: "AirCanvas reimagines human-computer interaction by transforming an ordinary webcam into an interactive touchless digital drawing pad. By processing real-time video through MediaPipe's hand tracking pipeline, the system tracks the precise coordinates of the index fingertip. Users can switch brush colors, adjust stroke widths, or wipe the canvas clear with intuitive spatial gestures.",
    techStack: ["Python", "MediaPipe", "OpenCV", "NumPy", "Hand Landmark Tracking"],
    features: [
      "High-precision 21-point hand landmark detection powered by MediaPipe",
      "Fingertip index tracking mapped to a continuous drawing canvas buffer",
      "Gesture state machine: Draw mode (single finger up), Navigation/Select mode (two fingers up)",
      "Multi-color palette selection bar (Crimson, Cyber Cyan, Emerald, Neon Yellow, Eraser)",
      "Touchless clear screen command and real-time visual canvas overlay blend"
    ],
    architecture: "Video Frame ➔ MediaPipe Hands Landmark Extractor ➔ Fingertip (Point 8) Coordinate Tracker ➔ Gesture State Evaluator ➔ Canvas Matrix Blender ➔ Display Frame",
    githubUrl: "https://github.com/amharshsanjit",
    accentColor: "crimson",
    hasLiveDemo: true, // we will provide an interactive browser canvas demo!
    stats: {
      type: "Vision HCI System",
      tracking: "21 Hand Landmarks",
      latency: "< 40ms Detection"
    }
  },
  {
    id: "vaultguard",
    title: "VaultGuard System",
    subtitle: "Smart IoT Security & Intrusion Detection Hardware System",
    category: "IoT & Embedded Systems",
    badge: "Arduino • IoT Sensors • Embedded C",
    shortDesc: "An Arduino-based smart security vault monitoring system integrating biometric/keypad authentication, motion sensors, and intrusion alert mechanisms.",
    longDesc: "VaultGuard System is a comprehensive physical computing security solution engineered on the Arduino microcontroller ecosystem. Designed to protect restricted physical enclosures, it integrates ultrasonic and PIR motion sensors to monitor proximity, a security keypad for multi-digit passcode validation, an LCD display for state feedback, and an automated alarm buzzer with lockdown protocols upon unauthorized access attempts.",
    techStack: ["Arduino C++", "Microcontrollers", "PIR Motion Sensor", "Ultrasonic Sensor", "Keypad Matrix", "LCD & Buzzer"],
    features: [
      "Dual-layer detection: Proximity motion monitoring (PIR) and perimeter distance sensing (HC-SR04)",
      "Secure PIN validation state machine with consecutive failed-attempt lockdown",
      "Real-time visual status reporting via 16x2 LCD display and LED state indicators",
      "Piezoelectric buzzer alarm triggers with variable frequency warning siren",
      "Low power embedded design optimized for continuous reliable monitoring"
    ],
    architecture: "Sensors (PIR + Ultrasonic + Keypad) ➔ Arduino Microcontroller I/O Pins ➔ Security Logic State Machine ➔ Actuators (Relay, Buzzer, LCD Display, Status LEDs)",
    githubUrl: "https://github.com/amharshsanjit",
    accentColor: "red",
    stats: {
      type: "Embedded IoT System",
      hardware: "Arduino Platform",
      sensors: "PIR / Ultrasonic / Keypad"
    }
  }
];

export const educationData = [
  {
    institution: "Rungta International Skills University",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science Engineering",
    specialization: "Artificial Intelligence & Machine Learning (AI & ML)",
    period: "Undergraduate Program",
    badge: "Current Degree",
    status: "Active Student",
    description: "Rigorous academic curriculum focused on the foundational and applied aspects of computer science, modern artificial intelligence, deep learning architectures, computer vision, and embedded hardware systems.",
    coreCourses: [
      "Artificial Intelligence & Machine Learning",
      "Data Structures and Algorithms (Java & C)",
      "Computer Vision & Image Processing",
      "Database Management Systems & SQL",
      "Object-Oriented Programming (Java)",
      "Operating Systems & Linux Kernel Concepts",
      "Computer Networks & Distributed Systems",
      "Internet of Things (IoT) & Sensor Interfacing"
    ],
    academicHighlights: [
      "Specialized in AI & ML with practical laboratory focus on neural modeling and vision algorithms",
      "Authored real-time engineering prototypes integrating Python OpenCV with MediaPipe",
      "Built embedded IoT security systems utilizing Arduino microcontrollers and physical sensors",
      "Strong foundation in algorithmic logic, clean code design, and version control workflows"
    ]
  }
];

export const achievementsData = [
  {
    id: 1,
    title: "Engineered 4+ Practical Tech Prototypes",
    category: "Engineering & Innovation",
    description: "Designed, developed, and tested complete software and hardware projects spanning Voice AI (Jarvis), Touchless Vision (AirCanvas), Face Tracking, and IoT Security (VaultGuard).",
    icon: "Rocket"
  },
  {
    id: 2,
    title: "Real-Time Vision & Gesture Innovation",
    category: "AI & Computer Vision",
    description: "Successfully implemented MediaPipe hand landmark tracking for AirCanvas with sub-40ms latency, enabling high-precision touchless drawing in 3D space.",
    icon: "Eye"
  },
  {
    id: 3,
    title: "Hardware-Software IoT Integration",
    category: "Embedded Computing",
    description: "Constructed the VaultGuard system from circuit schematic to firmware logic on Arduino, uniting motion sensors, pinpad authentication, and alarm actuators.",
    icon: "Cpu"
  },
  {
    id: 4,
    title: "Active Open-Source Builder & GitHub Presence",
    category: "Developer Community",
    description: "Consistently utilizing Git workflows, clean commit hygiene, Linux terminal environments, and Docker virtualization to build structured codebases.",
    icon: "GitBranch"
  }
];

export const terminalCommands = {
  help: "Available commands:\n  • about      - Learn about Harsh Sanjit\n  • skills     - List core technical stack\n  • projects   - View flagship engineering projects\n  • education  - View university & specialization details\n  • contact    - Get email & social channels\n  • github     - Open GitHub profile\n  • clear      - Clear terminal screen",
  about: "Harsh Sanjit | B.Tech CSE (AI & ML) student at Rungta International Skills University.\nAspiring AI/ML Engineer, Python & Java Developer, and IoT enthusiast.\nMission: Building intelligent systems at the intersection of AI, computer vision, and physical hardware.",
  skills: "Core Tech Stack:\n  • Languages: Python, Java, C, SQL, JavaScript, HTML, CSS\n  • AI & Vision: OpenCV, MediaPipe, ML Models, Gesture Recognition\n  • IoT & Hardware: Arduino, Sensors (PIR/Ultrasonic), Microcontrollers\n  • Tools: Git, GitHub, Linux, Docker, VS Code",
  projects: "Featured Projects:\n  1. Jarvis AI Assistant (Python voice desktop automation)\n  2. Face Motion Tracker (OpenCV computer vision)\n  3. AirCanvas (MediaPipe touchless air drawing)\n  4. VaultGuard System (Arduino IoT security monitoring)",
  education: "University: Rungta International Skills University\nDegree: B.Tech Computer Science Engineering\nSpecialization: Artificial Intelligence & Machine Learning",
  contact: "Primary Email: harshsanjit18@gmail.com\nSecondary Email: harshsanjitofficial@gmail.com\nGitHub: https://github.com/amharshsanjit\nLinkedIn: https://www.linkedin.com/in/harshsanjit/\nInstagram: https://www.instagram.com/harsh_sanjit.cse\nPortfolio: harshsanjit.dev",
  whoami: "visitor@harshsanjit.dev [Guest Session: Access Granted]"
};
