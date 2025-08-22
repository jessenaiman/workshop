'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface TextSampleProps {
    name: string;
    children: React.ReactNode;
    onReplay?: () => void;
}

export function TextSample({ name, children, onReplay }: TextSampleProps) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-medium">{name}</CardTitle>
                {onReplay && (
                     <Button variant="ghost" size="icon" onClick={onReplay} className="h-8 w-8">
                        <Play className="h-4 w-4" />
                    </Button>
                )}
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center p-6 min-h-[8rem]">
                {children}
            </CardContent>
        </Card>
    )
}
