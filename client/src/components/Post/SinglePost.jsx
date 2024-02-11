import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../utils/queries";
import PostComponent from "./PostComponent";
// use the params to get the id for the get post query
//then generate the post using post component and data from query as parameters
//underneath this post component have a add comment text field and submit button
//then underneath that have a list of comment components generated via a map of the particular post's comments array
//when you enter a text into the comment text field and submit it will add it will execute the add comment mutation

export function SinglePost() {
  const { postId } = useParams();
  console.log("this is the post id", postId);
  const { loading, error, data } = useQuery(GET_POST, {
    variables: { postId },
  });
  console.log("this is the data from GET_POST", data);
  return (
    <div className="flex flex-wrap flex-col content-center">
      <p>HELLO</p>
    </div>
  );
}
