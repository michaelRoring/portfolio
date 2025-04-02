import { VelocityScroll } from "./magicui/scroll-based-velocity";
import { Badge } from "./ui/badge";

export default function Skills() {
  const skillList = [
    "react",
    "rust",
    "javascript",
    "typescript",
    "express",
    "webflow",
    "supabase",
    "nodejs",
    "langchain",
    "tailwindcss",
    "solidity",
  ];
  return (
    <>
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-2">Skills</h1>
        <div className="flex flex-wrap gap-2">
          {skillList.map((skill, index) => (
            <div className="" key={index}>
              <Badge className="bg-slate-700 text-white">{skill}</Badge>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
