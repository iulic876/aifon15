import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Videocarousel from "./Videocarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      delay: 0.5,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      delay: 0.5,
    });
  });
  return (
    <section
      className="bg-zinc w-screen overflow-hidden common-padding"
      id="highlight"
    >
      <div className="screen-max-width">
        <div className="flex justify-between w-full mb-12 md:flex items-end">
          <h1 id="title" className="section-heading">
            Get the highlight
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p id="" className="link">
              Watch the film
              <img
                src="/assets/images/watch.svg"
                alt="watch"
                className="ml-2"
              />
            </p>

            <p id="" className="link">
              See the revolution
              <img
                src="/assets/images/right.svg"
                alt="right"
                className="ml-2"
              />
            </p>
          </div>
        </div>
        <Videocarousel />
      </div>
    </section>
  );
};

export default Highlights;
