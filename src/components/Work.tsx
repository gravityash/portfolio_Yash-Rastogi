import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      let translateX: number = 0;

      function setTranslateX() {
        const box = document.getElementsByClassName("work-box");
        if (box.length === 0) return;
        const rectLeft = document
          .querySelector(".work-container")!
          .getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        let padding: number =
          parseInt(window.getComputedStyle(box[0]).padding) / 2;
        translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      setTranslateX();

      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${translateX}`, // Dynamically calculate scroll width
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", {
        x: () => -translateX,
        ease: "none",
      });

      // Recalculate on resize
      window.addEventListener("resize", setTranslateX);

      return () => {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
        window.removeEventListener("resize", setTranslateX);
      };
    });

    return () => mm.revert();
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              name: "SAMADHAAN",
              category: "September 2025 - November 2025",
              tools: "Developed a grievance management system with database integration and AI chatbot assistance.",
              link: "http://samadhaan.great-site.net",
              image: "/images/samadhaan.jpg",
            },
            {
              name: "Churn Prediction WebApp",
              category: "August 2025 - September 2025",
              tools: "Built a machine learning web application to predict customer churn.",
              link: "https://churn-prediction-2yasuk7mnzhzbcxuyfurcr.streamlit.app/",
              image: "/images/churn_uploaded.png",
            },
            {
              name: "ZERO ERROR",
              category: "March 2026 - March 2026",
              tools: "Secure online MCQ testing platform with timer-based evaluation, automated scoring, and anti-cheating mechanisms",
              link: "http://zeroerror.great-site.net/",
              image: "/images/zeroerror_uploaded.png",
            },
            {
              name: "Tails of Hope",
              category: "Backend Development",
              tools: "Database Management",
              link: "#",
              image: "/images/tails.png",
            },
            {
              name: "AI ChatGPT App",
              category: "AI Chatbot",
              tools: "AI Integration",
              link: "#",
              image: "/images/professorgpt.png",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image || "/images/project_placeholder.png"} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
