
import { Progress } from "@/components/ui/progress";

interface AssessmentProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export function AssessmentProgress({ currentQuestion, totalQuestions }: AssessmentProgressProps) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  
  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm text-muted-foreground mb-2">
        <span>Question {currentQuestion} of {totalQuestions}</span>
        <span>{Math.round(progressPercentage)}% Complete</span>
      </div>
      <Progress value={progressPercentage} className="h-2" />
    </div>
  );
}
