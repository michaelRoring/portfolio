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
import SvgComponent from "./atom/NotiolyIcon";
// import {}

export default function Contact() {
  return (
    <>
      <div className="mt-24">
        <Card className="bg-yellow-300 cursor-pointer hover:bg-yellow-400">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <Label>Get in touch</Label>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <div className="flex  gap-3">
                <div>
                  Want to chat? Just shoot me{" "}
                  <a
                    href="https://x.com/0xmchaelr"
                    target="_blank"
                    className="font-bold hover:underline"
                  >
                    a dm with a direct question on twitter
                  </a>{" "}
                  <a>
                    and I'll respond whenever I can. I will ignore all
                    soliciting.
                  </a>
                </div>
              </div>
            </CardDescription>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        {/* <SvgComponent className="right-0 bg-blue-500" /> */}
      </div>
    </>
  );
}
