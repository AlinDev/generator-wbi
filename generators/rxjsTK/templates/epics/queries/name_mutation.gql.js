import gql from "graphql-tag";

export const <%= NA_ME %>_MUTATION = gql`
  mutation <%= name %>(
    $input:  Input!
    $formSerializer: any
  ) {
      <%= name %>(
        input: $input
      )
    @rest(
      method: "POST"
      path: "/...{args.input}"
      type: "<%= name %>M"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
