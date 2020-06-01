import gql from "graphql-tag";

export const NAME_MUTATION = gql`
  mutation <%= Name %>($registerInput: RegisterLocalInput!) {
    <%= name %>(input: $registerInput)
      @rest(
        type: "<%= Name %>Payload"
        path: "/Account/Register"
        method: "POST"
      ) {
      __typename
    }
  }
`;
