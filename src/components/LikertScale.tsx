
import { Card, CardContent } from "@/components/ui/card";

interface LikertScaleProps {
  score: number;
  maxScore: number;
  label: string;
  description?: string;
}

export function LikertScale({ score, maxScore, label, description }: LikertScaleProps) {
  // Calculate the percentage for the scale
  const percentage = (score / maxScore) * 100;
  
  // Determine color based on percentage
  let color;
  if (percentage < 33) {
    color = "bg-green-500";
  } else if (percentage < 66) {
    color = "bg-yellow-500";
  } else {
    color = "bg-red-500";
  }
  
  return (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="mb-2 flex justify-between items-center">
          <h4 className="font-medium">{label}</h4>
          <span className="text-sm font-medium">{score}/{maxScore}</span>
        </div>
        
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={`h-full ${color}`} 
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        {description && (
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
