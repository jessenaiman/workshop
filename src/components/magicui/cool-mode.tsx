
'use client'
import React, { createContext, useContext, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type CoolModeContextType = {
  isCoolMode: boolean;
};

const CoolModeContext = createContext<CoolModeContextType>({
  isCoolMode: false,
});

export const useCoolMode = () => {
  return useContext(CoolModeContext);
};

export const CoolMode: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isCoolMode, setIsCoolMode] = React.useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "c" && e.metaKey) {
        setIsCoolMode(!isCoolMode);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCoolMode]);

  useEffect(() => {
    if (isCoolMode && !audioRef.current) {
      audioRef.current = new Audio("/cool-mode.mp3");
      audioRef.current.loop = true;
      audioRef.current.play();
    } else if (!isCoolMode && audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  }, [isCoolMode]);

  return (
    <CoolModeContext.Provider value={{ isCoolMode }}>
      <div
        className={cn(isCoolMode ? "cool-mode" : "", "relative w-full")}
        style={
          {
            "--cool-mode-width": "100%",
            "--cool-mode-height": "100%",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </CoolModeContext.Provider>
  );
};
