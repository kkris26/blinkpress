import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Article } from "@/types/global";
import Image from "next/image";
import Link from "next/link";

export default function CardNews({ news }: { news: Article }) {
  return (
    <Card className="bg-transparent flex flex-col justify-between">
      <CardHeader className="relative">
        <Image
          alt="Image"
          src={news.multimedia[0].url}
          width={1200}
          height={1200}
          className="aspect-4/3 rounded-md object-cover"
        />
        <Badge className="absolute top-3 right-10">{news.section}</Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle className="hover:underline">
          <Link href={news.url}>{news.title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 text-xs">
          {news.abstract}
        </CardDescription>
        <p className="text-xs">{news.byline}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <CardAction>
          <Button>
            <Link target="blank" href={news.url}>
              View More
            </Link>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
