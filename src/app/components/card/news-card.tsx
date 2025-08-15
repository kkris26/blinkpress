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
    <Card className="bg-transparent p-3 sm:p-5 flex flex-row sm:flex-col justify-between gap-4 sm:gap-6  items-center sm:items-end">
      <CardHeader className="relative w-70 sm:w-full p-0 gap-0">
        <Image
          alt="Image"
          src={news.multimedia[0].url}
          width={1200}
          height={1200}
          className="aspect-4/3 rounded-md object-cover"
        />
        <Badge className="absolute capitalize top-2 right-2 sm:top-3 sm:right-3 hover:underline">
          <Link href={`/category/${news.section}`}>{news.section}</Link>
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 w-full p-0">
        <CardTitle className="hover:underline text-sm leading-tight line-clamp-2 sm:line-clamp-none">
          <Link href={news.url}>{news.title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-1 sm:line-clamp-2 text-xs">
          {news.abstract}
        </CardDescription>
        <p className="text-xs line-clamp-1 sm:line-clamp-none">{news.byline}</p>
      </CardContent>
      <CardFooter className=" justify-end hidden sm:flex p-0">
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
