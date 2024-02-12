import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../utils/queries";
import { ADD_COMMENT, REMOVE_COMMENT } from "../../utils/mutations";
import PostComponent from "../Post/PostComponent";
import CreateComment from "../PostComment/CreateComment";
import CommmentComponent from "../CommentComponent";

// use the params to get the id for the get post query
//then generate the post using post component and data from query as parameters
//underneath this post component have a add comment text field and submit button
//then underneath that have a list of comment components generated via a map of the particular post's comments array
//when you enter a text into the comment text field and submit it will add it will execute the add comment mutation


export function SinglePost() {
  const { postId } = useParams();
  console.log("this is the post id", postId);
  const { loading, data } = useQuery(GET_POST, {
    variables: { postId: postId },
  });
  console.log("this is the data from GET_POST", data);
  return (
    <div className="flex flex-wrap flex-col content-center">
      <PostComponent
        postId={data?.post._id}
        username={data?.post.author?.username}
        postBody={data?.post.postBody}
        createdAt={data?.post.createdAt}
      />
      {data?.post.comments.map((comment) => (
        <CommmentComponent
          key={comment._id}
          commentId={comment._id}
          username={comment.commentAuthor?.username}
          commentText={comment.commentText}
          createdAt={comment.createdAt}
          postId = {postId}
        />
      ))}
    </div>
  );
}
