"use client";
import { useState } from "react";

const names: string[] = ["Ahmed", "Ali", "Abdullah", "Moosa", "Umair"];

export default function Home() {
  const [namePosition, setNamePosition] = useState(0);

  const clickHandleName = (namePosition: number) => {
    if (!(namePosition < 0) && names.length !== namePosition) {
      setNamePosition(namePosition);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="w-auto text-center">
        <h1 className="h1-bold mb-4 text-black dark:text-white">
          {names[namePosition]}
        </h1>
        <div className="flex w-auto">
          <button
            onClick={() => clickHandleName(namePosition - 1)}
            className="mr-2 rounded-md bg-black px-5 py-2 text-white dark:bg-white dark:text-black"
          >
            Prev
          </button>
          <button
            onClick={() => clickHandleName(namePosition + 1)}
            className="rounded-md bg-black px-5 py-2 text-white dark:bg-white dark:text-black"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
