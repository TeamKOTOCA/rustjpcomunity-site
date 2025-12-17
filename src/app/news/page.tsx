import { getAllPosts, Post } from "@/lib/posts";
import Link from "next/link";

export default function News() {
  const newsPosts: Post[] = getAllPosts();

  return (
    <main>
      <section
        id="news"
        className="flex flex-col mx-auto max-w-3/5 items-start gap-8 px-4 py-12 w-full min-h-[70vh]"
      >
        <h1 className="text-4xl! mb-4">ニュース</h1>
        <ul className="list-inside w-full">
          {newsPosts.map((post, index) => (
            <>
              <li
                key={post.slug}
                className="mb-6"
              >
                <Link
                  href={`/news/${post.slug}`}
                  className="text-2xl! rust_gradation"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-gray-600">
                  {new Date(post.date).toLocaleDateString("ja-JP")}
                </p>
                <p className="mt-2">{post.description}</p>
              </li>
              {index < newsPosts.length - 1 && <hr className="w-full border-gray-300 my-4" />}
            </>
          ))}
        </ul>
      </section>
    </main>
  );
}
