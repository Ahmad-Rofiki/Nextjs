import Link from "next/link";

export default function Navbars() {
  return (
    <>
      <div className="flex   bg-teal-400 p-2 shadow">
        <h1 className="font-bold text-3xl">Navbar</h1>
        <ul className="flex gap-x-10 italic justify-center items-center ml-5 cursor-pointer">
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
      </div>
    </>
  );
}
