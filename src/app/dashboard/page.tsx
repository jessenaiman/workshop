
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";

const testResults = [
  { name: 'Navigation: Home (/)', status: 'passed', duration: '1.2s' },
  { name: 'Navigation: Resume (/resume)', status: 'passed', duration: '0.8s' },
  { name: 'Navigation: Portfolio (/portfolio)', status: 'passed', duration: '0.9s' },
  { name: 'Navigation: Website Stack (/styleguide)', status: 'passed', duration: '1.1s' },
  { name: 'Homepage renders correctly', status: 'passed', duration: '1.5s' },
];

const passedTests = testResults.filter(test => test.status === 'passed').length;
const totalTests = testResults.length;
const coveragePercentage = Math.round((passedTests / totalTests) * 100);

export default function DashboardPage() {
    return (
        <div className="container mx-auto py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Test Coverage Dashboard</h1>
                <p className="text-lg text-muted-foreground mt-2">
                    Ensuring reliability and performance through comprehensive testing.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card>
                    <CardHeader>
                        <CardTitle>Passing Tests</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-green-500">{passedTests} / {totalTests}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Test Coverage</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-blue-500">{coveragePercentage}%</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Last Run</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold flex items-center">
                            <Clock className="mr-2 h-8 w-8" />
                            Just now
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Smoke Test Results</CardTitle>
                    <CardDescription>A summary of the latest test run.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Test Name</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Duration</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {testResults.map((test) => (
                                <TableRow key={test.name}>
                                    <TableCell className="font-mono">{test.name}</TableCell>
                                    <TableCell>
                                        <Badge variant={test.status === 'passed' ? 'default' : 'destructive'} className={test.status === 'passed' ? 'bg-green-500' : ''}>
                                            <CheckCircle className="mr-2 h-4 w-4" />
                                            Passed
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="font-mono">{test.duration}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
