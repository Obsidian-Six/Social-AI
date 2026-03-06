import React, { useState, useRef } from 'react';
import { Play, Pause, MessageCircle, Send } from 'lucide-react';
import StatsSection from './StatsSections';

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const updateTime = () => {
    setCurrent(videoRef.current.currentTime);
  };

  const loadMeta = () => {
    setDuration(videoRef.current.duration);
  };

  const seek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  const format = (t) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const progress = duration ? (current / duration) * 100 : 0;

  return (
    <section className="relative py-12 bg-[#fffafa] flex flex-col items-center overflow-hidden">
      
      <div className="relative w-full max-w-3xl px-6 mb-16">
        <div 
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            poster='/poster.png'
            className="w-full h-full object-cover"
            loop
            playsInline
            onTimeUpdate={updateTime}
            onLoadedMetadata={loadMeta}
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white">
                <Play className="w-6 h-6 fill-current ml-1" />
              </button>
            </div>
          )}

          {/* Bottom Controls */}
          <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">

            {/* Progress Bar */}
            <div
              onClick={seek}
              className="w-full h-1 bg-gray-600 rounded cursor-pointer mb-2"
            >
              <div
                style={{ width: `${progress}%` }}
                className="h-1 bg-emerald-500 rounded"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>

                <span>
                  {format(current)} / {format(duration)}
                </span>
              </div>

              <div className="text-[10px] tracking-widest opacity-70">
                SOCIAL AI
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <StatsSection />
      </div>

      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <a href="https://t.me/socialainews" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <Send size={20} />
        </a>
        <a href="https://wa.me/+917208263013" className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
          <MessageCircle size={20} />
        </a>
      </div>
    </section>
  );
};

export default VideoPlayer;