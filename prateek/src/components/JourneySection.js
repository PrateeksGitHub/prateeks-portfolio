import React from "react";
import JourneyPoint from "./JourneyPoint";
import clsxm from "@/utils/clsxm";

function JourneySection({ className }) {
  return (
    <section id="journey" className={clsxm("flex flex-col", className)}>
      <h1 className="flex font-bold text-4xl mb-16">My Journey</h1>
      <JourneyPoint
        duration="August 2021 - present"
        location="Bengaluru, India"
        organisation="Skit.ai"
        title="Software Developer"
        details={
          <ul className="list-disc ml-4 md:ml-8 leading-relaxed">
            <li>Maintained 2 Django REST Framework based servers.</li>
            <ul className="list-disc ml-4 md:ml-8">
              <li>Implemented several APIs for these microservices.</li>
              <li>Various REST and SOAP 3rd party API Integrations.</li>
            </ul>
            <li>
              Owned a number of Analytics pipelines E2E{" "}
              <ul className="list-disc ml-4 md:ml-8">
                <li>voice bot performance metrics for billing clients </li>
                <li> processing data of &gt; 1 million weekly calls.</li>
              </ul>
            </li>
            <li>
              Conducted onboarding + Tech sessions for over 200 new Employees.
            </li>
            <li>
              Trained multiple Spoken Language Understanding Model services.
            </li>
            <li>
              Contributed to CI-CDs involving gitlab-ci, Docker, Kubernetes and
              AWS
            </li>
          </ul>
        }
      />
      <JourneyPoint
        duration="February 2021 - May 2021"
        organisation="Saahas Waste Management"
        title="Business Analyst Intern"
        location="Bengaluru, India"
        details={
          <ul className="list-disc ml-4 md:ml-8 leading-relaxed">
            <li>
              Conducted user interviews to get insights on their purchasing
              experience
            </li>
            <li>
              Assisted with the redesign of the ecommerce website for B2C
              upcycled and recycled products
            </li>
            <li>
              Conducted business assessment using frameworks like Business Model
              Canvas and SWOT
            </li>
          </ul>
        }
      />
    </section>
  );
}

export default JourneySection;
