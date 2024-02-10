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

export const GET_USER_POSTS = gql`
  {
    me {
      _id
      username
      posts {
        _id
        postBody
        createdAt
      }
    }
  }
`;
