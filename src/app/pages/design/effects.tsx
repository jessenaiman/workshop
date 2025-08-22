---
import Layout from "../../layouts/Layout.astro";
---

<Layout title="Color Picker | Ultimate Portfolio">
  <main class="container mx-auto px-4 py-8">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Tailwind CSS & daisyUI Transitions & Effects Demo</title>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css" rel="stylesheet" type="text/css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            /* Custom font for a more professional feel */
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
            html {
                scroll-behavior: smooth;
            }
            body {
                font-family: 'Inter', sans-serif;
            }
            /* Custom class for consistent card height */
            .demo-card {
                min-height: 160px; /* Adjust as needed */
            }
        </style>
    
        <div class="container mx-auto p-4 sm:p-8">
            <div class="text-center mb-12">
                <h1 class="text-5xl font-extrabold text-primary mb-2">Tailwind CSS & daisyUI</h1>
                <p class="text-lg text-base-content/80">A Demonstration of Transitions, Transforms, and Animations</p>
            </div>
    
            <div class="grid grid-cols-1 gap-8">
    
                <!-- Transitions Section -->
                <div id="transitions" class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-3xl font-bold text-primary-focus">Transitions</h2>
                        <p class="mb-6 text-base-content/70">Hover over the elements to see the transition effects.</p>
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
                            <div class="card bg-primary text-primary-content demo-card transition-all duration-300 hover:bg-secondary hover:scale-105 hover:shadow-lg">
                                <div class="card-body items-center justify-center">
                                    <h3 class="font-bold">All</h3>
                                    <p class="text-xs">transition-all</p>
                                </div>
                            </div>
                            <div class="card bg-primary text-primary-content demo-card transition-colors duration-300 hover:bg-accent">
                                 <div class="card-body items-center justify-center">
                                    <h3 class="font-bold">Colors</h3>
                                    <p class="text-xs">transition-colors</p>
                                </div>
                            </div>
                            <div class="card bg-primary text-primary-content demo-card transition-opacity duration-300 hover:opacity-25">
                                 <div class="card-body items-center justify-center">
                                    <h3 class="font-bold">Opacity</h3>
                                    <p class="text-xs">transition-opacity</p>
                                </div>
                            </div>
                            <div class="card bg-primary text-primary-content demo-card transition-shadow duration-300 hover:shadow-2xl">
                                 <div class="card-body items-center justify-center">
                                    <h3 class="font-bold">Shadow</h3>
                                    <p class="text-xs">transition-shadow</p>
                                </div>
                            </div>
                            <div class="card bg-primary text-primary-content demo-card transition-transform duration-300 hover:rotate-12">
                                 <div class="card-body items-center justify-center">
                                    <h3 class="font-bold">Transform</h3>
                                    <p class="text-xs">transition-transform</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
                <!-- More Effects Section -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Timing & Duration -->
                    <div id="timing" class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-3xl font-bold text-secondary-focus">Timing & Duration</h2>
                            <p class="mb-6 text-base-content/70">Explore different speeds and easing functions.</p>
                            <div class="space-y-4">
                                <div class="btn btn-block btn-secondary transition-all duration-150 ease-in-out hover:scale-x-105">Duration 150ms</div>
                                <div class="btn btn-block btn-secondary transition-all duration-500 ease-in-out hover:scale-x-105">Duration 500ms</div>
                                <div class="btn btn-block btn-secondary transition-all duration-1000 ease-in hover:scale-x-105">Ease-In</div>
                                <div class="btn btn-block btn-secondary transition-all duration-1000 ease-out hover:scale-x-105">Ease-Out</div>
                                <div class="btn btn-block btn-secondary transition-all duration-500 delay-500 hover:scale-x-105">Delay 500ms</div>
                            </div>
                        </div>
                    </div>
    
                    <!-- Transforms Section -->
                    <div id="transforms" class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-3xl font-bold text-accent-focus">Transforms</h2>
                             <p class="mb-6 text-base-content/70">See how elements can be manipulated in 2D space.</p>
                            <div class="grid grid-cols-2 gap-4">
                                <button class="btn btn-accent transition-transform transform hover:scale-125">Scale</button>
                                <button class="btn btn-accent transition-transform transform hover:rotate-45">Rotate</button>
                                <button class="btn btn-accent transition-transform transform hover:translate-x-4 hover:-translate-y-2">Translate</button>
                                <button class="btn btn-accent transition-transform transform hover:skew-x-12">Skew</button>
                            </div>
                        </div>
                    </div>
                </div>
    
                <!-- Animations Section -->
                <div id="animations" class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title text-3xl font-bold">Animations</h2>
                        <p class="mb-6 text-base-content/70">Continuous and eye-catching preset animations.</p>
                        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                            <div class="flex flex-col items-center">
                                <div class="w-24 h-24 rounded-full bg-neutral flex items-center justify-center animate-spin">
                                    <div class="w-8 h-8 bg-neutral-content rounded-full"></div>
                                </div>
                                <p class="mt-4 font-semibold">animate-spin</p>
                            </div>
                            <div class="flex flex-col items-center">
                                 <span class="relative flex h-24 w-24 items-center justify-center">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-info opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-16 w-16 bg-info"></span>
                                </span>
                                <p class="mt-4 font-semibold">animate-ping</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-24 h-24 rounded-lg bg-neutral animate-pulse"></div>
                                <p class="mt-4 font-semibold">animate-pulse</p>
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="w-24 h-24 rounded-lg bg-neutral flex items-center justify-center animate-bounce">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-neutral-content">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </div>
                                <p class="mt-4 font-semibold">animate-bounce</p>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    
  </main>
</Layout>