"use client";

import React from "react";

export default function Error({ error, reset }: any) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      {process.env.NODE_ENV === "production" ? (
        <p className="text-lg">Try again later!</p>
      ) : (
        <p className="text-lg">{error.message}</p>
      )}

      <button
        className="inline-block bg-primary-500 text-primary-800 px-6 py-3 text-lg"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}
