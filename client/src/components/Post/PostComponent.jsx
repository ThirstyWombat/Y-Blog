export default function PostComponent({ username, createdAt, postBody }) {
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
          {postBody}
        </p>

        <div className="flex">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <a
                  href="#"
                  className="w-12 mt-1 group flex items-center px-3 py-2 text-base leading-6 font-medium rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="lightBlue" className="w-6 h-6 hover:fill-blue-300 transition ease-in-out duration-150">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
