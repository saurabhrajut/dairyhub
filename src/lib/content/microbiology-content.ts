
export const microbiologyContent = {
  hi: {
    title: "Milk Microbiology & Testing",
    description: "Dairy products mein paaye jaane wale mukhya sookshmajeevon (microorganisms) aur unke testing ke baare mein jaankari.",
    sections: [
       {
        id: "intro",
        title: "Introduction to Milk Microbiology",
        content: `
        <p>Microorganisms sookshmadarshi (microscopic), zyadatar ek-koshika jeev hain jo uchit vikas ki sthitiyon mein tezi se prajanan karne mein saksham hain. Unmein se kuch sahayak hote hain aur upyogi karyon ki seva karte hain jaise ki rasayanik parivartan utpann karna jo kiण्वित (fermented) dairy products jaise cheese aur yogurt ke utpadan mein vanchhaneey hain. Anya doodh aur uske utpadon ko kharab kar sakte hain aur unhein akhadya bana sakte hain, is prakar dairy udyog ko bhari nuksan pahunchate hain. Pathogens kahe jaane wale sookshmajeev swasthya ke liye hanikarak ho sakte hain aur suraksha aur sarvajanik swasthya ke drishtikon se mahatvapurna hain.</p>
        <p>Mammary gland mein doodh aam taur par sterile hota hai, halanki अस्वस्थ pashuon ke mammary glands mein bacteria maujood hote hain. Ek baar jab doodh ayan (udder) se nikalta hai, to ayan ke bahari hisse, pashu ke coat, vatavaran, bartan aur karyakartaon se microflora aasani se doodh mein pravesh kar jaate hain. Isliye, atyadhik saaf suthri sthitiyon mein bhi, taaje nikale gaye doodh mein kuch hajar bacteria ho sakte hain. Bhandaran ki sthitiyan, poorv-prasanskaran gatividhiyan aur aswachh prathaen bacterial load ko aur badha sakti hain. Doodh ki microbial samagri utpadan ki swachhata gunavatta aur sthitiyon ka ek bahut achha soochak hai.</p>
        <h4 class="font-bold mt-4">Growth</h4>
        <p>Bacteria multiply by division. Every cell division yields two new bacterial cells. The multiplication is a geometrical progression 20 → 21 → 22 → 23 . . . → 2n. If a growing bacterial culture contains N0 cells ml-1, the bacterial count N after n divisions is N = N0 * 2^n. The time needed for a full cell division thus determines the growth rate. It is called the generation time g; it can be derived from the number of divisions occurring during a certain time t: g = t/n.</p>
        <p>The above equations apply to the exponential growth phase of the bacteria (sometimes called logarithmic or log phase). Figure 4.1 illustrates the various growth phases that can be distinguished. During the lag phase the bacteria do not multiply, primarily because their enzyme system needs adaptation, enabling the bacteria to metabolize the nutrients in the medium. The duration of the lag phase closely depends on the physiological state of the bacteria, the temperature, and the properties of the medium. During the exponential phase, the growth is at a maximum rate until the stationary phase is reached. In the latter phase, some growth still occurs, together with dying off. The decrease of the growth rate is usually caused by action of inhibitors formed by the bacteria themselves and/or by a lack of available nutrients. Eventually, the stationary phase turns into the dying-off phase, during which the count decreases.</p>
        <h4 class="font-bold mt-4">Milk as a Substrate for Bacteria</h4>
        <p>Milk contains such a wide range of nutrients, including all of the vitamins, that numerous species of bacteria find sufficient raw material for fermentation and growth. But because the bacteria that can grow in milk may have very different properties, we should be cautious in applying general rules. For some bacteria, lactose is not a suitable energy source. Others rely on free amino acids as a nitrogen source, and fresh milk contains only tiny amounts of amino acids. Consequently, such bacteria often start to grow after other bacteria have hydrolyzed proteins, thus providing suitable nutrients.</p>
        <p>Milk contains natural inhibitors. An important class of inhibitors is the immunoglobulins (IgG, IgA, IgM), which are antibodies against specific bacteria. The most important nonspecific inhibitor of milk is the peroxidase–thiocyanate–H2O2 system, which is also quite active in saliva. The milk enzyme lactoperoxidase catalyzes the oxidation of SCN by H2O2, and one of the intermediates is a powerful bacteria killer.</p>
        <p>Treatment of milk may profoundly alter its suitability as a substrate for bacteria. The most important is heat treatment, which kills bacteria and may activate sporulation but also alters the milk. Inhibitors are inactivated; this pertains to the immunoglobulins and to the lactoperoxidase system. Consequently, pasteurization may considerably stimulate growth of bacteria (which have entered the milk afterward).</p>
        `
      },
      {
        id: "thermophilic",
        title: "Thermophilic Bacteria",
        content: "<p>Thermophilic bacteria can grow in milk held at elevated temperatures (55°C or higher), including pasteurization temperatures. The species that grow in higher temperatures include Bacillus species which enter milk from various sources in the farm, or from poorly cleaned equipment in the processing plant. When the milk is held at high temperatures for long periods, these bacteria rapidly increase in numbers and may cause flavour defects, curdling or problems related to legal standards for microbiology. Thermophilic bacteria are enumerated by Standard Plate Count with plate incubation at 55°C.</p>"
      },
      {
        id: "thermoduric",
        title: "Thermoduric Bacteria",
        content: "<p>Thermoduric bacteria can survive exposure to temperatures considerably above their maximal temperature for growth. In the dairy industry, this term is applied to those organisms which survive, but do not grow, at pasteurization temperature. They usually include species of Micrococcus, Streptococcus, Lactobacillus, Bacillus and occasionally some gram-negative rods. The sources of contamination are poorly cleaned and sanitized utensils and equipment on farm and processing plants. These bacteria contribute to significantly higher Standard Plate Count on pasteurized milk. The thermoduric count has been used in the dairy industry primarily as a test of hygienic practices and sanitary conditions maintained. It is also a means for detecting sources of contamination in products.</p>"
      },
      {
        id: "psychrotrophic",
        title: "Psychrotrophic Bacteria",
        content: "<p>The terms psychrotrophic or psychrophilic mean ‘cold-loving’ and microorganisms which play a significant role in biological processes in low-temperature environments are classified under this group. Psychrophilic species such as Pseudomonas, Flavobacterium, Alcaligenes, Acinetobacter, and Bacillus can grow rapidly at 7°C and below. They are generally non-pathogenic and are rarely present in the udder. They can cause off-flavours (fruity, stale, bitter, putrid, rancid) in dairy products. The counts of these bacteria in milk depend upon sanitary conditions prevailing during production and the time-temperature combination of milk storage before processing. The effect of psychotropic bacteria on the shelf life of pasteurized milk is largely dependent on number present after packaging, the rate of growth, the storage period, and the biochemical activity of the organisms.</p>"
      },
      {
        id: "lab",
        title: "Lactic Acid Bacteria (LAB)",
        content: "<p>When milk is held at ordinary temperature, it curdles or putrefies within a few hours owing to the rapid growth of bacteria. Lactic acid forming bacteria (those fermenting lactose into lactic acid) are important because they sour the milk. Some acid forming bacteria maybe useful, such as those used as starter cultures in cultured dairy products such as dahi, yogurt and cheese and some harmful, such as those causing curdling and spoilage of milk.</p>"
      },
      {
        id: "spoilage",
        title: "Spoilage Organisms",
        content: `
        <p>Milk is a suitable culture medium for many microorganisms, and an attempt to discuss them all would be beyond the scope of this book. Suffice it to mention some groups of bacteria, often consisting of several genera, that are responsible for a certain type of deterioration or are typical of the source of contamination or of the treatment of milk.</p>
        <p><strong>Lactic acid bacteria:</strong> These bacteria mainly produce lactic acid from carbohydrates such as lactose. They are widespread and include the genera Lactococcus and Lactobacillus. Lactococcus lactis sspp. lactis and cremoris grow rapidly in milk, especially above 20°C. So milk mostly turns sour if kept uncooled.</p>
        <p><strong>Coliforms:</strong> belong to the Enterobacteriaceae and are widespread, e.g., in the digestive tract. They include Escherichia coli and Aerobacter aerogenes. They grow rapidly in milk, especially above 20°C, and attack proteins and lactose, as a result of which gas is formed and the flavor of the milk becomes ‘‘unclean.’’</p>
        <p><strong>Psychrotrophs:</strong> also designated pseudomonads or gram-negative rods, occur widely and include the genera Pseudomonas, Achromobacter, Flavobacterium, and Alcaligenes. Psychrotrophs grow readily at low temperatures ( < 15°C); in milk they proliferate even at a temperature as low as 4°C. The organisms produce proteases and lipases, and thus attack protein and fat, causing ‘‘putrid’’ and rancid off-flavors.</p>
        <p><strong>Heat-resistant bacteria:</strong> Some bacteria, including Microbacterium lacticum, thermophilic streptococci, and certain Micrococcus species do not form spores, but the vegetative cells survive low pasteurization.</p>
        <p><strong>Spores of bacteria:</strong> The genera Bacillus (aerobic or facultatively anaerobic) and Clostridium (strictly anaerobic) can form spores. Most of these survive fairly intense heat treatment. They originate especially from soil, dust, and dung, and also from cattle feed. Important species include B. cereus, B. subtilis, B. stearothermophilus, and C. tyrobutyricum.</p>
        `
      },
      {
        id: "pathogens",
        title: "Pathogenic Organisms",
        content: `
        <p>In food infection, the food acts as a carrier for the microorganism. In food poisoning, the microorganism forms a toxin in the food. Some important pathogens for milk include:</p>
        <ul class="list-disc list-outside pl-5 space-y-2 mt-2">
            <li><strong>Mycobacterium tuberculosis:</strong> Can originate from the cow or the milker. It is killed by low pasteurization.</li>
            <li><strong>Staphylococcus aureus:</strong> Often occurs in the udder of a cow with mastitis. Some strains can form a heat-resistant toxin.</li>
            <li><strong>Salmonella and Shigella spp.:</strong> Occur widely in nature, e.g., in dung and polluted water. Low pasteurization is adequate to kill them.</li>
            <li><strong>Campylobacter jejuni:</strong> Can occur in the intestinal tract of many animals. It is very heat-sensitive and will not survive low pasteurization.</li>
            <li><strong>Listeria monocytogenes:</strong> Often found in nature. It can grow at temperatures as low as 5°C and is killed by usual pasteurization.</li>
            <li><strong>Coxiella burnetii:</strong> Causes Q fever in humans. It is more heat-resistant than M. tuberculosis.</li>
            <li><strong>Bacillus cereus:</strong> Spores survive pasteurization. Psychrotrophic strains are occasionally found.</li>
            <li><strong>Clostridium botulinum:</strong> A dreaded spore-forming bacterium. Milk and dairy products are never the cause of botulism.</li>
            <li><strong>Clostridium perfringens:</strong> Spores are often present in raw milk. Milk for baby formulas must be heated sufficiently to kill its spores.</li>
        </ul>
        `
      },
      {
        id: "enterobacteriaceae",
        title: "Enterobacteriaceae",
        content: "<p>Enterobacteriaceae are intestinal bacteria which can be found in dairy products from contamination of food, insufficient pasteurization and sterilization or recontamination due to inadequate hygiene standards. We offer diverse media and tests, like oxidase tests, for the detection and enumeration of Enterobacteriaceae.</p>"
      },
      {
        id: "cronobacter",
        title: "Cronobacter (Enterobacter sakazakii)",
        content: "<p>Cronobacter is a Gram-negative, facultative anaerobic, rod-shaped and motile bacterium that belongs to the Enterobacteriaceae family. This microorganism can cause severe neonatal infections: necrotizing enterocolitis, septicaemia and meningitis. The fatality rate following meningitis and other infections is 50%, and the survivors are neurologically damaged for life. Fortunately, infections are rare in infants, but they can occur in all age groups, admittedly with less severe clinical outcomes. Cronobacter spp. can grow over a wide temperature range, between 5.5 °C and 8 °C the multiplication begins. Average generation times of Cronobacter is about five hours at 10 °C and only 40 minutes at 23 °C. The organism is very tolerant of drying steps and can survive for two years desiccated in infant formula and then rapidly grow on reconstitution.</p>"
      },
      {
        id: "ecoli",
        title: "Escherichia coli & Coliforms",
        content: "<p>Coliforms are intestinal bacteria that are often present as a result of contamination by feces. They are defined as rod-shaped Gram-negative facultative anaerobic non-spore forming organisms that ferment lactose with the production of acid and gas when incubated at 35-37 °C. In most cases coliforms do not cause illness, but they are used as indicators for other pathogenic organisms of fecal origin that may be present in foods and water. Escherichia coli (E. coli): Is the most famous member of the coliform group bacteria and is an important indicator for fecal contamination, as it is almost exclusively of fecal origin.</p>"
      },
      {
        id: "salmonella",
        title: "Salmonella",
        content: "<p>Salmonella contamination is the second leading cause of foodborne illness worldwide. Controlling outbreaks of Salmonella is an important task for the food industry. The Salmonella family includes over 2,300 serotypes of bacteria, but two types, Salmonella Enteritidis and Salmonella Typhimurium, are responsible for about half of all human infections. Most outbreaks of Salmonella are traced back to dairy, poultry and meat products. Salmonella have the necessary tools and mechanisms to spread in the body. Microbiological control in the food industry plays a critical role in preventing Salmonella outbreaks and is probably an important reason for decreasing incidences in recent years. Tests and media used for identification of Salmonella take advantage of unique aspects of Salmonella physiology or biochemistry relative to other genera within the Enterobacteriaceae family. For example, bacteria from the genus Salmonella are mostly facultative anaerobes, oxidase-negative, catalase-positive and Gram-negative rods. Most strains are motile and ferment glucose with production of both acid and gas.</p>"
      },
      {
        id: "listeria",
        title: "Listeria monocytogenes",
        content: "<p>In recent years, it has been recognized that Listeria monocytogenes is an important public health problem. Listeriosis primarily affects people of advanced age, pregnant women, newborns, and adults with weakened immune systems. The infection increased over the last few years, most likely because of an increasing variety of food products, the trend for “ready-to-eat” and “ready-to-cook” products plus the demand for longer shelf life. Therefore, it is even more important that the risk foods, like dairy products, are thoroughly checked for contamination.</p>"
      },
      {
        id: "clostridium",
        title: "Clostridium perfringens",
        content: "<p>C. perfringens is also a fecal indicator organism but is much more resistant than E. coli and, due to the ability to produce spores, can be found even after treatments like pasteurization. We offer our unique chromogenic CP ChromoSelect agar but also diverse other media and tests to detect this organism.</p>"
      },
      {
        id: "campylobacter",
        title: "Thermotolerant Campylobacter",
        content: "<p>Campylobacteriosis is currently one of the most common bacterial infections in humans and is often a foodborne illness. The two species, Campylobacter jejuni and C. coli, are responsible for the majority of human foodborne campylobacteriosis. There are other pathogenic species—C. lari, C. fetus (infect reproductive tract), C. upsaliensis and very seldom C. helveticus—which can also cause diarrheal illness. Campylobacter can occasionally be found in raw milk. They are microaerophilic organisms that require oxygen levels between 2 and 10% for growth. These two species are classed as thermophilic campylobacters as they have an optimum temperature for growth of 42 °C. The current method used for detection of campylobacters from foodstuffs is the EN/ISO 10272-1:2017 method.</p>"
      },
      {
        id: "bacillus",
        title: "Bacillus cereus",
        content: "<p>Bacillus cereus is a typically motile soil bacterium which is able to build resistant centrally located endospores. The colonies that grow on most media types are dull and frosted. It is a Gram-positive and a facultative anaerobic organism, but older cells may become Gram-negative as they age. The Bacillus cereus group comprises Bacillus anthracis, Bacillus thuringiensis, Bacillus cytotoxicus and some other species, which share about 3100 genes. Some strains can cause foodborne illness similar to those caused by Clostridium perfringens or Staphylococcus aureus. The minimum infective dose is about 10^6-10^7 bacteria/g, at that range of cell concentration they start to build different toxins which cause both diarrheal and emetic human gastrointestinal syndromes. B. cereus infection for the diarrhea type of infection are UHT milk products. Contamination of raw milk occurs by simple transfer during milking when hygiene conditions are not fully observed. If present in raw milk, spores can survive the pasteurization process and contaminate the finished milk product. In milk products, B. cereus and other bacilli can degrade the casein to peptides which may be further degraded to amino acids which are responsible for alkaline reaction and a bitter taste in milk. The ISO recommends a colony count technique ISO 7932:2004 and an MPN method ISO 21871:2006 to detect and enumerate B. cereus.</p>"
      },
      {
        id: "staphylococci",
        title: "Coagulase-positive Staphylococci",
        content: "<p>Coagulase-positive staphylococci comprise Staphylococcus aureus, Staphylococcus hyicus and Staphylococcus intermedius. S. aureus is reported to be the most pathogenic species and is responsible for food poisoning due to the production of several relatively heat stable exotoxins. Enterotoxins are produced if the colony forming units per g sample exceeds 10^5 cfu/g. While in most cases for dairy products for S. aureus cells, a concentration of up to 100 cfu/g is acceptable, the toxin should not be detectable.</p>"
      },
      {
        id: "probiotics",
        title: "Probiotics",
        content: "<p>Probiotics are defined as live bacteria with beneficial effects to the health of the host organism. Probiotics take on a key role in the functional food industry. Today, lactic acid bacteria (LAB) and Bifidobacteria are primarily used as probiotics, however certain yeasts and bacilli are also known to have positive effects. In most cases, probiotics are produced directly by fermentation in foods such as yogurt or are supplied through dietary supplements. Bifidobacterium is one of the most important probiotic bacteria used in the dairy industry. Bifidobacteria have a positive effect on the immune system and control intestinal pH. Additionally, they produce bacteriocins and bacteriocin-like inhibitory compounds which inhibit the growth of other bacteria. ISO 22981:2010 describes the enumeration of presumptive Bifidobacteria by the TOS-MUP agar. Our 100043 TOS-MUP agar is in accordance with this ISO standard and is highly selective for Bifidobacteria as it suppresses the growth of Lactobacilli. Our chromogenic Bifidobacteria Selective Media allows for easy and fast quality control of yogurt. Lactobacilli belong to the lactic acid bacteria and comprise the major part of this group. As their name implies, they produce lactic acid. The acid-producing mechanism inhibits growth of other organisms and favors the growth of Lactobacilli that thrive in low pH environments. Some strains of Lactobacilli were shown to produce, like Bifidobacteria, a bacteriocin-like substance and can inhibit a broad range of pathogens.</p>",
        table: {
          headers: ["Probiotic Species", "Product Name", "Company"],
          rows: [
            ["Bifidobacterium breve", "Yakult Bifiene", "Yakult"],
            ["Lactobacillus casei DN114-001", "Actimel/DanActive", "Danone"],
            ["Lactobacillus casei Shirota", "Yakult", "Yakult"],
            ["Lactobacillus johnsonii La1", "LC1", "Nestlé"]
          ]
        }
      }
    ],
    testMethods: {
      title: "Common Microbiological Test Methods",
      intro: "Dairy products ki suraksha aur gunavatta sunishchit karne ke liye kai standard microbiological tests kiye jaate hain. Yahan kuch pramukh test methods ki overview di gayi hai:",
      tests: [
        {
          id: 'tpc',
          title: 'Aerobic Mesophilic Plate Count (Total Plate Count)',
          principle: 'This test measures the total number of viable (living) bacteria and fungi in a sample that can grow in the presence of oxygen at moderate (mesophilic) temperatures. It is also known as Standard Plate Count (SPC) or Total Viable Count (TVC).',
          procedure: `
            <ol class='list-decimal list-inside space-y-2 mt-2'>
              <li><strong>Sample Preparation:</strong> Create a 1:10 dilution by mixing 10g or 10ml of the sample with 90ml of sterile diluent (e.g., peptone water).</li>
              <li><strong>Serial Dilutions:</strong> Prepare further serial dilutions from this (1:100, 1:1000, etc.).</li>
              <li><strong>Plating:</strong> Transfer 1ml of each dilution into two sterile Petri plates (Pour Plate Method).</li>
              <li><strong>Media:</strong> Pour 15-20ml of melted Plate Count Agar (PCA), cooled to 45°C, into the plates. Gently swirl to mix.</li>
              <li><strong>Incubation:</strong> Incubate the plates inverted at 35-37°C for 24-48 hours.</li>
              <li><strong>Counting:</strong> Select plates with between 25 and 250 colonies. Count the colonies using a colony counter.</li>
            </ol>`,
          calculation: '<code>CFU/g (or ml) = (Average no. of colonies × Dilution factor) / Volume of sample plated (ml)</code>'
        },
        {
          id: 'coliforms',
          title: 'Detection of Coliforms, Faecal Coliforms & E.coli',
          principle: 'Coliforms ferment lactose to produce acid and gas. They are enumerated on Violet Red Bile Agar (VRBA). E. coli is a faecal coliform confirmed by specific biochemical tests.',
          procedure: `
            <ol class='list-decimal list-inside space-y-2 mt-2'>
              <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
              <li><strong>Plating:</strong> Pipette 1ml from each dilution into sterile Petri plates.</li>
              <li><strong>Media:</strong> Pour 15-20ml of melted VRBA and mix. After solidification, add another layer of VRBA on top (overlay).</li>
              <li><strong>Incubation:</strong> Incubate the plates at 35-37°C for 18-24 hours.</li>
              <li><strong>Counting:</strong> Count red-purple colonies (0.5mm or more in diameter) as coliforms.</li>
              <li><strong>Confirmation (E.coli):</strong> Inoculate suspected colonies into Brilliant Green Lactose Bile (BGLB) broth and incubate at 44.5°C. Gas production indicates the presence of E. coli. Further confirmation is done by IMViC tests.</li>
            </ol>`,
          calculation: '<code>Coliforms/g (or ml) = Average no. of characteristic colonies × Dilution factor</code>'
        },
        {
          id: 'yeast_mould',
          title: 'Yeast and Mould Count',
          principle: 'Yeasts and moulds can grow in acidic environments, so an acidic medium (like Potato Dextrose Agar, PDA) is used for their enumeration.',
          procedure: `
             <ol class='list-decimal list-inside space-y-2 mt-2'>
              <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
              <li><strong>Plating:</strong> Transfer 1ml of each dilution to sterile Petri plates (Spread Plate method is better).</li>
              <li><strong>Media:</strong> Plates should contain pre-poured Potato Dextrose Agar (PDA), with pH adjusted to ~3.5 (with tartaric acid) to inhibit bacterial growth.</li>
              <li><strong>Incubation:</strong> Incubate plates at 22-25°C for 5 days.</li>
              <li><strong>Counting:</strong> Count colonies of yeasts (typically shiny, round) and moulds (cotton-like, spreading) separately.</li>
            </ol>`,
          calculation: '<code>Yeast/Mould Count/g (or ml) = Average no. of colonies × Dilution factor</code>'
        },
        {
          id: 'staph_aureus',
          title: 'Detection of Staphylococcus aureus',
          principle: 'S. aureus produces characteristic black colonies with a clear zone around them when grown on Baird-Parker Agar. The Coagulase test confirms its identity.',
          procedure: `
            <ol class='list-decimal list-inside space-y-2 mt-2'>
              <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
              <li><strong>Plating (Spread Plate):</strong> Spread 0.1ml from each dilution onto Baird-Parker Agar plates.</li>
              <li><strong>Incubation:</strong> Incubate plates at 35-37°C for 24-48 hours.</li>
              <li><strong>Observation:</strong> Count black, shiny, convex colonies with an opaque zone around them.</li>
              <li><strong>Confirmation (Coagulase Test):</strong> Inoculate a characteristic colony into Brain Heart Infusion (BHI) broth, incubate, and then mix with rabbit plasma and incubate at 37°C. If the plasma coagulates (clot formation) within 4-6 hours, it is S. aureus.</li>
            </ol>`,
          calculation: '<code>S. aureus/g (or ml) = Average no. of confirmed colonies × Dilution factor</code>'
        },
         {
          id: 'salmonella_detection',
          title: 'Detection of Salmonella (Qualitative)',
          principle: 'This is a multi-step process involving pre-enrichment, selective enrichment, selective plating, and biochemical/serological confirmation.',
          procedure: `
            <ol class='list-decimal list-inside space-y-2 mt-2'>
              <li><strong>Pre-enrichment:</strong> Add 25g of sample to 225ml of Buffered Peptone Water and incubate at 37°C for 18-24 hours.</li>
              <li><strong>Selective Enrichment:</strong> Transfer 1ml of the pre-enriched culture to Rappaport-Vassiliadis (RV) broth and 0.1ml to Tetrathionate (TT) broth. Incubate RV at 42°C and TT at 37°C for 24 hours.</li>
              <li><strong>Selective Plating:</strong> Streak from both enrichment broths onto Xylose Lysine Deoxycholate (XLD) Agar and Hektoen Enteric (HE) Agar. Incubate plates at 37°C for 24 hours.</li>
              <li><strong>Observation:</strong> Red colonies (with or without black centers) on XLD, and blue-green colonies (with or without black centers) on HE are considered suspect colonies.</li>
              <li><strong>Confirmation:</strong> Inoculate suspect colonies onto Triple Sugar Iron (TSI) agar and Lysine Iron Agar (LIA) slants. Confirm with further biochemical (urease, indole) and serological tests.</li>
            </ol>`,
          calculation: 'Result is reported as "Detected" or "Not Detected" in 25g/ml.'
        },
        {
          id: 'listeria_detection',
          title: 'Detection of Listeria monocytogenes (Qualitative)',
          principle: 'This is also a multi-step process involving selective enrichment and plating.',
          procedure: `
             <ol class='list-decimal list-inside space-y-2 mt-2'>
              <li><strong>Primary Enrichment:</strong> Add 25g of sample to 225ml of Listeria Enrichment Broth (LEB) and incubate at 30°C for 24-48 hours.</li>
              <li><strong>Selective Plating:</strong> Streak from the enriched culture onto Oxford Agar or PALCAM Agar. Incubate plates at 35-37°C for 24-48 hours.</li>
              <li><strong>Observation:</strong> On Oxford Agar, Listeria colonies are greyish-green with a black halo around them.</li>
              <li><strong>Confirmation:</strong> Confirm suspect colonies with further tests (Gram stain, motility, catalase, CAMP test).</li>
            </ol>`,
          calculation: 'Result is reported as "Detected" or "Not Detected" in 25g/ml.'
        },
        {
          id: 'bacillus_cereus',
          title: 'Enumeration of Bacillus cereus',
          principle: 'B. cereus is grown on Mannitol Egg Yolk Polymyxin (MYP) Agar, where it does not ferment mannitol and produces the enzyme lecithinase.',
          procedure: `
            <ol class='list-decimal list-inside space-y-2 mt-2'>
              <li><strong>Sample & Dilutions:</strong> Prepare serial dilutions as in the TPC method.</li>
              <li><strong>Plating (Spread Plate):</strong> Spread 0.1ml from each dilution onto MYP Agar plates.</li>
              <li><strong>Incubation:</strong> Incubate plates at 30-35°C for 18-24 hours.</li>
              <li><strong>Observation:</strong> Count pink-red colonies with an opaque zone around them (lecithinase activity).</li>
              <li><strong>Confirmation:</strong> Confirm suspect colonies with further biochemical tests (glucose fermentation, Voges-Proskauer test).</li>
            </ol>`,
          calculation: '<code>B. cereus/g (or ml) = Average no. of confirmed colonies × Dilution factor</code>'
        },
        {
          id: 'other_tests',
          title: 'Overview of Other Tests',
          principle: 'Here is a brief overview of the remaining tests, as their detailed procedures can be very specific.',
          procedure: `
            <ul class='list-disc list-inside space-y-2 mt-2'>
              <li><strong>Aciduric Flat Sour Spores:</strong> Test for thermophilic bacteria that cause spoilage in canned foods. Done by incubating the sample on Dextrose Tryptone Agar.</li>
              <li><strong>Anaerobic Spore Formers (Clostridium):</strong> Done by growing in anaerobic conditions (like in an anaerobic jar) on special media (like SPS agar).</li>
              <li><strong>Direct Microscopic Count (DMC):</strong> A rapid, estimation test done by spreading a fixed amount of milk or tomato products on a slide, staining, and counting the bacteria directly under a microscope.</li>
              <li><strong>Fermentation Test:</strong> Estimating the quality of milk by incubating it and observing gas production, curd type, and odor.</li>
              <li><strong>Rope Producing Spores:</strong> Test for Bacillus spores that cause "rope" (slimy, thread-like spoilage) in bread or other products.</li>
              <li><strong>Water Testing:</strong> The same methods as above (like for coliforms, E.coli, Salmonella) are also used for water samples, often with the Membrane Filtration technique.</li>
              <li><strong>Culture Media, Equipments, Biochemical Tests:</strong> These topics are vast. Culture media (like PCA, VRBA, PDA) are the "food" for growing bacteria. Equipments (like Autoclave, Incubator) provide the necessary environment for testing. Biochemical tests (like IMViC, Catalase, Oxidase) use specific enzyme reactions of bacteria to identify them.</li>
            </ul>`,
          calculation: 'The results of these tests are usually reported as "Present/Absent" or in cfu/g(ml), depending on the test.'
        }
      ]
    }
  }
}

    
    