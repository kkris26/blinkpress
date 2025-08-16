import Link from "next/link";

export default function Logo() {
  return (
    <h1 className="text-xl">
      <Link href={"/"}>
        Blink<span className="font-bold">Press</span>
      </Link>
    </h1>
  );
}
