
export const pasteurizationContent = {
    en: {
        title: "Pasteurization",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Introduction to Pasteurization</h3>
            <p>Pasteurization is a critical heat treatment process used in the dairy industry to ensure the safety and extend the shelf life of milk and other liquid dairy products. It is named after the French scientist Louis Pasteur, who discovered that heating beverages could kill harmful microorganisms. The process involves heating milk to a specific temperature for a set period and then rapidly cooling it.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. Objectives of Pasteurization</h3>
            <p>The goals of pasteurization are twofold and are of paramount importance for public health and commerce.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Public Health Safety (Primary Objective):</strong> The main goal is to make milk safe for human consumption by destroying all pathogenic (disease-causing) microorganisms. Raw milk can harbor dangerous bacteria such as <i>Mycobacterium tuberculosis</i> (causes tuberculosis), <i>Brucella</i> spp. (causes brucellosis), <i>Salmonella</i> (causes salmonellosis), <i>Listeria monocytogenes</i> (causes listeriosis), and pathogenic strains of <i>E. coli</i>. Pasteurization is specifically designed to eliminate these threats.</li>
                <li><strong>Extended Shelf Life (Secondary Objective):</strong> The process also destroys a large number of spoilage microorganisms (like psychrotrophic bacteria, yeasts, and molds). Additionally, the heat inactivates native milk enzymes like lipase, which can cause hydrolytic rancidity (a soapy off-flavor) during storage. By reducing the microbial load and inactivating enzymes, pasteurization significantly slows down the spoilage process and extends the refrigerated shelf life of the milk from a few hours to several days or weeks.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. Common Pasteurization Methods</h3>
            <h4 class="font-semibold mt-4 mb-2">1. High-Temperature Short-Time (HTST) Pasteurization</h4>
            <p>This is the most common method used in modern, large-scale dairy plants for market milk due to its efficiency and energy-saving capabilities.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> At least <strong>72°C (161°F)</strong></li>
                <li><strong>Time:</strong> For at least <strong>15 seconds</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> This time-temperature combination is scientifically validated to be lethal to the most heat-resistant, non-spore-forming pathogen commonly found in milk, <i>Coxiella burnetii</i> (the agent causing Q-fever). By ensuring the destruction of this organism, it is guaranteed that all other less-resistant pathogens are also destroyed. The short duration of heat exposure minimizes thermal damage to the milk's nutritional and sensory properties (flavor, color). This continuous process is carried out in a Plate Heat Exchanger (PHE).</p>

            <h4 class="font-semibold mt-4 mb-2">2. Low-Temperature Long-Time (LTLT) or Batch Pasteurization</h4>
            <p>This is an older method, now primarily used for smaller batches or for products like some specialty cheeses and ice cream mixes where a batch process is more suitable.</p>
             <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> At least <strong>63°C (145°F)</strong></li>
                <li><strong>Time:</strong> For at least <strong>30 minutes</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> The principle is the same as HTST—achieving a thermal kill of pathogens. The lower temperature requires a much longer holding time to achieve the same lethal effect. This process is carried out in a jacketed vat, where the milk is heated, held for the full duration, and then cooled. While effective, it is less energy-efficient and more time-consuming than HTST.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. The HTST Pasteurizer: Working Principle & Flow</h3>
            <p>An HTST pasteurizer is a sophisticated system designed for continuous, efficient heat treatment. Here is a step-by-step breakdown of its operation:</p>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">1. Balance Tank</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">2. Feed Pump</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">3. Regeneration Section (Heating)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">4. Heating Section</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-red-200 border border-red-400 rounded">5. Holding Tube (CCP)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-orange-100 border border-orange-300 rounded">6. Flow Diversion Valve (FDV)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">7. Regeneration Section (Cooling)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-cyan-100 border border-cyan-300 rounded">8. Cooling Section</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">9. Storage Tank</div>
            </div>

            <ol class="list-decimal list-outside pl-5 space-y-4 mt-6">
                <li><strong>Balance Tank:</strong> The process begins here. It's a small tank that receives raw milk and maintains a constant head of pressure for the feed pump. <strong>Scientific Reason:</strong> It ensures a consistent, uninterrupted flow of milk into the pasteurizer, which is crucial for maintaining the correct flow rate through the holding tube.</li>
                <li><strong>Feed Pump:</strong> A centrifugal pump that draws milk from the balance tank and pushes it forward into the system.</li>
                <li><strong>Regeneration Section:</strong> This is the most energy-efficient part of the pasteurizer. Here, the cold incoming raw milk flows on one side of the plates, while the hot, already pasteurized milk flows on the other side in the opposite direction. <strong>Scientific Reason:</strong> Heat is transferred from the hot milk to the cold milk. This pre-heats the raw milk (e.g., from 4°C to ~57°C) for free, reducing the energy needed in the heating section, and simultaneously pre-cools the hot milk, reducing the energy needed for final cooling. Modern regenerators can recover up to 95% of the heat energy.</li>
                <li><strong>Heating Section:</strong> The pre-heated milk then flows to the heating section, where it is heated to the full pasteurization temperature (e.g., 72°C) using hot water as the heating medium.</li>
                <li><strong>Holding Tube:</strong> After heating, the milk flows through a long pipe of a specific length and diameter, known as the holding tube. <strong>Scientific Reason:</strong> This tube is precisely engineered so that the milk takes at least 15 seconds (the minimum holding time) to travel from one end to the other. The flow rate, controlled by the feed pump, and the tube's dimensions are critical for ensuring this CCP is met.</li>
                <li><strong>Flow Diversion Valve (FDV):</strong> Located at the end of the holding tube, the FDV is an automated, three-way valve that acts as a safety device. A temperature sensor continuously monitors the milk temperature. 
                    <ul class='list-disc list-outside pl-5 mt-2 space-y-1'>
                        <li>If the temperature is at or above the set point (e.g., 72°C), the valve allows the properly pasteurized milk to flow forward to the regeneration section.</li>
                        <li>If the temperature drops below the set point for any reason, the valve automatically diverts the under-processed milk back to the balance tank for reprocessing. This ensures that no under-pasteurized milk ever reaches the final product.</li>
                    </ul>
                </li>
                <li><strong>Regeneration Section (Cooling):</strong> The properly pasteurized hot milk flows back through the regeneration section, giving up its heat to the incoming raw milk and getting pre-cooled in the process (e.g., from 72°C down to ~20°C).</li>
                <li><strong>Cooling Section:</strong> The pre-cooled milk then enters the final cooling section, where it is chilled with cold water or glycol to its final storage temperature of less than 5°C.</li>
                <li><strong>Storage Tank:</strong> The fully processed, chilled milk is then sent to a sterile storage tank, ready for packaging.</li>
            </ol>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IV. Verification of Pasteurization: The Alkaline Phosphatase (ALP) Test</h3>
            <p>To ensure pasteurization was successful, a reliable verification test is needed. The Alkaline Phosphatase (ALP) test is the universally accepted method for this.</p>
            <p><strong>Scientific Principle:</strong> ALP is a natural enzyme found in raw milk. Coincidentally, its heat resistance is slightly greater than that of the most heat-resistant common pathogenic bacterium found in milk, <i>Coxiella burnetii</i> (the organism that causes Q-fever). This means that a time-temperature combination sufficient to destroy ALP will have certainly been sufficient to destroy all common pathogens.</p>
            <p><strong>The Test:</strong> The test works by providing a phosphate substrate to a milk sample. If active ALP is present (indicating improper pasteurization or raw milk contamination), it will cleave the phosphate group from the substrate, which then produces a color change. The absence of a color change (a negative result) confirms that pasteurization was successful. A positive ALP test means the product is unsafe and must not be released.</p>
        `,
        simulation: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Advanced Milk Processing Plant Simulator</title>
                <style>
                    body { margin: 0; overflow: hidden; background-color: #1a1a1a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                    
                    /* SCADA Control Panel */
                    #ui-container {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 200px;
                        background: rgba(20, 30, 40, 0.95);
                        border-top: 4px solid #3498db;
                        color: white;
                        display: flex;
                        justify-content: space-around;
                        align-items: flex-start;
                        padding: 15px 10px;
                        box-sizing: border-box;
                        backdrop-filter: blur(5px);
                        z-index: 10;
                    }

                    .panel-section {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 0 15px;
                        border-right: 1px solid #444;
                        height: 100%;
                    }
                    .panel-section:last-child { border-right: none; }

                    h2 { margin: 0 0 10px 0; font-size: 14px; color: #3498db; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }

                    .digital-display {
                        background: #000;
                        color: #0f0;
                        font-family: 'Courier New', monospace;
                        font-size: 20px;
                        padding: 5px 10px;
                        border: 2px solid #555;
                        border-radius: 4px;
                        margin-bottom: 5px;
                        min-width: 70px;
                        text-align: center;
                    }
                    
                    .status-light {
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        background: #333;
                        border: 2px solid #555;
                        margin: 5px;
                        box-shadow: inset 0 0 5px #000;
                        display: inline-block;
                    }
                    .status-light.on { background: #00ff00; box-shadow: 0 0 8px #00ff00; }
                    .status-light.off { background: #ff0000; box-shadow: 0 0 8px #ff0000; }

                    /* Switches & Buttons */
                    .toggle-btn {
                        background: #444; color: #ccc; border: 1px solid #666;
                        padding: 5px 10px; cursor: pointer; border-radius: 4px; font-size: 12px; margin: 2px;
                        width: 100px;
                    }
                    .toggle-btn.active { background: #2ecc71; color: #fff; border-color: #27ae60; }
                    
                    button.main-start {
                        background: linear-gradient(to bottom, #2c3e50, #1a252f);
                        color: white; border: 2px solid #3498db;
                        padding: 10px 20px; font-weight: bold; cursor: pointer;
                        border-radius: 6px; transition: all 0.2s;
                    }
                    button.main-start:hover { background: #34495e; box-shadow: 0 0 15px rgba(52, 152, 219, 0.5); }
                    button.main-start.active { background: #e74c3c; border-color: #c0392b; }

                    /* View Controls (New) */
                    #view-controls {
                        position: absolute; top: 20px; right: 20px;
                        display: flex; flex-direction: column; gap: 5px;
                        z-index: 20; background: rgba(0,0,0,0.5); padding: 5px; border-radius: 8px;
                    }
                    #view-controls button {
                        background: rgba(50,50,50,0.8); color: white; border: 1px solid #777;
                        padding: 6px 12px; cursor: pointer; border-radius: 4px; font-size: 11px;
                        font-weight: bold; text-transform: uppercase; width: 80px;
                    }
                    #view-controls button:hover { background: #3498db; border-color: #3498db; }
                    .view-label { font-size: 10px; color: #aaa; text-align: center; margin-bottom: 2px; }

                    /* Slider */
                    input[type=range] { width: 120px; cursor: pointer; }

                    #tooltip {
                        position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
                        background: rgba(0,0,0,0.8); color: #fff; padding: 10px 20px;
                        border-radius: 20px; pointer-events: none; font-size: 14px; border: 1px solid #555; z-index: 10;
                    }
                    
                    .legend {
                        position: absolute; top: 20px; left: 20px;
                        background: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px;
                        font-size: 11px; color: #ddd; z-index: 10;
                    }
                    .legend-item { display: flex; align-items: center; margin-bottom: 4px; }
                    .color-box { width: 10px; height: 10px; margin-right: 8px; border: 1px solid #777; }

                </style>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
                <!-- OrbitControls -->
                <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"><\/script>
            </head>
            <body>

                <div class="legend">
                    <div class="legend-item"><div class="color-box" style="background:#ecf0f1"></div>Tanks / Pipes</div>
                    <div class="legend-item"><div class="color-box" style="background:#34495e"></div>Pump & Motors</div>
                    <div class="legend-item"><div class="color-box" style="background:#f39c12"></div>Regeneration / Separator</div>
                    <div class="legend-item"><div class="color-box" style="background:#8e44ad"></div>Homogenizer</div>
                    <div class="legend-item"><div class="color-box" style="background:#e74c3c"></div>Heating Section</div>
                    <div class="legend-item"><div class="color-box" style="background:#3498db"></div>Cooling Section</div>
                </div>

                <!-- View Controls -->
                <div id="view-controls">
                    <div class="view-label">CAMERA VIEW</div>
                    <button onclick="setView('front')">FRONT</button>
                    <button onclick="setView('back')">BACK</button>
                    <button onclick="setView('left')">LEFT</button>
                    <button onclick="setView('right')">RIGHT</button>
                    <button onclick="setView('top')">TOP</button>
                    <button onclick="setView('iso')">ISO</button>
                </div>

                <div id="tooltip">PLANT READY. Configure Machines & Start Pump.</div>

                <div id="ui-container">
                    <!-- 1. Main Power -->
                    <div class="panel-section">
                        <h2>Main Control</h2>
                        <div style="display:flex; align-items:center; margin-bottom:10px;">
                            <div id="status-pump" class="status-light"></div>
                            <span style="font-size:12px; margin-left:5px;">FEED PUMP</span>
                        </div>
                        <button class="main-start" id="btn-power" onclick="toggleSystem()">START PLANT</button>
                    </div>

                    <!-- 2. Processing Units -->
                    <div class="panel-section">
                        <h2>Processing Units</h2>
                        <button class="toggle-btn" id="btn-sep" onclick="toggleSep()">Separator: OFF</button>
                        <button class="toggle-btn" id="btn-homo" onclick="toggleHomo()">Homogenizer: OFF</button>
                        <div style="font-size:11px; color:#aaa; margin-top:5px; text-align:center;">
                            Separator removes cream.<br>Homo breaks fat.
                        </div>
                    </div>

                    <!-- 3. Heating -->
                    <div class="panel-section">
                        <h2>Pasteurizer</h2>
                        <div class="digital-display" id="temp-display">25.0°C</div>
                        <div style="display:flex; flex-direction:column; align-items:center;">
                            <label style="font-size:11px; color:#aaa;">Steam Valve</label>
                            <input type="range" min="0" max="100" value="0" oninput="updateSteam(this.value)">
                            <span id="steam-val-text" style="font-size:12px;">0%</span>
                        </div>
                    </div>

                    <!-- 4. FDV Status -->
                    <div class="panel-section">
                        <h2>FDV Logic</h2>
                        <div style="display:flex; gap:15px; margin-top:5px;">
                            <div style="text-align:center;">
                                <div id="light-fwd" class="status-light"></div>
                                <div style="font-size:10px;">SAFE</div>
                            </div>
                            <div style="text-align:center;">
                                <div id="light-div" class="status-light on"></div>
                                <div style="font-size:10px;">DIVERT</div>
                            </div>
                        </div>
                        <div style="font-size:11px; color:#aaa; margin-top:8px;">Set Point: 72.0°C</div>
                    </div>

                    <!-- 5. Output Log -->
                     <div class="panel-section" style="width: 180px; align-items:flex-start;">
                        <h2>Product Flow</h2>
                        <div id="flow-status" style="font-size: 11px; color: #0f0; line-height:1.4;">
                            System Idle.
                        </div>
                    </div>
                </div>

                <script>
                    // --- VARIABLES ---
                    let scene, camera, renderer, controls;
                    let fdvMesh, pumpMesh;
                    let particles = [];
                    
                    // State
                    let systemOn = false;
                    let sepOn = false;
                    let homoOn = false;
                    let steamVal = 0;
                    let currentTemp = 25.0;
                    const targetTempSet = 72.0;
                    let fdvState = 'DIVERT'; // DIVERT or FORWARD
                    
                    // Paths
                    let pathFeed, pathRegen, pathSepMain, pathSepCream, pathHomo, pathHeat, pathHold, pathFDV;
                    let pathSafe, pathDivert;
                    
                    // DOM
                    const elTemp = document.getElementById('temp-display');
                    const elSteam = document.getElementById('steam-val-text');
                    const elTooltip = document.getElementById('tooltip');
                    const elStatus = document.getElementById('flow-status');
                    const elLightFwd = document.getElementById('light-fwd');
                    const elLightDiv = document.getElementById('light-div');
                    const elPumpLight = document.getElementById('status-pump');
                    const btnSep = document.getElementById('btn-sep');
                    const btnHomo = document.getElementById('btn-homo');
                    const btnPower = document.getElementById('btn-power');

                    // --- INIT ---
                    function init() {
                        scene = new THREE.Scene();
                        scene.background = new THREE.Color(0x222222);
                        scene.fog = new THREE.Fog(0x222222, 30, 100);

                        camera = new THREE.PerspectiveCamera(45, window.innerWidth / (window.innerHeight - 200), 0.1, 1000);
                        
                        // Initial View (Front/South)
                        camera.position.set(0, 20, 35);

                        renderer = new THREE.WebGLRenderer({ antialias: true });
                        renderer.setSize(window.innerWidth, window.innerHeight - 200);
                        renderer.shadowMap.enabled = true;
                        document.body.appendChild(renderer.domElement);

                        // Orbit Controls
                        controls = new THREE.OrbitControls(camera, renderer.domElement);
                        controls.enableDamping = true;
                        controls.dampingFactor = 0.05;
                        controls.maxPolarAngle = Math.PI / 2 - 0.05; // Stay above ground

                        // Lighting
                        const amb = new THREE.AmbientLight(0xffffff, 0.4);
                        scene.add(amb);
                        
                        // Front Sun
                        const sun1 = new THREE.DirectionalLight(0xffffff, 0.7);
                        sun1.position.set(10, 30, 20);
                        sun1.castShadow = true;
                        scene.add(sun1);
                        
                        // Back Sun (Fill Light for Northern view)
                        const sun2 = new THREE.DirectionalLight(0xffbbaa, 0.4);
                        sun2.position.set(-10, 20, -20);
                        scene.add(sun2);

                        // --- BUILD PLANT ---
                        buildEnvironment();
                        buildTanks();
                        buildPump();
                        buildProcessingLine(); // Regen -> Sep -> Homo -> Heat
                        buildHoldingAndFDV();
                        buildPipes();
                        
                        // Paths
                        initPaths();

                        window.addEventListener('resize', onWindowResize);
                        animate();
                    }

                    // --- VIEW CONTROLS ---
                    window.setView = function(view) {
                        const dist = 35;
                        const h = 20;
                        let x=0, y=h, z=0;
                        
                        switch(view) {
                            case 'front': x=0; z=dist; break;
                            case 'back': x=0; z=-dist; break;
                            case 'left': x=-dist; z=0; break;
                            case 'right': x=dist; z=0; break;
                            case 'top': x=0; y=dist+15; z=1; break; // z=1 to avoid Gimbal lock
                            case 'iso': x=25; y=25; z=25; break;
                        }
                        
                        camera.position.set(x, y, z);
                        camera.lookAt(0, 0, 0);
                        controls.update(); // Important to sync controls
                    }

                    // --- BUILD FUNCTIONS ---

                    function buildEnvironment() {
                        const floorGeo = new THREE.PlaneGeometry(80, 60);
                        const floorMat = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.8 });
                        const floor = new THREE.Mesh(floorGeo, floorMat);
                        floor.rotation.x = -Math.PI / 2;
                        floor.receiveShadow = true;
                        scene.add(floor);

                        const grid = new THREE.GridHelper(80, 40, 0x444444, 0x222222);
                        scene.add(grid);
                    }

                    function buildTanks() {
                        const tankMat = new THREE.MeshStandardMaterial({ color: 0xbdc3c7, metalness: 0.7, roughness: 0.2 });
                        
                        // 1. Raw Milk Silo (Left)
                        createTank(-25, 5, 0, 3, 10, "RAW MILK", tankMat);
                        
                        // 2. Balance Tank (Mid-Left)
                        createTank(-15, 2.5, 0, 1.5, 3, "BALANCE", tankMat);
                        
                        // 3. Skim/Product Silo (Right)
                        createTank(20, 5, -5, 3, 10, "SKIM/PAST.", tankMat);

                        // 4. Cream Tank (Right Front)
                        createTank(20, 3, 5, 1.5, 5, "CREAM", tankMat);
                    }

                    function createTank(x, y, z, r, h, label, mat) {
                        const geo = new THREE.CylinderGeometry(r, r, h, 32);
                        const mesh = new THREE.Mesh(geo, mat);
                        mesh.position.set(x, y, z);
                        mesh.castShadow = true;
                        mesh.receiveShadow = true;
                        scene.add(mesh);

                        // Legs
                        const legGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8);
                        for(let i=0; i<4; i++) {
                            const leg = new THREE.Mesh(legGeo, mat);
                            const angle = (i * 90) * Math.PI/180;
                            leg.position.set(x + Math.cos(angle)*(r-0.2), 0.75, z + Math.sin(angle)*(r-0.2));
                            scene.add(leg);
                        }
                        
                        addLabel(label, x, h+1.5, z);
                    }

                    function buildPump() {
                        // Centrifugal Pump between Balance and Processing
                        const pumpGroup = new THREE.Group();
                        
                        // Motor
                        const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 1.5, 16), new THREE.MeshStandardMaterial({color:0x34495e}));
                        motor.rotation.z = Math.PI/2;
                        pumpGroup.add(motor);
                        
                        // Impeller Casing
                        const casing = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.5, 16), new THREE.MeshStandardMaterial({color:0x95a5a6}));
                        casing.rotation.x = Math.PI/2;
                        casing.position.set(0.8, 0, 0);
                        pumpGroup.add(casing);
                        
                        pumpGroup.position.set(-10, 0.8, 0);
                        pumpMesh = pumpGroup;
                        scene.add(pumpGroup);
                        addLabel("PUMP", -10, 2, 0);
                    }

                    function buildProcessingLine() {
                        // All units arranged linearly for clarity
                        
                        // 1. REGENERATION (PHE)
                        createPHEUnit(-5, 0, 0, 0xf39c12, "REGEN");
                        
                        // 2. SEPARATOR (Centrifuge)
                        const sepGroup = new THREE.Group();
                        const sepBody = new THREE.Mesh(new THREE.CylinderGeometry(1, 1.5, 2), new THREE.MeshStandardMaterial({color:0xecf0f1}));
                        const sepTop = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI*2, 0, Math.PI/2), new THREE.MeshStandardMaterial({color:0xecf0f1}));
                        sepTop.position.y = 1;
                        sepGroup.add(sepBody); sepGroup.add(sepTop);
                        sepGroup.position.set(-1, 2, 2); // Slightly forward
                        scene.add(sepGroup);
                        addLabel("SEPARATOR", -1, 4, 2);

                        // 3. HOMOGENIZER (Block)
                        const homoGroup = new THREE.Group();
                        const body = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2, 1.5), new THREE.MeshStandardMaterial({color:0x8e44ad}));
                        const pistons = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.8), new THREE.MeshStandardMaterial({color:0xffffff}));
                        pistons.rotation.z = Math.PI/2; pistons.position.set(0, 0.5, 0.8);
                        homoGroup.add(body); homoGroup.add(pistons);
                        const p2 = pistons.clone(); p2.position.set(0, 0, 0.8); homoGroup.add(p2);
                        const p3 = pistons.clone(); p3.position.set(0, -0.5, 0.8); homoGroup.add(p3);
                        homoGroup.position.set(3, 1.5, 0);
                        scene.add(homoGroup);
                        addLabel("HOMOGENIZER", 3, 3.5, 0);

                        // 4. HEATING & COOLING (PHE)
                        createPHEUnit(7, 0, 0, 0xe74c3c, "HEATING");
                        createPHEUnit(10, 0, 0, 0x3498db, "COOLING");
                    }
                    
                    function createPHEUnit(x, z, offset, color, lbl) {
                        const mat = new THREE.MeshStandardMaterial({ color: color });
                        const plates = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.5, 2), mat);
                        plates.position.set(x, 2, z);
                        scene.add(plates);
                        
                        // Frame
                        const frame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.7, 0.2), new THREE.MeshStandardMaterial({color:0x2c3e50}));
                        frame.position.set(x, 2, z-1.1); scene.add(frame);
                        const f2 = frame.clone(); f2.position.set(x, 2, z+1.1); scene.add(f2);
                        
                        addLabel(lbl, x, 4, z);
                    }

                    function buildHoldingAndFDV() {
                        // Holding Tube: Zig Zag above Heating
                        const tubeMat = new THREE.MeshStandardMaterial({color:0xbdc3c7});
                        const tubeGroup = new THREE.Group();
                        for(let i=0; i<3; i++) {
                            const t = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4), tubeMat);
                            t.rotation.z = Math.PI/2;
                            t.position.set(0, i*0.3, -i*0.4);
                            tubeGroup.add(t);
                        }
                        // Connector bends simulated
                        tubeGroup.position.set(7, 4, -2); // Above heating
                        scene.add(tubeGroup);
                        addLabel("HOLDING", 7, 5.5, -2);

                        // FDV
                        fdvMesh = new THREE.Mesh(new THREE.SphereGeometry(0.5), new THREE.MeshStandardMaterial({color:0xecf0f1}));
                        fdvMesh.position.set(10, 4, -2);
                        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.2,0.2,0.8), new THREE.MeshStandardMaterial({color:0x333}));
                        stem.position.y = 0.5; fdvMesh.add(stem);
                        scene.add(fdvMesh);
                        addLabel("FDV", 10, 5, -2);
                    }

                    function buildPipes() {
                        const pipeMat = new THREE.MeshStandardMaterial({ color: 0x888888, transparent: true, opacity: 0.3 });
                        // Visual Pipes (Static simplified)
                        // Raw -> Balance
                        createPipe([-25,1,0, -15,1,0, -15,3,0], pipeMat);
                        // Balance -> Pump
                        createPipe([-15,0.5,0, -10,0.5,0], pipeMat);
                        // Pump -> Regen
                        createPipe([-10,0.5,0, -5,0.5,0, -5,1,0], pipeMat);
                        // Regen -> Sep
                        createPipe([-5,3,0, -1,3,0, -1,3,2], pipeMat);
                        // Sep -> Homo
                        createPipe([-1,3,2, 3,3,2, 3,2,0], pipeMat);
                        // Homo -> Heat
                        createPipe([3,2,0, 7,2,0], pipeMat);
                        // Heat -> Hold
                        createPipe([7,3,0, 7,4,0, 7,4,-2], pipeMat);
                        // Hold -> FDV
                        createPipe([7,4,-2, 10,4,-2], pipeMat);
                        // FDV -> Cool (Forward)
                        createPipe([10,4,-2, 10,3,0], pipeMat);
                        // Cool -> Silos
                        createPipe([10,1,0, 20,1,0], pipeMat);
                        // FDV -> Balance (Divert)
                        createPipe([10,4,-2, 10,6,-2, -15,6,-2, -15,4,0], pipeMat);
                    }

                    function createPipe(points, mat) {
                        const pts = [];
                        for(let i=0; i<points.length; i+=3) pts.push(new THREE.Vector3(points[i], points[i+1], points[i+2]));
                        const path = new THREE.CatmullRomCurve3(pts);
                        const geo = new THREE.TubeGeometry(path, 10, 0.08, 8, false);
                        const mesh = new THREE.Mesh(geo, mat);
                        scene.add(mesh);
                    }

                    function addLabel(text, x, y, z) {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.width = 256; canvas.height = 64;
                        ctx.fillStyle = "rgba(0,0,0,0.6)"; ctx.fillRect(0,0,256,64);
                        ctx.font = "bold 28px Arial"; ctx.fillStyle = "white";
                        ctx.textAlign = "center"; ctx.textBaseline = "middle";
                        ctx.fillText(text, 128, 32);
                        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas) }));
                        sprite.position.set(x, y, z);
                        sprite.scale.set(3, 0.75, 1);
                        scene.add(sprite);
                    }

                    // --- PATHS FOR ANIMATION ---
                    function initPaths() {
                        // 1. Raw to Pump
                        pathFeed = new THREE.CatmullRomCurve3([v(-25,1,0), v(-15,1,0), v(-15,0.5,0), v(-10,0.5,0)]);
                        // 2. Pump to Regen
                        pathRegen = new THREE.CatmullRomCurve3([v(-10,0.5,0), v(-5,0.5,0), v(-5,2.5,0)]);
                        // 3. Regen to Separator
                        pathSepMain = new THREE.CatmullRomCurve3([v(-5,2.5,0), v(-1,2.5,0), v(-1,2.5,2)]);
                        // 4. Sep Output (Cream)
                        pathSepCream = new THREE.CatmullRomCurve3([v(-1,2.5,2), v(-1,1,4), v(20,1,5), v(20,5,5)]);
                        // 5. Sep Output (Skim/Main) -> Homo
                        pathHomo = new THREE.CatmullRomCurve3([v(-1,2.5,2), v(3,2.5,0)]);
                        // 6. Homo -> Heating
                        pathHeat = new THREE.CatmullRomCurve3([v(3,2.5,0), v(7,2.5,0), v(7,4,-2)]); // Ends at hold start
                        // 7. Holding -> FDV
                        pathHold = new THREE.CatmullRomCurve3([v(7,4,-2), v(8.5,4,-2), v(10,4,-2)]);
                        
                        // 8. Safe Path (Forward)
                        pathSafe = new THREE.CatmullRomCurve3([v(10,4,-2), v(10,2.5,0), v(20,0.5,-5), v(20,5,-5)]);
                        // 9. Divert Path
                        pathDivert = new THREE.CatmullRomCurve3([v(10,4,-2), v(10,6,-2), v(-15,6,-2), v(-15,4,0)]);
                    }
                    function v(x,y,z) { return new THREE.Vector3(x,y,z); }

                    // --- GAME LOOP ---
                    function animate() {
                        requestAnimationFrame(animate);
                        controls.update();

                        updateProcessLogic();
                        updateParticles();
                        
                        if(systemOn) {
                            pumpMesh.children[1].rotation.x += 0.5; // Rotate pump impeller
                        }

                        renderer.render(scene, camera);
                    }

                    function updateProcessLogic() {
                        // Temp Simulation
                        let target = 25;
                        if(systemOn) {
                            target = 25 + (steamVal * 0.7); // Max ~95C
                            if(currentTemp < target) currentTemp += 0.2;
                            if(currentTemp > target) currentTemp -= 0.1;
                        } else {
                            if(currentTemp > 25) currentTemp -= 0.1;
                        }
                        elTemp.innerText = currentTemp.toFixed(1) + "°C";

                        // FDV Logic
                        if(systemOn && currentTemp >= targetTempSet) {
                            fdvState = 'FORWARD';
                            setLight(elLightFwd, true); setLight(elLightDiv, false);
                            fdvMesh.material.color.setHex(0x2ecc71);
                        } else {
                            fdvState = 'DIVERT';
                            setLight(elLightFwd, false); setLight(elLightDiv, true);
                            fdvMesh.material.color.setHex(0xe74c3c);
                        }
                        
                        // Status Text
                        let status = "System Off";
                        if(systemOn) {
                            status = \`Pump ON.\\nSeparator: \${sepOn?'Active':'Bypass'}\\nHomo: \${homoOn?'Active':'Bypass'}\\nMode: \${fdvState}\`;
                        }
                        elStatus.innerText = status;
                    }

                    function updateParticles() {
                        if(!systemOn) return;

                        // Spawn Rate
                        if(Math.random() > 0.8) spawnParticle();

                        for(let i=particles.length-1; i>=0; i--) {
                            let p = particles[i];
                            p.progress += 0.01; // Speed
                            
                            if(p.path) {
                                p.mesh.position.copy(p.path.getPoint(p.progress));
                            }
                            
                            if(p.progress >= 1) {
                                p.progress = 0;
                                handlePathSwitch(p);
                            }
                        }
                    }

                    function spawnParticle() {
                        const geo = new THREE.SphereGeometry(0.1, 8, 8);
                        const mat = new THREE.MeshBasicMaterial({color:0xffffff});
                        const mesh = new THREE.Mesh(geo, mat);
                        scene.add(mesh);
                        particles.push({ mesh: mesh, path: pathFeed, progress: 0, stage: 'feed' });
                    }

                    function handlePathSwitch(p) {
                        // State Machine for Particles
                        if(p.stage === 'feed') {
                            p.path = pathRegen; p.stage = 'regen';
                        } else if (p.stage === 'regen') {
                            // To Separator
                            p.path = pathSepMain; p.stage = 'sep_in';
                        } else if (p.stage === 'sep_in') {
                            if(sepOn) {
                                // Split logic: 20% Cream, 80% Skim
                                if(Math.random() > 0.8) {
                                     p.path = pathSepCream; p.stage = 'cream_out';
                                     p.mesh.material.color.setHex(0xf1c40f); // Yellow cream
                                } else {
                                    p.path = pathHomo; p.stage = 'homo_in';
                                }
                            } else {
                                p.path = pathHomo; p.stage = 'homo_in'; // Bypass visual logic simplified
                            }
                        } else if (p.stage === 'homo_in') {
                            p.path = pathHeat; p.stage = 'heating';
                            if(homoOn && p.mesh.material.color.getHex() === 0xffffff) {
                                // Visual effect: homogenized milk is brighter white? (keep white)
                            }
                        } else if (p.stage === 'heating') {
                            p.path = pathHold; p.stage = 'holding';
                        } else if (p.stage === 'holding') {
                            // FDV Decision
                            if(fdvState === 'FORWARD') {
                                p.path = pathSafe; p.stage = 'finished';
                                p.mesh.material.color.setHex(0x2ecc71); // Safe Green tint
                            } else {
                                p.path = pathDivert; p.stage = 'divert';
                                p.mesh.material.color.setHex(0xe74c3c); // Unsafe Red tint
                            }
                        } else if (p.stage === 'divert') {
                            // Back to start logic
                            p.path = pathRegen; p.stage = 'regen'; // Loop back into process
                            p.mesh.material.color.setHex(0xffffff);
                        } else {
                            // Finished or Cream Out -> Remove
                            scene.remove(p.mesh);
                            particles.splice(particles.indexOf(p), 1);
                        }
                    }

                    // --- UI INTERACTION ---
                    function toggleSystem() {
                        systemOn = !systemOn;
                        if(systemOn) {
                            btnPower.classList.add('active');
                            btnPower.innerText = "STOP PLANT";
                            elPumpLight.classList.add('on'); elPumpLight.classList.remove('off');
                            elTooltip.innerText = "Pump Running. Milk flowing.";
                        } else {
                            btnPower.classList.remove('active');
                            btnPower.innerText = "START PLANT";
                            elPumpLight.classList.remove('on'); elPumpLight.classList.add('off');
                            elTooltip.innerText = "System Stopped.";
                        }
                    }
                    function toggleSep() {
                        sepOn = !sepOn;
                        btnSep.innerText = sepOn ? "Separator: ON" : "Separator: OFF";
                        btnSep.classList.toggle('active');
                    }
                    function toggleHomo() {
                        homoOn = !homoOn;
                        btnHomo.innerText = homoOn ? "Homogenizer: ON" : "Homogenizer: OFF";
                        btnHomo.classList.toggle('active');
                    }
                    window.updateSteam = function(val) {
                        steamVal = parseInt(val);
                        document.getElementById('steam-val-text').innerText = val + "%";
                    }
                    function setLight(el, on) {
                        if(on) { el.classList.add('on'); el.classList.remove('off'); }
                        else { el.classList.add('off'); el.classList.remove('on'); }
                    }
                    function onWindowResize() {
                        camera.aspect = window.innerWidth / (window.innerHeight - 200);
                        camera.updateProjectionMatrix();
                        renderer.setSize(window.innerWidth, window.innerHeight - 200);
                    }

                    init();
                <\/script>
            </body>
            </html>
        `
    },
    hi: {
        title: "पाश्चुरीकरण",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">पाश्चुरीकरण का परिचय</h3>
            <p>पाश्चुरीकरण डेयरी उद्योग में एक महत्वपूर्ण गर्मी उपचार प्रक्रिया है जिसका उपयोग दूध और अन्य तरल डेयरी उत्पादों की सुरक्षा सुनिश्चित करने और उनकी शेल्फ लाइफ बढ़ाने के लिए किया जाता है। इसका नाम फ्रांसीसी वैज्ञानिक लुई पाश्चर के नाम पर रखा गया है, जिन्होंने पाया कि पेय पदार्थों को गर्म करने से हानिकारक सूक्ष्मजीव मारे जा सकते हैं। इस प्रक्रिया में दूध को एक विशिष्ट तापमान पर एक निश्चित अवधि के लिए गर्म करना और फिर उसे तेजी से ठंडा करना शामिल है।</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. पाश्चुरीकरण के उद्देश्य</h3>
            <p>पाश्चुरीकरण के लक्ष्य दोहरे हैं और सार्वजनिक स्वास्थ्य और वाणिज्य के लिए अत्यंत महत्वपूर्ण हैं।</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>सार्वजनिक स्वास्थ्य सुरक्षा (प्राथमिक उद्देश्य):</strong> मुख्य लक्ष्य दूध को मानव उपभोग के लिए सुरक्षित बनाना है, जिसके लिए सभी रोगजनक (बीमारी पैदा करने वाले) सूक्ष्मजीवों को नष्ट किया जाता है। कच्चे दूध में <i>माइकोबैक्टीरियम ट्यूबरकुलोसिस</i> (तपेदिक का कारण), <i>ब्रूसेला</i> एसपीपी। (ब्रुसेलोसिस का कारण), <i>साल्मोनेला</i>, <i>लिस्टेरिया मोनोसाइटोजेन्स</i>, और <i>ई. कोलाई</i> के रोगजनक उपभेदों जैसे खतरनाक बैक्टीरिया हो सकते हैं। पाश्चुरीकरण विशेष रूप से इन खतरों को खत्म करने के लिए डिज़ाइन किया गया है।</li>
                <li><strong>विस्तारित शेल्फ जीवन (द्वितीयक उद्देश्य):</strong> यह प्रक्रिया बड़ी संख्या में खराब करने वाले सूक्ष्मजीवों (जैसे साइकोट्रॉफिक बैक्टीरिया, यीस्ट और मोल्ड्स) को भी नष्ट कर देती है। इसके अलावा, गर्मी देशी दूध एंजाइमों जैसे लाइपेस को निष्क्रिय कर देती है, जो भंडारण के दौरान हाइड्रोलाइटिक बासीपन (एक साबुन जैसा ऑफ-फ्लेवर) का कारण बन सकता है। माइक्रोबियल लोड को कम करके और एंजाइमों को निष्क्रिय करके, पाश्चुरीकरण खराब होने की प्रक्रिया को काफी धीमा कर देता है और दूध की प्रशीतित शेल्फ लाइफ को कुछ घंटों से बढ़ाकर कई दिनों या हफ्तों तक कर देता है।</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. सामान्य पाश्चुरीकरण के तरीके</h3>
            <h4 class="font-semibold mt-4 mb-2">1. उच्च तापमान कम समय (HTST) पाश्चुरीकरण</h4>
            <p>यह अपनी दक्षता और ऊर्जा-बचत क्षमताओं के कारण बाजार के दूध के लिए आधुनिक, बड़े पैमाने पर डेयरी संयंत्रों में सबसे आम तरीका है।</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>तापमान:</strong> कम से कम <strong>72°C (161°F)</strong></li>
                <li><strong>समय:</strong> कम से कम <strong>15 सेकंड</strong> के लिए</li>
            </ul>
            <p><strong>वैज्ञानिक कारण:</strong> यह समय-तापमान संयोजन दूध में पाए जाने वाले सबसे गर्मी प्रतिरोधी, गैर-बीजाणु बनाने वाले रोगज़नक़, <i>कॉक्सिएला बर्नेटी</i> (क्यू-बुखार का कारण) को मारने के लिए वैज्ञानिक रूप से मान्य किया गया है। इस जीव के विनाश को सुनिश्चित करके, यह गारंटी है कि अन्य सभी कम-प्रतिरोधी रोगजनक भी नष्ट हो गए हैं। गर्मी के संपर्क की छोटी अवधि दूध के पोषण और संवेदी गुणों (स्वाद, रंग) को थर्मल क्षति को कम करती है। यह निरंतर प्रक्रिया एक प्लेट हीट एक्सचेंजर (PHE) में की जाती है।</p>

            <h4 class="font-semibold mt-4 mb-2">2. कम तापमान लंबा समय (LTLT) या बैच पाश्चुरीकरण</h4>
            <p>यह एक पुरानी विधि है, जो अब मुख्य रूप से छोटे बैचों या कुछ विशेष चीज़ों और आइसक्रीम मिक्स जैसे उत्पादों के लिए उपयोग की जाती है जहाँ बैच प्रक्रिया अधिक उपयुक्त होती है।</p>
             <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>तापमान:</strong> कम से कम <strong>63°C (145°F)</strong></li>
                <li><strong>समय:</strong> कम से कम <strong>30 मिनट</strong> के लिए</li>
            </ul>
            <p><strong>वैज्ञानिक कारण:</strong> सिद्धांत एचटीएसटी के समान है - रोगजनकों की थर्मल हत्या प्राप्त करना। कम तापमान को समान घातक प्रभाव प्राप्त करने के लिए बहुत लंबे समय तक रखने की आवश्यकता होती है। यह प्रक्रिया एक जैकेटेड वैट में की जाती है, जहाँ दूध को ठंडा करने से पहले पूरी अवधि के लिए आवश्यक तापमान पर गर्म और रखा जाता है। प्रभावी होते हुए भी, यह एचटीएसटी की तुलना में कम ऊर्जा-कुशल और अधिक समय लेने वाला है।</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. एचटीएसटी पाश्चराइज़र: कार्य सिद्धांत और प्रवाह</h3>
            <p>एक एचटीएसटी पाश्चराइज़र एक परिष्कृत प्रणाली है जिसे निरंतर, कुशल गर्मी उपचार के लिए डिज़ाइन किया गया है। यहाँ इसके संचालन का एक चरण-दर-चरण विवरण दिया गया है:</p>
            <div class="space-y-2 font-mono text-center">
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">1. बैलेंस टैंक</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-blue-100 border border-blue-300 rounded">2. फीड पंप</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">3. पुनर्जनन खंड (हीटिंग)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-yellow-100 border border-yellow-300 rounded">4. हीटिंग सेक्शन</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-red-200 border border-red-400 rounded">5. होल्डिंग ट्यूब (CCP)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-orange-100 border border-orange-300 rounded">6. प्रवाह मोड़ वाल्व (FDV)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-green-100 border border-green-300 rounded">7. पुनर्जनन खंड (शीतलन)</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-cyan-100 border border-cyan-300 rounded">8. शीतलन खंड</div><div class="text-2xl">↓</div>
                <div class="p-3 bg-gray-200 border border-gray-400 rounded">9. भंडारण टैंक</div>
            </div>

            <ol class="list-decimal list-outside pl-5 space-y-4 mt-6">
                <li><strong>बैलेंस टैंक:</strong> प्रक्रिया यहाँ से शुरू होती है। यह एक छोटा टैंक है जो कच्चा दूध प्राप्त करता है और फीड पंप के लिए एक निरंतर दबाव का सिर बनाए रखता है। <strong>वैज्ञानिक कारण:</strong> यह पाश्चराइज़र में दूध का एक सुसंगत, निर्बाध प्रवाह सुनिश्चित करता है, जो होल्डिंग ट्यूब के माध्यम से सही प्रवाह दर बनाए रखने के लिए महत्वपूर्ण है।</li>
                <li><strong>फीड पंप:</strong> एक केन्द्रापसारक पंप जो बैलेंस टैंक से दूध खींचता है और इसे सिस्टम में आगे धकेलता है।</li>
                <li><strong>पुनर्जनन खंड:</strong> यह पाश्चराइज़र का सबसे ऊर्जा-कुशल हिस्सा है। यहाँ, आने वाला ठंडा कच्चा दूध प्लेटों के एक तरफ बहता है, जबकि गर्म, पहले से पाश्चुरीकृत दूध विपरीत दिशा में दूसरी तरफ बहता है। <strong>वैज्ञानिक कारण:</strong> गर्मी गर्म दूध से ठंडे दूध में स्थानांतरित होती है। यह कच्चे दूध को मुफ्त में पहले से गरम करता है (जैसे, 4°C से ~57°C तक), हीटिंग सेक्शन में आवश्यक ऊर्जा को कम करता है, और साथ ही गर्म दूध को पहले से ठंडा करता है, अंतिम शीतलन के लिए आवश्यक ऊर्जा को कम करता है। आधुनिक पुनर्योजक 95% तक गर्मी ऊर्जा की वसूली कर सकते हैं।</li>
                <li><strong>हीटिंग सेक्शन:</strong> पहले से गरम किया गया दूध फिर हीटिंग सेक्शन में बहता है, जहाँ इसे गर्म पानी को हीटिंग माध्यम के रूप में उपयोग करके पूर्ण पाश्चुरीकरण तापमान (जैसे, 72°C) तक गर्म किया जाता है।</li>
                <li><strong>होल्डिंग ट्यूब:</strong> गर्म करने के बाद, दूध एक विशिष्ट लंबाई और व्यास के एक लंबे पाइप के माध्यम से बहता है, जिसे होल्डिंग ट्यूब के रूप में जाना जाता है। <strong>वैज्ञानिक कारण:</strong> यह ट्यूब ठीक से इंजीनियर की जाती है ताकि दूध को एक छोर से दूसरे छोर तक यात्रा करने में कम से कम 15 सेकंड (न्यूनतम होल्डिंग समय) लगे। फीड पंप द्वारा नियंत्रित प्रवाह दर, और ट्यूब के आयाम यह सुनिश्चित करने के लिए महत्वपूर्ण हैं कि यह सीसीपी पूरा हो।</li>
                <li><strong>प्रवाह मोड़ वाल्व (FDV):</strong> होल्डिंग ट्यूब के अंत में स्थित, FDV एक स्वचालित, तीन-तरफा वाल्व है जो एक सुरक्षा उपकरण के रूप में कार्य करता है। एक तापमान सेंसर लगातार दूध के तापमान की निगरानी करता है। 
                    <ul class='list-disc list-outside pl-5 mt-2 space-y-1'>
                        <li>यदि तापमान निर्धारित बिंदु (जैसे, 72°C) पर या उससे ऊपर है, तो वाल्व ठीक से पाश्चुरीकृत दूध को पुनर्जनन खंड में आगे बहने की अनुमति देता है।</li>
                        <li>यदि किसी भी कारण से तापमान निर्धारित बिंदु से नीचे गिर जाता है, तो वाल्व स्वचालित रूप से कम-संसाधित दूध को पुनर्संसाधन के लिए बैलेंस टैंक में वापस मोड़ देता है। यह सुनिश्चित करता है कि कोई भी कम-पाश्चुरीकृत दूध अंतिम उत्पाद तक कभी नहीं पहुंचता है।</li>
                    </ul>
                </li>
                <li><strong>पुनर्जनन खंड (शीतलन):</strong> ठीक से पाश्चुरीकृत गर्म दूध पुनर्जनन खंड के माध्यम से वापस बहता है, अपनी गर्मी को आने वाले कच्चे दूध को देता है और इस प्रक्रिया में पहले से ठंडा हो जाता है (जैसे, 72°C से ~20°C तक)।</li>
                <li><strong>शीतलन खंड:</strong> पहले से ठंडा किया गया दूध फिर अंतिम शीतलन खंड में प्रवेश करता है, जहाँ इसे ठंडे पानी या ग्लाइकोल से 5°C से कम के अपने अंतिम भंडारण तापमान तक ठंडा किया जाता है।</li>
                <li><strong>भंडारण टैंक:</strong> पूरी तरह से संसाधित, ठंडा दूध फिर एक बाँझ भंडारण टैंक में भेजा जाता है, जो पैकेजिंग के लिए तैयार है।</li>
            </ol>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IV. पाश्चुरीकरण का सत्यापन: क्षारीय फॉस्फेट (ALP) परीक्षण</h3>
            <p>पाश्चुरीकरण सफल था या नहीं, यह सुनिश्चित करने के लिए एक विश्वसनीय सत्यापन परीक्षण की आवश्यकता है। क्षारीय फॉस्फेट (ALP) परीक्षण इसके लिए सार्वभौमिक रूप से स्वीकृत विधि है।</p>
            <p><strong>वैज्ञानिक सिद्धांत:</strong> ALP कच्चे दूध में पाया जाने वाला एक प्राकृतिक एंजाइम है। संयोग से, इसकी गर्मी प्रतिरोधकता दूध में पाए जाने वाले सबसे गर्मी प्रतिरोधी सामान्य रोगजनक जीवाणु, <i>कॉक्सिएला बर्नेटी</i> (जो क्यू-बुखार का कारण बनता है) से थोड़ी अधिक है। इसका मतलब है कि ALP को नष्ट करने के लिए पर्याप्त समय-तापमान संयोजन निश्चित रूप से सभी सामान्य रोगजनकों को नष्ट करने के लिए पर्याप्त होगा।</p>
            <p><strong>परीक्षण:</strong> यह परीक्षण एक दूध के नमूने को एक फॉस्फेट सब्सट्रेट प्रदान करके काम करता है। यदि सक्रिय ALP मौजूद है (जो अनुचित पाश्चुरीकरण या कच्चे दूध के संदूषण का संकेत देता है), तो यह सब्सट्रेट से फॉस्फेट समूह को तोड़ देगा, जो तब एक रंग परिवर्तन उत्पन्न करता है। रंग परिवर्तन की अनुपस्थिति (एक नकारात्मक परिणाम) पुष्टि करती है कि पाश्चुरीकरण सफल था। एक सकारात्मक ALP परीक्षण का मतलब है कि उत्पाद असुरक्षित है और इसे जारी नहीं किया जाना चाहिए।</p>
        `,
        simulation: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Advanced Milk Processing Plant Simulator</title>
                <style>
                    body { margin: 0; overflow: hidden; background-color: #1a1a1a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                    
                    /* SCADA Control Panel */
                    #ui-container {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 200px;
                        background: rgba(20, 30, 40, 0.95);
                        border-top: 4px solid #3498db;
                        color: white;
                        display: flex;
                        justify-content: space-around;
                        align-items: flex-start;
                        padding: 15px 10px;
                        box-sizing: border-box;
                        backdrop-filter: blur(5px);
                        z-index: 10;
                    }

                    .panel-section {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 0 15px;
                        border-right: 1px solid #444;
                        height: 100%;
                    }
                    .panel-section:last-child { border-right: none; }

                    h2 { margin: 0 0 10px 0; font-size: 14px; color: #3498db; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }

                    .digital-display {
                        background: #000;
                        color: #0f0;
                        font-family: 'Courier New', monospace;
                        font-size: 20px;
                        padding: 5px 10px;
                        border: 2px solid #555;
                        border-radius: 4px;
                        margin-bottom: 5px;
                        min-width: 70px;
                        text-align: center;
                    }
                    
                    .status-light {
                        width: 15px;
                        height: 15px;
                        border-radius: 50%;
                        background: #333;
                        border: 2px solid #555;
                        margin: 5px;
                        box-shadow: inset 0 0 5px #000;
                        display: inline-block;
                    }
                    .status-light.on { background: #00ff00; box-shadow: 0 0 8px #00ff00; }
                    .status-light.off { background: #ff0000; box-shadow: 0 0 8px #ff0000; }

                    /* Switches & Buttons */
                    .toggle-btn {
                        background: #444; color: #ccc; border: 1px solid #666;
                        padding: 5px 10px; cursor: pointer; border-radius: 4px; font-size: 12px; margin: 2px;
                        width: 100px;
                    }
                    .toggle-btn.active { background: #2ecc71; color: #fff; border-color: #27ae60; }
                    
                    button.main-start {
                        background: linear-gradient(to bottom, #2c3e50, #1a252f);
                        color: white; border: 2px solid #3498db;
                        padding: 10px 20px; font-weight: bold; cursor: pointer;
                        border-radius: 6px; transition: all 0.2s;
                    }
                    button.main-start:hover { background: #34495e; box-shadow: 0 0 15px rgba(52, 152, 219, 0.5); }
                    button.main-start.active { background: #e74c3c; border-color: #c0392b; }

                    /* View Controls (New) */
                    #view-controls {
                        position: absolute; top: 20px; right: 20px;
                        display: flex; flex-direction: column; gap: 5px;
                        z-index: 20; background: rgba(0,0,0,0.5); padding: 5px; border-radius: 8px;
                    }
                    #view-controls button {
                        background: rgba(50,50,50,0.8); color: white; border: 1px solid #777;
                        padding: 6px 12px; cursor: pointer; border-radius: 4px; font-size: 11px;
                        font-weight: bold; text-transform: uppercase; width: 80px;
                    }
                    #view-controls button:hover { background: #3498db; border-color: #3498db; }
                    .view-label { font-size: 10px; color: #aaa; text-align: center; margin-bottom: 2px; }

                    /* Slider */
                    input[type=range] { width: 120px; cursor: pointer; }

                    #tooltip {
                        position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
                        background: rgba(0,0,0,0.8); color: #fff; padding: 10px 20px;
                        border-radius: 20px; pointer-events: none; font-size: 14px; border: 1px solid #555; z-index: 10;
                    }
                    
                    .legend {
                        position: absolute; top: 20px; left: 20px;
                        background: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px;
                        font-size: 11px; color: #ddd; z-index: 10;
                    }
                    .legend-item { display: flex; align-items: center; margin-bottom: 4px; }
                    .color-box { width: 10px; height: 10px; margin-right: 8px; border: 1px solid #777; }

                </style>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
                <!-- OrbitControls -->
                <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"><\/script>
            </head>
            <body>

                <div class="legend">
                    <div class="legend-item"><div class="color-box" style="background:#ecf0f1"></div>Tanks / Pipes</div>
                    <div class="legend-item"><div class="color-box" style="background:#34495e"></div>Pump & Motors</div>
                    <div class="legend-item"><div class="color-box" style="background:#f39c12"></div>Regeneration / Separator</div>
                    <div class="legend-item"><div class="color-box" style="background:#8e44ad"></div>Homogenizer</div>
                    <div class="legend-item"><div class="color-box" style="background:#e74c3c"></div>Heating Section</div>
                    <div class="legend-item"><div class="color-box" style="background:#3498db"></div>Cooling Section</div>
                </div>

                <!-- View Controls -->
                <div id="view-controls">
                    <div class="view-label">CAMERA VIEW</div>
                    <button onclick="setView('front')">FRONT</button>
                    <button onclick="setView('back')">BACK</button>
                    <button onclick="setView('left')">LEFT</button>
                    <button onclick="setView('right')">RIGHT</button>
                    <button onclick="setView('top')">TOP</button>
                    <button onclick="setView('iso')">ISO</button>
                </div>

                <div id="tooltip">PLANT READY. Configure Machines & Start Pump.</div>

                <div id="ui-container">
                    <!-- 1. Main Power -->
                    <div class="panel-section">
                        <h2>Main Control</h2>
                        <div style="display:flex; align-items:center; margin-bottom:10px;">
                            <div id="status-pump" class="status-light"></div>
                            <span style="font-size:12px; margin-left:5px;">FEED PUMP</span>
                        </div>
                        <button class="main-start" id="btn-power" onclick="toggleSystem()">START PLANT</button>
                    </div>

                    <!-- 2. Processing Units -->
                    <div class="panel-section">
                        <h2>Processing Units</h2>
                        <button class="toggle-btn" id="btn-sep" onclick="toggleSep()">Separator: OFF</button>
                        <button class="toggle-btn" id="btn-homo" onclick="toggleHomo()">Homogenizer: OFF</button>
                        <div style="font-size:11px; color:#aaa; margin-top:5px; text-align:center;">
                            Separator removes cream.<br>Homo breaks fat.
                        </div>
                    </div>

                    <!-- 3. Heating -->
                    <div class="panel-section">
                        <h2>Pasteurizer</h2>
                        <div class="digital-display" id="temp-display">25.0°C</div>
                        <div style="display:flex; flex-direction:column; align-items:center;">
                            <label style="font-size:11px; color:#aaa;">Steam Valve</label>
                            <input type="range" min="0" max="100" value="0" oninput="updateSteam(this.value)">
                            <span id="steam-val-text" style="font-size:12px;">0%</span>
                        </div>
                    </div>

                    <!-- 4. FDV Status -->
                    <div class="panel-section">
                        <h2>FDV Logic</h2>
                        <div style="display:flex; gap:15px; margin-top:5px;">
                            <div style="text-align:center;">
                                <div id="light-fwd" class="status-light"></div>
                                <div style="font-size:10px;">SAFE</div>
                            </div>
                            <div style="text-align:center;">
                                <div id="light-div" class="status-light on"></div>
                                <div style="font-size:10px;">DIVERT</div>
                            </div>
                        </div>
                        <div style="font-size:11px; color:#aaa; margin-top:8px;">Set Point: 72.0°C</div>
                    </div>

                    <!-- 5. Output Log -->
                     <div class="panel-section" style="width: 180px; align-items:flex-start;">
                        <h2>Product Flow</h2>
                        <div id="flow-status" style="font-size: 11px; color: #0f0; line-height:1.4;">
                            System Idle.
                        </div>
                    </div>
                </div>

                <script>
                    // --- VARIABLES ---
                    let scene, camera, renderer, controls;
                    let fdvMesh, pumpMesh;
                    let particles = [];
                    
                    // State
                    let systemOn = false;
                    let sepOn = false;
                    let homoOn = false;
                    let steamVal = 0;
                    let currentTemp = 25.0;
                    const targetTempSet = 72.0;
                    let fdvState = 'DIVERT'; // DIVERT or FORWARD
                    
                    // Paths
                    let pathFeed, pathRegen, pathSepMain, pathSepCream, pathHomo, pathHeat, pathHold, pathFDV;
                    let pathSafe, pathDivert;
                    
                    // DOM
                    const elTemp = document.getElementById('temp-display');
                    const elSteam = document.getElementById('steam-val-text');
                    const elTooltip = document.getElementById('tooltip');
                    const elStatus = document.getElementById('flow-status');
                    const elLightFwd = document.getElementById('light-fwd');
                    const elLightDiv = document.getElementById('light-div');
                    const elPumpLight = document.getElementById('status-pump');
                    const btnSep = document.getElementById('btn-sep');
                    const btnHomo = document.getElementById('btn-homo');
                    const btnPower = document.getElementById('btn-power');

                    // --- INIT ---
                    function init() {
                        scene = new THREE.Scene();
                        scene.background = new THREE.Color(0x222222);
                        scene.fog = new THREE.Fog(0x222222, 30, 100);

                        camera = new THREE.PerspectiveCamera(45, window.innerWidth / (window.innerHeight - 200), 0.1, 1000);
                        
                        // Initial View (Front/South)
                        camera.position.set(0, 20, 35);

                        renderer = new THREE.WebGLRenderer({ antialias: true });
                        renderer.setSize(window.innerWidth, window.innerHeight - 200);
                        renderer.shadowMap.enabled = true;
                        document.body.appendChild(renderer.domElement);

                        // Orbit Controls
                        controls = new THREE.OrbitControls(camera, renderer.domElement);
                        controls.enableDamping = true;
                        controls.dampingFactor = 0.05;
                        controls.maxPolarAngle = Math.PI / 2 - 0.05; // Stay above ground

                        // Lighting
                        const amb = new THREE.AmbientLight(0xffffff, 0.4);
                        scene.add(amb);
                        
                        // Front Sun
                        const sun1 = new THREE.DirectionalLight(0xffffff, 0.7);
                        sun1.position.set(10, 30, 20);
                        sun1.castShadow = true;
                        scene.add(sun1);
                        
                        // Back Sun (Fill Light for Northern view)
                        const sun2 = new THREE.DirectionalLight(0xffbbaa, 0.4);
                        sun2.position.set(-10, 20, -20);
                        scene.add(sun2);

                        // --- BUILD PLANT ---
                        buildEnvironment();
                        buildTanks();
                        buildPump();
                        buildProcessingLine(); // Regen -> Sep -> Homo -> Heat
                        buildHoldingAndFDV();
                        buildPipes();
                        
                        // Paths
                        initPaths();

                        window.addEventListener('resize', onWindowResize);
                        animate();
                    }

                    // --- VIEW CONTROLS ---
                    window.setView = function(view) {
                        const dist = 35;
                        const h = 20;
                        let x=0, y=h, z=0;
                        
                        switch(view) {
                            case 'front': x=0; z=dist; break;
                            case 'back': x=0; z=-dist; break;
                            case 'left': x=-dist; z=0; break;
                            case 'right': x=dist; z=0; break;
                            case 'top': x=0; y=dist+15; z=1; break; // z=1 to avoid Gimbal lock
                            case 'iso': x=25; y=25; z=25; break;
                        }
                        
                        camera.position.set(x, y, z);
                        camera.lookAt(0, 0, 0);
                        controls.update(); // Important to sync controls
                    }

                    // --- BUILD FUNCTIONS ---

                    function buildEnvironment() {
                        const floorGeo = new THREE.PlaneGeometry(80, 60);
                        const floorMat = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.8 });
                        const floor = new THREE.Mesh(floorGeo, floorMat);
                        floor.rotation.x = -Math.PI / 2;
                        floor.receiveShadow = true;
                        scene.add(floor);

                        const grid = new THREE.GridHelper(80, 40, 0x444444, 0x222222);
                        scene.add(grid);
                    }

                    function buildTanks() {
                        const tankMat = new THREE.MeshStandardMaterial({ color: 0xbdc3c7, metalness: 0.7, roughness: 0.2 });
                        
                        // 1. Raw Milk Silo (Left)
                        createTank(-25, 5, 0, 3, 10, "RAW MILK", tankMat);
                        
                        // 2. Balance Tank (Mid-Left)
                        createTank(-15, 2.5, 0, 1.5, 3, "BALANCE", tankMat);
                        
                        // 3. Skim/Product Silo (Right)
                        createTank(20, 5, -5, 3, 10, "SKIM/PAST.", tankMat);

                        // 4. Cream Tank (Right Front)
                        createTank(20, 3, 5, 1.5, 5, "CREAM", tankMat);
                    }

                    function createTank(x, y, z, r, h, label, mat) {
                        const geo = new THREE.CylinderGeometry(r, r, h, 32);
                        const mesh = new THREE.Mesh(geo, mat);
                        mesh.position.set(x, y, z);
                        mesh.castShadow = true;
                        mesh.receiveShadow = true;
                        scene.add(mesh);

                        // Legs
                        const legGeo = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8);
                        for(let i=0; i<4; i++) {
                            const leg = new THREE.Mesh(legGeo, mat);
                            const angle = (i * 90) * Math.PI/180;
                            leg.position.set(x + Math.cos(angle)*(r-0.2), 0.75, z + Math.sin(angle)*(r-0.2));
                            scene.add(leg);
                        }
                        
                        addLabel(label, x, h+1.5, z);
                    }

                    function buildPump() {
                        // Centrifugal Pump between Balance and Processing
                        const pumpGroup = new THREE.Group();
                        
                        // Motor
                        const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 1.5, 16), new THREE.MeshStandardMaterial({color:0x34495e}));
                        motor.rotation.z = Math.PI/2;
                        pumpGroup.add(motor);
                        
                        // Impeller Casing
                        const casing = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.5, 16), new THREE.MeshStandardMaterial({color:0x95a5a6}));
                        casing.rotation.x = Math.PI/2;
                        casing.position.set(0.8, 0, 0);
                        pumpGroup.add(casing);
                        
                        pumpGroup.position.set(-10, 0.8, 0);
                        pumpMesh = pumpGroup;
                        scene.add(pumpGroup);
                        addLabel("PUMP", -10, 2, 0);
                    }

                    function buildProcessingLine() {
                        // All units arranged linearly for clarity
                        
                        // 1. REGENERATION (PHE)
                        createPHEUnit(-5, 0, 0, 0xf39c12, "REGEN");
                        
                        // 2. SEPARATOR (Centrifuge)
                        const sepGroup = new THREE.Group();
                        const sepBody = new THREE.Mesh(new THREE.CylinderGeometry(1, 1.5, 2), new THREE.MeshStandardMaterial({color:0xecf0f1}));
                        const sepTop = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 16, 0, Math.PI*2, 0, Math.PI/2), new THREE.MeshStandardMaterial({color:0xecf0f1}));
                        sepTop.position.y = 1;
                        sepGroup.add(sepBody); sepGroup.add(sepTop);
                        sepGroup.position.set(-1, 2, 2); // Slightly forward
                        scene.add(sepGroup);
                        addLabel("SEPARATOR", -1, 4, 2);

                        // 3. HOMOGENIZER (Block)
                        const homoGroup = new THREE.Group();
                        const body = new THREE.Mesh(new THREE.BoxGeometry(2.5, 2, 1.5), new THREE.MeshStandardMaterial({color:0x8e44ad}));
                        const pistons = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.8), new THREE.MeshStandardMaterial({color:0xffffff}));
                        pistons.rotation.z = Math.PI/2; pistons.position.set(0, 0.5, 0.8);
                        homoGroup.add(body); homoGroup.add(pistons);
                        const p2 = pistons.clone(); p2.position.set(0, 0, 0.8); homoGroup.add(p2);
                        const p3 = pistons.clone(); p3.position.set(0, -0.5, 0.8); homoGroup.add(p3);
                        homoGroup.position.set(3, 1.5, 0);
                        scene.add(homoGroup);
                        addLabel("HOMOGENIZER", 3, 3.5, 0);

                        // 4. HEATING & COOLING (PHE)
                        createPHEUnit(7, 0, 0, 0xe74c3c, "HEATING");
                        createPHEUnit(10, 0, 0, 0x3498db, "COOLING");
                    }
                    
                    function createPHEUnit(x, z, offset, color, lbl) {
                        const mat = new THREE.MeshStandardMaterial({ color: color });
                        const plates = new THREE.Mesh(new THREE.BoxGeometry(1.5, 2.5, 2), mat);
                        plates.position.set(x, 2, z);
                        scene.add(plates);
                        
                        // Frame
                        const frame = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.7, 0.2), new THREE.MeshStandardMaterial({color:0x2c3e50}));
                        frame.position.set(x, 2, z-1.1); scene.add(frame);
                        const f2 = frame.clone(); f2.position.set(x, 2, z+1.1); scene.add(f2);
                        
                        addLabel(lbl, x, 4, z);
                    }

                    function buildHoldingAndFDV() {
                        // Holding Tube: Zig Zag above Heating
                        const tubeMat = new THREE.MeshStandardMaterial({color:0xbdc3c7});
                        const tubeGroup = new THREE.Group();
                        for(let i=0; i<3; i++) {
                            const t = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4), tubeMat);
                            t.rotation.z = Math.PI/2;
                            t.position.set(0, i*0.3, -i*0.4);
                            tubeGroup.add(t);
                        }
                        // Connector bends simulated
                        tubeGroup.position.set(7, 4, -2); // Above heating
                        scene.add(tubeGroup);
                        addLabel("HOLDING", 7, 5.5, -2);

                        // FDV
                        fdvMesh = new THREE.Mesh(new THREE.SphereGeometry(0.5), new THREE.MeshStandardMaterial({color:0xecf0f1}));
                        fdvMesh.position.set(10, 4, -2);
                        const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.2,0.2,0.8), new THREE.MeshStandardMaterial({color:0x333}));
                        stem.position.y = 0.5; fdvMesh.add(stem);
                        scene.add(fdvMesh);
                        addLabel("FDV", 10, 5, -2);
                    }

                    function buildPipes() {
                        const pipeMat = new THREE.MeshStandardMaterial({ color: 0x888888, transparent: true, opacity: 0.3 });
                        // Visual Pipes (Static simplified)
                        // Raw -> Balance
                        createPipe([-25,1,0, -15,1,0, -15,3,0], pipeMat);
                        // Balance -> Pump
                        createPipe([-15,0.5,0, -10,0.5,0], pipeMat);
                        // Pump -> Regen
                        createPipe([-10,0.5,0, -5,0.5,0, -5,1,0], pipeMat);
                        // Regen -> Sep
                        createPipe([-5,3,0, -1,3,0, -1,3,2], pipeMat);
                        // Sep -> Homo
                        createPipe([-1,3,2, 3,3,2, 3,2,0], pipeMat);
                        // Homo -> Heat
                        createPipe([3,2,0, 7,2,0], pipeMat);
                        // Heat -> Hold
                        createPipe([7,3,0, 7,4,0, 7,4,-2], pipeMat);
                        // Hold -> FDV
                        createPipe([7,4,-2, 10,4,-2], pipeMat);
                        // FDV -> Cool (Forward)
                        createPipe([10,4,-2, 10,3,0], pipeMat);
                        // Cool -> Silos
                        createPipe([10,1,0, 20,1,0], pipeMat);
                        // FDV -> Balance (Divert)
                        createPipe([10,4,-2, 10,6,-2, -15,6,-2, -15,4,0], pipeMat);
                    }

                    function createPipe(points, mat) {
                        const pts = [];
                        for(let i=0; i<points.length; i+=3) pts.push(new THREE.Vector3(points[i], points[i+1], points[i+2]));
                        const path = new THREE.CatmullRomCurve3(pts);
                        const geo = new THREE.TubeGeometry(path, 10, 0.08, 8, false);
                        const mesh = new THREE.Mesh(geo, mat);
                        scene.add(mesh);
                    }

                    function addLabel(text, x, y, z) {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.width = 256; canvas.height = 64;
                        ctx.fillStyle = "rgba(0,0,0,0.6)"; ctx.fillRect(0,0,256,64);
                        ctx.font = "bold 28px Arial"; ctx.fillStyle = "white";
                        ctx.textAlign = "center"; ctx.textBaseline = "middle";
                        ctx.fillText(text, 128, 32);
                        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas) }));
                        sprite.position.set(x, y, z);
                        sprite.scale.set(3, 0.75, 1);
                        scene.add(sprite);
                    }

                    // --- PATHS FOR ANIMATION ---
                    function initPaths() {
                        // 1. Raw to Pump
                        pathFeed = new THREE.CatmullRomCurve3([v(-25,1,0), v(-15,1,0), v(-15,0.5,0), v(-10,0.5,0)]);
                        // 2. Pump to Regen
                        pathRegen = new THREE.CatmullRomCurve3([v(-10,0.5,0), v(-5,0.5,0), v(-5,2.5,0)]);
                        // 3. Regen to Separator
                        pathSepMain = new THREE.CatmullRomCurve3([v(-5,2.5,0), v(-1,2.5,0), v(-1,2.5,2)]);
                        // 4. Sep Output (Cream)
                        pathSepCream = new THREE.CatmullRomCurve3([v(-1,2.5,2), v(-1,1,4), v(20,1,5), v(20,5,5)]);
                        // 5. Sep Output (Skim/Main) -> Homo
                        pathHomo = new THREE.CatmullRomCurve3([v(-1,2.5,2), v(3,2.5,0)]);
                        // 6. Homo -> Heating
                        pathHeat = new THREE.CatmullRomCurve3([v(3,2.5,0), v(7,2.5,0), v(7,4,-2)]); // Ends at hold start
                        // 7. Holding -> FDV
                        pathHold = new THREE.CatmullRomCurve3([v(7,4,-2), v(8.5,4,-2), v(10,4,-2)]);
                        
                        // 8. Safe Path (Forward)
                        pathSafe = new THREE.CatmullRomCurve3([v(10,4,-2), v(10,2.5,0), v(20,0.5,-5), v(20,5,-5)]);
                        // 9. Divert Path
                        pathDivert = new THREE.CatmullRomCurve3([v(10,4,-2), v(10,6,-2), v(-15,6,-2), v(-15,4,0)]);
                    }
                    function v(x,y,z) { return new THREE.Vector3(x,y,z); }

                    // --- GAME LOOP ---
                    function animate() {
                        requestAnimationFrame(animate);
                        controls.update();

                        updateProcessLogic();
                        updateParticles();
                        
                        if(systemOn) {
                            pumpMesh.children[1].rotation.x += 0.5; // Rotate pump impeller
                        }

                        renderer.render(scene, camera);
                    }

                    function updateProcessLogic() {
                        // Temp Simulation
                        let target = 25;
                        if(systemOn) {
                            target = 25 + (steamVal * 0.7); // Max ~95C
                            if(currentTemp < target) currentTemp += 0.2;
                            if(currentTemp > target) currentTemp -= 0.1;
                        } else {
                            if(currentTemp > 25) currentTemp -= 0.1;
                        }
                        elTemp.innerText = currentTemp.toFixed(1) + "°C";

                        // FDV Logic
                        if(systemOn && currentTemp >= targetTempSet) {
                            fdvState = 'FORWARD';
                            setLight(elLightFwd, true); setLight(elLightDiv, false);
                            fdvMesh.material.color.setHex(0x2ecc71);
                        } else {
                            fdvState = 'DIVERT';
                            setLight(elLightFwd, false); setLight(elLightDiv, true);
                            fdvMesh.material.color.setHex(0xe74c3c);
                        }
                        
                        // Status Text
                        let status = "System Off";
                        if(systemOn) {
                            status = \`Pump ON.\\nSeparator: \${sepOn?'Active':'Bypass'}\\nHomo: \${homoOn?'Active':'Bypass'}\\nMode: \${fdvState}\`;
                        }
                        elStatus.innerText = status;
                    }

                    function updateParticles() {
                        if(!systemOn) return;

                        // Spawn Rate
                        if(Math.random() > 0.8) spawnParticle();

                        for(let i=particles.length-1; i>=0; i--) {
                            let p = particles[i];
                            p.progress += 0.01; // Speed
                            
                            if(p.path) {
                                p.mesh.position.copy(p.path.getPoint(p.progress));
                            }
                            
                            if(p.progress >= 1) {
                                p.progress = 0;
                                handlePathSwitch(p);
                            }
                        }
                    }

                    function spawnParticle() {
                        const geo = new THREE.SphereGeometry(0.1, 8, 8);
                        const mat = new THREE.MeshBasicMaterial({color:0xffffff});
                        const mesh = new THREE.Mesh(geo, mat);
                        scene.add(mesh);
                        particles.push({ mesh: mesh, path: pathFeed, progress: 0, stage: 'feed' });
                    }

                    function handlePathSwitch(p) {
                        // State Machine for Particles
                        if(p.stage === 'feed') {
                            p.path = pathRegen; p.stage = 'regen';
                        } else if (p.stage === 'regen') {
                            // To Separator
                            p.path = pathSepMain; p.stage = 'sep_in';
                        } else if (p.stage === 'sep_in') {
                            if(sepOn) {
                                // Split logic: 20% Cream, 80% Skim
                                if(Math.random() > 0.8) {
                                     p.path = pathSepCream; p.stage = 'cream_out';
                                     p.mesh.material.color.setHex(0xf1c40f); // Yellow cream
                                } else {
                                    p.path = pathHomo; p.stage = 'homo_in';
                                }
                            } else {
                                p.path = pathHomo; p.stage = 'homo_in'; // Bypass visual logic simplified
                            }
                        } else if (p.stage === 'homo_in') {
                            p.path = pathHeat; p.stage = 'heating';
                            if(homoOn && p.mesh.material.color.getHex() === 0xffffff) {
                                // Visual effect: homogenized milk is brighter white? (keep white)
                            }
                        } else if (p.stage === 'heating') {
                            p.path = pathHold; p.stage = 'holding';
                        } else if (p.stage === 'holding') {
                            // FDV Decision
                            if(fdvState === 'FORWARD') {
                                p.path = pathSafe; p.stage = 'finished';
                                p.mesh.material.color.setHex(0x2ecc71); // Safe Green tint
                            } else {
                                p.path = pathDivert; p.stage = 'divert';
                                p.mesh.material.color.setHex(0xe74c3c); // Unsafe Red tint
                            }
                        } else if (p.stage === 'divert') {
                            // Back to start logic
                            p.path = pathRegen; p.stage = 'regen'; // Loop back into process
                            p.mesh.material.color.setHex(0xffffff);
                        } else {
                            // Finished or Cream Out -> Remove
                            scene.remove(p.mesh);
                            particles.splice(particles.indexOf(p), 1);
                        }
                    }

                    // --- UI INTERACTION ---
                    function toggleSystem() {
                        systemOn = !systemOn;
                        if(systemOn) {
                            btnPower.classList.add('active');
                            btnPower.innerText = "STOP PLANT";
                            elPumpLight.classList.add('on'); elPumpLight.classList.remove('off');
                            elTooltip.innerText = "Pump Running. Milk flowing.";
                        } else {
                            btnPower.classList.remove('active');
                            btnPower.innerText = "START PLANT";
                            elPumpLight.classList.remove('on'); elPumpLight.classList.add('off');
                            elTooltip.innerText = "System Stopped.";
                        }
                    }
                    function toggleSep() {
                        sepOn = !sepOn;
                        btnSep.innerText = sepOn ? "Separator: ON" : "Separator: OFF";
                        btnSep.classList.toggle('active');
                    }
                    function toggleHomo() {
                        homoOn = !homoOn;
                        btnHomo.innerText = homoOn ? "Homogenizer: ON" : "Homogenizer: OFF";
                        btnHomo.classList.toggle('active');
                    }
                    window.updateSteam = function(val) {
                        steamVal = parseInt(val);
                        document.getElementById('steam-val-text').innerText = val + "%";
                    }
                    function setLight(el, on) {
                        if(on) { el.classList.add('on'); el.classList.remove('off'); }
                        else { el.classList.add('off'); el.classList.remove('on'); }
                    }
                    function onWindowResize() {
                        camera.aspect = window.innerWidth / (window.innerHeight - 200);
                        camera.updateProjectionMatrix();
                        renderer.setSize(window.innerWidth, window.innerHeight - 200);
                    }

                    init();
                <\/script>
            </body>
            </html>
        `
    }
}
