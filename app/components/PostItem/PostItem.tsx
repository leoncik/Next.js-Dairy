import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type PostItemProps = {
  dairyPost: DairyPost;
};

export default function PostItem({ dairyPost }: PostItemProps) {
  const formattedDate = getFormattedDate(dairyPost.date);
  return (
    <li>
      <Link href={`/posts/${dairyPost.id}`}>{dairyPost.title}</Link>
      <br />
      <p>{formattedDate}</p>
    </li>
  );
}
