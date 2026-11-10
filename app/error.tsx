"use client";

import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <p>{error.message}</p>
      <Link href="/">Back to Home</Link>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Error;
