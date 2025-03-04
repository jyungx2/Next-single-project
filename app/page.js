import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container">
        <header className="header">
          <section className="headerSection">
            <div>
              <Image src="/icon.png" alt="image" width="60" height="60" />
            </div>
            <div className="headerRight">
              <Image src="/alarm.svg" alt="image" width={32} height={32} />
              <Link href="/">
                <Image src="/menu.svg" alt="image" width={24} height={24} />
              </Link>
            </div>
          </section>
        </header>

        <main className="main">
          <form className="searchForm">
            <button>
              <div className="searchButton">
                <span>중고거래</span>
                <Image src="/triangle.svg" alt="image" width={18} height={18} />
              </div>
            </button>
            <div className="search-input-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="Search"
              />
              <button>
                <Image src="/search.svg" alt="image" width={24} height={24} />
              </button>
            </div>
          </form>

          <article>게시물</article>
        </main>

        <nav className="navbar">
          <ul className="navList">
            <li className="navItem">
              <Link href="/community" className="navLink">
                <Image src="/home.svg" alt="image" width={32} height={32} />홈
              </Link>
            </li>
            <li className="navItem">
              <Link href="/market" className="navLink">
                <Image src="/market.svg" alt="image" width={32} height={32} />
                사고팔고
              </Link>
            </li>
            <li className="navItem">
              <Link href="/work" className="navLink">
                <Image src="/work.svg" alt="image" width={32} height={32} />
                구인구직
              </Link>
            </li>
            <li className="navItem">
              <Link href="/stay" className="navLink">
                <Image src="/stay.svg" alt="image" width={32} height={32} />
                숙박
              </Link>
            </li>
            <li className="navItem">
              <Link href="/profile" className="navLink">
                <Image src="/profile.svg" alt="image" width={32} height={32} />
                프로필
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
