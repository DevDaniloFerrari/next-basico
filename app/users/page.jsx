import Link from "next/link";

export default function usersPage() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        <li><Link href='users/1'>User 1</Link></li>
        <li><Link href='users/abc'>User abc</Link></li>
        <li><Link href='users/555'>User 555</Link></li>
      </ul>
    </div>
  );
}
