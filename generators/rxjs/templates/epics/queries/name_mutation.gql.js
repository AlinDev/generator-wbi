import gql from "graphql-tag";

export const <%= NAME %>_MUTATION = gql`
  mutation <%= Name %>(
    $input:  Input!
    $formSerializer: any
  ) {
      <%= _name %>(
        input: $input
      )
    @rest(
      method: "POST"
      path: "/...{args.input}"
      type: "<%= Name %>M"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
