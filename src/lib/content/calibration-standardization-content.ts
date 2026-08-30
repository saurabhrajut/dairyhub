export const calibrationStandardizationContent = {
  hi: {
    mainTitle: "Calibration aur Standardization",
    description: "Dairy laboratory mein accurate measurements ensure karne ke liye ek comprehensive scientific guide.",
    backToTopics: "Topics par wapas jaayein",
    intro_p1: "<strong>Calibration</strong> ek aisi process hai jisme ek measuring instrument ki readings ko ek known standard (reference instrument) ke saath compare kiya jaata hai. Is process mein instrument ko adjust nahi kiya jaata — sirf yeh pata lagaya jaata hai ki instrument ki readings kitni accurate hain aur unme koi systematic error (bias) toh nahi hai. International Vocabulary of Metrology (VIM) ke anusaar, calibration ek documented comparison hai jo traceability establish karta hai SI units tak.",
    intro_p2: "<strong>Standardization</strong> ek alag concept hai: isme ek chemical solution (jaise acid ya base) ki exact concentration ko ek primary standard ke against titration karke confirm kiya jaata hai. Dairy plant mein, doodh ki composition (fat, SNF, protein, lactose, moisture, ash, etc.) aur quality (acidity, adulteration) ko reception se lekar dispatch tak multiple stages par analyze kiya jaata hai. Is analysis ki accuracy seedha product pricing, legal compliance (FSSAI/BIS standards), aur processing decisions ko affect karti hai. Isliye, in analyses mein upyog hone se pehle saare measuring instruments aur chemical reagents ka proper calibration/standardization karna behad zaroori hai.",
    intro_p3: "<strong>Traceability Chain:</strong> Ek reliable calibration system mein har instrument ki traceability NABL (National Accreditation Board for Testing and Calibration Laboratories) ya NPL (National Physical Laboratory) se certified standards tak honi chahiye. Isse ek unbroken chain of comparisons banti hai jo international SI units tak pahunchti hai.",
    tabs: {
      definitions: "Mukhya Paribhashayein",
      pipette: "Pipette Calibration",
      butyrometer: "Butyrometer Calibration",
      lactometer: "Lactometer Calibration",
      other: "Anya Glassware",
      thermometer: "Thermometer Calibration",
      balance: "Weighing Balance",
      chemical: "Chemical Standardization",
      spectrophotometer: "Spectrophotometer Calibration",
      ph_meter: "pH Meter Calibration",
      uncertainty: "Measurement Uncertainty",
      documentation: "Documentation & Records",
      sop: "Standard Operating Procedures"
    },
    definitions: {
      title: "Mukhya Scientific Paribhashayein",
      reagent: "Abhikarmak (Reagent)",
      reagent_desc: "Ek aise padaarth ko reagent kehte hain jo kisi doosre padaarth ke saath react karke chemical change laata hai. Dairy laboratory mein common reagents hain: sulfuric acid (fat test ke liye), sodium hydroxide (acidity test ke liye), aur EDTA (hardness determination ke liye). Reagents ki purity grade important hai — analytical grade (AR) ya laboratory grade use karna chahiye.",
      solution: "Ghol (Solution)",
      solution_desc: "Solution do ya do se adhik padarathon ka ek homogeneous mixture hai jisme ek solute (kam matra mein) aur ek solvent (adhik matra mein) hota hai. Solutions ka classification unki concentration ke basis par hota hai.",
      dilute_sol: "<strong>Dilute Solution:</strong> Jisme solute ki matra bahut kam ho, jaise 0.1 N NaOH solution.",
      concentrated_sol: "<strong>Concentrated Solution:</strong> Jisme solute ki matra adhik ho, jaise concentrated H2SO4 (98% pure).",
      saturated_sol: "<strong>Saturated Solution:</strong> Jisme ek nishchit temperature par aur solute dissolve na ho sake. Is state mein solution aur undissolved solid equilibrium mein hote hain.",
      supersaturated_sol: "<strong>Supersaturated Solution:</strong> Jisme normal solubility se adhik solute dissolved ho — yeh unstable state hoti hai.",
      standard_sol: "Standard Solution",
      standard_sol_desc: "Ek aise solution jisme solute ki exact concentration precisely known ho. Do prakar ki hoti hain: (1) <strong>Primary Standard Solution</strong> — directly accurate weighing se banai jaati hai (jaise anhydrous Na2CO3), aur (2) <strong>Secondary Standard Solution</strong> — primary standard ke against standardize ki jaati hai (jaise NaOH, HCl).",
      primary_standard: "Primary Standard ki Properties",
      primary_standard_desc: "Ek primary standard substance ki ye characteristics honi chahiye: (a) High purity (>99.9%), (b) Stable composition in air, (c) High molar mass (to reduce weighing error), (d) Non-hygroscopic, (e) Readily soluble in solvent, (f) Non-toxic preferably.",
      normal_sol: "Normal Solution (Normality - N)",
      normal_sol_desc: "1 litre solution mein dissolved solute ke gram equivalents ki sankhya. Formula: <code>N = (W × 1000) / (E × V)</code>, jahan W = weight of solute in grams, E = equivalent weight, V = volume in mL.",
      normal_sol_formula: "Gram equivalent weight = <code>Molar mass / n-factor</code>. n-factor: acid ke liye replaceable H+ ions ki sankhya, base ke liye replaceable OH- ions ki sankhya, oxidizing/reducing agents ke liye electrons transferred ki sankhya.",
      molar_sol: "Molar Solution (Molarity - M)",
      molar_sol_desc: "1 litre solution mein dissolved solute ke moles ki sankhya. Formula: <code>M = (W × 1000) / (MW × V)</code>, jahan W = weight of solute (g), MW = molecular weight (g/mol), V = volume (mL). Temperature change ke saath volume change hoti hai, isliye Molarity bhi change hoti hai.",
      molal_sol: "Molal Solution (Molality - m)",
      molal_sol_desc: "1000g (1 kg) solvent mein dissolved solute ke moles ki sankhya. <code>m = moles of solute / weight of solvent (kg)</code>. Molality temperature-independent hai kyunki ismein volume nahi, weight use hota hai — isliye precise work mein prefer kiya jaata hai.",
      percent_sol: "Percent Solution",
      percent_sol_desc: "Teen tarike se express ki jaati hai: (1) <strong>% w/v:</strong> Grams of solute per 100 mL solution. (2) <strong>% w/w:</strong> Grams of solute per 100 g solution. (3) <strong>% v/v:</strong> mL of solute per 100 mL solution. Dairy mein fat percentage is unit mein report hoti hai.",
      ppm_ppb: "PPM aur PPB",
      ppm_ppb_desc: "PPM (Parts Per Million) = mg/L ya mg/kg. PPB (Parts Per Billion) = µg/L ya µg/kg. Yeh units trace contaminants (heavy metals, pesticides, antibiotics) ki measurement ke liye use hoti hain.",
      note: "Note: Normality aur Molarity temperature par depend karti hain kyunki temperature badlane se solution ka volume badal jaata hai. Molality temperature-independent hai. Precision work mein gravimetric methods prefer kiye jaate hain."
    },
    pipette: {
      title: "Milk Pipette ka Calibration — Detailed Scientific Guide",
      intro: "Milk pipette ek specialized volumetric instrument hai jo Gerber fat test mein precisely 10.75 mL doodh deliver karne ke liye design kiya gaya hai. Yeh volume non-standard hai (10 mL nahi) kyunki iske saath sulfuric acid aur amyl alcohol milane par total mixture butyrometer mein exactly sahi position par aata hai. Pipette calibration ki accuracy directly fat test results ko affect karti hai.",
      sources_of_error: "Galtiyon ke Sources",
      sources_of_error_desc: "Pipette calibration mein errors ka aana in karanon se ho sakta hai: (1) Manufacturing defects — glass blowing mein non-uniform bore, (2) Thermal expansion — glass ka coefficient of thermal expansion 8-9 × 10⁻⁶ /°C hota hai, (3) Drainage errors — thick liquids pipette walls par adhik coat karti hain, (4) Surface tension effects — meniscus reading mein parallax error.",
      comparison: {
        title: "(a) Comparison Method",
        desc: "Is method mein, ek hi doodh ka Gerber fat test ek naye pipette aur ek pehle se calibrated (standard) pipette se kiya jaata hai aur results compare kiye jaate hain. Yadi dono ka fat % result 0.05% se adhik alag nahi aata, toh naye pipette ko acceptable maana jaata hai. Limitations: Is method mein reference pipette ki accuracy par poori dependency hoti hai, aur doodh ka fat test itself inherently ±0.1% variation de sakta hai."
      },
      bis: {
        title: "(b) BIS Gravimetric Method — Most Accurate",
        desc: "Yeh method IS:1223 ke anusaar hai aur sabse reliable mani jaati hai. Is mein pipette ki dispensed volume ko distilled water ke mass se calculate kiya jaata hai, kyunki har temperature par water ka density precisely known hai (IPTS-68 temperature scale par calibrated). Criterion: Pipette 27°C par <strong>10.75 ± 0.03 mL</strong> distilled water deliver kare.",
        steps: [
          "Pipette ko chromic acid cleaning solution (K2Cr2O7 + H2SO4) ya commercial pipette cleaner se 30 min soak karke saaf karein, phir distilled water se rinse karein.",
          "Pipette ko 27.0 ± 0.1°C par thermostated distilled water se 3 baar rinse karein taaki temperature equilibrate ho jaaye.",
          "Pipette ko marking se upar tak bharein, fir tip ko clean glass/filter paper se poochh karein aur meniscus ko carefully 10.75 mL mark par set karein (bottom of meniscus at mark).",
          "Pre-weighed (tared) 100 mL glass beaker mein pipette se paani deliver karein. Pipette tip beaker ki wall par touch karein aur 3 seconds drain time dein — standard drainage time follow karein.",
          "Beaker + water ko analytical balance par 4 decimal places (0.0001 g) tak weigh karein. Mass of water = W2 - W1.",
          "Volume calculate karein: <code>V = Mass / ρ(27°C)</code> jahan ρ(27°C) = 0.99654 g/mL (NIST data).",
          "Yadi 10.72 mL ≤ V ≤ 10.78 mL, pipette acceptable hai. Agar nahi, toh pipette reject karein ya mathematical method se re-mark karein.",
          "Minimum 3 replicate measurements lein aur average aur standard deviation calculate karein. SD < 0.01 mL acceptable hai."
        ]
      },
      mathematical: {
        title: "(c) Mathematical Re-marking Method",
        desc: "Jab ek pipette ka volume slightly out of range ho lekin bore uniform ho, toh naya permanent mark lagaya ja sakta hai. Method: Pehle pipette ke stem ka bore ka volume per unit length calibrate karein (mercury weighing se). Phir, do temporary reference marks ke beech volume jaanch kar calculate karein ki 10.75 mL mark exactly kahan hoga. Ek diamond-point engraver se permanent mark lagayein aur BIS gravimetric method se verify karein."
      }
    },
    butyrometer: {
      title: "Butyrometer ka Calibration — Complete Scientific Reference",
      intro: "Butyrometer ek specialized graduated glass tube hai jo Gerber method mein fat measurement ke liye use hoti hai. Is mein doodh ka fat, H2SO4 ke treatment aur centrifugation ke baad, stem mein ek column form karta hai jise directly % fat mein read kiya jaata hai. Calibration ki accuracy critical hai kyunki 0.1% fat error bhi dairy mein significant economic implications rakhta hai.",
      principle: {
        title: "Scientific Principle",
        desc: "Milk butyrometer ke stem par har <strong>1% fat division = 0.125 mL internal volume</strong> hota hai (IS:1223 specification). Isliye 0% se 10% tak complete scale = 10 × 0.125 = <strong>1.25 mL total volume</strong>. Calibration mein hum verify karte hain ki har division accurately 0.125 mL represent karta hai. Mercury is kaam ke liye ideal hai kyunki: (a) Kaanch se bilkul nahi chipakta (zero contact angle), (b) Density bahut high aur accurately known hai (13,534 kg/m³ at 20°C), (c) Silver color se clear visibility, (d) Non-compressible liquid."
      },
      mercury_density_table: "Mercury Density at Different Temperatures: 15°C = 13,558 kg/m³ | 20°C = 13,546 kg/m³ | 25°C = 13,534 kg/m³ | 30°C = 13,521 kg/m³. Temperature measurement zaroori hai precise volume calculation ke liye.",
      methods: {
        title: "Calibration ke Vibhinn Tarike",
        comparison: {
          title: "1. Comparison Method",
          desc: "Ek hi doodh sample ka fat test do butyrometers mein simultaneously kiya jaata hai — ek standard (calibrated) aur ek test (naya). Dono readings agar ±0.05% fat ke andar hain toh new butyrometer acceptable hai.",
          points: ["Ek pehle se calibrated standard butyrometer.", "Ek naya butyrometer jise calibrate karna hai."],
          conclusion: "Limitation: Reference butyrometer ki own error transfer ho sakti hai. Isi liye primary calibration ke liye gravimetric method preferred hai. Routine quality check ke liye comparison method kaafi useful hai."
        },
        bis: {
          title: "2. BIS Method — Mercury Pipette Method (IS:1223)",
          desc: "Is standardized method mein ek special automatic mercury pipette use ki jaati hai jo exactly <strong>0.3125 mL</strong> mercury deliver karti hai per stroke — jo butyrometer ke <strong>2.5% fat divisions</strong> ke barabar hai. Har division gap exactly correct hai ya nahi, yahi verify hota hai.",
          steps: [
            "Butyrometer ko isopropyl alcohol se degrease karein, distilled water se rinse karein, oven mein 105°C par 30 min dry karein. Moisture presence mercury meniscus ko distort karta hai.",
            "Room temperature (25°C) note karein aur corresponding mercury density table se dhundh lein.",
            "Butyrometer ko rubber stopper se band karein (bottom mein) aur 10% mark tak mercury carefully bharein dropper se. Yeh hamara zero reference point hai.",
            "Mercury pipette calibrate karein: pehle check karein ki woh accurately 0.3125 mL deliver kar rahi hai gravimetric method se.",
            "Mercury pipette se exactly 0.3125 mL mercury butyrometer mein add karein. Mercury level 10% se 7.5% par aana chahiye. Difference precisely 2.5 divisions hona chahiye.",
            "Yahi process 3 baar aur repeat karein: 7.5% → 5.0% → 5.0% → 2.5% → 2.5% → 0%. Total 4 additions mein 0 to 10% scale completely fill honi chahiye.",
            "Yadi koi bhi intermediate reading 0.2% se adhik off hai, butyrometer reject karo ya us specific range mein correction factor note karo.",
            "Test 3 replicate butyrometers par karein aur results record karein."
          ]
        },
        gravimetric: {
          title: "3. Gravimetric Method — Sabse Accurate (Reference Method)",
          desc: "Is method mein mercury ka actual weight measure karke precise volume calculate ki jaati hai. Yeh primary reference method hai jise dusre methods validate karne ke liye use kiya jaata hai.",
          steps: [
            "Analytical balance (readability 0.0001 g) ko calibrated weights se verify karein. Balance ko draft-free environment mein level par rakhein.",
            "Saaf, sukha butyrometer weigh karein — W1 note karein.",
            "Butyrometer mein mercury bharo exactly 10.0% graduation tak, air bubbles avoid karein. Room temperature (T°C) precisely note karo.",
            "Butyrometer ko 9.0% graduation tak mercury nikalo (ya upar tak bharo 10% se) aur dobara weigh karo — W2.",
            "Mercury mass = W2 - W1. Volume = Mass / ρ(T°C) jahan ρ mercury ka temperature-specific density hai.",
            "Expected volume for 1% = <strong>0.125 ± 0.001 mL</strong> (IS:1223 tolerance).",
            "Yahi process multiple points par repeat karo: 0-1%, 4-5%, 9-10% to check linearity across full scale.",
            "Linearity check: Plot calculated volume vs. nominal volume. Deviation from straight line = non-linearity error.",
            "Complete calibration certificate tayaar karo jisme temperature, readings, corrections, aur uncertainty stated hon."
          ]
        }
      },
      uncertainty_analysis: "Measurement Uncertainty in Butyrometer Calibration: Type A uncertainty (statistical) = standard deviation of repeated measurements / √n. Type B uncertainty (systematic) = mercury density uncertainty (±0.001 g/mL), balance uncertainty (±0.0002 g), temperature measurement uncertainty (±0.1°C). Combined uncertainty typically ±0.002 mL per division.",
      table: {
        caption: "Table 6.1: Vibhinn Products ke liye Butyrometer Types",
        header1: "Scale Range (%)",
        header2: "Product (Utpad)",
        rows: [
          { scale: "0–0.5", product: "Skimmed milk (Malaai rahit doodh)" },
          { scale: "0–4", product: "Partly skimmed milk, Buttermilk (Chhaachh)" },
          { scale: "0–10", product: "Whole milk, Evaporated milk (unsweetened)" },
          { scale: "0–20", product: "Dry milk powder (Doodh ka powder)" },
          { scale: "0–40", product: "Ice cream, Condensed milk, Cheese (Paneer)" },
          { scale: "0–70", product: "Cream (Malaai)" },
          { scale: "0–90", product: "Butter (Makhan)" }
        ]
      }
    },
    lactometer: {
      title: "Lactometer ka Calibration — Scientific Principles aur Methods",
      intro: "Lactometer ek hydrometer type ka instrument hai jo doodh ki relative density (specific gravity) measure karta hai. Yeh measure doodh ki solids content ka indirect indicator hai — genuine full-fat cow milk ka specific gravity at 27°C typically 1.028 se 1.032 tak hota hai (Lactometer reading: 28-32).",
      principle: {
        title: "Scientific Principle — Archimedes ka Niyam",
        desc1: "Lactometer <strong>Archimedes principle</strong> par kaam karta hai: Jab koi object kisi liquid mein daala jaata hai, toh us par upward buoyant force laagta hai jo us object dwara displaced liquid ke weight ke barabar hota hai. Mathematically: <strong>F_buoyancy = ρ_liquid × V_displaced × g</strong>. Lactometer tab tak sink karta hai jab tak buoyant force uske apne weight ke barabar na ho jaaye. Dense liquid mein kam doobega, less dense mein adhik doobega.",
        desc2: "Specific Gravity (SG) = ρ_sample / ρ_water (at 4°C). Doodh ka SG > 1.000 kyunki doodh mein water ke alawa dissolved solids (lactose, proteins, minerals) aur emulsified fat hoti hai. Water milane par SG decrease hota hai (doodh patel ho jaata hai). Fat removal se SG increase hota hai (fat ki density ~0.93 g/mL < water, toh fat remove hone par density badhti hai).",
        desc3: "Aam taur par 3 prakar ke lactometers use kiye jaate hain:",
        types: [
          "<strong>Quevenne's Lactometer:</strong> 60°F (15.5°C) par calibrated. Scale 15-35°Q (Quevenne degrees).",
          "<strong>BIS Lactometer:</strong> 27°C par calibrated. Scale 1.020-1.035 SG ya 20-35 LR.",
          "<strong>Zeal Lactometer:</strong> 85°F (29.4°C) par calibrated. Used in some export-oriented dairy plants."
        ],
        temperature_correction: "Temperature Correction Formula: Agar reading alag temperature par li gayi ho, toh correction required hai. BIS formula: <strong>Corrected LR = Observed LR + (T - 27) × 0.2</strong>, jahan T = actual milk temperature in °C. Yeh correction milk ki thermal expansion (approximately 0.0002 per °C) account karta hai."
      },
      clr_formula: "CLR (Corrected Lactometer Reading) Calculation: CLR = LR + [0.2 × (T-27)] for BIS lactometer. SNF (% ) = (CLR/4) + 0.2 × Fat%. TS (%) = Fat% + SNF%. Yeh formulae doodh composition ke quick estimation ke liye use hote hain.",
      methods: {
        title: "Calibration ke Vibhinn Tarike",
        comparison: {
          title: "1. Comparison Method",
          desc: "Ek hi doodh sample mein do lactometers simultaneously daalein — ek standard aur ek test. Readings 0.0005 SG (0.5 LR unit) se adhik alag nahi honi chahiye. Limitation: Standard instrument ki own error transfer ho sakti hai."
        },
        bis: {
          title: "2. BIS Method — Standard Solution Method (IS:1479)",
          desc: "Jyaat specific gravity wale solutions prepare karke lactometer ki accuracy verify ki jaati hai. Sodium chloride ya anhydrous sodium carbonate solutions use kiye jaate hain. Sodium chloride preferred hai kyunki iske solutions stable hote hain aur yeh readily available hai.",
          steps: [
            "Desired specific gravity (jaise 1.025, 1.030, 1.032) ke liye NaCl ki required amount calculate karein. Example: 1.025 SG ke liye approximately 35.5 g NaCl per liter distilled water.",
            "Distilled water (ASTM Type II quality, conductivity <1 µS/cm) use karein. Tap water impurities SG ko affect karti hain.",
            "Solution banane ke baad, accurately calibrated pycnometer ya digital density meter se actual SG verify karein.",
            "Solution temperature ko 27.0 ± 0.2°C par thermostatically control karein water bath mein.",
            "Lactometer ko dry karke gently solution mein daalein. 2-3 minutes stabilize hone dein. Rotation dein taaki wall se touch na ho.",
            "Meniscus ke top par (not bottom) reading lein — lactometer ke scale par graduation visible hoti hai.",
            "Reading standard solution ke known SG se ≤ 0.0005 different honi chahiye (BIS tolerance). Agar adhik difference hai toh lactometer reject karein.",
            "Kam se kam 3 different SG values par test karein (lower, mid, upper range) taaki linearity check ho."
          ]
        }
      }
    },
    other_glassware: {
      title: "Anya Glassware ka Calibration — Volumetric Flask, Cylinder, Beaker",
      intro: "Dairy laboratory mein volumetric flasks (100 mL, 250 mL, 500 mL, 1000 mL), measuring cylinders (10-1000 mL), aur burettes ka calibration utna hi important hai. Glassware two classes mein aata hai: Class A (high accuracy, tolerance ±0.05-0.1 mL) aur Class B (routine use, tolerance ±0.1-0.2 mL). Class A glassware ko Class B ke badle kabhi use nahi karna chahiye precision work mein.",
      principle: {
        title: "Gravimetric Calibration ka Scientific Principle",
        desc: "Principle simple hai: Har temperature par distilled water ka density precisely known hai (NIST/IAPWS tables se). Agar hum glassware mein rakhein paani ka mass measure karein, toh volume = mass / density se calculate kar sakte hain. Is calculated volume ko glassware par likhi kshamata se compare karte hain. Precision distilled water (conductivity <0.1 µS/cm, CO2-free) use karna chahiye kyunki dissolved salts density change karte hain."
      },
      procedure: {
        title: "Standard Calibration Procedure (IS:1388)",
        steps: [
          "Glassware ko chromic acid solution (5% K2Cr2O7 in 10% H2SO4) ya modern alternatives (Decon 90, Extran) se overnight soak karein. Rinse with distilled water minimum 5 times.",
          "Glassware ko 105°C oven mein 2 hours dry karein. Cool karein desiccator mein (silica gel ke saath) minimum 1 hour. Room temperature achieve karne dein.",
          "Analytical balance (minimum readability 0.001 g, better 0.0001 g) ko calibrate karein. Empty dry flask weigh karein — W1.",
          "Distilled water ko required calibration temperature (27°C for BIS) par thermostat karein. Temperature ±0.1°C accuracy se measure karein calibrated thermometer se.",
          "Flask ko slowly fill karein using wash bottle. Air bubbles avoid karein. Volume mark par meniscus set karein — parallax error avoid karne ke liye eye level par rakhein aur light source peeche se aane dein.",
          "Filled flask weigh karein — W2. Mass of water = W2 - W1.",
          "Volume = Mass / ρ(T°C). Water density at 27°C = 0.99654 g/mL (at 25°C = 0.99705 g/mL, at 20°C = 0.99820 g/mL).",
          "Minimum 3 replicate measurements lein. Average volume aur standard deviation calculate karein.",
          "Tolerance check: BIS Class A 100 mL flask ke liye ±0.10 mL, 250 mL ke liye ±0.15 mL, 1000 mL ke liye ±0.40 mL.",
          "Calibration correction factor = Nominal volume - Calculated volume. Use volume dispensed calculation mein."
        ]
      },
      burette_calibration: "Burette Calibration: Burette ka calibration multiple points par kiya jaata hai (0-10, 0-20, 0-30, 0-40, 0-50 mL). Har interval mein paani collect karein pre-weighed beaker mein aur mass measure karein. Plot 'calculated volume vs. nominal volume' — linearity check ke liye. Burette ke liye Class A tolerance ±0.05 mL per 10 mL interval."
    },
    thermometer: {
      title: "Thermometer ka Calibration — Fixed Point aur Comparison Methods",
      intro: "Dairy processing mein temperature measurement critical hai: pasteurization (72°C/15 sec ya 63°C/30 min), sterilization (120°C+), cold storage (4°C), culture incubation (37°C), etc. Thermometer error seedhe product safety aur quality ko affect karta hai. HTST pasteurizers mein thermometer calibration regulatory requirement hai (FSSAI).",
      thermometer_types: "Thermometer Types in Dairy: (1) Liquid-in-glass (LIG) thermometers — mercury ya alcohol. (2) Bimetallic strip thermometers. (3) RTD (Resistance Temperature Detectors) — Pt100, most accurate. (4) Thermocouple thermometers. (5) Digital/infrared thermometers. Sabka calibration required hai aur frequency use-case ke anusaar vary karti hai.",
      ice_point: {
        title: "1. Ice Point Method (0°C Fixed Point)",
        scientific_basis: "Pure water aur ice ka equilibrium point (triple point ke kareeb) 0.00°C par hota hai 1 atm pressure par — yeh ITS-90 temperature scale ka one of the defining fixed points hai.",
        steps: [
          "ASTM D1003 ke anusaar ice slush tayaar karein: crushed pure ice (distilled water se banaa) ko 3-4 inches deep beaker mein pack karein. Ice ke beech minimum air gaps hon.",
          "Sufficient chilled distilled water add karein taaki ice completely wet ho jaaye — liquid ka level ice surface se thoda neeche rahna chahiye. Yeh ice + water mixture ensures 0°C equilibrium.",
          "3-5 minutes thermally equilibrate hone dein, beaker ko insulate karein (Styrofoam ya towel wrap).",
          "Thermometer insert karein taaki bulb/sensor completely submerged ho — beaker ke bottom ya sides se minimum 2 cm door.",
          "5-10 minutes stabilize hone dein (mercury LIG thermometers ko adhik time lagta hai vs. RTDs).",
          "Reading lein. Accepted range: 0.0 ± 0.1°C for Class A; 0.0 ± 0.5°C for Class B thermometers.",
          "Error record karein. Example: Agar thermometer 0.3°C dikhata hai, toh correction = -0.3°C (subtract 0.3 from all readings)."
        ]
      },
      boiling_point: {
        title: "2. Boiling Point Method (100°C Fixed Point)",
        scientific_basis: "Water ka boiling point atmospheric pressure par depend karta hai: BP (°C) ≈ 100 + 0.037 × (P - 760), jahan P = barometric pressure in mmHg. Standard pressure (760 mmHg) par BP = 100.00°C. High altitude par pressure kam hoti hai aur BP bhi. Isliye boiling point calibration mein barometric pressure measurement zaroori hai.",
        steps: [
          "Distilled water ko flask mein lein. Anti-bumping granules (boiling chips) add karein smooth boiling ke liye.",
          "Steam jacket thermometer ya hypsometer apparatus use karein — thermometer bulb boiling water mein nahi, steam phase mein hona chahiye (steam point measurement). Steam temperature = water ka actual boiling point.",
          "Local barometric pressure note karein (calibrated aneroid barometer se). Boiling point correction apply karein.",
          "Stabilized reading note karein. Expected value = 100 + 0.037 × (P - 760) °C.",
          "Agar reading different hai, error = Reading - Expected value. Yeh correction factor future readings mein apply karein."
        ]
      },
      rtd_calibration: "RTD (Pt100) Calibration: RTDs ko NIST-traceable resistance standards se calibrate kiya jaata hai. 0°C par Pt100 ka resistance = 100.00 Ω; at 100°C = 138.51 Ω (IEC 60751 standard). Dairy mein HTST system ke RTDs ko minimum annual calibration + drift check every 6 months recommended hai (3-A Sanitary Standards)."
    },
    balance: {
      title: "Weighing Balance ka Calibration — Comprehensive Guide",
      intro: "Analytical balance dairy laboratory ka sabse critical instrument hai. Balance accuracy seedha chemical concentration calculation, reagent preparation, aur fat/protein determination ko affect karti hai. OIML (International Organization of Legal Metrology) classification ke anusaar, dairy laboratory mein minimum Class II (readability 0.01 mg) ya Class III (readability 0.01 g) balance honi chahiye.",
      environmental_factors: "Balance Performance ko Affect karne wale Environmental Factors: (1) Vibration — Anti-vibration table use karein. (2) Air drafts — Balance cover closed rakhein. (3) Humidity — 45-65% RH maintain karein. (4) Temperature — ±1°C/hour se adhik change nahi honi chahiye. (5) Electrostatic charges — Ionizer use karein hygroscopic samples ke liye. (6) Magnetic fields — Magnets aur electromagnetic devices door rakhein.",
      tests: [
        "<strong>Eccentricity Test (Corner Load Test):</strong> Standard weight (typically 1/3rd of max capacity) ko pan ke center mein aur phir 4 corners par rakhein. Sabhi positions ki readings note karein. Maximum permissible difference = 2 × d (d = readability). Yeh test pan mounting ki uniformity check karta hai.",
        "<strong>Repeatability Test (Reproducibility Test):</strong> Ek standard weight ko minimum 10 baar rakhein aur hatayein. Standard deviation (SD) calculate karein. SD < 0.41 × d acceptable hai (OIML R76 ke anusaar). Yeh test random errors aur drift identify karta hai.",
        "<strong>Linearity Test (Span Calibration):</strong> Multiple standard weights use karein full range mein (25%, 50%, 75%, 100% of max capacity). Calculated values vs. nominal values plot karein. Maximum deviation from linearity: typically ±2 × d. Yeh test systematic errors identify karta hai.",
        "<strong>Sensitivity Test:</strong> Balance ke minimum detectable weight (sensitivity reciprocal) ko test kiya jaata hai ek small known weight (tamper-evident) add karke. Balance ka minimum display change should be ≤ readability.",
        "<strong>Zero Drift Test:</strong> Balance ko 30 min warm up hone dein. Zero set karein. 1 hour baad zero check karein without any load. Maximum zero drift < 2 × d per hour acceptable hai."
      ],
      calibration_weights: "Calibration Weight Classes (OIML R111): E1 (highest accuracy, ±0.001%) → E2 → F1 → F2 → M1 → M2 → M3 (lowest). Dairy laboratory ke liye minimum F2 class weights use karein. Weights ko calibration certificate ke saath purchase karein aur annually recertify karein NABL accredited lab se."
    },
    chemical: {
      title: "Chemical Standardization — Primary aur Secondary Standards",
      intro: "Dairy laboratory mein titration-based analysis (acidity determination, SNF calculation, titratable acidity, etc.) ki accuracy chemical solutions ki exact concentration par depend karti hai. Isliye chemical standardization ek essential operation hai.",
      primary_standards_list: "Common Primary Standards in Dairy Laboratory",
      anhydrous_na2co3: "Anhydrous Sodium Carbonate (Na2CO3): MW = 105.99 g/mol. HCl solution standardize karne ke liye use hota hai. Preparation: 260°C par 2 hours heat karein moisture remove karne ke liye. Cool karein desiccator mein. Weigh accurately aur dissolve in CO2-free distilled water. Indicator: Methyl orange ya methyl red. Endpoint: Red/pink color change.",
      potassium_dichromate: "Potassium Dichromate (K2Cr2O7): MW = 294.19 g/mol. Thiosulfate solutions standardize karne ke liye. Reduce karo iodometrically (with KI in acid medium).",
      oxalic_acid: "Oxalic Acid (H2C2O4·2H2O): MW = 126.07 g/mol. KMnO4 solution standardize karne ke liye. Permanganate apna khud ka indicator hai (purple color disappears at endpoint).",
      naoh_standardization: "NaOH Standardization (Secondary Standard): NaOH strongly hygroscopic hai aur CO2 absorb karta hai — isliye primary standard se standardize karna padta hai. Method: Primary standard oxalic acid ya potassium hydrogen phthalate (KHP) weigh karein accurately. NaOH solution se titrate karein. Indicator: Phenolphthalein. Endpoint: Faint pink color persist 30 sec. NaOH Normality = (Weight of KHP × 1000) / (Equivalent weight × Volume of NaOH in mL). Equivalent weight of KHP = 204.23 g/eq.",
      h2so4_standardization: "H2SO4 Standardization: Concentrated H2SO4 ko dilute karke ~0.1 N solution banao. Standardize karo anhydrous Na2CO3 ke against. H2SO4 Normality = (Weight of Na2CO3 × 1000) / (53.00 × Volume of H2SO4 in mL). Note: 53.00 = equivalent weight of Na2CO3 (MW/2 = 105.99/2).",
      edta_standardization: "EDTA Standardization (for Calcium/Magnesium determination): Primary standard: Pure CaCO3 (oven-dried at 200°C). Dissolve in minimum HCl, neutralize, and dilute. Titrate with EDTA solution. Indicator: Eriochrome Black T. Buffer: pH 10 ammoniacal buffer. Endpoint: Red to blue color change.",
      shelf_life: "Standardized Solutions ki Shelf Life: NaOH (0.1 N) = 2-4 weeks (CO2 absorption). HCl (0.1 N) = 6 months (stable). Na2S2O3 (0.1 N) = 2-4 weeks (microbial degradation). EDTA (0.01 M) = 3-6 months. Standardization dates label par likhein aur expiry ke baad re-standardize karein."
    },
    spectrophotometer: {
      title: "Spectrophotometer Calibration — UV-Vis Spectrophotometry",
      intro: "Modern dairy laboratories mein UV-Vis spectrophotometers ka use protein (Bradford assay, Kjeldahl digest), added preservatives (hydrogen peroxide, formalin), antibiotics, aur aflatoxins ki measurement ke liye hota hai. Spectrophotometer calibration mein wavelength accuracy, photometric accuracy, stray light, aur resolution check kiya jaata hai.",
      beer_lambert_law: "Beer-Lambert Law: A = ε × c × l, jahan A = absorbance (dimensionless), ε = molar absorption coefficient (L/mol/cm), c = concentration (mol/L), l = path length (cm). Yeh law concentration aur absorbance ke beech linear relationship establish karta hai — iska valid hona spectrophotometric assays ki precondition hai.",
      wavelength_calibration: "Wavelength Calibration: Holmium oxide glass filter ya holmium perchlorate solution ke known absorption peaks use karein (360.9, 418.5, 536.2, 637.5 nm). Mercury lamp peaks bhi use hoti hain UV range mein (253.65, 365.02 nm). Wavelength accuracy: ±1 nm for routine instruments, ±0.2 nm for research grade.",
      photometric_calibration: "Photometric (Absorbance) Calibration: NIST-traceable neutral density filters ya potassium dichromate solutions use karein. K2Cr2O7 (60 mg/L in 0.001 N H2SO4) at 350 nm: expected A = 0.757 ± 0.010. At 235 nm: expected A = 0.757 ± 0.010. Yeh NIST SRM 935a standard reference material hai.",
      stray_light: "Stray Light Check: Stray light se Beer-Lambert law failure hoti hai high absorbances par (A > 2). NaI solution (12 g/L) at 220 nm: should give A > 2.0 (indicating >99% light absorption = very low stray light). Modern double-beam instruments mein stray light typically <0.1%.",
      linearity: "Linearity Verification: Known concentration standards (0.1×, 0.25×, 0.5×, 0.75×, 1.0× of working range) prepare karein. Plot absorbance vs. concentration. R² > 0.999 for acceptable linearity. Y-intercept should be near zero (maximum ±0.005 AU)."
    },
    ph_meter: {
      title: "pH Meter Calibration — Electrochemical Principles",
      intro: "pH meter dairy mein critical measurements ke liye use hota hai: milk acidity (titratable acidity ka cross-check), starter culture activity, yogurt set monitoring, cleaning-in-place (CIP) solutions ki alkalinity/acidity, aur effluent treatment. pH meter glass electrode ke Nernst equation par kaam karta hai.",
      nernst_equation: "Nernst Equation: E = E° - (RT/nF) × ln([H+]) = E° - 0.05916 × pH (at 25°C), jahan E = cell potential, E° = standard potential, R = 8.314 J/mol/K, T = temperature (K), F = 96485 C/mol. Har 1 pH unit par ~59.16 mV change at 25°C. Temperature bhi slope change karta hai — isliye temperature compensation zaroori hai.",
      buffer_standards: "pH Buffer Standards: (1) pH 4.00 ± 0.02 (Potassium Hydrogen Phthalate buffer) — acidic range check. (2) pH 7.00 ± 0.02 (Potassium Dihydrogen Phosphate + Disodium Hydrogen Phosphate buffer) — neutral range check. (3) pH 10.01 ± 0.02 (Sodium Carbonate + Sodium Bicarbonate buffer) — alkaline range check. NIST-certified buffers use karein.",
      two_point_calibration: "Two-Point Calibration Procedure: (1) pH 7 buffer se 'zero point' set karein — yeh asymmetry potential correct karta hai. (2) pH 4 ya pH 10 buffer se 'slope' set karein — yeh electrode ka response slope correct karta hai. Slope should be 95-105% of theoretical (Nernst slope). <95% ka matlab electrode aging ya fouling.",
      milk_ph: "Milk pH Reference Values: Fresh normal cow milk = 6.6-6.8. Colostrum = 6.0-6.3 (acidic). Mastitis milk = >6.8 (alkaline shift). Fermented milk/yogurt = 4.0-4.6. pH reading 6.8 se upar late evening samples mein CO2 loss se possible — fresh samples test karein.",
      maintenance: "pH Electrode Maintenance: (1) Never dry store — always immerse in pH 4 buffer ya KCl solution (3M). (2) Before use, condition electrode in pH 7 buffer 30 min. (3) Rinse with distilled water between measurements. (4) Clean with 0.1 M HCl agar protein-fouled ho. (5) Reference junction ko check karein — blocked junction slow response deta hai."
    },
    uncertainty: {
      title: "Measurement Uncertainty — GUM (Guide to Expression of Uncertainty in Measurement)",
      intro: "Measurement uncertainty ek quantitative statement hai jo batata hai ki measured value kitne range mein true value se differ kar sakti hai. ISO/IEC 17025 ke anusaar, NABL accredited laboratories ko sabhi test results ke saath uncertainty estimate report karna compulsory hai.",
      type_a: "Type A Uncertainty (Statistical Evaluation): Repeated measurements se calculate kiya jaata hai. Formula: u_A = s/√n, jahan s = standard deviation, n = number of measurements. Example: Fat test ke 10 replicate readings ka average = 3.5%, SD = 0.05%. u_A = 0.05/√10 = 0.0158%.",
      type_b: "Type B Uncertainty (Non-statistical Evaluation): Known sources se estimated — calibration certificates, manufacturer specs, published data, expert judgment. Examples: Balance uncertainty (from calibration certificate) = ±0.001 g → standard uncertainty = 0.001/√3 = 0.000577 g (rectangular distribution assume). Temperature uncertainty = ±0.1°C → 0.1/√3 = 0.0577°C.",
      combined_uncertainty: "Combined Standard Uncertainty: u_c = √(u_A² + u_B1² + u_B2² + ...). Expanded Uncertainty: U = k × u_c, jahan k = coverage factor (k=2 for 95% confidence level). Report result as: Value ± U (Unit), k=2, level of confidence = 95%.",
      fat_test_example: "Example — Fat Test Uncertainty Budget: (1) Pipette volume uncertainty = ±0.03 mL → u = 0.0173 mL. (2) Butyrometer scale reading = ±0.05% → u = 0.029%. (3) Centrifuge speed variation = ±50 rpm → effect ≈ ±0.02% fat. (4) Temperature effect on fat column = ±0.01%. Combined: u_c = √(0.029² + 0.02² + 0.01²) ≈ 0.036%. Expanded U = 2 × 0.036 = 0.072% fat (95% confidence)."
    },
    documentation: {
      title: "Documentation aur Records — Laboratory Quality Management",
      intro: "ISO/IEC 17025:2017 aur FSSAI regulations ke anusaar, dairy laboratory ko systematic documentation maintain karna compulsory hai. Calibration records traceability ka proof provide karte hain aur audit trails maintain karte hain.",
      calibration_record: "Calibration Record mein shamil hona chahiye: (1) Instrument ID aur description. (2) Calibration date. (3) Calibration method reference (BIS/ISO standard). (4) Environmental conditions (temperature, humidity). (5) Standard used (with traceability reference). (6) Before and after adjustment readings. (7) Calibration uncertainty. (8) Next calibration due date. (9) Technician signature aur supervisor approval.",
      calibration_schedule: "Recommended Calibration Frequency: Analytical balance — monthly (internal), annually (external NABL). Pipettes, burettes — quarterly. Butyrometers — semi-annually. Lactometers — monthly. Thermometers — monthly (in-use check), annually (full calibration). pH meters — daily (buffer check), monthly (electrode slope check). Spectrophotometers — daily (wavelength check), quarterly (full calibration).",
      sop_requirement: "SOP (Standard Operating Procedure) Requirements: Har calibration ke liye written SOP hona chahiye jisme shamil ho: objective, scope, references, responsibilities, equipment required, procedure steps, acceptance criteria, corrective actions if out of specification, documentation requirements.",
      out_of_tolerance: "Out-of-Tolerance Action Plan: (1) Immediately quarantine the instrument — 'DO NOT USE' tag lagao. (2) Assess impact on previous results (since last successful calibration). (3) Notify customers/supervisors of potentially affected test results. (4) Investigate root cause (damage, wear, environmental factors). (5) Repair/adjust instrument. (6) Recalibrate. (7) Document entire OOT event in non-conformance log."
    },
    sop: {
      title: "Standard Operating Procedures (SOPs) for Laboratory Calibration",
      intro: "SOPs ensure karte hain ki har calibration activity consistent, repeatable, aur documented way mein perform ki jaaye regardless of operator. Good SOPs reduce human error aur form an auditable quality management system.",
      sop_elements: "Essential SOP Elements: (1) Header — Title, SOP number, version, effective date, author, approver. (2) Purpose — What this SOP accomplishes. (3) Scope — Which instruments/areas this applies to. (4) Definitions — Technical terms. (5) Responsibilities — Who does what. (6) Materials/Equipment — What is needed. (7) Safety precautions. (8) Step-by-step procedure. (9) Calculations — Formulas with examples. (10) Acceptance criteria — Pass/fail limits. (11) Corrective action — What to do if fail. (12) Documentation — Forms/records to fill. (13) References — Standards cited.",
      training_requirements: "Training Requirements: SOPs follow karne se pehle, technicians ko: (1) SOP read karein aur understand karein. (2) Experienced person ke saath 3 supervised runs complete karein. (3) Competency demonstration test pass karein. (4) Training record maintain karein with date and supervisor sign-off. Annual retraining recommended, and mandatory after any SOP revision.",
      change_control: "Change Control Process: SOPs sirf controlled change process ke through update hone chahiye: (1) Change request submit karein written form mein. (2) Technical review karo — impact assess karo. (3) Approval from Laboratory Manager / Quality Manager. (4) Old version archive karo (revision history maintain karo). (5) New version distribute karo aur purane versions destroy/mark 'OBSOLETE'. (6) Affected staff ko retrain karo. (7) Change log mein record karo."
    }
  },

  en: {
    mainTitle: "Calibration and Standardization",
    description: "A comprehensive scientific guide to ensuring accurate measurements in the dairy laboratory.",
    backToTopics: "Back to Topics",
    intro_p1: "<strong>Calibration</strong> is a documented process of comparing a measuring instrument's readings against a known reference standard under specified conditions, to determine the instrument's accuracy and identify any systematic errors (bias). According to the International Vocabulary of Metrology (VIM), calibration establishes the relationship between quantity values with measurement uncertainties provided by measurement standards and the corresponding indications with associated measurement uncertainties. Importantly, calibration does not include adjustment of the instrument — it only determines how far the instrument deviates from the standard.",
    intro_p2: "<strong>Standardization</strong>, a related but distinct concept, involves determining the exact concentration of a chemical solution (such as NaOH or HCl) by titrating it against a primary standard substance of known purity and composition. In a dairy plant, the composition (fat, SNF, protein, lactose, moisture, ash) and quality parameters (acidity, adulteration markers, antibiotic residues) of milk are analyzed at multiple critical control points from reception to dispatch. The accuracy of these analyses directly impacts product pricing, processing decisions, legal compliance (FSSAI/PFA regulations, BIS standards), and ultimately, consumer safety.",
    intro_p3: "<strong>Traceability Chain:</strong> A reliable calibration system requires that every measuring instrument be traceable through an unbroken chain of comparisons to national or international measurement standards — in India, through NABL (National Accreditation Board for Testing and Calibration Laboratories) to NPL (National Physical Laboratory), which in turn is traceable to BIPM (Bureau International des Poids et Mesures) and the SI system.",
    tabs: {
      definitions: "Key Definitions",
      pipette: "Pipette Calibration",
      butyrometer: "Butyrometer Calibration",
      lactometer: "Lactometer Calibration",
      other: "Other Glassware",
      thermometer: "Thermometer Calibration",
      balance: "Weighing Balance",
      chemical: "Chemical Standardization",
      spectrophotometer: "Spectrophotometer Calibration",
      ph_meter: "pH Meter Calibration",
      uncertainty: "Measurement Uncertainty",
      documentation: "Documentation & Records",
      sop: "Standard Operating Procedures"
    },
    definitions: {
      title: "Key Scientific Definitions",
      reagent: "Reagent",
      reagent_desc: "A substance that participates in a chemical reaction to detect, measure, examine, or produce other substances. In dairy laboratories, common reagents include sulfuric acid (for Gerber fat test), sodium hydroxide (for acidity determination), and EDTA (for calcium/magnesium determination). Reagent quality is critical — Analytical Reagent (AR) grade is preferred for quantitative analysis.",
      solution: "Solution",
      solution_desc: "A homogeneous mixture of two or more substances where a solute (in smaller quantity) is uniformly distributed within a solvent (in larger quantity). The driving force for dissolution is the reduction in Gibbs free energy. Solutions are classified by concentration, physical state, and the nature of the components.",
      dilute_sol: "<strong>Dilute Solution:</strong> Contains a relatively small amount of solute compared to the solvent, e.g., 0.01 N NaOH.",
      concentrated_sol: "<strong>Concentrated Solution:</strong> Contains a relatively large amount of solute, e.g., concentrated H2SO4 (98% w/w).",
      saturated_sol: "<strong>Saturated Solution:</strong> Contains the maximum amount of solute that can dissolve at a given temperature — the system is in equilibrium between the dissolved and undissolved solute.",
      supersaturated_sol: "<strong>Supersaturated Solution:</strong> An unstable state containing more solute than normally possible at that temperature — formed by carefully cooling a saturated solution without disturbance.",
      standard_sol: "Standard Solution",
      standard_sol_desc: "A solution whose concentration is precisely known. (1) <strong>Primary Standard Solution</strong> — prepared directly by dissolving an accurately weighed primary standard substance (e.g., anhydrous Na2CO3, potassium dichromate). (2) <strong>Secondary Standard Solution</strong> — standardized against a primary standard (e.g., NaOH, HCl, KMnO4).",
      primary_standard: "Properties of a Primary Standard",
      primary_standard_desc: "A substance suitable as a primary standard must possess: (a) High purity (>99.9%), (b) Chemical stability in air and solution, (c) High molar mass (minimizes weighing error), (d) Non-hygroscopic, (e) Readily soluble in the chosen solvent, (f) Reacts stoichiometrically with the solution being standardized.",
      normal_sol: "Normal Solution (Normality - N)",
      normal_sol_desc: "The number of gram equivalents of solute dissolved per liter of solution. Formula: <code>N = (W × 1000) / (E × V)</code>, where W = weight of solute (g), E = equivalent weight (g/eq), V = volume (mL). Normality is reaction-specific — the same solution can have different normalities for different reactions.",
      normal_sol_formula: "Gram equivalent weight = <code>Molar mass / n-factor</code>. n-factor: for acids = number of replaceable H+ ions; for bases = number of replaceable OH- ions; for redox reactions = number of electrons transferred per molecule.",
      molar_sol: "Molar Solution (Molarity - M)",
      molar_sol_desc: "The number of moles of solute dissolved per liter of solution. Formula: <code>M = (W × 1000) / (MW × V)</code>, where MW = molecular weight (g/mol), V = volume (mL). Molarity depends on temperature since volume changes with temperature — solutions expand at higher temperatures, reducing concentration.",
      molal_sol: "Molal Solution (Molality - m)",
      molal_sol_desc: "The number of moles of solute dissolved per kilogram of solvent. <code>m = moles of solute / weight of solvent (kg)</code>. Molality is temperature-independent because it is based on mass, not volume — making it more precise for thermodynamic calculations.",
      percent_sol: "Percent Solutions",
      percent_sol_desc: "Three types: (1) <strong>% w/v:</strong> g of solute per 100 mL of solution — most common in pharmacy/biology. (2) <strong>% w/w:</strong> g of solute per 100 g of solution — used for concentrated acids and bases. (3) <strong>% v/v:</strong> mL of liquid solute per 100 mL of solution — used for alcohol, solvents.",
      ppm_ppb: "PPM and PPB",
      ppm_ppb_desc: "PPM (Parts Per Million) = mg/L or mg/kg (for liquids/solids). PPB (Parts Per Billion) = µg/L or µg/kg. These units are used for trace contaminants such as heavy metals (lead, mercury, arsenic), pesticide residues, antibiotic residues, and aflatoxins in dairy products.",
      note: "Note: Normality and Molarity are temperature-dependent because solution volume changes with temperature. Molality and weight percent are temperature-independent. For the highest precision, gravimetric methods are preferred over volumetric ones where possible."
    },
    pipette: {
      title: "Calibration of Milk Pipette — Detailed Scientific Guide",
      intro: "The milk pipette is a specialized volumetric instrument designed to deliver exactly 10.75 mL of milk in the Gerber fat determination method. This non-standard volume was specifically chosen so that when combined with the prescribed volumes of sulfuric acid and amyl alcohol, the total mixture creates the correct conditions for fat separation in the butyrometer. Pipette calibration directly affects the accuracy of fat test results, and a 0.5 mL error in pipette volume translates to approximately 0.3% error in fat reading.",
      sources_of_error: "Sources of Error in Pipette Calibration",
      sources_of_error_desc: "Errors in pipette volume can arise from: (1) Manufacturing defects — non-uniform internal bore during glass blowing, (2) Thermal expansion — glass has a coefficient of thermal expansion of approximately 8-9 × 10⁻⁶ /°C, (3) Drainage errors — viscous liquids coat the walls more, (4) Meniscus reading — parallax error if eye not at level of graduation mark, (5) Tip condition — chipped or contaminated tips affect drainage.",
      comparison: {
        title: "(a) Comparison Method",
        desc: "A Gerber fat test is performed on the same milk sample using the new pipette and a previously calibrated reference pipette, and results are compared. If fat content results differ by no more than 0.05%, the new pipette is considered acceptable. Limitation: This method depends entirely on the accuracy of the reference pipette and is subject to the inherent variability of the fat test procedure itself (approximately ±0.05-0.1% natural variation)."
      },
      bis: {
        title: "(b) BIS Gravimetric Method — Most Accurate (IS:1223)",
        desc: "This method is prescribed in IS:1223 and is the most reliable approach. The pipette's delivered volume is calculated from the mass of distilled water dispensed, using the precisely known density of water at calibration temperature. Acceptance criterion: The pipette must deliver <strong>10.75 ± 0.03 mL</strong> of distilled water at 27°C.",
        steps: [
          "Clean the pipette using chromic acid cleaning solution (K2Cr2O7 dissolved in H2SO4) or a commercial pipette cleaner for 30 minutes, followed by thorough rinsing with distilled water (minimum 5 complete flushes).",
          "Rinse the pipette 3 times with thermostated distilled water at 27.0 ± 0.1°C to ensure thermal equilibration between pipette and liquid.",
          "Fill the pipette above the mark, then carefully adjust the meniscus to the graduation mark (bottom of the meniscus for transparent liquids). Wipe the tip with clean filter paper.",
          "Deliver the water into a pre-tared 100 mL glass beaker. Touch the pipette tip to the beaker wall and allow the standard drainage time (3 seconds). Do not blow out the remaining drop — this is already accounted for in the calibration.",
          "Weigh the beaker containing water on an analytical balance (readability 0.0001 g). Calculate: Mass of water = W2 - W1.",
          "Calculate volume using: <code>V = Mass / ρ(27°C)</code>, where ρ(27°C) = 0.99654 g/mL (from NIST water density tables).",
          "If 10.72 mL ≤ V ≤ 10.78 mL, the pipette is acceptable. If not, reject or re-mark using the Mathematical Method.",
          "Perform a minimum of 3 replicate measurements. Calculate mean and standard deviation. SD < 0.01 mL indicates good precision."
        ]
      },
      mathematical: {
        title: "(c) Mathematical Re-marking Method",
        desc: "When a pipette's volume is slightly out of range but the bore is uniform, a new permanent mark can be engraved. Procedure: First, calibrate the volume per unit length of the stem using mercury weighing. Then, measure two known temporary reference marks and calculate by linear interpolation where the 10.75 mL point falls exactly. Mark this point permanently using a diamond-point engraver. Verify the new mark using the BIS gravimetric method before placing the pipette in service."
      }
    },
    butyrometer: {
      title: "Calibration of Butyrometer — Complete Scientific Reference",
      intro: "The butyrometer is a precision graduated glass tube used in the Gerber method for fat determination. After acid treatment and centrifugation, the liberated fat column in the graduated stem is read directly as % fat. Calibration ensures that the graduation markings accurately represent the intended volumes. Even a 0.1% fat error can have significant economic implications in commercial dairy operations.",
      principle: {
        title: "Scientific Principle",
        desc: "According to IS:1223, each <strong>1% fat division on a milk butyrometer represents an internal volume of exactly 0.125 mL</strong>. Therefore, the entire scale from 0 to 10% fat represents a total internal volume of 10 × 0.125 = <strong>1.25 mL</strong>. Calibration verifies that each division accurately represents this volume. Mercury is the ideal calibration fluid because: (a) Zero contact angle with glass (does not wet glass, unlike water), (b) Very high and precisely known density (13,534 kg/m³ at 25°C), (c) Silver color provides excellent visual contrast, (d) Virtually incompressible."
      },
      mercury_density_table: "Mercury Density at Different Temperatures: 15°C = 13,558 kg/m³ | 20°C = 13,546 kg/m³ | 25°C = 13,534 kg/m³ | 30°C = 13,521 kg/m³. Precise temperature measurement is essential for accurate volume calculations.",
      methods: {
        title: "Different Calibration Methods",
        comparison: {
          title: "1. Comparison Method",
          desc: "The fat content of the same milk sample is tested simultaneously in two butyrometers — one calibrated reference and one under test. If readings agree within ±0.05% fat, the test butyrometer is acceptable.",
          points: ["One previously calibrated (standard) butyrometer.", "One new butyrometer to be calibrated."],
          conclusion: "Limitation: Any calibration error in the reference butyrometer is propagated to the test instrument. The comparison method is suitable for routine quality checks but is not a primary calibration method. Reference standards should themselves be calibrated using a gravimetric method."
        },
        bis: {
          title: "2. BIS Method — Mercury Pipette Method (IS:1223)",
          desc: "This standardized method uses a special automatic mercury pipette that delivers exactly <strong>0.3125 mL</strong> of mercury per stroke — equivalent to <strong>2.5% fat divisions</strong> of the butyrometer. The method verifies that each 2.5% interval of the scale is correctly spaced.",
          steps: [
            "Degrease the butyrometer with isopropyl alcohol, rinse with distilled water, and dry in an oven at 105°C for 30 minutes. Moisture causes mercury meniscus distortion and adhesion errors.",
            "Record the ambient temperature accurately (±0.5°C) and determine the corresponding mercury density from standard tables.",
            "Seal the bottom with a rubber stopper. Carefully introduce mercury up to the 10.0% mark using a dropper, avoiding air bubbles. This serves as the zero reference point.",
            "Calibrate the mercury pipette itself: verify it dispenses exactly 0.3125 mL gravimetrically before use.",
            "Add 0.3125 mL of mercury from the pipette into the butyrometer. The mercury level should descend from 10.0% to exactly 7.5% — a difference of exactly 2.5 divisions.",
            "Repeat this process 3 more times, each time adding 0.3125 mL: 7.5% → 5.0% → 2.5% → 0.0%. After 4 additions, the scale should read exactly 0.0%.",
            "If any intermediate reading deviates by more than 0.2% from the expected value, the butyrometer fails calibration. Document the specific failure point.",
            "Perform the test on at least 3 butyrometers from the same batch to check batch consistency."
          ]
        },
        gravimetric: {
          title: "3. Gravimetric Method — Reference/Primary Method",
          desc: "This is the most accurate calibration method, serving as the reference method against which other methods are validated. Volume at each division is calculated from the mass of mercury between graduation marks.",
          steps: [
            "Verify the analytical balance (readability 0.0001 g) with calibrated OIML F2 class weights. Ensure the balance is level, in a draft-free environment.",
            "Weigh the clean, thoroughly dry butyrometer — record as W1.",
            "Introduce mercury carefully up to the 10.0% graduation mark. Record room temperature precisely (±0.1°C). Weigh the butyrometer with mercury — record as W2.",
            "Remove mercury to the 9.0% mark (or add to 10% after starting from 9%). Weigh again — W3. Mercury mass between 9-10% = |W3 - W2|.",
            "Calculate volume: V = Mass / ρ(T°C), using the temperature-corrected mercury density.",
            "Expected volume for each 1% division = <strong>0.125 ± 0.001 mL</strong> (IS:1223 tolerance).",
            "Repeat at multiple points: 0-1%, 4-5%, 9-10% ranges to check linearity across the full scale.",
            "Plot calculated volume vs. nominal volume for linearity assessment. Slope should be 1.000 ± 0.008.",
            "Prepare a complete calibration certificate stating temperature, readings, correction factors, and expanded measurement uncertainty."
          ]
        }
      },
      uncertainty_analysis: "Measurement Uncertainty in Butyrometer Calibration: Type A (statistical) = SD of repeated measurements / √n. Type B (systematic): mercury density uncertainty (±0.001 g/mL → 0.0006 g/mL standard uncertainty), balance uncertainty (±0.0002 g), temperature measurement uncertainty (±0.1°C → approximately ±0.0001 g/mL density uncertainty). Combined uncertainty is typically ±0.002 mL per division.",
      table: {
        caption: "Table 6.1: Types of Butyrometers for Different Products",
        header1: "Scale Range (%)",
        header2: "Product",
        rows: [
          { scale: "0–0.5", product: "Skimmed milk" },
          { scale: "0–4", product: "Partly skimmed milk, Buttermilk" },
          { scale: "0–10", product: "Whole milk, Evaporated milk (unsweetened)" },
          { scale: "0–20", product: "Dry milk powder" },
          { scale: "0–40", product: "Ice cream, Condensed milk, Cheese" },
          { scale: "0–70", product: "Cream" },
          { scale: "0–90", product: "Butter" }
        ]
      }
    },
    lactometer: {
      title: "Calibration of Lactometer — Scientific Principles and Methods",
      intro: "The lactometer is a hydrometer-type instrument that measures the relative density (specific gravity) of milk. It provides a rapid, indirect measure of the Total Solids content of milk. Genuine full-fat cow milk has a specific gravity of 1.028–1.032 at 27°C (LR 28–32). Water adulteration decreases density; fat removal (skimming) increases it.",
      principle: {
        title: "Scientific Principle — Archimedes' Law and Buoyancy",
        desc1: "Lactometers operate on <strong>Archimedes' principle</strong>: An object immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces. Mathematically: <strong>F_buoyancy = ρ_liquid × V_displaced × g</strong>. The lactometer reaches equilibrium when buoyancy equals its own weight. In denser milk (higher SNF), the lactometer sinks less; in diluted milk, it sinks more.",
        desc2: "Specific Gravity (SG) = ρ_sample / ρ_water (at 4°C). Milk SG > 1.000 because dissolved solids (lactose, proteins, minerals) increase density while fat (ρ ≈ 0.93 g/mL) slightly decreases it. Water adulteration moves SG toward 1.000. Fat removal increases SG (since low-density fat is removed).",
        desc3: "Three types of lactometers are commonly used, calibrated at different reference temperatures:",
        types: [
          "<strong>Quevenne's Lactometer:</strong> Calibrated at 60°F (15.5°C). Scale in °Q (Quevenne degrees).",
          "<strong>BIS Lactometer:</strong> Calibrated at 27°C. Scale reads 20–35 (representing SG 1.020–1.035).",
          "<strong>Zeal Lactometer:</strong> Calibrated at 85°F (29.4°C). Used in some export-oriented dairy plants."
        ],
        temperature_correction: "Temperature Correction Formula: When milk temperature differs from calibration temperature, apply correction. BIS formula: <strong>Corrected LR = Observed LR + (T - 27) × 0.2</strong>, where T = actual milk temperature in °C. This accounts for thermal expansion of milk (~0.0002 per °C change in specific gravity)."
      },
      clr_formula: "CLR (Corrected Lactometer Reading) Calculations: CLR = LR + [0.2 × (T - 27)] for BIS lactometer. SNF (%) = (CLR/4) + 0.2 × Fat%. Total Solids (%) = Fat% + SNF%. These empirical formulae are used for rapid composition estimation and are validated against gravimetric reference methods.",
      methods: {
        title: "Different Calibration Methods",
        comparison: {
          title: "1. Comparison Method",
          desc: "Two lactometers (one standard reference and one under test) are simultaneously immersed in the same milk sample at the same temperature. Readings should agree within 0.0005 SG units (0.5 LR units) according to BIS tolerance. Limitation: Any error in the reference lactometer is transferred to the instrument under test."
        },
        bis: {
          title: "2. BIS Method — Standard Solution Method (IS:1479)",
          desc: "Solutions of precisely known specific gravity are prepared and used to verify lactometer accuracy. Sodium chloride (NaCl) or anhydrous sodium carbonate solutions are used, as their density-concentration relationships are well characterized. NaCl solutions are preferred for stability and availability.",
          steps: [
            "Calculate the required mass of NaCl to achieve the desired specific gravities (e.g., 1.025, 1.030, 1.032) using published density tables for NaCl solutions. Example: For SG 1.025 at 27°C, approximately 35.5 g NaCl per liter.",
            "Use ASTM Type II distilled water (conductivity <1 µS/cm). Dissolved minerals in tap water significantly affect density.",
            "After solution preparation, verify the actual SG using a calibrated pycnometer or an NIST-traceable digital density meter (e.g., Anton Paar DMA series).",
            "Thermostat the solution to 27.0 ± 0.2°C in a water bath with a calibrated thermometer.",
            "Gently immerse the dry lactometer. Wait 2–3 minutes for equilibration. Rotate slightly to ensure it is not touching the container wall.",
            "Read at the top of the meniscus (lactometer scales are typically read at the upper meniscus, unlike volumetric glassware).",
            "The reading should match the known specific gravity of the standard solution within ±0.0005 SG (BIS tolerance). Readings outside this range indicate the lactometer requires replacement.",
            "Test at minimum 3 different SG values covering the working range (lower, mid, upper) to verify linearity."
          ]
        }
      }
    },
    other_glassware: {
      title: "Calibration of Other Glassware — Volumetric Flasks, Cylinders, Burettes",
      intro: "Volumetric flasks, measuring cylinders, burettes, and beakers used in dairy laboratories must be calibrated to ensure accurate volumetric measurements. Laboratory glassware is classified into two accuracy grades: Class A (high precision, per ISO 1042/ASTM E288 tolerances) and Class B (general purpose, tolerances typically double those of Class A). Class A glassware must be used wherever precision volumetric work is required.",
      principle: {
        title: "Principle of Gravimetric Calibration",
        desc: "The principle is straightforward: since the density of distilled water at any given temperature is precisely known (from IAPWS-95 formulation and published in NIST tables), measuring the mass of water contained in a vessel at a known temperature allows precise calculation of its volume. Formula: <code>Volume = Mass / ρ(T°C)</code>. This calculated volume is compared to the nominal volume marked on the glassware. The water used must be high-purity distilled water (conductivity <0.1 µS/cm, CO2-free) because dissolved solids alter density."
      },
      procedure: {
        title: "Standard Calibration Procedure (IS:1388)",
        steps: [
          "Soak glassware in chromic acid solution (5% K2Cr2O7 in 10% H2SO4) or modern laboratory glassware cleaner (Decon 90, Extran) for at least 30 minutes. Rinse thoroughly with distilled water (minimum 5 complete rinses).",
          "Dry the glassware in an oven at 105°C for 2 hours. Cool in a desiccator with fresh silica gel for minimum 1 hour to reach room temperature. Never use compressed air for drying — it may introduce moisture.",
          "Weigh the clean, dry glassware on an analytical balance (readability minimum 0.001 g, preferably 0.0001 g). Record as W1.",
          "Prepare distilled water at the calibration temperature (27°C for BIS). Use a calibrated thermometer to verify temperature to ±0.1°C. Fill the glassware using a wash bottle, avoiding air bubbles.",
          "Set the meniscus to the graduation mark at eye level, using a white card as background and a light source behind the flask. The lower meniscus of a concave meniscus should be tangent to the graduation line.",
          "Weigh the filled glassware immediately. Record as W2. Mass of water = W2 - W1.",
          "Calculate volume: V = (W2 - W1) / ρ(27°C), where ρ(27°C) = 0.99654 g/mL.",
          "Perform minimum 3 replicate measurements and calculate mean ± SD. SD/mean × 100 should be <0.1%.",
          "Compare calculated volume to nominal volume. Apply BIS IS:1388 tolerance: Class A 100 mL = ±0.10 mL; 250 mL = ±0.15 mL; 1000 mL = ±0.40 mL.",
          "If within tolerance: label as 'CALIBRATED' with date and correction factor (if applicable). If outside tolerance: label as 'DO NOT USE' and remove from service."
        ]
      },
      burette_calibration: "Burette Calibration Protocol: Calibrate burettes at multiple intervals (0-10, 0-20, 0-30, 0-40, 0-50 mL). For each interval, deliver water into a pre-tared beaker and weigh. Calculate volume and plot against nominal volume. Class A tolerance: ±0.05 mL per 10 mL interval. Non-linearity indicates worn stopcock or bore irregularity requiring replacement. Document full calibration curve as a correction table."
    },
    thermometer: {
      title: "Calibration of Thermometer — Fixed-Point and Comparison Methods",
      intro: "Temperature measurement is critical in dairy processing: pasteurization (72°C/15 sec HTST or 63°C/30 min LTLT), UHT sterilization (135-140°C/2-5 sec), cold chain maintenance (≤4°C), culture incubation (37-42°C), and cheese ripening (10-15°C). A thermometer error of even 1°C at pasteurization temperature can compromise public health safety. FSSAI regulations require documented temperature records for licensed dairy operations.",
      thermometer_types: "Types of Thermometers in Dairy Use: (1) Liquid-in-glass (LIG) — mercury or alcohol. (2) Bimetallic strip — dial thermometers for process vessels. (3) RTD (Resistance Temperature Detector) — Pt100 probes, most accurate (±0.1°C). (4) Thermocouple — fast response, for high-temperature applications. (5) Infrared (IR) — non-contact surface temperature measurement. (6) Digital thermometers — various sensor types with digital readout. Calibration frequency and method vary by type and application.",
      ice_point: {
        title: "1. Ice Point Method (0°C Fixed Point — ITS-90 Reference)",
        scientific_basis: "The ice point (equilibrium of pure ice and air-saturated water at 101.325 kPa) is a primary fixed point of the International Temperature Scale of 1990 (ITS-90) at 0.00°C. It is highly reproducible when prepared correctly and serves as a fundamental calibration reference available in any laboratory without specialized equipment.",
        steps: [
          "Prepare an ice slush according to ASTM D1003: use crushed ice made from distilled water only (tap water impurities depress the freezing point). Pack at least 4 inches deep in an insulated beaker.",
          "Add sufficient chilled distilled water so ice is completely wet but not floating — water level should be just below ice surface. This ice-water mixture ensures thermal equilibrium at exactly 0.00°C.",
          "Stir the slush and allow 5 minutes for thermal equilibration. Wrap the beaker in insulation material (Styrofoam, foam sheet) to minimize heat input from surroundings.",
          "Insert thermometer so bulb/sensor is completely immersed in slush, minimum 2 cm from bottom or sides of container to avoid contact errors.",
          "Allow 5–10 minutes for temperature stabilization (mercury LIG thermometers require longer equilibration than RTDs or thermocouples).",
          "Record the reading. Acceptable range: 0.0 ± 0.1°C for Class A instruments; 0.0 ± 0.5°C for Class B. Record any deviation as a correction factor to apply to all future readings.",
          "Document: Date, thermometer ID, reading, ambient temperature, and technician name."
        ]
      },
      boiling_point: {
        title: "2. Boiling Point Method (100°C Fixed Point — Pressure-Dependent)",
        scientific_basis: "The boiling point of pure water at standard atmospheric pressure (101.325 kPa / 760 mmHg) is exactly 100.00°C. This is a secondary fixed point of ITS-90. Critical note: The boiling point is pressure-dependent and decreases with altitude. Correction formula: BP (°C) ≈ 100 + 0.037 × (P - 760), where P = barometric pressure in mmHg. At 1000 m altitude, BP ≈ 96.9°C.",
        steps: [
          "Measure local barometric pressure with a calibrated aneroid barometer before beginning. Calculate expected boiling point using the correction formula.",
          "Place distilled water and anti-bumping granules (boiling chips) in a round-bottom flask. Connect to a reflux condenser if needed to prevent significant water loss.",
          "Use a proper steam-point measurement setup: the thermometer bulb/sensor should be in the steam phase just above the boiling liquid, not immersed in the water itself (steam point measurement, not boiling water measurement).",
          "Heat until steady boiling. Allow thermometer to equilibrate — steam should be condensing on the stem above the bulb.",
          "Record the stabilized reading. Compare to calculated expected boiling point. Deviation = error at 100°C.",
          "Using both ice point and boiling point errors, calculate the thermometer's span error. Apply a linear correction formula for readings between 0°C and 100°C."
        ]
      },
      rtd_calibration: "RTD (Pt100) Calibration: RTDs are calibrated against NIST-traceable resistance standards using precision resistance bridges. At 0°C, Pt100 resistance = 100.00 Ω; at 100°C = 138.51 Ω (IEC 60751). In dairy HTST systems, RTDs must meet 3-A Sanitary Standards: calibration traceable to NIST, accuracy ±0.5°C or better, calibrated at minimum annually and after any maintenance, with records kept for inspection."
    },
    balance: {
      title: "Calibration of Weighing Balance — Comprehensive Guide",
      intro: "The analytical balance is one of the most critical instruments in the dairy laboratory. Its accuracy directly affects the preparation of standard solutions, reagent concentrations, and all gravimetric determinations. OIML (Organisation Internationale de Métrologie Légale) R76 classifies balances by accuracy class: I (special), II (high), III (medium), IIII (ordinary). Dairy laboratories require minimum Class II (readability ≥0.01 mg) for precise analytical work.",
      environmental_factors: "Environmental Factors Affecting Balance Performance: (1) Vibration — use anti-vibration granite table. (2) Air currents and drafts — keep balance enclosure closed during weighing. (3) Humidity — maintain 45-65% RH; hygroscopic samples gain mass during weighing. (4) Temperature fluctuations — avoid >1°C/hour change; allow 30 min warm-up for balance electronics. (5) Electrostatic charges — use ionizer for non-conductive materials (plastics, powders). (6) Magnetic fields — keep magnets and electromagnetic devices >50 cm away. (7) Altitude — air buoyancy correction required for density differences >0.1 g/cm³ or at high altitudes.",
      tests: [
        "<strong>Eccentricity Test (Corner Load Test):</strong> Place a standard weight (approximately 1/3 of the balance maximum capacity) in the center of the pan, then at 4 corners successively. Record all 5 readings. Maximum permissible eccentricity error = 2 × d (where d = readability). This tests the uniformity of load cell sensitivity across the weighing pan surface.",
        "<strong>Repeatability Test (Reproducibility Test):</strong> Load and unload the same standard weight (approximately maximum capacity) 10 consecutive times. Calculate the standard deviation (SD) of the 10 readings. Acceptable SD < 0.41 × d (OIML R76 criterion). This identifies random errors and short-term drift.",
        "<strong>Linearity Test (Span Calibration):</strong> Use certified OIML weights at approximately 25%, 50%, 75%, and 100% of maximum capacity. For each weight, calculate the error = indicated reading - true mass. Plot error vs. load. Maximum permissible linearity error = ±2 × d. Non-linearity may indicate worn load cell or mechanical damage.",
        "<strong>Sensitivity Test:</strong> The minimum mass increment the balance can reliably detect. Add a small calibrated mass (e.g., 1 mg) to a load near maximum capacity. The balance should indicate a change of exactly 1 × d. This tests the sensitivity reciprocal (SR = maximum load / resolution).",
        "<strong>Zero Drift Test:</strong> Allow balance 30 minutes warm-up. Zero the balance. Without adding any load, check zero reading after 60 minutes. Maximum acceptable zero drift: <2 × d per hour. High drift indicates temperature instability, vibration, or faulty electronics."
      ],
      calibration_weights: "Calibration Weight Classes (OIML R111-1): E1 (±0.001% tolerance, platinum-iridium) → E2 → F1 → F2 → M1 → M2 → M3. For dairy laboratory analytical balances, use minimum F2 class weights. Weights must be accompanied by calibration certificates from an NABL-accredited laboratory and should be recertified annually. Handle with clean forceps only — never with bare hands (skin oils affect mass).",
      buoyancy_correction: "Air Buoyancy Correction: When comparing masses of materials with significantly different densities, air buoyancy correction is required. Formula: True mass = Apparent mass × [1 - ρ_air/ρ_reference] / [1 - ρ_air/ρ_sample], where ρ_air ≈ 0.0012 g/cm³ at standard conditions. This correction is significant when density difference exceeds 0.1 g/cm³."
    },
    chemical: {
      title: "Chemical Standardization — Primary and Secondary Standards",
      intro: "The accuracy of all titrimetric analyses in the dairy laboratory — including acidity determination, EDTA titrations, and potentiometric methods — depends fundamentally on the exact concentration of the titrant solutions used. Chemical standardization is the process of determining this concentration with high precision by titrating against a primary standard substance.",
      primary_standards_list: "Common Primary Standards Used in Dairy Laboratory",
      anhydrous_na2co3: "Anhydrous Sodium Carbonate (Na2CO3): MW = 105.99 g/mol, Equivalent weight = 52.995 g/eq (n-factor = 2). Used to standardize hydrochloric and sulfuric acid solutions. Preparation: Heat AR grade Na2CO3 in a crucible at 260°C for 2 hours in a muffle furnace to drive off all moisture and convert NaHCO3 to Na2CO3. Cool in desiccator. Weigh accurately on analytical balance. Dissolve in freshly boiled, cooled distilled water (CO2-free). Indicator: Methyl orange; Endpoint: Yellow → Orange-red. Formula: Molarity of HCl = (W × 1000) / (MW/2 × V_HCl).",
      potassium_dichromate: "Potassium Dichromate (K2Cr2O7): MW = 294.19 g/mol. An excellent primary standard for sodium thiosulfate solutions (used in iodometric titrations for oxidizing agents). Stability: Very stable, non-hygroscopic. Method: Dissolve accurately weighed K2Cr2O7 in acid medium, add excess KI, and titrate the liberated iodine with Na2S2O3. Calculate Na2S2O3 normality from stoichiometry.",
      oxalic_acid: "Oxalic Acid (H2C2O4·2H2O): MW = 126.07 g/mol. Used to standardize KMnO4 solutions (for iodometric and cerimetric titrations). KMnO4 acts as its own indicator (purple → colorless at endpoint). Method: Weigh accurately, dissolve in dilute H2SO4. Heat to 60-70°C. Titrate with KMnO4 until faint pink persists 30 seconds.",
      naoh_standardization: "NaOH Standardization (Secondary Standard): NaOH is strongly hygroscopic and absorbs CO2 from air, forming Na2CO3 — making it impossible to prepare directly as a primary standard. Standardization against Potassium Hydrogen Phthalate (KHP, MW = 204.23 g/mol): Dry KHP at 110°C for 2 hours. Dissolve accurately weighed KHP in CO2-free distilled water. Add 2-3 drops phenolphthalein indicator. Titrate with NaOH until faint pink persists 30 seconds. NaOH Normality = (W_KHP × 1000) / (204.23 × V_NaOH). Note: Store standardized NaOH in bottles with CO2-absorbing soda lime guards on the vent.",
      h2so4_standardization: "H2SO4 Standardization (Secondary Standard): Dilute concentrated H2SO4 (98% w/w, d = 1.84 g/mL) to approximately 0.1 N in a volumetric flask. Standardize against anhydrous Na2CO3. H2SO4 Normality = (W_Na2CO3 × 1000) / (53.00 × V_H2SO4), where 53.00 = equivalent weight of Na2CO3 (MW/2). Always add acid to water, never water to acid.",
      edta_standardization: "EDTA Standardization (for Ca²⁺ and Mg²⁺ determination in dairy effluents and water): Primary standard: Dried CaCO3 (oven at 200°C, 2 hours). Dissolve in minimum 6 M HCl, then dilute with distilled water and neutralize. Titrate with EDTA using Eriochrome Black T indicator in pH 10 ammoniacal buffer. Endpoint: Red → Blue. EDTA Molarity = (mass of CaCO3 / 100.09) / volume of EDTA (L).",
      shelf_life: "Standardized Solution Shelf Life and Storage: NaOH (0.1 N): 2-4 weeks in tightly closed polyethylene bottles with CO2 guard. HCl (0.1 N): 6 months in glass bottles. Na2S2O3 (0.1 N): 2-4 weeks (susceptible to microbial degradation; add small amount of Na2CO3 as preservative). KMnO4 (0.1 N): 1-2 months in brown glass bottle. EDTA (0.01 M): 3-6 months in polyethylene. Always label with: date of standardization, exact normality/molarity, standardized against, and expiry date."
    },
    spectrophotometer: {
      title: "Spectrophotometer Calibration — UV-Visible Spectrophotometry",
      intro: "UV-Vis spectrophotometers are used in dairy laboratories for: protein quantification (Bradford assay, Kjeldahl digest colorimetry), detection of added preservatives (hydrogen peroxide at 412 nm, formalin at 560 nm), antibiotic screening, aflatoxin M1 detection, and color measurement. Spectrophotometer calibration ensures accuracy of wavelength scale, photometric linearity, and stray light levels.",
      beer_lambert_law: "Beer-Lambert Law: A = ε × c × l, where A = absorbance (log₁₀ I₀/I, dimensionless), ε = molar absorption coefficient (L/mol/cm), c = concentration (mol/L), l = optical path length (cm). This law predicts a linear relationship between absorbance and concentration — the fundamental basis of quantitative spectrophotometry. Deviations occur at high concentrations (>0.8 A), due to molecular interactions, and from instrument stray light. Always work within Beer-Lambert validity range (typically 0.1-0.8 A).",
      wavelength_calibration: "Wavelength Calibration: Use NIST SRM 2065 (didymium glass filter) or holmium oxide glass/solution filters with certified absorption maxima: Holmium oxide peaks at 241.5, 279.4, 287.6, 333.7, 360.9, 418.5, 453.4, 536.2, 637.5 nm. Mercury lamp emission lines: 253.65, 296.73, 365.02 nm (UV). Acceptable wavelength accuracy: ±1.0 nm for routine UV-Vis; ±0.2 nm for precision spectrophotometry.",
      photometric_calibration: "Photometric (Absorbance) Calibration: Use NIST SRM 930e (neutral density glass filters, certified A values at 440, 465, 546.1, 590, 635 nm) or NIST SRM 935a (potassium dichromate solution). K2Cr2O7 (60.06 mg/L in 0.0001 M HClO4): Expected A at 350 nm = 0.757 ± 0.010; at 313 nm = 0.536 ± 0.010. Photometric linearity: prepare a series of certified solutions at 0.1, 0.2, 0.4, 0.6, 0.8, 1.0 AU. Plot measured vs. expected A. Correlation coefficient R² > 0.9999 required.",
      stray_light: "Stray Light Measurement: Stray light causes Beer-Lambert deviations at high absorbances (A > 2) and in the UV region. Test: NaI solution (12 g/L in water) at 220 nm should give A > 2.0 (indicating >99% light absorption, hence stray light < 1%). For modern double-beam instruments, stray light specification is typically <0.01% at 220 nm. Potassium chloride (12 g/L) at 198 nm is another common stray light test solution.",
      linearity: "Linearity and Working Range Verification: Prepare certified solutions at multiple concentrations spanning the expected working range. Plot absorbance vs. concentration. Calculate correlation coefficient (R²), slope, and y-intercept by linear regression. R² ≥ 0.9999 required for pharmaceutical grade; R² ≥ 0.999 for routine dairy analysis. Y-intercept should be within ±0.005 AU of zero. Define the working range as the concentration range within which R² meets specification."
    },
    ph_meter: {
      title: "pH Meter Calibration — Electrochemical Principles and Practice",
      intro: "pH meters are used in dairy laboratories for: milk freshness assessment (fresh milk pH 6.6-6.8), mastitis milk detection (pH >6.8), starter culture activity monitoring, yogurt set monitoring (target pH 4.5-4.6), CIP solution strength verification, and effluent pH monitoring. The glass electrode pH measurement system is based on the Nernst equation and requires careful calibration.",
      nernst_equation: "Nernst Equation Foundation: E = E°_cell - (RT/F) × ln([H+]) = E°_cell + 0.05916 × pH (at 25°C). At 25°C (298.15 K), the theoretical electrode slope (Nernst slope) = 2.303 RT/F = 59.16 mV/pH unit. At 37°C (310.15 K), slope = 61.54 mV/pH unit. Temperature significantly affects slope — automatic temperature compensation (ATC) or manual temperature correction is essential.",
      buffer_standards: "NIST Primary pH Buffer Standards: (1) pH 1.679 ± 0.010 at 25°C — tetroxalate buffer (0.05 mol/kg). (2) pH 4.005 ± 0.010 — potassium hydrogen phthalate (0.05 mol/kg). (3) pH 6.865 ± 0.010 — equimolal phosphate. (4) pH 7.413 ± 0.010 — phosphate buffer (0.008695/0.03043 mol/kg). (5) pH 9.180 ± 0.010 — borax buffer (0.01 mol/kg). For routine dairy work, use certified pH 4.00, 7.00, and 10.00 buffers.",
      two_point_calibration: "Two-Point Calibration Procedure: (1) Rinse and condition electrode in pH 7.00 buffer for 5 minutes. Press 'CAL' and wait until reading stabilizes. Meter sets zero offset correction (asymmetry potential compensation). (2) Rinse electrode with distilled water. Immerse in pH 4.00 buffer (for acidic samples) or pH 10.00 (for alkaline). Press 'CAL'. Meter calculates actual electrode slope. (3) Accept calibration only if slope is 95-105% of theoretical (56.1-62.1 mV/pH at 25°C). Slope <95% indicates electrode aging, protein fouling, or damaged glass membrane.",
      milk_ph: "Milk pH Reference Values and Significance: Fresh normal cow milk: 6.60-6.80 (slightly acidic due to casein, dissolved CO2, and phosphates). Colostrum: 6.0-6.3 (lower due to high protein and less buffering capacity). Mastitis milk: >6.8 (alkaline shift due to increased serum proteins and sodium ions). Fermented milk (yogurt): 4.0-4.6. UHT milk (fresh): 6.7-6.9. Note: Milk pH rises in late-evening samples due to CO2 loss — analyze fresh samples for accurate results.",
      maintenance: "pH Electrode Maintenance Protocol: (1) Storage: Always store in pH 4 buffer or 3M KCl solution — never dry store. (2) Conditioning: Before use, condition in pH 7 buffer for 15-30 minutes. (3) Between measurements: Rinse with distilled water, blot (do not rub) with absorbent tissue. (4) Cleaning protein-fouled electrode: Soak in 0.1 M HCl for 5-10 minutes, then re-condition in buffer. (5) Reference junction: Check for blockage — slow/erratic response indicates junction clogging. (6) Replace electrode: When slope consistently <90% of theoretical after cleaning and conditioning."
    },
    uncertainty: {
      title: "Measurement Uncertainty — GUM (Guide to Expression of Uncertainty in Measurement)",
      intro: "Measurement uncertainty is a quantitative parameter that characterizes the dispersion of values that could reasonably be attributed to the measurand. ISO/IEC 17025:2017 requires all NABL-accredited testing laboratories to estimate and report measurement uncertainty with test results. Understanding uncertainty is fundamental to interpreting whether two results differ significantly and to setting fitness-for-purpose specifications.",
      type_a: "Type A Standard Uncertainty (Statistical Evaluation): Evaluated by statistical analysis of repeated measurements. Formula: u_A = s/√n, where s = standard deviation of the measurement series, n = number of observations. The standard uncertainty represents one standard deviation of the probability distribution. Example: 10 replicate fat test readings: mean = 3.50%, s = 0.05%. u_A = 0.05/√10 = 0.0158%. More observations reduce Type A uncertainty but not Type B.",
      type_b: "Type B Standard Uncertainty (Non-statistical Evaluation): Evaluated from information other than statistical analysis — calibration certificates, manufacturer specifications, published data, expert judgment, or physical laws. Distribution shapes: Rectangular (uniform) distribution → standard uncertainty = half-width/√3. Normal distribution → standard uncertainty = stated uncertainty/coverage factor k. Example: Balance calibration certificate states ±0.001 g at k=2 → standard uncertainty = 0.001/2 = 0.0005 g.",
      combined_uncertainty: "Combined Standard Uncertainty (u_c): When measurement result depends on multiple input quantities, combine their uncertainties using propagation of uncertainty. For independent sources: u_c = √(Σcᵢ² × uᵢ²), where cᵢ = sensitivity coefficient (partial derivative of output with respect to input i), uᵢ = standard uncertainty of input i. Expanded Uncertainty: U = k × u_c (k = 2 for approximately 95% confidence level with normal distribution). Report: Result = Value ± U (units), k=2.",
      fat_test_example: "Uncertainty Budget Example — Gerber Fat Test: (1) Pipette volume: ±0.03 mL → u = 0.03/(2√3) = 0.0087 mL → impact on fat ≈ 0.025%. (2) Butyrometer reading: human error ±0.05% → u = 0.05/√3 = 0.029%. (3) Centrifuge speed variation ±50 rpm → fat separation effect ≈ ±0.015%. (4) Temperature of fat column at reading ±1°C → impact ≈ ±0.01%. Combined standard uncertainty u_c = √(0.025² + 0.029² + 0.015² + 0.01²) ≈ 0.043%. Expanded uncertainty U (k=2) = 0.086% ≈ 0.09% fat. Therefore, report fat as: X.XX ± 0.09% fat (95% confidence, k=2)."
    },
    documentation: {
      title: "Documentation and Records — Laboratory Quality Management",
      intro: "ISO/IEC 17025:2017 and FSSAI regulations mandate systematic documentation of all calibration activities. Proper records provide traceability evidence, enable trend analysis, support root cause investigation during disputes, and demonstrate compliance during audits. All records should be indelible (ink, not pencil), dated, and signed.",
      calibration_record: "Required Elements in a Calibration Record: (1) Unique instrument identifier (ID number/serial number). (2) Instrument description (make, model, range, resolution). (3) Calibration date and time. (4) Calibration method reference (e.g., IS:1223, ISO 4787). (5) Environmental conditions (temperature, humidity, atmospheric pressure). (6) Reference standards used (ID, certificate number, traceability). (7) Pre-adjustment and post-adjustment readings. (8) Calibration results with acceptance criteria comparison. (9) Measurement uncertainty. (10) Calibration status (PASS/FAIL). (11) Next calibration due date. (12) Technician signature and supervisor countersignature. (13) Any corrective actions taken.",
      calibration_schedule: "Recommended Calibration Frequency: Analytical balance — monthly internal verification with certified weights; annual external NABL calibration. Milk pipettes — each use batch check + quarterly full calibration. Butyrometers — monthly in-use check + semi-annual full calibration. Lactometers — monthly check with standard solution. Thermometers — monthly ice-point verification; annual full calibration. pH meters — daily two-point buffer calibration; monthly electrode slope check; annual instrument calibration. Spectrophotometers — daily wavelength and zero check; quarterly full calibration including wavelength accuracy and photometric linearity.",
      sop_requirement: "SOP Requirements per ISO/IEC 17025: Each calibration procedure must have a corresponding documented SOP that includes: objective, scope, applicable standards/references, personnel responsibilities (authorized users), required equipment and materials (with specifications), environmental requirements, step-by-step procedure with critical control points, acceptance/rejection criteria, required calculations (with example), corrective actions if out of specification, and documentation requirements (forms to complete, records to file).",
      out_of_tolerance: "Out-of-Tolerance (OOT) Response Protocol: (1) Immediately label instrument 'DO NOT USE — Under Investigation' and remove from service. (2) Determine the date of last successful calibration — all results obtained since that date may be affected. (3) Conduct impact assessment: which tests, which samples, which customers were affected. (4) Issue non-conformance report (NCR). Notify affected customers if results may be invalid. (5) Investigate root cause: physical damage, drift, environmental exposure, improper use, or simply scheduled calibration missed. (6) Repair/adjust instrument as needed. (7) Perform new calibration. (8) Verify pass before returning to service. (9) Document entire OOT event in non-conformance log with root cause and preventive action."
    },
    sop: {
      title: "Standard Operating Procedures (SOPs) — Laboratory Calibration Management",
      intro: "Standard Operating Procedures are written, step-by-step instructions for performing specific tasks in a consistent, reproducible, and documented manner. Well-written SOPs reduce operator-dependent variation, support training of new staff, ensure regulatory compliance, and provide a foundation for continuous improvement. Every calibration activity in an ISO/IEC 17025-accredited laboratory must be covered by an approved SOP.",
      sop_elements: "Essential Elements of a Calibration SOP: (1) Header — Title, unique SOP number, version number, effective date, prepared by, reviewed by, approved by. (2) Purpose — What is being achieved and why. (3) Scope — Which instruments, departments, or products this SOP covers. (4) Definitions — All technical terms used. (5) Responsibilities — Who is responsible for performing, checking, and approving. (6) Materials and Equipment — With specifications and part numbers. (7) Safety Precautions — Chemical hazards (H2SO4, mercury), PPE requirements, disposal procedures. (8) Detailed Step-by-Step Procedure — Numbered, precise, unambiguous. (9) Calculations — All formulas with worked examples. (10) Acceptance/Rejection Criteria — Specific numeric limits. (11) Corrective Actions — What to do if criteria not met. (12) Documentation — Exactly which forms to complete, where records are filed, retention period. (13) References — All standards, guidelines, and literature cited.",
      training_requirements: "Competency Requirements for Calibration Personnel: Before independently performing any calibration: (1) Read and sign understanding of relevant SOP. (2) Complete 3 supervised calibrations under observation of a qualified technician. (3) Pass a written competency test (minimum 80% score). (4) Pass a practical demonstration: perform calibration independently and achieve results within specification. (5) Document training in the Training Record with date, SOP number, version, supervisor signature. Annual retraining mandatory. Immediate retraining required after SOP revision or after OOT event attributable to operator error.",
      change_control: "Document Change Control Process: SOPs must only be modified through a controlled change process: (1) Submit Change Request Form with justification (new method, regulatory change, problem identified). (2) Technical review by laboratory supervisor or quality manager — assess impact on existing data and current practice. (3) Formal approval by Laboratory Director or Quality Manager (written signature). (4) Archive superseded version (mark 'OBSOLETE', retain as per records retention policy). (5) Issue and distribute new version — remove all copies of old version from work areas. (6) Retrain all affected personnel — document retraining. (7) Enter change in Master SOP List with version history. (8) Effective date of new SOP must be after completion of all retraining."
    }
  }
};
