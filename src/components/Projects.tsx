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

export default function Projects() {
  const projectList = [
    {
      projectName: "Project 1",
      description: "This is a description of project 1",
      link: "https://www.google.com",
      tags: ["react", "typescript", "supabase"],
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      projectName: "Project 2",
      description: "This is a description of project 2",
      link: "https://www.google.com",
      tags: ["react", "typescript", "supabase"],
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <>
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-2">My projects</h1>
        <div className="grid grid-cols-1 gap-3 ">
          {projectList.map((project, index) => (
            <Card key={index} className="bg-zinc-300">
              <CardHeader>
                <CardTitle>{project.projectName}</CardTitle>
                <Label>{project.tags.join(", ")}</Label>
              </CardHeader>
              <CardContent>
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
