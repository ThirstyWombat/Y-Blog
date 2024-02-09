export default function Post() {
  return (
    <div>
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
              <p className="text-base leading-6 font-medium ">
                Sonali Hirave
                <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @ShonaDesign . 16 April
                </span>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="pl-16">
        <p className="text-base width-auto font-medium flex-shrink">
          Day 07 of the challenge I was wondering what I can do with , so just
          started building Twitter UI using Tailwind and so far it looks so
          promising. I will post my code after completion.
        </p>

        <div className="flex">
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex-1 text-center">
                <a
                  href="#"
                  className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-600"></hr>
    </div>
  );
}

//   return (
//     <>
//       <div className="fixed inset-0 flex items-center justify-center">
//         <button
//           type="button"
//           className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
//         >
//           Open dialog
//         </button>
//       </div>

//       <div className="relative z-10">
//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4 text-center">
//             <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//               <h3 className="text-lg font-medium leading-6 text-gray-900">
//                 Payment successful
//               </h3>
//               <div className="mt-2">
//                 <p className="text-sm text-gray-500">
//                   Your payment has been successfully submitted. We’ve sent you
//                   an email with all of the details of your order.
//                 </p>
//               </div>

//               <div className="mt-4">
//                 <button
//                   type="button"
//                   className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                 >
//                   Got it, thanks!
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
