import { features } from "../constants";

function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="relative mt-20 border-b border-neutral-800 min-h-200">
      <div className="text-center">
        <span className=" bg-neutral-900 text-orange-500 rounded-full h-6 text-3xl font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2
          id="features-heading"
          className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build
          <span className="bg-linear-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h2>
      </div>
      {/* REVISAR ALINHAMENTO */}
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div
                aria-hidden="true"
                className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="min-w-0">
                <h3 className="p-2 mt-1 mb-6 text-xl wrap-break">
                  {feature.text}
                </h3>
                <p className=" lg:text-md text-xl p-2 mb-20 text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
