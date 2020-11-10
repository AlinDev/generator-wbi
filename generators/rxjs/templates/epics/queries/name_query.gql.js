import gql from "graphql-tag";

export const <%= NAME %>_QUERY = gql`
  query <%= Name %>(
      $input:  Input!
      $formSerializer: any
  ) {
    <%= _name %>(
      input: $input
    )
    @rest(
      method:  "GET"
      path: "/...{args.input}"
      type: "<%= Name %>Q"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
