import { testimonials } from "../constants";

function Testemonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mt-20 tracking-wide">
      <h2
        id="testimonials-heading"
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People Are Saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ">
            <div className="flex flex-col h-full bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
              <backquote className="flex-1 italic">
                {testimonial.text}
              </backquote>
              <div className="flex mt-8 items-start">
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.user}`}
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                />
                <div>
                  <p>{testimonial.user}</p>
                  <p className=" text-sm font-normal italic text-neutral-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testemonials;
