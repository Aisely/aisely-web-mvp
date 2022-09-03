import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div style={{ height: "100vh", border: "1px solid black"}}>
      <h1>User</h1>
      <ul>
        <li>
          <Link href={"/create"}>create doc</Link>
        </li>
        <li>
          <Link href={"/"}>clients</Link>
        </li>
        <li>
          <Link href={"/profile"}>profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
