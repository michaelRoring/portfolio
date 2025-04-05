"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "./ui/button";
import { GithubIcon } from "./ui/github";
import { LinkedinIcon } from "./ui/linkedin";
import { TwitterIcon } from "./ui/twitter";
import { MessageSquareMoreIcon } from "./ui/message-square-more";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { DiscordIcon } from "./ui/discord";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export default function FloatingBanner() {
  const router = useRouter();
  const { toast } = useToast();
  const [dynamicStyle, setDynamicStyle] = useState<React.CSSProperties>({
    left: "50%",
    transform: "translateX(-70%)",
  });

  const [data, setData] = useState({
    email: "",
    message: "",
  });

  const handleClick = (address: string) => {
    router.push(address);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", data);

    setData({
      email: "",
      message: "",
    });

    const response = await fetch(
      "https://hook.us1.make.com/463guwh9vqezrv8odgt356kll7fsn6io",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          message: data.message,
        }),
      }
    );

    if (response.ok) {
      console.log("Message sent successfully");

      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
        action: <ToastAction altText="Close notification">Close</ToastAction>,
      });
    }
  };

  useEffect(() => {
    const calculatePosition = () => {
      const viewportWidth = window.innerWidth;
      const contentMaxWidthPixels = 672;
      const desiredOverlapPixels = 48;

      if (viewportWidth > contentMaxWidthPixels) {
        const spaceOutside = (viewportWidth - contentMaxWidthPixels) / 2;
        const calculatedRight = spaceOutside - desiredOverlapPixels;
        // Set style for larger screens (right offset)
        setDynamicStyle({ right: `${Math.max(16, calculatedRight)}px` });
      } else {
        // Set style for smaller screens (centered)
        setDynamicStyle({ left: "50%", transform: "translateX(-50%)" });
      }
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition);

    return () => window.removeEventListener("resize", calculatePosition);
  }, []);

  return (
    <>
      <div className="fixed bottom-4 z-50" style={dynamicStyle}>
        <Alert className="bg-zinc-100 rounded-3xl p-2">
          <AlertDescription>
            <div className="flex flex-row md:flex-col gap-3">
              <Button
                className="bg-zinc-300 hover:bg-blue-500"
                onClick={() =>
                  handleClick("https://www.linkedin.com/in/michael-roring/")
                }
              >
                <LinkedinIcon />
              </Button>
              <Button
                className="bg-zinc-300 hover:bg-zinc-500"
                onClick={() => handleClick("https://github.com/michaelRoring")}
              >
                <GithubIcon />
              </Button>
              <Button
                className="bg-zinc-300 hover:bg-cyan-300"
                onClick={() => handleClick("https://x.com/0xmchaelr")}
              >
                <TwitterIcon />
              </Button>
              <Button
                className="bg-zinc-300 hover:bg-violet-400"
                onClick={() =>
                  handleClick("https://discordapp.com/users/359019371458330635")
                }
              >
                <DiscordIcon />
              </Button>
              <Sheet>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SheetTrigger asChild>
                        <Button className="bg-zinc-300 hover:bg-yellow-300">
                          <MessageSquareMoreIcon />
                        </Button>
                      </SheetTrigger>
                    </TooltipTrigger>
                    <TooltipContent className="bg-yellow-200">
                      <p>Send a message</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <SheetContent className="bg-zinc-200 rounded-tl-xl rounded-bl-xl">
                  <form onSubmit={handleSubmit}>
                    <SheetHeader>
                      <SheetTitle>Send message</SheetTitle>
                      <SheetDescription>
                        Want to collaborate? Send me a message
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email address
                        </Label>
                        <Input
                          id="email"
                          placeholder="Insert your email here"
                          className="col-span-3"
                          required
                          value={data.email}
                          onChange={handleInputChange}
                          type="email"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="message" className="text-right">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Insert your message here"
                          className="col-span-3 min-h-24"
                          required
                          value={data.message}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button
                          type="submit"
                          className="bg-white hover:bg-yellow-300"
                        >
                          Send Message
                        </Button>
                      </SheetClose>
                    </SheetFooter>
                  </form>
                </SheetContent>
              </Sheet>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
}
