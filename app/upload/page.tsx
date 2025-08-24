/* eslint-disable @next/next/no-img-element */


"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, Loader2, Video } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const router = useRouter()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
    }
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(false)
    const droppedFile = event.dataTransfer.files[0]
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile)
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

//   const handleNext = () => {
//     if (file) {
//       router.push("/meeting")
//     }
//   }
// const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setUploadedFile(file);
//       setIsAnalyzed(false); // Reset analysis state when new file is uploaded
//     }
//   };

  const handleAnalyzeFile = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    // Simulate file analysis
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
    setIsAnalyzed(true);
  };

  const handleJoinMeeting = () => {
    // Handle join meeting logic here
    console.log("Joining meeting...");
    router.push('/meeting')
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Upload Job Description</h1>
          <p className="text-muted-foreground">
            Upload the job description PDF to start your interview practice session
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
                <CardDescription>
                  Upload a PDF file containing the job description you want to practice for
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    isDragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  {file ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <FileText className="h-12 w-12 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <Button variant="outline" onClick={() => setFile(null)} size="sm">
                        Remove File
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <Upload className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-lg font-medium">
                          Drop your PDF here, or{" "}
                          <label className="text-primary cursor-pointer hover:underline">
                            browse
                            <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
                          </label>
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">PDF files only, up to 10MB</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Avatar Section */}
          
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-muted-foreground/50 flex items-center justify-center overflow-hidden">
               <img src="/images/avatar1.png" className="" alt="" />
          </div>
        </div>

        {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              {/* Analyze File Button */}
              <Button
                onClick={handleAnalyzeFile}
                disabled={!file || isAnalyzing}
                className="flex items-center space-x-2"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <FileText className="h-4 w-4" />
                    <span>Analyze File</span>
                  </>
                )}
              </Button>

              {/* Join Meeting Button */}
              <Button
                onClick={handleJoinMeeting}
                disabled={!isAnalyzed}
                variant={isAnalyzed ? "default" : "secondary"}
                className="flex items-center space-x-2"
                size="lg"
              >
                <Video className="h-4 w-4" />
                <span>Join Meeting</span>
              </Button>
            </div>

            {/* Status Messages */}
            {file && !isAnalyzed && !isAnalyzing && (
              <div className="text-center text-sm text-muted-foreground">
                File uploaded successfully. Click &ldquo;Analyze File&ldquo; to proceed.
              </div>
            )}

            {isAnalyzed && (
              <div className="text-center text-sm text-green-600 font-medium">
                File analysis complete! You can now join the meeting.
              </div>
            )}
      </div>
    </div>
  )
}
