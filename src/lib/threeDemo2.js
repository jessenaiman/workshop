// Demo 2: Advanced Shader
import { initScene } from './threeUtils.js';

export function initDemo2(vertexShader, fragmentShader) {
    const { renderer, scene, camera, resizeRendererToDisplaySize } = initScene('scene2', 'scene2-container');
    camera.position.z = 1;

    const uniforms = { 
        u_time: { value: 0.0 },
        u_complexity: { value: 5.0 },
        u_colorA: { value: new THREE.Color('#43C6AC') },
        u_colorB: { value: new THREE.Color('#191654') },
        u_colorC: { value: new THREE.Color('#F8FFAE') },
    };

    const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    // Use global controls if available, otherwise use default params
    const globalControls = window.threeDemoControls && window.threeDemoControls.demo2 ? window.threeDemoControls.demo2 : {
        speed: 1.0,
        complexity: 5.0
    };

    // Update uniforms based on controls
    uniforms.u_complexity.value = globalControls.complexity;

    const clock = new THREE.Clock();

    function animate() {
        resizeRendererToDisplaySize();
        uniforms.u_time.value = clock.getElapsedTime() * (globalControls.speed || 1.0);
        // Check for updated controls
        if (window.threeDemoControls && window.threeDemoControls.demo2) {
            uniforms.u_complexity.value = window.threeDemoControls.demo2.complexity;
        }
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}
