
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
                    #ui-container { position: absolute; bottom: 0; left: 0; width: 100%; background: rgba(20, 30, 40, 0.95); border-top: 4px solid #3498db; color: white; display: flex; justify-content: space-around; align-items: flex-start; padding: 15px 10px; box-sizing: border-box; backdrop-filter: blur(5px); z-index: 10; }
                    .panel-section { display: flex; flex-direction: column; align-items: center; padding: 0 15px; border-right: 1px solid #444; height: 100%; }
                    .panel-section:last-child { border-right: none; }
                    h2 { margin: 0 0 10px 0; font-size: 14px; color: #3498db; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
                    .digital-display { background: #000; color: #0f0; font-family: 'Courier New', monospace; font-size: 20px; padding: 5px 10px; border: 2px solid #555; border-radius: 4px; margin-bottom: 5px; min-width: 70px; text-align: center; }
                    .status-light { width: 15px; height: 15px; border-radius: 50%; background: #333; border: 2px solid #555; margin: 5px; box-shadow: inset 0 0 5px #000; display: inline-block; }
                    .status-light.on { background: #00ff00; box-shadow: 0 0 8px #00ff00; }
                    .status-light.off { background: #ff0000; box-shadow: 0 0 8px #ff0000; }
                    .toggle-btn { background: #444; color: #ccc; border: 1px solid #666; padding: 5px 10px; cursor: pointer; border-radius: 4px; font-size: 12px; margin: 2px; width: 100px; }
                    .toggle-btn.active { background: #2ecc71; color: #fff; border-color: #27ae60; }
                    button.main-start { background: linear-gradient(to bottom, #2c3e50, #1a252f); color: white; border: 2px solid #3498db; padding: 10px 20px; font-weight: bold; cursor: pointer; border-radius: 6px; transition: all 0.2s; }
                    button.main-start:hover { background: #34495e; box-shadow: 0 0 15px rgba(52, 152, 219, 0.5); }
                    button.main-start.active { background: #e74c3c; border-color: #c0392b; }
                    #view-controls { position: absolute; top: 20px; right: 20px; display: flex; flex-direction: column; gap: 5px; z-index: 20; background: rgba(0,0,0,0.5); padding: 5px; border-radius: 8px; }
                    #view-controls button { background: rgba(50,50,50,0.8); color: white; border: 1px solid #777; padding: 6px 12px; cursor: pointer; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; width: 80px; }
                    #view-controls button:hover { background: #3498db; border-color: #3498db; }
                    .view-label { font-size: 10px; color: #aaa; text-align: center; margin-bottom: 2px; }
                    input[type=range] { width: 120px; cursor: pointer; }
                    #tooltip { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: #fff; padding: 10px 20px; border-radius: 20px; pointer-events: none; font-size: 14px; border: 1px solid #555; z-index: 10; }
                    .legend { position: absolute; top: 20px; left: 20px; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px; font-size: 11px; color: #ddd; z-index: 10; }
                    .legend-item { display: flex; align-items: center; margin-bottom: 4px; }
                    .color-box { width: 10px; height: 10px; margin-right: 8px; border: 1px solid #777; }
                    @media (max-width: 768px) { 
                        #ui-container { flex-wrap: wrap; padding: 5px; justify-content: center; height: auto; max-height: 200px; }
                        .panel-section { flex-grow: 1; flex-basis: 45%; padding: 5px; margin-bottom: 5px; border-right: none; min-width: 140px; }
                        h2 { font-size: 11px; margin-bottom: 5px;}
                        .digital-display { font-size: 14px; padding: 2px 4px; }
                        .toggle-btn, button.main-start { width: 90%; font-size: 10px; padding: 4px; }
                        #view-controls { display: none; }
                        .legend { display: none; }
                        #tooltip { display: none; }
                    }
                </style>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
                <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"><\/script>
            </head>
            <body>
                <div class="legend">
                    <div class="legend-item"><div class="color-box" style="background:#ecf0f1"></div>Tanks / Pipes</div>
                    <div class="legend-item"><div class="color-box" style="background:#34495e"></div>Pump & Motors</div>
                    <div class="legend-item"><div class="color-box" style="background:#f39c12"></div>Regen/Separator</div>
                    <div class="legend-item"><div class="color-box" style="background:#8e44ad"></div>Homogenizer</div>
                    <div class="legend-item"><div class="color-box" style="background:#e74c3c"></div>Heating Section</div>
                    <div class="legend-item"><div class="color-box" style="background:#3498db"></div>Cooling Section</div>
                </div>
                <div id="view-controls">
                    <div class="view-label">CAMERA VIEW</div>
                    <button onclick="setView('front')">FRONT</button>
                    <button onclick="setView('back')">BACK</button>
                    <button onclick="setView('left')">LEFT</button>
                    <button onclick="setView('right')">RIGHT</button>
                    <button onclick="setView('top')">TOP</button>
                    <button onclick="setView('iso')">ISO</button>
                </div>
                <div id="tooltip">PLANT READY. Configure & Start.</div>
                <div id="ui-container">
                    <div class="panel-section">
                        <h2>Main Control</h2>
                        <div style="display:flex; align-items:center; margin-bottom:10px;">
                            <div id="status-pump" class="status-light"></div>
                            <span style="font-size:12px; margin-left:5px;">FEED PUMP</span>
                        </div>
                        <button class="main-start" id="btn-power" onclick="toggleSystem()">START PLANT</button>
                    </div>
                    <div class="panel-section">
                        <h2>Units</h2>
                        <button class="toggle-btn" id="btn-sep" onclick="toggleSep()">Separator: OFF</button>
                        <button class="toggle-btn" id="btn-homo" onclick="toggleHomo()">Homogenizer: OFF</button>
                    </div>
                    <div class="panel-section">
                        <h2>Pasteurizer</h2>
                        <div class="digital-display" id="temp-display">25.0°C</div>
                        <label style="font-size:11px; color:#aaa;">Steam Valve</label>
                        <input type="range" min="0" max="100" value="0" oninput="updateSteam(this.value)">
                        <span id="steam-val-text" style="font-size:12px;">0%</span>
                    </div>
                    <div class="panel-section">
                        <h2>FDV Logic</h2>
                        <div style="display:flex; gap:15px; margin-top:5px;">
                            <div style="text-align:center;"><div id="light-fwd" class="status-light"></div><div style="font-size:10px;">SAFE</div></div>
                            <div style="text-align:center;"><div id="light-div" class="status-light on"></div><div style="font-size:10px;">DIVERT</div></div>
                        </div>
                        <div style="font-size:11px; color:#aaa; margin-top:8px;">Set Point: 72.0°C</div>
                    </div>
                    <div class="panel-section" style="width: 180px; align-items:flex-start;">
                        <h2>Status</h2>
                        <div id="flow-status" style="font-size: 11px; color: #0f0; line-height:1.4;">Idle.</div>
                    </div>
                </div>
                <script>
                    let scene, camera, renderer, controls;
                    let fdvMesh, pumpMesh, particles = [];
                    let systemOn = false, sepOn = false, homoOn = false, steamVal = 0, currentTemp = 25.0;
                    const targetTempSet = 72.0;
                    let fdvState = 'DIVERT';
                    let pathFeed, pathRegen, pathSepMain, pathSepCream, pathHomo, pathHeat, pathHold, pathSafe, pathDivert;
                    
                    const elTemp = document.getElementById('temp-display'),
                          elStatus = document.getElementById('flow-status'),
                          elLightFwd = document.getElementById('light-fwd'),
                          elLightDiv = document.getElementById('light-div'),
                          elPumpLight = document.getElementById('status-pump'),
                          btnPower = document.getElementById('btn-power'),
                          btnSep = document.getElementById('btn-sep'),
                          btnHomo = document.getElementById('btn-homo');

                    function getRendererHeight() {
                        const uiContainer = document.getElementById('ui-container');
                        return window.innerHeight - (uiContainer ? uiContainer.offsetHeight : 0);
                    }
                    
                    function init() {
                        scene = new THREE.Scene();
                        scene.background = new THREE.Color(0x222222);
                        scene.fog = new THREE.Fog(0x222222, 30, 100);
                        camera = new THREE.PerspectiveCamera(45, window.innerWidth / getRendererHeight(), 0.1, 1000);
                        camera.position.set(0, 20, 35);
                        renderer = new THREE.WebGLRenderer({ antialias: true });
                        renderer.setSize(window.innerWidth, getRendererHeight());
                        document.body.appendChild(renderer.domElement);
                        controls = new THREE.OrbitControls(camera, renderer.domElement);
                        controls.enableDamping = true; controls.maxPolarAngle = Math.PI / 2 - 0.05;
                        const amb = new THREE.AmbientLight(0xffffff, 0.4); scene.add(amb);
                        const sun1 = new THREE.DirectionalLight(0xffffff, 0.7); sun1.position.set(10, 30, 20); scene.add(sun1);
                        const sun2 = new THREE.DirectionalLight(0xffbbaa, 0.4); sun2.position.set(-10, 20, -20); scene.add(sun2);
                        buildEnvironment(); buildTanks(); buildPump(); buildProcessingLine(); buildHoldingAndFDV(); buildPipes();
                        initPaths();
                        window.addEventListener('resize', onWindowResize);
                        animate();
                    }
                    
                    window.setView=function(v){const d=35,h=20;let x=0,y=h,z=0;switch(v){case'front':z=d;break;case'back':z=-d;break;case'left':x=-d;break;case'right':x=d;break;case'top':y=d+15,z=1;break;case'iso':x=25,y=25,z=25;break}camera.position.set(x,y,z);camera.lookAt(0,0,0);controls.update()}
                    
                    function buildEnvironment(){const f=new THREE.Mesh(new THREE.PlaneGeometry(80,60),new THREE.MeshStandardMaterial({color:0x151515,roughness:.8}));f.rotation.x=-Math.PI/2;scene.add(f);scene.add(new THREE.GridHelper(80,40,0x444444,0x222222))}
                    function buildTanks(){const t=new THREE.MeshStandardMaterial({color:0xbdc3c7,metalness:.7,roughness:.2});createTank(-25,5,0,3,10,"RAW MILK",t);createTank(-15,2.5,0,1.5,3,"BALANCE",t);createTank(20,5,-5,3,10,"SKIM/PAST.",t);createTank(20,3,5,1.5,5,"CREAM",t)}
                    function createTank(t,e,o,i,n,s,a){const d=new THREE.Mesh(new THREE.CylinderGeometry(i,i,n,32),a);d.position.set(t,e,o);scene.add(d);const r=new THREE.CylinderGeometry(.1,.1,1.5,8);for(let e=0;e<4;e++){const a=new THREE.Mesh(r);const l=e*90*Math.PI/180;a.position.set(t+Math.cos(l)*(i-.2),.75,o+Math.sin(l)*(i-.2)),scene.add(a)}addLabel(s,t,n+1.5,o)}
                    function buildPump(){const t=new THREE.Group;const e=new THREE.Mesh(new THREE.CylinderGeometry(.6,.6,1.5,16),new THREE.MeshStandardMaterial({color:0x34495e}));e.rotation.z=Math.PI/2,t.add(e);const o=new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,.5,16),new THREE.MeshStandardMaterial({color:0x95a5a6}));o.rotation.x=Math.PI/2,o.position.set(.8,0,0),t.add(o),t.position.set(-10,.8,0),pumpMesh=t,scene.add(t),addLabel("PUMP",-10,2,0)}
                    function buildProcessingLine(){createPHEUnit(-5,0,0,0xf39c12,"REGEN");const t=new THREE.Group,e=new THREE.Mesh(new THREE.CylinderGeometry(1,1.5,2),new THREE.MeshStandardMaterial({color:0xecf0f1})),o=new THREE.Mesh(new THREE.SphereGeometry(1,32,16,0,6.283185307179586,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xecf0f1}));o.position.y=1,t.add(e),t.add(o),t.position.set(-1,2,2),scene.add(t),addLabel("SEPARATOR",-1,4,2);const i=new THREE.Group,n=new THREE.Mesh(new THREE.BoxGeometry(2.5,2,1.5),new THREE.MeshStandardMaterial({color:0x8e44ad})),s=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.8),new THREE.MeshStandardMaterial({color:0xffffff}));s.rotation.z=Math.PI/2,s.position.set(0,.5,.8),i.add(n),i.add(s);const a=s.clone();a.position.set(0,0,.8),i.add(a);const d=s.clone();d.position.set(0,-.5,.8),i.add(d),i.position.set(3,1.5,0),scene.add(i),addLabel("HOMOGENIZER",3,3.5,0),createPHEUnit(7,0,0,0xe74c3c,"HEATING"),createPHEUnit(10,0,0,0x3498db,"COOLING")}
                    function createPHEUnit(t,e,o,i,n){const s=new THREE.MeshStandardMaterial({color:i}),a=new THREE.Mesh(new THREE.BoxGeometry(1.5,2.5,2),s);a.position.set(t,2,e),scene.add(a);const d=new THREE.Mesh(new THREE.BoxGeometry(1.6,2.7,.2),new THREE.MeshStandardMaterial({color:0x2c3e50}));d.position.set(t,2,e-1.1),scene.add(d);const r=d.clone();r.position.set(t,2,e+1.1),scene.add(r),addLabel(n,t,4,e)}
                    function buildHoldingAndFDV(){const t=new THREE.MeshStandardMaterial({color:0xbdc3c7}),e=new THREE.Group;for(let o=0;o<3;o++){const i=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,4),t);i.rotation.z=Math.PI/2,i.position.set(0,o*.3,-o*.4),e.add(i)}e.position.set(7,4,-2),scene.add(e),addLabel("HOLDING",7,5.5,-2),fdvMesh=new THREE.Mesh(new THREE.SphereGeometry(.5),new THREE.MeshStandardMaterial({color:0xecf0f1}));const o=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.8),new THREE.MeshStandardMaterial({color:0x333}));o.position.y=.5,fdvMesh.add(o),fdvMesh.position.set(10,4,-2),scene.add(fdvMesh),addLabel("FDV",10,5,-2)}
                    function buildPipes(){const t=new THREE.MeshStandardMaterial({color:0x888888,transparent:!0,opacity:.3});createPipe([-25,1,0,-15,1,0,-15,3,0],t),createPipe([-15,.5,0,-10,.5,0],t),createPipe([-10,.5,0,-5,.5,0,-5,1,0],t),createPipe([-5,3,0,-1,3,0,-1,3,2],t),createPipe([-1,3,2,3,3,2,3,2,0],t),createPipe([3,2,0,7,2,0],t),createPipe([7,3,0,7,4,0,7,4,-2],t),createPipe([7,4,-2,10,4,-2],t),createPipe([10,4,-2,10,3,0],t),createPipe([10,1,0,20,1,0],t),createPipe([10,4,-2,10,6,-2,-15,6,-2,-15,4,0],t)}
                    function createPipe(t,e){const o=[];for(let e=0;e<t.length;e+=3)o.push(new THREE.Vector3(t[e],t[e+1],t[e+2]));const i=new THREE.CatmullRomCurve3(o),n=new THREE.TubeGeometry(i,10,.08,8,!1),s=new THREE.Mesh(n,e);scene.add(s)}
                    function addLabel(t,e,o,i){const n=document.createElement("canvas");n.width=256,n.height=64;const s=n.getContext("2d");s.fillStyle="rgba(0,0,0,0.6)",s.fillRect(0,0,256,64),s.font="bold 28px Arial",s.fillStyle="white",s.textAlign="center",s.textBaseline="middle",s.fillText(t,128,32);const a=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(n)}));a.position.set(e,o,i),a.scale.set(3,.75,1),scene.add(a)}
                    function initPaths(){pathFeed=new THREE.CatmullRomCurve3([v(-25,1,0),v(-15,1,0),v(-15,.5,0),v(-10,.5,0)]),pathRegen=new THREE.CatmullRomCurve3([v(-10,.5,0),v(-5,.5,0),v(-5,2.5,0)]),pathSepMain=new THREE.CatmullRomCurve3([v(-5,2.5,0),v(-1,2.5,0),v(-1,2.5,2)]),pathSepCream=new THREE.CatmullRomCurve3([v(-1,2.5,2),v(-1,1,4),v(20,1,5),v(20,5,5)]),pathHomo=new THREE.CatmullRomCurve3([v(-1,2.5,2),v(3,2.5,0)]),pathHeat=new THREE.CatmullRomCurve3([v(3,2.5,0),v(7,2.5,0),v(7,4,-2)]),pathHold=new THREE.CatmullRomCurve3([v(7,4,-2),v(8.5,4,-2),v(10,4,-2)]),pathSafe=new THREE.CatmullRomCurve3([v(10,4,-2),v(10,2.5,0),v(20,0.5,-5),v(20,5,-5)]),pathDivert=new THREE.CatmullRomCurve3([v(10,4,-2),v(10,6,-2),v(-15,6,-2),v(-15,4,0)])}
                    function v(t,e,o){return new THREE.Vector3(t,e,o)}
                    function animate(){requestAnimationFrame(animate),controls.update(),updateProcessLogic(),updateParticles(),systemOn&&(pumpMesh.children[1].rotation.x+=.5),renderer.render(scene,camera)}
                    function updateProcessLogic() {
                        let target = 25.0;
                        if (systemOn) {
                            target = 25.0 + (steamVal * 0.7); // Max ~95C
                            if (currentTemp < target) currentTemp += 0.2;
                            if (currentTemp > target) currentTemp -= 0.1;
                        } else {
                            if (currentTemp > 25) currentTemp -= 0.1;
                        }
                        elTemp.innerText = currentTemp.toFixed(1) + "°C";

                        if (systemOn && currentTemp >= targetTempSet) {
                            fdvState = 'FORWARD';
                            setLight(elLightFwd, true);
                            setLight(elLightDiv, false);
                            fdvMesh.material.color.setHex(0x2ecc71);
                        } else {
                            fdvState = 'DIVERT';
                            setLight(elLightFwd, false);
                            setLight(elLightDiv, true);
                            fdvMesh.material.color.setHex(0xe74c3c);
                        }
                        let status = "System Off";
                        if (systemOn) {
                           status = \`Pump ON.\\nSeparator: \${sepOn ? 'Active' : 'Bypass'}\\nHomo: \${homoOn ? 'Active' : 'Bypass'}\\nMode: \${fdvState}\`;
                        }
                        elStatus.innerText = status;
                    }
                    function updateParticles(){if(!systemOn)return;Math.random()>.8&&spawnParticle();for(let t=particles.length-1;t>=0;t--){let e=particles[t];e.progress+=.01,e.path&&e.mesh.position.copy(e.path.getPoint(e.progress)),e.progress>=1&&(e.progress=0,handlePathSwitch(e))}}
                    function spawnParticle(){const t=new THREE.SphereGeometry(.1,8,8),e=new THREE.MeshBasicMaterial({color:0xffffff}),o=new THREE.Mesh(t,e);scene.add(o),particles.push({mesh:o,path:pathFeed,progress:0,stage:"feed"})}
                    function handlePathSwitch(t){"feed"===t.stage?(t.path=pathRegen,t.stage="regen"):"regen"===t.stage?(t.path=pathSepMain,t.stage="sep_in"):"sep_in"===t.stage?sepOn?Math.random()>.8?(t.path=pathSepCream,t.stage="cream_out",t.mesh.material.color.setHex(0xf1c40f)):(t.path=pathHomo,t.stage="homo_in"):(t.path=pathHomo,t.stage="homo_in"):"homo_in"===t.stage?(t.path=pathHeat,t.stage="heating"):"heating"===t.stage?(t.path=pathHold,t.stage="holding"):"holding"===t.stage?"FORWARD"===fdvState?(t.path=pathSafe,t.stage="finished",t.mesh.material.color.setHex(0x2ecc71)):(t.path=pathDivert,t.stage="divert",t.mesh.material.color.setHex(0xe74c3c)):"divert"===t.stage?(t.path=pathRegen,t.stage="regen",t.mesh.material.color.setHex(0xffffff)):(scene.remove(t.mesh),particles.splice(particles.indexOf(t),1))}
                    function toggleSystem(){systemOn=!systemOn,systemOn?(btnPower.classList.add('active'),btnPower.innerText="STOP PLANT",elPumpLight.classList.add("on"),elPumpLight.classList.remove("off"),elTooltip.innerText="Pump Running. Milk flowing."):(btnPower.classList.remove('active'),btnPower.innerText="START PLANT",elPumpLight.classList.remove("on"),elPumpLight.classList.add("off"),elTooltip.innerText="System Stopped.")}
                    function toggleSep(){sepOn=!sepOn;btnSep.innerText=sepOn?"Separator: ON":"Separator: OFF";btnSep.classList.toggle('active')}
                    function toggleHomo(){homoOn=!homoOn;btnHomo.innerText=homoOn?"Homogenizer: ON":"Homogenizer: OFF";btnHomo.classList.toggle('active')}
                    window.updateSteam=function(t){steamVal=parseInt(t),document.getElementById("steam-val-text").innerText=t+"%"}
                    function setLight(t,e){e?(t.classList.add("on"),t.classList.remove("off")):(t.classList.add("off"),t.classList.remove("on"))}
                    function onWindowResize(){camera.aspect=window.innerWidth/getRendererHeight(),camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,getRendererHeight())}
                    init();
                <\/script>
            </body>
            </html>
        `
    },
    hi: {
        title: "Pasteurization:",
        content: `
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">Pasteurization ka Introduction</h3>
            <p>Pasteurization ek critical heat treatment process hai jo use kiya jata hai dairy industry mein to ensure safety aur extend shelf life of milk aur other liquid dairy products. Iska naam hai French scientist Louis Pasteur ke naam par, jinhone discover kiya ki beverages ko heat karne se harmful microorganisms mar jate hain. Is process mein milk ko heat kiya jata hai to a specific temperature for a set period aur then rapidly cool kiya jata hai.</p>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">I. Pasteurization ke Objectives</h3>
            <p>Pasteurization ke goals twofold hain aur paramount importance rakhte hain for public health aur commerce.</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Public Health Safety (Primary Objective):</strong> Main goal hai milk ko make karna safe for human consumption by destroying all pathogenic (disease-causing) microorganisms. Raw milk harbor kar sakta hai dangerous bacteria jaise <i>Mycobacterium tuberculosis</i> (causes tuberculosis), <i>Brucella</i> spp. (causes brucellosis), <i>Salmonella</i> (causes salmonellosis), <i>Listeria monocytogenes</i> (causes listeriosis), aur pathogenic strains of <i>E. coli</i>. Pasteurization specifically designed hai to eliminate these threats.</li>
                <li><strong>Extended Shelf Life (Secondary Objective):</strong> Process also destroy karta hai large number of spoilage microorganisms (like psychrotrophic bacteria, yeasts, aur molds). Additionally, heat inactivate karta hai native milk enzymes like lipase, jo cause kar sakta hai hydrolytic rancidity (ek soapy off-flavor) during storage. By reducing microbial load aur inactivating enzymes, pasteurization significantly slow down karta hai spoilage process aur extend karta hai refrigerated shelf life of milk from few hours to several days ya weeks.</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">II. Common Pasteurization Methods</h3>
            <h4 class="font-semibold mt-4 mb-2">1. High-Temperature Short-Time (HTST) Pasteurization</h4>
            <p>Yeh sabse common method hai jo use hota hai modern, large-scale dairy plants mein for market milk due to its efficiency aur energy-saving capabilities.</p>
            <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> At least <strong>72°C (161°F)</strong></li>
                <li><strong>Time:</strong> For at least <strong>15 seconds</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> Yeh time-temperature combination scientifically validated hai to be lethal to the most heat-resistant, non-spore-forming pathogen jo commonly found hai milk mein, <i>Coxiella burnetii</i> (Q-fever ka agent). By ensuring destruction of this organism, yeh guaranteed hai ki all other less-resistant pathogens bhi destroy ho gaye. Heat exposure ki short duration minimize karta hai thermal damage to milk's nutritional aur sensory properties (flavor, color). Yeh continuous process carried out hota hai in a Plate Heat Exchanger (PHE).</p>

            <h4 class="font-semibold mt-4 mb-2">2. Low-Temperature Long-Time (LTLT) ya Batch Pasteurization</h4>
            <p>Yeh purani method hai, ab primarily use hoti hai for smaller batches ya for products like some specialty cheeses aur ice cream mixes jahan batch process more suitable hai.</p>
             <ul class="list-disc list-outside pl-5 mt-2 space-y-1">
                <li><strong>Temperature:</strong> At least <strong>63°C (145°F)</strong></li>
                <li><strong>Time:</strong> For at least <strong>30 minutes</strong></li>
            </ul>
            <p><strong>Scientific Reason:</strong> Principle same hai jaise HTST—achieving thermal kill of pathogens. Lower temperature require karta hai much longer holding time to achieve same lethal effect. Yeh process carried out hota hai in a jacketed vat, jahan milk heated hai, held for full duration, aur then cooled. Effective hone ke bawajud, yeh less energy-efficient hai aur more time-consuming than HTST.</p>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">III. HTST Pasteurizer: Working Principle & Flow</h3>
            <p>Ek HTST pasteurizer ek sophisticated system hai jo designed hai for continuous, efficient heat treatment. Yahan step-by-step breakdown hai iske operation ka:</p>
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
                <li><strong>Balance Tank:</strong> Process yahan se begin hota hai. Yeh ek small tank hai jo receive karta hai raw milk aur maintain karta hai constant head of pressure for feed pump. <strong>Scientific Reason:</strong> Yeh ensure karta hai consistent, uninterrupted flow of milk into pasteurizer, jo crucial hai for maintaining correct flow rate through holding tube.</li>
                <li><strong>Feed Pump:</strong> Ek centrifugal pump jo draw karta hai milk from balance tank aur push forward karta hai into system.</li>
                <li><strong>Regeneration Section:</strong> Yeh sabse energy-efficient part hai pasteurizer ka. Yahan, cold incoming raw milk flow karta hai one side of plates par, while hot, already pasteurized milk flow karta hai other side par in opposite direction. <strong>Scientific Reason:</strong> Heat transfer hota hai from hot milk to cold milk. Yeh pre-heat karta hai raw milk (e.g., 4°C se ~57°C tak) for free, reducing energy needed in heating section, aur simultaneously pre-cool karta hai hot milk, reducing energy needed for final cooling. Modern regenerators recover kar sakte hain up to 95% of heat energy.</li>
                <li><strong>Heating Section:</strong> Pre-heated milk then flow karta hai to heating section, jahan ise heat kiya jata hai to full pasteurization temperature (e.g., 72°C) using hot water as heating medium.</li>
                <li><strong>Holding Tube:</strong> Heating ke baad, milk flow karta hai through a long pipe of specific length aur diameter, known as holding tube. <strong>Scientific Reason:</strong> Yeh tube precisely engineered hai so that milk takes at least 15 seconds (minimum holding time) to travel from one end to other. Flow rate, controlled by feed pump, aur tube's dimensions critical hain for ensuring yeh CCP meet ho.</li>
                <li><strong>Flow Diversion Valve (FDV):</strong> Located at end of holding tube, FDV ek automated, three-way valve hai jo act karta hai as safety device. Ek temperature sensor continuously monitor karta hai milk temperature. 
                    <ul class='list-disc list-outside pl-5 mt-2 space-y-1'>
                        <li>Agar temperature at ya above set point hai (e.g., 72°C), valve allow karta hai properly pasteurized milk ko flow forward to regeneration section.</li>
                        <li>Agar temperature drop karta hai below set point for any reason, valve automatically divert karta hai under-processed milk back to balance tank for reprocessing. Yeh ensure karta hai ki no under-pasteurized milk ever reaches final product.</li>
                    </ul>
                </li>
                <li><strong>Regeneration Section (Cooling):</strong> Properly pasteurized hot milk flow back karta hai through regeneration section, giving up its heat to incoming raw milk aur getting pre-cooled in process (e.g., 72°C se down to ~20°C).</li>
                <li><strong>Cooling Section:</strong> Pre-cooled milk then enter karta hai final cooling section, jahan ise chilled kiya jata hai with cold water ya glycol to its final storage temperature of less than 5°C.</li>
                <li><strong>Storage Tank:</strong> Fully processed, chilled milk then sent hota hai to sterile storage tank, ready for packaging.</li>
            </ol>
            
            <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3 font-headline">IV. Pasteurization ka Verification: Alkaline Phosphatase (ALP) Test</h3>
            <p>To ensure pasteurization successful tha, ek reliable verification test needed hai. Alkaline Phosphatase (ALP) test universally accepted method hai for this.</p>
            <p><strong>Scientific Principle:</strong> ALP ek natural enzyme hai jo found hota hai raw milk mein. Coincidentally, iska heat resistance slightly greater hai than that of most heat-resistant common pathogenic bacterium jo found hota hai milk mein, <i>Coxiella burnetii</i> (organism jo cause karta hai Q-fever). Iska matlab hai ki time-temperature combination jo sufficient hai to destroy ALP will have certainly been sufficient to destroy all common pathogens.</p>
            <p><strong>The Test:</strong> Test work karta hai by providing ek phosphate substrate to milk sample. Agar active ALP present hai (indicating improper pasteurization ya raw milk contamination), yeh cleave karega phosphate group from substrate, jo then produce karta hai color change. Color change ki absence (negative result) confirm karta hai ki pasteurization successful tha. Positive ALP test means product unsafe hai aur must not be released.</p>
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
                    #ui-container { position: absolute; bottom: 0; left: 0; width: 100%; background: rgba(20, 30, 40, 0.95); border-top: 4px solid #3498db; color: white; display: flex; justify-content: space-around; align-items: flex-start; padding: 15px 10px; box-sizing: border-box; backdrop-filter: blur(5px); z-index: 10; }
                    .panel-section { display: flex; flex-direction: column; align-items: center; padding: 0 15px; border-right: 1px solid #444; height: 100%; }
                    .panel-section:last-child { border-right: none; }
                    h2 { margin: 0 0 10px 0; font-size: 14px; color: #3498db; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
                    .digital-display { background: #000; color: #0f0; font-family: 'Courier New', monospace; font-size: 20px; padding: 5px 10px; border: 2px solid #555; border-radius: 4px; margin-bottom: 5px; min-width: 70px; text-align: center; }
                    .status-light { width: 15px; height: 15px; border-radius: 50%; background: #333; border: 2px solid #555; margin: 5px; box-shadow: inset 0 0 5px #000; display: inline-block; }
                    .status-light.on { background: #00ff00; box-shadow: 0 0 8px #00ff00; }
                    .status-light.off { background: #ff0000; box-shadow: 0 0 8px #ff0000; }
                    .toggle-btn { background: #444; color: #ccc; border: 1px solid #666; padding: 5px 10px; cursor: pointer; border-radius: 4px; font-size: 12px; margin: 2px; width: 100px; }
                    .toggle-btn.active { background: #2ecc71; color: #fff; border-color: #27ae60; }
                    button.main-start { background: linear-gradient(to bottom, #2c3e50, #1a252f); color: white; border: 2px solid #3498db; padding: 10px 20px; font-weight: bold; cursor: pointer; border-radius: 6px; transition: all 0.2s; }
                    button.main-start:hover { background: #34495e; box-shadow: 0 0 15px rgba(52, 152, 219, 0.5); }
                    button.main-start.active { background: #e74c3c; border-color: #c0392b; }
                    #view-controls { position: absolute; top: 20px; right: 20px; display: flex; flex-direction: column; gap: 5px; z-index: 20; background: rgba(0,0,0,0.5); padding: 5px; border-radius: 8px; }
                    #view-controls button { background: rgba(50,50,50,0.8); color: white; border: 1px solid #777; padding: 6px 12px; cursor: pointer; border-radius: 4px; font-size: 11px; font-weight: bold; text-transform: uppercase; width: 80px; }
                    #view-controls button:hover { background: #3498db; border-color: #3498db; }
                    .view-label { font-size: 10px; color: #aaa; text-align: center; margin-bottom: 2px; }
                    input[type=range] { width: 120px; cursor: pointer; }
                    #tooltip { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.8); color: #fff; padding: 10px 20px; border-radius: 20px; pointer-events: none; font-size: 14px; border: 1px solid #555; z-index: 10; }
                    .legend { position: absolute; top: 20px; left: 20px; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 5px; font-size: 11px; color: #ddd; z-index: 10; }
                    .legend-item { display: flex; align-items: center; margin-bottom: 4px; }
                    .color-box { width: 10px; height: 10px; margin-right: 8px; border: 1px solid #777; }
                    @media (max-width: 768px) { 
                        #ui-container { flex-wrap: wrap; padding: 5px; justify-content: center; height: auto; max-height: 200px; }
                        .panel-section { flex-grow: 1; flex-basis: 45%; padding: 5px; margin-bottom: 5px; border-right: none; min-width: 140px; }
                        h2 { font-size: 11px; margin-bottom: 5px;}
                        .digital-display { font-size: 14px; padding: 2px 4px; }
                        .toggle-btn, button.main-start { width: 90%; font-size: 10px; padding: 4px; }
                        #view-controls { display: none; }
                        .legend { display: none; }
                        #tooltip { display: none; }
                    }
                </style>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
                <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"><\/script>
            </head>
            <body>
                <div class="legend">
                    <div class="legend-item"><div class="color-box" style="background:#ecf0f1"></div>Tanks / Pipes</div>
                    <div class="legend-item"><div class="color-box" style="background:#34495e"></div>Pump & Motors</div>
                    <div class="legend-item"><div class="color-box" style="background:#f39c12"></div>Regen/Separator</div>
                    <div class="legend-item"><div class="color-box" style="background:#8e44ad"></div>Homogenizer</div>
                    <div class="legend-item"><div class="color-box" style="background:#e74c3c"></div>Heating Section</div>
                    <div class="legend-item"><div class="color-box" style="background:#3498db"></div>Cooling Section</div>
                </div>
                <div id="view-controls">
                    <div class="view-label">CAMERA VIEW</div>
                    <button onclick="setView('front')">FRONT</button>
                    <button onclick="setView('back')">BACK</button>
                    <button onclick="setView('left')">LEFT</button>
                    <button onclick="setView('right')">RIGHT</button>
                    <button onclick="setView('top')">TOP</button>
                    <button onclick="setView('iso')">ISO</button>
                </div>
                <div id="tooltip">PLANT READY. Configure & Start.</div>
                <div id="ui-container">
                    <div class="panel-section">
                        <h2>Main Control</h2>
                        <div style="display:flex; align-items:center; margin-bottom:10px;">
                            <div id="status-pump" class="status-light"></div>
                            <span style="font-size:12px; margin-left:5px;">FEED PUMP</span>
                        </div>
                        <button class="main-start" id="btn-power" onclick="toggleSystem()">START PLANT</button>
                    </div>
                    <div class="panel-section">
                        <h2>Units</h2>
                        <button class="toggle-btn" id="btn-sep" onclick="toggleSep()">Separator: OFF</button>
                        <button class="toggle-btn" id="btn-homo" onclick="toggleHomo()">Homogenizer: OFF</button>
                    </div>
                    <div class="panel-section">
                        <h2>Pasteurizer</h2>
                        <div class="digital-display" id="temp-display">25.0°C</div>
                        <label style="font-size:11px; color:#aaa;">Steam Valve</label>
                        <input type="range" min="0" max="100" value="0" oninput="updateSteam(this.value)">
                        <span id="steam-val-text" style="font-size:12px;">0%</span>
                    </div>
                    <div class="panel-section">
                        <h2>FDV Logic</h2>
                        <div style="display:flex; gap:15px; margin-top:5px;">
                            <div style="text-align:center;"><div id="light-fwd" class="status-light"></div><div style="font-size:10px;">SAFE</div></div>
                            <div style="text-align:center;"><div id="light-div" class="status-light on"></div><div style="font-size:10px;">DIVERT</div></div>
                        </div>
                        <div style="font-size:11px; color:#aaa; margin-top:8px;">Set Point: 72.0°C</div>
                    </div>
                    <div class="panel-section" style="width: 180px; align-items:flex-start;">
                        <h2>Status</h2>
                        <div id="flow-status" style="font-size: 11px; color: #0f0; line-height:1.4;">Idle.</div>
                    </div>
                </div>
                <script>
                    let scene, camera, renderer, controls;
                    let fdvMesh, pumpMesh, particles = [];
                    let systemOn = false, sepOn = false, homoOn = false, steamVal = 0, currentTemp = 25.0;
                    const targetTempSet = 72.0;
                    let fdvState = 'DIVERT';
                    let pathFeed, pathRegen, pathSepMain, pathSepCream, pathHomo, pathHeat, pathHold, pathSafe, pathDivert;
                    
                    const elTemp = document.getElementById('temp-display'),
                          elStatus = document.getElementById('flow-status'),
                          elLightFwd = document.getElementById('light-fwd'),
                          elLightDiv = document.getElementById('light-div'),
                          elPumpLight = document.getElementById('status-pump'),
                          btnPower = document.getElementById('btn-power'),
                          btnSep = document.getElementById('btn-sep'),
                          btnHomo = document.getElementById('btn-homo');

                    function getRendererHeight() {
                        const uiContainer = document.getElementById('ui-container');
                        return window.innerHeight - (uiContainer ? uiContainer.offsetHeight : 0);
                    }
                    
                    function init() {
                        scene = new THREE.Scene();
                        scene.background = new THREE.Color(0x222222);
                        scene.fog = new THREE.Fog(0x222222, 30, 100);
                        camera = new THREE.PerspectiveCamera(45, window.innerWidth / getRendererHeight(), 0.1, 1000);
                        camera.position.set(0, 20, 35);
                        renderer = new THREE.WebGLRenderer({ antialias: true });
                        renderer.setSize(window.innerWidth, getRendererHeight());
                        document.body.appendChild(renderer.domElement);
                        controls = new THREE.OrbitControls(camera, renderer.domElement);
                        controls.enableDamping = true; controls.maxPolarAngle = Math.PI / 2 - 0.05;
                        const amb = new THREE.AmbientLight(0xffffff, 0.4); scene.add(amb);
                        const sun1 = new THREE.DirectionalLight(0xffffff, 0.7); sun1.position.set(10, 30, 20); scene.add(sun1);
                        const sun2 = new THREE.DirectionalLight(0xffbbaa, 0.4); sun2.position.set(-10, 20, -20); scene.add(sun2);
                        buildEnvironment(); buildTanks(); buildPump(); buildProcessingLine(); buildHoldingAndFDV(); buildPipes();
                        initPaths();
                        window.addEventListener('resize', onWindowResize);
                        animate();
                    }
                    
                    window.setView=function(v){const d=35,h=20;let x=0,y=h,z=0;switch(v){case'front':z=d;break;case'back':z=-d;break;case'left':x=-d;break;case'right':x=d;break;case'top':y=d+15,z=1;break;case'iso':x=25,y=25,z=25;break}camera.position.set(x,y,z);camera.lookAt(0,0,0);controls.update()}
                    
                    function buildEnvironment(){const f=new THREE.Mesh(new THREE.PlaneGeometry(80,60),new THREE.MeshStandardMaterial({color:0x151515,roughness:.8}));f.rotation.x=-Math.PI/2;scene.add(f);scene.add(new THREE.GridHelper(80,40,0x444444,0x222222))}
                    function buildTanks(){const t=new THREE.MeshStandardMaterial({color:0xbdc3c7,metalness:.7,roughness:.2});createTank(-25,5,0,3,10,"RAW MILK",t);createTank(-15,2.5,0,1.5,3,"BALANCE",t);createTank(20,5,-5,3,10,"SKIM/PAST.",t);createTank(20,3,5,1.5,5,"CREAM",t)}
                    function createTank(t,e,o,i,n,s,a){const d=new THREE.Mesh(new THREE.CylinderGeometry(i,i,n,32),a);d.position.set(t,e,o);scene.add(d);const r=new THREE.CylinderGeometry(.1,.1,1.5,8);for(let e=0;e<4;e++){const a=new THREE.Mesh(r);const l=e*90*Math.PI/180;a.position.set(t+Math.cos(l)*(i-.2),.75,o+Math.sin(l)*(i-.2)),scene.add(a)}addLabel(s,t,n+1.5,o)}
                    function buildPump(){const t=new THREE.Group;const e=new THREE.Mesh(new THREE.CylinderGeometry(.6,.6,1.5,16),new THREE.MeshStandardMaterial({color:0x34495e}));e.rotation.z=Math.PI/2,t.add(e);const o=new THREE.Mesh(new THREE.CylinderGeometry(.8,.8,.5,16),new THREE.MeshStandardMaterial({color:0x95a5a6}));o.rotation.x=Math.PI/2,o.position.set(.8,0,0),t.add(o),t.position.set(-10,.8,0),pumpMesh=t,scene.add(t),addLabel("PUMP",-10,2,0)}
                    function buildProcessingLine(){createPHEUnit(-5,0,0,0xf39c12,"REGEN");const t=new THREE.Group,e=new THREE.Mesh(new THREE.CylinderGeometry(1,1.5,2),new THREE.MeshStandardMaterial({color:0xecf0f1})),o=new THREE.Mesh(new THREE.SphereGeometry(1,32,16,0,6.283185307179586,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0xecf0f1}));o.position.y=1,t.add(e),t.add(o),t.position.set(-1,2,2),scene.add(t),addLabel("SEPARATOR",-1,4,2);const i=new THREE.Group,n=new THREE.Mesh(new THREE.BoxGeometry(2.5,2,1.5),new THREE.MeshStandardMaterial({color:0x8e44ad})),s=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.8),new THREE.MeshStandardMaterial({color:0xffffff}));s.rotation.z=Math.PI/2,s.position.set(0,.5,.8),i.add(n),i.add(s);const a=s.clone();a.position.set(0,0,.8),i.add(a);const d=s.clone();d.position.set(0,-.5,.8),i.add(d),i.position.set(3,1.5,0),scene.add(i),addLabel("HOMOGENIZER",3,3.5,0),createPHEUnit(7,0,0,0xe74c3c,"HEATING"),createPHEUnit(10,0,0,0x3498db,"COOLING")}
                    function createPHEUnit(t,e,o,i,n){const s=new THREE.MeshStandardMaterial({color:i}),a=new THREE.Mesh(new THREE.BoxGeometry(1.5,2.5,2),s);a.position.set(t,2,e),scene.add(a);const d=new THREE.Mesh(new THREE.BoxGeometry(1.6,2.7,.2),new THREE.MeshStandardMaterial({color:0x2c3e50}));d.position.set(t,2,e-1.1),scene.add(d);const r=d.clone();r.position.set(t,2,e+1.1),scene.add(r),addLabel(n,t,4,e)}
                    function buildHoldingAndFDV(){const t=new THREE.MeshStandardMaterial({color:0xbdc3c7}),e=new THREE.Group;for(let o=0;o<3;o++){const i=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,4),t);i.rotation.z=Math.PI/2,i.position.set(0,o*.3,-o*.4),e.add(i)}e.position.set(7,4,-2),scene.add(e),addLabel("HOLDING",7,5.5,-2),fdvMesh=new THREE.Mesh(new THREE.SphereGeometry(.5),new THREE.MeshStandardMaterial({color:0xecf0f1}));const o=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.8),new THREE.MeshStandardMaterial({color:0x333}));o.position.y=.5,fdvMesh.add(o),fdvMesh.position.set(10,4,-2),scene.add(fdvMesh),addLabel("FDV",10,5,-2)}
                    function buildPipes(){const t=new THREE.MeshStandardMaterial({color:0x888888,transparent:!0,opacity:.3});createPipe([-25,1,0,-15,1,0,-15,3,0],t),createPipe([-15,.5,0,-10,.5,0],t),createPipe([-10,.5,0,-5,.5,0,-5,1,0],t),createPipe([-5,3,0,-1,3,0,-1,3,2],t),createPipe([-1,3,2,3,3,2,3,2,0],t),createPipe([3,2,0,7,2,0],t),createPipe([7,3,0,7,4,0,7,4,-2],t),createPipe([7,4,-2,10,4,-2],t),createPipe([10,4,-2,10,3,0],t),createPipe([10,1,0,20,1,0],t),createPipe([10,4,-2,10,6,-2,-15,6,-2,-15,4,0],t)}
                    function createPipe(t,e){const o=[];for(let e=0;e<t.length;e+=3)o.push(new THREE.Vector3(t[e],t[e+1],t[e+2]));const i=new THREE.CatmullRomCurve3(o),n=new THREE.TubeGeometry(i,10,.08,8,!1),s=new THREE.Mesh(n,e);scene.add(s)}
                    function addLabel(t,e,o,i){const n=document.createElement("canvas");n.width=256,n.height=64;const s=n.getContext("2d");s.fillStyle="rgba(0,0,0,0.6)",s.fillRect(0,0,256,64),s.font="bold 28px Arial",s.fillStyle="white",s.textAlign="center",s.textBaseline="middle",s.fillText(t,128,32);const a=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(n)}));a.position.set(e,o,i),a.scale.set(3,.75,1),scene.add(a)}
                    function initPaths(){pathFeed=new THREE.CatmullRomCurve3([v(-25,1,0),v(-15,1,0),v(-15,.5,0),v(-10,.5,0)]),pathRegen=new THREE.CatmullRomCurve3([v(-10,.5,0),v(-5,.5,0),v(-5,2.5,0)]),pathSepMain=new THREE.CatmullRomCurve3([v(-5,2.5,0),v(-1,2.5,0),v(-1,2.5,2)]),pathSepCream=new THREE.CatmullRomCurve3([v(-1,2.5,2),v(-1,1,4),v(20,1,5),v(20,5,5)]),pathHomo=new THREE.CatmullRomCurve3([v(-1,2.5,2),v(3,2.5,0)]),pathHeat=new THREE.CatmullRomCurve3([v(3,2.5,0),v(7,2.5,0),v(7,4,-2)]),pathHold=new THREE.CatmullRomCurve3([v(7,4,-2),v(8.5,4,-2),v(10,4,-2)]),pathSafe=new THREE.CatmullRomCurve3([v(10,4,-2),v(10,2.5,0),v(20,0.5,-5),v(20,5,-5)]),pathDivert=new THREE.CatmullRomCurve3([v(10,4,-2),v(10,6,-2),v(-15,6,-2),v(-15,4,0)])}
                    function v(t,e,o){return new THREE.Vector3(t,e,o)}
                    function animate(){requestAnimationFrame(animate),controls.update(),updateProcessLogic(),updateParticles(),systemOn&&(pumpMesh.children[1].rotation.x+=.5),renderer.render(scene,camera)}
                    function updateProcessLogic() {
                        let target = 25.0;
                        if (systemOn) {
                            target = 25.0 + (steamVal * 0.7);
                            if (currentTemp < target) currentTemp += 0.2;
                            if (currentTemp > target) currentTemp -= 0.1;
                        } else {
                            if (currentTemp > 25) currentTemp -= 0.1;
                        }
                        elTemp.innerText = currentTemp.toFixed(1) + "°C";

                        if (systemOn && currentTemp >= targetTempSet) {
                            fdvState = 'FORWARD';
                            setLight(elLightFwd, true);
                            setLight(elLightDiv, false);
                            fdvMesh.material.color.setHex(0x2ecc71);
                        } else {
                            fdvState = 'DIVERT';
                            setLight(elLightFwd, false);
                            setLight(elLightDiv, true);
                            fdvMesh.material.color.setHex(0xe74c3c);
                        }
                        let status = "System Off";
                        if (systemOn) {
                           status = \`Pump ON.\\nSeparator: \${sepOn ? 'Active' : 'Bypass'}\\nHomo: \${homoOn ? 'Active' : 'Bypass'}\\nMode: \${fdvState}\`;
                        }
                        elStatus.innerText = status;
                    }
                    function updateParticles(){if(!systemOn)return;Math.random()>.8&&spawnParticle();for(let t=particles.length-1;t>=0;t--){let e=particles[t];e.progress+=.01,e.path&&e.mesh.position.copy(e.path.getPoint(e.progress)),e.progress>=1&&(e.progress=0,handlePathSwitch(e))}}
                    function spawnParticle(){const t=new THREE.SphereGeometry(.1,8,8),e=new THREE.MeshBasicMaterial({color:0xffffff}),o=new THREE.Mesh(t,e);scene.add(o),particles.push({mesh:o,path:pathFeed,progress:0,stage:"feed"})}
                    function handlePathSwitch(t){"feed"===t.stage?(t.path=pathRegen,t.stage="regen"):"regen"===t.stage?(t.path=pathSepMain,t.stage="sep_in"):"sep_in"===t.stage?sepOn?Math.random()>.8?(t.path=pathSepCream,t.stage="cream_out",t.mesh.material.color.setHex(0xf1c40f)):(t.path=pathHomo,t.stage="homo_in"):(t.path=pathHomo,t.stage="homo_in"):"homo_in"===t.stage?(t.path=pathHeat,t.stage="heating"):"heating"===t.stage?(t.path=pathHold,t.stage="holding"):"holding"===t.stage?"FORWARD"===fdvState?(t.path=pathSafe,t.stage="finished",t.mesh.material.color.setHex(0x2ecc71)):(t.path=pathDivert,t.stage="divert",t.mesh.material.color.setHex(0xe74c3c)):"divert"===t.stage?(t.path=pathRegen,t.stage="regen",t.mesh.material.color.setHex(0xffffff)):(scene.remove(t.mesh),particles.splice(particles.indexOf(t),1))}
                    function toggleSystem(){systemOn=!systemOn,systemOn?(btnPower.classList.add('active'),btnPower.innerText="STOP PLANT",elPumpLight.classList.add("on"),elPumpLight.classList.remove("off")):(btnPower.classList.remove('active'),btnPower.innerText="START PLANT",elPumpLight.classList.remove("on"),elPumpLight.classList.add("off"))}
                    function toggleSep(){sepOn=!sepOn;btnSep.innerText=sepOn?"Separator: ON":"Separator: OFF";btnSep.classList.toggle('active')}
                    function toggleHomo(){homoOn=!homoOn;btnHomo.innerText=homoOn?"Homogenizer: ON":"Homogenizer: OFF";btnHomo.classList.toggle('active')}
                    window.updateSteam=function(t){steamVal=parseInt(t),document.getElementById("steam-val-text").innerText=t+"%"}
                    function setLight(t,e){e?(t.classList.add("on"),t.classList.remove("off")):(t.classList.add("off"),t.classList.remove("on"))}
                    function onWindowResize(){camera.aspect=window.innerWidth/getRendererHeight(),camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,getRendererHeight())}
                    init();
                <\/script>
            </body>
            </html>
        `
    }
};
    
