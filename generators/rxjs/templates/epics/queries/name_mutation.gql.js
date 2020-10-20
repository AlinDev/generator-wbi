import gql from "graphql-tag";

export const NAME_MUTATION = gql`
  mutation <%= Name %>($input:  <%= Name %>Input!) {
    <%= name %>(input: $input)
      @rest(
        type: "<%= Name %>Payload"
        path: "/Account/Register"
        method: "POST"
      ) {
      __typename
    }
  }
`;
