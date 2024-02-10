import { useQuery } from "@apollo/client"; 
import { GET_USER_POSTS, CREATE_POST} from "../../utils/queries";
import Post from "../../components/Post/CreatePost";
const User = () => {
  const { loading, error, data } = useQuery(GET_USER_POSTS);
  console.log('user spec posts', data)
  return (
    <>
    <Post />
    </>
  )
}

export default User