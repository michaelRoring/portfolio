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
      position: "Full stack web developer",
      startDate: "Jul 2022",
      endDate: "present",
      description: `
- Designed and implemented automation workflows enabling key account managers to identify high-potential leads, resulting in a 20% increase in qualified opportunities
- Developed a custom data extraction tool that automated the lead acquisition process, increasing first-touch engagement by 54% and significantly reducing manual prospecting time
- Led the development and launch of "Leaders Hangar," the company's first new product initiative, which opened a new revenue stream 
      `,
    },
    {
      companyName: "PT. Grahaprima Suksesutama",
      position: "Marketing consultant",
      startDate: "Feb 2020",
      endDate: "Dec 2022",
      description: `
- Developed and executed a comprehensive social media campaign strategy that resulted in a 20% increase in website traffic and a 15% increase in engagement
- Built a system to automate the sales channel, resulting in a 20% increase in lead generation and a 15% increase in sales conversion rates
      `,
    },

    {
      companyName: "Clairmont store",
      position: "Founder",
      startDate: "Feb 2017",
      endDate: "Jan 2020",
      description: `
- Orchestrated end-to-end campaign strategy, sales operations, and supply chain management across multiple e-commerce platforms
- Developed and implemented a proprietary sales automation system that elevated the brand to top seller status on Lazada marketplace in 2018
- Cultivated strategic relationships with key e-commerce account managers and suppliers, resulting in consistent 5-10% quarterly revenue growth and preferential placement opportunities
      `,
    },
    {
      companyName: "PT. Noboru Tirta Lestari",
      position: "Head of marketing",
      startDate: "Oct 2014",
      endDate: "Jan 2017",
      description: `
- Established and cultivated strategic partnerships with key account managers across major e-commerce platforms, securing premium placement opportunities and promotional advantages
- Developed comprehensive digital marketing campaign strategies that aligned with market trends and consumer behavior, resulting in improved conversion rates and enhanced brand visibility
      `,
    },
  ];

  return (
    <>
      <div className="mt-12">
        <h1 className="text-xl font-bold mb-2">Work Experience</h1>
        <div className="grid grid-cols-1 gap-3 ">
          {workExperience.map((experience, index) => (
            <div key={index}>
              <Accordion
                className="w-full lg:w-[unset]"
                type="single"
                collapsible
              >
                <AccordionItem className="lg:w-full max-w-full" value="item-1">
                  <AccordionTrigger className="bg-zinc-300 hover:bg-yellow-400">
                    <div className="flex gap-2 text-left">
                      <a>{experience.companyName}</a>
                      <a>-</a>
                      <a className="font-light">{experience.position}</a>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <div className="grid grid-cols-1 gap3">
                      <div className="font-bold">
                        {experience.startDate} - {experience.endDate}
                        <div className="font-normal mt-0.5">
                          {experience.description}
                        </div>
                      </div>
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
