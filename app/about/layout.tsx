import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-13 z-10 h-screen w-60 bg-gray-800">
        <ul className="flex gap-y-5 italic justify-center items-center mt-5 cursor-pointer flex-col">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/about/profile"}>
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
