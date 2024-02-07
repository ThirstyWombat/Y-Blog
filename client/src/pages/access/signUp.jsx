import Header from "../../components/Access/header";
import Signup from "../../components/Access/signup";

export default function SignUp(){
    return (
        <>
        <Header
          heading="Sign up for an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/login" />
          <Signup/>
      </>
    
    )
}