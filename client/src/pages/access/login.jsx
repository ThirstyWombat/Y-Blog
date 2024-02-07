import Header from "../../components/Access/header"
import Login from "../../components/Access/login";
const Access = () => {
    return(
      <>
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup" />
          <Login/>
      </>
    )  
  }


export default Access;