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
    <Card className="bg-transparent flex flex-col justify-between">
      <CardHeader className="relative">
        <Image
          alt="Image"
          src={
            news.multimedia.default.url ||
            "https://placehold.co/600x400/gray/white.webp"
          }
          width={1200}
          height={1200}
          className="aspect-4/3 rounded-md object-cover"
        />
        <Badge className="absolute capitalize top-3 right-10 hover:underline">
          <Link href={`/category/${news.section_name}`}>
            {news.section_name}
          </Link>
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle className="hover:underline">
          <Link href={news.web_url}>{news.headline.main}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-2 text-xs">
          {news.abstract}
        </CardDescription>
        <p className="text-xs">{news.byline.original}</p>
      </CardContent>
      <CardFooter className="flex justify-end">
        <CardAction>
          <Button>
            <Link target="blank" href={news.web_url}>
              View More
            </Link>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
