import gql from "graphql-tag";

export const NAME_QUERY = gql`
  query AccountConfirmPhoneNumber {
    accountConfirmPhoneNumber
      @rest(type: "UserInfo", path: "/Account/ConfirmPhoneNumber") {
      email
      code
    }
  }
`;
