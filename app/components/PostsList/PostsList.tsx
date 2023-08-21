import { getSortedDairyPostsData } from "@/lib/dairyPosts";
import PostItem from "../PostItem/PostItem";

export default function PostsList() {
  const dairyPosts = getSortedDairyPostsData();
  return (
    <section>
      <h2>My latest thoughts:</h2>
      <ul>
        {dairyPosts.map((post: DairyPost) => (
          <PostItem key={post.id} dairyPost={post} />
        ))}
      </ul>
    </section>
  );
}
