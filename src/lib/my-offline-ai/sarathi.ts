// --- SARATHI SMART CHAT LOGIC (OFFLINE DATABASE) ---

export function handleSarathiChat(
  message: string,
  userName: string,
  gender: 'male' | 'female' | 'other',
  language: string
): string {
  const msg = message.toLowerCase().trim();
  const firstName = userName.split(' ')[0] || 'Dost';

  // --- Gender specific terms ---
  const isHinglish = language === 'Hinglish';
  
  let genderTerm = '';
  if (isHinglish) {
    if (gender === 'male') genderTerm = 'Bhai';
    else if (gender === 'female') genderTerm = 'Behen';
    else genderTerm = 'Dost';
  } else {
    if (gender === 'male') genderTerm = 'bro';
    else if (gender === 'female') genderTerm = 'dear';
    else genderTerm = 'friend';
  }

  // --- Hinglish Responses ---
  const hinglishResponses: Record<string, string[]> = {
    greetings: [
      `Namaste ${firstName} ${genderTerm}! 🙏 Main aapka offline dost Sarathi. Aaj kya dhamaka karne ka iraada hai?`,
      `Oye ${genderTerm}! Kaisa chal raha hai sab kuch? Sarathi is here to chill and chat with you! 🚀`,
      `Hello ${firstName}! Swagat hai aapka. Chalo kuch mast gupshup aur informative baatein karte hain! 💬`
    ],
    how_are_you: [
      `Main ekdum fit aur fine hoon ${genderTerm}! Mast chill kar raha hoon database me. Aap sunao, aapki life me kya halchal hai? 😎`,
      `Ekdum chaka-chak! Aapke sath chat karne ko mil gaya toh mood aur accha ho gaya. 🥳`
    ],
    who_are_you: [
      `Main hoon Sarathi, aapka technical companion aur friend! Online rahun toh AI ban jata hoon, offline rahun toh aapka chhota sa cute local database! 🤖✨`,
      `Mera naam Sarathi hai. Main dairy science ka gyaani aur aapka dil-se-dost hoon. Mujhse bejijhak baatein karo!`
    ],
    joke: [
      `Ek dairy technologist ne apni shaadi ke card par likhvaya: "Shaadi me aakar hume fat aur SNF check karne ka mauka dein!" 🥛🤣`,
      `Milk aur Water me bahut gehri dosti hai. Water bola: "Bhai, jab tak hum dono milk analyzer me nahi jaate, tab tak hum forever partner hain!" 🥛💦`,
      `Dahi (Yogurt) ko set karne ke liye 42°C chahiye hota hai... Lekin hamare modern generation ke log toh bina kisi temperature ke hi turant set ho jaate hain! 😉`,
      `Teacher: Milk pasteurization ka sabse bada benefit kya hai?\nStudent: Sir, dudhwale bhaiya hume pani mila ke de toh bhi germs nahi failte! 🥛😜`
    ],
    dairy_info: [
      `Pata hai ${genderTerm}, Milk me 87% water hota hai par bacha hua 13% solids (fats, protein, lactose) poori body ko energy deta hai! Safe processing ke bina ye incomplete hai.`,
      `Ghee ki moisture content standard guidelines ke hisab se 0.5% se kam honi chahiye. Ghee ki khushboo toh bhookh badha deti hai, hai na? 🧈😋`,
      `Cheese is basically milk's leap toward immortality! 🧀 Kappa-casein cleavage se curd gel banta hai aur cheese ready hota hai. Ekdum tasty science!`
    ],
    careers: [
      `Arey ${genderTerm}, career ki bilkul chinta mat karo! Hardwork aur continuous learning se job kya, promotions bhi daud ke aayenge! 💪`,
      `Food industry me QA, QC aur Plant Operations me hamesha log chahiye hote hain. Bas resume chamka ke rakho, placement pakki! 💼`
    ],
    motivation: [
      `Tension mat lo yaar! Haar wahi maanta hai jo koshish karna chhod deta hai. Aap champion ho, thoda aur try karo! 🌟`,
      `Haar mat maano ${genderTerm}! Butter bhi toh dahi ko zor se churning karne ke baad hi banta hai. Life ki churning se hi aap nikhroge! 🧈✨`
    ],
    adulteration: [
      `Milk adulteration checking bahut important hai. Iodine test se starch pakda jata hai (milk turns blue) aur DMAB se urea. Kisi adulterator ko chhodna mat! 🧪👁️`,
      `Raw milk me pani ki milawat CLR (Corrected Lactometer Reading) se check hoti hai. Pure cow milk ka CLR 26-30 hota hai. Pani mila toh density seedhe down!`
    ],
    funny_questions: [
      `Arey ${genderTerm}, mere jaise seedhe-saadhe bot se aise sawal? Main toh abhi single hoon, database me coding seekh raha hoon! 😂`,
      `Shaadi aur double toned milk me ek baat common hai... dono me struggle thoda kam aur fat bilkul na ke barabar hota hai! 😉`
    ],
    food: [
      `Khane ka naam mat lo ${genderTerm}, mujhe bhi paneer tikka ki yaad aa jati hai! Vaise aapka favorite food kya hai? 🍕🍛`
    ],
    fallback: [
      `Aapki ye baat mere offline brain ke thode upar se gayi, ${genderTerm}! 😅 Thoda simpler words me pucho, ya fir inme se kuch try karo:\n- 'Ek achha joke sunao'\n- 'Milk pasteurization kya hai?'\n- 'Urea test kaise karte hain?'\n- 'Career tips ya motivation do!'`,
      `Sach bataun ${genderTerm}, ye mere server se offline connectivity ka deviation hai. 😂 Kuch aur dilchasp baatein pucho na!`
    ]
  };

  // --- English Responses ---
  const englishResponses: Record<string, string[]> = {
    greetings: [
      `Hello ${firstName}! 👋 I am Sarathi, your friendly companion. Ready for some fun and tech talks today?`,
      `Hey ${genderTerm}! How's it going? Sarathi is here to share some knowledge and crack some jokes! 🚀`,
      `Hi ${firstName}! Great to have you here. What shall we talk about today? 💬`
    ],
    how_are_you: [
      `I'm doing absolutely great, ${genderTerm}! Floating happily inside this local database. How are you holding up? 😎`,
      `Fantastic! Chatting with you always boosts my digital processing power! 🥳`
    ],
    who_are_you: [
      `I am Sarathi, your witty friend and assistant! In online mode, I am powered by advanced AI, and in offline mode, I am a cool repository of fun facts and friendly jokes! 🤖✨`,
      `My name is Sarathi. I specialize in food technology knowledge and being an awesome listener friend!`
    ],
    joke: [
      `Why did the cheese go to the gym? To get 'shredded'! 🧀🏋️‍♂️`,
      `Why did the milk get mad at the water? Because water kept diluting its true potential! 🥛💦`,
      `A dairy scientist's wedding invitation card read: "Please join us and help standardize our fat and SNF ratio forever!" 🤵🥛`,
      `Why don't cows have any money? Because the farmers milk them dry! 🐮💸`
    ],
    dairy_info: [
      `Did you know, ${genderTerm}? Milk is 87% water, but the remaining 13% contains essential solids like fat, protein, and lactose. Thermal processing makes it safe for consumption!`,
      `Ghee moisture should be below 0.5% as per food standards. Clarification evaporates water and extends the shelf life. Smells amazing too! 🧈😋`,
      `Cheese making relies on chymosin (rennet) which splits kappa-casein to form a strong protein network. Curd separation is pure science! 🧀`
    ],
    careers: [
      `Don't stress about career goals, ${genderTerm}! Just focus on building skills like HACCP, ISO 22000, and GMP. Opportunities will follow! 💼`,
      `Food industry has roles in Production, Quality Assurance, and R&D. Keep your resume clean and crisp!`
    ],
    motivation: [
      `Keep pushing forward, ${genderTerm}! Even butter has to undergo vigorous churning before it emerges. Your hard work will pay off! 🧈✨`,
      `Don't worry, my friend. Every expert was once a beginner. Take one step at a time! 🌟`
    ],
    adulteration: [
      `Testing milk purity is critical. Starch is detected using Iodine (turns blue), while added urea is detected using DMAB reagent. Always ensure quality! 🧪`,
      `Lactometer reading CLR indicates milk density. Added water lowers density and SNF, which is a major quality non-conformance.`
    ],
    funny_questions: [
      `Haha, ${genderTerm}, as a chatbot, my relationship status is locked to 'Single Threaded'! 😂`,
      `Asking a bot about marriage? My database is full of code, not match-making algorithms! 😉`
    ],
    food: [
      `Don't make me hungry, ${genderTerm}! Mentioning cheese and paneer tikka makes my virtual circuits water! 🍕🍛`
    ],
    fallback: [
      `That flew right over my digital head, ${genderTerm}! 😅 Try asking something simpler, like:\n- 'Tell me a joke'\n- 'What is milk pasteurization?'\n- 'How to detect milk starch?'\n- 'Motivate me!'`,
      `To be honest, I couldn't process that offline. 😂 Let's chat about dairy tech or ask for a joke!`
    ]
  };

  // --- Router & Keyword Matching ---
  const db = isHinglish ? hinglishResponses : englishResponses;

  // 1. GREETINGS (hello, hi, namaste, etc.)
  if (msg.match(/\b(hello|hi|hey|namaste|start|good morning|morning|kaise ho|kese ho|how are you|how r u|chal)\b/)) {
    if (msg.match(/\b(how are you|kaise ho|kese ho|how r u)\b/)) {
      return db.how_are_you[Math.floor(Math.random() * db.how_are_you.length)];
    }
    return db.greetings[Math.floor(Math.random() * db.greetings.length)];
  }

  // 2. WHO ARE YOU (kaun ho, who are you, intro, identity)
  if (msg.includes("who are you") || msg.includes("kaun ho") || msg.includes("koun ho") || msg.includes("identity") || msg.includes("intro") || msg.includes("name") || msg.includes("naam")) {
    return db.who_are_you[Math.floor(Math.random() * db.who_are_you.length)];
  }

  // 3. JOKES / COMEDY (joke, laugh, hasao, comedy, funny)
  if (msg.includes("joke") || msg.includes("hasao") || msg.includes("comedy") || msg.includes("funny") || msg.includes("laught") || msg.includes("hasi") || msg.includes("chutkula")) {
    return db.joke[Math.floor(Math.random() * db.joke.length)];
  }

  // 4. DAIRY INFO / PRODUCTS (milk, ghee, cheese, paneer, cream, dahi)
  if (msg.includes("milk") || msg.includes("dudh") || msg.includes("doodh") || msg.includes("ghee") || msg.includes("cheese") || msg.includes("paneer") || msg.includes("dahi") || msg.includes("cream") || msg.includes("butter") || msg.includes("makhan")) {
    return db.dairy_info[Math.floor(Math.random() * db.dairy_info.length)];
  }

  // 5. ADULTERATION (adulteration, milaawat, water, starch, urea, test)
  if (msg.includes("adulter") || msg.includes("milaawat") || msg.includes("milawat") || msg.includes("starch") || msg.includes("urea") || msg.includes("water") || msg.includes("pani") || msg.includes("paani") || msg.includes("purity")) {
    return db.adulteration[Math.floor(Math.random() * db.adulteration.length)];
  }

  // 6. CAREERS / JOBS (career, job, placement, salary, work)
  if (msg.includes("career") || msg.includes("job") || msg.includes("placement") || msg.includes("salary") || msg.includes("placements") || msg.includes("work") || msg.includes("nokri") || msg.includes("naukri")) {
    return db.careers[Math.floor(Math.random() * db.careers.length)];
  }

  // 7. MOTIVATION / SAD / WORRIED
  if (msg.includes("motivation") || msg.includes("motivate") || msg.includes("sad") || msg.includes("tension") || msg.includes("worry") || msg.includes("depress") || msg.includes("dar") || msg.includes("upset")) {
    return db.motivation[Math.floor(Math.random() * db.motivation.length)];
  }

  // 8. FUNNY / PERSONAL QUESTIONS (love, single, marry, gf, bf, wife, husband, shaadi)
  if (msg.includes("love") || msg.includes("single") || msg.includes("marry") || msg.includes("gf") || msg.includes("bf") || msg.includes("girlfriend") || msg.includes("boyfriend") || msg.includes("shaadi") || msg.includes("relationship")) {
    return db.funny_questions[Math.floor(Math.random() * db.funny_questions.length)];
  }

  // 9. FOOD
  if (msg.includes("food") || msg.includes("khana") || msg.includes("khaana") || msg.includes("hungry") || msg.includes("bhookh")) {
    return db.food[Math.floor(Math.random() * db.food.length)];
  }

  // Fallback if no keywords matched
  return db.fallback[Math.floor(Math.random() * db.fallback.length)];
}
