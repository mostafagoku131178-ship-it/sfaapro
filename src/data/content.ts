export interface PortfolioData {
  personal: {
    fullName: string;
    fullNameEn: string;
    title: string;
    titleEn: string;
    experienceYears: string;
    about: string;
    aboutEn: string;
    location: string;
    locationEn: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
  };
  navigation: {
    home: string;
    about: string;
    experience: string;
    education: string;
    certifications: string;
    skills: string;
    achievements: string;
    contact: string;
    downloadCV: string;
  };
  stats: Array<{
    number: string;
    label: string;
    sublabel: string;
  }>;
  experience: {
    position: string;
    institution: string;
    period: string;
    responsibilities: string[];
  };
  education: Array<{
    degree: string;
    institution: string;
    grade?: string;
    description: string;
    period: string;
  }>;
  certifications: Array<{
    id: number;
    title: string;
    institution: string;
    grade?: string;
    badge?: string;
    category: 'tot' | 'international' | 'leadership' | 'tech' | 'lang';
  }>;
  skills: {
    teaching: { title: string; items: string[] };
    nursing: { title: string; items: string[] };
    technical: { title: string; items: string[] };
    languages: { title: string; items: Array<{ name: string; level: string }> };
    personal: { title: string; items: string[] };
  };
  achievements: Array<{
    title: string;
    description: string;
    tag: string;
  }>;
  contact: {
    heading: string;
    subheading: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      successMessage: string;
    };
    info: {
      emailLabel: string;
      phoneLabel: string;
      locationLabel: string;
      hoursLabel: string;
      hoursValue: string;
    };
  };
}

