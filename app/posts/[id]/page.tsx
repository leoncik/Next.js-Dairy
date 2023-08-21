import { getPostData, getSortedDairyPostsData } from "@/lib/dairyPosts";
import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const posts = getSortedDairyPostsData();

  if (!posts.find((post) => post.id === params.id)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(params.id);
  const formattedDate = getFormattedDate(date);
  return (
    <article>
      <h2>{title}</h2>
      <section dangerouslySetInnerHTML={{ __html: contentHtml }}></section>
      <Link href="/">Back to home page</Link>
    </article>
  );
}
