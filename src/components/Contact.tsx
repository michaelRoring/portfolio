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
import { LinkedinIcon } from "lucide-react";

export default function Contact() {
  return (
    <>
      <div className="mt-6">
        {/* <h1 className="text-xl font-bold mb-2">Contact</h1> */}
        <Card className="bg-slate-50">
          <CardHeader>
            <CardTitle>Get in touch</CardTitle>
            <Label>Wadididaw</Label>
          </CardHeader>
          <CardContent>
            {/* <CardDescription>{certification.description}</CardDescription> */}
            <CardDescription>
              Want to chat? Just shoot me a dm with a direct question on twitter
              and I'll respond whenever I can. I will ignore all soliciting.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="neutral">
              <LinkedinIcon />
              Linkedin
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
