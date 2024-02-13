import { useState } from "react";
import { postFields } from "../../constants/postFields";
import Input from "./postInput";
import FormAction from "../Access/formAction";
import { useMutation } from "@apollo/client";
import { POST } from "../../utils/mutations";

const fields = postFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Post(props) {
  const [postState, setPostState] = useState(fieldsState);
  const [post, { error }] = useMutation(POST);

  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const mutationResponse = await post({
        variables: { postBody: postState.content },
      });
      props.onPostSuccess();
      setPostState({ ...postState, content: "" });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      className="  mt-8 space-y-6 rounded-lg bg-darkRedditLighter mb-10 p-6 shadow-[0_2px_8px_-3px_#7bdcf0,0_10px_20px_-2px_rgba(0,0,0,0.04)] "
      onSubmit={handleSubmit}
    >
      <div>
        <div className="italic text-lg text-white-500">What is up?!</div>
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
