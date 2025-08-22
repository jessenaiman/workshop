
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

// Professional skills categorized
const frontendSkills = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 92 },
  { name: "HTML5/CSS3", level: 95 },
  { name: "Astro", level: 85 },
];

const backendSkills = [
  { name: "Node.js", level: 90 },
  { name: "C#/.NET", level: 88 },
  { name: "Python", level: 80 },
  { name: "SQL", level: 85 },
  { name: "Ruby on Rails", level: 75 },
];

const otherSkills = [
  { name: "AI/GPT Integration", level: 90 },
  { name: "Agile/Scrum", level: 85 },
  { name: "DevOps", level: 75 },
  { name: "UI/UX Design", level: 80 },
  { name: "Technical Writing", level: 85 },
];

// Career highlights
const careerHighlights = [
  "Nearly two decades of software development experience across multiple industries",
  "Led development teams in creating innovative web applications and services",
  "Expertise in both frontend and backend technologies with a focus on modern JavaScript frameworks",
  "Strong background in financial technology and secure application development",
  "Passionate about AI integration and emerging technologies",
];

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="text-center mb-12">
                <Image 
                    src="https://placehold.co/200x200.png"
                    data-ai-hint="professional portrait"
                    alt="Jesse Naiman" 
                    width={200} 
                    height={200}
                    className="w-48 h-48 rounded-full mx-auto ring-4 ring-primary ring-offset-4 ring-offset-background mb-6"
                />
                <h1 className="text-5xl font-bold mb-2">Jesse Naiman</h1>
                <h2 className="text-2xl text-muted-foreground mb-4">Senior Software Engineer</h2>
                <p className="text-lg max-w-3xl mx-auto">
                    I'm a versatile software engineer with nearly two decades of experience building web applications, 
                    services, and innovative solutions. My passion lies in creating efficient, maintainable code 
                    that solves complex problems and delivers exceptional user experiences.
                </p>
            </section>
            
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-4">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Frontend</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {frontendSkills.map(skill => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <Progress value={skill.level} />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Backend</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {backendSkills.map(skill => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <Progress value={skill.level} />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Specialized</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {otherSkills.map(skill => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-1">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <Progress value={skill.level} />
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-6 border-l-4 border-primary pl-4">Career Highlights</h2>
                <Card>
                    <CardContent className="p-6">
                        <ul className="list-disc pl-5 space-y-2">
                            {careerHighlights.map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}
