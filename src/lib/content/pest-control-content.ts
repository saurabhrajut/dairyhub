export const pestControlContent = {
    hi: {
        title: "Dairy Industry mein Pest Control: Ek Vaigyanik evam Niyamak Drishtikon",
        description: "FSSAI, CODEX Alimentarius, ISO 22000, BRCGS evam FSMA maano ke anuroop khadya suraksha, gunvatta ashwasan evam kanuni anupalan sunishchit karne ke liye vyapak vaigyanik margdarshika.",
        tabs: {
            intro: "Parichay evam Mahatva",
            biology: "Keet Jeev Vigyan evam Pehchan",
            ipm: "Ekikrit Keet Prabandhan (IPM)",
            zoning: "Zoning evam Risk Assessment",
            physical: "Bhautik evam Yantrik Niyantran",
            chemical: "Rasayanik Niyantran evam Keetnashi Prabandhan",
            spp: "Bhandarit Utpad Keet (SPP) Prabandhan",
            rodent: "Krantak Niyantran Karyakram",
            digital: "Digital Nigrani evam Data Vishleshan",
            compliance: "Niyamak Anupalan evam Audit Taiyari",
            training: "Prashikshan, Sanskriti evam Emergency Response",
            conclusion: "Nishkarsh"
        },
        sections: {
            introduction: {
                title: "Parichay: Dairy Processing mein Pest Control ka Vaigyanik Aadhar",
                content: `
                    <p>Dairy processing facilities sookshmjeev vigyan ki drishti se high-risk waale vatavaran hain. Yahan <strong>poshak tatvon ki prabhruta</strong> (kaccha doodh, doodh powder, vasa, protein), <strong>nami</strong> (safai prakriya, sanghanan), <strong>tapman niyantran</strong> (processing kshetro mein 15-25°C), aur <strong>aashray</strong> (upkaranon ke neeche dararein, ceiling voids, drainage system) keeton ke liye aadarsh paristhitik niche (Ecological Niche) ka nirman karte hain.</p>
                    
                    <h4 class="font-bold text-lg mt-4 text-blue-700">Rogjanak Sancharan ka Tantra (Mechanism of Pathogen Transmission)</h4>
                    <p>Keet <strong>yantrik vahanak (Mechanical Vectors)</strong> ke roop mein kary karte hain. Unke sharir ke baal (Setae), mukh bhag (Mouthparts), mal (Feces/Droppings), aur utsarjiya padarth (Regurgitate) <em>Salmonella enterica</em>, <em>Listeria monocytogenes</em>, <em>Escherichia coli O157:H7</em>, <em>Staphylococcus aureus</em>, <em>Cronobacter sakazakii</em> (pehle <em>Enterobacter sakazakii</em>) aur <em>Campylobacter jejuni</em> jaise rogjanakon ko seedhe utpad sampark sataho (Food Contact Surfaces - FCS) ya taiyaar utpad tak pahunchate hain. Makkhiyon mein <strong>ulti karne (Regurgitation)</strong> aur <strong>mal tyag (Defecation)</strong> ki ek saath kriya cross-contamination ko tezi se badhati hai.</p>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Niyamak Dhancha evam Poorvapreksha Karyakram (PRP)</h4>
                    <p>Pest control ek mahatvapurna <strong>Poorvapreksha Karyakram (Prerequisite Program - PRP)</strong> hai jo <strong>HACCP (Codex Alimentarius CXC 1-1969)</strong>, <strong>ISO 22000:2018 (Clause 8.2.2)</strong>, <strong>FSSAI Schedule 4 (Part II)</strong>, <strong>BRCGS Food Safety Issue 9 (Clause 4.14)</strong>, aur <strong>FSMA Preventive Controls for Human Food (21 CFR 117 Subpart C)</strong> ki neev banta hai. Ek majboot IPM karyakram ke bina, mahatvapurna niyantran bindu (CCPs) - jaise pasteurization ya dhatu pehchan - paryavaraniy rogjanak bhar ke karan viphal ho sakte hain. Anupalan na karne par <strong>Class I utpad punahprapti (Class I Recall)</strong>, niyamak pratibandh, aur brand mulya ki apurniya kshati hoti hai.</p>
                    
                    <h4 class="font-bold text-lg mt-4 text-blue-700">Aarthik Prabhav (Economic Impact)</h4>
                    <p>Seedhi kshati (khadya hani, packaging kshati) ke alawa, apratyaksh lagaton mein shamil hain: utpadan downtime, prayogshala janch lagat (Microbiological swabbing, ATP testing), kanuni dayitva, bima premium vriddhi, aur bazaar hissedari ki hani. FAO ke anuman ke anusar, vaishvik khadya supply chain mein keeton ke karan varshik hani 10-15% tak hoti hai.</p>
                `
            },
            biology: {
                title: "Mukhya Keet Profiles: Jeev Vigyan, Vyavahar evam Pehchan Kunji",
                content: `
                    <div class="space-y-6">
                        <section>
                            <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-1">1. Udne Wale Keet (Diptera: Muscidae, Calliphoridae, Drosophilidae, Psychodidae)</h4>
                            <div class="grid md:grid-cols-2 gap-4 mt-2">
                                <div>
                                    <h5 class="font-semibold text-gray-800">Gharelu Makkhi (<em>Musca domestica</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Jeev Vigyan:</strong> Poorn parivartan (Complete metamorphosis). Anda → Larva (Maggot, 3 instar) → Pupa → Vayask. Istham 30-35°C par jeevan chakra 7-10 din.</li>
                                        <li><strong>Rogjanak Bhar:</strong> Ek vayask 6 million tak bacteria bahari satah par aur 28 million aant mein le ja sakta hai.</li>
                                        <li><strong>Vyavahar:</strong> Din mein sakriya (Diurnal), phototactic (prakash ki ore). 5-8 km tak udaan bhar sakte hain. Bhojan se pehle taral banane ke liye ulti karte hain.</li>
                                        <li><strong>Pehchan:</strong> Grey thorax par 4 kaali dhariyan, chauthi pankh nass (Vein M) ka teevra kona.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-gray-800">Drain/Sewage Makkhi (<em>Psychodidae: Clogmia albipunctata</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Awas:</strong> Jaivik gaad (Biofilm/Sludge) mein prajanan: Floor drain, grease trap, upkaranon ke neeche ruka paani, Sewage Treatment Plant (STP).</li>
                                        <li><strong>Mahatva:</strong> Kharab swachhata aur drainage viphalta ka <strong>sanketak jeev (Indicator Organism)</strong>. Rogjanak sancharan kam lekin utpad mein bhautik sankramak (Physical Contaminant).</li>
                                        <li><strong>Niyantran:</strong> Rasayanik dhund (Fogging) aprabhavi. Yantrik safai (Drain brushing) + Enzymatic/Bio-foam cleaner hi ekmatra sthayi samadhan.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-gray-800">Fruit/Vinegar Fly (<em>Drosophila melanogaster / D. suzukii</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Aakarshan:</strong> Kirvanashil sharkara (Ethanol, Acetic acid). Dahi, paneer whey, falon ke ras, apashisht compactor.</li>
                                        <li><strong><em>D. suzukii</em> (SWD):</strong> Gambhir keet, taza fal/kacche maal mein ande dene ke liye dantedar ovipositor.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-gray-800">Blow Fly / Bottle Fly (<em>Calliphoridae: Lucilia, Chrysomya</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Chamkili dhaatuwali rang (Neon Green/Blue):</strong> Mare janvaron, kachre mein prajanan. Uchch rogjanak bhar. Suvidha ke andar upasthiti = sanrachanaatmak ullanghan (Structural breach) ya mrit krantak.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-1 mt-6">2. Rengne Wale Keet (Blattodea: Blattellidae, Blattidae)</h4>
                            <div class="grid md:grid-cols-2 gap-4 mt-2">
                                <div>
                                    <h5 class="font-semibold text-gray-800">German Cockroach (<em>Blattella germanica</em>) - Prathamik Keet</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Prajanan:</strong> Ootheca mein 30-40 ande. Maada jeevan mein 4-8 ootheca. Istham 30°C/uchch aadrahta par 50-60 din mein vayask. <strong>Ghaatanki vriddhi (Exponential growth)</strong> kshamata.</li>
                                        <li><strong>Thigmotaxis:</strong> Sharir ke dono taraf dabav mehsoos karne ki avashyakta → dararein, motor housing, conveyors ke neeche, vidyut panel.</li>
                                        <li><strong>Allergy Karak:</strong> Cuticle protein (Bla g 1, Bla g 2) shwasan allergy/asthma ka karan.</li>
                                        <li><strong>Pratirodh:</strong> Pyrethroids, Organophosphates, Carbamates, Fipronil, Indoxacarb ke prati vyapak pratirodh (Metabolic: Esterases, Cytochrome P450; Target-site: kdr mutation).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-gray-800">American Cockroach (<em>Periplaneta americana</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Aakar:</strong> Bada (35-40mm), udne mein saksham. Sewer/drainage system mein prajanan.</li>
                                        <li><strong>Pravesh:</strong> Floor drain, vent pipe, bahari pravesh dwar ke madhyam se suvidha mein pravesh.</li>
                                        <li><strong>Niyantran:</strong> Drain screening, bahari paridhi upchar, IGRs (Hydroprene, Pyriproxyfen).</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-1 mt-6">3. Krantak (Rodentia: Muridae) - Uchch Jokim Jaivik Khatra</h4>
                            <div class="grid md:grid-cols-2 gap-4 mt-2">
                                <div>
                                    <h5 class="font-semibold text-gray-800">Gharelu Chuha (<em>Mus musculus domesticus</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Vyavahar:</strong> Jigyasu (Neophilic), chote kshetra (3-10m trijya) mein gatividhi. Utkrisht parvatarohi, tairank, 6mm chhidra se pravesh.</li>
                                        <li><strong>Prajanan:</strong> 19-21 din garbhavastha, 5-8 pups/litter, varsh mein 6-10 litter. Yaunik paripakvta 6-8 saptah.</li>
                                        <li><strong>Bhojan:</strong> Sarvbhakshi, dainik 3-4 gram. Paani ki avashyakta nahi (chayapachay jal se purti).</li>
                                        <li><strong>Rog:</strong> <em>Salmonella</em>, <em>Leptospira</em>, <em>Lymphocytic choriomeningitis virus (LCMV)</em>, <em>Hantavirus</em>. Mutra mein Major Urinary Protein (MUP) allergen.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-gray-800">Norway/Bhoora Chuha (<em>Rattus norvegicus</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Vyavahar:</strong> Neophobic (Nayi vastu se dar), bill khodne wala (Burrower), bada kshetra (30-50m trijya). 12mm chhidra se pravesh.</li>
                                        <li><strong>Kshati:</strong> Taaron ko kutarna (aag ka khatra), sanrachanaatmak kshati, packaging vinash.</li>
                                        <li><strong>Sanket:</strong> Smudge marks (Sebaceous grease marks), 18-20mm capsule aakar ke mal, runways, bil ke muhane.</li>
                                    </ul>
                                </div>
                                <div class="md:col-span-2">
                                    <h5 class="font-semibold text-gray-800">Chhat/Kala Chuha (<em>Rattus rattus</em>)</h5>
                                    <p class="text-sm">Utkrisht parvatarohi, chhat/attic/upper beam mein ghosla. 12mm mal (nukeele sirene). Ushnakatibandhiya/tatiya kshetro mein prachalit.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-1 mt-6">4. Bhandarit Utpad Keet (SPP - Stored Product Pests) - Coleoptera evam Lepidoptera</h4>
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm border-collapse border border-gray-300">
                                    <thead class="bg-blue-100">
                                        <tr><th class="border border-gray-300 p-2">Keet</th><th class="border border-gray-300 p-2">Vaigyanik Naam</th><th class="border border-gray-300 p-2">Lakshya Commodity</th><th class="border border-gray-300 p-2">Mahatvapurna Pehchan/Vyavahar</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white"><td class="border border-gray-300 p-2 font-medium">Confused Flour Beetle</td><td class="border border-gray-300 p-2"><em>Tribolium confusum</em></td><td class="border border-gray-300 p-2">Aata, suji, doodh powder, cocoa</td><td class="border border-gray-300 p-2">Antenna club dhire-dhire bada hota hai. Udd nahi sakta. Cannibalistic larva. Quinone srav → utpad mein durgandh/rang parivartan.</td></tr>
                                        <tr class="bg-gray-50"><td class="border border-gray-300 p-2 font-medium">Red Flour Beetle</td><td class="border border-gray-300 p-2"><em>Tribolium castaneum</em></td><td class="border border-gray-300 p-2">Samaan</td><td class="border border-gray-300 p-2">Antenna club achanak 3-khandit. Udd sakta hai (uchch phailav). Phosphine pratirodh (rph1, rph2 gene) vyapak.</td></tr>
                                        <tr class="bg-white"><td class="border border-gray-300 p-2 font-medium">Indian Meal Moth</td><td class="border border-gray-300 p-2"><em>Plodia interpunctella</em></td><td class="border border-gray-300 p-2">Nuts, dry fruits, doodh powder, anaj</td><td class="border border-gray-300 p-2">Pankh dirangi (aadha peela/doori tambe-laal). Larva resham jaala (Webbing) bnate hain → guchche bnna, machinery jam. Diapause kshamata.</td></tr>
                                        <tr class="bg-gray-50"><td class="border border-gray-300 p-2 font-medium">Warehouse Beetle / Khapra Beetle</td><td class="border border-gray-300 p-2"><em>Trogoderma variabile</em></td><td class="border border-gray-300 p-2">Doodh powder, protein powder, masale</td><td class="border border-gray-300 p-2">Larva par setae → upbhokta mein GI jalan/allergy. Diapause mein varshon jeevit reh sakta hai. Khadya suraksha khatra.</td></tr>
                                        <tr class="bg-white"><td class="border border-gray-300 p-2 font-medium">Cigarette/Tobacco Beetle</td><td class="border border-gray-300 p-2"><em>Lasioderma serricorne</em></td><td class="border border-gray-300 p-2">Masale, sukhhe ande, doodh powder, dawaiyen</td><td class="border border-gray-300 p-2">Humpbacked, serrate antenna. Symbiotic yeast sancharit karta hai. Pheromone (Serricornin) atyadhik aakarshak.</td></tr>
                                        <tr class="bg-gray-50"><td class="border border-gray-300 p-2 font-medium">Grain Weevil</td><td class="border border-gray-300 p-2"><em>Sitophilus granarius</em></td><td class="border border-gray-300 p-2">Saabut anaj (gehun, jau, makka)</td><td class="border border-gray-300 p-2">Lambi soond (Rostrum). Anda dane ke andar. Larva/pupa antaraniya → pehchan kathin. Udd nahi sakta.</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-1 mt-6">5. Anya Prasangik Keet evam Pakshi</h4>
                            <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                                <li><strong>Cheentiyan (Formicidae):</strong> <em>Monomorium pharaonis</em> (Pharaoh Cheenti) - Uchch jokim, ekadhik rani (Polygyny), budding dwara vistar. Protein/meetha pasand. <em>Linepithema humile</em> (Argentina Cheenti) - Supercolony.</li>
                                <li><strong>Makadiyan (Araneae):</strong> Arachnida. Jaale utpad mein bhautik khatra. Keet gatividhi ka pratyaksh sanketak.</li>
                                <li><strong>Kabootar (<em>Columba livia</em>):</strong> Guano se <em>Histoplasma capsulatum</em>, <em>Cryptococcus neoformans</em>, <em>Chlamydia psittaci</em> sancharan. Bird netting, spikes, aur laser deterrents dwara niyantran.</li>
                            </ul>
                        </section>
                    </div>
                `
            },
            ipm: {
                title: "Ekikrit Keet Prabandhan (IPM): Vaigyanik Dhancha evam Karyanvayan",
                content: `
                    <p>IPM ek <strong>paristhiti-aadharit raniti (Ecosystem-based strategy)</strong> hai jo keet jeev vigyan, paryavaraniy jaankari aur upalabdh takneek ke sanyojan ka upyog karke keet kshati ko aarthik kshati star (Economic Injury Level - EIL) se neeche rakhne par kendrit hai, jisse manav swasthya aur paryavaran ke liye khatra niyuntam ho. Yeh <strong>niwaran-pratham (Prevention-first)</strong> drishtikon hai.</p>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">IPM ke 7 Stambh (The 7 Pillars of IPM)</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-3">
                        <li>
                            <strong>Nirikshan evam Jokim Mulyankan (Inspection & Risk Assessment):</strong>
                            <p class="text-sm mt-1">Sahayak paristhitiyon ka vyavastheet sarvekshan: Nami manchitran, sanrachanaatmak kamjoriyan, apashisht prabandhan antar, karmachari vyavahar. Thermal imaging (chhat risav/krantak pravesh), Boroscope (diwar void/drain), UV torch (krantak mutra/larva), Drone (chhat/uchch sanrachana) ka upyog.</p>
                        </li>
                        <li>
                            <strong>Satak Pehchan (Accurate Identification):</strong>
                            <p class="text-sm mt-1">Praja-stariye pehchan (Species-level ID) anivarya. DNA Barcoding (COI gene) cryptic prajaon ke liye.</p>
                        </li>
                        <li>
                            <strong>Niwaran: Swachhata evam Bahishkaran (Prevention: Sanitation & Exclusion):</strong>
                            <p class="text-sm mt-1">Master Sanitation Schedule (MSS) jo ATP bioluminescence aur microbiological swabbing se juda ho. Air Curtains (>2000 fpm), Self-closing doors, Door sweeps (<4mm gap), Stainless Steel Mesh #20.</p>
                        </li>
                        <li>
                            <strong>Nigrani evam Seema Star (Monitoring & Action Thresholds):</strong>
                            <p class="text-sm mt-1">Action Thresholds: ILT mein >5 makkhi/saptah, Glue board par 1 cockroach, 1 krantak drishti/mal par immediate action. Key Performance Indicators (KPIs) track karna.</p>
                        </li>
                        <li>
                            <strong>Bhautik/Yantrik Niyantran (Physical/Mechanical Control):</strong>
                            <p class="text-sm mt-1">ILTs (Glue board), Snap Trap, Multi-Catch Mouse Trap, Heat Treatment (50-60°C), CO2/N2 Fumigation, Cryonite (CO2 Snow).</p>
                        </li>
                        <li>
                            <strong>Jaivik Niyantran (Biological Control):</strong>
                            <p class="text-sm mt-1">Silo/Godown mein <em>Trichogramma</em> spp., <em>Habrobracon hebetor</em>. Bio-pesticides: <em>Bacillus thuringiensis</em> (Bt), <em>Beauveria bassiana</em>.</p>
                        </li>
                        <li>
                            <strong>Rasayanik Niyantran (Chemical Control - Last Resort):</strong>
                            <p class="text-sm mt-1">WHO Class U/III chemicals, non-volatile, MRL guidelines, IRAC Mode of Action rotation.</p>
                        </li>
                    </ol>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Mahatvapurna Avdharnaen</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Aarthik Kshati Star (EIL):</strong> Sabse kam keet jansankhya ghanata jo aarthik kshati ka karan bane ga (Niyantran Lagat = Kshati Mulya).</li>
                        <li><strong>Aarthik Seema (ET / Action Threshold):</strong> Woh ghanata jis par niyantran karvai shuru ki jani chahiye taaki EIL tak pahunchne se roka ja sake. ET < EIL.</li>
                        <li><strong>Zero Tolerance:</strong> Khadya suraksha mein <em>Salmonella</em> vahanak (Krantak, Cockroach, Makkhi) aur taiyaar utpad mein SPP ke liye ET = 0 (Pata chalne par taatkal karvai).</li>
                    </ul>
                `
            },
            zoning: {
                title: "Zoning, Jokim Vargikaran evam Yatayat Prabandhan",
                content: `
                    <p>Suvidha ka jokim-aadharit vibhajan (Risk-based Zoning) sansadhan aavntan aur niyantran kathorta ko anukulit karta hai. <strong>BRCGS Issue 9 Clause 4.11</strong> aur <strong>ISO 22000 PRPs</strong> ke anuroop.</p>

                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-sm border-collapse border border-gray-300">
                            <thead class="bg-blue-100"><tr><th class="border border-gray-300 p-2">Kshetra Prakar</th><th class="border border-gray-300 p-2">Udaaharan</th><th class="border border-gray-300 p-2">Jokim Star</th><th class="border border-gray-300 p-2">Niyantran Kathorta</th><th class="border border-gray-300 p-2">Nigrani Aavritti</th></tr></thead>
                            <tbody>
                                <tr class="bg-red-50"><td class="border border-gray-300 p-2 font-bold text-red-800">Uchch Jokim / High Care</td><td class="border border-gray-300 p-2">Aseptik Bharai, Pasteurization ke baad, Khula Utpad, Cold Store</td><td class="border border-gray-300 p-2">Gambhir (Critical)</td><td class="border border-gray-300 p-2">Shunya Sahanshilta. Koi Chara Station andar nahi. Keval ILT (Glue Board). Sakaratmak Vayu Dabav.</td><td class="border border-gray-300 p-2">Dainik / Saptahik</td></tr>
                                <tr class="bg-yellow-50"><td class="border border-gray-300 p-2 font-bold text-yellow-800">Madhyam Jokim (Medium Risk)</td><td class="border border-gray-300 p-2">Kaccha Doodh Prapti, Processing (Pre-pasteurization), Packing Material Store</td><td class="border border-gray-300 p-2">Uchch (High)</td><td class="border border-gray-300 p-2">ILT, Glue Board, Pheromone Trap (SPP). Koi Vishakta Chara nahi. Sanrachanaatmak Akhandta.</td><td class="border border-gray-300 p-2">Saptahik (PCO)</td></tr>
                                <tr class="bg-green-50"><td class="border border-gray-300 p-2 font-bold text-green-800">Kam Jokim / Shushk Bhandaran</td><td class="border border-gray-300 p-2">Doodh Powder Silo, Cheeni Bag, Khali Crate Store, Godown</td><td class="border border-gray-300 p-2">Madhyam (Medium)</td><td class="border border-gray-300 p-2">Bahari Chara Station (Paridhi), Antrik Non-toxic Monitors, SPP Pheromone Grid, Heat Treatment Kshamata.</td><td class="border border-gray-300 p-2">Pakshik/Masik</td></tr>
                                <tr class="bg-gray-100"><td class="border border-gray-300 p-2 font-bold">Bahari / Paridhi (Perimeter)</td><td class="border border-gray-300 p-2">Bhawan Paridhi, Kachra Kshetra, STP/ETP, Truck Bay</td><td class="border border-gray-300 p-2">Uchch (Pravesh Bindu)</td><td class="border border-gray-300 p-2">Krantak Chara Station (TRBS) har 15-23m. Makkhi Chara Station. 2-3 Feet Gravel Buffer strip.</td><td class="border border-gray-300 p-2">Saptahik (PCO)</td></tr>
                                <tr class="bg-blue-50"><td class="border border-gray-300 p-2 font-bold text-blue-800">Utilities / Sensitive Area</td><td class="border border-gray-300 p-2">Boiler Room, Compressor Room, Electrical Panel, Server Room</td><td class="border border-gray-300 p-2">Vishisht (Harborage)</td><td class="border border-gray-300 p-2">Cockroach/Krantak Kendra. Glue Board, Snap Trap, IGRs (Gel/Dust). Liquid spray banned (Vidyut risk).</td><td class="border border-gray-300 p-2">Masik/Taimahi</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Yatayat Patterns evam Swachhata Badhayen</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Ek-Dishiye Pravah (Uni-directional Flow):</strong> Kaccha → Prasanskrut → Taiyaar. Cross-Traffic Pratibandhit.</li>
                        <li><strong>Swachhata Station:</strong> Boot Wash, Hand Wash/Sanitize, Apron Parivartan, Hairnet/Beard Cover.</li>
                        <li><strong>Samagri Hastantaran:</strong> Pass-Through Window / Airlock / UV Tunnel. Lakdi ke Pallet High Care mein Pratibandhit (Keval Plastic/Dhatu).</li>
                    </ul>
                `
            },
            physical: {
                title: "Bhautik, Yantrik evam Paryavaraniy Niyantran Praudyogikiyaan",
                content: `
                    <h4 class="font-bold text-lg text-blue-700">1. Insect Light Traps (ILTs) - Glue Board Only</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Spectrum:</strong> UV-A (315-400 nm), Peak ~365 nm. Black Light Blue (BLB) tubes food zones ke liye mandatory.</li>
                        <li><strong>Glue Board Banam Zapper:</strong> Food processing areas mein <strong>Glue Board ILTs</strong> hi anumit hain. Zapper style strictly banned hai kyunki grid se takrakar keet ke tukde 2m tak phailte hain (Microbiological contamination hazard).</li>
                        <li><strong>Placement Science:</strong> Entry doors ke perpendicular (intercept), 1.5-2m height par, direct sun light/wind velocity se door. FCS ke upar install na karein.</li>
                        <li><strong>Maintenance:</strong> Glue board replacement weekly/fortnightly. UV Tubes replace annually (UV output 1 yr mein 50% girta hai).</li>
                    </ul>

                    <h4 class="font-bold text-lg text-blue-700 mt-4">2. Vayu Parda (Air Curtains)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Specifications:</strong> Nozzle velocity ≥ 2000 fpm (10 m/s) floor level par. Doorway ki poori width cover honi chahiye. Magnetic door limit switches ke saath interlocked.</li>
                    </ul>

                    <h4 class="font-bold text-lg text-blue-700 mt-4">3. Tapiy Upchar (Heat Treatment) & Cryonite (CO2 Snow)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Heat Treatment:</strong> Core temp 50-60°C for 24-48 hours. Protein denaturation, enzyme inactivation, dehydration. All life stages (egg, larva, pupa, adult) eliminated without chemical residue.</li>
                        <li><strong>Cryonite:</strong> -78.5°C CO2 snow sublimation physics. Ideal for electrical panels, motor housings, and dry machinery cracks. Instant thermal shock, zero moisture/residue.</li>
                        <li><strong>Controlled Atmosphere (CA):</strong> Oxygen < 1% using Nitrogen or CO2 displacement for powder silos and dry warehouses.</li>
                    </ul>
                `
            },
            chemical: {
                title: "Rasayanik Niyantran: Keetnashi Vigyan, Pratirodh Prabandhan evam Suraksha",
                content: `
                    <h4 class="font-bold text-lg text-blue-700">IRAC Mode of Action (MoA) Rotation</h4>
                    <p>Resistance management ke liye IRAC groups ka rotation strictly required hai (Group 1A/1B Carbamates/OPs, Group 3A Pyrethroids, Group 4A Neonicotinoids, Group 7C/15 IGRs, Group 22A Indoxacarb).</p>

                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-sm border-collapse border border-gray-300">
                            <thead class="bg-blue-100"><tr><th class="border border-gray-300 p-2">IRAC Samuh</th><th class="border border-gray-300 p-2">MoA Vivaran</th><th class="border border-gray-300 p-2">Saman Sakriya Ghatak</th><th class="border border-gray-300 p-2">Lakshya Keet</th></tr></thead>
                            <tbody>
                                <tr class="bg-white"><td class="border border-gray-300 p-2">1A / 1B</td><td class="border border-gray-300 p-2">Acetylcholinesterase Inhibitors</td><td class="border border-gray-300 p-2">Bendiocarb, Propoxur, Malathion</td><td class="border border-gray-300 p-2">Cockroach, SPP</td></tr>
                                <tr class="bg-gray-50"><td class="border border-gray-300 p-2">3A</td><td class="border border-gray-300 p-2">Sodium Channel Modulator</td><td class="border border-gray-300 p-2">Deltamethrin, Cypermethrin, Permethrin</td><td class="border border-gray-300 p-2">Flies, Cockroaches</td></tr>
                                <tr class="bg-white"><td class="border border-gray-300 p-2">4A</td><td class="border border-gray-300 p-2">nAChR Agonist</td><td class="border border-gray-300 p-2">Imidacloprid, Thiamethoxam</td><td class="border border-gray-300 p-2">Fly baits, Cockroach gel</td></tr>
                                <tr class="bg-gray-50"><td class="border border-gray-300 p-2">7C / 15</td><td class="border border-gray-300 p-2">Insect Growth Regulators (IGRs)</td><td class="border border-gray-300 p-2">Hydroprene, Pyriproxyfen, Novaluron</td><td class="border border-gray-300 p-2">Cockroach nymphs, Fly larvae</td></tr>
                                <tr class="bg-white"><td class="border border-gray-300 p-2">22A</td><td class="border border-gray-300 p-2">Voltage-gated Sodium Channel Blocker</td><td class="border border-gray-300 p-2">Indoxacarb</td><td class="border border-gray-300 p-2">Cockroaches, Ants</td></tr>
                                <tr class="bg-gray-50"><td class="border border-gray-300 p-2">24A</td><td class="border border-gray-300 p-2">Mitochondrial Complex IV Inhibitor</td><td class="border border-gray-300 p-2">Aluminium Phosphide, Magnesium Phosphide</td><td class="border border-gray-300 p-2">SPP (Silos/Godowns)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Formulations & Risk Protocols</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                        <li><strong>Gel Baits (0.05% - 2% AI):</strong> Cockroaches aur Ants ke liye targeted crack/crevice application. Food Contact Surfaces par broad spray strictly prohibited.</li>
                        <li><strong>Microencapsulated (CS/ME):</strong> Controlled release, 60-90 days residual efficacy along wall-floor plinths outside processing zones.</li>
                        <li><strong>Fumigation Safety:</strong> Certified PCO mandatory, Gas line detection (<0.1 ppm Phosphine clearance threshold), complete sealing, ventilation & safety signages.</li>
                    </ul>
                `
            },
            spp: {
                title: "Bhandarit Utpad Keet (SPP) Prabandhan: Visheshikrit Ranitiyan",
                content: `
                    <p>Stored Product Pests (<em>Tribolium confusum</em>, <em>Tribolium castaneum</em>, <em>Plodia interpunctella</em>, <em>Trogoderma variabile</em>, <em>Sitophilus granarius</em>) milk powder, infant nutrition, whey powder aur dry ingredients me primary threat hain.</p>
                    
                    <h4 class="font-bold text-lg mt-4 text-blue-700">1. Aagaman Samagri Nirikshan Protocol (Incoming Goods Protocol)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Sampling Method:</strong> ISO 2859 sampling. Probe triers (bag sampling) & test sieves (US Mesh #10, #20, #40, #60, #80) for frass, larvae, exuviae detection.</li>
                        <li><strong>Quarantine Zone:</strong> Infested shipment detected -> Immediate isolation in dedicated Quarantine Hold. COA verification & root-cause report from supplier.</li>
                    </ul>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">2. Silo & Warehouse Pheromone Grids</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li>Sex & Aggregation Pheromone Traps (Serricornin, Tribolure, Dominicalure) grid layout inside warehouses. Weekly catch logging for early infestation detection.</li>
                    </ul>
                `
            },
            rodent: {
                title: "Krantak Niyantran Karyakram (Rodent Control Program)",
                content: `
                    <h4 class="font-bold text-lg text-blue-700">3-Zone Rodent Defense System</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-3">
                        <li>
                            <strong>Zone 1 (Outer Perimeter Fence Line):</strong>
                            <p class="text-sm mt-1">Tamper-Resistant Bait Stations (TRBS) anchored & key-locked every 15-30 meters. 2nd generation anticoagulant rodenticide baits (Bromadiolone 0.005%, Difenacoum 0.005%).</p>
                        </li>
                        <li>
                            <strong>Zone 2 (Building Exterior Wall Perimeter):</strong>
                            <p class="text-sm mt-1">TRBS locked every 10-15 meters along the foundation wall. 3-foot gravel buffer strip around foundation.</p>
                        </li>
                        <li>
                            <strong>Zone 3 (Interior Production, Processing & Packaging):</strong>
                            <p class="text-sm mt-1"><strong>STRICTLY NO POISON BAITS PERMITTED</strong>. Only non-toxic mechanical snap traps and multi-catch glue boxes (Tin Cat / Ketchmaster) placed every 6-12 meters along walls.</p>
                        </li>
                    </ol>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Rodent Evidence Audit</h4>
                    <p class="text-sm">Regular checks for smudge marks (oily fur rubbings on wall bases), gnaw marks on cables/packaging, and fecal pellet sizing (House mouse: ~6mm, Roof rat: ~12mm pointed, Norway rat: 18-20mm blunt capsule).</p>
                `
            },
            digital: {
                title: "Digital Nigrani, Smart Traps evam Data Vishleshan",
                content: `
                    <p>Modern IPM uses IoT-enabled smart traps (Optical/IR sensors for rodent traps, High-res cameras in ILTs) connected to cloud dashboards for real-time alerts, trend analysis, and predictive pest management.</p>
                    
                    <h4 class="font-bold text-lg mt-4 text-blue-700">Features of Digital IPM Systems</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                        <li><strong>Real-time Sensor Alerts:</strong> Instant SMS/Email notifications when a snap trap triggers or an ILT count spikes.</li>
                        <li><strong>Heatmap & Trend Analytics:</strong> Automated identification of activity hotspots across facility floor plans.</li>
                        <li><strong>Predictive Maintenance:</strong> Catch-rate algorithms predicting pest influx based on seasonal temperature and humidity changes.</li>
                    </ul>
                `
            },
            compliance: {
                title: "Niyamak Anupalan, Audit Taiyari evam Dastavejikaran",
                content: `
                    <p>Complete documentation checklist for FSSAI, BRCGS Issue 9, ISO 22000, and GFSI audits:</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                        <li><strong>PCO Licensing:</strong> Valid CIB&RC pest control operator license and technician training certificates.</li>
                        <li><strong>Safety Data Sheets (SDS):</strong> 16-section GHS format SDS for all registered chemicals stored on site.</li>
                        <li><strong>Facility Layout Maps:</strong> Numerically indexed maps showing exact coordinates of all ILTs, TRBS, mechanical traps, and pheromone stations.</li>
                        <li><strong>Trend Analysis Logs:</strong> Weekly trap count logs, pest sighting register, and Corrective Action Preventive Action (CAPA) records.</li>
                    </ul>
                `
            },
            training: {
                title: "Prashikshan, Sanskriti evam Emergency Response Protocols",
                content: `
                    <h4 class="font-bold text-lg text-blue-700">Food Safety Culture & Operator Training</h4>
                    <p class="text-sm">"See a pest, report a pest" policy. Mandatory induction and refresher training for all shopfloor operators on hygiene barriers, door discipline, and waste management.</p>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Emergency Infestation SOP</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-1 text-sm">
                        <li>Immediate containment & quarantine of affected processing zone / batch.</li>
                        <li>Root Cause Analysis (RCA) to identify entry breach or sanitation failure.</li>
                        <li>Targeted non-contaminating treatment (Heat / Cryonite / Vacuum / Clean-up).</li>
                        <li>ATP bioluminescence & microbiological clearance testing prior to production restart.</li>
                    </ol>
                `
            },
            conclusion: {
                title: "Nishkarsh evam Bhavishya ki Disha",
                content: `
                    <p>Dairy plants mein ek majboot, vaigyanik Integrated Pest Management (IPM) program khadya suraksha, brand reputation aur regulatory compliance ki guarantees sunishchit karta hai.</p>
                `
            }
        }
    },
    en: {
        title: "Pest Control in the Dairy Industry: A Scientific & Regulatory Perspective",
        description: "A comprehensive scientific guide for food safety, quality assurance, and regulatory compliance aligned with FSSAI, CODEX Alimentarius, ISO 22000, BRCGS, and FSMA standards.",
        tabs: {
            intro: "Introduction & Significance",
            biology: "Pest Biology & Identification",
            ipm: "Integrated Pest Management (IPM)",
            zoning: "Zoning & Risk Assessment",
            physical: "Physical & Mechanical Control",
            chemical: "Chemical Control & Pesticide Management",
            spp: "Stored Product Pests (SPP) Management",
            rodent: "Rodent Control Program",
            digital: "Digital Monitoring & Data Analytics",
            compliance: "Regulatory Compliance & Audit Preparedness",
            training: "Training, Culture & Emergency Response",
            conclusion: "Conclusion"
        },
        sections: {
            introduction: {
                title: "Introduction: Scientific Foundation of Pest Control in Dairy Processing",
                content: `
                    <p>Dairy processing facilities represent high-risk microbiological environments. The <strong>abundance of nutrients</strong> (raw milk, milk powder, milk fat, proteins), <strong>moisture</strong> (CIP cleaning, condensation), <strong>controlled temperature</strong> (15-25°C in processing zones), and <strong>harborage</strong> (equipment bases, ceiling voids, drainage networks) create an ideal ecological niche for pests.</p>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Mechanism of Pathogen Transmission</h4>
                    <p>Pests serve as <strong>mechanical vectors</strong>. Their body setae, mouthparts, fecal droppings, and regurgitated fluids transmit pathogens like <em>Salmonella enterica</em>, <em>Listeria monocytogenes</em>, <em>Escherichia coli O157:H7</em>, <em>Staphylococcus aureus</em>, <em>Cronobacter sakazakii</em>, and <em>Campylobacter jejuni</em> directly to Food Contact Surfaces (FCS) or finished dairy products.</p>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Regulatory Framework & Prerequisite Programs (PRP)</h4>
                    <p>Pest control is a critical <strong>Prerequisite Program (PRP)</strong> forming the cornerstone of <strong>HACCP (Codex Alimentarius CXC 1-1969)</strong>, <strong>ISO 22000:2018 (Clause 8.2.2)</strong>, <strong>FSSAI Schedule 4</strong>, <strong>BRCGS Food Safety Issue 9 (Clause 4.14)</strong>, and <strong>FSMA (21 CFR 117 Subpart C)</strong>. Without robust IPM, Critical Control Points (CCPs) such as pasteurization or metal detection can be rendered ineffective due to environmental recontamination.</p>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Economic & Brand Impact</h4>
                    <p>Beyond direct material loss (spoiled product, damaged packaging), indirect costs include production downtime, laboratory testing fees (Microbiological swabbing & ATP testing), legal liability, increased insurance premiums, and catastrophic loss of market share. FAO estimates annual global food supply chain losses due to pests at 10-15%.</p>
                `
            },
            biology: {
                title: "Key Pest Profiles: Biology, Behavior & Identification Key",
                content: `
                    <div class="space-y-6">
                        <section>
                            <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-1">1. Flying Insects (Diptera: Muscidae, Calliphoridae, Drosophilidae, Psychodidae)</h4>
                            <div class="grid md:grid-cols-2 gap-4 mt-2">
                                <div>
                                    <h5 class="font-semibold text-gray-800">House Fly (<em>Musca domestica</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Biology:</strong> Complete metamorphosis (Egg → Larva [3 instars] → Pupa → Adult). 7-10 day cycle at 30-35°C optimum.</li>
                                        <li><strong>Pathogen Load:</strong> Single adult carries up to 6 million bacteria externally and 28 million internally in gut flora.</li>
                                        <li><strong>Behavior:</strong> Diurnal, phototactic. Range 5-8 km. Regurgitates digestive enzymes onto solids to liquefy before ingestion.</li>
                                        <li><strong>ID:</strong> Grey thorax with 4 longitudinal dark stripes; sharp bend in 4th wing vein (Vein M).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-gray-800">Drain / Sewage Fly (<em>Psychodidae: Clogmia albipunctata</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Habitat:</strong> Breeds in organic sludge/biofilms in floor drains, grease traps, stagnant water under machinery, and ETP/STP units.</li>
                                        <li><strong>Significance:</strong> Primary <strong>indicator organism</strong> of defective drainage or breakdown in sanitation SOPs. Physical contaminant in final product.</li>
                                        <li><strong>Control:</strong> Fogging ineffective. Mechanical drain brushing combined with enzymatic bio-foam digesters is required.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-gray-800">Fruit / Vinegar Fly (<em>Drosophila melanogaster / D. suzukii</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Attractant:</strong> Fermenting sugars (ethanol, acetic acid). Attracted to dahi/curd whey, fruit syrups, waste compactors.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-gray-800">Blow Fly / Bottle Fly (<em>Calliphoridae: Lucilia, Chrysomya</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Metallic Color:</strong> Neon metallic green/blue. Breeds in decaying organic matter. High pathogen carrier. Presence indoors indicates structural wall breach or dead rodent inside facility.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-1 mt-6">2. Crawling Insects (Blattodea: Blattellidae, Blattidae)</h4>
                            <div class="grid md:grid-cols-2 gap-4 mt-2">
                                <div>
                                    <h5 class="font-semibold text-gray-800">German Cockroach (<em>Blattella germanica</em>) - Primary Pest</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Reproduction:</strong> Ootheca contains 30-40 eggs. Female produces 4-8 oothecae in lifetime. 50-60 day development at 30°C. High exponential population growth rate.</li>
                                        <li><strong>Thigmotaxis:</strong> Seeks narrow crevices with dual-sided physical contact → motor housings, electrical DB panels, conveyor undersides.</li>
                                        <li><strong>Allergens:</strong> Cuticular proteins (Bla g 1, Bla g 2) cause severe occupational asthma and respiratory allergies.</li>
                                        <li><strong>Resistance:</strong> Widespread metabolic (Esterases, Cytochrome P450) and target-site (kdr gene mutation) resistance to pyrethroids and organophosphates.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-gray-800">American Cockroach (<em>Periplaneta americana</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Size:</strong> Large (35-40mm), capable of flight. Breeds in sewer systems and underground utility ducts. Enters via floor drains.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-1 mt-6">3. Rodents (Rodentia: Muridae) - High Risk Biological Hazard</h4>
                            <div class="grid md:grid-cols-2 gap-4 mt-2">
                                <div>
                                    <h5 class="font-semibold text-gray-800">House Mouse (<em>Mus musculus domesticus</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Behavior:</strong> Neophilic (curious), operates in small home range (3-10m radius). Expert climber, enters through 6mm gaps.</li>
                                        <li><strong>Reproduction:</strong> 19-21 day gestation, 5-8 pups/litter, 6-10 litters/year. Sexual maturity at 6-8 weeks.</li>
                                        <li><strong>Pathogens:</strong> <em>Salmonella</em>, <em>Leptospira</em>, <em>LCMV</em>, <em>Hantavirus</em>. Secretes Major Urinary Protein (MUP) allergens in urine.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="font-semibold text-gray-800">Norway / Brown Rat (<em>Rattus norvegicus</em>)</h5>
                                    <ul class="list-disc list-outside pl-5 text-sm space-y-1">
                                        <li><strong>Behavior:</strong> Neophobic (fear of new objects), burrower, home range 30-50m radius. Enters through 12mm gaps.</li>
                                        <li><strong>Damage:</strong> Wire gnawing (fire hazard), structural undermining, packaging destruction. Oily grease rub marks along runways. Fecal pellets 18-20mm blunt capsules.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-1 mt-6">4. Stored Product Pests (SPP) - Coleoptera & Lepidoptera</h4>
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm border-collapse border border-gray-300">
                                    <thead class="bg-blue-100">
                                        <tr><th class="border border-gray-300 p-2">Pest</th><th class="border border-gray-300 p-2">Scientific Name</th><th class="border border-gray-300 p-2">Target Commodity</th><th class="border border-gray-300 p-2">Key Identification & Behavior</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white"><td class="border border-gray-300 p-2 font-medium">Confused Flour Beetle</td><td class="border border-gray-300 p-2"><em>Tribolium confusum</em></td><td class="border border-gray-300 p-2">Flour, SMP, WMP, cocoa powder</td><td class="border border-gray-300 p-2">Gradual antenna club. Incapable of flight. Quinone secretions cause off-odors and pinkish discoloration in milk powder.</td></tr>
                                        <tr class="bg-gray-50"><td class="border border-gray-300 p-2 font-medium">Red Flour Beetle</td><td class="border border-gray-300 p-2"><em>Tribolium castaneum</em></td><td class="border border-gray-300 p-2">Same as above</td><td class="border border-gray-300 p-2">Abrupt 3-segmented antenna club. Strong flyer (rapid spread). High frequency of phosphine resistance genes (rph1, rph2).</td></tr>
                                        <tr class="bg-white"><td class="border border-gray-300 p-2 font-medium">Indian Meal Moth</td><td class="border border-gray-300 p-2"><em>Plodia interpunctella</em></td><td class="border border-gray-300 p-2">Nuts, dry fruits, milk powder, grains</td><td class="border border-gray-300 p-2">Bicolored wings (basal half cream, distal coppery reddish). Larvae spin dense silk webbing, clumping powder and jamming equipment.</td></tr>
                                        <tr class="bg-gray-50"><td class="border border-gray-300 p-2 font-medium">Warehouse / Khapra Beetle</td><td class="border border-gray-300 p-2"><em>Trogoderma variabile / T. granarium</em></td><td class="border border-gray-300 p-2">Milk powder, protein isolates, spices</td><td class="border border-gray-300 p-2">Larval hastisetae cause gastrointestinal irritation/allergies in consumers. Enters diapause for years without food. Quarantine pest.</td></tr>
                                        <tr class="bg-white"><td class="border border-gray-300 p-2 font-medium">Cigarette Beetle</td><td class="border border-gray-300 p-2"><em>Lasioderma serricorne</em></td><td class="border border-gray-300 p-2">Spices, dried egg, milk powder, pharmaceuticals</td><td class="border border-gray-300 p-2">Humpbacked thorax, serrate antennae. Transmits symbiotic yeasts. Highly responsive to Serricornin sex pheromone.</td></tr>
                                        <tr class="bg-gray-50"><td class="border border-gray-300 p-2 font-medium">Grain Weevil</td><td class="border border-gray-300 p-2"><em>Sitophilus granarius</em></td><td class="border border-gray-300 p-2">Whole grains (wheat, barley, corn)</td><td class="border border-gray-300 p-2">Elongated rostrum (snout). Internal feeder (egg laid inside grain). Flightless (vestigial hindwings).</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                `
            },
            ipm: {
                title: "Integrated Pest Management (IPM): Scientific Framework & Pillars",
                content: `
                    <p>IPM is an ecosystem-based strategy focusing on long-term prevention of pests through a combination of techniques such as sanitation, structural exclusion, biological controls, and targeted chemical applications.</p>
                    
                    <h4 class="font-bold text-lg mt-4 text-blue-700">The 7 Pillars of IPM</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-3">
                        <li>
                            <strong>Inspection & Risk Assessment:</strong>
                            <p class="text-sm mt-1">Systematic survey of conducive conditions using thermal imaging cameras (roof leaks & rodent burrows), boroscopes (wall voids/drains), UV inspection lights (rodent urine fluorescence), and drones.</p>
                        </li>
                        <li>
                            <strong>Accurate Species-Level Identification:</strong>
                            <p class="text-sm mt-1">Taxonomic species-level ID mandatory. COI gene DNA barcoding used for cryptic insect species.</p>
                        </li>
                        <li>
                            <strong>Sanitation & Exclusion (Prevention):</strong>
                            <p class="text-sm mt-1">Master Sanitation Schedule (MSS) verified by ATP bioluminescence swabs. High-velocity air curtains (>2000 fpm), self-closing doors, door sweeps (<4mm gap), SS Mesh #20 screens.</p>
                        </li>
                        <li>
                            <strong>Monitoring & Action Thresholds:</strong>
                            <p class="text-sm mt-1">Action Thresholds: >5 flies/week on ILTs, 1 cockroach on glue board, or 1 rodent sighting triggers immediate root cause investigation. Zero tolerance for pathogens.</p>
                        </li>
                        <li>
                            <strong>Physical & Mechanical Control:</strong>
                            <p class="text-sm mt-1">Glue board ILTs, snap traps, multi-catch mechanical traps, thermal heat treatment (50-60°C), Cryonite CO2 snow (-78.5°C).</p>
                        </li>
                        <li>
                            <strong>Biological Control:</strong>
                            <p class="text-sm mt-1">Parasitoid wasps (<em>Trichogramma</em> spp., <em>Habrobracon hebetor</em>) in dry storage godowns. Biopesticides like <em>Bacillus thuringiensis</em> (Bt) & <em>Beauveria bassiana</em>.</p>
                        </li>
                        <li>
                            <strong>Targeted Chemical Control (Last Resort):</strong>
                            <p class="text-sm mt-1">WHO Class U/III low-toxicity compounds, non-volatile gel baits, IGRs, strict IRAC Mode of Action rotation.</p>
                        </li>
                    </ol>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Key Scientific Concepts</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Economic Injury Level (EIL):</strong> Lowest pest population density causing economic damage equal to control costs.</li>
                        <li><strong>Action Threshold (ET):</strong> Population density at which control action must be initiated to prevent reaching EIL (ET < EIL).</li>
                        <li><strong>Zero Tolerance:</strong> ET = 0 for pathogen vectors (rodents, cockroaches, flies) and stored product pests in finished dairy products.</li>
                    </ul>
                `
            },
            zoning: {
                title: "Risk-Based Zoning & Traffic Management",
                content: `
                    <p>Risk-based facility zoning optimizes resource allocation and control rigor per <strong>BRCGS Issue 9 Clause 4.11</strong> and <strong>ISO 22000 PRPs</strong>.</p>

                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-sm border-collapse border border-gray-300">
                            <thead class="bg-blue-100"><tr><th class="border border-gray-300 p-2">Zone Type</th><th class="border border-gray-300 p-2">Examples</th><th class="border border-gray-300 p-2">Risk Level</th><th class="border border-gray-300 p-2">Control Rigor</th><th class="border border-gray-300 p-2">Audit Frequency</th></tr></thead>
                            <tbody>
                                <tr class="bg-red-50"><td class="border border-gray-300 p-2 font-bold text-red-800">High Risk / High Care</td><td class="border border-gray-300 p-2">Aseptic Filling, Post-pasteurization, Open Product, Cold Stores</td><td class="border border-gray-300 p-2">Critical</td><td class="border border-gray-300 p-2">Zero Tolerance. Glue-board ILT only. No toxic bait stations inside. Positive air pressure.</td><td class="border border-gray-300 p-2">Daily / Weekly</td></tr>
                                <tr class="bg-yellow-50"><td class="border border-gray-300 p-2 font-bold text-yellow-800">Medium Risk</td><td class="border border-gray-300 p-2">Raw Milk Intake, Pre-pasteurization Processing, Packaging Material Store</td><td class="border border-gray-300 p-2">High</td><td class="border border-gray-300 p-2">Glue-board ILTs, Pheromone traps. Non-toxic interior monitors. Structural sealing.</td><td class="border border-gray-300 p-2">Weekly (PCO)</td></tr>
                                <tr class="bg-green-50"><td class="border border-gray-300 p-2 font-bold text-green-800">Low Risk / Dry Storage</td><td class="border border-gray-300 p-2">Milk Powder Silos, Sugar Bag Godown, Crate Store</td><td class="border border-gray-300 p-2">Medium</td><td class="border border-gray-300 p-2">Perimeter baiting outside, non-toxic interior traps, SPP pheromone grids, Heat treatment capability.</td><td class="border border-gray-300 p-2">Fortnightly / Monthly</td></tr>
                                <tr class="bg-gray-100"><td class="border border-gray-300 p-2 font-bold">Exterior / Perimeter</td><td class="border border-gray-300 p-2">Fence line, Waste storage, ETP/STP, Truck staging bays</td><td class="border border-gray-300 p-2">High Entry Risk</td><td class="border border-gray-300 p-2">Tamper-resistant bait stations (TRBS) every 15-25m, fly bait stations, 3-ft gravel vegetation buffer strip.</td><td class="border border-gray-300 p-2">Weekly (PCO)</td></tr>
                                <tr class="bg-blue-50"><td class="border border-gray-300 p-2 font-bold text-blue-800">Utilities / Sensitive Area</td><td class="border border-gray-300 p-2">Boiler Room, Compressor Room, Electrical DB Panels, Server Room</td><td class="border border-gray-300 p-2">Harborage Focus</td><td class="border border-gray-300 p-2">Cockroach & rodent focus. Glue boards, snap traps, IGR gel/dusts. Liquid sprays banned near electronics.</td><td class="border border-gray-300 p-2">Monthly / Quarterly</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Traffic Patterns & Hygiene Barriers</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Uni-directional Flow:</strong> Raw → Processing → Finished Product. Cross-traffic strictly prohibited.</li>
                        <li><strong>Hygiene Barriers:</strong> Boot wash, automated hand sanitizers, apron change, hairnets, beard covers at transition points.</li>
                        <li><strong>Material Transfer:</strong> Pass-through airlocks, UV tunnels, fogging chambers. Wooden pallets prohibited in High Care zones (plastic or metal pallets only).</li>
                    </ul>
                `
            },
            physical: {
                title: "Physical, Mechanical & Environmental Controls",
                content: `
                    <h4 class="font-bold text-lg text-blue-700">1. Insect Light Traps (ILTs) - Glue Board Only</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Spectrum:</strong> UV-A (315-400 nm), Peak emission at ~365 nm (fly visual acuity peak). Black Light Blue (BLB) tubes mandatory in food areas.</li>
                        <li><strong>Glue Board vs Zapper:</strong> <strong>Glue board ILTs</strong> only allowed in food processing areas. High-voltage grid zappers are strictly prohibited due to insect fragmentation scattering bacteria up to 2m (microbiological cross-contamination hazard).</li>
                        <li><strong>Placement Science:</strong> Perpendicular to entry doors (intercepting flight path), 1.5-2m height (fly flight zone), away from competing natural light and draft sources. Never directly over open Food Contact Surfaces (FCS).</li>
                        <li><strong>Maintenance:</strong> Glue board replacement weekly or fortnightly. Annual UV-A tube replacement (UV output degrades by ~50% in 12 months, invisible to human eye).</li>
                    </ul>

                    <h4 class="font-bold text-lg text-blue-700 mt-4">2. Air Curtains & Barrier Engineering</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Specifications:</strong> Nozzle velocity ≥ 2000 fpm (10 m/s) measured at floor level across entire door width. Interlocked with magnetic automatic door switches. Provides >80% rejection against flying insects.</li>
                    </ul>

                    <h4 class="font-bold text-lg text-blue-700 mt-4">3. Thermal Treatment & Cryonite (CO2 Snow)</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Structural Heat Treatment:</strong> Core temperature 50-60°C held for 24-48 hours. Causes rapid protein denaturation, enzyme inactivation, and fatal dehydration. Eliminates all life stages (eggs, larvae, pupae, adults) without chemical residues or MRL concerns.</li>
                        <li><strong>Cryonite (CO2 Snow):</strong> Rapid freezing at -78.5°C sublimation point. Ideal for electrical DB panels, motor housings, and tight dry machinery cracks. Causes fatal thermal shock without moisture or chemical residue.</li>
                        <li><strong>Controlled Atmosphere (CA):</strong> Oxygen depletion (<1% O2) using Nitrogen or CO2 flushing for powder silos and dry commodity stores.</li>
                    </ul>
                `
            },
            chemical: {
                title: "Chemical Controls & IRAC Resistance Management",
                content: `
                    <h4 class="font-bold text-lg text-blue-700">IRAC Mode of Action (MoA) Rotation</h4>
                    <p>To prevent metabolic and target-site pesticide resistance, chemical applications must strictly rotate across distinct IRAC Mode of Action classes.</p>

                    <div class="overflow-x-auto mt-2">
                        <table class="w-full text-sm border-collapse border border-gray-300">
                            <thead class="bg-blue-100"><tr><th class="border border-gray-300 p-2">IRAC Group</th><th class="border border-gray-300 p-2">Mode of Action Description</th><th class="border border-gray-300 p-2">Common Active Ingredients</th><th class="border border-gray-300 p-2">Target Pests</th></tr></thead>
                            <tbody>
                                <tr class="bg-white"><td class="border border-gray-300 p-2 font-bold">1A / 1B</td><td class="border border-gray-300 p-2">Acetylcholinesterase Inhibitors</td><td class="border border-gray-300 p-2">Bendiocarb, Propoxur, Malathion</td><td class="border border-gray-300 p-2">Cockroaches, SPP</td></tr>
                                <tr class="bg-gray-50"><td class="border border-gray-300 p-2 font-bold">3A</td><td class="border border-gray-300 p-2">Sodium Channel Modulators</td><td class="border border-gray-300 p-2">Deltamethrin, Cypermethrin, Permethrin</td><td class="border border-gray-300 p-2">Flies, Cockroaches (Exterior)</td></tr>
                                <tr class="bg-white"><td class="border border-gray-300 p-2 font-bold">4A</td><td class="border border-gray-300 p-2">nAChR Agonists</td><td class="border border-gray-300 p-2">Imidacloprid, Thiamethoxam, Dinotefuran</td><td class="border border-gray-300 p-2">Fly baits, Cockroach gel baits</td></tr>
                                <tr class="bg-gray-50"><td class="border border-gray-300 p-2 font-bold">7C / 15</td><td class="border border-gray-300 p-2">Insect Growth Regulators (IGRs)</td><td class="border border-gray-300 p-2">Hydroprene, Pyriproxyfen, Novaluron, Lufenuron</td><td class="border border-gray-300 p-2">Cockroach nymphs, Fly larvae, SPP</td></tr>
                                <tr class="bg-white"><td class="border border-gray-300 p-2 font-bold">22A</td><td class="border border-gray-300 p-2">Voltage-dependent Sodium Channel Blockers</td><td class="border border-gray-300 p-2">Indoxacarb</td><td class="border border-gray-300 p-2">German Cockroach gel baits</td></tr>
                                <tr class="bg-gray-50"><td class="border border-gray-300 p-2 font-bold">24A</td><td class="border border-gray-300 p-2">Mitochondrial Complex IV Inhibitors</td><td class="border border-gray-300 p-2">Aluminium Phosphide, Magnesium Phosphide</td><td class="border border-gray-300 p-2">SPP in Silos & Godowns (Fumigant)</td></tr>
                                <tr class="bg-white"><td class="border border-gray-300 p-2 font-bold">UN</td><td class="border border-gray-300 p-2">Inorganic Desiccants & Physical Disruptors</td><td class="border border-gray-300 p-2">Silica Aerogel, Diatomaceous Earth (DE), Boric Acid</td><td class="border border-gray-300 p-2">Wall void crawling pests (No resistance)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Formulation & Safety Protocols</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                        <li><strong>Gel Baits (0.05% - 2% AI):</strong> Gold standard for cockroaches and ants. Applied as pea-sized drops in cracks and crevices away from food contact surfaces. Utilizes secondary transfer dynamics (trophallaxis & necrophagy).</li>
                        <li><strong>Microencapsulated Sprays (CS/ME):</strong> Controlled release along exterior wall-floor plinths. 60-90 days residual protection. Broad space spraying inside processing areas is strictly prohibited.</li>
                        <li><strong>Fumigation Rigor:</strong> Certified fumigators only. Sealed enclosure gas monitoring (<0.1 ppm Phosphine clearance threshold), complete aeration, and mandatory safety clearance certification.</li>
                    </ul>
                `
            },
            spp: {
                title: "Stored Product Pests (SPP) Control",
                content: `
                    <p>Stored Product Pests (<em>Tribolium confusum</em>, <em>Tribolium castaneum</em>, <em>Plodia interpunctella</em>, <em>Trogoderma variabile</em>, <em>Sitophilus granarius</em>) represent a primary contamination threat for skimmed milk powder (SMP), whole milk powder (WMP), infant nutrition formulations, whey powders, and dry ingredients.</p>
                    
                    <h4 class="font-bold text-lg mt-4 text-blue-700">1. Incoming Raw Material Inspection Protocol</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li><strong>Sampling Rigor:</strong> ISO 2859 lot sampling. Sampling with probe triers and test sieves (US Standard Mesh #10, #20, #40, #60, #80) to detect live adults, larvae, cast skins (exuviae), silk webbing, or frass.</li>
                        <li><strong>Quarantine Protocol:</strong> Any infested delivery triggers immediate quarantine isolation, rejection, supplier Root Cause Analysis (RCA), and Phytosanitary / Fumigation Certificate audit.</li>
                    </ul>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">2. Silo & Godown Pheromone Monitoring Grid</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2">
                        <li>Sex & Aggregation Pheromone Traps (Serricornin, Tribolure, Dominicalure) arranged in a 10-15m grid. Weekly species counting for trend detection prior to visual infestation.</li>
                    </ul>
                `
            },
            rodent: {
                title: "Comprehensive Rodent Defense Program",
                content: `
                    <h4 class="font-bold text-lg text-blue-700">3-Zone Rodent Defense System</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-3">
                        <li>
                            <strong>Zone 1 (Outer Perimeter Fence Line):</strong>
                            <p class="text-sm mt-1">Tamper-Resistant Bait Stations (TRBS) anchored & key-locked every 15-30 meters along boundary fence. Contains 2nd generation anticoagulant block baits (Bromadiolone 0.005% or Difenacoum 0.005%).</p>
                        </li>
                        <li>
                            <strong>Zone 2 (Building Exterior Wall Perimeter):</strong>
                            <p class="text-sm mt-1">TRBS locked every 10-15 meters along building foundation walls. Surrounded by a 3-foot vegetation-free gravel buffer strip.</p>
                        </li>
                        <li>
                            <strong>Zone 3 (Interior Production, Processing & Packaging):</strong>
                            <p class="text-sm mt-1"><strong>STRICTLY NO POISON BAITS PERMITTED</strong>. Only non-toxic mechanical snap traps and multi-catch glue boxes (Ketchmaster / Tin Cat) placed every 6-12 meters along perimeter interior walls.</p>
                        </li>
                    </ol>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Rodent Evidence Audit</h4>
                    <p class="text-sm">Regular inspection for smudge marks (oily sebum rubbings on wall bases), gnaw marks on electrical wiring/packaging, and fecal pellet identification (House mouse: ~6mm, Roof rat: ~12mm pointed, Norway rat: 18-20mm blunt capsule).</p>
                `
            },
            digital: {
                title: "Digital Monitoring & Smart Pest Management",
                content: `
                    <p>Modern IPM utilizes IoT-enabled smart sensors (Optical & Infrared sensors in rodent traps, AI-camera high-resolution ILTs) connected to cloud dashboards for real-time alerts, automated trend logging, and predictive pest management.</p>
                    
                    <h4 class="font-bold text-lg mt-4 text-blue-700">Features of Smart IPM Systems</h4>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                        <li><strong>Real-time Sensor Alerts:</strong> Instant SMS & Email notifications the moment a mechanical snap trap triggers or an ILT catch count exceeds threshold.</li>
                        <li><strong>Heatmap & Trend Analytics:</strong> Automated identification of activity hotspots overlaid on facility CAD floor plans.</li>
                        <li><strong>Predictive Analytics:</strong> Algorithms forecasting pest population spikes based on local weather, humidity, and production seasonal peaks.</li>
                    </ul>
                `
            },
            compliance: {
                title: "Regulatory Compliance & Audit Preparedness",
                content: `
                    <p>Complete documentation checklist for FSSAI, BRCGS Issue 9, ISO 22000, and GFSI audits:</p>
                    <ul class="list-disc list-outside pl-5 space-y-2 text-sm">
                        <li><strong>PCO Licensing:</strong> Valid CIB&RC pest control operator license and technician training qualifications.</li>
                        <li><strong>Safety Data Sheets (SDS):</strong> Complete 16-section GHS Safety Data Sheets for all registered chemicals stored on site.</li>
                        <li><strong>Facility Layout Maps:</strong> Numerically indexed maps depicting exact locations of all ILTs, TRBS, mechanical traps, and pheromone stations.</li>
                        <li><strong>Trend Analysis Logs:</strong> Weekly trap catch count charts, pest sighting register, and Corrective Action Preventive Action (CAPA) logs.</li>
                    </ul>
                `
            },
            training: {
                title: "Food Safety Culture & Emergency Response SOPs",
                content: `
                    <h4 class="font-bold text-lg text-blue-700">Food Safety Culture & Operator Training</h4>
                    <p class="text-sm">Establish a "See a pest, report a pest" reporting policy. Conduct mandatory induction and annual refresher training for all shopfloor operators on hygiene barriers, door discipline, and waste management.</p>

                    <h4 class="font-bold text-lg mt-4 text-blue-700">Emergency Infestation SOP</h4>
                    <ol class="list-decimal list-outside pl-5 space-y-1 text-sm">
                        <li>Immediate containment & quarantine of affected processing zone / product batch.</li>
                        <li>Root Cause Analysis (RCA) to pinpoint entry breach or sanitation failure.</li>
                        <li>Targeted non-contaminating treatment (Heat / Cryonite / Vacuum / Deep Sanitation).</li>
                        <li>ATP bioluminescence & microbiological clearance testing prior to production restart.</li>
                    </ol>
                `
            },
            conclusion: {
                title: "Conclusion & Strategic Summary",
                content: `
                    <p>A science-based, proactive Integrated Pest Management (IPM) program guarantees uncompromised food safety, brand reputation, and complete regulatory compliance across global dairy operations.</p>
                `
            }
        }
    }
};
