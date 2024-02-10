import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  {
    posts {
      _id
      author {
        _id
        username
        email
      }
      postBody
      createdAt
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
    }
  }
`;
