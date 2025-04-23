
import { CombinedResult, EmotionalDysregulationResult, AttachmentStyleResult } from "@/types/assessment";

export function generateCombinedResult(
  emotionalDysregulation: EmotionalDysregulationResult,
  attachmentStyle: AttachmentStyleResult
): CombinedResult {
  // Determine if candidate is high potential
  // High potential = Secure attachment + Low emotional dysregulation
  const isHighPotential = 
    attachmentStyle.style === "secure" && 
    emotionalDysregulation.category === "Low";
  
  // Generate overall recommendation based on results
  let overallRecommendation = "";
  
  if (isHighPotential) {
    overallRecommendation = 
      "HIGH-POTENTIAL HIRE: This candidate demonstrates secure attachment patterns and effective emotional regulation, suggesting strong potential for workplace success. They are likely to form healthy working relationships, handle stress effectively, and navigate workplace challenges constructively.";
  } else if (
    (attachmentStyle.style === "secure" && emotionalDysregulation.category === "Moderate") ||
    (["anxious-preoccupied", "dismissive-avoidant"].includes(attachmentStyle.style) && emotionalDysregulation.category === "Low")
  ) {
    overallRecommendation = 
      "MODERATE POTENTIAL: This candidate shows some strengths in either attachment patterns or emotional regulation, but has areas for development in the other. With appropriate support and awareness of their tendencies, they could perform well in suitable roles.";
  } else if (
    (attachmentStyle.style === "fearful-avoidant" && emotionalDysregulation.category === "High") ||
    (emotionalDysregulation.category === "High" && attachmentStyle.category === "High")
  ) {
    overallRecommendation = 
      "DEVELOPMENT NEEDED: This candidate shows significant challenges in both attachment patterns and emotional regulation. They would likely require substantial support and development to thrive in demanding workplace environments. Consider roles with clear structure and consistent management.";
  } else {
    overallRecommendation = 
      "MIXED PROFILE: This candidate shows a mixed profile of strengths and areas for development. Consider their specific patterns when determining role fit and necessary support structures.";
  }
  
  return {
    emotionalDysregulation,
    attachmentStyle,
    isHighPotential,
    overallRecommendation
  };
}
