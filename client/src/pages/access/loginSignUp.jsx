const Access = () => {
function showAccess(){
    // if (login = undefined) {
      return (
        <form className="w-full max-w-lg">
         <div className="flex flex-wrap -mx-3 mb-6">
             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                 Name*
             </label>
             <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Name"required="true"/>
             </div>
             <div className="w-full md:w-1/2 px-3">
             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                 Email
             </label>
             <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="Email" required="true"/>
             </div>
         </div>
         <div className="flex flex-wrap -mx-3 mb-6">
             <div className="w-full px-3">
             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
                 Password
             </label>
             <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="Password" required="true"/>
             </div>
         </div>
     </form>
      );
    // } else {
    // <form className="w-full max-w-lg">
    //     <div className="flex flex-wrap -mx-3 mb-6">
    //         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    //         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
    //             Name*
    //         </label>
    //         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Name"required="true"/>
    //         </div>
    //         <div className="w-full md:w-1/2 px-3">
    //         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
    //             Email
    //         </label>
    //         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="Email" required="true"/>
    //         </div>
    //     </div>
    //     <div className="flex flex-wrap -mx-3 mb-6">
    //         <div className="w-full px-3">
    //         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
    //             Password
    //         </label>
    //         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="Password" required="true"/>
    //         <p className="text-gray-600 text-xs italic">Must be at least 8 characters</p>
    //         </div>
    //     </div>
    // </form>
    // }
}
return (
    <div className="flex-row px-1">
      <card>{showAccess()}</card>
    </div>
  );
}
export default Access;