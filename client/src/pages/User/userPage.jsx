import { useQuery } from "@apollo/client"; 
import { GET_USER_POSTS, CREATE_POST} from "../../utils/queries";
import Post from "../../components/Post/CreatePost";
import PostComponent from "../../components/Post/PostComponent";
const User = () => {
  const { loading, error, data } = useQuery(GET_USER_POSTS);
  console.log('user spec posts', data)
  if (loading) return <p>Loading...</p>;
  return (
    <>
    <div className="flex flex-col flex-wrap content-center">
    <Post />
      {error ? (<div>
          <p className="text-red-600 hover:text-red-500">
            Sorry there was an error retireving your data.
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
      </div>
    </>
  )
}

export default User