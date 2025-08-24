// "use client"

// import { useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { Mic, MicOff, ArrowRight } from "lucide-react"
// import { useRouter } from "next/navigation"

// interface ChatMessage {
//   id: number
//   type: "question" | "answer"
//   content: string
//   timestamp: Date
// }

// export default function MeetingPage() {
//   // const [isMuted, setIsMuted] = useState(false)
//   // const [aiSpeech, setAiSpeech] = useState(
//   //   "Hello! I'm your AI interviewer. Let's start with a simple question: Can you tell me about yourself and why you're interested in this position?",
//   // )
//   // // const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
//   // //   {
//   // //     id: 1,
//   // //     type: "question",
//   // //     content: "Can you tell me about yourself?",
//   // //     timestamp: new Date(),
//   // //   },
//   // //   {
//   // //     id: 2,
//   // //     type: "answer",
//   // //     content: "I'm a software developer with 3 years of experience in React and Node.js...",
//   // //     timestamp: new Date(),
//   // //   },
//   // // ])
//   // const router = useRouter()

//   // const toggleMute = () => {
//   //   setIsMuted(!isMuted)
//   // }

//   // const handleFinishInterview = () => {
//   //   router.push("/summary")
//   // }
//   const [isMuted, setIsMuted] = useState(false);
//   const [aiSpeech, setAiSpeech] = useState(
//     "Hello! I'm your AI interviewer. Let's start with a simple question: Can you tell me about yourself and why you're interested in this position?"
//   );
//   const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
//   const router = useRouter();

//   // ✅ Start mic capture automatically on page load
//   useEffect(() => {
//     const startMic = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           audio: { sampleRate: 16000 },
//         });
//         setMediaStream(stream);
//         setIsMuted(false);
//       } catch (err) {
//         console.error("Error accessing microphone:", err);
//         setIsMuted(true);
//       }
//     };

//     startMic();

//     // cleanup mic when leaving
//     return () => {
//       mediaStream?.getTracks().forEach((track) => track.stop());
//     };
//   }, []);

//   const toggleMute = () => {
//     if (mediaStream) {
//       mediaStream
//         .getAudioTracks()
//         .forEach((track) => (track.enabled = isMuted));
//     }
//     setIsMuted(!isMuted);
//   };

//   const handleFinishInterview = () => {
//     mediaStream?.getTracks().forEach((track) => track.stop());
//     router.push("/summary");
//   };


//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold mb-2">Interview Session</h1>
//           <p className="text-muted-foreground">Practice your interview skills with our AI interviewer</p>
//         </div>

//         {/* Main Interview Area */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-8">
//           {/* User Side */}
//           <Card>
//             <CardContent className="p-8 text-center">
//               <div className="space-y-6">
//                 <div className="w-32 h-32 rounded-full border-2 border-dashed border-muted-foreground/50 flex items-center justify-center mx-auto">
//                   <div className="text-muted-foreground text-center">
//                     <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-2"></div>
//                     <p className="text-sm">You</p>
//                   </div>
//                 </div>

//                 <Button
//                   onClick={toggleMute}
//                   variant={isMuted ? "destructive" : "default"}
//                   size="lg"
//                   className="rounded-full w-16 h-16"
//                 >
//                   {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
//                 </Button>

//                 <p className="text-sm text-muted-foreground">{isMuted ? "Microphone muted" : "Microphone active"}</p>
//               </div>
//             </CardContent>
//           </Card>

//           {/* AI Side */}
//           <Card>
//             <CardContent className="p-8 text-center">
//               <div className="space-y-6">
//                 <div className="w-32 h-32 rounded-full border-2 border-primary flex items-center justify-center mx-auto bg-primary/5">
//                   <div className="text-primary text-center">
//                     <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
//                       <span className="text-2xl font-bold">AI</span>
//                     </div>
//                     <p className="text-sm">Interviewer</p>
//                   </div>
//                 </div>

//                 <div className="bg-muted rounded-xl p-4 text-left">
//                   <p className="text-sm leading-relaxed">{aiSpeech}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Chat History */}
//         {/* <Card>
//           <CardContent className="p-6">
//             <h3 className="font-semibold mb-4">Interview Q&A History</h3>
//             <ScrollArea className="h-64">
//               <div className="space-y-4">
//                 {chatMessages.map((message) => (
//                   <div
//                     key={message.id}
//                     className={`p-3 rounded-lg ${
//                       message.type === "question" ? "bg-primary/10 border-l-4 border-primary" : "bg-muted ml-4"
//                     }`}
//                   >
//                     <div className="flex items-center justify-between mb-1">
//                       <span className="text-xs font-medium text-muted-foreground">
//                         {message.type === "question" ? "AI Question" : "Your Answer"}
//                       </span>
//                       <span className="text-xs text-muted-foreground">{message.timestamp.toTimeString()}</span>
//                     </div>
//                     <p className="text-sm">{message.content}</p>
//                   </div>
//                 ))}
//               </div>
//             </ScrollArea>
//           </CardContent>
//         </Card> */}

