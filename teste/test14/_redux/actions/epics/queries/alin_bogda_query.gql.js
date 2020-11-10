import gql from "graphql-tag";

export const ALIN_BOGDA_QUERY = gql`
  query alinBogda(
      $input:  Input!
      $formSerializer: any
  ) {
    alinBogda(
      input: $input
    )
    @rest(
      method:  "GET"
      path: "/...{args.input}"
      type: "alinBogdaQ"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
