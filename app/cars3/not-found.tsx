import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>404 - Cars NotFound</h1>
      <Link href="/cars">Back to Car List</Link>
    </div>
  );
};

export default NotFound;
