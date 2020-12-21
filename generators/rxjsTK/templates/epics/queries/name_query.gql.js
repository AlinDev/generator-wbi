import gql from "graphql-tag";

export const <%= NA_ME %>_QUERY = gql`
  query <%= name %>(
      $input:  Input!
      $val: Input!
      $formSerializer: any
  ) {
    <%= name %>(
      input: $input
      val: $val
    )
    @rest(
      method:  "GET"
      path: "/...{args.val}"
      type: "<%= name %>Q"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
