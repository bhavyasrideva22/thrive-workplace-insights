
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useAssessment } from "@/context/AssessmentContext";
import { ResultCard } from "@/components/ResultCard";
import { Badge } from "@/components/ui/badge";
import { LikertScale } from "@/components/LikertScale";

export default function Results() {
  const { 
    responses, 
    calculateResults, 
    emotionalDysregulationResult, 
    attachmentStyleResult,
    combinedResult
  } = useAssessment();
  const navigate = useNavigate();

  // Calculate results when the page loads
  useEffect(() => {
    // Check if both assessments have been completed
    const emotionalQuestionCount = Object.keys(responses.emotionalDysregulation).length;
    const attachmentQuestionCount = Object.keys(responses.attachmentStyle).length;
    
    if (emotionalQuestionCount < 5 && attachmentQuestionCount < 5) {
      // If neither assessment has enough responses, redirect to home
      navigate("/");
      return;
    }
    
    calculateResults();
  }, [calculateResults, responses, navigate]);

  // Check if we have results to display
  if (!emotionalDysregulationResult && !attachmentStyleResult) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading results...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-10 text-center">
          <Link to="/" className="text-primary hover:text-primary/80 mb-4 inline-block">
            ← Return to home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Your Workplace Insights Report</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive analysis of your emotional regulation abilities and attachment style in workplace contexts
          </p>
        </header>

        {combinedResult && (
          <Card className="mb-10 border-t-4 border-t-primary">
            <CardHeader>
              <CardTitle className="text-2xl">Overall Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                {combinedResult.isHighPotential ? (
                  <Badge className="bg-green-500 hover:bg-green-600 mb-4">High-Potential Match</Badge>
                ) : (
                  <Badge className="bg-yellow-500 hover:bg-yellow-600 mb-4">Development Opportunities</Badge>
                )}
                <p className="text-lg leading-relaxed">{combinedResult.overallRecommendation}</p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Emotional Dysregulation Results */}
          {emotionalDysregulationResult && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-thrive-800">Emotional Dysregulation Profile</h2>
              <ResultCard
                title="Emotional Regulation"
                description={emotionalDysregulationResult.description}
                category={emotionalDysregulationResult.category}
                implications={emotionalDysregulationResult.workplaceImplications}
              />
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Detailed Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <LikertScale 
                    score={emotionalDysregulationResult.impulsivity} 
                    maxScore={25}
                    label="Impulse Control" 
                    description="Ability to manage behavioral responses in emotionally charged situations"
                  />
                  <LikertScale 
                    score={emotionalDysregulationResult.emotionalClarity} 
                    maxScore={25}
                    label="Emotional Clarity" 
                    description="Ability to identify and understand your emotions"
                  />
                  <LikertScale 
                    score={emotionalDysregulationResult.distressTolerance} 
                    maxScore={25}
                    label="Distress Tolerance" 
                    description="Ability to withstand negative emotional states"
                  />
                </CardContent>
              </Card>
            </div>
          )}
          
          {/* Attachment Style Results */}
          {attachmentStyleResult && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-assessment-800">Attachment Style Profile</h2>
              <ResultCard
                title={attachmentStyleResult.styleName}
                description={attachmentStyleResult.description}
                category={attachmentStyleResult.category}
                implications={attachmentStyleResult.workplaceImplications}
              />
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Style Characteristics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 italic">{attachmentStyleResult.styleDescription}</p>
                  <p className="text-sm text-muted-foreground">
                    Your attachment style influences how you form and maintain relationships in the workplace, 
                    including your approach to teamwork, conflict resolution, and professional boundaries.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
        
        <div className="mt-10 text-center">
          <p className="mb-6 text-muted-foreground">
            This assessment is for informational purposes only and should not be considered a clinical evaluation.
          </p>
          <Link to="/">
            <Button className="bg-primary">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
