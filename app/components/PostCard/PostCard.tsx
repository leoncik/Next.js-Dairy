import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";
import styles from "./PostCard.module.css";

type PostItemProps = {
  dairyPost: DairyPost;
};

export default function PostItem({ dairyPost }: PostItemProps) {
  const formattedDate = getFormattedDate(dairyPost.date);
  return (
    <li className={styles.card}>
      <Link className={styles.link} href={`/posts/${dairyPost.id}`}>
        <h3>{dairyPost.title}</h3>
        <br />
        <p>{formattedDate}</p>
      </Link>
    </li>
  );
}
