
import { Question } from "@/types/assessment";

export const attachmentStyleQuestions: Question[] = [
  // Childhood caregiving experiences (questions 1-5)
  {
    id: 1,
    text: "How did your caregivers typically respond to your needs as a child?",
    type: "multiple-choice",
    options: [
      { id: "a1", text: "Consistently and supportively", value: 1 }, // Secure
      { id: "b1", text: "Unpredictably - sometimes attentive, sometimes not", value: 1 }, // Anxious
      { id: "c1", text: "They encouraged independence and self-reliance", value: 1 }, // Avoidant
      { id: "d1", text: "Inconsistently, with occasional rejection", value: 1 } // Fearful
    ]
  },
  {
    id: 2,
    text: "When you were upset as a child, what was the typical response from your caregivers?",
    type: "multiple-choice",
    options: [
      { id: "a2", text: "They were comforting and helped me process my feelings", value: 1 }, // Secure
      { id: "b2", text: "They were sometimes supportive but sometimes dismissive", value: 1 }, // Anxious
      { id: "c2", text: "They expected me to handle my emotions independently", value: 1 }, // Avoidant
      { id: "d2", text: "Their responses were unpredictable or frightening", value: 1 } // Fearful
    ]
  },
  {
    id: 3,
    text: "As a child, how did you feel about exploring new environments or situations?",
    type: "multiple-choice",
    options: [
      { id: "a3", text: "Confident exploring, knowing I could return to my caregivers for support", value: 1 }, // Secure
      { id: "b3", text: "Anxious about exploration, preferring to stay close to caregivers", value: 1 }, // Anxious
      { id: "c3", text: "Comfortable exploring independently without much caregiver interaction", value: 1 }, // Avoidant
      { id: "d3", text: "Conflicted - wanting to explore but also fearful about safety", value: 1 } // Fearful
    ]
  },
  {
    id: 4,
    text: "Which best describes how your childhood home environment felt to you?",
    type: "multiple-choice",
    options: [
      { id: "a4", text: "Consistently safe and supportive", value: 1 }, // Secure
      { id: "b4", text: "Sometimes loving but also unpredictable", value: 1 }, // Anxious
      { id: "c4", text: "Encouraged independence with limited emotional expression", value: 1 }, // Avoidant
      { id: "d4", text: "Inconsistent with periods of feeling unsafe or rejected", value: 1 } // Fearful
    ]
  },
  {
    id: 5,
    text: "When you achieved something as a child, how did your caregivers typically respond?",
    type: "multiple-choice",
    options: [
      { id: "a5", text: "With appropriate praise and encouragement", value: 1 }, // Secure
      { id: "b5", text: "Sometimes with enthusiasm, other times with indifference", value: 1 }, // Anxious
      { id: "c5", text: "With acknowledgment but an emphasis on self-reliance", value: 1 }, // Avoidant
      { id: "d5", text: "Unpredictably - sometimes supportive, sometimes critical", value: 1 } // Fearful
    ]
  },

  // Adult relationship patterns (questions 6-10)
  {
    id: 6,
    text: "In close relationships, do you find it easy to depend on others?",
    type: "multiple-choice",
    options: [
      { id: "a6", text: "Yes, I'm comfortable depending on others when appropriate", value: 1 }, // Secure
      { id: "b6", text: "I want to depend on others but worry they won't be there for me", value: 1 }, // Anxious
      { id: "c6", text: "I prefer not to depend on others; I value self-reliance", value: 1 }, // Avoidant
      { id: "d6", text: "I feel conflicted about depending on others - I want to but it's difficult", value: 1 } // Fearful
    ]
  },
  {
    id: 7,
    text: "How do you typically feel about closeness in relationships?",
    type: "multiple-choice",
    options: [
      { id: "a7", text: "Comfortable with both closeness and independence", value: 1 }, // Secure
      { id: "b7", text: "I want extreme closeness, but this sometimes pushes people away", value: 1 }, // Anxious
      { id: "c7", text: "I prefer maintaining some emotional distance", value: 1 }, // Avoidant
      { id: "d7", text: "I desire closeness but feel uncomfortable and fearful when I get it", value: 1 } // Fearful
    ]
  },
  {
    id: 8,
    text: "When facing conflicts in relationships, you tend to:",
    type: "multiple-choice",
    options: [
      { id: "a8", text: "Address issues directly while considering everyone's perspective", value: 1 }, // Secure
      { id: "b8", text: "Become emotional and seek reassurance that the relationship is okay", value: 1 }, // Anxious
      { id: "c8", text: "Minimize the importance of the conflict or withdraw", value: 1 }, // Avoidant
      { id: "d8", text: "Feel extremely distressed and alternate between confrontation and withdrawal", value: 1 } // Fearful
    ]
  },
  {
    id: 9,
    text: "How comfortable are you with expressing your needs in relationships?",
    type: "multiple-choice",
    options: [
      { id: "a9", text: "Generally comfortable expressing needs clearly", value: 1 }, // Secure
      { id: "b9", text: "I express needs intensely, fearing they won't be met otherwise", value: 1 }, // Anxious
      { id: "c9", text: "I rarely express needs; I prefer handling things myself", value: 1 }, // Avoidant
      { id: "d9", text: "I struggle to express needs due to fear of rejection", value: 1 } // Fearful
    ]
  },
  {
    id: 10,
    text: "When someone important to you is unavailable or unresponsive, you typically:",
    type: "multiple-choice",
    options: [
      { id: "a10", text: "Feel concerned but can manage your emotions while seeking reconnection", value: 1 }, // Secure
      { id: "b10", text: "Become very anxious and make repeated attempts to reconnect", value: 1 }, // Anxious
      { id: "c10", text: "Detach emotionally and focus on other things", value: 1 }, // Avoidant
      { id: "d10", text: "Feel intensely distressed but try to suppress your feelings", value: 1 } // Fearful
    ]
  },

  // Workplace relationship patterns (questions 11-15)
  {
    id: 11,
    text: "When starting a new job, you're most likely to:",
    type: "multiple-choice",
    options: [
      { id: "a11", text: "Build relationships while maintaining appropriate professional boundaries", value: 1 }, // Secure
      { id: "b11", text: "Seek close relationships quickly and worry about fitting in", value: 1 }, // Anxious
      { id: "c11", text: "Focus on tasks rather than building relationships", value: 1 }, // Avoidant
      { id: "d11", text: "Feel conflicted about workplace relationships - wanting them but fearful", value: 1 } // Fearful
    ]
  },
  {
    id: 12,
    text: "How do you typically respond to feedback from supervisors?",
    type: "multiple-choice",
    options: [
      { id: "a12", text: "Consider it objectively and use it constructively", value: 1 }, // Secure
      { id: "b12", text: "Worry extensively about what it means for your standing", value: 1 }, // Anxious
      { id: "c12", text: "Maintain emotional distance but consider practical aspects", value: 1 }, // Avoidant
      { id: "d12", text: "Feel deeply threatened while trying to appear unaffected", value: 1 } // Fearful
    ]
  },
  {
    id: 13,
    text: "When collaborating with colleagues, you prefer:",
    type: "multiple-choice",
    options: [
      { id: "a13", text: "Balanced collaboration with shared responsibilities", value: 1 }, // Secure
      { id: "b13", text: "Close collaboration with frequent communication", value: 1 }, // Anxious
      { id: "c13", text: "Clear division of tasks with independent execution", value: 1 }, // Avoidant
      { id: "d13", text: "Structured collaboration that minimizes potential rejection", value: 1 } // Fearful
    ]
  },
  {
    id: 14,
    text: "When a colleague is upset, you typically:",
    type: "multiple-choice",
    options: [
      { id: "a14", text: "Offer appropriate support while respecting boundaries", value: 1 }, // Secure
      { id: "b14", text: "Get very involved and take on their distress", value: 1 }, // Anxious
      { id: "c14", text: "Acknowledge their feelings but maintain emotional distance", value: 1 }, // Avoidant
      { id: "d14", text: "Feel uncomfortable and unsure how to respond effectively", value: 1 } // Fearful
    ]
  },
  {
    id: 15,
    text: "During periods of workplace uncertainty (reorganizations, layoffs), you tend to:",
    type: "multiple-choice",
    options: [
      { id: "a15", text: "Stay reasonably calm while taking practical preparatory steps", value: 1 }, // Secure
      { id: "b15", text: "Seek constant reassurance and information from others", value: 1 }, // Anxious
      { id: "c15", text: "Focus on self-reliance and preparation independent of others", value: 1 }, // Avoidant
      { id: "d15", text: "Experience intense worry but attempt to hide it from colleagues", value: 1 } // Fearful
    ]
  }
];
