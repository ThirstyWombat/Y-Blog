import PostComponent from "../components/Post/PostComponent";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../utils/queries";
import Auth from "../utils/auth";
import Post from "../components/Post/CreatePost";
export default function Homepage() {
  const { loading, error, data, refetch } = useQuery(GET_POSTS);
  if (loading) {
    return (
      <div>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Loading...
      </div>
    );
  }
  function createButton() {
    if (Auth.loggedIn()) {
      return (
        <div className="flex flex-col flex-wrap content-center">
          <Post onPostSuccess={refetch} />
        </div>
      );
    } else {
      return;
    }
  }
  return (
    <>
      <div>{createButton()}</div>
      <div className="flex flex-wrap flex-col content-center">
        {data?.posts.map((post) => (
          <PostComponent
            key={post._id}
            postId={post._id}
            username={post.author?.username}
            postBody={post.postBody}
            createdAt={post.createdAt}
            userId={post.author?._id}
          />
        ))}
      </div>
    </>
  );
}
