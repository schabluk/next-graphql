import { gql } from 'apollo-server-micro'

export default gql`
  type Query {
    users: [User!]!
    some: Some!
  }
  type User {
    name: String
  }
  type Some {
    data: String
  }
`
