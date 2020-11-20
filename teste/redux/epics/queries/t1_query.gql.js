import gql from "graphql-tag";

export const T1_QUERY = gql`
  query t1(
      $input:  Input!
      $formSerializer: any
  ) {
    t1(
      input: $input
    )
    @rest(
      method:  "GET"
      path: "/...{args.input}"
      type: "t1Q"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
