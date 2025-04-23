
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Question } from "@/types/assessment";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface AssessmentQuestionProps {
  question: Question;
  selectedOption: string | undefined;
  onOptionSelect: (optionId: string) => void;
}

export function AssessmentQuestion({ question, selectedOption, onOptionSelect }: AssessmentQuestionProps) {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium">{question.text}</h3>
        </div>
        <RadioGroup
          className="gap-3"
          value={selectedOption}
          onValueChange={onOptionSelect}
        >
          {question.options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="flex-1 cursor-pointer p-2 hover:bg-muted/50 rounded">
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
