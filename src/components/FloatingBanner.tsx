import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "./ui/button";

import { GithubIcon } from "./ui/github";
import { LinkedinIcon } from "./ui/linkedin";
import { TwitterIcon } from "./ui/twitter";
import { MessageSquareMoreIcon } from "./ui/message-square-more";

export default function FloatingBanner() {
  return (
    <>
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 md:left-auto md:right-96 md:mr-24 md:translate-x-0 z-50">
        <Alert className="bg-slate-100 rounded-3xl p-2">
          <AlertDescription>
            <div className="flex flex-row md:flex-col gap-3">
              <Button className="bg-zinc-300 hover:bg-blue-500">
                <LinkedinIcon />
              </Button>
              <Button className="bg-zinc-300 hover:bg-zinc-500">
                <GithubIcon />
              </Button>
              <Button className="bg-zinc-300 hover:bg-blue-300">
                <TwitterIcon />
              </Button>
              <Button className="bg-zinc-300 hover:bg-yellow-300">
                <MessageSquareMoreIcon />
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </>
  );
}
