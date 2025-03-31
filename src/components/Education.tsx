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
      content:
        "I was a part of the first ever in-person cohort of buildspace called buildspace sf1. I helped build the first ever NFT marketplace on the blockchain, and was the lead developer on the first ever NFT marketplace on the blockchain. I also helped build the first ever NFT marketplace on the blockchain.",
    },
    {
      educatorName: "Hacktiv8",
      content:
        "I was a part of the first ever in-person cohort of buildspace called buildspace sf1. I helped build the first ever NFT marketplace on the blockchain, and was the lead developer on the first ever NFT marketplace on the blockchain. I also helped build the first ever NFT marketplace on the blockchain.",
    },
  ];

  return (
    <>
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-2">Education</h1>
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
          {educationList.map((education, index) => (
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
                  <AccordionTrigger>{education.educatorName}</AccordionTrigger>
                  <AccordionContent>{education.content}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
