import {gql} from '@apollo/client'

export const LOGIN_USER = gql `
  mutation login($email: String!, $password: String!){
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`
export const ADD_USER = gql `
  mutation addUser($username: String!, $email: String!, $password: String!){
    addUser(username: $username, password:$password, email:$email) {
      token
      user {
        _id
        username
        email

      }
    }
  }
`
export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput! ) {
    saveBook(book : $book) {
        username
        savedBooks {
          title
        
      }
    }
  }
`
// // export const REMOVE_BOOK = gql `
// //   mutation removeBook($_id: ID!, $bookId : String!) {
// //     removeBook(id: _$id, bookId : $bookId ){
// //       username
// //       savedBooks {
// //         title
// //       }
// //     }
// //   }


// // `