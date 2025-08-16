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
import { NewsSearch } from "@/types/global";
import Image from "next/image";
import Link from "next/link";

export default function SearchNewsCard({ news }: { news: NewsSearch }) {
  return (
    <Card className="bg-transparent p-3 sm:p-5 flex flex-row sm:flex-col justify-between gap-4 sm:gap-6 items-center sm:items-end">
      <CardHeader className="relative w-70 sm:w-full p-0 gap-0">
        <Image
          alt="Image"
          src={
            news.multimedia?.default?.url ||
            "https://placehold.co/600x400/gray/white.webp"
          }
          width={1200}
          height={1200}
          className="aspect-4/3 rounded-md object-cover"
        />
        <Badge className="absolute capitalize top-2 right-2 sm:top-3 sm:right-3 hover:underline">
          <Link href={`/category/${news.section_name}`}>
            {news.section_name}
          </Link>
        </Badge>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 w-full p-0">
        <CardTitle className="hover:underline text-sm leading-tight line-clamp-2 sm:line-clamp-none">
          <Link href={news.web_url}>{news.headline.main}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-1 sm:line-clamp-2 text-xs">
          {news.abstract}
        </CardDescription>
        <p className="text-xs line-clamp-1 sm:line-clamp-none">
          {news.byline.original}
        </p>
      </CardContent>

      <CardFooter className="justify-end hidden sm:flex p-0">
        <CardAction>
          <Button variant={"default"}>
            <Link target="blank" href={news.web_url}>
              View More
            </Link>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
