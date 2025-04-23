
import { Question } from "@/types/assessment";

export const emotionalDysregulationQuestions: Question[] = [
  // Impulse Control Questions (1-5)
  {
    id: 1,
    text: "How often do you feel overwhelmed by minor setbacks at work?",
    type: "likert",
    options: [
      { id: "a1", text: "Never", value: 1 },
      { id: "b1", text: "Rarely", value: 2 },
      { id: "c1", text: "Sometimes", value: 3 },
      { id: "d1", text: "Often", value: 4 },
      { id: "e1", text: "Very Often", value: 5 }
    ]
  },
  {
    id: 2,
    text: "When frustrated at work, I struggle to control my reactions.",
    type: "likert",
    options: [
      { id: "a2", text: "Never", value: 1 },
      { id: "b2", text: "Rarely", value: 2 },
      { id: "c2", text: "Sometimes", value: 3 },
      { id: "d2", text: "Often", value: 4 },
      { id: "e2", text: "Very Often", value: 5 }
    ]
  },
  {
    id: 3,
    text: "If criticized, you would most likely:",
    type: "multiple-choice",
    options: [
      { id: "a3", text: "Reflect calmly on the feedback", value: 1 },
      { id: "b3", text: "Feel hurt but compose yourself", value: 2 },
      { id: "c3", text: "Become defensive but maintain composure", value: 3 },
      { id: "d3", text: "React defensively and express frustration", value: 4 },
      { id: "e3", text: "Feel extremely upset and struggle to hide it", value: 5 }
    ]
  },
  {
    id: 4,
    text: "How often do you say things you later regret during workplace disagreements?",
    type: "likert",
    options: [
      { id: "a4", text: "Never", value: 1 },
      { id: "b4", text: "Rarely", value: 2 },
      { id: "c4", text: "Sometimes", value: 3 },
      { id: "d4", text: "Often", value: 4 },
      { id: "e4", text: "Very Often", value: 5 }
    ]
  },
  {
    id: 5,
    text: "When facing a tight deadline, you typically:",
    type: "multiple-choice",
    options: [
      { id: "a5", text: "Stay calm and plan methodically", value: 1 },
      { id: "b5", text: "Feel anxious but maintain focus", value: 2 },
      { id: "c5", text: "Become somewhat stressed and occasionally distracted", value: 3 },
      { id: "d5", text: "Feel significantly anxious and have trouble focusing", value: 4 },
      { id: "e5", text: "Become overwhelmed and struggle to function effectively", value: 5 }
    ]
  },
  
  // Emotional Clarity Questions (6-10)
  {
    id: 6,
    text: "I have difficulty understanding exactly what emotions I'm feeling in stressful work situations.",
    type: "likert",
    options: [
      { id: "a6", text: "Never", value: 1 },
      { id: "b6", text: "Rarely", value: 2 },
      { id: "c6", text: "Sometimes", value: 3 },
      { id: "d6", text: "Often", value: 4 },
      { id: "e6", text: "Very Often", value: 5 }
    ]
  },
  {
    id: 7,
    text: "During workplace conflicts, I can clearly identify what I'm feeling.",
    type: "likert",
    options: [
      { id: "a7", text: "Always", value: 1 },
      { id: "b7", text: "Often", value: 2 },
      { id: "c7", text: "Sometimes", value: 3 },
      { id: "d7", text: "Rarely", value: 4 },
      { id: "e7", text: "Never", value: 5 }
    ]
  },
  {
    id: 8,
    text: "When receiving mixed feedback on a project, you would most likely:",
    type: "multiple-choice",
    options: [
      { id: "a8", text: "Clearly distinguish your emotional reactions and address each point logically", value: 1 },
      { id: "b8", text: "Generally understand your feelings but focus more on practical next steps", value: 2 },
      { id: "c8", text: "Have some difficulty separating your emotions from your professional assessment", value: 3 },
      { id: "d8", text: "Feel confused about your emotional reaction and struggle to respond constructively", value: 4 },
      { id: "e8", text: "Experience an emotional reaction you can't clearly define or manage effectively", value: 5 }
    ]
  },
  {
    id: 9,
    text: "I find it difficult to describe my feelings to colleagues or managers.",
    type: "likert",
    options: [
      { id: "a9", text: "Never", value: 1 },
      { id: "b9", text: "Rarely", value: 2 },
      { id: "c9", text: "Sometimes", value: 3 },
      { id: "d9", text: "Often", value: 4 },
      { id: "e9", text: "Very Often", value: 5 }
    ]
  },
  {
    id: 10,
    text: "When a colleague is upset, I can usually accurately identify what they might be feeling.",
    type: "likert",
    options: [
      { id: "a10", text: "Always", value: 1 },
      { id: "b10", text: "Often", value: 2 },
      { id: "c10", text: "Sometimes", value: 3 },
      { id: "d10", text: "Rarely", value: 4 },
      { id: "e10", text: "Never", value: 5 }
    ]
  },
  
  // Distress Tolerance Questions (11-15)
  {
    id: 11,
    text: "When facing multiple competing demands at work, I feel completely overwhelmed.",
    type: "likert",
    options: [
      { id: "a11", text: "Never", value: 1 },
      { id: "b11", text: "Rarely", value: 2 },
      { id: "c11", text: "Sometimes", value: 3 },
      { id: "d11", text: "Often", value: 4 },
      { id: "e11", text: "Very Often", value: 5 }
    ]
  },
  {
    id: 12,
    text: "When work becomes highly stressful, you typically:",
    type: "multiple-choice",
    options: [
      { id: "a12", text: "Use effective coping strategies and maintain performance", value: 1 },
      { id: "b12", text: "Experience stress but manage to maintain adequate performance", value: 2 },
      { id: "c12", text: "Feel significantly stressed and see some performance decline", value: 3 },
      { id: "d12", text: "Become very distressed and struggle to maintain performance", value: 4 },
      { id: "e12", text: "Feel overwhelmed to the point of significant performance impairment", value: 5 }
    ]
  },
  {
    id: 13,
    text: "When experiencing strong negative emotions at work, I can still complete necessary tasks.",
    type: "likert",
    options: [
      { id: "a13", text: "Always", value: 1 },
      { id: "b13", text: "Often", value: 2 },
      { id: "c13", text: "Sometimes", value: 3 },
      { id: "d13", text: "Rarely", value: 4 },
      { id: "e13", text: "Never", value: 5 }
    ]
  },
  {
    id: 14,
    text: "When a project fails or receives criticism, I typically:",
    type: "multiple-choice",
    options: [
      { id: "a14", text: "Accept it as part of professional growth and learn from it", value: 1 },
      { id: "b14", text: "Feel disappointed but quickly refocus on improvements", value: 2 },
      { id: "c14", text: "Become discouraged but eventually recover", value: 3 },
      { id: "d14", text: "Feel significantly upset and take a while to recover", value: 4 },
      { id: "e14", text: "Feel devastated and question my professional abilities", value: 5 }
    ]
  },
  {
    id: 15,
    text: "During periods of work uncertainty (reorganizations, role changes), I find my anxiety becomes unmanageable.",
    type: "likert",
    options: [
      { id: "a15", text: "Never", value: 1 },
      { id: "b15", text: "Rarely", value: 2 },
      { id: "c15", text: "Sometimes", value: 3 },
      { id: "d15", text: "Often", value: 4 },
      { id: "e15", text: "Very Often", value: 5 }
    ]
  }
];
