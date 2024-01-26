"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function usersPage() {
  const router = useRouter();

  function navigationParams() {
    var params = new URLSearchParams({age: 23, yearOfBirth: 2000});
    router.push(`users/555?${params}`);
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li>
          <Link href="users/1">User 1</Link>
        </li>
        <li>
          <Link href="users/abc">User abc</Link>
        </li>
        <li>
          <Link href="users/555">User 555</Link>
        </li>
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <button onClick={() => router.push("users/1")}>User 1</button>
        <button onClick={() => router.push("users/abc")}>User abc</button>
        <button onClick={() => navigationParams()}>User 555</button>
      </div>
    </div>
  );
}
