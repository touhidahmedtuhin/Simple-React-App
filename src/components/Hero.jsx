import Card from "./Card";

function Hero() {
  return (
    <>
      <div>
        <h1 className="text-5xl text-center mt-8 font-edu">
          What is <span className="text-[#0b997f]">Brand ?</span>
        </h1>
        <p className="max-w-150 mx-auto mt-4 font-edu leading-relaxed text-justify">
          Brand is a forward‑thinking{" "}
          <span className="text-orange-400">software company</span> dedicated to
          building reliable, scalable, and user‑friendly digital solutions. We
          empower businesses with innovative technology that drives growth and
          efficiency
        </p>
      </div>
      <div className="flex gap-4 justify-center max-w-150 mx-auto">
        <Card
          title="Features"
          info="We provide the best software for your company"
        />
        <Card title="Recent project" info="Recently we work for a reputed  Bank" />
        <Card
          title="Customer Service"
          info="We have over 100+ customer's love"
        />
      </div>
    </>
  );
}

export default Hero;
