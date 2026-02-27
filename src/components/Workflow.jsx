import { CheckCircle2 } from "lucide-react";
import code from "../assets/code.jpg";
import { checklistItems } from "../constants";

function Workflow() {
  return (
    <section className="mt-20" aria-labelledby="workflow-heading">
      <h2
        id="workflow-heading"
        className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={code} alt="Code editor showing development workflow" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div
                aria-hidden="true"
                className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h3 className="mt-1 mb-2 text-xl">{item.title} </h3>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;
