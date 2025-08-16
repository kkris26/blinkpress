"use client";
export default function ErrorMessage() {
  return (
    <div className="flex w-full h-screen items-center justify-center  text-center">
      <div className="p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2">⚠️ Oops!</h1>
        <p>Someting went wrong</p>
      </div>
    </div>
  );
}
