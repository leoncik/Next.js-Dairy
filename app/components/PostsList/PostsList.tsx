import { getSortedDairyPostsData } from "@/lib/dairyPosts";
import PostCard from "../PostCard/PostCard";

export default function PostsList() {
  const dairyPosts = getSortedDairyPostsData();
  return (
    <section>
      <h2>My latest thoughts:</h2>
      <ul>
        {dairyPosts.map((post: DairyPost) => (
          <PostCard key={post.id} dairyPost={post} />
        ))}
      </ul>
    </section>
  );
}
