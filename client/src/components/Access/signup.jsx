import { useState } from "react";
import { signupFields } from "../../constants/formfields";
import FormAction from "./formAction";
import Input from "./input";
import { SIGNUP } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [addUser, { error }] = useMutation(SIGNUP);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          username: signupState.username,
          email: signupState.email,
          password: signupState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form
      className="mt-8 space-y-6 rounded-lg bg-darkRedditLighter p-6 shadow-[0_2px_15px_-3px_#7bdcf0,0_10px_20px_-2px_rgba(0,0,0,0.04)] "
      onSubmit={handleSubmit}
    >
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

        {error ? (
          <div>
            <p className="text-red-600 hover:text-red-500">
              Password must be at least 8 characters long
            </p>
          </div>
        ) : null}
        <FormAction text="Sign Up" />
      </div>
    </form>
  );
}
