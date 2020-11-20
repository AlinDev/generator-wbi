import gql from "graphql-tag";

export const <%= NA_ME %>_QUERY = gql`
  query <%= name %>(
      $input:  Input!
      $formSerializer: any
  ) {
    <%= name %>(
      input: $input
    )
    @rest(
      method:  "GET"
      path: "/...{args.input}"
      type: "<%= name %>Q"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
