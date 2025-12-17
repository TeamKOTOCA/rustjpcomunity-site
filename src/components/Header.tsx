import Image from "next/image";
import Link from "next/link";
import Attention from "./Attention";

const HeaderLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "私たちについて" },
  { href: "/news", label: "お知らせ" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <>
      <Attention
        message={
          <>
            🚧 このサイトは現在制作中です。フィードバックは
            <Link
              href="https://github.com/Rust-Developers-JP/official_site/issues"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              こちら
            </Link>
            からお願いします。
          </>
        }
        variant="warning"
      />
      <header className="p-4 flex flex-row justify-between items-center">
        <h1 className="flex flex-row justify-start items-center font-bold gap-2 grow">
          <Link
            href="/"
            className="flex flex-row justify-start items-center gap-2"
          >
            <Image
              src="/img/rust.svg"
              alt="Rust Developer JP"
              width={50}
              height={50}
            />
            Rust Developer JP
          </Link>
        </h1>
        <nav>
          <ul className="flex flex-row gap-4">
            {HeaderLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
