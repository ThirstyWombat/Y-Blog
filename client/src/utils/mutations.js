import { gql } from '@apollo/client';

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`;
export const SIGNUP = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
		}
	}
`;
export const POST = gql`
	mutation AddPost($postBody: String!) {
		addPost(postBody: $postBody) {
			_id
			postBody
		}
	}
`;

export const ADD_COMMENT = gql`
	mutation AddComment($postId: ID!, $commentText: String!) {
		addComment(postId: $postId, commentText: $commentText) {
			_id
			postBody
			comments {
				_id
				commentText
				createdAt
				commentAuthor {
					username
				}
			}
		}
	}
`;

export const REMOVE_COMMENT = gql`
	mutation RemoveComment($postId: ID!, $commentId: ID!) {
		removeComment(postId: $postId, commentId: $commentId) {
			_id
			postBody
		}
	}
`;

export const REMOVE_POST = gql`
	mutation RemovePost($postId: ID!, $userId: ID!) {
		removePost(postId: $postId, userId: $userId) {
			_id
			postBody
		}
	}
`;
