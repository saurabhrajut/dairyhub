export const testingMethodsContent = {
  hi: {
    mainTitle: "Chromatographic Testing Methods (SOPs)",
    description:
      "Dairy industry ke liye detailed Standard Operating Procedures (SOPs): HPLC se Aflatoxin M1 analysis aur GC se Fatty Acid Profiling (FAMEs).",
    introduction: {
      title: "Testing Methods ka Overview",
      content: `<p>Dairy analysis mein accuracy aur sensitivity critical hoti hai. Ye section industry-standard testing protocols (ISO/AOAC based) ko cover karta hai. In methods ko follow karke contaminants (jaise toxins) aur nutritional composition (fats) ko precisely measure kiya ja sakta hai.</p>`
    },
    aflatoxinMethod: {
      title: "Method 1: HPLC se Milk mein Aflatoxin M1 ka Determination",
      content: `<h4>1. Principle (Siddhant)</h4>
      <p>Aflatoxin M1 ek carcinogenic metabolite hai jo un cows ke milk mein paya jata hai jinhone Aflatoxin B1 contaminated feed khaya ho. Is method mein hum <strong>Immunoaffinity Column (IAC)</strong> use karte hain purification ke liye, aur phir <strong>Reverse-Phase HPLC</strong> ke saath <strong>Fluorescence Detector (FLD)</strong> use karte hain detection ke liye, kyunki Aflatoxins natural fluorescence show karte hain.</p>
      

      <h4>2. Equipment aur Reagents</h4>
      <ul>
        <li><strong>Instrument:</strong> HPLC system with Fluorescence Detector (FLD).</li>
        <li><strong>Column:</strong> C18 Analytical Column (e.g., 250 mm x 4.6 mm, 5 μm).</li>
        <li><strong>Cleanup:</strong> Immunoaffinity Columns (IAC) specific for Aflatoxin M1.</li>
        <li><strong>Mobile Phase:</strong> Water : Acetonitrile : Methanol (60:20:20 v/v).</li>
        <li><strong>Solvents:</strong> HPLC Grade Acetonitrile, Methanol, Pure Water.</li>
      </ul>

      <h4>3. Sample Preparation (Step-by-Step)</h4>
      <ol>
        <li><strong>Separation:</strong> Milk sample ko centrifuge karein (3500 rpm, 10 mins) aur upar se fat layer remove kar dein (Skimmed milk banayein).</li>
        <li><strong>Loading:</strong> Skimmed milk (approx 50-100 mL) ko Immunoaffinity Column (IAC) ke through pass karein flow rate 1-2 mL/min par. Antibodies toxin ko bind kar lengi.</li>
        <li><strong>Washing:</strong> Column ko water se wash karein taaki impurities nikal jayein.</li>
        <li><strong>Elution:</strong> Pure Acetonitrile (3-5 mL) pass karke bound Aflatoxin M1 ko elute (collect) karein.</li>
        <li><strong>Concentration:</strong> Eluate ko nitrogen stream ke neeche dry karein aur mobile phase mein reconstitute karein.</li>
      </ol>

      <h4>4. HPLC Conditions (Instrument Setup)</h4>
      <ul>
        <li><strong>Flow Rate:</strong> 1.0 mL/min.</li>
        <li><strong>Injection Volume:</strong> 20-50 μL.</li>
        <li><strong>Detector Settings:</strong> Excitation Wavelength: 365 nm, Emission Wavelength: 435 nm.</li>
        <li><strong>Retention Time:</strong> M1 peak typically appears around 8-12 minutes (depending on column).</li>
      </ul>

      <h4>5. Calculation</h4>
      <p>Result (ppb) = (Peak Area Sample × Conc. Standard) / (Peak Area Standard × Concentration Factor).</p>`
    },
    fameMethod: {
      title: "Method 2: GC se Fatty Acid Profile (FAMEs) Analysis",
      content: `<h4>1. Principle (Siddhant)</h4>
      <p>Milk fat triglycerides (TG) se bana hota hai jo non-volatile hote hain aur directly GC (Gas Chromatography) par run nahi ho sakte. Is method mein hum pehle fat extract karte hain aur phir <strong>Transesterification</strong> process se unhe volatile <strong>Fatty Acid Methyl Esters (FAMEs)</strong> mein convert karte hain. Phir capillary GC column par separate karte hain.</p>
      

      <h4>2. Application</h4>
      <p>Ye method Ghee adulteration check karne (vegetable oil detection), Omega-3 fatty acids measure karne, aur Butyric acid content check karne ke liye gold standard hai.</p>

      <h4>3. Procedure (Step-by-Step)</h4>
      <ul>
        <li><strong>Step A: Fat Extraction (Rose-Gottlieb Method):</strong> Ammonia aur alcohol use karke protein dissolve karein, phir Diethyl ether/Petroleum ether se fat extract karein. Solvent evaporate karke pure fat obtain karein.</li>
        
        <li><strong>Step B: Methyl Ester Preparation (FAMEs):</strong>
          <ul>
            <li>Extracted fat (approx 100 mg) lein.</li>
            <li>Usmein Methanolic KOH ya Sodium Methoxide add karein.</li>
            <li>Isse Fatty acids (C4:0 se C20:0 tak) methyl esters mein convert ho jayenge.</li>
            <li>Hexane add karke FAMEs ko organic layer mein extract karein.</li>
          </ul>
        </li>

        <li><strong>Step C: GC Analysis:</strong>
          <ul>
            <li><strong>Column:</strong> High Polarity Capillary Column (e.g., CP-Sil 88 or SP-2560, 100m length is preferred for isomer separation).</li>
            <li><strong>Carrier Gas:</strong> Nitrogen or Helium/Hydrogen (Flow rate ~1 mL/min).</li>
            <li><strong>Injector:</strong> Split injection mode (Split ratio 1:50 or 1:100). Temp: 250°C.</li>
            <li><strong>Detector:</strong> Flame Ionization Detector (FID) at 260°C.</li>
          </ul>
        </li>
      </ul>

      <h4>4. Temperature Programming (Critical)</h4>
      <p>FAMEs ko separate karne ke liye oven temperature badhana padta hai: Initial 60°C (hold 1 min) → Ramp to 175°C → Final ramp to 240°C. Total run time approx 45-60 mins hota hai taaki Short Chain Fatty Acids (Butyric) aur Long Chain (Stearic/Oleic) sab separate ho jayein.</p>`
    },
    validationParameters: {
      title: "Method Validation Parameters",
      content: `<p>Koi bhi testing method tabhi valid maana jata hai jab wo neeche diye gaye criteria meet kare:</p>
      <ul>
        <li><strong>Linearity:</strong> Calibration curve ka Correlation Coefficient (R²) > 0.999 hona chahiye.</li>
        <li><strong>Recovery:</strong> Spiked sample (known amount added) ki recovery 80-120% ke beech honi chahiye.</li>
        <li><strong>LOD/LOQ:</strong> Aflatoxin M1 ke liye Limit of Detection (LOD) approx 0.005 ppb honi chahiye (regulatory limits are very strict).</li>
        <li><strong>Repeatability:</strong> Same sample ko 6 baar run karne par RSD < 5% honi chahiye.</li>
      </ul>`
    }
  },

  en: {
    mainTitle: "Standardized Testing Methods",
    description:
      "Comprehensive Standard Operating Procedures (SOPs) for chromatography in dairy: Aflatoxin M1 by HPLC and Fatty Acid Profiling (FAMEs) by GC.",
    introduction: {
      title: "Overview of Testing Protocols",
      content: `<p>Precision and compliance are paramount in dairy analysis. This section outlines industry-standard protocols (aligned with ISO and AOAC methods) for quantifying contaminants and analyzing nutritional composition using advanced chromatographic techniques.</p>`
    },
    aflatoxinMethod: {
      title: "Method 1: Determination of Aflatoxin M1 in Milk by HPLC",
      content: `<h4>1. Principle</h4>
      <p>Aflatoxin M1 is a hepatocarcinogenic metabolite found in milk from livestock that have ingested Aflatoxin B1-contaminated feed. The method involves purification using an <strong>Immunoaffinity Column (IAC)</strong> containing specific antibodies, followed by quantification using <strong>Reverse-Phase HPLC</strong> with a <strong>Fluorescence Detector (FLD)</strong>, leveraging the natural fluorescence of the toxin.</p>
      

      <h4>2. Equipment and Reagents</h4>
      <ul>
        <li><strong>Instrument:</strong> HPLC system equipped with a Fluorescence Detector.</li>
        <li><strong>Column:</strong> C18 Analytical Column (e.g., 250 mm x 4.6 mm, 5 μm particle size).</li>
        <li><strong>Cleanup:</strong> Immunoaffinity Columns (IAC) specific for Aflatoxin M1.</li>
        <li><strong>Mobile Phase:</strong> Isocratic mixture of Water : Acetonitrile : Methanol (60:20:20 v/v).</li>
        <li><strong>Solvents:</strong> HPLC Grade Acetonitrile, Methanol, and Deionized Water (Milli-Q).</li>
      </ul>

      <h4>3. Sample Preparation Protocol</h4>
      <ol>
        <li><strong>Defatting:</strong> Centrifuge the milk sample (3500 rpm for 10 mins) and remove the upper fat layer to obtain skimmed milk.</li>
        <li><strong>IAC Loading:</strong> Pass 50-100 mL of skimmed milk through the Immunoaffinity Column at a slow flow rate (1-2 mL/min). The specific antibodies will capture the M1 toxin.</li>
        <li><strong>Washing:</strong> Wash the column with water to remove non-specific impurities (sugars, proteins).</li>
        <li><strong>Elution:</strong> Elute the bound Aflatoxin M1 using 3-5 mL of pure Acetonitrile (breaking the antibody-toxin bond).</li>
        <li><strong>Concentration:</strong> Evaporate the eluate under a gentle stream of nitrogen and reconstitute in the mobile phase for injection.</li>
      </ol>

      <h4>4. HPLC Operational Conditions</h4>
      <ul>
        <li><strong>Flow Rate:</strong> 1.0 mL/min.</li>
        <li><strong>Injection Volume:</strong> 20-50 μL.</li>
        <li><strong>Detection:</strong> Fluorescence - Excitation: 365 nm, Emission: 435 nm.</li>
        <li><strong>Retention Time:</strong> The M1 peak typically elutes between 8 and 12 minutes.</li>
      </ul>

      <h4>5. Calculation</h4>
      <p>Concentration (ppb) = (Sample Peak Area × Standard Conc.) / (Standard Peak Area × Concentration Factor).</p>`
    },
    fameMethod: {
      title: "Method 2: Fatty Acid Profiling (FAMEs) by GC-FID",
      content: `<h4>1. Principle</h4>
      <p>Milk fats are primarily triglycerides, which are high-molecular-weight and non-volatile, making them unsuitable for direct Gas Chromatography (GC). This method involves <strong>fat extraction</strong> followed by <strong>Transesterification</strong> to convert triglycerides into volatile <strong>Fatty Acid Methyl Esters (FAMEs)</strong>. These are then separated on a capillary column based on carbon chain length and unsaturation.</p>
      

      <h4>2. Application Significance</h4>
      <p>This is the definitive method for verifying milk purity (detecting vegetable oil adulteration via phytosterols or fatty acid ratios), quantifying Omega-3/Omega-6 fatty acids, and measuring Butyric acid (C4:0) content.</p>

      <h4>3. Procedure (Step-by-Step)</h4>
      <ul>
        <li><strong>Step A: Fat Extraction (Rose-Gottlieb):</strong> Digestion with ammonia and ethanol, followed by extraction with diethyl ether and petroleum ether to isolate pure milk fat.</li>
        
        <li><strong>Step B: Preparation of Methyl Esters (FAMEs):</strong>
          <ul>
            <li>Dissolve ~100 mg of extracted fat in a solvent (e.g., hexane).</li>
            <li>Add transesterification reagent (e.g., Methanolic KOH or Sodium Methoxide).</li>
            <li>The reaction converts glycerol-bound fatty acids into methyl esters (volatile).</li>
            <li>Extract the FAMEs layer using hexane and dry over sodium sulfate.</li>
          </ul>
        </li>

        <li><strong>Step C: GC-FID Analysis:</strong>
          <ul>
            <li><strong>Column:</strong> High Polarity Fused Silica Capillary Column (e.g., CP-Sil 88 or SP-2560, 100m x 0.25mm ID). Long columns are essential to resolve cis/trans isomers.</li>
            <li><strong>Carrier Gas:</strong> Nitrogen, Helium, or Hydrogen (Linear velocity ~20 cm/sec).</li>
            <li><strong>Injector:</strong> Split/Splitless mode (Split ratio 1:50). Temperature: 250°C.</li>
            <li><strong>Detector:</strong> Flame Ionization Detector (FID) at 260°C.</li>
          </ul>
        </li>
      </ul>

      <h4>4. Temperature Programming</h4>
      <p>A multi-ramp temperature gradient is required: Initial 60°C (1 min hold) → Ramp 5°C/min to 175°C → Ramp 4°C/min to 240°C (Hold 10 mins). This ensures separation of everything from short-chain Butyric acid (C4) to long-chain unsaturated acids (C20+).</p>`
    },
    validationParameters: {
      title: "Quality Assurance & Validation",
      content: `<p>For a method to be considered valid, it must meet rigorous performance criteria:</p>
      <ul>
        <li><strong>Linearity:</strong> The calibration curve must show a correlation coefficient (R²) > 0.999.</li>
        <li><strong>Recovery:</strong> Recovery rates from spiked samples should fall within the 80-120% range.</li>
        <li><strong>Sensitivity (LOD/LOQ):</strong> For Aflatoxin M1, the Limit of Detection (LOD) should be ~0.005 ppb to meet EU/FSSAI regulations.</li>
        <li><strong>Precision:</strong> Relative Standard Deviation (RSD) for repeatability (n=6) should be < 5%.</li>
      </ul>`
    }
  }
};
