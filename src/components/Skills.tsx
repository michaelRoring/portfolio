import { VelocityScroll } from "./magicui/scroll-based-velocity";
import { Badge } from "./ui/badge";

export default function Skills() {
  const skillList = [
    "React",
    "Rust",
    "Javascript",
    "Typescript",
    "Express",
    "Webflow",
    "Supabase",
    "Nodejs",
    "Langchain",
    "Tailwind",
    "Solidity",
    "Foundry",
    "Substrate",
  ];
  return (
    <>
      <div className="mt-12">
        <h1 className="text-xl font-bold mb-2">Skills</h1>
        <div className="flex flex-wrap gap-2">
          {skillList.map((skill, index) => (
            <div className="" key={index}>
              <Badge className="bg-zinc-100 cursor-pointer hover:bg-zinc-300 hover:ease">
                {skill}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
