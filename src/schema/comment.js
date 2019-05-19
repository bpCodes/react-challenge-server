export default `
  type Comment {
    id: Int!
    name: String!
    owner: User!
    members: [User!]!
  }

  type CreateCommentResponse {
    ok: Boolean!
    comment: Comment
    errors: [Error!]
  }
  type removeResponse {
    ok: Boolean!
    errors: [Error!]
  }
 type updateResponse{
   ok: Boolean!
   comment: Comment
   errors: [Error!]
 }
  type Query {
    allComments: [Comment!]!
  }

  type Mutation {
    createComment(name: String!): CreateCommentResponse!
    removeComment(id: Int!): removeResponse!
    updateComment(id: Int!, name: String): updateResponse!
  }
`;
