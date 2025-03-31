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

export default function Contact() {
  return (
    <>
      <div className="mt-6">
        {/* <h1 className="text-xl font-bold mb-2">Contact</h1> */}
        <Card className="bg-slate-50">
          <CardHeader>
            <CardTitle>Contact?</CardTitle>
            <Label>Wadididaw</Label>
          </CardHeader>
          <CardContent>
            {/* <CardDescription>{certification.description}</CardDescription> */}
          </CardContent>
          <CardFooter>
            <Button variant="default">View</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
