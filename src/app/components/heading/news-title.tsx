import { Children } from "@/types/global";

export default function HeadingNews({
  children,
  className,
}: {
  children: Children;
  className?: string;
}) {
  return <h1 className={`${className} text-lg sm:text-xl capitalize`}>{children}</h1>;
}
