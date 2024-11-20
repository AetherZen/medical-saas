"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <button onClick={() => reset()} className="underline">Try again</button>
    </div>
  );
}
