import Auth from "../utils/auth";
import { REMOVE_COMMENT } from "../utils/mutations";
import { useMutation } from "@apollo/client";
export default function CommmentComponent({
  username,
  commentText,
  createdAt,
  commentId,
  postId,
  onDeleteSuccess,
}) {
  const [removeComment] = useMutation(REMOVE_COMMENT);
  const handleSubmit = async () => {
    try {
      const mutationResponse = await removeComment({
        variables: { postId: postId, commentId: commentId },
      });
      onDeleteSuccess();
    } catch (e) {
      console.log(e);
    }
  };

  function renderActions() {
    if (Auth.loggedIn()) {
      if (Auth.getProfile().data.username == username) {
        return (
          <button
            className="flex flex-wrap content-end justify-end float-right"
            onClick={handleSubmit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        );
      }
    }
    return;
  }

  return (
    <div className="m-1 w-3/4 rounded-md appearance-none rbg-grey p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-blue-300 focus:border-blue-400 focus:z-10 sm:text-sm">
      {renderActions()}
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="/assets/placeholder-profile-pic.png"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-base leading-6 font-medium group-hover:text-blue-300 transition ease-in-out duration-150">
                {username}
                <span className="ml-3 text-sm leading-5 font-medium text-gray-400 ">
                  {createdAt}
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="pl-16">
        <p className="mx-3 text-base width-auto font-medium flex-shrink">
          {commentText}
        </p>
      </div>
    </div>
  );
}
