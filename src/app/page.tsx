import SiteSetting from "@/config";
import Image from "next/image";
import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <main>
      <div className="bg_red">
        <section
          id="top"
          className="h-[95vh] w-full max-w-200 mx-auto relative"
        >
          <div className="flex flex-col absolute bottom-[20vh] left-0 z-9 bg-white/60 p-4 gap-2">
            <h1 className="text-6xl!">
              <span className="rust_gradation">Rust</span>
              <br />
              Developers JP
            </h1>
            <Link
              className="btn_1 py-5!"
              href={SiteSetting.SocialLinks.Discord}
            >
              参加する
            </Link>
          </div>
          <div className="top_logos">
            <Image
              src="/img/rust_out.svg"
              alt="rust logo"
              className="top_img_rotate"
              width={450}
              height={450}
            />
            <Image
              src="/img/rust_in.svg"
              alt="rust logo"
              className="top_img_scale"
              width={450}
              height={450}
            />
          </div>
        </section>

        <section
          id="about"
          className="flex flex-col md:flex-row mx-auto max-w-4xl items-center gap-8 px-4 py-12"
        >
          <div className="md:w-1/2 w-full pr-0 md:pr-8 flex flex-col justify-center">
            <h2>Rust Developers JPとは?</h2>
            <p>
              Rust Developers JP は、Rust を日本語で学びたい方や意見を交わしたい方のための Discord
              コミュニティです。日本には既に大きな Rust
              コミュニティ（rust-jp）が存在しますが、Discord
              上で活動する場が限られていたため、本コミュニティを設立しました。Discord は洗練された
              UI や豊富な Bot 機能、高品質な通話など、開発者同士の交流に適した環境が整っています。
            </p>
            <Link
              href="/about"
              className="btn_1 mt-4 w-max"
            >
              もっと見る
            </Link>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <Image
              src="/img/ferris.svg"
              alt="about illustration"
              className="max-w-full h-auto"
              width={600}
              height={600}
            />
          </div>
        </section>

        <section
          id="news"
          className="flex flex-col mx-auto max-w-4xl items-start gap-8 px-4 py-12"
        >
          <h2>お知らせ</h2>
          <ul className="list-disc list-inside">
            <li>2024/06/01 - サイトをリニューアルしました！</li>
            <li>2023/12/15 - 新しいチャンネル「プロジェクト紹介」を追加しました！</li>
            <li>2023/10/10 - 定期オンラインミートアップを開始しました！</li>
          </ul>
        </section>

        <section
          id="join_us"
          className="btn_1"
        >
          <Link href={SiteSetting.SocialLinks.Discord}>参加する</Link>
        </section>
      </div>
    </main>
  );
}
