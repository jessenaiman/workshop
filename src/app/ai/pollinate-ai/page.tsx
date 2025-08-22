
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2, Trash2, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { createWebImage, CreateWebImageInput } from '@/ai/flows/create-web-image';
import { AnimatedList, AnimatedListItem } from '@/components/magicui/animated-list';

const illustrationStyles = [
  "Flat", "3D", "Minimalist", "Corporate", "Abstract", "Geometric", "Watercolor", "Photorealistic"
];

interface SavedImage {
  id: string;
  url: string;
  prompt: string;
}

export default function PollinateAiPage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('Flat');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [customWidth, setCustomWidth] = useState(1920);
  const [customHeight, setCustomHeight] = useState(1080);
  const [useCase, setUseCase] = useState('Hero Image');

  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [savedImages, setSavedImages] = useState<SavedImage[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) {
      toast({
        variant: 'destructive',
        title: 'Prompt is required',
        description: 'Please enter a description for the image you want to create.',
      });
      return;
    }

    setIsLoading(true);
    setGeneratedImage(null);

    const finalAspectRatio = aspectRatio === 'custom'
      ? `${customWidth}:${customHeight}`
      : aspectRatio;

    const input: CreateWebImageInput = {
      prompt,
      style,
      aspectRatio: finalAspectRatio,
      useCase,
    };

    try {
      const result = await createWebImage(input);
      if (result.imageUrl) {
        setGeneratedImage(result.imageUrl);
      } else {
        throw new Error('Image generation failed to return a URL.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Image Generation Failed',
        description: 'An error occurred while creating the image. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const saveImage = () => {
    if (generatedImage) {
      const newImage: SavedImage = {
        id: new Date().toISOString(),
        url: generatedImage,
        prompt: `${prompt} (${style}, ${useCase}, ${aspectRatio})`,
      };
      setSavedImages(prev => [newImage, ...prev]);
      setGeneratedImage(null);
      setPrompt('');
      toast({
        title: 'Image Saved!',
        description: 'The generated image has been added to your collection.',
      });
    }
  };

  const deleteImage = (id: string) => {
    setSavedImages(prev => prev.filter(image => image.id !== id));
  };
  
  const downloadImage = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `pollination-ai-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Web Design Image Creator</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Generate stunning, production-ready images for your web projects with AI.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Image Configuration</CardTitle>
              <CardDescription>Describe the image you want to create.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="prompt">Prompt</Label>
                  <Textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., A minimalist logo for a tech startup, blue and white"
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                    <Label>Illustration Style</Label>
                    <div className="h-48 overflow-y-auto rounded-md border p-2 bg-muted/50">
                        <RadioGroup value={style} onValueChange={setStyle} className="gap-2">
                            <AnimatedList>
                                {illustrationStyles.map(s => (
                                    <AnimatedListItem key={s}>
                                        <Label className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-muted transition-colors w-full">
                                            <RadioGroupItem value={s} id={s} />
                                            {s}
                                        </Label>
                                    </AnimatedListItem>
                                ))}
                            </AnimatedList>
                        </RadioGroup>
                    </div>
                </div>

                <div>
                  <Label>Use Case</Label>
                  <Select value={useCase} onValueChange={setUseCase}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a use case" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hero Image">Hero Image</SelectItem>
                      <SelectItem value="Background">Background</SelectItem>
                      <SelectItem value="Logo">Logo</SelectItem>
                      <SelectItem value="Icon">Icon</SelectItem>
                      <SelectItem value="Feature Section">Feature Section</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label>Aspect Ratio</Label>
                  <RadioGroup value={aspectRatio} onValueChange={setAspectRatio} className="flex gap-4">
                    <Label className="flex items-center gap-2"><RadioGroupItem value="16:9" /> 16:9</Label>
                    <Label className="flex items-center gap-2"><RadioGroupItem value="4:3" /> 4:3</Label>
                    <Label className="flex items-center gap-2"><RadioGroupItem value="1:1" /> 1:1</Label>
                    <Label className="flex items-center gap-2"><RadioGroupItem value="custom" /> Custom</Label>
                  </RadioGroup>
                </div>

                {aspectRatio === 'custom' && (
                  <div className="flex gap-4">
                    <Input type="number" placeholder="Width" value={customWidth} onChange={e => setCustomWidth(Number(e.target.value))} />
                    <Input type="number" placeholder="Height" value={customHeight} onChange={e => setCustomHeight(Number(e.target.value))} />
                  </div>
                )}
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                  Generate Image
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generated Image</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center relative">
                {isLoading && <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />}
                {!isLoading && !generatedImage && <p className="text-muted-foreground">Your generated image will appear here.</p>}
                {generatedImage && (
                  <>
                    <Image src={generatedImage} alt="Generated AI image" layout="fill" objectFit="contain" className="rounded-lg" />
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <Button onClick={saveImage}>Save Image</Button>
                        <Button onClick={() => downloadImage(generatedImage)} variant="outline" size="icon"><Download className="h-4 w-4" /></Button>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Saved Images</CardTitle>
            </CardHeader>
            <CardContent>
              {savedImages.length === 0 ? (
                <div className="h-48 flex items-center justify-center">
                    <p className="text-muted-foreground">Your saved images will appear here.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-96 overflow-y-auto p-2">
                  {savedImages.map(image => (
                    <div key={image.id} className="relative group">
                      <Image src={image.url} alt={image.prompt} width={200} height={200} className="rounded-md object-cover aspect-square" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button size="icon" variant="destructive" onClick={() => deleteImage(image.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Button size="icon" onClick={() => downloadImage(image.url)}>
                            <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

