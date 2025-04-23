
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAssessment } from "@/context/AssessmentContext";
import { attachmentStyleQuestions } from "@/data/attachmentStyleData";
import { AssessmentQuestion } from "@/components/AssessmentQuestion";
import { AssessmentProgress } from "@/components/AssessmentProgress";

export default function AttachmentStyle() {
  const { responses, setResponse } = useAssessment();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  
  const totalQuestions = attachmentStyleQuestions.length;
  const currentQuestion = attachmentStyleQuestions[currentQuestionIndex];
  const selectedOption = responses.attachmentStyle[currentQuestion.id];
  
  const handleOptionSelect = (optionId: string) => {
    setResponse("attachmentStyle", currentQuestion.id, optionId);
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate results and navigate to results page
      navigate("/results");
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isOptionSelected = !!selectedOption;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <header className="mb-8 text-center">
          <Link to="/" className="text-assessment-600 hover:text-assessment-700 mb-4 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-assessment-800 mb-2">Attachment Style Assessment</h1>
          <p className="text-muted-foreground">
            Answer each question based on your experiences and relationship patterns
          </p>
        </header>
        
        <main>
          <AssessmentProgress 
            currentQuestion={currentQuestionIndex + 1} 
            totalQuestions={totalQuestions} 
          />
          
          <AssessmentQuestion
            question={currentQuestion}
            selectedOption={selectedOption}
            onOptionSelect={handleOptionSelect}
          />
          
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!isOptionSelected}
              className="bg-assessment-600 hover:bg-assessment-700"
            >
              {isLastQuestion ? 'View Results' : 'Next Question'}
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
