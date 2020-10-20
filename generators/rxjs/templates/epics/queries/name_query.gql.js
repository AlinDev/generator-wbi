import gql from "graphql-tag";

export const <%= NAME %>_QUERY = gql`
  query <%= Name %> {
    <%= name %>
      @rest(type: "UserInfo", path: "/Account/ConfirmPhoneNumber") {
      email
      code
    }
  }
`;
