import gql from "graphql-tag";

export const NAME_MUTATION = gql`
  mutation registerLocal($registerInput: RegisterLocalInput!) {
    registerLocal(input: $registerInput)
      @rest(
        type: "RegisterLocalPayload"
        path: "/Account/Register"
        method: "POST"
      ) {
      __typename
    }
  }
`;
