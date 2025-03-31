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

export default function Certification() {
  const certificationList = [
    {
      name: "Certification 1",
      description: "This is a description of certification 1",
      link: "https://www.google.com",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Certification 2",
      description: "This is a description of certification 2",
      link: "https://www.google.com",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <>
      <div className="mt-6">
        <h1 className="text-xl font-bold mb-2">Certifications</h1>
        <div className="flex flex-wrap gap-2">
          {certificationList.map((certification, index) => (
            <div className="" key={index}>
              <Card key={index} className="bg-yellow-200">
                <CardHeader>
                  <CardTitle>{certification.name}</CardTitle>
                  <Label>{certification.description}</Label>
                </CardHeader>
                <CardContent>
                  <CardDescription>{certification.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="neutral">View</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
