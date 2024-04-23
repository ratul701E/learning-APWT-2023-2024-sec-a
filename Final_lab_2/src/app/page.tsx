import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-4">Welcome</h1>
      <h4 className="text-lg text-center">
        View all <Link href={'/employee'} className="text-blue-600 hover:underline">employees</Link>
      </h4>
    </>
  );
}
