import { gql } from '@apollo/client';

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
		user {
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
