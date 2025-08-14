
import { Bot, Lightbulb, Factory, FlaskConical, Beaker, Scale, Calculator, Settings, TestTube, ClipboardCheck, CheckSquare, Droplet, PackageCheck, Recycle, Bug, ShieldCheck, FileSpreadsheet, Search, Wind, Users, DollarSign, Microscope } from "lucide-react";
import { PaneerIcon, IceCreamIcon, ReagentIcon } from "@/components/icons";

export const aboutUsContent = {
    hi: {
        title: "Dairy Hub के पीछे",
        description: "आपके भरोसेमंद डिजिटल डेयरी पार्टनर की कहानी",
        developer: {
            name: "सौरभ राजपूत",
            academicInfo: {
                title: "शैक्षणिक जानकारी",
                degrees: [
                    { name: "B.Tech, Food Technology", institution: "Ch. Devi Lal State Institute, Sirsa (Pursuing)" },
                    { name: "Diploma, Dairy Technology", institution: "IGNOU" },
                    { name: "Diploma, Food Technology", institution: "Govt. Polytechnic, Bhiwani" }
                ]
            }
        },
        welcomeMessage: `<p class="text-lg"><span class="font-bold">Dairy Hub में आपका स्वागत है!</span> हमारा मकसद डेयरी उद्योग से जुड़ी हर ज़रूरी जानकारी को आप तक <strong class="font-semibold">सरल, सटीक और वैज्ञानिक</strong> तरीके से पहुंचाना है। यह प्लेटफॉर्म उन सभी के लिए है जो इस क्षेत्र में सीखना और आगे बढ़ना चाहते हैं।</p>`,
        journey: {
            title: "मेरा सफ़र: डेयरी टेक्नोलॉजी के प्रति मेरा जुनून",
            story: `
                <p>मेरा नाम <strong>सौरभ राजपूत</strong> है, और Dairy Hub मेरा एक सपना है जिसे मैंने आप सबके लिए हकीकत बनाया है।</p>
                <p>फूड और डेयरी टेक्नोलॉजी के क्षेत्र में मेरी रुचि हमेशा से रही है। अपनी पढ़ाई और इंटर्नशिप के दौरान, मैंने महसूस किया कि इस उद्योग में व्यावहारिक और आसानी से समझ में आने वाली वैज्ञानिक जानकारी की कमी है, खासकर डिजिटल प्लेटफॉर्म पर। इसी कमी को पूरा करने के लिए मैंने Dairy Hub की नींव रखी।</p>
                <p>मेरा लक्ष्य एक ऐसा डिजिटल इकोसिस्टम बनाना है जहाँ छात्र, पेशेवर, और डेयरी के प्रति उत्साही लोग आसानी से डेयरी से जुड़ी हर तकनीकी जानकारी प्राप्त कर सकें और अपने काम में बेहतर निर्णय ले सकें।</p>
            `
        },
        whatsInside: {
            title: "Dairy Hub में क्या है?",
            features: [
                { icon: Factory, title: "Dairy Industry Insights", description: "भारतीय डेयरी क्षेत्र से नवीनतम रुझान, आँकड़े और अपडेट प्राप्त करें।" },
                { icon: ShieldCheck, title: "FSSAI Standards", description: "दूध और दूध उत्पादों के लिए आधिकारिक FSSAI मानकों को समझें।" },
                { icon: FlaskConical, title: "Milk Chemistry", description: "दूध की संरचना, प्रोटीन और गुणों में गहराई से उतरें।" },
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
                { icon: Bot, title: "Sarathi AI Chatbot", description: "अपने व्यक्तिगत AI सहायक से तुरंत जवाब और सहायता प्राप्त करें। डेयरी या करियर से संबंधित कोई भी प्रश्न पूछें!" },
                { icon: Lightbulb, title: "'Did You Know?' Toggle", description: "डेयरी विज्ञान और खाद्य उद्योग के बारे में रोज़ नए और रोचक तथ्य जानें।" }
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
            academicInfo: {
                title: "Academic Information",
                degrees: [
                    { name: "B.Tech, Food Technology", institution: "Ch. Devi Lal State Institute, Sirsa (Pursuing)" },
                    { name: "Diploma, Dairy Technology", institution: "IGNOU" },
                    { name: "Diploma, Food Technology", institution: "Govt. Polytechnic, Bhiwani" }
                ]
            }
        },
        welcomeMessage: `<p class="text-lg"><span class="font-bold">Welcome to Dairy Hub!</span> Our purpose is to deliver every essential piece of information related to the dairy industry to you in a <strong class="font-semibold">simple, accurate, and scientific</strong> manner. This platform is for everyone who wants to learn and grow in this sector.</p>`,
        journey: {
            title: "My Journey: A Passion for Dairy Technology",
            story: `
                <p>My name is <strong>Saurabh Rajput</strong>, and Dairy Hub is a dream that I have turned into reality for all of you.</p>
                <p>My interest has always been in the field of Food and Dairy Technology. During my studies and internships, I realized there is a lack of practical and easily understandable scientific knowledge in this industry, especially on digital platforms. To fill this gap, I laid the foundation of Dairy Hub.</p>
                <p>My goal is to create a digital ecosystem where students, professionals, and dairy enthusiasts can easily access every technical detail related to dairy and make better decisions in their work.</p>
            `
        },
        whatsInside: {
            title: "What's Inside Dairy Hub?",
            features: [
                { icon: Factory, title: "Dairy Industry Insights", description: "Get the latest trends, stats, and updates from the Indian dairy sector." },
                { icon: ShieldCheck, title: "FSSAI Standards", description: "Understand the official FSSAI standards for milk and milk products." },
                { icon: FlaskConical, title: "Milk Chemistry", description: "Deep dive into milk composition, proteins, and properties." },
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
                { icon: Bot, title: "Sarathi AI Chatbot", description: "Get instant answers and assistance from your personal AI assistant. Ask any dairy or career-related question!" },
                { icon: Lightbulb, title: "'Did You Know?' Toggle", description: "Learn new and interesting facts about dairy science and the food industry daily." }
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
