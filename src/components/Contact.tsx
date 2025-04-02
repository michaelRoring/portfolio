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
        <Card className="bg-yellow-300 cursor-pointer hover:bg-yellow-400">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <Label>Get in touch</Label>
          </CardHeader>
          <CardContent>
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