//         {/* Finish Interview Button */}
//         <div className="flex justify-center mt-8">
//           <Button onClick={handleFinishInterview} size="lg" className="px-8">
//             Finish Interview
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Mic, MicOff, ArrowRight } from "lucide-react";
// import { useRouter } from "next/navigation";

// export default function MeetingPage() {
//   const [isMuted, setIsMuted] = useState(false);
//   const [aiSpeech, setAiSpeech] = useState(
//     "Hello! I'm your AI interviewer. Let's start with a simple question: Can you tell me about yourself and why you're interested in this position?"
//   );
//   const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
//   const mediaRecorderRef = useRef<MediaRecorder | null>(null);
//   const wsRef = useRef<WebSocket | null>(null);
//   const router = useRouter();

//   // ✅ Start mic + websocket when meeting begins
//   useEffect(() => {
//     const startMicAndWS = async () => {
//       try {
//         // 1. Open WebSocket connection
//         const ws = new WebSocket("ws://localhost:8000/ws/audio");
//         wsRef.current = ws;

//         ws.onopen = () => {
//           console.log("✅ WebSocket connected");
//         };
//         ws.onerror = (err) => {
//           console.error("❌ WebSocket error:", err);
//         };
//         ws.onclose = () => {
//           console.log("🔌 WebSocket closed");
//         };

//         // 2. Get mic stream
//         const stream = await navigator.mediaDevices.getUserMedia({
//           audio: { sampleRate: 16000, channelCount: 1 },
//         });
//         setMediaStream(stream);

//         // 3. Setup MediaRecorder
//         const mediaRecorder = new MediaRecorder(stream, {
//           mimeType: "audio/webm;codecs=opus", // widely supported
//           audioBitsPerSecond: 16000 * 16, // optional
//         });
//         mediaRecorderRef.current = mediaRecorder;

//         // 4. When data is available, send to WS
//         mediaRecorder.ondataavailable = async (event) => {
//           if (event.data.size > 0 && ws.readyState === WebSocket.OPEN) {
//             const buffer = await event.data.arrayBuffer();
//             ws.send(buffer);
//           }
//         };

//         // Start recording with 250ms chunks
//         mediaRecorder.start(250);

//         setIsMuted(false);
//       } catch (err) {
//         console.error("Error accessing microphone:", err);
//         setIsMuted(true);
//       }
//     };

//     startMicAndWS();

//     // Cleanup: stop mic + close websocket
//     return () => {
//       mediaRecorderRef.current?.stop();
//       mediaStream?.getTracks().forEach((track) => track.stop());
//       wsRef.current?.close();
//     };
//   }, []);

//   const toggleMute = () => {
//     if (mediaStream) {
//       mediaStream
//         .getAudioTracks()
//         .forEach((track) => (track.enabled = isMuted));
//     }
//     setIsMuted(!isMuted);
//   };

//   const handleFinishInterview = () => {
//     mediaRecorderRef.current?.stop();
//     mediaStream?.getTracks().forEach((track) => track.stop());
//     wsRef.current?.close();
//     router.push("/summary");
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold mb-2">Interview Session</h1>
//           <p className="text-muted-foreground">
//             Practice your interview skills with our AI interviewer
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 mb-8">
//           {/* User Side */}
//           <Card>
//             <CardContent className="p-8 text-center">
//               <div className="space-y-6">
//                 <div className="w-32 h-32 rounded-full border-2 border-dashed border-muted-foreground/50 flex items-center justify-center mx-auto">
//                   <div className="text-muted-foreground text-center">
//                     <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-2"></div>
//                     <p className="text-sm">You</p>
//                   </div>
//                 </div>

//                 <Button
//                   onClick={toggleMute}
//                   variant={isMuted ? "destructive" : "default"}
//                   size="lg"
//                   className="rounded-full w-16 h-16"
//                 >
//                   {isMuted ? (
//                     <MicOff className="h-6 w-6" />
//                   ) : (
//                     <Mic className="h-6 w-6" />
//                   )}
//                 </Button>

//                 <p className="text-sm text-muted-foreground">
//                   {isMuted ? "Microphone muted" : "Microphone active"}
//                 </p>
//               </div>
//             </CardContent>
//           </Card>

//           {/* AI Side */}
//           <Card>
//             <CardContent className="p-8 text-center">
//               <div className="space-y-6">
//                 <div className="w-32 h-32 rounded-full border-2 border-primary flex items-center justify-center mx-auto bg-primary/5">
//                   <div className="text-primary text-center">
//                     <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
//                       <span className="text-2xl font-bold">AI</span>
//                     </div>
//                     <p className="text-sm">Interviewer</p>
//                   </div>
//                 </div>

