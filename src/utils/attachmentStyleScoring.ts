
import { AttachmentStyleResult } from "@/types/assessment";
import { attachmentStyleQuestions } from "@/data/attachmentStyleData";

export function calculateAttachmentStyleResult(responses: Record<number, string>): AttachmentStyleResult {
  // Calculate scores for each attachment style
  let secureScore = 0;
  let anxiousScore = 0;
  let avoidantScore = 0;
  let fearfulScore = 0;
  
  let answeredQuestions = 0;

  attachmentStyleQuestions.forEach(question => {
    const response = responses[question.id];
    if (response) {
      answeredQuestions++;
      const option = question.options.find(opt => opt.id === response);
      
      if (option) {
        // Each option contributes to a specific attachment style score
        // This is a simplified model - in a real assessment, each question would have
        // a more complex mapping to attachment styles
        switch (option.id.charAt(0)) {
          case 'a': // Options starting with 'a' contribute to secure attachment
            secureScore += 1;
            break;
          case 'b': // Options starting with 'b' contribute to anxious attachment
            anxiousScore += 1;
            break;
          case 'c': // Options starting with 'c' contribute to avoidant attachment
            avoidantScore += 1;
            break;
          case 'd': // Options starting with 'd' contribute to fearful attachment
            fearfulScore += 1;
            break;
        }
      }
    }
  });

  // Normalize scores if not all questions were answered
  if (answeredQuestions < attachmentStyleQuestions.length) {
    const factor = attachmentStyleQuestions.length / answeredQuestions;
    secureScore = Math.round(secureScore * factor);
    anxiousScore = Math.round(anxiousScore * factor);
    avoidantScore = Math.round(avoidantScore * factor);
    fearfulScore = Math.round(fearfulScore * factor);
  }

  // Determine dominant attachment style
  const scores = [
    { style: "secure" as const, score: secureScore },
    { style: "anxious-preoccupied" as const, score: anxiousScore },
    { style: "dismissive-avoidant" as const, score: avoidantScore },
    { style: "fearful-avoidant" as const, score: fearfulScore }
  ];

  scores.sort((a, b) => b.score - a.score);
  const dominantStyle = scores[0].style;
  
  // Create result object based on dominant style
  let styleName = "";
  let styleDescription = "";
  let description = "";
  let category: "Low" | "Moderate" | "High";
  let score = 0;
  const workplaceImplications: string[] = [];

  switch (dominantStyle) {
    case "secure":
      styleName = "Secure";
      styleDescription = "Comfortable with intimacy and independence";
      description = "You demonstrate a secure attachment style, characterized by comfort with both autonomy and collaboration. You likely form healthy workplace relationships and handle feedback constructively.";
      category = "Low"; // Low risk
      score = scores[0].score;
      workplaceImplications.push("Likely to thrive in team environments");
      workplaceImplications.push("Handles feedback constructively");
      workplaceImplications.push("Balances independence and collaboration effectively");
      workplaceImplications.push("Adapts well to various management styles");
      break;
    
    case "anxious-preoccupied":
      styleName = "Anxious-Preoccupied";
      styleDescription = "Seeks high levels of approval and reassurance";
      description = "You show an anxious-preoccupied attachment style, characterized by seeking frequent reassurance and validation. In workplace settings, you may worry about how others perceive your performance and seek frequent feedback.";
      category = "Moderate"; // Moderate risk
      score = scores[0].score;
      workplaceImplications.push("May need more frequent feedback and reassurance");
      workplaceImplications.push("Could struggle with ambiguous instructions");
      workplaceImplications.push("Might benefit from clear expectations and regular check-ins");
      workplaceImplications.push("May invest heavily in workplace relationships");
      break;
    
    case "dismissive-avoidant":
      styleName = "Dismissive-Avoidant";
      styleDescription = "Highly self-reliant, avoids dependence";
      description = "You demonstrate a dismissive-avoidant attachment style, characterized by high self-reliance and discomfort with dependence on others. In workplace settings, this may manifest as a preference for independent work and difficulty asking for help when needed.";
      category = "Moderate"; // Moderate risk
      score = scores[0].score;
      workplaceImplications.push("Likely to excel in independent roles");
      workplaceImplications.push("May struggle with collaborative projects");
      workplaceImplications.push("Could benefit from structured team interaction protocols");
      workplaceImplications.push("May need encouragement to share ideas and concerns");
      break;
    
    case "fearful-avoidant":
      styleName = "Fearful-Avoidant";
      styleDescription = "Conflicted about relationships, fears rejection";
      description = "You show a fearful-avoidant attachment style, characterized by both desiring and fearing close relationships. In workplace settings, this may manifest as difficulty trusting colleagues while simultaneously seeking their approval.";
      category = "High"; // High risk
      score = scores[0].score;
      workplaceImplications.push("May struggle with trust in team environments");
      workplaceImplications.push("Could find feedback challenging to process");
      workplaceImplications.push("Might benefit from a consistent, supportive management style");
      workplaceImplications.push("Would likely need additional support during organizational changes");
      break;
  }

  return {
    style: dominantStyle,
    styleName,
    styleDescription,
    score,
    category,
    description,
    workplaceImplications
  };
}
