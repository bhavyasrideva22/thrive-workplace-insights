
import { createContext, useContext, useState, ReactNode } from "react";
import { UserResponses, EmotionalDysregulationResult, AttachmentStyleResult, CombinedResult } from "@/types/assessment";
import { calculateEmotionalDysregulationResult } from "@/utils/emotionalDysregulationScoring";
import { calculateAttachmentStyleResult } from "@/utils/attachmentStyleScoring";
import { generateCombinedResult } from "@/utils/resultCombiner";

interface AssessmentContextType {
  responses: UserResponses;
  emotionalDysregulationResult: EmotionalDysregulationResult | null;
  attachmentStyleResult: AttachmentStyleResult | null;
  combinedResult: CombinedResult | null;
  setResponse: (assessmentType: keyof UserResponses, questionId: number, answer: string) => void;
  calculateResults: () => void;
  resetAssessment: () => void;
}

const initialResponses: UserResponses = {
  emotionalDysregulation: {},
  attachmentStyle: {},
};

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [responses, setResponses] = useState<UserResponses>(initialResponses);
  const [emotionalDysregulationResult, setEmotionalDysregulationResult] = useState<EmotionalDysregulationResult | null>(null);
  const [attachmentStyleResult, setAttachmentStyleResult] = useState<AttachmentStyleResult | null>(null);
  const [combinedResult, setCombinedResult] = useState<CombinedResult | null>(null);

  const setResponse = (assessmentType: keyof UserResponses, questionId: number, answer: string) => {
    setResponses(prev => ({
      ...prev,
      [assessmentType]: {
        ...prev[assessmentType],
        [questionId]: answer
      }
    }));
  };

  const calculateResults = () => {
    const dysregulationResult = calculateEmotionalDysregulationResult(responses.emotionalDysregulation);
    const attachmentResult = calculateAttachmentStyleResult(responses.attachmentStyle);
    
    setEmotionalDysregulationResult(dysregulationResult);
    setAttachmentStyleResult(attachmentResult);
    
    if (dysregulationResult && attachmentResult) {
      setCombinedResult(generateCombinedResult(dysregulationResult, attachmentResult));
    }
  };

  const resetAssessment = () => {
    setResponses(initialResponses);
    setEmotionalDysregulationResult(null);
    setAttachmentStyleResult(null);
    setCombinedResult(null);
  };

  return (
    <AssessmentContext.Provider 
      value={{ 
        responses, 
        emotionalDysregulationResult,
        attachmentStyleResult,
        combinedResult,
        setResponse, 
        calculateResults,
        resetAssessment
      }}
    >
      {children}
    </AssessmentContext.Provider>
  );
}

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error("useAssessment must be used within an AssessmentProvider");
  }
  return context;
};
