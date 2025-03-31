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
      position: "Lead",
      startDate: "2022",
      endDate: "Present",
      description:
        'led and kickstarted "leader\'s hangar", the first new product in the company - built automation workflows for key account managers to spot potential leads and opportunities',
    },
    {
      companyName: "Grahaprima Suksesutama",
      position: "Lead",
      startDate: "2021",
      endDate: "2022",
      description: `hello\nmalaya`,
    },
    {
      companyName: "Clairmont store",
      position: "Lead",
      startDate: "2020",
      endDate: "2021",
      description:
        'led and kickstarted "leader\'s hangar", the first new product in the company - built automation workflows for key account managers to spot potential leads and opportunities',
    },
    {
      companyName: "PT. Noboru Tirta Lestari",
      position: "Lead",
      startDate: "2019",
      endDate: "2020",
      description:
        'led and kickstarted "leader\'s hangar", the first new product in the company - built automation workflows for key account managers to spot potential leads and opportunities',
    },
  ];

  return (
    <>
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-2">Work Experience</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {workExperience.map((experience, index) => (
            <div key={index}>
              <Accordion
                className="w-full lg:w-[unset]"
                type="single"
                collapsible
              >
                <AccordionItem
                  className="lg:w-[500px] max-w-full"
                  value="item-1"
                >
                  <AccordionTrigger>{experience.companyName}</AccordionTrigger>
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
