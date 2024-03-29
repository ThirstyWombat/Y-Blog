import { useState } from "react";
import { postFields } from "../../constants/commentFields";
import Input from "../Post/postInput";
import FormAction from "../Access/formAction";
import { useMutation } from "@apollo/client";
import { POST, ADD_COMMENT } from "../../utils/mutations";

import { useParams } from "react-router-dom";
const fields = postFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function CreateComment() {
  const { postId } = useParams();
  const [commentState, setCommentState] = useState(fieldsState);
  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleChange = (e) => {
    setCommentState({ ...commentState, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await addComment({
        variables: { postId: postId, commentText: commentState.comment },
      });
      setCommentState({ ...commentState, comment: "" });
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
        <div className="italic text-lg text-gray-500">Make a comment</div>
        {fields.map((field) => {
          return (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={commentState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          );
        })}
      </div>
      {error ? (
        <div>
          <p className="text-red-600 hover:text-red-500">
            Sorry, The comment cannot be created.
          </p>
        </div>
      ) : null}
      <FormAction text="Comment" />
    </form>
  );
}