export const contentEn: PortfolioData = {
  personal: {
    fullName: "Safaa Gomaa Hamed Taha",
    fullNameEn: "Safaa Gomaa Hamed Taha",
    title: "Nursing Educator | Nursing & Academic Training Specialist",
    titleEn: "Nursing Educator | Nursing & Academic Training Specialist",
    experienceYears: "23+ Years",
    about: "A dedicated nursing educator with more than 23 years of experience in nursing education and training. Holding a Bachelor of Nursing from Alexandria University and certified as a Training of Trainers (TOT) professional, my career focuses on preparing and qualifying future nursing professionals through modern, effective pedagogical methodologies. Recognized with an 'Excellent' rating in every annual performance review across my entire career.",
    aboutEn: "A dedicated nursing educator with more than 23 years of experience in nursing education and training. Holding a Bachelor of Nursing from Alexandria University and certified as a Training of Trainers (TOT) professional, my career focuses on preparing and qualifying future nursing professionals through modern, effective pedagogical methodologies. Recognized with an 'Excellent' rating in every annual performance review across my entire career.",
    location: "Egypt",
    locationEn: "Egypt",
    emailPlaceholder: "contact@safaa-taha.edu.eg",
    phonePlaceholder: "+20 (Editable in contact section)"
  },
  navigation: {
    home: "Home",
    about: "About",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    skills: "Skills",
    achievements: "Achievements",
    contact: "Contact",
    downloadCV: "Download CV"
  },
  stats: [
    { number: "23+", label: "Years of Experience", sublabel: "Nursing education & clinical leadership" },
    { number: "100%", label: "Excellent Annual Ratings", sublabel: "Consistent top-tier evaluation" },
    { number: "TOT", label: "Certified Master Trainer", sublabel: "Methods of modern pedagogy" },
    { number: "1000s", label: "Students & Nurses Qualified", sublabel: "Cohorts guided into healthcare" }
  ],
  experience: {
    position: "Nursing Teacher",
    institution: "Abu El-Matamir Nursing School",
    period: "2001 – Present",
    responsibilities: [
      "Teach nursing students both theoretical foundations and clinical nursing subjects with precision.",
      "Prepare, mentor, and qualify nursing staff to the highest professional healthcare standards.",
      "Carry out academic and educational duties with a consistent Excellent annual performance rating.",
      "Apply modern teaching and active training methods in classrooms, clinical labs, and interactive workshops."
    ]
  },
  education: [
    {
      degree: "Bachelor of Nursing",
      institution: "Faculty of Nursing, Alexandria University",
      grade: "Very Good",
      description: "Rigorous curriculum spanning advanced medical-surgical nursing, maternal & child care, community health, and educational foundations.",
      period: "Undergraduate Degree"
    },
    {
      degree: "Clinical Internship Year",
      institution: "Alexandria University Hospitals",
      grade: "Completed with Distinction",
      description: "Comprehensive intensive rotation across intensive care, surgical departments, emergency care, and clinical bedside nursing.",
      period: "Internship Residency"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Training of Trainers (TOT) for Nursing Specialists in Teaching Methods",
      institution: "General Administration of Health Technical Institutes",
      grade: "Excellent",
      badge: "Master Trainer",
      category: "tot"
    },
    {
      id: 2,
      title: "Nurse Tutors Transformation Programme",
      institution: "School of Health, Community & Education Studies, Northumbria University, UK",
      badge: "International",
      category: "international"
    },
    {
      id: 3,
      title: "Future of Nursing Education & Teacher Training",
      institution: "Ministry of Health and Population, General Administration for Human Resources Development",
      category: "leadership"
    },
    {
      id: 4,
      title: "Modern Teaching Methods",
      institution: "Smouha Training Center",
      category: "tot"
    },
    {
      id: 5,
      title: "Professional Training Course",
      institution: "Workers' Education Association, Egyptian Trade Union Federation",
      category: "leadership"
    },
    {
      id: 6,
      title: "Computer Skills Certificate",
      institution: "Oxford College, Damanhour",
      grade: "Excellent (96%)",
      badge: "Score: 96%",
      category: "tech"
    },
    {
      id: 7,
      title: "English Language, Level 5",
      institution: "Oxford College, Damanhour (Under supervision of the Ministry of Education)",
      grade: "Excellent",
      badge: "Proficiency",
      category: "lang"
    }
  ],
  skills: {
    teaching: {
      title: "Teaching & Training",
      items: [
        "Nursing curriculum delivery",
        "Training of Trainers (TOT)",
        "Modern teaching methods",
        "Designing and leading workshops",
        "Online teaching and training",
        "Student assessment and mentoring"
      ]
    },
    nursing: {
      title: "Nursing & Clinical",
      items: [
        "Clinical nursing practice",
        "Clinical and practical skills training",
        "Preparing and qualifying nursing staff"
      ]
    },
    technical: {
      title: "Technical Skills",
      items: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Windows Operating System"
      ]
    },
    languages: {
      title: "Languages",
      items: [
        { name: "Arabic", level: "Native Proficiency" },
        { name: "English", level: "Advanced Proficiency" }
      ]
    },
    personal: {
      title: "Personal Skills",
      items: [
        "Leadership and mentoring",
        "Communication and presentation",
        "Commitment and discipline",
        "Teamwork and collaboration",
        "Continuous professional development"
      ]
    }
  },
  achievements: [
    {
      title: "Consistently 'Excellent' Annual Rating",
      description: "Maintained an unbroken record of 'Excellent' ratings in every annual official performance review across 23+ years of service.",
      tag: "Career Milestone"
    },
    {
      title: "International Professional Development",
      description: "Successfully completed the Nurse Tutors Transformation Programme with Northumbria University, UK, elevating global pedagogical standards.",
      tag: "Global Standard"
    },
    {
      title: "Certified TOT Trainer (Grade: Excellent)",
      description: "Certified by the General Administration of Health Technical Institutes to train and qualify health educators and clinical instructors.",
      tag: "Credential"
    },
    {
      title: "Generations of Qualified Healthcare Professionals",
      description: "Guided, instructed, and graduated hundreds of skilled nurses who currently support critical healthcare facilities and hospitals across Egypt.",
      tag: "Community Impact"
    }
  ],
  contact: {
    heading: "Get in Touch",
    subheading: "Open for academic consultations, specialized nursing education workshops, and training programs.",
    form: {
      name: "Your Full Name",
      email: "Email Address",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      successMessage: "Thank you for reaching out! Your message has been prepared successfully."
    },
    info: {
      emailLabel: "Email Inquiries",
      phoneLabel: "Phone / Direct Contact",
      locationLabel: "Location",
      hoursLabel: "Academic Availability",
      hoursValue: "Sunday – Thursday (School Hours)"
    }
  }
};

