import { Children } from "@/types/global";

export default function NewsWrapper({ children }: Children) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:gap-4 mt-3 sm:mt-5 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}
