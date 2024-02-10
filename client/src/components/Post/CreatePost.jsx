import { useState } from "react";
import { postFields } from "../../constants/postFields";
import Input from "./postInput";
import FormAction from "../Access/formAction";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { POST } from "../../utils/mutations";

const fields = postFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Post() {
  const [postState, setPostState] = useState(fieldsState);
  const [post, { error }] = useMutation(POST);

  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(postState);
    try {
      const mutationResponse = await post({
        variables: { content: postState.content },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className=" w-1/2  mt-8 space-y-6 rounded-lg bg-grey p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] " onSubmit={handleSubmit}>
      <div>
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={postState[field.id]}
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
            Sorry, The post cannot be created.
          </p>
        </div>
      ) : null}
      <FormAction text="Post" />
    </form>
  );
}
