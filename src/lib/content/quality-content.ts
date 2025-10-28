export const qualityContent = {
  hi: {
    title: "Quality ki Concept",
    description: "Dairy Industry mein quality ensure karne ke liye ek guide.",
    tabs: {
        intro: "Introduction",
        concepts: "Concepts",
        prps: "PRPs",
        oprps: "oPRPs",
        philosophy: "Philosophies",
        tqm: "TQM",
        haccp: "HACCP",
        iso: "ISO",
        bodies: "Regulatory Bodies"
    },
    intro1: "Food industry ke liberalization ke baad, food safety concepts ka importance bahut badh gaya hai. Aaj, banaye ja rahe food products ki quality sabse important hai. Food supply chains ke integration ke liye ab food safety ensure karne ke naye approaches chahiye. Dairy industry bhi ab in approaches ko adopt kar rahi hai taaki milk aur milk products ki safety bani rahe. Food regulatory bodies ne bhi milk aur milk products ke liye strict laws aur standards banaye hain. Ab food safety sirf export hone wale products tak hi limited nahi hai, balki domestic market aur consumers ke liye bhi important hai. Isliye, public aur private sector dono ne apne production process ko nayi technologies ke saath modify kiya hai aur product safety ke liye strict laws implement kiye hain.",
    intro2: "Ek product ki safety aur quality poori chain mein, yaani animal ke udder se lekar consumer tak ya 'farm to fork', ensure ki jaani chahiye. Milk ek highly perishable commodity hai aur ismein environmental factors ya poor agricultural practices ki wajah se contamination ka risk zyada hota hai. Isliye milk producers aur industry ke logon ko iski safety aur quality maintain karne ke liye bahut careful rehna padta hai, especially jahan infrastructure proper na ho.",
    intro3: "Dairy industry ke liye quality assurance aur kuch quality concepts ko adopt karne se following benefits honge:",
    introBenefits: [
      "Adulteration ki problem par control lagega, jiska effect milk aur milk se bane products ki quality par dikhega.",
      "Domestic aur international consumers ka milk aur milk se bane products ki quality par confidence badhega.",
      "Dairy industry ko zyada revenue milega, jisse employees aur farmers ko benefit hoga."
    ],
    whatIsQuality: {
      title: "Quality Kya Hai?",
      p1: "ISO 9001:2005 ke according, quality woh degree hai jisse kisi object ki inherent characteristics requirements ko fulfill karti hain. Yeh kisi product ya service ki sabhi features aur characteristics ka totality hai jo uski stated ya implied needs ko fulfill karne ki ability par depend karta hai.",
      variability: "Variability",
      p2: "Quality ka variability ke saath inverse relation hai. Jaise-jaise kisi product ya service ki characteristics mein variability kam hoti hai, product ya service ki quality badh jaati hai.",
      p3: "Quality kai characteristics ko include karti hai: Physical, Chemical, Technological, Bacteriological, Nutritional, Aesthetic (appearance).",
      p4: "Ek consumer mainly kisi product ya service ke specifications par focus karta hai aur different manufacturers se milne wale same product ki comparison karta hai."
    },
    qc: {
      title: "Quality Control (QC) Kya Hai?",
      p1: "Yeh un activities ka set hai jo yeh ensure karti hain ki products aur services quality ki requirements ko fulfill karte hain. Ise ek laboratory function ke roop mein categorize kiya jaata tha jiska objective samples ka analysis karke finished goods ki end-point testing karna aur unhein accept ya reject karne ka decision lena tha.",
      p2: "Quality control ek failure detection system hai jo regular intervals par ek specified lot se random samples lekar products mein defects aur errors identify karne ke liye testing technique use karti hai. Yeh detection par focus karti hai, prevention par nahi.",
      responsibilities: {
        title: "Quality Control Department ki Responsibilities",
        list: [
          "Raw materials, additives, packaging materials jaisi supplies ka inspection karna.",
          "Production operations ka scheduling aur verification.",
          "Production aur equipment ki efficiency (capacity) ka measurement.",
          "Finished product ka chemical, microbial, aur sensory analysis karna.",
          "Storage aur shipping ko control karna.",
          "Standard Operating Procedures (SOPs) aur specifications prepare karna.",
          "Sanitation inspection.",
          "Legal regulations ka compliance ensure karna.",
          "Waste disposal (garbage management) ko control karna."
        ]
      }
    },
    qa: {
      title: "Quality Assurance (QA) Kya Hai?",
      p1: "Yeh un activities ka set hai jo yeh ensure karti hain ki products aur services ke quality levels properly maintain kiye jaate hain aur supplier aur customer quality issues properly resolve kiye jaate hain. Quality assurance mistakes aur defects hone se prevent karne ki ek method hai.",
      p2: "ISO, quality assurance ko 'quality management ka woh part jo yeh confidence provide karne par focus hai ki quality requirements fulfill hongi' ke roop mein define karta hai. Yeh ek proactive approach hai, reactive nahi. Product ko har step par monitor kiya jaata hai.",
      table: {
        caption: "Table 9.1: Quality Control vs Quality Assurance",
        header1: "Quality Control",
        header2: "Quality Assurance",
        rows: [
          { qc: "Product par focused", qa: "Process par focused" },
          { qc: "Reactive approach", qa: "Proactive approach" },
          { qc: "Corrective action", qa: "Preventive action" },
          { qc: "Quality testing par focus", qa: "Quality building par focus" },
          { qc: "Defects detect karna", qa: "Defects prevent karna" }
        ]
      }
    },
    deming: {
      title: "Deming ka Philosophy",
      p1: "William Edwards Deming ek American professor, statistician, aur management consultant the. Unhone Japan mein process control sikhaya aur yeh message diya ki 'quality mein improvement karke, companies apne expenses kam kar sakti hain aur productivity aur market share badha sakti hain.' Unke ideas ne Toyota aur Sony jaisi companies ko success achieve karne mein help ki.",
      cycle: {
        title: "Deming Cycle (PDCA Cycle)",
        p1: "Deming ne ek cycle propose kiya jise aksar PDCA cycle kehte hain. PDCA ek four-step management technique hai, jiska meaning hai Plan-Do-Check-Act. Yeh concept process ki monitoring aur har step par failure ke root cause ko eliminate karne par focus hai.",
        plan: { title: "Plan", description: "Company ke goals establish karein. Un goals ko achieve karne ke liye strategies create karein." },
        do: { title: "Do", description: "Plan ke according kaam karein. Correct raw materials, additives, aur packaging materials ka use karein." },
        check: { title: "Check", description: "Regularly check karein ki sabhi protocols plan ke according ho rahe hain ya nahi. Kisi bhi deviation ko correct karein." },
        act: { title: "Act", description: "Jab koi non-compliance paya jaaye, to uske root cause ko identify karein aur use eliminate karne ke liye plan banayein." }
      }
    },
    juran: {
      title: "Juran ka Philosophy",
      p1: "Joseph Juran ek American engineer aur management consultant the. Unhone quality achieve karne ke liye ek broad organizational-level approach ke importance par emphasis diya. Unhone kaha ki quality management top management se start hoti hai aur neeche tak jaati hai.",
      trilogy: {
        title: "Juran Trilogy",
        p1: "Juran ne quality ke liye ek approach diya jise Juran Trilogy kaha jaata hai. Is quality concept mein included hain:",
        list: [
          { title: "Quality Planning", description: "Products aur processes design karna jo customer needs ko meet karein." },
          { title: "Quality Control", description: "Process ko monitor karna aur performance ko standards ke saath compare karke correct karna." },
          { title: "Quality Improvement", description: "Continuously better performance levels tak pahunchne ke liye projects create karna." }
        ]
      },
      p2: "Juran ke according, quality issues ka main cause change ka resistance aur human relations problems thi."
    },
    tqm: {
      title: "Total Quality Management (TQM)",
      p1: "TQM ek management philosophy hai jiska objective customer satisfaction ke through long-term success achieve karna hai. TQM mein, ek organization ke sabhi members processes, products, services, aur jis culture mein ve kaam karte hain, usmein continuously improve karne mein participate karte hain. Yeh QC aur QA se aage jaake poore organization ko quality ke liye responsible banata hai.",
      principles: {
        title: "TQM ke Key Principles",
        list: [
          { title: "Customer-Focused", description: "Customer ultimately quality ke level ko determine karta hai. Unki needs ko understand karna aur fulfill karna TQM ka core hai." },
          { title: "Total Employee Involvement", description: "Sabhi employees, management se lekar shop floor workers tak, ek common goal ke liye kaam karte hain. Har koi quality ke liye responsible hai." },
          { title: "Process-Centered", description: "TQM process thinking par focus karta hai. Ek process steps ki ek series hai jo inputs ko lekar outputs create karti hai. Process ko define karna aur uski performance ko monitor karna essential hai." },
          { title: "Integrated System", description: "Ek organization mein different departments ko together milkar kaam karna chahiye. Horizontal processes jo departments ko connect karti hain, TQM ke liye crucial hain." },
          { title: "Strategic and Systematic Approach", description: "Quality ko ek strategic management ka integral part maana jaata hai. Ek strategic plan create kiya jaata hai jismein quality ko core element ke roop mein include kiya jaata hai." },
          { title: "Continuous Improvement (Kaizen)", description: "TQM continuous improvement par emphasis deta hai. Yeh ek 'zero defects' ki taraf move karne ka effort hai." },
          { title: "Fact-Based Decision Making", description: "Decisions data aur facts par based hone chahiye, assumptions par nahi. Performance ko track karne ke liye data ka use kiya jaata hai." },
          { title: "Communications", description: "Effective communication TQM ka ek critical part hai, jo morale maintain karta hai aur employees ko motivate karta hai." }
        ]
      }
    },
    iso: {
      title: "ISO Standards",
      p1: "ISO (International Organization for Standardization) ek worldwide federation hai jo various industries ke liye standards develop karta hai. Yeh ek non-governmental organization hai jo 160 se zyada countries ke national standards bodies ka network hai. Iska main purpose products, services, aur systems ke liye voluntary international standards develop karna hai taaki quality, safety, aur efficiency ensure ho sake.",
      p2: "Dairy industry ke liye, ISO 9001 aur ISO 22000 sabse important hain.",
      qms: {
        title: "ISO 9001: Quality Management Systems (QMS)",
        p1: "ISO 9001 ek standard hai jo ek Quality Management System (QMS) ke liye requirements set karta hai. Yeh ek organization ki ability par focus karta hai consistently aise products aur services provide karne ki jo customer aur regulatory requirements meet karte hain. Yeh product quality par focus karta hai, food safety par nahi.",
        elementsTitle: "Key Elements:",
        list: [
          { title: "Customer Focus", description: "Customer needs ko understand karna aur unhein meet karne ki koshish karna." },
          { title: "Leadership", description: "Top management ko quality ke prati committed hona chahiye aur ek clear vision provide karni chahiye." },
          { title: "Engagement of People", description: "Sabhi levels ke employees ko quality improvement mein involve karna." },
          { title: "Process Approach", description: "Activities ko interrelated processes ke roop mein understand karna aur manage karna." },
          { title: "Improvement", description: "Continuous improvement ko ek permanent objective banana." },
          { title: "Evidence-based Decision Making", description: "Data aur information ke analysis par based decisions lena." },
          { title: "Relationship Management", description: "Suppliers jaise interested parties ke saath relationships ko manage karna." }
        ]
      },
      fsms: {
        title: "ISO 22000: Food Safety Management Systems (FSMS)",
        p1: "ISO 22000 ek food-specific standard hai jo ek Food Safety Management System (FSMS) ke liye requirements specify karta hai. Yeh ISO 9001 ke management principles ko HACCP ke food safety principles ke saath combine karta hai. Yeh 'farm to fork' food chain ke sabhi organizations ke liye design kiya gaya hai.",
        elementsTitle: "Key Elements:",
        list: [
          { title: "Interactive Communication", description: "Food chain ke sabhi levels par (suppliers, customers, regulators) communication essential hai." },
          { title: "System Management", description: "Ek structured management system (jaise ISO 9001) ki zarurat." },
          { title: "Prerequisite Programs (PRPs)", description: "Ek clean, hygienic environment maintain karne ke liye basic conditions aur activities." },
          { title: "HACCP Principles", description: "Food safety hazards ko control karne ke liye HACCP ke saat principles ko incorporate karna." }
        ],
        p2: "Ek dairy plant ke liye, ISO 22000 certification yeh demonstrate karta hai ki unke paas food safety ke liye ek robust aur globally recognized system hai, jo HACCP aur PRPs ko ek formal management framework mein integrate karti hai."
      }
    },
    haccp: {
      title: "HACCP - Hazard Analysis and Critical Control Points",
      p1: "HACCP food safety ke liye ek systematic aur preventive approach hai. Ismein production process mein hone wale biological (jaise bacteria), chemical (jaise chemicals), aur physical (jaise glass) hazards ko identify kiya jaata hai, jo final product ko unsafe bana sakte hain. Phir in risks ko safe level tak reduce karne ke liye measures develop kiye jaate hain.",
      principles: {
        title: "HACCP ke Saat Principles",
        list: [
          { title: "Hazard Analysis Conduct Karein:\", description: "Dairy production ke har step ka in-depth analysis karna, raw milk se lekar packaging tak. Har step par potential biological (Listeria, Salmonella), chemical (antibiotics, cleaning agents), aur physical (metal, glass) hazards ko identify karna." },
          { title: "Critical Control Points Determine Karein (CCPs):\", description: "CCPs ve points hain jahan control apply karke food safety hazard ko prevent, eliminate, ya ek acceptable level tak reduce kiya ja sakta hai. For example, pasteurization ek CCP hai." },
          { title: "Critical Limits Establish Karein:\", description: "Har CCP ke liye measurable limits set karna, jaise temperature (≥72°C), time (≥15 seconds), pH (≤4.6). Ye limits safe aur unsafe conditions ke beech ki boundary hoti hain." },
          { title: "Monitoring Procedures Establish Karein:\", description: "Yeh observations ya measurements ka ek planned sequence hai, jisse yeh assess kiya ja sake ki ek CCP control mein hai ya nahi. Ismein yeh specify hota hai ki kya, kaise, kab, aur kaun monitor karega." },
          { title: "Corrective Actions Establish Karein:\", description: "Ye pre-determined actions hain jo tab liye jaate hain jab monitoring se pata chalta hai ki critical limit se deviation ho gaya hai. Ismein product ko isolate karna aur further action lena included hai." },
          { title: "Verification Procedures Establish Karein:\", description: "Ye activities is baat ki confirm karti hain ki HACCP system correctly kaam kar raha hai. Ismein HACCP plan ka audit, equipment ka calibration, aur testing included hai." },
          { title: "Record-Keeping aur Documentation Procedures Establish Karein:\", description: "Accurate aur complete documentation HACCP system ke effective implementation ke liye bahut essential hai. Ismein hazard analysis, monitoring logs, corrective actions, aur verification activities ke records included hote hain." }
        ]
      }
    },
    prps: {
      title: "Prerequisite Programs (PRPs)",
      p1: "Ye programs ek effective HACCP system ki foundation hain. Inka effective implementation food chain mein hazards ke entry ki likelihood ko reduce karta hai.",
      gmp: {
        title: "Good Manufacturing Practices (GMPs)",
        p1: "GMPs ve rules aur guidelines hain jo ensure karte hain ki products consistently quality standards ke according produce aur control kiye ja rahe hain. Dairy industry mein, GMPs sab kuch cover karte hain - personnel hygiene se lekar equipment maintenance tak.",
        list: [
            { title: "Personnel", description: "Sabhi employees ko hygiene aur apni responsibilities ke liye necessary training milni chahiye." },
            { title: "Premises & Equipment", description: "Building aur equipment is tarah se design aur maintain kiye jaane chahiye ki contamination prevent ho sake aur cleaning easy ho." },
            { title: "Production", description: "Har process ke liye written procedures (SOPs) honi chahiye. Critical steps ko define aur control kiya jaana chahiye." },
            { title: "Quality Control", description: "Raw materials, intermediate, aur final products ke liye testing procedures honi chahiye." },
            { title: "Documentation", description: "Har batch ka record rakha jaana chahiye taaki traceability ensure ho sake." },
        ]
      },
      ghp: {
        title: "Good Hygiene Practices (GHPs)",
        p1: "GHP, GMP ka ek essential part hai, jo food ko contamination se protect karne ke liye necessary sabhi practices ko cover karta hai. Iska main purpose ek hygienic environment maintain karna hai.",
        list: [
          { title: "Personal Hygiene", description: "Hand washing, clean clothes pehenna, aur sick hone par kaam na karna." },
          { title: "Cleaning and Sanitation", description: "Equipment aur premises ki regular aur effective cleaning aur sanitization." },
          { title: "Pest Control", description: "Pests ko plant mein enter hone se prevent karna aur eliminate karna." },
          { title: "Waste Management", description: "Waste ko properly store aur dispose karna taaki vah contamination ka source na bane." }
        ]
      },
      glp: {
        title: "Good Laboratory Practices (GLPs)",
        p1: "GLP un principles ka ek set hai jo non-clinical health aur environmental safety studies ki planning, performance, monitoring, recording, reporting, aur archiving ko govern karta hai. Dairy QC lab ke liye, iska matlab hai ki test results reliable, repeatable, aur auditable hain.",
        list: [
          { title: "Organization and Personnel", description: "Har person ki responsibilities clear honi chahiye aur unke paas adequate training hona chahiye." },
          { title: "Apparatus, Material, and Reagents", description: "Sabhi equipment ko required anusar calibrate aur maintain kiya jaana chahiye. Reagents ko required anusar label aur store kiya jaana chahiye." },
          { title: "Test Systems", description: "Testing ke liye use hone wale physical ya chemical systems ko required anusar define aur control kiya jaana chahiye." },
          { title: "Standard Operating Procedures (SOPs)", description: "Har routine procedure ke liye written, approved SOPs honi chahiye." },
          { title: "Reporting of Results", description: "Results ko clearly, accurately, aur completely report kiya jaana chahiye, jismein test conditions aur koi bhi deviations included hon." },
          { title: "Storage and Retention of Records", description: "Sabhi raw data, reports, aur samples ko required anusar ek specified period ke liye archive kiya jaana chahiye." }
        ]
      }
    },
    oprps: {
      title: "Operational Prerequisite Programs (oPRPs)",
      p1: "Operational Prerequisite Programs (oPRPs) ve control measures hain jinhe hazard analysis dwara food safety hazards ke entry ki likelihood ko control karne ke liye essential maana jaata hai. Ve general PRPs se zyada specific hote hain lekin Critical Control Points (CCPs) ki tarah critical nahi hote.",
      p2: "<strong>PRP, oPRP, aur CCP ke beech difference:</strong>",
      table: {
          header1: "Aspect",
          header2: "PRP (Prerequisite Program)",
          header3: "oPRP (Operational PRP)",
          header4: "CCP (Critical Control Point)",
          rows: [
              { c1: "Focus", c2: "General hygiene aur good practices", c3: "Ek specific hazard ko control karne ke liye necessary specific measure", c4: "Ek hazard ko eliminate ya unacceptable level tak reduce karne ke liye necessary last point" },
              { c1: "Identification", c2: "Standard practices aur guidelines", c3: "Hazard analysis ke through", c4: "HACCP decision tree ke through" },
              { c1: "Monitoring", c2: "Regular inspection (jaise, sanitation checks)", c3: "Observation ya measurement (jaise, temperature checks)", c4: "Continuous ya frequent measurement (jaise, pasteurizer temperature recording)" },
              { c1: "Failure ka Consequence", c2: "Risk mein minor increase", c3: "Potentially unsafe product", c4: "Definitely unsafe product" }
          ]
      },
      dairy_examples: {
          title: "Dairy Industry mein oPRPs ke Examples",
          list: [
              { title: "Raw Milk Reception", description: "<strong>oPRP:</strong> Milk ka temperature control aur rapid antibiotic testing. <strong>Why:</strong> Yeh ensure karne ke liye ki milk ek acceptable temperature (jaise <5°C) par receive ho aur antibiotics se free ho, jo starter cultures ko inhibit kar sakte hain aur allergies cause kar sakte hain. Yeh ek CCP nahi hai kyunki baad mein pasteurization bacteria ko kill kar dega." },
              { title: "Pasteurization", description: "<strong>oPRP:</strong> Heat exchanger mein pressure differential. <strong>Why:</strong> Yeh ensure karne ke liye ki pasteurized side par hamesha raw side ke comparison mein zyada pressure ho. Yeh leak ki condition mein pasteurized milk mein raw milk ke entry ko prevent karta hai. Pasteurization ka time aur temperature khud ek CCP hai." },
              { title: "CIP (Cleaning-In-Place)", description: "<strong>oPRP:</strong> Final rinse ke baad cleanliness ka visual inspection aur ATP swabbing. <strong>Why:</strong> Yeh verify karne ke liye ki cleaning effective thi aur koi chemical residues nahi bache hain. Yeh ek CCP nahi hai kyunki yeh directly product mein ek hazard ko control nahi kar raha, balki indirectly." },
              { title: "Allergen Management", description: "<strong>oPRP:</strong> Allergen-containing aur allergen-free products ke beech production sequencing aur cleaning. <strong>Why:</strong> Cross-contamination ke risk ko control karne ke liye. Cleaning ki effectiveness verifiable hai, lekin yeh ek final control point nahi ho sakta." },
              { title: "Packaging", description: "<strong>oPRP:</strong> Package seal integrity ki hourly checks. <strong>Why:</strong> Yeh ensure karne ke liye ki packages properly seal hain, taaki post-contamination prevent ho sake. Yeh ek CCP nahi ho sakta agar other downstream controls exist karte hain." }
          ]
      }
    },
    regulatory_bodies: {
        title: "India mein Regulatory Bodies",
        p1: "Indian food processing sector apne quality parameters ko compulsory legislation ke through maintain karta hai. Dairy industry mein prevalent teen major Indian standards FSSR, 2011, Bureau of Indian Standards (BIS), aur Agriculture Produce Grading and Marketing Act (Agmark) hain.",
        fssai: {
            title: "Food Safety and Standards Authority of India (FSSAI)",
            p1: "India ke Food Safety and Standards Rules, Food Adulteration Prevention Act ki jagah lete hain. Food Safety and Standards Rules August, 2011 se effective hue. Ye compulsory standards hain jo market mein jaane wale kisi bhi food product ke liye obligatory hain."
        },
        bis: {
            title: "Bureau of Indian Standards (BIS)",
            p1: "BIS, jise pehle Indian Standards Institution (ISI) ke naam se jaana jaata tha, 1986 mein ek statutory body ke roop mein establish kiya gaya tha. Processed food sector mein, formulated standards voluntary aur third party certification systems ke through implement kiye jaate hain. In standards ka compliance karne wale manufacturers 'ISI' ya 'BIS' certification obtain kar sakte hain."
        },
        agmark: {
            title: "Agmark",
            p1: "Agriculture Produce Grading and Marketing Act 1937 mein enact kiya gaya tha. Iske under standards 'Agmark' standards ke roop mein jaane jaate hain. Is act ke under grading voluntary hai. Teen dairy products (ghee, butter aur dairy spreads) currently is scheme ke under grade kiye jaate hain."
        },
        mmpo: {
            title: "Milk and Milk Product Order (MMPO)",
            p1: "Daily 10,000 liters se zyada milk ka processing karne wale ya yearly 500 tonnes se zyada milk solids ko handle karne wale sabhi dairy plants ko competent authority se registration certificate obtain karna required hai. Is order ne milkshed areas bhi define kiye hain."
        },
        export_act: {
            title: "Export (Quality Control and Inspection) Act",
            p1: "1963 mein enact kiya gaya aur Export Inspection Council of India dwara operate kiya jaata hai, yeh act exportable product ke liye production center par manufacturers' premises, human hygiene, purchased raw material ki quality, followed hygienic manufacturing practices, followed quality assurance programs, packaging aur labeling ke compulsory inspection par emphasis deta hai."
        }
    }
  },
  en: {
    title: "Quality Concepts",
    description: "A guide to ensuring quality in the Dairy Industry.",
     tabs: {
            intro: "Introduction",
            concepts: "Concepts",
            prps: "PRPs",
            oprps: "oPRPs",
            philosophy: "Philosophies",
            tqm: "TQM",
            haccp: "HACCP",
            iso: "ISO",
            bodies: "Regulatory Bodies"
    },
    intro1: "With the advent of food safety concepts due to the liberalization of the food industry, the quality of the food products being produced is of utmost importance. The integration of the food supply chains now requires newer approaches to ensure food safety. The dairy industry nowadays is also adopting some of these approaches to ensure the safety of the milk and milk products being produced. Food regulatory bodies have also formulated strict laws and standards for milk and milk products. Food safety is now not only limited to the products being exported but also to the domestic market and consumers. So in response to the food safety concept, the public and the private sector have now modified their production process with adoption of newer technologies and have also applied stringent laws to ensure product safety.",
    intro2: "Safety and quality of a product must be ensured in the entire chain involved in the production, i.e., from the udder to the consumer or from farm to fork. Milk being a highly perishable commodity and being at a higher risk to get contaminated by either environmental factors or due to poor farm practices demands high care from milk producers and the industrial persons to ensure its safety and quality, especially where the infrastructure is not proper.",
    intro3: "Considering all these challenges faced by dairy industry, the adoption of quality assurance and certain quality concepts will help the dairy industry in the following ways:",
    introBenefits: [
      "Curbing the menace of adulteration which will be subsequently reflected in the quality of milk and milk products.",
      "It will help in developing the confidence and faith of domestic as well as international consumers toward the quality of milk and milk products produced.",
      "It will help in generating more revenue to the dairy industry which will, in turn, help the employees and the farmers."
    ],
    whatIsQuality: {
      title: "What Is Quality?",
      p1: "According to ISO 9001:2005, quality is degree to which a set of inherent characteristics of an object fulfills requirements. It is the totality of the features and characteristics of a product or a service that bears on its ability to satisfy stated or implied needs.",
      variability: "Variability",
      p2: "Quality has an inverse relation with variability. As the variability in the characteristics or features of a product or a service is reduced the quality of the product or the service given gets increased.",
      p3: "Quality embraces many characteristics: Physical, Chemical, Technological, Bacteriological, Nutritional, Aesthetic (Appearance).",
      p4: "A consumer mainly focuses on the specifications of a product or service and compares the same product available from different manufacturers."
    },
    qc: {
      title: "What Is Quality Control (QC)?",
      p1: "It is defined as the set of activities which ensure that the products and services meet/fulfill requirements for quality. It was categorized as a laboratory function which aims at end point testing of the finished goods or products by analyzing the samples and making decision to accept or reject them.",
      p2: "Quality control is a failure detection system that uses a testing technique to identify the flaws and the errors in the products by drawing random samples from a specified lot at regular intervals. It aims at detection rather than prevention.",
      responsibilities: {
        title: "Responsibilities of Quality Control Department",
        list: [
          "Inspection of the supplies, materials, and raw products.",
          "Scheduling and verification of production operations.",
          "Measurement of production and equipment efficiency.",
          "Chemical, microbial, and sensory analysis of the finished product.",
          "Controlling storage and shipping.",
          "Preparation of Standard Operating Procedures (SOPs) and specifications.",
          "Sanitation inspections.",
          "Ensuring conformance to legal regulations.",
          "Controlling waste disposal."
        ]
      }
    },
    qa: {
      title: "What Is Quality Assurance (QA)?",
      p1: "It is defined as a set of activities which ensure that the quality levels of products and services are properly maintained and that the supplier and customer quality issues are properly resolved. Quality assurance is a method to prevent the occurrence of mistakes and defects.",
      p2: "ISO defines quality assurance as "part of quality management focused on providing confidence that quality requirements will be fulfilled". It is a proactive approach, not a reactive one. The product is monitored at each step.",
      table: {
        caption: "Table 9.1: Quality Control vs Quality Assurance",
        header1: "Quality Control",
        header2: "Quality Assurance",
        rows: [
          { qc: "Product oriented", qa: "Process oriented" },
          { qc: "Reactive approach", qa: "Proactive approach" },
          { qc: "Corrective action", qa: "Preventive action" },
          { qc: "Focuses on testing quality", qa: "Focuses on building quality" },
          { qc: "Detect defects", qa: "Prevent defects" }
        ]
      }
    },
    deming: {
      title: "Deming's Philosophy",
      p1: "William Edwards Deming was an American professor, statistician, and management consultant. He taught process control in Japan and gave the message that 'by improving quality, companies can decrease their expenses and increase productivity and market share.' His ideas helped companies like Toyota and Sony to achieve success.",
      cycle: {
        title: "The Deming Cycle (PDCA Cycle)",
        p1: "Deming proposed a cycle often called the PDCA cycle. PDCA is a four-step management technique, which stands for Plan-Do-Check-Act. This concept focuses on monitoring the process and eliminating the root cause of failure at each step.",
        plan: { title: "Plan", description: "Establish the goals of the company. Create strategies to achieve those goals." },
        do: { title: "Do", description: "Work according to the plan. Use the correct raw materials, additives, and packaging materials." },
        check: { title: "Check", description: "Regularly check that all protocols are being followed as per the plan. Correct any deviations." },
        act: { title: "Act", description: "When non-compliance is found, identify its root cause and make a plan to eliminate it." }
      }
    },
    juran: {
      title: "Juran's Philosophy",
      p1: "Joseph Juran was an American engineer and management consultant. He emphasized the importance of a broad organizational-level approach to achieve quality. He stated that quality management starts from the top management and goes down.",
      trilogy: {
        title: "The Juran Trilogy",
        p1: "Juran gave an approach to quality called the Juran Trilogy. This quality concept includes:",
        list: [
          { title: "Quality Planning", description: "Designing products and processes that meet customer needs." },
          { title: "Quality Control", description: "Monitoring the process and comparing performance with standards to correct it." },
          { title: "Quality Improvement", description: "Creating projects to continuously reach better levels of performance." }
        ]
      },
      p2: "According to Juran, the main cause of quality issues was resistance to change and human relations problems."
    },
    tqm: {
      title: "Total Quality Management (TQM)",
      p1: "TQM is a management philosophy that aims to achieve long-term success through customer satisfaction. In TQM, all members of an organization participate in continuously improving processes, products, services, and the culture they work in. It goes beyond QC and QA to make the entire organization responsible for quality.",
      principles: {
        title: "Key Principles of TQM",
        list: [
          { title: "Customer-Focused", description: "The customer ultimately determines the level of quality. Understanding and fulfilling their needs is the core of TQM." },
          { title: "Total Employee Involvement", description: "All employees, from management to shop floor workers, work towards a common goal. Everyone is responsible for quality." },
          { title: "Process-Centered", description: "TQM focuses on process thinking. A process is a series of steps that takes inputs and creates outputs. Defining and monitoring the performance of the process is essential." },
          { title: "Integrated System", description: "Different departments within an organization must work together. Horizontal processes that link departments are crucial for TQM." },
          { title: "Strategic and Systematic Approach", description: "Quality is considered an integral part of strategic management. A strategic plan is created that includes quality as a core element." },
          { title: "Continuous Improvement (Kaizen)", description: "TQM emphasizes continuous improvement. It is an effort to move towards 'zero defects'." },
          { title: "Fact-Based Decision Making", description: "Decisions should be based on data and facts, not on assumptions. Data is used to track performance." },
          { title: "Communications", description: "Effective communication is a critical part of TQM, which maintains morale and motivates employees." }
        ]
      }
    },
    iso: {
      title: "ISO Standards",
      p1: "ISO (International Organization for Standardization) is a worldwide federation that develops standards for various industries. It is a non-governmental organization that is a network of national standards bodies from over 160 countries. Its main purpose is to develop voluntary international standards for products, services, and systems to ensure quality, safety, and efficiency.",
      p2: "For the dairy industry, ISO 9001 and ISO 22000 are the most important.",
      qms: {
        title: "ISO 9001: Quality Management Systems (QMS)",
        p1: "ISO 9001 is a standard that sets out the requirements for a Quality Management System (QMS). It focuses on an organization's ability to consistently provide products and services that meet customer and regulatory requirements. It focuses on product quality, not food safety.",
        elementsTitle: "Key Elements:",
        list: [
          { title: "Customer Focus", description: "Understanding customer needs and striving to meet them." },
          { title: "Leadership", description: "Top management must be committed to quality and provide a clear vision." },
          { title: "Engagement of People", description: "Involving employees at all levels in quality improvement." },
          { title: "Process Approach", description: "Understanding and managing activities as interrelated processes." },
          { title: "Improvement", description: "Making continuous improvement a permanent objective." },
          { title: "Evidence-based Decision Making", description: "Making decisions based on the analysis of data and information." },
          { title: "Relationship Management", description: "Managing relationships with interested parties like suppliers." }
        ]
      },
      fsms: {
        title: "ISO 22000: Food Safety Management Systems (FSMS)",
        p1: "ISO 22000 is a food-specific standard that specifies the requirements for a Food Safety Management System (FSMS). It combines the management principles of ISO 9001 with the food safety principles of HACCP. It is designed for all organizations in the food chain, from 'farm to fork'.",
        elementsTitle: "Key Elements:",
        list: [
          { title: "Interactive Communication", description: "Communication at all levels of the food chain (suppliers, customers, regulators) is essential." },
          { title: "System Management", description: "The need for a structured management system (like ISO 9001)." },
          { title: "Prerequisite Programs (PRPs)", description: "The basic conditions and activities necessary to maintain a clean, hygienic environment." },
          { title: "HACCP Principles", description: "Incorporating the seven principles of HACCP to control food safety hazards." }
        ],
        p2: "For a dairy plant, ISO 22000 certification demonstrates that they have a robust and globally recognized system for food safety, which integrates HACCP and PRPs into a formal management framework."
      }
    },
    haccp: {
      title: "HACCP - Hazard Analysis and Critical Control Points",
      p1: "HACCP is a systematic and preventive approach to food safety. It involves identifying biological (e.g., bacteria), chemical (e.g., chemicals), and physical (e.g., glass) hazards in the production process that can make the final product unsafe. Measures are then developed to reduce these risks to a safe level.",
      principles: {
        title: "The Seven Principles of HACCP",
        list: [
          { title: "Conduct a Hazard Analysis:", description: "In-depth analysis of each step in dairy production, from raw milk to packaging. Identify potential biological (Listeria, Salmonella), chemical (antibiotics, cleaning agents), and physical (metal, glass) hazards at each step." },
          { title: "Determine Critical Control Points (CCPs):", description: "CCPs are points where control can be applied to prevent, eliminate, or reduce a food safety hazard to an acceptable level. For example, pasteurization is a CCP." },
          { title: "Establish Critical Limits:", description: "Set measurable limits for each CCP, such as temperature (≥72°C), time (≥15 seconds), pH (≤4.6). These limits are the boundary between safe and unsafe conditions." },
          { title: "Establish Monitoring Procedures:", description: "A planned sequence of observations or measurements to assess whether a CCP is under control. It specifies what, how, when, and who will monitor." },
          { title: "Establish Corrective Actions:", description: "Pre-determined actions to be taken when monitoring indicates a deviation from a critical limit. This includes isolating the product and taking further action." },
          { title: "Establish Verification Procedures:", description: "Activities that confirm the HACCP system is working correctly. This includes auditing the HACCP plan, calibrating equipment, and testing." },
          { title: "Establish Record-Keeping and Documentation Procedures:", description: "Accurate and complete documentation is essential for the effective implementation of the HACCP system. This includes records of hazard analysis, monitoring logs, corrective actions, and verification activities." }
        ]
      }
    },
    prps: {
      title: "Prerequisite Programs (PRPs)",
      p1: "These programs are the foundation of an effective HACCP system. Their effective implementation reduces the likelihood of hazards entering the food chain.",
      gmp: {
        title: "Good Manufacturing Practices (GMPs)",
        p1: "GMPs are the rules and guidelines that ensure products are consistently produced and controlled according to quality standards. In the dairy industry, GMPs cover everything from personnel hygiene to equipment maintenance.",
        list: [
            { title: "Personnel", description: "All employees must receive the necessary training for hygiene and their responsibilities." },
            { title: "Premises & Equipment", description: "The building and equipment must be designed and maintained to prevent contamination and facilitate cleaning." },
            { title: "Production", description: "There must be written procedures (SOPs) for every process. Critical steps must be defined and controlled." },
            { title: "Quality Control", description: "There must be testing procedures for raw materials, intermediate, and final products." },
            { title: "Documentation", description: "A record of each batch must be kept to ensure traceability." },
        ]
      },
      ghp: {
        title: "Good Hygiene Practices (GHPs)",
        p1: "GHP is an essential part of GMP, covering all practices necessary to protect food from contamination. Its main purpose is to maintain a hygienic environment.",
        list: [
          { title: "Personal Hygiene", description: "Hand washing, wearing clean clothes, and not working when sick." },
          { title: "Cleaning and Sanitation", description: "Regular and effective cleaning and sanitization of equipment and premises." },
          { title: "Pest Control", description: "Preventing and eliminating pests from the plant." },
          { title: "Waste Management", description: "Properly storing and disposing of waste so it does not become a source of contamination." }
        ]
      },
      glp: {
        title: "Good Laboratory Practices (GLPs)",
        p1: "GLP is a set of principles that governs the planning, performance, monitoring, recording, reporting, and archiving of non-clinical health and environmental safety studies. For a dairy QC lab, it means that test results are reliable, repeatable, and auditable.",
        list: [
          { title: "Organization and Personnel", description: "Responsibilities of each person must be clear, and they must have adequate training." },
          { title: "Apparatus, Material, and Reagents", description: "All equipment must be calibrated and maintained as required. Reagents must be labeled and stored as required." },
          { title: "Test Systems", description: "The physical or chemical systems used for testing must be defined and controlled as required." },
          { title: "Standard Operating Procedures (SOPs)", description: "There must be written, approved SOPs for every routine procedure." },
          { title: "Reporting of Results", description: "Results must be reported clearly, accurately, and completely, including test conditions and any deviations." },
          { title: "Storage and Retention of Records", description: "All raw data, reports, and samples must be archived as required for a specified period." }
        ]
      }
    },
    oprps: {
        title: "Operational Prerequisite Programs (oPRPs)",
        p1: "Operational Prerequisite Programs (oPRPs) are control measures identified by hazard analysis as essential to control the likelihood of introducing food safety hazards. They are more specific than general PRPs but not as critical as Critical Control Points (CCPs).",
        p2: "<strong>Difference between PRP, oPRP, and CCP:</strong>",
        table: {
            header1: "Aspect",
            header2: "PRP (Prerequisite Program)",
            header3: "oPRP (Operational PRP)",
            header4: "CCP (Critical Control Point)",
            rows: [
                { c1: "Focus", c2: "General hygiene and good practices", c3: "Specific measure essential to control a particular hazard", c4: "Last point to eliminate or reduce a hazard to an unacceptable level" },
                { c1: "Identification", c2: "Standard practices and guidelines", c3: "Through hazard analysis", c4: "Through HACCP decision tree" },
                { c1: "Monitoring", c2: "Regular inspection (e.g., sanitation checks)", c3: "Observation or measurement (e.g., temperature checks)", c4: "Continuous or frequent measurement (e.g., pasteurizer temperature recording)" },
                { c1: "Consequence of Failure", c2: "Minor increase in risk", c3: "Potentially unsafe product", c4: "Definitely unsafe product" }
            ]
        },
        dairy_examples: {
            title: "Examples of oPRPs in the Dairy Industry",
            list: [
                { title: "Raw Milk Reception", description: "<strong>oPRP:</strong> Temperature control and rapid antibiotic testing of milk. <strong>Why:</strong> To ensure milk is received at an acceptable temperature (e.g., <5°C) and is free from antibiotics, which can inhibit starter cultures and cause allergies. It's not a CCP because subsequent pasteurization will kill bacteria." },
                { title: "Pasteurization", description: "<strong>oPRP:</strong> Pressure differential in the heat exchanger. <strong>Why:</strong> To ensure the pasteurized side always has a higher pressure than the raw side. This prevents raw milk from entering the pasteurized milk in case of a leak. The pasteurization time and temperature itself is a CCP." },
                { title: "CIP (Cleaning-In-Place)", description: "<strong>oPRP:</strong> Visual inspection and ATP swabbing for cleanliness after the final rinse. <strong>Why:</strong> To verify that the cleaning was effective and no chemical residues are left. It's not a CCP as it's not directly controlling a hazard in the product, but indirectly." },
                { title: "Allergen Management", description: "<strong>oPRP:</strong> Production sequencing and cleaning between allergen-containing and allergen-free products. <strong>Why:</strong> To control the risk of cross-contamination. The effectiveness of cleaning is verifiable, but it may not be a final control point." },
                { title: "Packaging", description: "<strong>oPRP:</strong> Hourly checks of package seal integrity. <strong>Why:</strong> To ensure packages are sealed correctly to prevent post-contamination. It may not be a CCP if other downstream controls exist." }
            ]
        }
    },
    regulatory_bodies: {
        title: "Regulatory Bodies in India",
        p1: "The Indian food processing sector maintains its quality parameters through compulsory legislation which specifies minimum standards and certification systems. The three major Indian standards prevalent in the dairy industry are the FSSR, 2011, Bureau of Indian Standards (BIS), and Agriculture Produce Grading and Marketing Act (Agmark).",
        fssai: {
            title: "Food Safety and Standards Authority of India (FSSAI)",
            p1: "The Food Safety and Standards Rules of India replaces the Prevention of Food Adulteration Act which has been in use since the year 1954 for the protection of consumers against supply of inferior quality or adulterated food. Food Safety and Standards Rules came into effect from August, 2011. These are compulsory standards that are obligatory for any food product going into the market."
        },
        bis: {
            title: "Bureau of Indian Standards (BIS)",
            p1: "Bureau of Indian Standards, formerly the Indian Standards Institution (ISI), was established as a statutory body under the Ministry of Consumers Affairs in 1986. In the processed food sector, the formulated standards are implemented through voluntary and third party certification systems. Manufacturers complying with these standards can obtain 'ISI' or 'BIS' certification and exhibit the same on their product package."
        },
        agmark: {
            title: "Agmark",
            p1: "The Agriculture Produce Grading and Marketing Act was first enacted in 1937 to prescribe grade standards for agricultural and allied commodities. The standards came to be known as Agmark standards and are formulated by the Directorate of Marketing and Inspection (DMI), under Ministry of Agriculture (Government of India). Grading under this act is voluntary. Three dairy products (ghee, butter and dairy spreads) are currently graded under this scheme."
        },
        mmpo: {
            title: "Milk and Milk Product Order (MMPO)",
            p1: "All dairy plants processing more than 10,000 liters of milk per day or handling more than 500 tonnes of milk solids per annum are now required to obtain registration certificates from the competent authority. This order has also defined milkshed areas, so as to restrict uneven procurement and marketing of milk."
        },
        export_act: {
            title: "Export (Quality Control and Inspection) Act",
            p1: "Enacted in 1963 and operated by the Export Inspection Council of India, this act stresses on compulsory inspection of the manufacturers' premises, human hygiene, quality of raw material purchased, hygienic manufacturing practices followed, quality assurance programmes followed, packaging and labeling at the production center for the exportable product."
        }
    }
  }
}
