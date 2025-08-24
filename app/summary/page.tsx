"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle, RotateCcw, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SummaryPage() {
  const router = useRouter()

  const handleRestart = () => {
    router.push("/upload")
  }

  const performanceScore = 78
  const strengths = [
    "Clear communication skills",
    "Strong technical knowledge",
    "Good problem-solving approach",
    "Professional demeanor",
  ]

  const improvements = [
    "Provide more specific examples",
    "Elaborate on leadership experience",
    "Practice behavioral questions",
    "Improve closing statements",
  ]

  const practiceQuestions = [
    "Tell me about a time you faced a challenging deadline",
    "How do you handle conflicts with team members?",
    "Describe your biggest professional achievement",
    "What are your salary expectations?",
    "Where do you see yourself in 5 years?",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Interview Summary</h1>
          <p className="text-muted-foreground">Here&lsquo;s your performance analysis and recommendations for improvement</p>
        </div>

        <div className="grid gap-6">
          {/* Performance Rating */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Overall Performance
              </CardTitle>
              <CardDescription>
                Your interview performance based on communication, technical skills, and professionalism
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{performanceScore}%</span>
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    Good Performance
                  </Badge>
                </div>
                <Progress value={performanceScore} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  You demonstrated solid interview skills with room for improvement in specific areas.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Strengths */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  Strengths
                </CardTitle>
                <CardDescription>Areas where you performed well</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Areas to Improve */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <AlertCircle className="h-5 w-5" />
                  Areas to Improve
                </CardTitle>
                <CardDescription>Focus on these areas for better performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Practice Questions */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended Practice Questions</CardTitle>
              <CardDescription>Practice these questions to improve your interview performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {practiceQuestions.map((question, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-0.5 flex-shrink-0">
                      {index + 1}
                    </Badge>
                    <span className="text-sm">{question}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Restart Button */}
          <div className="flex justify-center">
            <Button onClick={handleRestart} size="lg" className="px-8">
              <RotateCcw className="mr-2 h-4 w-4" />
              Start New Interview
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
