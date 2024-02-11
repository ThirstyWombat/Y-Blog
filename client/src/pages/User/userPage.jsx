import { useQuery } from "@apollo/client"; 
import { GET_USER_POSTS, CREATE_POST} from "../../utils/queries";
import Post from "../../components/Post/CreatePost";
import PostComponent from "../../components/Post/PostComponent";
const User = () => {
  const { loading, error, data } = useQuery(GET_USER_POSTS);
  if (loading){
    return (
    <div >
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Loading... 
    </div>); 
  }
  console.log(data);
 
function noPostsExists() {
  if (data.me.posts == 0) {
  return (
    <div className="my-8 p-8 bg-gray-200 rounded-lg">
          <p className="italic text-lg ">
            No posts have been made yet
          </p>
    </div>
  )
} else {
  return;
  }
}
  
  return (
    <>
    <div className="flex flex-col flex-wrap content-center">
    <Post />
      {error ? (
        <div className="my-8 p-8 bg-gray-200 rounded-lg">
          <p className="italic text-lg ">
            Error displaying Posts.
          </p>
        </div>
      ) : 
      data?.me.posts?.map((post) => (
        <PostComponent
        key={post._id}
        username={data.me.username}
        postBody={post.postBody}
        createdAt={post.createdAt}
        />
        ))
      }
      <div>
        {noPostsExists()}
      </div>
      </div>
    </>
  )
}

export default User