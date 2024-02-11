export default function CommmentComponent({
  username,
  commentText,
  createdAt,
  commentId,
}) {
  return (
    <div className="m-1 w-3/4 rounded-md appearance-none rbg-grey p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-blue-300 focus:border-blue-400 focus:z-10 sm:text-sm">
      <div className="flex flex-shrink-0 p-4 pb-0">
        <a href="#" className="flex-shrink-0 group block">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
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
