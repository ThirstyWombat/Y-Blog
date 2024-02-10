import PostComponent from "../components/PostComponent";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../utils/queries";
export default function Homepage() {
  const { loading, error, data } = useQuery(GET_POSTS);
  console.log("this is the data", data);
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {data?.posts.map((post) => (
        <PostComponent
          key={post._id}
          username={post.author.username}
          postBody={post.postBody}
          createdAt={post.createdAt}
        />
      ))}
    </div>
  );
}
