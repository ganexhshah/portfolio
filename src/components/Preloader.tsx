import { useRef, useMemo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ArrowRight, X } from "lucide-react";

// Import Gallery Images (Selection)
import img1 from "@/assets/gallery/1.png";
import img2 from "@/assets/gallery/2.png";
import img3 from "@/assets/gallery/3.png";
import img4 from "@/assets/gallery/4.png";
import img5 from "@/assets/gallery/5.png";
import img6 from "@/assets/gallery/6.png";
import img7 from "@/assets/gallery/7.png";
import img8 from "@/assets/gallery/8.png";

// Import Demo Assets
import ganu1 from "@/assets/gallery/demo/ganu1.jpg";
import ganu2 from "@/assets/gallery/demo/ganu2.jpg";
import ganu3 from "@/assets/gallery/demo/ganu3.jpg";
import ganu4 from "@/assets/gallery/demo/ganu4.jpg";
import demoVideo from "@/assets/gallery/demo/video.mp4";

gsap.registerPlugin(CustomEase);

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const container = useRef(null);
    const textRef = useRef(null);
    const curtainRef = useRef(null);
    const kineticTextRef = useRef(null);
    const mediaRef = useRef(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    // Pre-calculated diverse positions to ensure spread
    const mediaPositions = useMemo(() => [
        { top: '10%', left: '10%', width: '12vw', rotation: -10 },
        { top: '15%', left: '80%', width: '15vw', rotation: 12 },
        { top: '60%', left: '5%', width: '14vw', rotation: 5 },
        { top: '70%', left: '75%', width: '16vw', rotation: -8 },
        { top: '30%', left: '20%', width: '10vw', rotation: -15 },
        { top: '40%', left: '85%', width: '13vw', rotation: 10 },
        { top: '80%', left: '30%', width: '11vw', rotation: -5 },
        { top: '5%', left: '40%', width: '14vw', rotation: 8 },
        { top: '50%', left: '10%', width: '12vw', rotation: -12 },
        { top: '20%', left: '60%', width: '15vw', rotation: 15 },
        { top: '85%', left: '60%', width: '13vw', rotation: -6 },
        { top: '35%', left: '5%', width: '10vw', rotation: 7 },
        { top: '45%', left: '50%', width: '16vw', rotation: -9 },
    ], []);

    const mediaItems = useMemo(() => [
        { type: 'image', src: img1, ...mediaPositions[0] },
        { type: 'video', src: demoVideo, ...mediaPositions[1] },
        { type: 'image', src: ganu1, ...mediaPositions[2] },
        { type: 'image', src: img2, ...mediaPositions[3] },
        { type: 'image', src: ganu2, ...mediaPositions[4] },
        { type: 'image', src: img3, ...mediaPositions[5] },
        { type: 'image', src: img4, ...mediaPositions[6] },
        { type: 'image', src: ganu3, ...mediaPositions[7] },
        { type: 'image', src: img5, ...mediaPositions[8] },
        { type: 'image', src: ganu4, ...mediaPositions[9] },
        { type: 'image', src: img6, ...mediaPositions[10] },
        { type: 'image', src: img7, ...mediaPositions[11] },
        { type: 'image', src: img8, ...mediaPositions[12] },
    ], [mediaPositions]);

    const handleSkip = () => {
        if (tlRef.current) {
            tlRef.current.progress(1); // Jump to end of timeline immediately
        }
        onComplete();
    };

    useGSAP(() => {
        // Register custom eases
        CustomEase.create("customEase", "0.86, 0, 0.07, 1");

        const tl = gsap.timeline({
            onComplete: () => {
                onComplete();
            }
        });
        tlRef.current = tl;

        // Elements
        const letters = textRef.current?.querySelectorAll(".char");
        const kineticLines = kineticTextRef.current?.querySelectorAll(".type-line");
        const oddLines = kineticTextRef.current?.querySelectorAll(".type-line.odd");
        const evenLines = kineticTextRef.current?.querySelectorAll(".type-line.even");
        const floatingMedia = mediaRef.current?.querySelectorAll(".float-media");
        const skipBtn = container.current?.querySelector(".skip-btn");

        // 1. Initial State
        gsap.set(letters, {
            opacity: 0,
            filter: "blur(15px)",
            y: 20
        });

        gsap.set(kineticLines, {
            opacity: 0,
            x: "0%"
        });

        gsap.set(floatingMedia, {
            opacity: 0,
            scale: 0.5,
        });

        gsap.set(skipBtn, { opacity: 0, y: 20 });

        // 2. Kinetic Text Reveal (Main Name)
        tl.to(letters, {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "customEase"
        })
            .to(skipBtn, { opacity: 1, y: 0, duration: 0.5 }, "-=1") // Show skip button early

            // 3. Kinetic Background Effect & Media Reveal
            .add(() => {
                // Start Kinetic Lines Animation
                const kineticTl = gsap.timeline();

                // Reveal lines
                kineticTl.to(kineticLines, {
                    opacity: 0.1,
                    duration: 1,
                    stagger: 0.05,
                    ease: "customEase"
                });

                // Move lines (Kinetic Flow)
                kineticTl.to(oddLines, {
                    x: "10%",
                    duration: 4,
                    ease: "power2.inOut"
                }, 0);

                kineticTl.to(evenLines, {
                    x: "-10%",
                    duration: 4,
                    ease: "power2.inOut"
                }, 0);

                // Animate Media Items (Explosion/Cloud Effect)
                kineticTl.to(floatingMedia, {
                    opacity: 0.6,
                    scale: 1,
                    duration: 2,
                    stagger: {
                        amount: 1.5,
                        from: "random"
                    },
                    ease: "power2.out"
                }, 0);

                // Float media continuously
                floatingMedia.forEach((media) => {
                    gsap.to(media, {
                        y: `+=${gsap.utils.random(-30, 30)}`,
                        x: `+=${gsap.utils.random(-30, 30)}`,
                        rotation: `+=${gsap.utils.random(-10, 10)}`,
                        duration: gsap.utils.random(2, 4),
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: -1,
                        delay: gsap.utils.random(0, 1)
                    });
                });

            }, "-=0.8") // Start earlier

            // 4. Hold to view
            .to({}, { duration: 3.5 })

            // 5. Exit Sequence
            .to(skipBtn, { opacity: 0 }, 0) // Hide skip btn first
            .to([letters, kineticLines, floatingMedia], {
                y: -100,
                opacity: 0,
                filter: "blur(20px)",
                duration: 0.8,
                stagger: 0.02,
                ease: "power3.in"
            })
            .to(curtainRef.current, {
                yPercent: -100,
                duration: 1.2,
                ease: "customEase"
            }, "-=0.2");

    }, { scope: container });

    return (
        <div ref={container} className="fixed inset-0 z-[9999] flex flex-col justify-end">
            <div
                ref={curtainRef}
                className="absolute inset-0 bg-gray-950 dark:bg-gray-950 flex items-center justify-center w-full h-full overflow-hidden"
            >
                {/* Site Theme Colored Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-pink-900/40 opacity-50 animate-pulse-slow"></div>

                {/* Kinetic Background Text Layer */}
                <div ref={kineticTextRef} className="absolute inset-0 flex flex-col items-center justify-center opacity-30 select-none pointer-events-none transform rotate-[-5deg] scale-150 z-0">
                    {[...Array(7)].map((_, i) => (
                        <div key={i} className={`type-line ${i % 2 === 0 ? 'odd' : 'even'} text-[12vw] font-black text-transparent stroke-white/20 whitespace-nowrap`} style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                            GANESH GANESH GANESH GANESH
                        </div>
                    ))}
                </div>

                {/* Floating Media Cloud */}
                <div ref={mediaRef} className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    {mediaItems.map((item, i) => (
                        <div
                            key={i}
                            className="float-media absolute transform-gpu mix-blend-screen filter saturate-150"
                            style={{
                                top: item.top,
                                left: item.left,
                                width: item.width,
                                transform: `rotate(${item.rotation}deg)`,
                                zIndex: Math.floor(Math.random() * 10)
                            }}
                        >
                            {item.type === 'video' ? (
                                <video
                                    src={item.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-auto rounded-lg opacity-80 object-cover shadow-2xl border border-white/10"
                                />
                            ) : (
                                <img
                                    src={item.src}
                                    alt=""
                                    className="w-full h-auto rounded-lg opacity-80 object-cover shadow-2xl border border-white/10"
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Main Reveal Text */}
                <div ref={textRef} className="relative z-20 flex gap-2 sm:gap-4 mix-blend-normal pointer-events-none">
                    {["G", "A", "N", "E", "S", "H"].map((char, index) => (
                        <span
                            key={index}
                            className="char text-7xl sm:text-9xl md:text-[12rem] font-black text-white inline-block font-serif tracking-tighter drop-shadow-2xl"
                        >
                            {char}
                        </span>
                    ))}
                </div>

                {/* SKIP BUTTON */}
                <button
                    onClick={handleSkip}
                    className="skip-btn absolute bottom-8 right-8 z-[100] flex items-center gap-2 px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 text-white font-bold tracking-widest text-sm uppercase transition-all duration-300 hover:scale-105 group cursor-pointer pointer-events-auto"
                >
                    Skip Intro <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default Preloader;
