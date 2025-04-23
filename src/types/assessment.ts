
export interface Question {
  id: number;
  text: string;
  type: "likert" | "multiple-choice";
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  value: number;
}

export interface AssessmentResult {
  score: number;
  category: "Low" | "Moderate" | "High";
  description: string;
  workplaceImplications: string[];
}

export interface EmotionalDysregulationResult extends AssessmentResult {
  impulsivity: number;
  emotionalClarity: number;
  distressTolerance: number;
}

export interface AttachmentStyleResult extends AssessmentResult {
  style: "secure" | "anxious-preoccupied" | "dismissive-avoidant" | "fearful-avoidant";
  styleName: string;
  styleDescription: string;
}

export interface CombinedResult {
  emotionalDysregulation: EmotionalDysregulationResult;
  attachmentStyle: AttachmentStyleResult;
  isHighPotential: boolean;
  overallRecommendation: string;
}

export interface UserResponses {
  emotionalDysregulation: Record<number, string>;
  attachmentStyle: Record<number, string>;
}
