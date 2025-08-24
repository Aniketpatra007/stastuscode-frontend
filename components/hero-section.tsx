/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare, TrendingUp, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { FlipWords } from "./ui/flip-words";


export default function HeroSection() {
  const router = useRouter();
  const handlePractice = () => {
    router.push("/upload");
  };
  const words: string[] = ["Conquer.", "Ace.", "Crack."]
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32 w-full ">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white dark:bg-gradient-to-b dark:from-black dark:via-primary/5 dark:to-black" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="block">Talk. Learn.</span>
                <FlipWords
                  className="block text-primary dark:text-primary"
                  words={words}
                  duration={0.15}
                />
                {/* <span className="block text-primary">Conquer.</span> */}
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-2">
                  Your AI Interview Coach Awaits!
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Practice interviews, get real-time feedback, and boost your
                confidence with AI-driven analysis of your answers, tone, and
                body language.
              </p>
            </div>

            {/* Value proposition features */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Real-time AI Feedback
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Tailored Mock Interviews
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Boost Your Confidence
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  Track Your Progress
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                onClick={handlePractice}
              >
                Start Practicing
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-xs font-bold text-white">
                  J
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center text-xs font-bold text-white">
                  S
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-xs font-bold text-white">
                  M
                </div>
              </div>
              <span>Join 10,000+ job seekers who aced their interviews</span>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Main hero image */}
              <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 shadow-2xl">
                <img
                  src="/images/avatar1.png"
                  alt="Person practicing interview with AI coach"
                  className="w-full h-auto rounded-lg"
                />

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                  95% Success Rate!
                </div>

                <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-3 py-2 rounded-full text-sm font-semibold shadow-lg">
                  AI Powered ✨
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
