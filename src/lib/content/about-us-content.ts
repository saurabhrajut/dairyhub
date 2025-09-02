
import { Bot, Lightbulb, Factory, FlaskConical, Beaker, Scale, Calculator, Settings, TestTube, ClipboardCheck, CheckSquare, Droplet, PackageCheck, Lock, DollarSign, Microscope, Recycle, Bug, ShieldCheck, FileSpreadsheet, Search, Wind, Users, GraduationCap, Atom } from "lucide-react";
import { PaneerIcon, IceCreamIcon, ReagentIcon } from "@/components/icons";

export const aboutUsContent = {
    hi: {
        title: "Dairy Hub के पीछे",
        description: "आपके भरोसेमंद डिजिटल डेयरी पार्टनर की कहानी",
        developer: {
            name: "सौरभ राजपूत",
            image: image: "/IMG_6535.jpg",
            academicInfo: {
                title: "शैक्षणिक जानकारी",
                degrees: [
                    { name: "B.Tech, Food Technology", institution: "Ch. Devi Lal State Institute, Sirsa (Pursuing)" },
                    { name: "Diploma, Food Technology", institution: "Ch. Bansi Lal Govt. Polytechnic, Bhiwani" },
                    { name: "Diploma, Dairy Technology", institution: "IGNOU, New Delhi" }
                ]
            }
        },
        welcomeMessage: `<p class="text-lg"><span class="font-bold">Dairy Hub में आपका स्वागत है!</span> यह सिर्फ एक ऐप नहीं, बल्कि डेयरी विज्ञान और उद्योग की जटिल दुनिया में आपका विश्वसनीय साथी है। हमारा मिशन डेयरी क्षेत्र से जुड़ी हर आवश्यक जानकारी को एक <strong class="font-semibold">सरल, सटीक और वैज्ञानिक</strong> तरीके से आप तक पहुँचाना है, जो छात्रों, पेशेवरों और उत्साही लोगों को समान रूप से सशक्त बनाता है।</p>`,
        journey: {
            title: "मेरा सफ़र: डेयरी टेक्नोलॉजी के प्रति मेरा जुनून",
            story: `
                <p>डेयरी और खाद्य प्रौद्योगिकी के क्षेत्र में मेरी यात्रा अकादमिक जिज्ञासा से शुरू हुई और जल्द ही एक जुनून में बदल गई। अपनी पढ़ाई और इंटर्नशिप के दौरान, मैंने उद्योग के पेशेवरों और नए लोगों के बीच एक महत्वपूर्ण अंतर देखा: व्यावहारिक, सुलभ और वैज्ञानिक रूप से मान्य जानकारी की कमी, खासकर डिजिटल क्षेत्र में। जटिल प्रक्रियाओं को समझने से लेकर नवीनतम उद्योग मानकों के साथ अपडेट रहने तक की चुनौतियाँ स्पष्ट थीं।</p>
                <p>इसी कमी को दूर करने के संकल्प के साथ मैंने Dairy Hub की नींव रखी। मेरा लक्ष्य एक व्यापक डिजिटल पारिस्थितिकी तंत्र बनाना था जो सिर्फ जानकारी प्रदान करने से कहीं आगे जाए। मैं एक ऐसा उपकरण बनाना चाहता था जो जटिल गणनाओं को सरल करे, नवीनतम उद्योग ज्ञान प्रदान करे, और उपयोगकर्ताओं को उनकी उंगलियों पर विशेषज्ञ सहायता प्रदान करे। यह ऐप उस दृष्टिकोण की परिणति है - डेयरी क्षेत्र में सीखने, बढ़ने और उत्कृष्टता प्राप्त करने के इच्छुक किसी भी व्यक्ति के लिए एक वन-स्टॉप समाधान।</p>
            `
        },
        whatsInside: {
            title: "Dairy Hub में क्या है?",
            features: [
                { icon: Factory, title: "Dairy Industry Insights", description: "भारतीय डेयरी क्षेत्र से नवीनतम रुझान, आँकड़े और अपडेट प्राप्त करें।" },
                { icon: ShieldCheck, title: "FSSAI Standards", description: "दूध और दूध उत्पादों के लिए आधिकारिक FSSAI मानकों को समझें।" },
                { icon: Atom, title: "Milk Chemistry", description: "दूध की संरचना, प्रोटीन और गुणों में गहराई से उतरें।" },
                { icon: Bug, title: "Microbiology", description: "डेयरी में सूक्ष्मजीवों, उनके परीक्षण और सुरक्षा प्रोटोकॉल के बारे में जानें।" },
                { icon: Droplet, title: "Milk Handling", description: "दूध की प्राप्ति, भंडारण और संरक्षण की सर्वोत्तम प्रथाओं को जानें।" },
                { icon: Settings, title: "Dairy Processing", description: "पाश्चुरीकरण से लेकर होमोजेनाइजेशन तक, मुख्य डेयरी प्रसंस्करण तकनीकों का अन्वेषण करें।" },
                { icon: ReagentIcon, title: "Fermented Products", description: "दही, छाछ और अन्य किण्वित उत्पादों के विज्ञान और प्रसंस्करण को समझें।" },
                { icon: Wind, title: "Evaporation & Drying", description: "संघनित दूध और दूध पाउडर बनाने की प्रक्रियाओं के बारे में जानें।" },
                { icon: PaneerIcon, title: "Paneer Processing", description: "औद्योगिक प्रक्रिया में महारत हासिल करें और पनीर की उपज की गणना करें।" },
                { icon: IceCreamIcon, title: "Ice-Cream Production", description: "आइसक्रीम बनाने के पीछे के विज्ञान और इंजीनियरिंग को समझें।" },
                { icon: TestTube, title: "Compositional Analysis", description: "विभिन्न डेयरी उत्पादों के लिए रासायनिक परीक्षण विधियाँ जानें।" },
                { icon: CheckSquare, title: "Quality Concepts", description: "HACCP, TQM, और ISO जैसे गुणवत्ता प्रबंधन प्रणालियों का अन्वेषण करें।" },
                { icon: ClipboardCheck, title: "Audits & Verification", description: "डेयरी संयंत्रों में खाद्य सुरक्षा ऑडिट और सत्यापन प्रक्रियाओं को समझें।" },
                { icon: Beaker, title: "Solutions Preparation", description: "विभिन्न लैब अभिकर्मकों और विलयनों की सही-सही गणना और तैयारी करें।" },
                { icon: Scale, title: "Standardization Calculators", description: "पियर्सन स्क्वायर, सम्मिश्रण और दूध मानकीकरण के लिए उन्नत गणनाएँ।" },
                { icon: FileSpreadsheet, title: "Various Calculations", description: "उपज, अम्लता, लागत-लाभ और अन्य विविध गणनाएँ करें।" },
                { icon: Recycle, title: "CIP & ETP", description: "सफाई-इन-प्लेस (CIP) प्रक्रियाओं और अपशिष्ट उपचार संयंत्रों (ETP) के बारे में जानें।" },
                { icon: Microscope, title: "Lab Equipments", description: "डेयरी प्रयोगशाला में उपयोग होने वाले उपकरणों के सिद्धांतों और कामकाज को जानें।" },
                { icon: Search, title: "Adulteration Testing", description: "दूध में आम मिलावटों का पता लगाने और उन्हें रोकने के तरीके सीखें।" },
                { icon: ClipboardCheck, title: "Calibration", description: "सटीक परिणामों के लिए लैब के कांच के बने पदार्थ और अभिकर्मकों को कैलिब्रेट करें।" },
                { icon: PackageCheck, title: "Packaging Testing", description: "डेयरी उत्पादों के लिए पैकेजिंग सामग्री के गुणवत्ता परीक्षणों को समझें।" },
                { icon: Droplet, title: "Water Testing", description: "WTP/ETP विश्लेषण के लिए पानी परीक्षण के महत्व और तरीकों को जानें।" },
                { icon: GraduationCap, title: "Expert Support", description: "AI और वास्तविक विशेषज्ञों से सलाह और उत्तर प्राप्त करें।" },
                { icon: Bot, title: "Sarathi AI Chatbot", description: "अपने व्यक्तिगत AI सहायक से तुरंत जवाब और सहायता प्राप्त करें। डेयरी या करियर से संबंधित कोई भी प्रश्न पूछें!" }
            ]
        },
        mission: {
            title: "हमारा मिशन",
            text: `हर उपयोगकर्ता तक <strong>सही, वैज्ञानिक और व्यावहारिक डेयरी ज्ञान</strong> पहुंचाना – बिना किसी भ्रम के।`
        },
        vision: {
            title: "हमारा दृष्टिकोण",
            text: "भारत के डेयरी क्षेत्र को डिजिटल समर्थन देना, जिससे नए सीखने वाले और पेशेवर स्मार्ट निर्णय ले सकें।"
        },
        callToAction: {
            title: "आइए, साथ मिलकर आगे बढ़ें",
            text: "आपका फ़ीडबैक हमारे लिए अनमोल है। अगर आपको ऐप पसंद आए, तो कृपया इसे साझा करें, समीक्षा करें, और हमें बेहतर बनने में मदद करें।"
        },
        footer: "Made with ❤️ by Saurabh Rajput | Dairy Hub App"
    },
    en: {
        title: "Behind Dairy Hub",
        description: "The story of your trusted digital dairy partner",
        developer: {
            name: "Saurabh Rajput",
            image: "https://firebasestorage.googleapis.com/v0/b/dhenuguide.firebasestorage.app/o/IMG_6535%20(2).jpg?alt=media&token=5843169c-b4d5-4e04-b2be-3ab1a49af457",
            academicInfo: {
                title: "Academic Information",
                degrees: [
                    { name: "B.Tech, Food Technology", institution: "Ch. Devi Lal State Institute, Sirsa (Pursuing)" },
                    { name: "Diploma, Food Technology", institution: "Ch. Bansi Lal Govt. Polytechnic, Bhiwani" },
                    { name: "Diploma, Dairy Technology", institution: "IGNOU, New Delhi" }
                ]
            }
        },
        welcomeMessage: `<p class="text-lg"><span class="font-bold">Welcome to Dairy Hub!</span> This isn't just an app; it's your trusted companion in the complex world of dairy science and industry. Our mission is to deliver every essential piece of information related to the dairy sector to you in a <strong class="font-semibold">simple, accurate, and scientific</strong> manner, empowering students, professionals, and enthusiasts alike.</p>`,
        journey: {
            title: "My Journey: A Passion for Dairy Technology",
            story: `
                <p>My journey into the field of Food and Dairy Technology began with academic curiosity and soon blossomed into a passion. During my studies and internships, I identified a critical gap between industry professionals and newcomers: a lack of practical, accessible, and scientifically-validated information, especially in the digital realm. The challenges, from understanding complex processes to staying updated with the latest industry standards, were evident.</p>
                <p>It was with the resolve to bridge this gap that I laid the foundation of Dairy Hub. My goal was to create a comprehensive digital ecosystem that goes beyond just providing information. I wanted to build a tool that simplifies complex calculations, provides the latest industry knowledge, and offers expert support at users' fingertips. This app is the culmination of that vision—a one-stop solution for anyone looking to learn, grow, and excel in the dairy sector.</p>
            `
        },
        whatsInside: {
            title: "What's Inside Dairy Hub?",
            features: [
                { icon: Factory, title: "Dairy Industry Insights", description: "Get the latest trends, stats, and updates from the Indian dairy sector." },
                { icon: ShieldCheck, title: "FSSAI Standards", description: "Understand the official FSSAI standards for milk and milk products." },
                { icon: Atom, title: "Milk Chemistry", description: "Deep dive into milk composition, proteins, and properties." },
                { icon: Bug, title: "Microbiology", description: "Learn about microorganisms in dairy, their testing, and safety protocols." },
                { icon: Droplet, title: "Milk Handling", description: "Know the best practices for milk reception, storage, and preservation." },
                { icon: Settings, title: "Dairy Processing", description: "Explore core dairy processing techniques, from pasteurization to homogenization." },
                { icon: ReagentIcon, title: "Fermented Products", description: "Understand the science and processing of yogurt, buttermilk, and more." },
                { icon: Wind, title: "Evaporation & Drying", description: "Learn the processes for making condensed and powdered milk." },
                { icon: PaneerIcon, title: "Paneer Processing", description: "Master the industrial process and calculate paneer yield." },
                { icon: IceCreamIcon, title: "Ice-Cream Production", description: "Understand the science and engineering behind making ice cream." },
                { icon: TestTube, title: "Compositional Analysis", description: "Learn chemical testing methods for various dairy products." },
                { icon: CheckSquare, title: "Quality Concepts", description: "Explore quality management systems like HACCP, TQM, and ISO." },
                { icon: ClipboardCheck, title: "Audits & Verification", description: "Understand food safety audits and verification processes in dairy plants." },
                { icon: Beaker, title: "Solutions Preparation", description: "Accurately calculate and prepare various lab reagents and solutions." },
                { icon: Scale, title: "Standardization Calculators", description: "Advanced calculations for Pearson square, blending, and milk standardization." },
                { icon: FileSpreadsheet, title: "Various Calculations", description: "Perform yield, acidity, cost-benefit, and other miscellaneous calculations." },
                { icon: Recycle, title: "CIP & ETP", description: "Learn about Cleaning-In-Place (CIP) procedures and Effluent Treatment Plants (ETP)." },
                { icon: Microscope, title: "Lab Equipments", description: "Know the principles and workings of equipment used in a dairy laboratory." },
                { icon: Search, title: "Adulteration Testing", description: "Learn how to detect and prevent common adulterants in milk." },
                { icon: ClipboardCheck, title: "Calibration", description: "Calibrate lab glassware and reagents for accurate results." },
                { icon: PackageCheck, title: "Packaging Testing", description: "Understand the quality tests for packaging materials for dairy products." },
                { icon: Droplet, title: "Water Testing", description: "Learn the importance and methods of water testing for WTP/ETP analysis." },
                { icon: GraduationCap, title: "Expert Support", description: "Get advice and answers from AI and real experts." },
                { icon: Bot, title: "Sarathi AI Chatbot", description: "Get instant answers and assistance from your personal AI assistant. Ask any dairy or career-related question!" }
            ]
        },
        mission: {
            title: "Our Mission",
            text: `To deliver <strong>accurate, scientific, and practical dairy knowledge</strong> to every user – without any confusion.`
        },
        vision: {
            title: "Our Vision",
            text: "To provide digital support to India's dairy sector, enabling new learners and professionals to make smart decisions."
        },
        callToAction: {
            title: "Let's Grow Together",
            text: "Your feedback is invaluable to us. If you like the app, please share it, review it, and help us become better."
        },
        footer: "Made with ❤️ by Saurabh Rajput | Dairy Hub App"
    }
};
