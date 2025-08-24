import React from "react";
import MinimalCard, {
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "./ui/minimal-card";


const Feature = () => {
  return (
    <>
      <h1 className="text-center text-5xl font-bold py-8">Features</h1>
      <div className="mx-auto max-w-6xl rounded-[24px] border dark:border-white/20 border-black/5 p-2 shadow-sm h-5xl mb-8">
        <div className="relative rounded-[24px] border border-black/5 dark:border-white/20 bg-neutral-800/10 dark:bg-white/10 p-6 shadow-sm flex justify-around gap-6">
          <MinimalCard className="m-2 w-[460px] ">
            <MinimalCardImage
              className="h-[200px]"
              src={"/images/first.jpg"}
              alt="Real Time Interview"
            />
            <MinimalCardTitle>Real Time Interview</MinimalCardTitle>
            <MinimalCardDescription>
              Users get access to free AI-mock interview based on job
              description.
            </MinimalCardDescription>
          </MinimalCard>

          <MinimalCard className="m-2 w-[460px] ">
            <MinimalCardImage
              className="h-[200px]"
              src={"/images/third.jpg"}
              alt="Real Time Interview"
            />
            <MinimalCardTitle>Resume Job Predictor</MinimalCardTitle>
            <MinimalCardDescription>
              Upload your Resume to know the job you are fit for.
            </MinimalCardDescription>
          </MinimalCard>
          <MinimalCard className="m-2 w-[460px] ">
            <MinimalCardImage
              className="h-[200px]"
              src={"/images/second.jpg"}
              alt="Real Time Interview"
            />
            <MinimalCardTitle>Summary at your Fingertips</MinimalCardTitle>
            <MinimalCardDescription>
              Get instant Summary Report of the interview to ace
              your next interview.
            </MinimalCardDescription>
          </MinimalCard>
        </div>
      </div>
    </>
  );
};

export default Feature;
