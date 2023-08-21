import { getSortedDairyPostsData } from "@/lib/dairyPosts";

export default function PostsList() {
  const dairyPosts = getSortedDairyPostsData();
  return (
    <section>
      <h2>My latest thoughts:</h2>
      <div>
        {dairyPosts.map((post: DairyPost) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </section>
  );
}
