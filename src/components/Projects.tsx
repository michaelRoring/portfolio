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

export default function Projects() {
  const projectList = [
    {
      projectName: "Leaders Hangar",
      role: "Project lead, full stack web developer",
      stacks: ["Next.js", "Typescript", "Supabase", "Tailwind", "Shadcn UI"],
      description:
        "led the full-stack development of leader's hangar as project lead, orchestrating a three-person team using next.js, supabase, and supabase auth to create a robust web application. i piloted this project like a software engineer pilots a drone - with precision, a touch of swagger, and hopefully fewer unexpected crashes!",
      link: "https://leaders-hangar.vercel.app",
      image: "",
    },
    {
      projectName: "Singapore Workers Party Website",
      role: "Project manager",
      stacks: ["Webflow", "Webflow CMS", "Figma"],
      description:
        "spearheaded the web development of one of singapore's biggest party website as the project lead, guiding a dynamic team of 3 through a streamlined webflow-powered creation process. i managed to wrangle web design faster than a politician manages talking points - and with significantly less spin",
      link: "https://www.wp.sg/",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      projectName: "tukarmainan",
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
        "my idea has been chosen by the instructor to be developed. comes from a true anxiety of a father like me, the toys that my son play with are too many. this application is designed to solve a problem where we can exchange the toys with another person's. the most absurd thing i did was to search where to give talkjs's style. turns out the setting is in their web app, not the library itself -_-",
      link: "https://github.com/TukarMainan",
      image: "",
    },
  ];

  return (
    <>
      <div className="mt-6">
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
              <CardFooter>
                <Button variant="neutral">View</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
