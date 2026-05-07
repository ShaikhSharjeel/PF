import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const VIDEO_SRC = "/media/bg.mp4";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Scroll Function
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_SRC}
        muted
        loop
        playsInline
        autoPlay
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Scroll Circle */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-[-170px] left-1/2 -translate-x-1/2 z-20 flex items-start justify-center cursor-pointer"
      >
        
        <div className="relative w-[360px] h-[360px] rounded-full border border-white/50 flex items-start justify-center">
          
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-[70px]"
          >
            <ArrowDown
              className="w-10 h-10 text-white"
              strokeWidth={1.2}
            />
          </motion.div>

        </div>
      </button>
    </section>
  );
}