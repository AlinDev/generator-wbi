import gql from "graphql-tag";

export const ALEX_BEU_QUERY = gql`
  query alexBeu(
      $input:  Input!
      $formSerializer: any
  ) {
    alexBeu(
      input: $input
    )
    @rest(
      method:  "GET"
      path: "/...{args.input}"
      type: "alexBeuQ"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
