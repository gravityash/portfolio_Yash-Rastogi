import gsap from "gsap";
import type { SplitText as SplitTextType } from "gsap/SplitText";

export function initialFX() {
  document.body.style.overflowY = "auto";

  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  // Always fade in navbar and icons
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", delay: 0.1 }
  );

  // Fallback landing animations (no SplitText)
  gsap.fromTo(
    [".landing-info h3", ".landing-intro h2", ".landing-intro h1"],
    { opacity: 0, y: 40, filter: "blur(5px)" },
    { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.inOut", stagger: 0.08, delay: 0.3 }
  );
  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    { opacity: 1, duration: 1.2, ease: "power1.inOut", y: 0, delay: 0.8 }
  );
  gsap.fromTo(
    ".landing-h2-info",
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 1.2, ease: "power3.inOut", delay: 0.4 }
  );

  // Try to use SplitText for enhanced animations
  import("gsap/SplitText")
    .then(({ SplitText }) => {
      const TextProps = { type: "chars,lines" as const, linesClass: "split-h2" };
      try {
        const landingText3 = new SplitText(".landing-h2-info-1", TextProps);
        const landingText4 = new SplitText(".landing-h2-1", TextProps);
        const landingText5 = new SplitText(".landing-h2-2", TextProps);
        const landingText2 = new SplitText(".landing-h2-info", TextProps);
        LoopText(landingText2, landingText3);
        LoopText(landingText4, landingText5);
      } catch (e) {
        console.warn("SplitText animation failed", e);
      }
    })
    .catch(() => {
      // SplitText not available - CSS fallback handles the loop animation
      setupCSSLoopAnimation();
    });
}

function setupCSSLoopAnimation() {
  // Simple CSS-based loop: alternate between Designer/Developer every 4s
  const el1 = document.querySelector(".landing-h2-info") as HTMLElement;
  const el2 = document.querySelector(".landing-h2-info-1") as HTMLElement;
  if (!el1 || !el2) return;
  let show1 = true;
  setInterval(() => {
    show1 = !show1;
    gsap.to(el1, { opacity: show1 ? 1 : 0, y: show1 ? 0 : -40, duration: 0.8, ease: "power2.inOut" });
    gsap.to(el2, { opacity: show1 ? 0 : 1, y: show1 ? 40 : 0, duration: 0.8, ease: "power2.inOut" });
  }, 4000);
}

function LoopText(Text1: SplitTextType, Text2: SplitTextType) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    Text2.chars,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      Text1.chars,
      { y: 80 },
      {
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      Text1.chars,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      Text2.chars,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}
