import { useState } from "react";
import { signupFields } from "../../constants/formfields";
import FormAction from "./formAction";
import Input from "./input";
import { SIGNUP } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

const fields = signupFields;
let fieldsState = { username: "", email: "", password: "" };

fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [addUser] = useMutation(SIGNUP);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupState);
    try {
      const mutationResponse = await addUser({
        variables: {
          username: fieldsState.username,
          email: fieldsState.email,
          password: fieldsState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className="mt-8 space-y-6 rounded-lg bg-grey p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] " onSubmit={handleSubmit}>
      <div className="">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction text="Sign Up" />
      </div>
    </form>
  );
}
