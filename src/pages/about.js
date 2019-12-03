import React from "react";

import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function AboutPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="border-l-4 border-gray-900 font-serif leading-loose pl-4 text-justify">
            Programar es algo que puedes hacer siempre con la mejor compañia
          </blockquote>

          <cite className="font-bold mt-4 text-right text-xs uppercase block">
            – Luis Castillo
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={dogIllustration} />
        </figure>
      </section>
    </>
  );
}

export default AboutPage;
