import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  return (
    <section
      className="flex flex-col items-center mt-6 lg:mt-20"
      aria-labelledby="hero-heading">
      <h1
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
        id="hero-heading">
        VirtualR build tools
        <span className="bg-clip-text bg-linear-to-r from-orange-400 to-red-800 text-transparent">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <button className="cursor-pointer bg-linear-to-r from-orange-400 to-red-800 rounded-md py-3 px-4 mx-3">
          Start for free
        </button>
        <a
          href="#"
          className=" rounded-md py-3 px-4 mx-3 border border-orange-300"
          aria-label="Read VirtualR documentation">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source src={video1} type="video/mp4" />
        </video>
        <video
          aria-hidden="true"
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default HeroSection;
