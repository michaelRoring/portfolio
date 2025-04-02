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
      name: "Blockchain Introductory Bootcamp",
      issuer: "Mandala Blokchain Academy",
      issueDate: "Mar 2025",
      description:
        "acquired the google project management certification, gaining profound insights into strategic planning and execution methodologies. discovered that scrum is basically like herding cats, but with more whiteboards and fewer scratches",
      link: "https://drive.google.com/file/d/1lDQSSSe4eihjuDjbuEz1rJbaLAd8udO_/view?usp=sharing",
    },
    {
      name: "Project Management Specialization",
      issuer: "Google / Coursera",
      issueDate: "Jun 2024",
      description:
        "acquired the google project management certification, gaining profound insights into strategic planning and execution methodologies. discovered that scrum is basically like herding cats, but with more whiteboards and fewer scratches",
      link: "https://coursera.org/share/75438d1aef99ebeeec5a8326a71f051c",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },

    {
      name: "Make Intermediate",
      issuer: "Make Academy",
      issueDate: "Jan 2024",
      description:
        "completed the make academy intermediate certificate, mastering no-code automation techniques that transform complex workflows into streamlined digital symphonies. learned to connect apps faster than a tech-savvy octopus juggling communication platforms",
      link: "https://www.credly.com/badges/bfe1c647-a5e8-4f7a-b1dd-2e0ab3ffb1b4/public_url",
    },
    {
      name: "Solana Developer Program",
      issuer: "Solana Academy",
      issueDate: "Aug 2023",
      description:
        "a mini bootcamp for me to learn blockchain technology. met a lot of people across the nation as cohorts, and it was a great experience. still haven't mastered the basics of blockchain, but i'm still learning..",
      link: "https://drive.google.com/file/d/1gA0oFiPv1Ec9spZzMdz0Vn5om-huiEZz/view",
    },
    {
      name: "Fullstack Javascript Immersive Bootcamp",
      issuer: "Hacktiv8",
      issueDate: "May 2023",
      description:
        "conquered the full stack javascript immersive bootcamp, transforming from a old brain programmer to a javascript juggler who can navigate both frontend and backend landscapes with newfound confidence. survived the learning curve that's steeper than a roller coaster designed by caffeine-fueled programmers - and made some awesome friends along the way",
      link: "https://i.postimg.cc/DwnzMCNN/Hacktiv8-Certificate.png",
    },

    {
      name: "EF set English certificate",
      issuer: "English First",
      issueDate: "Jun 2023",
      description:
        "earned an ef set english certificate with a solid c1 advanced level score of 63/100, demonstrating strong linguistic versatility crucial for effective communication in Singapore's multicultural professional landscape. proved that my english skills are smoother than a well-oiled diplomatic translator navigating a multilingual cocktail party",
      link: "https://www.efset.org/cert/66LP9c",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <>
      <div className="mt-12">
        <h1 className="text-xl font-bold mb-2">Certifications</h1>
        <div className="flex flex-wrap gap-3">
          {certificationList.map((certification, index) => (
            <div className="" key={index}>
              <Card
                key={index}
                className="bg-zinc-300 hover:bg-lime-400 cursor-pointer"
              >
                <CardHeader>
                  <CardTitle>{certification.name}</CardTitle>
                  <Label>{certification.issuer}</Label>
                  <Label className="font-light">
                    {certification.issueDate}
                  </Label>
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
