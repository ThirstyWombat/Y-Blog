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

export const GET_POST = gql`
  query Post($postId: ID!) {
    post(postId: $postId) {
      _id
      postBody
      createdAt
      comments {
        commentAuthor {
          _id
          username
        }
        commentText
        createdAt
      }
    }
  }
`;
