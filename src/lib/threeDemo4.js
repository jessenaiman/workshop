// Demo 4: Environment Mapping
import { initScene } from './threeUtils.js';

export function initDemo4() {
    const { renderer, scene, camera, resizeRendererToDisplaySize } = initScene('scene4', 'scene4-container');
    camera.position.z = 3;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    const envMapLoader = new THREE.PMREMGenerator(renderer);
    envMapLoader.compileEquirectangularShader();

    const textureLoader = new THREE.TextureLoader();
    const environments = {
        'Bridge': 'https://threejs.org/examples/textures/hdr/royal_esplanade_1k.hdr',
        'Venice': 'https://threejs.org/examples/textures/hdr/venice_sunset_1k.hdr',
        'Studio': 'https://threejs.org/examples/textures/hdr/studio_small_08_1k.hdr'
    };
    let currentEnvMap = null;
    let currentGeometry = 'sphere';

    // Use global controls if available, otherwise use default params
    const globalControls = window.threeDemoControls && window.threeDemoControls.demo4 ? window.threeDemoControls.demo4 : {
        geometry: 'sphere',
        environment: 'Bridge',
        roughness: 0.5,
        metalness: 0.5
    };

    const material = new THREE.MeshPhysicalMaterial({
        roughness: globalControls.roughness,
        metalness: globalControls.metalness,
        envMapIntensity: 1.0
    });

    let mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material);
    scene.add(mesh);

    function updateGeometry() {
        if (currentGeometry === globalControls.geometry) return;
        currentGeometry = globalControls.geometry;
        scene.remove(mesh);
        switch(globalControls.geometry) {
            case 'sphere': mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material); break;
            case 'box': mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material); break;
            case 'torus': mesh = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.3, 16, 32), material); break;
        }
        scene.add(mesh);
    }

    function loadEnvironment(url) {
        if (currentEnvMap === url) return;
        currentEnvMap = url;
        new THREE.RGBELoader().load(url, function(texture) {
            const envMap = envMapLoader.fromCubemap(texture);
            scene.environment = envMap.texture;
            scene.background = envMap.texture;
        });
    }
    loadEnvironment(environments[globalControls.environment]);

    function animate() {
        resizeRendererToDisplaySize();
        mesh.rotation.y += 0.01;
        // Check for updated controls
        if (window.threeDemoControls && window.threeDemoControls.demo4) {
            material.roughness = window.threeDemoControls.demo4.roughness;
            material.metalness = window.threeDemoControls.demo4.metalness;
            if (globalControls.environment !== window.threeDemoControls.demo4.environment) {
                globalControls.environment = window.threeDemoControls.demo4.environment;
                loadEnvironment(environments[globalControls.environment]);
            }
            if (globalControls.geometry !== window.threeDemoControls.demo4.geometry) {
                globalControls.geometry = window.threeDemoControls.demo4.geometry;
                updateGeometry();
            }
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}