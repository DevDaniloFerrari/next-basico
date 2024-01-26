import Link from "next/link";

export default function userDetail(props) {
  return (
    <div>
      <Link href="/users">
        <button>Back</button>
      </Link>
      <h1>User Detail - {props.params.id}</h1>
      <span>{props.searchParams.age}</span>
      <span>-</span>
      <span>{props.searchParams.yearOfBirth}</span>
    </div>
  );
}
