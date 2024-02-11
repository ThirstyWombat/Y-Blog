import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../../utils/queries";
import { ADD_COMMENT, REMOVE_COMMENT } from "../../utils/mutations";
import PostComponent from "../Post/PostComponent";
import CreateComment from "../PostComment/CreateComment";
import CommmentComponent from "../CommentComponent";
import Auth from "../../utils/auth";
// use the params to get the id for the get post query
//then generate the post using post component and data from query as parameters
//underneath this post component have a add comment text field and submit button
//then underneath that have a list of comment components generated via a map of the particular post's comments array
//when you enter a text into the comment text field and submit it will add it will execute the add comment mutation

// function renderActions() {
//   if (Auth.loggedIn()) {
//     if (Auth.getProfile().data.username == comment?.commentAuthor?.username) {
//       return (
//         <button className="flex flex-wrap content-end justify-end float-right">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="red"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//             />
//           </svg>
//         </button>
//       );
//     }
//   }
//   return;
// }

export function SinglePost() {
  const { postId } = useParams();
  console.log("this is the post id", postId);
  const { loading, error, data } = useQuery(GET_POST, {
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
      <CreateComment />
      {/* {renderActions()} */}
      {data?.post.comments.map((comment) => (
        <CommmentComponent
          key={comment._id}
          commentId={comment._id}
          username={comment.commentAuthor?.username}
          commentText={comment.commentText}
          createdAt={comment.createdAt}
        />
      ))}
    </div>
  );
}
