"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Education() {
  const educationList = [
    {
      educatorName: "Hacktiv8",
      title: "Immersive full stack javascript bootcamp",
      grade: "87.6 / 100",
      timeline: "Jan 2022 - Apr 2022",
      certificateLink:
        "https://drive.google.com/file/d/1GzV2Tu3T2mRbfuIHOnbB1ZduhDZOIbnk/view?usp=sharing",
    },
    {
      educatorName: "Bunda Mulia University",
      title: "Information technology",
      grade: "3.34 / 4.00",
      timeline: "Jul 2010 - Jun 2014",
    },
  ];

  const handleCertificateClick = (education: any) => {
    window.open(education.certificateLink, "_blank");
  };

  return (
    <>
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-2">Education</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-1">
          {educationList.map((education, index) => (
            <div key={index}>
              <Accordion
                className="w-full lg:w-[unset] "
                type="single"
                collapsible
              >
                <AccordionItem
                  className="lg:w-[500px] max-w-full "
                  value="item-1"
                >
                  <AccordionTrigger className="bg-zinc-200 hover:bg-blue-400">
                    {education.educatorName}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1">
                      <a className="font-bold">{education.title}</a>
                      <a>Grade: {education.grade}</a>
                      <a>{education.timeline}</a>
                      {education?.certificateLink && (
                        <Button
                          className="bg-blue-400 mt-2"
                          onClick={() => handleCertificateClick(education)}
                        >
                          See certificate
                        </Button>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
