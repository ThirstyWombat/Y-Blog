import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../utils/queries";
import { ADD_COMMENT, REMOVE_COMMENT } from "../../utils/mutations";
import PostComponent from "../Post/PostComponent";
import CreateComment from "../PostComment/CreateComment";
import CommmentComponent from "../CommentComponent";

export function SinglePost() {
  const { postId } = useParams();
  const { loading, data, refetch } = useQuery(GET_POST, {
    variables: { postId: postId },
  });
  return (
    <div className="flex flex-wrap flex-col wrapper">
      <PostComponent
        postId={data?.post._id}
        username={data?.post.author?.username}
        postBody={data?.post.postBody}
        createdAt={data?.post.createdAt}
        commentCount={data?.post.comments.length}
      />
      <CreateComment />
      {data?.post.comments.map((comment) => (
        <CommmentComponent
          key={comment._id}
          commentId={comment._id}
          username={comment.commentAuthor?.username}
          commentText={comment.commentText}
          createdAt={comment.createdAt}
          postId={postId}
          onDeleteSuccess={() => refetch()}
        />
      ))}
    </div>
  );
}
