
"use client";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { initDemo1 } from '@/lib/threeDemo1.js';
import { initDemo2 } from '@/lib/threeDemo2.js';
import { initDemo3 } from '@/lib/threeDemo3.js';
import { initDemo4 } from '@/lib/threeDemo4.js';
import { vertexShader } from '@/lib/vertexShader.js';
import { fragmentShader } from '@/lib/fragmentShader.js';
import { DesignComponentCard } from '@/components/design/design-component-card';


// Declare lil-gui and THREE on Window interface to resolve TypeScript errors
declare global {
    interface Window {
        lil: {
            GUI: any;
        };
        THREE: any;
        threeDemoControls: any;
    }
}

export default function ThreeJSPage() {
    const [scriptsLoaded, setScriptsLoaded] = useState(false);
    const [demoControls, setDemoControls] = useState({
        demo1: { showSphere: true, showBox: true, showTorus: true, lightIntensity: 3 },
        demo2: { speed: 1, complexity: 5 },
        demo3: { pattern: 'Static', speed: 1 },
        demo4: { geometry: 'sphere', environment: 'Bridge', roughness: 0.5, metalness: 0.5 }
    } as Record<string, { [key: string]: boolean | number | string }>);

    useEffect(() => {
        // Dynamically load Three.js, then initialize demos
        const loadScripts = async () => {
            try {
                // Check if THREE is already defined
                if (!window.THREE) {
                    const threeScript = document.createElement('script');
                    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
                    threeScript.async = true;
                    document.body.appendChild(threeScript);
                    await new Promise(resolve => threeScript.onload = resolve);
                }
                
                // Initialize demos once scripts are loaded
                initDemo1();
                initDemo2(vertexShader, fragmentShader);
                initDemo3();
                initDemo4();

                setScriptsLoaded(true);

            } catch (error) {
                console.error("Failed to load scripts or initialize demos:", error);
            }
        };

        loadScripts();

    }, []);

    useEffect(() => {
        // Update global threeDemoControls object whenever demoControls state changes
        (window as any).threeDemoControls = demoControls;
    }, [demoControls]);

    const updateControl = (demo: string, key: string, value: boolean | number | string) => {
        setDemoControls(prev => ({
            ...prev,
            [demo]: {
                ...prev[demo],
                [key]: value
            }
        }));
    };
    
    const demos = [
        { 
            id: 'demo1', 
            title: 'Basic Geometry & Lighting', 
            code: `// See src/lib/threeDemo1.js`,
            controls: (
                <>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Show Sphere</label>
                        <Button variant={demoControls.demo1.showSphere ? 'default' : 'outline'} onClick={() => updateControl('demo1', 'showSphere', !demoControls.demo1.showSphere)}>
                            {demoControls.demo1.showSphere ? 'ON' : 'OFF'}
                        </Button>
                    </div>
                     <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Show Box</label>
                        <Button variant={demoControls.demo1.showBox ? 'default' : 'outline'} onClick={() => updateControl('demo1', 'showBox', !demoControls.demo1.showBox)}>
                            {demoControls.demo1.showBox ? 'ON' : 'OFF'}
                        </Button>
                    </div>
                     <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Show Torus</label>
                        <Button variant={demoControls.demo1.showTorus ? 'default' : 'outline'} onClick={() => updateControl('demo1', 'showTorus', !demoControls.demo1.showTorus)}>
                            {demoControls.demo1.showTorus ? 'ON' : 'OFF'}
                        </Button>
                    </div>
                     <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Light Intensity: {demoControls.demo1.lightIntensity}</label>
                        <Slider value={[demoControls.demo1.lightIntensity]} min={0} max={10} step={1} onValueChange={(value: number[]) => updateControl('demo1', 'lightIntensity', value[0])}/>
                    </div>
                </>
            )
        },
        { 
            id: 'demo2', 
            title: 'Advanced Shader', 
            code: `// See src/lib/threeDemo2.js`,
            controls: (
                 <>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Speed: {demoControls.demo2.speed}</label>
                        <Slider value={[demoControls.demo2.speed]} min={0} max={5} step={0.1} onValueChange={(value: number[]) => updateControl('demo2', 'speed', value[0])}/>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Complexity: {demoControls.demo2.complexity}</label>
                        <Slider value={[demoControls.demo2.complexity]} min={1} max={10} step={1} onValueChange={(value: number[]) => updateControl('demo2', 'complexity', value[0])}/>
                    </div>
                </>
            )
        },
        { 
            id: 'demo3', 
            title: 'Dynamic Particle System',
            code: `// See src/lib/threeDemo3.js`,
            controls: (
                 <>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Pattern</label>
                        <div className="flex space-x-2">
                            {['Static', 'Wave', 'Galaxy'].map(pattern => (
                                <Button key={pattern} variant={demoControls.demo3.pattern === pattern ? 'default' : 'outline'} onClick={() => updateControl('demo3', 'pattern', pattern)}>
                                    {pattern}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Speed: {demoControls.demo3.speed}</label>
                        <Slider value={[demoControls.demo3.speed]} min={0} max={5} step={0.1} onValueChange={(value: number[]) => updateControl('demo3', 'speed', value[0])}/>
                    </div>
                </>
            )
        },
        { 
            id: 'demo4', 
            title: 'Environment Mapping',
            code: `// See src/lib/threeDemo4.js`,
            controls: (
                 <>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Geometry</label>
                        <div className="flex space-x-2">
                            {['sphere', 'box', 'torus'].map(geo => (
                                <Button key={geo} variant={demoControls.demo4.geometry === geo ? 'default' : 'outline'} onClick={() => updateControl('demo4', 'geometry', geo)}>
                                    {geo.charAt(0).toUpperCase() + geo.slice(1)}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Environment</label>
                        <div className="flex space-x-2">
                            {['Bridge', 'Park', 'Studio'].map(env => (
                                <Button key={env} variant={demoControls.demo4.environment === env ? 'default' : 'outline'} onClick={() => updateControl('demo4', 'environment', env)}>
                                    {env}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Roughness: {demoControls.demo4.roughness}</label>
                        <Slider value={[demoControls.demo4.roughness]} min={0} max={1} step={0.01} onValueChange={(value: number[]) => updateControl('demo4', 'roughness', value[0])}/>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium mb-1">Metalness: {demoControls.demo4.metalness}</label>
                        <Slider value={[demoControls.demo4.metalness]} min={0} max={1} step={0.01} onValueChange={(value: number[]) => updateControl('demo4', 'metalness', value[0])}/>
                    </div>
                </>
            )
        },
    ];

    return (
        <>
            <Head>
                <title>Three.js Demos</title>
            </Head>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {demos.map(demo => (
                        <DesignComponentCard
                            key={demo.id}
                            title={demo.title}
                            description="Interactive 3D animation"
                            code={demo.code}
                            controls={scriptsLoaded ? demo.controls : null}
                            className="h-auto"
                        >
                            <div id={`${demo.id}-container`} className="relative w-full h-64 rounded-lg overflow-hidden bg-muted">
                                <canvas id={demo.id} className="w-full h-full"></canvas>
                            </div>
                        </DesignComponentCard>
                    ))}
                </div>
            </div>
        </>
    );
}
