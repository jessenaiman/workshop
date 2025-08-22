// Demo 1: Basic Geometry & Lighting
import { initScene } from './threeUtils.js';

export function initDemo1() {
    const { renderer, scene, camera, resizeRendererToDisplaySize } = initScene('scene1', 'scene1-container');
    camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 3);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.7, 32, 32), new THREE.MeshStandardMaterial({ color: 0x1e90ff }));
    sphere.position.x = -1.5;
    sphere.position.y = -0.5;
    const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: 0xff6347 }));
    const torus = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.2, 16, 32), new THREE.MeshStandardMaterial({ color: 0x32cd32 }));
    torus.position.x = 1.5;
    torus.position.y = -0.5;

    const group = new THREE.Group();
    group.add(sphere);
    group.add(box);
    group.add(torus);
    scene.add(group);

    // Use global controls if available, otherwise use default params
    const globalControls = window.threeDemoControls && window.threeDemoControls.demo1 ? window.threeDemoControls.demo1 : {
        lightIntensity: 3,
        lightColor: '#ffffff',
        showSphere: true,
        showBox: true,
        showTorus: true
    };

    // Update scene based on controls
    pointLight.intensity = globalControls.lightIntensity;
    pointLight.color.set(globalControls.lightColor);
    sphere.visible = globalControls.showSphere;
    box.visible = globalControls.showBox;
    torus.visible = globalControls.showTorus;

    function animate() {
        resizeRendererToDisplaySize();
        group.rotation.y += 0.005;
        // Check for updated controls
        if (window.threeDemoControls && window.threeDemoControls.demo1) {
            pointLight.intensity = window.threeDemoControls.demo1.lightIntensity;
            pointLight.color.set(window.threeDemoControls.demo1.lightColor || '#ffffff');
            sphere.visible = window.threeDemoControls.demo1.showSphere;
            box.visible = window.threeDemoControls.demo1.showBox;
            torus.visible = window.threeDemoControls.demo1.showTorus;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}
