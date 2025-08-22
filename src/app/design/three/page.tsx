
"use client";
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { initDemo1 } from '@/app/scripts/threeDemo1.js';
import { initDemo2 } from '@/app/scripts/threeDemo2.js';
import { initDemo3 } from '@/app/scripts/threeDemo3.js';
import { initDemo4 } from '@/app/scripts/threeDemo4.js';
import { vertexShader } from '@/app/scripts/vertexShader.js';
import { fragmentShader } from '@/app/scripts/fragmentShader.js';

export default function ThreeJSPage() {
    useEffect(() => {
        // Dynamically load Three.js and lil-gui, then initialize demos
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

                // Check if lil is already defined
                if (!window.lil) {
                    const lilGuiScript = document.createElement('script');
                    lilGuiScript.src = 'https://cdn.jsdelivr.net/npm/lil-gui@0.19';
                    lilGuiScript.async = true;
                    document.body.appendChild(lilGuiScript);
                    await new Promise(resolve => lilGuiScript.onload = resolve);
                }
                
                // Initialize demos once scripts are loaded
                initDemo1();
                initDemo2(vertexShader, fragmentShader);
                initDemo3();
                initDemo4();

            } catch (error) {
                console.error("Failed to load scripts or initialize demos:", error);
            }
        };

        loadScripts();

    }, []);

    return (
        <>
            <Head>
                <title>Three.js Demos</title>
            </Head>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-5xl font-bold tracking-tight">Three.js Interactive Demos</h1>
                    <p className="mt-2 text-lg text-muted-foreground">Explore the power of 3D graphics on the web.</p>
                </div>

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
                    </Card>
                </div>
            </div>
        </>
    );
}
