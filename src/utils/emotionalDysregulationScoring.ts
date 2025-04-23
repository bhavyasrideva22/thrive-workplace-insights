
import { EmotionalDysregulationResult } from "@/types/assessment";
import { emotionalDysregulationQuestions } from "@/data/emotionalDysregulationData";

export function calculateEmotionalDysregulationResult(responses: Record<number, string>): EmotionalDysregulationResult {
  // Calculate total score
  let totalScore = 0;
  let impulsivityScore = 0;
  let emotionalClarityScore = 0;
  let distressToleranceScore = 0;
  
  let answeredQuestions = 0;

  emotionalDysregulationQuestions.forEach(question => {
    const response = responses[question.id];
    if (response) {
      answeredQuestions++;
      const option = question.options.find(opt => opt.id === response);
      if (option) {
        const score = option.value;
        totalScore += score;
        
        // Calculate subscores based on question categories
        // Questions 1-5 are impulsivity
        if (question.id <= 5) {
          impulsivityScore += score;
        } 
        // Questions 6-10 are emotional clarity
        else if (question.id <= 10) {
          emotionalClarityScore += score;
        } 
        // Questions 11-15 are distress tolerance
        else {
          distressToleranceScore += score;
        }
      }
    }
  });
  
  // Normalize scores if not all questions were answered
  if (answeredQuestions < emotionalDysregulationQuestions.length) {
    const factor = emotionalDysregulationQuestions.length / answeredQuestions;
    totalScore = Math.round(totalScore * factor);
    
    // Adjust subscores if necessary
    const impulsivityQuestions = 5;
    const emotionalClarityQuestions = 5;
    const distressToleranceQuestions = 5;
    
    let answeredImpulsivity = 0;
    let answeredEmotionalClarity = 0;
    let answeredDistressTolerance = 0;
    
    emotionalDysregulationQuestions.forEach(question => {
      if (responses[question.id]) {
        if (question.id <= 5) answeredImpulsivity++;
        else if (question.id <= 10) answeredEmotionalClarity++;
        else answeredDistressTolerance++;
      }
    });
    
    if (answeredImpulsivity < impulsivityQuestions) {
      impulsivityScore = Math.round(impulsivityScore * (impulsivityQuestions / answeredImpulsivity));
    }
    
    if (answeredEmotionalClarity < emotionalClarityQuestions) {
      emotionalClarityScore = Math.round(emotionalClarityScore * (emotionalClarityQuestions / answeredEmotionalClarity));
    }
    
    if (answeredDistressTolerance < distressToleranceQuestions) {
      distressToleranceScore = Math.round(distressToleranceScore * (distressToleranceQuestions / answeredDistressTolerance));
    }
  }
  
  // Determine category based on score
  // The max possible score is 75 (15 questions × 5 max points)
  let category: "Low" | "Moderate" | "High";
  let description: string;
  const workplaceImplications: string[] = [];
  
  if (totalScore <= 30) {
    category = "Low";
    description = "You demonstrate strong emotional regulation skills. You likely handle workplace stress effectively and maintain composure during challenging situations.";
    workplaceImplications.push("Likely to handle high-pressure situations effectively");
    workplaceImplications.push("Capable of managing workplace conflicts constructively");
    workplaceImplications.push("Good at maintaining professional boundaries");
  } else if (totalScore <= 50) {
    category = "Moderate";
    description = "You show some challenges with emotional regulation. In stressful workplace situations, you may occasionally struggle to maintain optimal emotional responses.";
    workplaceImplications.push("May need additional support during high-stress periods");
    workplaceImplications.push("Could benefit from regular check-ins with management");
    workplaceImplications.push("Would likely handle most workplace challenges adequately");
  } else {
    category = "High";
    description = "You demonstrate significant difficulty with emotional regulation. In workplace settings, this could manifest as challenges in handling criticism, managing stress, or navigating interpersonal conflicts.";
    workplaceImplications.push("May struggle with deadline pressure and high-stakes tasks");
    workplaceImplications.push("Could benefit from a structured work environment");
    workplaceImplications.push("Would likely need more support during workplace changes");
  }
  
  // Add subscore-specific implications
  if (impulsivityScore > 15) {
    workplaceImplications.push("High impulsivity may lead to hasty decisions under pressure");
  }
  
  if (emotionalClarityScore > 15) {
    workplaceImplications.push("May have difficulty identifying emotions in workplace interactions");
  }
  
  if (distressToleranceScore > 15) {
    workplaceImplications.push("Could struggle with maintaining performance during challenging periods");
  }
  
  return {
    score: totalScore,
    category,
    description,
    workplaceImplications,
    impulsivity: impulsivityScore,
    emotionalClarity: emotionalClarityScore,
    distressTolerance: distressToleranceScore
  };
}
