"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "./ui/badge";
import ImageCard from "@/components/ui/image-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { GithubIcon } from "./ui/github";

export default function Projects() {
  const projectList = [
    {
      projectName: "Voting Dapp - Solana",
      role: "Full stack blockchain developer",
      stacks: ["Rust", "Anchor", "Solana", "Next.js"],
      description:
        "I built a voting dapp on Solana using Anchor and Next.js. I also tried to use with the Blink SDK to create a unique user interface for user to vote on the candidates.",
      github: "https://github.com/michaelRoring/voting-dapp-solana",
    },
    {
      projectName: "Leaders Hangar",
      role: "Project lead, full stack web developer",
      stacks: ["Next.js", "Typescript", "Supabase", "Tailwind", "Shadcn UI"],
      description:
        "Led a three-person team in the full-stack development of Leaders Hangar, a web application designed to business owners and leaders to upscale their skill in marketing technology. Utilized Next.js for the frontend and Supabase for the backend database and user authentication, overseeing the project from conception to deployment.",
      link: "https://leaders-hangar.vercel.app",
      image: "https://i.postimg.cc/9XyRBSgT/leaders-hangar.png",
    },
    {
      projectName: "Singapore Workers Party Website",
      role: "Project manager",
      stacks: ["Webflow", "Webflow CMS", "Figma"],
      description:
        "As Project Manager, I oversaw the website development for the Workers' Party of Singapore. I guided a team of three through a streamlined creation process using Webflow, ensuring efficient collaboration and timely project completion.",
      link: "https://www.wp.sg/",
      image: "https://i.postimg.cc/6508kZXp/twp.png",
    },
    {
      projectName: "Tukarmainan",
      role: "Frontend & mobile developer",
      stacks: [
        "React Native",
        "React",
        "Tailwind",
        "PostgreSQL",
        "Docker",
        "Redis",
        "JWT",
        "Sequelize",
        "Expo",
        "Redux",
        "TalkJS",
      ],
      description:
        "Developed the frontend for Tukarmainan, a mobile/web application designed to help parents exchange children's toys, addressing the common issue of toy clutter. My concept for this project was selected for development during my course/program. Key responsibilities included building the user interface and integrating features like realtime chat using TalkJs and the transactions.",
      github: "https://github.com/TukarMainan",
      image:
        "https://i.postimg.cc/8cC8YfrT/Screenshot-2024-12-08-at-01-33-29.png",
    },
  ];

  const router = useRouter();
  const handleLinkClick = (link: string | undefined) => {
    if (!link) return;
    router.push(link);
  };

  return (
    <>
      <div className="mt-12">
        <h1 className="text-xl font-bold mb-2">My projects</h1>
        <div className="grid grid-cols-1 gap-3 ">
          {projectList.map((project, index) => (
            <Card key={index} className="bg-zinc-300 hover:bg-orange-300">
              <CardHeader>
                <CardTitle>{project.projectName}</CardTitle>
                <Label>{project.role}</Label>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.stacks.map((stack, index) => (
                    <Badge
                      className="bg-zinc-100 hover:bg-zinc-200"
                      key={index}
                    >
                      {stack}
                    </Badge>
                  ))}
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button
                  variant="neutral"
                  className={project.link ? "" : "hidden"}
                  onClick={() => handleLinkClick(project.link)}
                >
                  View project
                </Button>
                <Button
                  variant="neutral"
                  className={project.github ? "bg-zinc-400" : "hidden"}
                  onClick={() => handleLinkClick(project.github)}
                >
                  <GithubIcon />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
