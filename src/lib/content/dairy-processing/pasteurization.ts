
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
                        <div style="display:flex; flex-direction:column; align-items:center;">
                            <label style="font-size:11px; color:#aaa;">Steam Valve</label>
                            <input type="range" min="0" max="100" value="0" oninput="updateSteam(this.value)">
                            <span id="steam-val-text" style="font-size:12px;">0%</span>
                        </div>
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
                    function updateProcessLogic(){let t=25;systemOn?(t=25+steamVal*0.7,currentTemp<t?currentTemp+=.2:currentTemp>t&&(currentTemp-=.1)):currentTemp>25&&(currentTemp-=.1);elTemp.innerText=currentTemp.toFixed(1)+"°C";let e="System Off";if(systemOn){e=\`Pump ON.\\nSeparator: \${sepOn?'Active':'Bypass'}\\nHomo: \${homoOn?'Active':'Bypass'}\\nMode: \${fdvState}\`}elStatus.innerText=e;if(systemOn&&currentTemp>=72){fdvState="FORWARD";setLight(elLightFwd,!0);setLight(elLightDiv,!1);fdvMesh.material.color.setHex(3066993)}else{fdvState="DIVERT";setLight(elLightFwd,!1);setLight(elLightDiv,!0);fdvMesh.material.color.setHex(15158332)}}
                    function updateParticles(){if(!systemOn)return;Math.random()>.8&&spawnParticle();for(let t=particles.length-1;t>=0;t--){let e=particles[t];e.progress+=.01,e.path&&e.mesh.position.copy(e.path.getPoint(e.progress)),e.progress>=1&&(e.progress=0,handlePathSwitch(e))}}
                    function spawnParticle(){const t=new THREE.SphereGeometry(.1,8,8),e=new THREE.MeshBasicMaterial({color:16777215}),o=new THREE.Mesh(t,e);scene.add(o),particles.push({mesh:o,path:pathFeed,progress:0,stage:"feed"})}
                    function handlePathSwitch(t){"feed"===t.stage?(t.path=pathRegen,t.stage="regen"):"regen"===t.stage?(t.path=pathSepMain,t.stage="sep_in"):"sep_in"===t.stage?sepOn?Math.random()>.8?(t.path=pathSepCream,t.stage="cream_out",t.mesh.material.color.setHex(15844367)):(t.path=pathHomo,t.stage="homo_in"):(t.path=pathHomo,t.stage="homo_in"):"homo_in"===t.stage?(t.path=pathHeat,t.stage="heating"):"heating"===t.stage?(t.path=pathHold,t.stage="holding"):"holding"===t.stage?"FORWARD"===fdvState?(t.path=pathSafe,t.stage="finished",t.mesh.material.color.setHex(3066993)):(t.path=pathDivert,t.stage="divert",t.mesh.material.color.setHex(15158332)):"divert"===t.stage?(t.path=pathRegen,t.stage="regen",t.mesh.material.color.setHex(16777215)):(scene.remove(t.mesh),particles.splice(particles.indexOf(t),1))}
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
    }
}

    