export const contentAr: PortfolioData = {
  personal: {
    fullName: "صفاء جمعة حامد طه",
    fullNameEn: "Safaa Gomaa Hamed Taha",
    title: "معلمة تمريض | أخصائية تدريب تمريضي وأكاديمي",
    titleEn: "Nursing Educator | Nursing & Academic Training Specialist",
    experienceYears: "أكثر من 23 عاماً",
    about: "معلمة تمريض متفانية بخبرة تزيد عن 23 عاماً في مجال التعليم والتدريب التمريضي. حاصلة على بكالوريوس التمريض من جامعة الإسكندرية، ومعتمدة كأخصائية تدريب مدربين (TOT). يركز مساري المهني على إعداد وتأهيل أجيال من الكفاءات التمريضية وفق أرقى المعايير عبر أحدث الوسائل والأساليب التعليمية الفعالة، مع الحصول على تقييم سنوي بمرتبة «ممتاز» في كافة تقارير تقييم الأداء طوال المسيرة المهنية.",
    aboutEn: "Safaa Gomaa Hamed Taha - Nursing Educator",
    location: "جمهورية مصر العربية",
    locationEn: "Egypt",
    emailPlaceholder: "contact@safaa-taha.edu.eg",
    phonePlaceholder: "+20 (قابل للتعديل في قسم التواصل)"
  },
  navigation: {
    home: "الرئيسية",
    about: "عن المعلمة",
    experience: "الخبرة المهنية",
    education: "المؤهلات العلمية",
    certifications: "الشهادات والدورات",
    skills: "المهارات المهنية",
    achievements: "أبرز الإنجازات",
    contact: "تواصل معي",
    downloadCV: "تحميل السيرة الذاتية"
  },
  stats: [
    { number: "+23", label: "عاماً من الخبرة", sublabel: "في تدريس وتدريب التمريض" },
    { number: "%100", label: "تقارير أداء بتقدير ممتاز", sublabel: "تميز مستمر طوال سنوات الخدمة" },
    { number: "TOT", label: "مدربة مدربين معتمدة", sublabel: "أحدث طرائق التدريس الفعالة" },
    { number: "الآلاف", label: "تأهيل كوادر تمريضية", sublabel: "أجيال تخدم المنظومة الصحية" }
  ],
  experience: {
    position: "معلمة تمريض",
    institution: "مدرسة تمريض أبو المطامير",
    period: "2001 – حتى الآن",
    responsibilities: [
      "تدريس المواد التمريضية النظرية والعملية لطالبات وطلاب التمريض بأعلى معايير الدقة والاحترافية.",
      "إعداد وتأهيل الكوادر التمريضية وفق المعايير المهنية المعتمدة دولياً ومحلياً.",
      "أداء المهام الأكاديمية والتعليمية بتقييم سنوي مستمر بمرتبة «ممتاز» دون انقطاع.",
      "تطبيق أحدث أساليب التدريس والتدريب التفاعلي في الفصول الدراسية وقاعات التدريب العملي وورش العمل."
    ]
  },
  education: [
    {
      degree: "بكالوريوس التمريض",
      institution: "كلية التمريض – جامعة الإسكندرية",
      grade: "جيد جداً",
      description: "دراسة أكاديمية وسريرية مكثفة شملت تمريض الباطنة والجراحة، صحة الأم والطفل، تمريض صحة المجتمع، وأسس التعليم والتربية الصحية.",
      period: "المؤهل الجامعي الأساسي"
    },
    {
      degree: "سنة الامتياز الإكلينيكي",
      institution: "مستشفيات جامعة الإسكندرية",
      grade: "تمت بنجاح وتميز",
      description: "تدريب عملي سريري متقدم بأقسام الرعاية المركزة، الطوارئ، العمليات الجراحية، والأقسام الداخلية بالمستشفيات الجامعية.",
      period: "فترة التدريب الإكلينيكي"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "تدريب المدربين (TOT) لأخصائيي التمريض على طرائق التدريس",
      institution: "الإدارة العامة للمعاهد الفنية الصحية",
      grade: "ممتاز",
      badge: "مدرب معتمد",
      category: "tot"
    },
    {
      id: 2,
      title: "برنامج تطوير معلمي التمريض (Nurse Tutors Transformation Programme)",
      institution: "كلية الصحة والمجتمع والدراسات التعليمية – جامعة نورثمبريا، المملكة المتحدة (Northumbria University, UK)",
      badge: "دولي معتمد",
      category: "international"
    },
    {
      id: 3,
      title: "مستقبل تعليم التمريض وتدريب المعلمين",
      institution: "وزارة الصحة والسكان – الإدارة العامة لتنمية القوى البشرية",
      category: "leadership"
    },
    {
      id: 4,
      title: "طرائق التدريس الحديثة",
      institution: "مركز تدريب سموحة",
      category: "tot"
    },
    {
      id: 5,
      title: "الدورة التدريبية التخصصية",
      institution: "المؤسسة الثقافية العمالية – الاتحاد العام لنقابات عمال مصر",
      category: "leadership"
    },
    {
      id: 6,
      title: "شهادة مهارات الحاسب الآلي (Computer Skills)",
      institution: "أكسفورد كوليدج – دمنهور",
      grade: "ممتاز (96%)",
      badge: "درجة: 96%",
      category: "tech"
    },
    {
      id: 7,
      title: "اللغة الإنجليزية – المستوى الخامس (Level 5)",
      institution: "أكسفورد كوليدج – دمنهور (تحت إشراف وزارة التربية والتعليم)",
      grade: "ممتاز",
      badge: "إتقان متقدم",
      category: "lang"
    }
  ],
  skills: {
    teaching: {
      title: "التدريس والتدريب",
      items: [
        "تدريس مناهج التمريض النظرية والتطبيقية",
        "تدريب المدربين (TOT)",
        "طرائق التدريس الحديثة والتفاعلية",
        "تصميم وإدارة ورش العمل التعليمية",
        "التدريس والتدريب الإلكتروني (Online Training)",
        "تقييم الطلاب والإرشاد الأكاديمي والمهني"
      ]
    },
    nursing: {
      title: "التمريض والممارسة السريرية",
      items: [
        "الممارسة التمريضية الإكلينيكية المتقدمة",
        "التدريب على المهارات السريرية والعملية",
        "إعداد وتأهيل الكوادر والفرق التمريضية"
      ]
    },
    technical: {
      title: "المهارات التقنية",
      items: [
        "مايكروسوفت وورد (Microsoft Word)",
        "مايكروسوفت إكسيل (Microsoft Excel)",
        "مايكروسوفت باوربوينت (Microsoft PowerPoint)",
        "نظام التشغيل ويندوز (Windows)"
      ]
    },
    languages: {
      title: "اللغات",
      items: [
        { name: "اللغة العربية", level: "اللغة الأم (إتقان تام)" },
        { name: "اللغة الإنجليزية", level: "مستوى متقدم (Advanced)" }
      ]
    },
    personal: {
      title: "المهارات الشخصية والقيادية",
      items: [
        "القيادة والإرشاد والتوجيه التربوي",
        "التواصل الفعال ومهارات العرض والإلقاء",
        "الالتزام العالي والانضباط المهني",
        "العمل الجماعي وروح الفريق",
        "التطوير المهني والتعلم المستمر"
      ]
    }
  },
  achievements: [
    {
      title: "تقارير أداء سنوية بتقدير ممتاز طوال المسيرة المهنية",
      description: "الحصول الدائم والمتواصل على تقييم «ممتاز» في كل التقارير الرسمية السنوية على مدار أكثر من 23 عاماً من العطاء الأكاديمي والسريري.",
      tag: "تميز وظيفي مستمر"
    },
    {
      title: "تطوير مهني دولي مع جامعة نورثمبريا البريطانية",
      description: "إتمام برنامج التحول النوعي لمعلمي التمريض بشراكة دولية رفيعة مع جامعة نورثمبريا في المملكة المتحدة لنقل أفضل ممارسات التعليم الصحي.",
      tag: "معيار عالمي"
    },
    {
      title: "مدربة TOT معتمدة بتقدير ممتاز",
      description: "اعتماد رسمي في تدريب المدربين على أحدث استراتيجيات وطرق التدريس من الإدارة العامة للمعاهد الفنية الصحية بتقدير ممتاز.",
      tag: "اعتماد قيادي"
    },
    {
      title: "المساهمة في إعداد وتخريج أجيال من الكوادر التمريضية",
      description: "تخريج دفعات متعاقبة من خريجي وخريجات التمريض المؤهلين على أعلى مستوى علمي وعملي لخدمة المستشفيات والمراكز الطبية في مصر.",
      tag: "أثر مجتمعي"
    }
  ],
  contact: {
    heading: "تواصل معي",
    subheading: "مستعدة للاستشارات الأكاديمية والتربوية وورش عمل تدريب كوادر وهيئات التمريض والبرامج التعليمية المتخصصة.",
    form: {
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      subject: "موضوع الرسالة",
      message: "نص الرسالة أو الاستفسار",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successMessage: "شكراً لتواصلك! تم تجهيز رسالتك بنجاح وسأرد عليك في أقرب وقت."
    },
    info: {
      emailLabel: "البريد الإلكتروني المهني",
      phoneLabel: "الهاتف / التواصل المباشر",
      locationLabel: "الموقع الجغرافي",
      hoursLabel: "أوقات التواجد الأكاديمي",
      hoursValue: "الأحد – الخميس (أوقات الدوام المدرسي)"
    }
  }
};
