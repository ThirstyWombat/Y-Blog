import Header from "../../components/Access/header"
import Login from "../../components/Access/login";
const Access = () => {
    return(
      <>
      <div className=" flex flex-col flex-wrap content-center ">
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Sign Up"
          linkUrl="/signup" />
          <Login/>
        </div>
      </>
    )  
  }


export default Access;