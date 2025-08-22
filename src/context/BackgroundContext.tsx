
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type BackgroundContextType = {
  backgroundComponent: ReactNode;
  setBackgroundComponent: React.Dispatch<React.SetStateAction<ReactNode>>;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [backgroundComponent, setBackgroundComponent] = useState<ReactNode>(null);

  return (
    <BackgroundContext.Provider value={{ backgroundComponent, setBackgroundComponent }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};

export const BackgroundRenderer = () => {
    const { backgroundComponent } = useBackground();
    if (!backgroundComponent) return null;

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {backgroundComponent}
        </div>
    )
}