//                 <div className="bg-muted rounded-xl p-4 text-left">
//                   <p className="text-sm leading-relaxed">{aiSpeech}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Finish Interview */}
//         <div className="flex justify-center mt-8">
//           <Button onClick={handleFinishInterview} size="lg" className="px-8">
//             Finish Interview
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, MicOff, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MeetingPage() {
  const [isMuted, setIsMuted] = useState(false);
  const [aiSpeech] = useState(
    "Hello! I'm your AI interviewer. Let's start with a simple question: Can you tell me about yourself and why you're interested in this position?"
  );
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [volume, setVolume] = useState(0); // 🔊 mic intensity (0–1)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const router = useRouter();

  // ✅ Start mic + websocket + analyser
  useEffect(() => {
    const startMicAndWS = async () => {
      try {
        // 1. Open WebSocket connection
        const ws = new WebSocket("ws://localhost:8000/ws/audio");
        wsRef.current = ws;

        // 2. Get mic stream
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: { sampleRate: 16000, channelCount: 1 },
        });
        setMediaStream(stream);

        // 3. Setup MediaRecorder (for WS streaming)
        const mediaRecorder = new MediaRecorder(stream, {
          mimeType: "audio/webm;codecs=opus",
        });
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.ondataavailable = async (event) => {
          if (event.data.size > 0 && ws.readyState === WebSocket.OPEN) {
            const buffer = await event.data.arrayBuffer();
            ws.send(buffer);
          }
        };
        mediaRecorder.start(250);

        // 4. Setup AudioContext for visualization
        const audioContext = new AudioContext();
        audioContextRef.current = audioContext;
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        source.connect(analyser);

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const tick = () => {
          analyser.getByteTimeDomainData(dataArray);

          // Calculate normalized volume (0–1)
          let sum = 0;
          for (let i = 0; i < dataArray.length; i++) {
            const val = (dataArray[i] - 128) / 128;
            sum += val * val;
          }
          const rms = Math.sqrt(sum / dataArray.length);
          setVolume(rms); // save intensity
          requestAnimationFrame(tick);
        };

        tick();
        setIsMuted(false);
      } catch (err) {
        console.error("Error accessing microphone:", err);
        setIsMuted(true);
      }
    };

    startMicAndWS();

    return () => {
      mediaRecorderRef.current?.stop();
      mediaStream?.getTracks().forEach((track) => track.stop());
      wsRef.current?.close();
      audioContextRef.current?.close();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMute = () => {
    if (mediaStream) {
      mediaStream
        .getAudioTracks()
        .forEach((track) => (track.enabled = isMuted));
    }
    setIsMuted(!isMuted);
  };

  const handleFinishInterview = () => {
    mediaRecorderRef.current?.stop();
    mediaStream?.getTracks().forEach((track) => track.stop());
    wsRef.current?.close();
    audioContextRef.current?.close();
    router.push("/summary");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Interview Session</h1>
          <p className="text-muted-foreground">
            Practice your interview skills with our AI interviewer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* User Side */}
          <Card>
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                  {/* Ripple effect around dotted border */}
                  <div
                    className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse transition-transform duration-150"
                    style={{
                      transform: `scale(${1 + volume * 1.5})`,
                      opacity: Math.min(0.8, volume * 4),
                    }}
                  ></div>

                  {/* Avatar with dotted border */}
                  <div className="relative w-32 h-32 rounded-full border-2 border-dashed border-muted-foreground/50 flex items-center justify-center overflow-hidden">
                    <div className="w-20 h-20 rounded-full bg-muted"></div>
                  </div>
                  <p className="text-sm mt-2">You</p>
                </div>
                <Button
                  onClick={toggleMute}
                  variant={isMuted ? "destructive" : "default"}
                  size="lg"
                  className="rounded-full w-16 h-16"
                >
                  {isMuted ? (
                    <MicOff className="h-6 w-6" />
                  ) : (
                    <Mic className="h-6 w-6" />
                  )}
                </Button>

                <p className="text-sm text-muted-foreground">
                  {isMuted ? "Microphone muted" : "Microphone active"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* AI Side */}
          <Card>
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="w-32 h-32 rounded-full border-2 border-primary flex items-center justify-center mx-auto bg-primary/5">
                  <div className="text-primary text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl font-bold">AI</span>
                    </div>
                    <p className="text-sm">Interviewer</p>
                  </div>
                </div>

                <div className="bg-muted rounded-xl p-4 text-left">
                  <p className="text-sm leading-relaxed">{aiSpeech}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Finish Interview */}
        <div className="flex justify-center mt-8">
          <Button onClick={handleFinishInterview} size="lg" className="px-8">
            Finish Interview
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
