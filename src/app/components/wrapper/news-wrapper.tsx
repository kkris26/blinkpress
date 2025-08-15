import { Children } from "@/types/global";

export default function NewsWrapper({ children }: Children) {
  return (
    <div className="grid grid-cols-1 gap-6 mt-5 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}
