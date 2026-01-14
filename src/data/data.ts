export const siteData = {
  // app bar data
  menuItems: [
    {
      name: "About",
      href: "/",
      submenus: [
        { name: "About the Conference", href: "#about_the_conference" },
        { name: "Key Dates", href: "#key_dates" },
        { name: "About TSM Madurai", href: "#about_tsm_madurai" },

        {
          name: "Collaborating Institutions",
          href: "#collaborating-institutions",
        },
        {
          name: "Publication Partner",
          href: "#publication_partner",
        },
        {
          name: "Outreach Partner",
          href: "#outreach_partner",
        },
      ],
    },
    {
      name: "Programme",
      href: "/programme",
      submenus: [
        // { name: "Conference Tracks & Themes", href: "#tracks" },
        { name: "Conference Tracks", href: "#tracks" },
        { name: "Day-wise Schedule", href: "#schedule" },
        { name: "Pre-Conference Workshop", href: "#workshop" },
      ],
    },
    {
      name: "Committee",
      href: "/committee",
      submenus: [
        { name: "Chief Patrons", href: "#chief_patrons" },
        { name: "Conference Convenor", href: "#conference_convenor" },
        { name: "Organizing Committee", href: "#organization-committe" },
        {
          name: "Internal Organizing Committee",
          href: "#internal_organizing_committee",
        },
        { name: "Conference Advisory Committee", href: "#advisory" },
        { name: " Review Board Members", href: "#reviewer-board-members" },
        {
          name: "Internal Review Committee",
          href: "#internal_review_committee", 
        },
      ],
    },
    {
      name: "Speakers",
      href: "/speakers",
      // submenus: [
      //     { name: "", href: "#speakers" },
      // ],
    },
    {
      name: "Publications ",
      href: "/guidelines",
      submenus: [
        { name: "Who can Participate", href: "#call-for-papers" },
        { name: "Conference Review Process", href: "#conference-review" },
        { name: "Publication Options", href: "#publication-options" },
        { name: "Submission Guidelines", href: "#abstract-guidelines" },
        { name: "Publication Avenues", href: "#publication-avenue" },
        { name: "Paper/Abstract Submission", href: "#abstract-guidelines" },
        // { name: "Abstract Submission Guidelines", href: "#abstract-guidelines" },
        // { name: "Full Paper Submission Guidelines", href: "#paper-guidelines" },
        // { name: "Presentation Guidelines", href: "#presentation-guidelines" },
        { name: "Editorial Board", href: "#editorial_board" },
      ],
    },
    {
      name: "Registration",
      href: "/registration",
      submenus: [
        // { name: "Proposal Submission", href: "#proposal_submission" },
        { name: "Registration Details", href: "#registration-details" },
        { name: "Payment Info", href: "#payment" },
      ],
    },
    {
      name: "Accommodation",
      href: "/accomodation",
      submenus: [
        { name: "Connectivity", href: "#connectivity" },
        { name: "Accommodation", href: "#accommodation" },
        { name: "List of Hotels ", href: "#list_of_hotels" },
        { name: "Discover Madurai", href: "#discover-madurai" },
      ],
    },
    {
      name: "Sponsors",
      href: "/sponsors",
    },

    {
      name: "Contact Us",
      href: "/contact",
      submenus: [
        { name: "Internal Committee", href: "#internal-committee" },
        { name: "Contact Us", href: "#contact-form" },
        { name: "FAQ", href: "#faq" },
      ],
    },
  ],
  
  // for marquee data
  marqueeData: ["Please download the Overall Conference Program and Presentation schedule (Online & Offline)","Please download the Overall Conference Program and Presentation schedule (Online & Offline)","Please download the Overall Conference Program and Presentation schedule (Online & Offline)"],

  // home page data
  heroSlideImages: [
    // "/images/conf logo.jpg",
    // "/images/hero-slides/FOSLogo.png",
    "/images/hero-slides/FOS.jpg",
    "/images/80THrankdesign.jpg",

    "/images/hero-slides/thiyagaraja_3.jpg",
    // "/images/hero-slides/thiyagaraja_1.jpg",
    "/images/hero-slides/Foscollobratinginst.png",
    // "/images/hero-slides/thiyagaraja_3.jpg"
  ],

  aboutData: [
    {
      title: "Thiagarajar School of Management, India",
      description:
        "Established in 1962, Thiagarajar School of Management (TSM), Madurai, is a premier Institute offering quality management education in a lush 17-acre campus. The Institute began with Executive Development Programs and later launched its MBA in 1972, followed by a full-time MBA in 1986. TSM offers AICTE-approved MBA and PGDM programs, accredited by the National Board of Accreditation (NBA) and awarded an ‘A+’ grade by NAAC for academic excellence. In recognition of its standards, TSM is consistently ranked among the top 100 B-schools in India by the NIRF Rankings. The Institute offers a PhD program affiliated with Alagappa University. With strong Industry linkages, excellent placement records, and a focus on holistic education, TSM equips students with managerial, analytical, and life skills while providing rich exposure through Internships, Research, and Consultancy Opportunities.",
    },
    {
      title: "The Conference",
      description:
        "The International Conference on Frontiers of Sustainability - Global Responsibility for Innovation and Entrepreneurship (FOS 2026 – GRIE), organized by the Research Centre, Thiagarajar School of Management, India. The conference aims to explore cutting-edge strategies for a sustainable future. It brings together Global Researchers, Innovators, Practitioners, and Policymakers to foster collaborative solutions. The event promotes inter-disciplinary dialogue addressing Climate Change, Social Equity, and Digital Transformation. Participants will engage in thought-provoking discussions on sustainable innovation and inclusive development. It will highlight responsible practices across sectors, aligning with the UN Sustainable Development Goals (SDGs). Research papers and Research pitches will be presented for both academic and practical relevance. This platform will empower institutions and individuals to rethink sustainability in a globalized, digital world.",
    },
  ],

  aboutTsmVideoLink:
    "https://www.youtube.com/embed/y5kbWpMq4xE?si=qcskFS3wrkivShsG",

  brochurePdfPath: "/pdfs/GRIE Brochure.pdf",
  conferenceProgramSchedulePdfPath: "/pdfs/Conference_Program_Schedule.pdf",
  presentationSchedule_OfflinePdfPath: "/pdfs/Presentation_Schedule_(Offline).pdf",
  presentationSchedule_OnlinePdfPath: "/pdfs/Presentation_Schedule_(Online).pdf",
  posterPath: "/images/GRIE Conference Poster.png",


  collabtaorData: [
    {
      id: 1,
      name: "ICN Business School, France",
      desc: "ICN Business School is a French Business School with campuses in Paris, Nancy, and Berlin. It's known for its interdisciplinary approach, emphasizing Creativity and Innovation in Business Education, and holds prestigious Triple Crown accreditation (AACSB, EQUIS, and AMBA) & QS Ranking 51. The school offers a range of programs from Bachelor’s to Master’s levels, including specialized programs in areas like Corporate Finance and Digital Marketing.",
      img: "/images/collabrators/icn bs.png",
      link: "https://www.icn-artem.com/en/",
    },
    {
      id: 2,
      name: "Università degli Studi di Napoli Federico II, Italy",
      desc: "Founded in 1224, the Università degli Studi di Napoli Federico II is one of the World’s oldest academic institutions in continuous operation, one among the ten Universities globally in continuous operation since its inception (QS Ranking 379). The University hosts 24 Inter-Departmental research centres and 17 Inter-University Research Centres, and is an Institution that actively promotes Research Activities. The Institute actively collaborates with other research Institutions, both within Italy and with International Institutions.",
      img: "/images/collabrators/EMI.png",
      link: "https://www.international.unina.it/",
    },
    {
      id: 3,
      name: "University of Sussex, United Kingdom",
      desc: "University of Sussex is a Public Research University located in Falmer, East Sussex, England. The University(space)received its Royal Charter in August 1961, the first of the Plate Glass University generation. Overall QS Ranking is 278 among the world University rankings in 2024. In the Research Excellence Framework, out of the 89% research submitted, 40.6% are regarded as “world-leading” or “Internationally excellent”, 48.4% as per the 2021 REF rankings. The University was also awarded Silver in the 2023 Teaching Excellence Framework.",
      img: "/images/collabrators/sussex.jpg",
      link: "https://www.sussex.ac.uk/",
    },
    {
      id: 4,
      name: "School of Business, Universiti Teknologi Brunei (UTB), Brunei",
      desc: "The School of Business at Universiti Teknologi Brunei (UTB) is a leading Institution committed to cultivating Innovative, Ethical, and Globally-minded Business Leaders. Offering Undergraduate, Postgraduate, and Professional Programs, the School emphasizes practical learning, Research excellence, and Entrepreneurship Development. With a strong focus on Integrating Technology, Sustainability, and Islamic business values, UTB’s School of Business equips students to navigate complex business environments and contribute effectively to Brunei’s Smart Nation initiatives. Its dynamic faculty and industry collaborations foster transformative learning experiences that shape future-ready professionals.",
      img: "/images/collabrators/bruneiuniv.jpg",
      link: "https://www.utb.edu.bn/",
    },
    {
      id: 5,
      name: "Center for Application Economics Research (CAER), Ton Duc Thang University in Ho Chi Minh City, Vietnam",
      desc: "The Center for Application Economics Research (CAER) at Ton Duc Thang University in Ho Chi Minh City, Vietnam, is committed to promoting superior Research, Education, and Policy Discourse in the fields of Economics and Finance. CAER encourages inter-disciplinary collaboration, advocates for evidence-based solutions for sustainable development, and establishes robust connections among Academia(or academicians), Industry, and Politicians. CAER significantly aids Vietnam's integration into the Global Academic and Professional World through its Research and Training activities.",
      img: "/images/image003.png",
      link: "https://www.tdtu.edu.vn/en",
    },
  ],

  publicationPartners: [
    {
      id: 5,
      Title: "",
      name: "",
      desc: "",
      img: "/images/springer.jpeg",
      link: "",
    },
  ],
  outReachPartners: [
    {
      id: 6,
      Title: "Outreach Partner ",
      name: "ServiceSetu Academics",
      desc: "ServiceSetu Academics is a trusted partner in higher education, empowering the academic community through knowledge, upskilling, and global collaborations. Since 2021, we have partnered with leading B-Schools and universities worldwide to drive academic and research excellence. Our portfolio spans strategic outreach, recruitment, and event co-creation, alongside certification programmes, short-term courses, and training with top international institutions.",
      img: "/images/ServiceSetu.png",
      link: "https://servicesetu.org/",
    },
    {
      id: 7,
      Title: "Media Partner",
      name: "International Conference Alerts",
      desc: "https://internationalconferencealerts.com/",
      img: "/images/Internation_conf_alert.png",
      link: "https://internationalconferencealerts.com/",
    },
    {
      id: 8,
      Title: "Media Partner",
      name: "Conference Alerts",
      desc: "https://conferencealerts.co.in/",
      img: "/images/confalerts.jpeg",
      link: "https://conferencealerts.co.in/",
    },
    {
      id: 9,
      Title: "Media Partner",
      name: "All Conference Alerts",
      desc: "https://allconferencealert.net/",
      img: "/images/allconfalerts.png",
      link: "https://allconferencealert.net/",
    },
  ],

  keyDates: [
    {
      label: "Submission Deadline",
      value: "15th December 2025",
    },
    {
      label: "Author Notification",
      value: "20th December 2025",
    },
    {
      // label: "Camera Ready Deadline",
      label: "Final Submission",
      value: "29th December 2025",
    },
    {
      label: "Final Registration Deadline",
      value: "12th January 2026",
    },
    // {
    //   label: "International Conference Venue",
    //   value: "Thiagarajar School of Management, Madurai, Tamil Nadu, India",
    // },
    {
      label: " Conference Dates ",
      value: "22-24 January 2026",
    },
  ],

  maduraiPlaces: [
    {
      src: "/images/mennakshi_amman_temple.jpeg",
      title: "Meenakshi Amman Temple",
    },
    { src: "/images/alagar_koil.jpeg", title: "Alagar Koil" },
    { src: "/images/gandhi_museum.jpg", title: "Gandhi Museum" },
    { src: "/images/thirupparankundram.jpeg", title: "Thirupparankundram" },
    { src: "/images/othakadai_samanar_hills.jpg", title: "Samanar Hills" },
    {
      src: "/images/thirumalai_nayakkar_palace.jpg",
      title: "Thirumalai Nayakkar Palace",
    },
  ],

  // programme page data
  conferenceTracks: [
    {
      title: "Sustainable Marketing & Responsible Consumer Engagement",
      desc: [
        "Sustainable marketing strategies, business models, and innovations.",
        "Cross-cultural perspectives on responsible consumer behaviour and engagement.",
        "Green branding, eco-labelling, and ethical consumption practices.",
        "Digital transformation and technology-enabled sustainability marketing.",
        "Corporate social responsibility (CSR) and stakeholder engagement.",
        "Circular economy and sustainable supply chain marketing.",
        "Consumer activism, advocacy, and co-creation of sustainability initiatives.",
        "Metrics, frameworks, and assessment tools for sustainability impact.",
        "Policy implications and regulation shaping sustainable consumer engagement.",
        "Emerging market dynamics and inclusion in sustainable marketing.",
      ],
      // desc: "Green Branding & Eco-labeling Strategies – Building trust through authentic eco-labels and environmentallyresponsible branding.",
      sdg_link:
        "SDG 12 (Responsible Consumption & Production), SDG 8 (Decent Work & Economic Growth).",
      // path: "/pdfs/tracks/temp_track_1.pdf",
      path: "/pdfs/Newtracks/Track1.pdf",
      fileName: "Track1.pdf",
    },
    {
      title:
        "Sustainable Supply Chain, Operations & Circular Economy Practices",
      // desc: "Exploring sustainable logistics, production processes, and circular economy practices to minimize waste and optimize resource use.",
      desc: [
        "Green Supply Chain Management – Reducing environmental impacts across sourcing, production, and delivery.",
        "Ethical Sourcing & Procurement – Ensuring materials are sourced responsibly and fairly.",
        "Zero-Waste Operations & Closed-Loop Logistics – Designing processes where nothing goes to waste.",
        "Circular Economy Indicators & Metrics – Tracking and measuring circularity performance.",
        "Life Cycle Sustainability Assessment - A holistic evaluation to compare options and reveal sustainability trade-offs.",
        "ESG Governance in Supply Chains – Embedding environmental, social, and governance standards in supply networks.",
      ],
      sdg_link:
        "SDG 9 (Industry, Innovation & Infrastructure), SDG 12 (Responsible Consumption & Production).",
      // path: "/pdfs/tracks/temp_track_2.pdf",
      path: "/pdfs/Newtracks/Track2.pdf",
      fileName: "Track2.pdf",
    },
    {
      title: "Sustainable Finance, Impact Investing & Green Economics  ",
      // desc: "Leveraging finance and investments to drive sustainability, green projects, and inclusive economic growth.",
      desc: [
        "ESG Integration in Investment Decisions – Incorporating environmental, social, and governance factors in portfolio management.",
        "Green Bonds & Climate Finance – Funding projects with measurable environmental benefits.",
        "Impact Measurement in Finance – Evaluating the social and environmental outcomes of investments.",
        "Socially Responsible Banking – Embedding sustainability and ethical priorities in banking practices.",
        "Regulatory Frameworks for Sustainable Investing – Policies and taxonomies guiding ethical and green finance.",
      ],
      sdg_link:
        "SDG 8 (Decent Work & Economic Growth), SDG 17 (Partnerships for the Goals.",
      // path: "/pdfs/tracks/track.pdf",
      path: "/pdfs/Newtracks/Track3.pdf",
      fileName: "Track3.pdf",
    },
    {
      title: "Sustainable Entrepreneurship & Innovative Business Models ",
      // desc: "Encouraging entrepreneurs to adopt innovative, eco-friendly, and socially responsible business models.",
      desc: [
        "Social Entrepreneurship for Sustainability — Building ventures to solve social and environmental issues.",
        "Business Models for the Circular Economy —Designing businesses that minimize waste and maximize resource use.",
        "Cooperative & Inclusive Business Models — Ensuring equal benefits for all stakeholders.",
        "SDGs in Entrepreneurial Strategy — Aligning start-ups with UN Sustainable Development Goals.",
        "Crisis-Driven Sustainable Innovation — Creating eco-friendly solutions in response to global challenges.",
      ],
      sdg_link:
        "SDG 8 (Decent Work & Economic Growth), SDG 9 (Industry, Innovation & Infrastructure).",
      // path: "/pdfs/tracks/track.pdf",
      path: "/pdfs/Newtracks/Track4.pdf",
      fileName: "Track4.pdf",
    },
    {
      title: "Sustainability Education, Training & Capacity Building (SETCB) ",
      desc: [
        "Curriculum Innovations for Sustainability – Embedding sustainability themes into learning programmes.",
        "ESD Pedagogy – Teaching approaches that build sustainability mindsets.",
        "Training of Trainers & Capacity Building Initiatives – Equipping educators and leaders with sustainability skills.",
        "Digitalisation & E-learning for Sustainability – Using online learning to spread sustainable practice(s).",
        "Community Engagement & Lifelong Learning – Involving citizens in ongoing sustainability education.",
      ],
      // desc: "Building awareness and skills through education, training, and capacity development for a sustainable future.",
      sdg_link:
        "SDG 4 (Quality Education), SDG 17 (Partnerships for the Goals).",
      // path: "/pdfs/tracks/track.pdf",
      path: "/pdfs/Newtracks/Track5.pdf",
      fileName: "Track5.pdf",
    },
    {
      title:
        "Sustainable Human Resource Management, Workplace Well-being & Ethical Leadership",
      desc: [
        "Green HR Practices & Policies – HR strategies that reduce environmental impact.",
        "Workplace Diversity & Inclusion – Building fair and representative organizations.",
        "Employee Well-being & Psychological Contracts – Supporting employee health, trust, and morale.",
        "Ethical & Transformational Leadership – Leading with vision, values, and responsibility.",
        "Workplace Spirituality & Green Leadership – Inspiring purpose and environmental stewardship at work.",
        "Sustainable work practices in the age of AI and Gen AI.",
      ],
      // desc: "Promoting employee well-being, diversity, ethics, and responsible leadership in organizations.",
      sdg_link:
        "SDG 3 (Good Health & Well-being), SDG 8 (Decent Work & Economic Growth), SDG 5 (Gender Equality).",
      // path: "/pdfs/tracks/track.pdf",
      path: "/pdfs/Newtracks/Track6.pdf",
      fileName: "Track6.pdf",
    },
    {
      title:
        "Technological Innovations & Digital Transformation for Sustainability",
      // desc: "Harnessing technology, digitalization, and innovation to accelerate sustainable solutions.",
      desc: [
        "Green Tech Solutions – Exploring how AI, IoT, blockchain, and edge computing can address environmental challenges such as pollution, emissions, and resource inefficiency.",
        "Smart Resource Management – Technologies for optimizing energy, water, and material usage through predictive analytics, sensor networks, and intelligent automation.",
        "Big Data & Analytics for Sustainability – Using environmental data to inform decisions in climate action, agriculture, biodiversity, and urban planning.",
        "Digital Platforms for Circular Economy – Online tools and marketplaces that support reuse, recycling, remanufacturing, and sustainable supply chain collaboration.",
        "Cybersecurity & Ethics in Green Tech – Ensuring secure and ethical deployment of digital sustainability solutions, including smart grids, IoT systems, and AI governance.",
        "Industry 4.0/5.0 for Sustainability – Leveraging automation, robotics, human-centric innovation, and collaborative AI to create sustainable industrial ecosystems.",
        "Immersive Technologies & XR – Using XR, e.g., virtual reality (VR), augmented reality (AR), and mixed reality (MR), for environmental education, low-carbon training, and virtual simulations of sustainable infrastructure.",
        "Nature-Positive Digital Innovation – Digital tools for biodiversity monitoring, regenerative agriculture, and nature-based solutions powered by AI and satellite data.",
        "ESG Data Platforms & Accountability – Technologies for transparent ESG reporting, supply chain tracing, compliance tracking, and blockchain-based verification of sustainability claims.",
        "Smart Cities, Infrastructure & Life Cycle Sustainability – Virtual models of urban systems, digital twins, and life cycle analysis (LCA) for emissions forecasting, resource optimization, and sustainable design decision-making.",
        "Life Cycle Analysis & Digital Sustainability Tools – Integration of LCA with big data, AI, and blockchain and other digital tools to measure, monitor, and reduce environmental impacts across the entire life cycle of products, processes, and services.",
      ],
      sdg_link:
        "SDG 9 (Industry, Innovation & Infrastructure), SDG 7 (Affordable & Clean Energy).",
      // path: "/pdfs/tracks/track.pdf",
      path: "/pdfs/Newtracks/Track7.pdf",
      fileName: "Track7.pdf",
    },
    {
      title:
        "Sustainable Policy, Regulation, Governance & Global Responsibility",
      // desc: "Strengthening governance, regulatory frameworks, and international collaboration for sustainability.",
      desc: [
        "Global Regulatory Trends in Sustainability – Understanding changing international sustainability laws.",
        "Corporate Governance & Risk Management – Ensuring companies remain compliant and future-ready.",
        "Sustainable & Climate Finance Policy – Regulating green finance flows, climate risk disclosures, and transition instruments (e.g., ECB, SEBI, RBI policies).",
        "ESG Reporting Frameworks & Financial Governance – ISSB, GRI, SASB, BRSR, and their institutional implications.",
        "Green Bond Taxonomies & Disclosure Standards – Legal harmonisation of green finance rules.",
        "Policy Design for Sustainability Transitions – Instruments, incentives, trade-offs.",
        "Regulatory Innovations for Social Equity – Addressing justice, inclusion, and participatory mechanisms in policy.",
        "Ethics in Global Sustainability Governance – Responsibility, transparency, and legitimacy.",
        "Implementing SDGs at Multiple Scales – National policy, city-level governance, and cross-border coordination.",
        "Governance of Water, Energy, Waste & Agriculture Systems – Integrated resource governance models.",
        "Policy Impact on Sustainable Development – Measuring how laws influence environmental and social progress.",
        "Stakeholder Engagement in Policymaking – Involving citizens and businesses in policy creation.",
        "National & International Sustainability Standards – Guidelines for harmonised global sustainable practices.",
        "Governing Natural Capital & Biodiversity Disclosure.",
      ],
      sdg_link:
        "SDG 16 (Peace, Justice & Strong Institutions), SDG 17 (Partnerships for the Goals).",
      // path: "/pdfs/tracks/track.pdf",
      path: "/pdfs/Newtracks/Track8.pdf",
      fileName: "Track8.pdf",
    },
    {
      title:
        "Sustainability Impact Measurement, Scalability & Growth Strategies ",
      // desc: "Measuring, scaling, and evaluating the impact of sustainability initiatives for long-term growth.",
      desc: [
        "Life cycle–based approaches: Life Cycle Assessment (LCA), hybrid LCA, dynamic/prospective LCA, Business Model LCA (BM-LCA), and applications across products, processes, business models, organizations, and networks.",
        "Footprint measurement: carbon (including Scope 1–3), water, material, biodiversity/land use, and social footprints, including novel propositions of uncertainty and sensitivity analysis.",
        "Efficiency and benchmarking methods: Data Envelopment Analysis (DEA), Stochastic DEA (SDEA), Stochastic Frontier Analysis (SFA), Malmquist indices, and frontier-based eco-efficiency evaluation.",
        "Hybrid and advanced methodologies: combinations of LCA/footprinting with DEA(SDEA), multi-criteria decision making (MCDM), econometrics, system dynamics, agent-based modeling, optimization, big data analytics, artificial intelligence, and machine learning.",
        "Circular economy strategies: measuring and scaling circular practices through LCA, and frontier methods (DEA/SDEA), with applications in several sectors and contexts.",
        "Digital and data infrastructure: tracking and tracing systems, digital product passports, IoT and sensor data streams, interoperable data standards, and auditable reporting pipelines to enable measurement at scale.",
        "Actionable insights for decision-making: linking impact baselines to target-setting, translating frontier results into operational levers, and demonstrating scale-up under real-world constraints (capital, capacity, policy, and equity).",
        "Scalability and growth strategies: technology roadmapping, portfolio prioritization, modular scale-up, policy and market instruments, financing models, risk management, and governance mechanisms for scaling sustainability.",
        "Sectoral and contextual applications: studies addressing hard-to-abate sectors (e.g., steel, cement, chemicals), particular and strategically relevant sectors (e.g., big tech, professional telescopes, research-intensive organizations, etc.), small and medium-sized enterprises (SMEs), and emerging markets.",
      ],
      sdg_link:
        "SDG 12 (Responsible Consumption & Production), SDG 17 (Partnerships for the Goals).",
      // path: "/pdfs/tracks/track.pdf",
      path: "/pdfs/Newtracks/Track9.pdf",
      fileName: "Track9.pdf",
    },
    {
      title:
        "Climate Action, Low-Carbon Strategies & Sustainable Future Economies",
      // desc: "Advancing climate solutions, carbon reduction strategies, and future-proof sustainable economies.",
      desc: [
        "Decarbonization Roadmaps: Strategic plans to cut carbon emissions across sectors (e.g., transport, energy, agriculture).",
        "Climate Adaptation & Resilience: Preparing for the impacts of climate change, including building flood defenses, developing early warning systems, and creating climate-resilient infrastructure.",
        "Renewable Energy Transitions: Moving from fossil fuels to clean energy sources like solar and wind, and addressing challenges like grid integration and energy storage.",
        "Carbon Markets & Offsets: Exploring the role and integrity of carbon trading schemes, carbon credits, and offset mechanisms in achieving climate targets.",
        "Economic Policies for Low-Carbon Futures: Creating incentives for a green economy through policies like carbon pricing, subsidies, and green finance.",
        "Climate Governance & Policy: The role of national governments and international organizations in climate policy-making, including the implementation of the Paris Agreement and other global frameworks.",
        "Climate-Smart Agriculture: Strategies to reduce emissions in the food sector while enhancing food security and resilience.",
      ],
      sdg_link:
        "SDG 13 (Climate Action), SDG 7 (Affordable & Clean Energy), SDG 11 (Sustainable Cities & Communities).",
      // path: "/pdfs/tracks/track.pdf",
      path: "/pdfs/Newtracks/Track10.pdf",
      fileName: "Track10.pdf",
    },
  ],

  dayWiseData: {
    title:
      "International Conference on Frontiers of Sustainability - FOS 2026-GRIE",
    tHeadData: [
      ["", "Day 1 22.01.2026", "Day 2 23.01.2026", "Day 3 24.01.2026"],
      ["Time Slot", "Event", "Event", "Event"],
    ],
    tBodyData: [
      [
        "09:30 AM to 11:00 AM",
        "Inauguration and Keynote Address",
        "Guest Speaker Session 1",
        "Guest Speaker Session 1",
      ],
      ["11:00 AM to 11:30 AM", "Hi -Tea"],
      [
        "11:30 AM to 12:45 PM",
        "Meet the editor",
        "Conference Presentation offline",
        "Conference Presentation offline",
      ],
      ["12:45 PM to 01:30 PM", "Lunch Break"],
      [
        "01:30 PM to 02:45 PM",
        "Advanced Multivariate Analysis & SEM for HighImpact Publications: Do’s, Don’ts, and Cutting-Edge Techniques",
        "Conference Presentation Online",
        "Conference Presentation Online",
      ],
      [
        "02:45 PM to 04:30 PM",
        "From Rejection to Recognition: An Editor’s Guide to Writing Papers that Get Published",
        "TSM campus walk",
        "Guest Speaker Session (Internal)",
      ],
      [
        "04:30 PM to 05:45 PM",
        "High tea and Networking session",
        "High tea and Networking session",
        "Valediction",
      ],
    ],
  },

  preConferenceWorkshop: {
    title:
      "International Conference on Frontiers of Sustainability - Global Responsibility for Innovation & Entrepreneurship FOS 2026 - GRIE",
    tHeadData: [
      ["", "Day 1", "Day 2", "Day"],
      [
        "Time Slot",
        "Session Room A",
        "Session Room B",
        "Session Room",
        "Session Room",
      ],
    ],
    tBodyData: [
      {
        time: "9.30 AM to 10.50 AM",
        day_1_roomA: "Inauguration and Keynote Address",
        day_2_roomA: "Guest Speaker Session (Based on FOS 2026)",
        day_3_roomA:
          "Guest Speaker Session (Based on trends in Sustainability)",
      },
      {
        time: "10.50 AM to 11.00 AM",
        day_1_roomA: "Hi-Tea",
        day_2_roomA: "Hi-Tea",
        day_3_roomA: "Hi-Tea",
      },
      {
        time: "11.00 AM to 12.30 PM",
        day_1_roomA: "Meet the Editor (1.5 hours)",
        day_2_roomA: "Conference Presentation offline/Online (National level)",
        day_3_roomA: "Conference Presentation offline/Online",
      },
      {
        time: "12.45 PM to 1.30 PM",
        day_1_roomA: "Lunch Break",
        day_2_roomA: "Lunch Break",
        day_3_roomA: "Lunch Break",
      },
      {
        time: "1.30 PM to 2.45 PM",
        day_1_roomA:
          "Meta analysis and systematic review OR Applying Hybrid MCDM Methods (AHP-TOPSIS) to Real-World Research Problems (Session Chair: [Name])",
        day_1_roomB:
          "Impact Publications: Do's, Don'ts, and Cutting-Edge Techniques (Session Chair: [Name])",
        day_2_roomA: "Conference Presentation offline/Online",
        day_3_roomA: "Conference Presentation offline/Online",
      },
      {
        time: "2.45 PM to 4.30 PM",
        day_1_roomA: "Break / Transition",
        day_2_roomA: "Break / Transition",
        day_3_roomA: "Break / Transition",
      },
      {
        time: "4.45 PM to 5.45 PM",
        day_1_roomA:
          "Advanced Multivariate Analysis & SEM (Session Speaker: Dr. Murgan Pattusamy)",
        day_1_roomB:
          "From Rejection to Recognition: An Editor’s Guide to Writing Papers that Get Published (Session Chair: [Name])",
        day_2_roomA: "TSM campus walk",
        day_3_roomA: "Guest Speaker Session",
      },
    ],
  },

  // conference team data
  keySpeakersData: [
    {
      src: "/images/dr_bhimaraya.jpg",
      name: "Prof.Bhimaraya Metri",
      role: "Director",
      place: "Indian Institute of Management, Nagpur, Maharashtra , India",
    },
    {
      src: "/images/vanhaverbeke.jpg",
      name: "Prof. W. Vanhaverbeke",
      role: "Editor-in-Chief, Technovation (Elsevier) (ABS – 3, ABDC-A, Q1, IF-10.9) ",
      place: "University of Antwerp, Belgium",
    },
    {
      src: "/images/britta linnea.jpg",
      name: "Prof. Britta Linnea Gammelgaard ",
      role: "Editor-in-Chief International Journal of Logistics Management (Emerald)(ABDC- A, Q1, IF- 6.4)",
      place: "University of Southern Denmark, Denmark",
    },
    {
      src: "/images/andrea patrucco.jpg",
      name: "Dr. Andrea Patrucco",
      role: "Associate Editor, JSCM (Wiley) (ABDC-A*, Q1, IF 9.9) JPSM (Elsevier) (ABDC-A, Q1, IF 8.7) SAEEA, IJPDLM (Emerald) (ABDC-A, Q1, IF 8.2)",
      place: "Florida International University, USA",
    },
    {
      src: "/images/sunil luthra.jpg",
      name: "Dr. Sunil Luthra",
      role: "Associate Editor, Journal of Cleaner Production (Elsevier) (ABDC- A, Q1, IF 10.0)",
      place:
        "Director, All-India Council for Technical Education (AICTE) New Delhi, India",
    },
    {
      src: "/images/sachin mangla.jpg",
      name: "Dr. Sachin Mangla",
      role: "Associate Editor, International Journal of Logistics Management (Emerald)(ABDC- A, Q1, IF- 6.4) Associate Editor, Corporate Social Responsibility and Environmental Management (Q1, Scopus)",
      place: "O.P. Jindal Global University, Haryana, India",
    },
    {
      src: "/images/Nripendra.png",
      name: "Prof. Nripendra Rana",
      role: "Editor in Chief of International Journal of Electronic Government Research (IGI Global)(ADBC-C,Q2,IF-1.5) Associate Editor of Journal of Computer Information Systems(Taylor & Francis)(ABDC-A,Q1,IF-9.3)",
      place: "Queen's University Belfast UK",
    },
    {
      src: "/images/Murugan.png",
      name: "Dr. Murugan Pattusamy",
      role: "",
      place:
        "School of Management Studies, University of Hyderabad (UoH), Hyderabad",
    },
  ],

  chiefPatron: [
    {
      src: "/images/Valli-Ramaswami.jpg",
      name: "Smt. Valli Ramaswami",
      role: "Managing Trustee",
      place: "Manickavasagam Charitable Foundation (MCF)",
    },
    {
      src: "/images/Vishala-Mam.jpg",
      name: "Ms.Vishala Ramswami",
      role: "Managing Trustee",
      place: "Manickavasagam Charitable Foundation (MCF)",
    },
    {
      src: "/images/BT-Bangara.webp",
      name: "SHRI B.T. BANGERA",
      role: "Chairman-TSM",
      place: "Managing Director, Hi-Tech Arai Limited, Madurai",
    },
    {
      src: "/images/MURALISAMBASIVAN.jpg",
      name: "Dr. Murali Sambasivan",
      role: "Director & Professor",
      place: "Thiagarajar School of Management, Madurai,India",
    },
    {
      src: "/images/Selvalakshmi.jpg",
      name: "Dr. M. Selvalakshmi",
      role: "Principal & Professor",
      place: "Thiagarajar School of Management, Madurai, India",
    },
  ],

  organizationBoardData: [
    // {
    //     src: "/images/11.webp",
    //     name: "Dr. K. Mathiyazhagan",
    //     role: "Conference Convenor ",
    //     place: "Head of the Research Centre & Professor,Thiagarajar School of Management, Madurai",
    // },

    {
      src: "/images/MURALISAMBASIVAN.jpg",
      name: "Dr. Murali Sambasivan",
      role: "Director & Professor",
      place: "Thiagarajar School of Management, Madurai,India",
    },
    {
      src: "/images/Selvalakshmi.jpg",
      name: "Dr. M. Selvalakshmi",
      role: "Principal & Professor",
      place: "Thiagarajar School of Management, Madurai, India",
    },
    {
      src: "/images/Isotilia.png",
      name: "Dr. Isotilia Costa Melo",
      role: "Assistant Professor",
      place: "ICN Business School, Paris, France",
    },
    {
      src: "/images/VeronicaNew.jpg",
      name: "Dr. Veronica Scuotto",
      role: "Associate Professor",
      place: "Universita degli Studi di Napoli Federico II, Italy",
    },
    {
      src: "/images/nachiappan.jpg",
      name: "Dr. Nachiappan Subramanian",
      role: "Professor",
      place: "University of Sussex, United Kingdom",
    },
    {
      src: "/images/conference.jpeg",
      name: "Dr. Ngo Nguyen Quynh Nhu",
      role: "Lecturer",
      place:
        "Faculty of Finance and Banking, Center for Application Economics Research, Ton Duc Thang University, Vietnam",
    },
    {
      src: "/images/mohammad saleem.jpg",
      name: "Dr. Mohamed Saleem Haja Nazmudeen",
      role: "Dean, UTB School of Business & Associate Professor",
      place: "UTB School of Business, Universiti Teknologi Brunei, Brunei",
    },
  ],

  internalBoardData: [
    {
      name: "Nandhini S P",
      email: "Nandhinisp@tsm.ac.in",
      phone: "+91-8940017669",
    },
    {
      name: "Thavaprakash Arulsivakumar",
      email: "thavaprakash@tsm.ac.in",
      phone: "+91-8072024463",
    },
    {
      name: "Gouthamraj MP",
      email: "gouthamrajmp@tsm.ac.in",
      phone: "+91-8220049074",
    },
    {
      name: "Sibi B",
      email: "sibib@tsm.ac.in",
      phone: "+91-9600794478",
    },
    {
      name: "Santhosh A",
      email: "Santhosh_2413137@tsm.ac.in",
      phone: "+91-6380504411",
    },
    {
      name: "Gokulnath A",
      email: "gokulnath_2413043@tsm.ac.in",
      phone: "+91-8637422413",
    },
  ],

  // advisoryBoardData: [
  //     "Prof. Angappa Gunasekaran (Penn State Harrisburg, USA)",
  //     "Prof. Dongmei Cao (Nottingham Trent University, UK)",
  //     "Prof. Abhijit Majumdar (Indian Institute of Technology Delhi, India)",
  //     "Prof. K. Sriharsha Reddy (Institute of Management Technology Hyderabad, India)",
  //     "Prof. Ravi Shankar (Indian Institute of Technology Delhi, India)",
  //     "Prof. Aravind Upadhyay (London Metropolitan University , UK)",
  //     "Prof. V. Raja Sreedharan (Cardiff Metropolitan University, UK)",
  //     "Prof. Sangeeta Khorana (Aston University, UK)",
  //     "Prof. Stefan Seuring (University of Kassel, Germany)",
  //     "Prof. Ramesh Anbanandam (Indian Institute of Technology Roorkee, India)",
  //     "Prof. Soni Agarwal (International Management Institute Kolkata, India)",
  //     "Prof. Nripendra P Rana (Queen's University Belfast, UK)",
  //     "Prof. Tarik Saikouk (Excelia Business School, La Rochelle, France)",
  //     "Dr. Heru S. Sartono (Universiti Teknologi Brunei, Brunei)",
  //     "Dr. Djunaid M Syaikh (Universiti Teknologi Brunei, Brunei)",
  //     "Dr. Ulagananthan Subramanian (Universiti Teknologi Brunei, Brunei)",
  //     "Prof. Sandeep Jagtap (Lund University, Sweden)",
  //     "Dr. Marzena Smol (Polish Academy of Sciences, Cracow, Poland)",
  //     "Prof. Michael Akim (HSE University, Moscow, Russia)",
  //     "Dr. Elisabeth Paulet (ICN Business School, France)",
  //     "Dr. Thierry Houé (ICN Business School, France)"
  // ],

  Internal_Organizing_Committee: [
    {
      id: 1,
      name: "Dr. Anupam Keshari",
      location: "Assistant Professor",
    },
    {
      id: 2,
      name: "Prof. Anandan T. R",
      location: "Assistant Professor",
    },
    {
      id: 3,
      name: "Dr. Dona Ghosh",
      location: "Assistant Professor",
    },
    {
      id: 4,
      name: "Dr. Haritha P. H",
      location: "Assistant Professor",
    },
    {
      id: 5,
      name: "Dr. Janaki Bojiah ",
      location: "Associate Professor",
    },
    {
      id: 6,
      name: "Dr. Nachiketas N",
      location: "Assistant Professor",
    },
    {
      id: 7,
      name: "Dr. Packiaraj T",
      location: "Assistant Professor",
    },
    {
      id: 8,
      name: "Dr. S M Aparna",
      location: "Assistant Professor",
    },
    {
      id: 9,
      name: "Mr. Rakesh G Nair",
      location: "Assistant Professor",
    },
    {
      id: 10,
      name: "Dr. Sathish G",
      location: "Assistant Professor",
    },
    {
      id: 11,
      name: "Dr. P. Sivapragasam",
      location: "Assistant Professor",
    },
    {
      id: 12,
      name: "Dr. Senthil V",
      location: "Associate Professor",
    },
    {
      id: 13,
      name: "Dr. Vikash Sharma",
      location: "Assistant Professor",
    },
    {
      id: 14,
      name: "Dr. Preethi Raja",
      location: "Assistant Professor",
    },
  ],

  advisoryBoardData: [
    {
      id: 1,
      name: "Prof. Angappa Gunasekaran",
      location: "(Penn State Harrisburg, USA)",
    },
    {
      id: 2,
      name: "Prof. Dongmei Cao",
      location: "(Nottingham Trent University, UK)",
    },
    {
      id: 3,
      name: "Prof. Abhijit Majumdar",
      location: "(Indian Institute of Technology Delhi, India)",
    },
    {
      id: 4,
      name: "Prof. K. Sriharsha Reddy",
      location: "(Institute of Management Technology Hyderabad, India)",
    },
    {
      id: 5,
      name: "Prof. Ravi Shankar",
      location: "(Indian Institute of Technology Delhi, India)",
    },
    {
      id: 6,
      name: "Prof. Aravind Upadhyay",
      location: "(London Metropolitan University, UK)",
    },
    {
      id: 7,
      name: "Prof. V. Raja Sreedharan",
      location: "(Cardiff Metropolitan University, UK)",
    },
    {
      id: 8,
      name: "Prof. Sangeeta Khorana",
      location: "(Aston University, UK)",
    },
    {
      id: 9,
      name: "Prof. Stefan Seuring",
      location: "(University of Kassel, Germany)",
    },
    {
      id: 10,
      name: "Prof. Ramesh Anbanandam",
      location: "(Indian Institute of Technology Roorkee, India)",
    },
    {
      id: 11,
      name: "Prof. Soni Agarwal",
      location: "(International Management Institute Kolkata, India)",
    },
    {
      id: 12,
      name: "Prof. Nripendra P Rana",
      location: "(Queen's University Belfast, UK)",
    },
    {
      id: 13,
      name: "Prof. Tarik Saikouk",
      location: "(Excelia Business School, La Rochelle, France)",
    },
    {
      id: 14,
      name: "Dr. Heru S Susanto",
      location: "(Universiti Teknologi Brunei, Brunei)",
    },
    {
      id: 15,
      name: "Dr. Junaid M Shaikh",
      location: "(Universiti Teknologi Brunei, Brunei)",
    },
    {
      id: 16,
      name: "Dr. Ulagananthan Subramaniam",
      location: "(Universiti Teknologi Brunei, Brunei)",
    },
    {
      id: 17,
      name: "Prof. Sandeep Jagtap",
      location: "(Lund University, Sweden)",
    },
    {
      id: 18,
      name: "Dr. Marzena Smol",
      location: "(Polish Academy of Sciences, Cracow, Poland)",
    },
    {
      id: 19,
      name: "Prof. Michael Akim",
      location: "(HSE University, Moscow, Russia)",
    },
    {
      id: 20,
      name: "Dr. Elisabeth Paulet",
      location: "(ICN Business School, France)",
    },
    {
      id: 21,
      name: "Dr. Thierry Houé",
      location: "(ICN Business School, France)",
    },
    {
      id: 22,
      name: "Prof. G. Ilankumaran",
      location:
        "(Alagappa Institute of Management, Alagappa University, India)",
    },
    {
      id: 23,
      name: "Mr. Kumod Kumar",
      location:
        "(Chief Administrative Officer, Director & CEO | CIMP - Business Incubation & Innovation Foundation)",
    },
    {
      id: 24,
      name: "Dr. Taufiq Hail Ghilan Al-Madhagy",
      location:
        "(Al-Madhagy, College of Business, University of Buraimi, Al Buraimi, Sultanate of Oman)",
    },
  ],

  sponsorsData: [
    {
      image: "/images/9.webp",
      title: "Dr. Murali Sambasivan",
      description: "Chief Patron & Professor",
    },
    {
      image: "/images/10.webp",
      title: "Dr. M. Selvalakshmi",
      description: "Patron & Professor",
    },
    {
      image: "/images/11.webp",
      title: "Dr. K. Mathiyazhagan",
      description: "Conference Chairperson",
    },
  ],

  // guidelines data

  callForPaperDescription:
    "Research Scholars, Postdoctoral Researchers, Early-career and Senior faculty members, as well as Industry practitioners across disciplines such as Management, Engineering, Computer Science, Social Sciences, and Sustainability, are invited to collaborate, gain visibility, build their publication portfolio, and secure international exposure.",

  ConferenceReviewProcess: [
    {
      content:
        "The abstract will be evaluated based on the relevance to the conference tracks.",
    },
    // {
    //   content:
    //     "Post Abstract acceptance authors are invited to submit the full length paper.",
    // },
    {
      content:
        "Double-Blind Peer Review: All submissions will undergo a strict double-blind review process as per COPE guidelines to ensure fairness, objectivity, and academic integrity.",
    },
    {
      content:
        "Expert Evaluation Panel: Reviews will be conducted by a panel of experienced national and international academicians, subject matter experts, and journal reviewers. The reviewer board is presented in the conference website.",
    },
    {
      content:
        "Plagiarism and AI Check: Every paper will be screened through advanced plagiarism detection tools (e.g., Turnitin/iThenticate) to maintain ethical publication practices.",
    },
    {
      content:
        "High Acceptance Standards: Only papers that demonstrate academic rigor and innovation will be forwarded to desk level of the journal or journal recommendation. Expected acceptance rate is 20%.",
    },
    {
      content: "Acceptance will be communicated post the decision.",
    },
  ],

  Publicationoptions: [
    {
      content:
        "All original full length papers presented at the conference will be considered for publication in Scopus Indexed Proceedings / Edited Book series in Wiley and Elsevier",
    },
    {
      content:
        "All accepted abstracts will be published in the Book of Abstracts, Publication with ISBN (for research pitch) / Research Pitch / Doctoral Colloquium",
    },
    {
      content:
        "Authors choosing journal publication route will be invited to extend their work into full-length papers for potential submission to the journal. However, all recommended submissions must adhere to the journal's regular review policy.",
    },
  ],

  AbstractSubmissionGuidelinesData: {
    title: "Research Pitch / Doctoral Colloquium (Abstract Format)",
    tHeadData: ["SubmissionType", "Research Idea Pitch"],
    tBodyData: [
      [
        "Purpose",
        "For participation in the 3-minute pitch session during the Conference.",
      ],
      ["WordLimit", "Extended Abstract 1500 Words"],
      [
        "Format",
        "Purpose – Design / Methodology / Approach – Findings – Originality – Research Limitations / Implications / Practical / Societal Implications",
      ],
      ["FileType", "Word Document (.doc/.docx)"],
      ["ReviewProcess", "Reviewed for pitch quality, originality, and impact"],
      ["Support", "3-month editorial and research mentoring"],
    ],
  },

  fullPaperSubmissionGuidelinessData: {
    title: "Full Paper Submission (Scopus Conference Proceedings)",
    tHeadData: ["SubmissionType", "Full Paper Submission"],
    tBodyData: [
      [
        "Purpose",
        "For consideration in the edited volume(Springer Conference Proceedings).",
      ],
      ["WordLimit", "5000 to 6000 Words"],
      [
        "Format",
        "Introduction & Problem StatementLiterature Review- Methodology- FindingsDiscussion & Implications.",
      ],
      [
        "FileType",
        "Word Document (.doc/.docx) – as per Springer formatting guidelines",
      ],
      [
        "ReviewProcess",
        "Peer-reviewed for academic quality and publication readiness",
      ],

      [
        "Eligibility",
        "Eligible for Best Paper with Societal Impact & Publication Opportunity.",
      ],
      ["Support", "Editorial guidance and publication processing support"],
    ],
  },

  presentationConfrence: [
    {
      title: "Meet the Editors:",
      content:
        "This session provides direct interaction and insights from journal editors, giving participants valuable perspectives on publishing and research.",
    },
    {
      title: "Meta-Analysis and Systematic Review:",
      content:
        "Dedicated to advanced research synthesis techniques, this session focuses on systematic review methods and meta-analytic strategies.",
    },
    {
      title: "Advanced Multivariate Analysis & SEM:",
      content:
        "Featuring a session speaker, this highlight explores sophisticated statistical approaches and Structural Equation Modeling, ideal for experienced researchers",
    },
  ],

  presentationGuidelines: [
    "3-minute research presentation for the research pitch and 15 minutes for the full paper presentation.",
    "Strictly time-bound.",
    "Research Pitch – maximum 3 slides or poster (As per the attached format).",
    "Full Paper – 10 minutes Presentation and 5 minutes for feedback and discussion with the panel.",
    // "Meet the Editors: This session provides direct interaction and insights from journal editors, giving participants valuable perspectives on publishing and research.",
    // "Meta-Analysis and Systematic Review: Dedicated to advanced research synthesis techniques, this session focuses on systematic review methods and meta-analytic strategies.",
    // "Advanced Multivariate Analysis & SEM: Featuring a session speaker, this highlight explores sophisticated statistical approaches and Structural Equation Modeling, ideal for experienced researchers",
  ],

  publicationAvenuesData: {
    confirmedList: [
      "International Journal of Global Business and Competitiveness (ABDC C; Springer)",
      "The International Journal of Logistics Management (ABDC A; Emerald)",
      "Corporate Social Responsibility and Environmental Management (ABDC C; Wiley)",
      "Environment, Development and Sustainability (SCOPUS, SCIE, Springer)",
    ],
    underProgress: [
      "Journal of Entrepreneurship",
      "Journal of Intellectual Capital",
      "The International Journal of Management Education",
      "Journal of Business and Society Review",
      "Technology in Society",
      "TRE Journal",
      "International Journal of Emerging Trends",
      "Conference Proceedings in Springer",
    ],
  },

  // registration details data
  registrationDetailsData: [
    "Submission open to Research Scholars, Early - Career Faculty Members / Assistant Professors, and Postdoctoral Researchers",
    "Scholars from disciplines such as Management, Engineering, Computer Science, Social Sciences, and Sustainability",

    "Submission Link < To be Updated Shortly >",
  ],

  paymentDetails: [
    "<b>150 EUR for International Participants</b>",
    "INR 1500 (inclusive of GST) for Pre Conferencce Workshop",
    "INR 4000 (inclusive of GST) for Research Pitch",
    "INR 5000 (inclusive of GST) for Full paper",
  ],

  accommodationDetails: [
    "Affordable Package: Comfortable stay at just ₹4500 for 3 days (AC - double occupancy) in twin sharing.",
    "All-Inclusive Meals: Enjoy daily breakfast, lunch, and dinner - no extra hassle!",
    "Value for Money: Works out to only ₹1500 per day per person.",
    "Convenience Guaranteed: Stay and meals bundled together for a stress-free experience.",
    // "Comfort Assured: Relax in a cozy environment designed for rest after your day's activities."
  ],

  // listOfHostels: [
  //     "JC Residency Madurai - Rated as the #1 Best Value accommodation among over 400 listings. Noted for its warm hospitality, well-maintained rooms, pool, and excellent breakfast service.",
  //     "Grand Madurai By GRT Hotels - A top-rated luxury hotel featuring a spa, pool, and a romantic yet family-friendly vibe. ",
  //     "Courtyard by Marriott Madurai - A reliable upscale international chain offering luxurious, modern comforts.",
  //     "Fortune Pandiyan Hotel - A mid-range option from the ITC group, offering good value with a neat blend of amenities.",
  //     "Heritage Madurai- A unique luxury experience wrapped in historic charm—spacious rooms, plunge pool villas, a spa, and beautiful settings.",
  //     "Hotel Royal Court - Ideally situated near both the Meenakshi Temple and railway station, offering modern comfort and convenience. ",
  //     "Additional Notables",
  //     "Gateway Madurai: Included among best luxury options like Grand Madurai and Courtyard. ",
  //     "Poppys Hotel: Frequently mentioned for families; it’s mid-tier, comfortable, and well-rated.",
  //     "Astoria Hotel: A good budget-friendly pick with positive guest feedback."
  // ],

  //  venue data

  listOfHostels: [
    {
      hotel_name: "JC Residency Madurai",
      link: "https://maps.app.goo.gl/Uvw7UuTdBqxkeWpU7?g_st=aw",
    },
    {
      hotel_name: "Grand Madurai By GRT Hotels",
      link: "https://maps.app.goo.gl/DcvQJWK6wTjwspYs9?g_st=aw",
    },
    {
      hotel_name: "Courtyard by Marriott Madurai",
      link: "https://maps.app.goo.gl/gg2FeCFNnLoFhJR49?g_st=aw",
    },
    {
      hotel_name: "Fortune Pandiyan Hotel",
      link: "https://maps.app.goo.gl/M7Wocvk9L1Gd5YJR6?g_st=aw",
    },
    {
      hotel_name: "Heritage Madurai",
      link: "https://maps.app.goo.gl/caEoPyzHkZ95xNr4A?g_st=aw",
    },
    {
      hotel_name: "Hotel Royal Court",
      link: "https://maps.app.goo.gl/6QhNG7kr3gxT9cwu7?g_st=aw",
    },
    {
      hotel_name: "Gateway Madurai",
      link: "https://maps.app.goo.gl/fZQexRfxzFeFyXVv7?g_st=aw",
    },
    {
      hotel_name: "Poppys Hotel",
      link: "https://maps.app.goo.gl/JixaPjn2ZtkzzrbPA?g_st=aw",
    },
    {
      hotel_name: "Astoria Hotel",
      link: "https://maps.app.goo.gl/MaGWEzka8zF9QkhS9?g_st=aw",
    },
  ],

  venueDetails: [
    {
      title: "Reaching Madurai:",
      description:
        "Madurai is well connected to other parts of India through air, rail, and road. There are daily flights to major cities like Chennai, Bengaluru, and Hyderabad. Train services are available to Mumbai, Delhi, Kolkata, and Chennai, with computerized reservation facilities. Madurai also has bus connections through state-run and private operators from nearby cities in Tamil Nadu and neighboring states.",
    },
    {
      title: "Reaching the Venue:	",
      description:
        "Thiagarajar School of Management (TSM) is located approximately 15 minutes’ drive from Madurai Airport and about 10–15 minutes from Madurai Junction Railway Station. Upon arrival in the city, you can hire a taxi or auto-rickshaw to “Thiagarajar School of Management, Thirupparankundram Road, Madurai.” Local city buses are also available and operated by the Madurai Municipal Transport Service (MMS).",
    },
    {
      title: "Reaching Weather:",
      description:
        "Participants and attendees traveling to Madurai in January can expect temperatures between 20°C to 32°C. Light cotton or casual wear is recommended during the day, with a light jacket or shawl for cooler mornings or evenings. Madurai generally maintains good air quality during this time.",
    },
  ],

  FaqsData: [
    {
      question: "How can I register?",
      answer:
        "a.	Click on the registration <a href='https://forms.gle/TyKm7UVj9x3cm7YD7' target='_blank' class='text-green-600 underline'>Link</a> on the website and proceed as per the instructions provided in that section.",
    },
    {
      question: "How do I submit my paper to the conference?",
      answer:
        "a.	Please follow the submission link provided on the conference website. It will guide you towards a smooth submission process.",
    },
    {
      question:
        "What are the Key dates, like submission deadlines for the conference?",
      answer: "a.	The key dates are: ",
      list: [
        "Submission deadline: 30th November 2025",
        "Author Notification: 20th December 2025",
        "Camera-ready deadline: 29th December 2025",
        "Final Registration Deadline: 12th January 2026",
      ],
    },
    {
      question: "How long can my presentation be?",
      answer:
        "a. The presentation time for the research pitch is: 3 minutes <br/> b.	The presentation time for full papers is: 10 minutes",
    },
    {
      question:
        "Is there a possibility of changing or altering my paper after submission?",
      answer:
        "a.	Apart from the suggestions from the reviewers, the authors will not be permitted to alter or change the paper after submission. ",
    },
    {
      question: "Is there any possibility of altering my presentation time?",
      answer:
        "a.	There is no possibility of altering the presentation time. You are required to present your paper at your allotted time slot.",
    },
    {
      question: "What are the reasons for the rejection of my paper?",
      answer: "a.	There may be many reasons why a paper was rejected:",
      list: [
        "It is possible that the readers did not feel the paper contributed to the field, or that it was one of several papers on the same topic.",
        "It is possible that the paper did not follow submission guidelines in some way. ",
      ],
      subText:
        "Unfortunately, due to the high volume of submissions, the Program Committee cannot respond to inquiries about rejections. ",
    },
    {
      question:
        "Can I ask someone else to present my paper, even if I register as the presenting author?",
      answer:
        "a.	Only the presenting author must present the paper. No one else is allowed to make presentations in substitution. ",
    },
    {
      question:
        "What if my paper is accepted but I need to withdraw my submission?",
      answer:
        "a.	You can withdraw your paper by writing a formal email to the conference convenor requesting the withdrawal of your submission. Only mail communication is acceptable. ",
    },
    {
      question: "Can I co-present a paper?",
      answer:
        "a.	Yes, you are permitted to co-present a paper, but the time limit for presentation remains the same. ",
    },
    {
      question: "How do I pay the registration fee?",
      answer:
        "a.	Once the proposed submission is accepted for presentation, the participants can follow the payment link provided in the website for making payments. ",
    },
    {
      question: "Do I get letters of Invitation for the conference?",
      answer:
        "a.	Yes you will receive a letter of invitation for the conference by email. ",
    },
    {
      question:
        "Do I get attendance certificates if I decide to attend the pre-conference workshop only?",
      answer:
        "a.	Yes. You will receive attendance certificates even if you attend the pre-conference workshop only.  ",
    },
    {
      question: "What if my transaction gets declined? ",
      answer:
        "a.	Please check if any refund is initiated through the payment platform. If not kindly write an email to the conference team, with proof of payment, and the issue will be handled promptly",
    },
    {
      question: "What is the fastest way to reach the venue?",
      answer:
        "a.	The venue is well-connected road-wise. Call-taxis and Meter Autos are available round the clock in the city. You can contact any one of the organizing committee members for assistance. ",
    },
    {
      question: "Can I change the title of my accepted paper for presentation?",
      answer:
        "a.	No, you are not permitted to change the title of the paper after acceptance. ",
    },
    {
      question: "Is there any restrictions on the number of authors?",
      answer:
        "a.	No. But the names of all the contributors should be mentioned at the time of submission, and it is final.  ",
    },
  ],

  venueImagePath: "/images/waytotsm.jpg",

  dayWiseScheduleImagePath: "/images/day_wise_schedule.jpg",

  preconferenceWorkshop: [
    "Meet the Editors",
    "Meta analysis and systematic review ",
    "Advanced Multivariate Analysis & SEM",
  ],

  paymmentInfoDetails: [
    {
      category: "Pre-conference Workshop Only",
      EarlyBirdInd: "INR 1500",
      indian: "INR 2000",
      EarlyBirdNat: "EUR 50",
      international: "EUR 70",
    },
    {
      category: "Attendee",
      EarlyBirdInd: "INR 2500",
      indian: "INR 2800",
      EarlyBirdNat: "EUR 75",
      international: "EUR 100",
    },
    {
      category: "Research Pitch / Doctoral Colloquium",
      EarlyBirdInd: "INR 3500",
      indian: "INR 3500",
      EarlyBirdNat: "EUR 100",
      international: "EUR 120",
    },
    {
      category: "Full length paper(Research Scholars)",
      EarlyBirdInd: "INR 5000",
      indian: "INR 4000",
      EarlyBirdNat: "EUR 150",
      international: "EUR 140",
    },
    {
      category: "Full length paper (Faculty/Academicians)",
      EarlyBirdInd: "INR 5000",
      indian: "INR 5800",
      EarlyBirdNat: "EUR 150",
      international: "EUR 170",
    },
    {
      category: "Full length paper (Industry Professionals)",
      EarlyBirdInd: "INR 5000",
      indian: "INR 7500",
      EarlyBirdNat: "EUR 150",
      international: "EUR 220",
    },
    {
      category: "Submission opens on 15th October 2025",
      EarlyBirdInd: "",
      indian: "",
      EarlyBirdNat: "",
      international: "",
    },
  ],
  accountDetails: {
    indian: [
      {
        title: "Beneficiary Name :",
        content: "Thiagarajar School of Management",
      },
      {
        title: "Bank Name :",
        content: "Federal Bank",
      },
      {
        title: "Account Number :",
        content: "20940100009995",
      },
      {
        title: "IFSC Code :",
        content: "FDRL0002094",
      },
      // {
      //   title: "Swift code",
      //   content: "FDRLINBBIBD",
      // },
      {
        title: "Branch :",
        content: "Thuvariman, Madurai, Tamil Nadu, India",
      },
    ],

    foreign: [
      {
        title: "Beneficiary Name :",
        content: "Thiagarajar School of Management",
      },
      {
        title: "Bank Name :",
        content: "Federal Bank",
      },
      {
        title: "Account Number :",
        content: "20940100009995",
      },
      // {
      //   title: "IFSC Code :",
      //   content: "FDRL0002094",
      // },
      {
        title: "Swift code",
        content: "FDRLINBBIBD",
      },
      {
        title: "Branch :",
        content: "Thuvariman, Madurai, Tamil Nadu, India",
      },
    ],
  },
  proposal_submission: [
    {
      point1: "Create an Account :",
      point2: "Please register on the website to create your account.",
    },
    {
      point1: "Receive Credentials :",
      point2:
        "Upon successful registration, you will receive a username and password.",
    },
    {
      point1: "Track Submission Status: ",
      point2:
        "With your credentials, you can check the status of your submissions at any time.",
    },
  ],

  submissionDetails: [
    {
      title: "Research Idea Pitch / Doctoral Colloquium",
      subtitle: "(Abstract Format)",
      points: [
        {
          point1: "",
          point2: "3-minute pitch session during the Conference.",
        },
        {
          point1: "Word Limit:",
          point2: " 1500 Words.",
        },
        {
          point1: "Format:",
          point2:
            " Purpose / Design - Methodology - Approach / Findings / Originality – Research Limitations / Implications - Practical - Societal Implications.",
        },
        {
          point1: "",
          point2:
            "Eligible for Best Research Idea, Best Pitch, and Societal Impact Awards.",
        },
      ],
      path: "/pdfs/Abstract/AbstractFormat.pdf",
      fileName: "AbstractFormat.pdf",
    },
    {
      title: "Full Paper Submission",
      subtitle: "(Springer Conference Proceedings)",
      points: [
        {
          point1: "",
          point2:
            "For consideration in the edited volume (Scopus Conference Proceedings).",
        },
        {
          point1: "Word Limit:",
          point2: " 5000 to 6000 Words.",
        },
        {
          point1: "Format: ",
          point2:
            " Introduction & Problem Statement - Literature Review - Methodology - Findings - Discussion & Implications.",
        },
        {
          point1: "",
          point2:
            "Eligible for Best Paper with Societal Impact & Publication Opportunity.",
        },
      ],
      path: "/pdfs/Abstract/FullPaperTemplate.pdf",
      fileName: "FullPaperTemplate.pdf",
    },
  ],
  sponsors: [
    // {
    //   title: "Title Sponsor",
    //   price: "Rs. 2.5 Lakhs",
    //   benefits: [
    //     "Logo to be embossed in all the conference kits, brochures, consumables and all online and offline communications.",
    //     "Session Chair position for representatives",
    //     "Five complimentary registrations for participating in pre-conference workshop and paper presentations",
    //     "Logo Displayed on the Home page of the website and in the Valediction background",
    //     "Separate Exhibit space for display of products",
    //   ],
    // },
    // {
    //   title: "International Travel Partner",
    //   price: "Rs. 2 Lakhs",
    //   benefits: [
    //     "Logo to be embossed in all the conference kits, brochures, consumables and all online and offline communications",
    //     "Three complimentary registrations for participating in pre-conference workshop and paper presentations",
    //     "Logo Displayed on the Home page of the website and in the Valediction background",
    //     "Separate Exhibit space for display of products",
    //   ],
    // },
    // {
    //   title: "Awards Partner",
    //   price: "Rs. 1.5 Lakhs (9 Awards for Participants)",
    //   benefits: [
    //     "Logo to be embossed in all online and offline communications. ",
    //     "Two complimentary registrations for participating in pre-conference workshop and paper presentations",
    //     "Logo Displayed on the Home page of the website ",
    //     "Separate Exhibit space for display of products",
    //   ],
    // },
    // {
    //   title: "Travel Partner ",
    //   price: "Rs. 1 Lakhs",
    //   benefits: [
    //     "Logo to be embossed in all online and offline communications.",
    //     "Logo Displayed on the Home page of the website ",
    //     "Separate Exhibit space for display of products",
    //   ],
    // },
    {
      title: "Diamond Sponsor",
      price: "Rs. 5 Lakhs",
      benefits: [
        "Logo to be displayed on the home page of the conference website, and backdrops of the inauguration and valediction, newspapers, and all social media communications.",
        "Keynote address opportunity during the Inaugural or Awards Ceremony.",
        "Session to address the audience and speak about the organisation.",
        "Separate booth for exhibition and display of products, with standees displayed on all days at the event venue.",
        "10 complimentary registrations for the conference.",
        "Organisation logo to be embossed in all conference kits.",
      ],
    },
    {
      title: "Platinum Sponsor",
      price: "Rs. 3 Lakhs",
      benefits: [
        "Logo to be displayed on the home page of the conference website, and backdrops of the inauguration and valediction, newspapers, and all social media communications.",
        "Separate booth for exhibition and display of products, with standees displayed on all days at the event venue.",
        "7 complimentary registrations for the conference.",
        "Organisation logo to be embossed in all conference kits.",
      ],
    },
    {
      title: "Gold Sponsor",
      price: "Rs. 2 Lakhs",
      benefits: [
        "Logo to be displayed on the home page of the conference website, and all social media communications.",
        "Separate booth for exhibition and display of products, with standees displayed on all days at the event venue.",
        "5 complimentary registrations for the conference.",
      ],
    },
    {
      title: "Friendly Sponsor",
      price: "Rs. 1 Lakh",
      benefits: [
        "Logo to be displayed on the home page of the conference website.",
        "3 complimentary registrations for the conference.",
        "Standees of the organisation to be displayed on all days at the event venue.",
      ],
    },
  ],

  internationalReviewers: [
    {
      id: 1,
      name: "Dr. Jędrzej Charłampowicz",
      designation:
        "Professor (Assistant), Gdynia Maritime University, Gdynia, Poland",
    },
    {
      id: 2,
      name: "Prof. Da Teng",
      designation:
        "Associate Professor, Beijing University of Chemical Technology, Beijing, China",
    },
    {
      id: 3,
      name: "Prof. Samuel Fosso Wamba",
      designation: "Professor, TBS Business School, Toulouse, France",
    },
    {
      id: 4,
      name: "Prof. Andrea Appolloni",
      designation:
        "Associate professor, University of Rome Tor Vergata, Rome, Italy",
    },
    {
      id: 5,
      name: "Dr. Marzena Smol-Aruszanjan",
      designation:
        "Professor, Mineral and Energy Economy Research Institute, Polish Academy of Sciences, Poland",
    },
    {
      id: 6,
      name: "Dr. Shilpa Taneja",
      designation:
        "Assistant professor, Sheffield University Management School, University of Sheffield, Sheffield, UK",
    },
    {
      id: 7,
      name: "Dr. Sangeeta Khorana",
      designation:
        "Assistant professor, Aston Business School, Aston University, Birmingham, UK",
    },
    {
      id: 8,
      name: "Dr. Justyna Żywiołek",
      designation:
        "Assistant professor, Czestochowa University of Technology, Czestochowa, Poland",
    },
    {
      id: 9,
      name: "Dr. Dongmei Cao",
      designation: "Associate professor, Nottingham Trent University, UK",
    },
    {
      id: 10,
      name: "Dr. Xin Zhao",
      designation:
        "Professor, Anhui University of Finance and Economics, Bengbu, China",
    },
    {
      id: 11,
      name: "Prof. Tarik Saikouk",
      designation:
        "Professor, Excelia Business School, CERIIM, La Rochelle, France",
    },
    {
      id: 12,
      name: "Prof. Angappa Gunasekaran",
      designation:
        "Professor, Penn State University Harrisburg, Middletown, Pennsylvania, USA",
    },
    {
      id: 13,
      name: "Dr. Guoqing Zhao",
      designation:
        "Lecturer, School of Management, Swansea University, Swansea, UK",
    },
    {
      id: 14,
      name: "Dr.Hela Nammouri",
      designation:
        "Assistant professor, IRIT, Toulouse Université, 2 Rue Du Doyen Gabriel Marty, Toulouse Cedex 9, 31042, France",
    },
    {
      id: 15,
      name: "Dr. Nasiru Zubairu",
      designation: "Lecturer, Muscat University, Muscat, Oman",
    },
  ],

  nationalReviewers: [
    {
      id: 1,
      name: "Dr.Vikas Kumar",
      designation:
        "Assistant professor, National Institute of Food Technology Entrepreneurship and Management (NIFTEM-K), 131028 Kundli (Sonepat), India",
    },
    {
      id: 2,
      name: "Dr.Amanpreet Kaur",
      designation:
        "Professor, Punjab School of Economics, Guru Nanak Dev University, Amritsar, Punjab, India",
    },
    {
      id: 3,
      name: "Dr. Hema Gwalani ",
      designation:
        "Assistant Professor, Indian Institute of Management Nagpur, India ",
    },
    {
      id: 4,
      name: "Dr.Rohit Kumar Singh",
      designation:
        "Associate professor, International Management Institute, Kolkata, India",
    },
    {
      id: 5,
      name: "Dr.Rashmi Ranjan Panigrahi",
      designation:
        "Assistant professor, GITAM School of Business, GITAM (Deemed to be) University, Visakhapatnam, Andhra Pradesh, India",
    },
    {
      id: 6,
      name: "Dr.Avinash K. Shrivastava",
      designation: "Assistant professor, IMI Kolkata, West Bengal, India",
    },
    {
      id: 7,
      name: "Dr.Bishal Dey Sarkar",
      designation:
        "Assistant professor, Indian Institute of Management Bodh Gaya, Bodh Gaya, Bihar, India",
    },
    {
      id: 8,
      name: "Dr.Vikas Kumar",
      designation:
        "Assistant professor, Guru Nanak Dev University, Amritsar, India",
    },
    {
      id: 9,
      name: "Dr. Arun Kumar Kaushik",
      designation:
        "Associate professor, Indian Institute of Management Amritsar, Punjab, India",
    },
    {
      id: 10,
      name: "Dr.Pankaj Dutta",
      designation: "Professor, Indian Institute of Technology, Mumbai, India",
    },
    {
      id: 11,
      name: "Dr.Soni Agarwal",
      designation:
        "Professor, International Management Institute, Kolkata, India",
    },
    {
      id: 12,
      name: "Dr.Manish Mohan Baral",
      designation:
        "Assistant professor, GITAM School of Business, GITAM (Deemed to be University), Visakhapatnam, India",
    },
    {
      id: 13,
      name: "Dr.Anand Gurumurthi",
      designation:
        "Professor, Indian Institute of Management Kozhikode, Kerala, India",
    },
    {
      id: 14,
      name: "Dr.Yamini",
      designation:
        "Assistant professor, National Institute of Technology Tiruchirappalli, Tiruchirappalli, India",
    },
  ],

  internalReviewers: [
    {
      id: 1,
      name: "Dr Anandan T R",
      designation: "Assistant Professor",
    },
    {
      id: 2,
      name: "Dr Anupam Keshari ",
      designation: "Assistant Professor",
    },
    {
      id: 3,
      name: "Dr Balaji M",
      designation: "Associate Professor ",
    },
    {
      id: 4,
      name: "Dr Dona Ghosh",
      designation: "Assistant Professor",
    },
    {
      id: 5,
      name: "Dr Goutam Sutar",
      designation: "Associate Professor",
    },
    {
      id: 6,
      name: "Dr Haritha T",
      designation: "Assistant Professor",
    },
    {
      id: 7,
      name: "Dr Janaki Bojiah",
      designation: "Associate Professor",
    },
    {
      id: 8,
      name: "Dr Manju Jayakumar ",
      designation: "Assistant Professor",
    },
    {
      id: 9,
      name: "Dr Manjula N",
      designation: "Associate Professor",
    },
    {
      id: 10,
      name: "Dr Mutharasi P",
      designation: "Associate Professor",
    },
    {
      id: 11,
      name: "Dr Nachiketas N",
      designation: "Assistant Professor",
    },
    {
      id: 12,
      name: "Dr Nalini G S",
      designation: "Assistant Professor",
    },
    {
      id: 13,
      name: "Dr Nancy Prabha",
      designation: "Assistant Professor",
    },
    {
      id: 14,
      name: "Dr Nataraj B",
      designation: "Assistant Professor",
    },
    {
      id: 15,
      name: "Dr Packiaraj T",
      designation: "Assistant Professor",
    },
    {
      id: 16,
      name: "Dr Pradeep V",
      designation: "Assistant Professor",
    },
    {
      id: 17,
      name: "Dr Preethi R",
      designation: "Assistant Professor",
    },
    {
      id: 18,
      name: "Dr Rameshkumar J",
      designation: "Assistant Professor",
    },
    {
      id: 19,
      name: "Dr S M Aparna",
      designation: "Assistant Professor",
    },
    {
      id: 20,
      name: "Dr Sathish G",
      designation: "Assistant Professor",
    },
    {
      id: 21,
      name: "Dr Senthil V",
      designation: "Associate Professor",
    },
    {
      id: 22,
      name: "Dr Sivapragasam P ",
      designation: "Assistant Professor",
    },
    {
      id: 23,
      name: "Dr Vikash Sharma",
      designation: "Assistant Professor",
    },
    {
      id: 24,
      name: "Mr Rakesh G Nair",
      designation: "Assistant Professor",
    },
    {
      id: 25,
      name: "Ms Anima Pramanik ",
      designation: "Assistant Professor ",
    },
    {
      id: 26,
      name: "Prof Arunkumar A ",
      designation: "Assistant Professor ",
    },
    {
      id: 27,
      name: "Prof Ved Srinivas ",
      designation: "Assistant Professor ",
    },
  ],
};
