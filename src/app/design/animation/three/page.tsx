"use client";
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { initDemo1 } from '@/lib/threeDemo1.js';
import { initDemo2 } from '@/lib/threeDemo2.js';
import { initDemo3 } from '@/lib/threeDemo3.js';
import { initDemo4 } from '@/lib/threeDemo4.js';
import { vertexShader } from '@/lib/vertexShader.js';
import { fragmentShader } from '@/lib/fragmentShader.js';

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
                // Note: We're not passing parameters here as the functions will be updated to use a global control object or similar in the next step
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

    }, []); // Removed demoControls from dependency array for now as it causes re-initialization

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

    const renderControlPanel = (demo: string, title: string) => (
        <Card className="mt-4">
            <CardHeader>
                <CardTitle>{title} Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {demo === 'demo1' && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-1">Show Sphere</label>
                            <Button 
                                variant={demoControls.demo1.showSphere ? 'default' : 'outline'} 
                                onClick={() => updateControl('demo1', 'showSphere', !demoControls.demo1.showSphere)}
                            >
                                {demoControls.demo1.showSphere ? 'ON' : 'OFF'}
                            </Button>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Show Box</label>
                            <Button 
                                variant={demoControls.demo1.showBox ? 'default' : 'outline'} 
                                onClick={() => updateControl('demo1', 'showBox', !demoControls.demo1.showBox)}
                            >
                                {demoControls.demo1.showBox ? 'ON' : 'OFF'}
                            </Button>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Show Torus</label>
                            <Button 
                                variant={demoControls.demo1.showTorus ? 'default' : 'outline'} 
                                onClick={() => updateControl('demo1', 'showTorus', !demoControls.demo1.showTorus)}
                            >
                                {demoControls.demo1.showTorus ? 'ON' : 'OFF'}
                            </Button>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Light Intensity: {demoControls.demo1.lightIntensity}</label>
                            <Slider 
                                value={[demoControls.demo1.lightIntensity]} 
                                min={0} 
                                max={10} 
                                step={1} 
                                onValueChange={(value: number[]) => updateControl('demo1', 'lightIntensity', value[0])}
                            />
                        </div>
                    </>
                )}
                {demo === 'demo2' && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-1">Speed: {demoControls.demo2.speed}</label>
                            <Slider 
                                value={[demoControls.demo2.speed]} 
                                min={0} 
                                max={5} 
                                step={0.1} 
                                onValueChange={(value: number[]) => updateControl('demo2', 'speed', value[0])}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Complexity: {demoControls.demo2.complexity}</label>
                            <Slider 
                                value={[demoControls.demo2.complexity]} 
                                min={1} 
                                max={10} 
                                step={1} 
                                onValueChange={(value: number[]) => updateControl('demo2', 'complexity', value[0])}
                            />
                        </div>
                    </>
                )}
                {demo === 'demo3' && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-1">Pattern</label>
                            <div className="flex space-x-2">
                                {['Static', 'Wave', 'Galaxy'].map(pattern => (
                                    <Button 
                                        key={pattern}
                                        variant={demoControls.demo3.pattern === pattern ? 'default' : 'outline'} 
                                        onClick={() => updateControl('demo3', 'pattern', pattern)}
                                    >
                                        {pattern}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Speed: {demoControls.demo3.speed}</label>
                            <Slider 
                                value={[demoControls.demo3.speed]} 
                                min={0} 
                                max={5} 
                                step={0.1} 
                                onValueChange={(value: number[]) => updateControl('demo3', 'speed', value[0])}
                            />
                        </div>
                    </>
                )}
                {demo === 'demo4' && (
                    <>
                        <div>
                            <label className="block text-sm font-medium mb-1">Geometry</label>
                            <div className="flex space-x-2">
                                {['sphere', 'box', 'torusKnot'].map(geo => (
                                    <Button 
                                        key={geo}
                                        variant={demoControls.demo4.geometry === geo ? 'default' : 'outline'} 
                                        onClick={() => updateControl('demo4', 'geometry', geo)}
                                    >
                                        {geo.charAt(0).toUpperCase() + geo.slice(1)}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Environment</label>
                            <div className="flex space-x-2">
                                {['Bridge', 'Park', 'Studio'].map(env => (
                                    <Button 
                                        key={env}
                                        variant={demoControls.demo4.environment === env ? 'default' : 'outline'} 
                                        onClick={() => updateControl('demo4', 'environment', env)}
                                    >
                                        {env}
                                    </Button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Roughness: {demoControls.demo4.roughness}</label>
                            <Slider 
                                value={[demoControls.demo4.roughness]} 
                                min={0} 
                                max={1} 
                                step={0.01} 
                                onValueChange={(value: number[]) => updateControl('demo4', 'roughness', value[0])}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Metalness: {demoControls.demo4.metalness}</label>
                            <Slider 
                                value={[demoControls.demo4.metalness]} 
                                min={0} 
                                max={1} 
                                step={0.01} 
                                onValueChange={(value: number[]) => updateControl('demo4', 'metalness', value[0])}
                            />
                        </div>
                    </>
                )}
            </CardContent>
        </Card>
    );

    return (
        <>
            <Head>
                <title>Three.js Demos</title>
            </Head>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Demo 1: Basic Geometry & Lighting</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div id="scene1-container" className="relative w-full h-96 rounded-lg overflow-hidden">
                                <canvas id="scene1" className="w-full h-full"></canvas>
                            </div>
                        </CardContent>
                        {scriptsLoaded && renderControlPanel('demo1', 'Demo 1')}
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Demo 2: Advanced Shader</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div id="scene2-container" className="relative w-full h-96 rounded-lg overflow-hidden">
                                <canvas id="scene2" className="w-full h-full"></canvas>
                            </div>
                        </CardContent>
                        {scriptsLoaded && renderControlPanel('demo2', 'Demo 2')}
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Demo 3: Dynamic Particle System</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div id="scene3-container" className="relative w-full h-96 rounded-lg overflow-hidden">
                                <canvas id="scene3" className="w-full h-full"></canvas>
                            </div>
                        </CardContent>
                        {scriptsLoaded && renderControlPanel('demo3', 'Demo 3')}
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Demo 4: Environment Mapping</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div id="scene4-container" className="relative w-full h-96 rounded-lg overflow-hidden">
                                <canvas id="scene4" className="w-full h-full"></canvas>
                            </div>
                        </CardContent>
                        {scriptsLoaded && renderControlPanel('demo4', 'Demo 4')}
                    </Card>
                </div>
            </div>
        </>
    );
}
