import React, { useState, useRef, useEffect } from "react";
const EngagementInvitation = () => {
  const [theme] = useState({
    primaryColor: "#FF6B9E",
    secondaryColor: "#9C27B0",
    tertiaryColor: "#00BCD4",
    accentColor: "#FFC107",
    complementaryColor: "#4CAF50",
    fonts: {
      heading: "'Playfair Display', serif",
      names: "'Parisienne', cursive",
      details: "'Montserrat', sans-serif",
      quote: "'Tangerine', cursive",
    },
  });

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((error) => console.error("Audio play error:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

   useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Autoplay blocked by browser:", err);
        });
    }
  }, []);

  const ElaborateFlowerDecoration = ({
    className,
    colors,
    scale = 1,
    variant = 1,
  }) => {
    const getFlowerPath = () => {
      switch (variant) {
        case 2:
          return "M100 100 Q130 70, 100 40 Q70 70, 100 100 Q130 130, 100 160 Q70 130, 100 100";
        case 3:
          return "M100 100 Q140 80, 100 30 Q60 80, 100 100 Q140 120, 100 170 Q60 120, 100 100";
        default:
          return "M100 100 Q120 50, 100 20 Q80 50, 100 100 Q120 150, 100 180 Q80 150, 100 100";
      }
    };

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className={className}
        aria-hidden="true"
        style={{ transform: `scale(${scale})` }}
      >
        <defs>
          <radialGradient
            id="elaborateFlowerGradient"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              stopColor={colors.primaryColor}
              stopOpacity="0.8"
            />
            <stop
              offset="100%"
              stopColor={colors.secondaryColor}
              stopOpacity="0.4"
            />
          </radialGradient>
        </defs>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
          <g key={rotation} transform={`rotate(${rotation} 100 100)`}>
            <path
              d={getFlowerPath()}
              fill="url(#elaborateFlowerGradient)"
              stroke={colors.accentColor}
              strokeWidth="2"
              opacity="0.7"
            />
          </g>
        ))}
        <circle
          cx="100"
          cy="100"
          r="15"
          fill={colors.complementaryColor}
          opacity="0.6"
        />
      </svg>
    );
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Parisienne&family=Montserrat:wght@400;500;600;700&family=Tangerine:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        @keyframes bloomAnimation {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(3deg); }
        }
        @keyframes sparkleAnimation {
          0%, 100% { opacity: 0.8; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        /* Base animations */
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: floatAnimation 3s ease-in-out infinite;
        }
        .animate-bloom {
          animation: bloomAnimation 4s ease-in-out infinite;
        }
        .animate-sparkle {
          animation: sparkleAnimation 2s ease-in-out infinite;
        }
        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }
        
        /* Animation delays */
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }

        /* Mobile-specific animations */
        @media (max-width: 768px) {
          .animate-float {
            animation: floatAnimation 4s ease-in-out infinite;
            animation-duration: 3s;
            transform-origin: center;
          }
          
          .animate-bloom {
            animation: bloomAnimation 4s ease-in-out infinite;
            animation-duration: 3s;
          }

          @keyframes floatAnimation {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(2deg); }
          }

          @keyframes bloomAnimation {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.03) rotate(2deg); }
          }
        }

        /* Reduce animations if user prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *, ::before, ::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div
        className="min-h-screen flex items-center justify-center relative overflow-hidden p-4 md:p-8"
        style={{
          background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor}, ${theme.tertiaryColor})`,
          fontFamily: theme.fonts.details,
        }}
      >
        <audio
          ref={audioRef}
          src="./audio.mp3"
          onEnded={() => setIsPlaying(false)}
        />

        {/* Decorative Elements - Responsive sizes */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <ElaborateFlowerDecoration
            className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 animate-float opacity-70"
            colors={theme}
            scale={1}
            variant={1}
          />
          <ElaborateFlowerDecoration
            className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 animate-float opacity-70 delay-2"
            colors={theme}
            scale={1}
            variant={2}
          />
          <ElaborateFlowerDecoration
            className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 animate-bloom opacity-60 delay-3"
            colors={theme}
            scale={0.8}
            variant={3}
          />
          <ElaborateFlowerDecoration
            className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 animate-bloom opacity-60 delay-4"
            colors={theme}
            scale={0.8}
            variant={1}
          />
        </div>

        <div className="w-full max-w-md mx-auto bg-white relative z-10 text-center rounded-lg shadow-lg overflow-hidden">
          <div className="relative py-6 md:py-8 px-4 md:px-6">
            <h1
              className="text-xl md:text-2xl mb-4 md:mb-6 animate-fade-in delay-1"
              style={{
                color: theme.complementaryColor,
                fontFamily: theme.fonts.heading,
              }}
            >
              Join us to celebrate the engagement of
            </h1>

            <div className="mb-6 md:mb-8 relative">
              <div className="animate-fade-in delay-2">
                <p
                  className="text-4xl md:text-5xl mb-3 md:mb-4 animate-heartbeat"
                  style={{
                    color: theme.primaryColor,
                    fontFamily: theme.fonts.names,
                  }}
                >
                 MuthuLakshmi
                </p>
              </div>
              <div
                className="text-lg md:text-xl my-2 animate-sparkle delay-3"
                style={{ color: theme.complementaryColor }}
              >
                &
              </div>
              <div className="animate-fade-in delay-4">
                <p
                  className="text-4xl md:text-5xl mt-3 md:mt-4 animate-heartbeat"
                  style={{
                    color: theme.primaryColor,
                    fontFamily: theme.fonts.names,
                  }}
                >
                  Vishak Alagappan
                </p>
              </div>
            </div>

            <div className="mb-6 md:mb-8 animate-fade-in delay-3">
              <h2
                className="text-lg md:text-xl mb-3 md:mb-4"
                style={{
                  color: theme.complementaryColor,
                  fontFamily: theme.fonts.heading,
                }}
              >
                Venue
              </h2>
              <address
                className="not-italic space-y-1 md:space-y-2 text-sm md:text-base"
                style={{
                  fontFamily: theme.fonts.details,
                  color: theme.secondaryColor,
                }}
              >
                <p className="font-semibold animate-fade-in delay-1">
                  August 27, 2025
                </p>
                <p className="animate-fade-in delay-2">

                  Vellamadam cooperative bank Mandapam
                </p>
                <p className="animate-fade-in delay-3">
                 
                </p>
                <p className="animate-fade-in delay-4">Nagercoil, Kanyakumari</p>
              </address>
            </div>

            <button
              onClick={toggleAudio}
              className="px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 hover:shadow-lg animate-fade-in delay-4 text-sm md:text-base"
              style={{
                backgroundColor: theme.complementaryColor,
                color: "white",
              }}
            >
              {isPlaying ? "Pause Music ❚❚" : "Play Music ▶"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EngagementInvitation;
