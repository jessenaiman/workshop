"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function AnimateCssTest() {
  const [trigger, setTrigger] = useState(false);
  
  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Animate.css Test</h2>
      
      <div 
        className={`w-32 h-32 bg-blue-500 rounded-lg mb-6 ${trigger ? 'animate__animated animate__bounce' : ''}`}
        onAnimationEnd={() => setTrigger(false)}
      />
      
      <Button onClick={() => setTrigger(true)}>
        Trigger Animation
      </Button>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="font-bold mb-2">Code:</h3>
        <pre className="text-sm bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`<div className="animate__animated animate__bounce">
  Animated element
</div>`}
        </pre>
      </div>
    </div>
  );
}
