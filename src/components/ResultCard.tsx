
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ResultCardProps {
  title: string;
  description: string;
  category: "Low" | "Moderate" | "High";
  implications: string[];
  className?: string;
}

export function ResultCard({ title, description, category, implications, className = "" }: ResultCardProps) {
  // Define color schemes based on category
  const badgeColors = {
    "Low": "bg-green-500 hover:bg-green-600",
    "Moderate": "bg-yellow-500 hover:bg-yellow-600",
    "High": "bg-red-500 hover:bg-red-600"
  };
  
  return (
    <Card className={`mb-6 ${className}`}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge className={badgeColors[category]}>{category} Risk</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold mb-2">Workplace Implications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {implications.map((implication, index) => (
            <li key={index} className="text-sm">{implication}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
