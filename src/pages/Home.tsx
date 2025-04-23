
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAssessment } from "@/context/AssessmentContext";

export default function Home() {
  const { resetAssessment } = useAssessment();
  
  // Reset assessment data when returning to home page
  resetAssessment();
  
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
      <main className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-thrive-800 mb-3">Thrive Workplace Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scientific assessments to understand emotional regulation and attachment styles in workplace contexts
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-l-4 border-l-thrive-500">
            <CardHeader>
              <CardTitle>Emotional Dysregulation Assessment</CardTitle>
              <CardDescription>
                Based on the Difficulties in Emotion Regulation Scale (DERS)
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-4">This 15-question assessment evaluates your ability to regulate emotions in workplace contexts.</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Understand impulse control tendencies</li>
                <li>Assess emotional clarity in professional settings</li>
                <li>Evaluate distress tolerance under pressure</li>
              </ul>
              <p>Completion time: ~5 minutes</p>
            </CardContent>
            <CardFooter>
              <Link to="/emotional-dysregulation" className="w-full">
                <Button className="w-full bg-thrive-600 hover:bg-thrive-700">Start Assessment</Button>
              </Link>
            </CardFooter>
          </Card>
          
          <Card className="border-l-4 border-l-assessment-500">
            <CardHeader>
              <CardTitle>Attachment Style Assessment</CardTitle>
              <CardDescription>
                Based on Attachment Theory (Bowlby, Ainsworth)
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="mb-4">This 15-question assessment identifies your dominant attachment style in professional relationships.</p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Understand childhood caregiving influences</li>
                <li>Assess adult relational patterns</li>
                <li>Identify workplace relationship tendencies</li>
              </ul>
              <p>Completion time: ~5 minutes</p>
            </CardContent>
            <CardFooter>
              <Link to="/attachment-style" className="w-full">
                <Button className="w-full bg-assessment-600 hover:bg-assessment-700">Start Assessment</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            For highest accuracy, complete both assessments to receive your combined workplace insights report.
          </p>
        </div>
      </main>
    </div>
  );
}
