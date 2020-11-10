import gql from "graphql-tag";

export const ALIN_BOGDAN_QUERY = gql`
  query alinBogdan(
      $input:  Input!
      $formSerializer: any
  ) {
    alinBogdan(
      input: $input
    )
    @rest(
      method:  "GET"
      path: "/...{args.input}"
      type: "alinBogdanQ"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
