import gql from "graphql-tag";

export const <%= NA_ME %>_MUTATION = gql`
  mutation <%= name %>(
    $input:  Input!
    $val: Input!
    $formSerializer: any
  ) {
      <%= name %>(
        input: $input
        val: $val
      )
    @rest(
      method: "POST"
      path: "/...{args.val}"
      type: "<%= name %>M"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
