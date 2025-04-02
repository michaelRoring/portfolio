import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WorkExperience() {
  const workExperience = [
    {
      companyName: "Devhaus pte. ltd.",
      position: "Mid level full stack web developer",
      startDate: "Jul 2023",
      endDate: "present",
      description: `- led and kickstarted "leader's hangar", the first new product in the company\n- built automation workflows for key account managers to spot potential leads and opportunities
      `,
    },
    {
      companyName: "PT. Grahaprima Suksesutama",
      position: "Marketing consultant",
      startDate: "Feb 2020",
      endDate: "Dec 2022",
      description: `led, planned and taking initiatives to drive more traffic to the company's website's social media channels`,
    },
    {
      companyName: "Clairmont store",
      position: "Owner/founder - Self-employed",
      startDate: "Feb 2017",
      endDate: "Jan 2020",
      description: `- got one of the top seller on Lazada marketplace\n- reached almost 500 million rupiah revenue in single day at 12.12.18
      `,
    },
    {
      companyName: "PT. Noboru Tirta Lestari",
      position: "Head of marketing",
      startDate: "Oct 2014",
      endDate: "Jan 2017",
      description: `- built relationships with key account manager of e-commerce companies\n- planned the strategies for the digital marketing campaigns`,
    },
  ];

  return (
    <>
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-2">Work Experience</h1>
        <div className="grid grid-cols-1 gap-3 ">
          {workExperience.map((experience, index) => (
            <div key={index}>
              <Accordion
                className="w-full lg:w-[unset"
                type="single"
                collapsible
              >
                <AccordionItem
                  className="lg:w-[500px] max-w-full"
                  value="item-1"
                >
                  <AccordionTrigger className="bg-zinc-300 hover:bg-zinc-400">
                    <div className="flex gap-3">
                      <a>{experience.companyName}</a>
                      <a>-</a>
                      <a className="font-light">{experience.position}</a>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className=" font-bold">
                    {experience.startDate} - {experience.endDate}
                  </AccordionContent>
                  <AccordionContent>{experience.description}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
