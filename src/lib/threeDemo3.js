// Demo 3: Dynamic Particle System
import { initScene } from './threeUtils.js';

export function initDemo3() {
    const { renderer, scene, camera, resizeRendererToDisplaySize } = initScene('scene3', 'scene3-container');
    camera.position.z = 1000;

    const count = 5000;
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);
    for(let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 2000;
    }
    originalPositions.set(positions);
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 2,
        sizeAttenuation: true,
        color: 0xFFFFFF,
        transparent: true,
        opacity: 0.8
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Use global controls if available, otherwise use default params
    const globalControls = window.threeDemoControls && window.threeDemoControls.demo3 ? window.threeDemoControls.demo3 : {
        pattern: 'Static',
        speed: 1.0
    };

    const clock = new THREE.Clock();

    function animate() {
        resizeRendererToDisplaySize();
        const elapsedTime = clock.getElapsedTime() * (globalControls.speed || 1.0);
        const positions = particles.geometry.attributes.position.array;

        // Check for updated controls
        if (window.threeDemoControls && window.threeDemoControls.demo3) {
            globalControls.pattern = window.threeDemoControls.demo3.pattern;
            globalControls.speed = window.threeDemoControls.demo3.speed;
        }

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const x = originalPositions[i3];
            const y = originalPositions[i3 + 1];
            const z = originalPositions[i3 + 2];
            
            switch(globalControls.pattern) {
                case 'Wave':
                    positions[i3 + 1] = y + Math.sin(elapsedTime * 5 + x * 0.01) * 100;
                    break;
                case 'Galaxy':
                    const angle = Math.atan2(x, z);
                    const radius = Math.sqrt(x*x + z*z);
                    positions[i3] = Math.cos(angle + elapsedTime) * radius;
                    positions[i3 + 2] = Math.sin(angle + elapsedTime) * radius;
                    break;
                case 'Static':
                    // Reset to original positions if coming from another pattern
                    positions[i3] = x;
                    positions[i3+1] = y;
                    break;
            }
        }
        particles.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}
