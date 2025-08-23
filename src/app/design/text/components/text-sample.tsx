
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Settings } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface TextSampleProps {
    name: string;
    children: (text: string) => React.ReactNode;
    onReplay?: () => void;
    initialText?: string;
}

export function TextSample({ name, children, onReplay, initialText = "Magic UI" }: TextSampleProps) {
    const [text, setText] = useState(initialText);
    
    return (
        <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-medium">{name}</CardTitle>
                <div className="flex items-center gap-1">
                    {onReplay && (
                        <Button variant="ghost" size="icon" onClick={onReplay} className="h-8 w-8">
                            <Play className="h-4 w-4" />
                        </Button>
                    )}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Settings className="h-4 w-4" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64 space-y-2">
                            <Label htmlFor="text-input">Visible Text</Label>
                            <Input id="text-input" value={text} onChange={(e) => setText(e.target.value)} />
                        </PopoverContent>
                    </Popover>
                </div>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center p-6 min-h-[8rem]">
                {children(text)}
            </CardContent>
        </Card>
    )
}
