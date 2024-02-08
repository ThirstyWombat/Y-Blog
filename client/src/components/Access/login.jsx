import { useState } from "react";
import { loginFields } from "../../constants/formfields";
import Input from "./input";
import FormAction from "./formAction";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { LOGIN } from "../../utils/mutations";

const fields = loginFields;
let fieldsState = { email: "", password: "" };
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginState);
    try {
      const mutationResponse = await login({
        variables: { email: fieldsState.email, password: fieldsState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="mt-8 space-y-6 rounded-lg bg-grey p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] " onSubmit={handleSubmit}>
      <div>
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      {error ? (
        <div>
          <p className="text-red-600 hover:text-red-500">
            The credentials provided are incorrect
          </p>
        </div>
      ) : null}
      <FormAction text="Login" />
    </form>
  );
}
