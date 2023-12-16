import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <h1 className="h1-bold">This is my heading</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
