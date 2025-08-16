import { Children } from "@/types/global";

export default function HeadingNews({ children }: Children) {
  return <h1 className=" sm:text-xl capitalize">{children}</h1>;
}
