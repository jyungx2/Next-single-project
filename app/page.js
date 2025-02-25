import Link from "next/link";

export default function Home() {
  return (
    <>
      <ul className="flex gap-4">
        <li>
          <Link href="/community">홈</Link>
        </li>
        <li>
          <Link href="/market">사고팔고</Link>
        </li>
        <li>
          <Link href="/work">구인구직</Link>
        </li>
        <li>
          <Link href="/stay">숙박</Link>
        </li>
        <li>
          <Link href="/profile">프로필</Link>
        </li>
      </ul>
    </>
  );
}
