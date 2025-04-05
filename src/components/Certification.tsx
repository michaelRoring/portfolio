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
        "Completed the Google Project Management Certificate program, developing skills in project initiation, planning, execution, risk management, and stakeholder communication. Gained proficiency in traditional and Agile (including Scrum) project management methodologies.",
      link: "https://coursera.org/share/75438d1aef99ebeeec5a8326a71f051c",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },

    {
      name: "Make Intermediate",
      issuer: "Make Academy",
      issueDate: "Jan 2024",
      description:
        "Successfully completed the Make Intermediate program through Make Academy. Acquired advanced capabilities in leveraging Make's no-code platform to optimize business processes, automate repetitive tasks, and create sophisticated integrations between web applications.",
      link: "https://www.credly.com/badges/bfe1c647-a5e8-4f7a-b1dd-2e0ab3ffb1b4/public_url",
    },
    {
      name: "Solana Developer Program",
      issuer: "Solana Academy",
      issueDate: "Aug 2023",
      description:
        "Completed an introductory program focused on Solana blockchain development. Gained foundational knowledge of Solana's architecture, core concepts (like Proof-of-History), and the basics of building on the Solana network.",
      link: "https://drive.google.com/file/d/1gA0oFiPv1Ec9spZzMdz0Vn5om-huiEZz/view",
    },
    {
      name: "Fullstack Javascript Immersive Bootcamp",
      issuer: "Hacktiv8",
      issueDate: "May 2023",
      description:
        "Successfully completed this rigorous immersive program, gaining proficiency across the full JavaScript stack for modern web development. Acquired hands-on experience in building and deploying applications using contemporary frontend and backend frameworks and tools.",
      link: "https://i.postimg.cc/DwnzMCNN/Hacktiv8-Certificate.png",
    },

    {
      name: "EF set English certificate",
      issuer: "English First",
      issueDate: "Jun 2023",
      description:
        "Achieved a C1 Advanced level (Score: 63/100) on the EF SET, demonstrating high proficiency in English suitable for professional and academic environments.",
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
                className="bg-zinc-200 hover:bg-lime-400 cursor-pointer"
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
