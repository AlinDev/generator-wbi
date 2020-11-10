import gql from "graphql-tag";

export const ALIN_BOGDAN_MUTATION = gql`
  mutation alinBogdan(
    $input:  Input!
    $formSerializer: any
  ) {
      alinBogdan(
        input: $input
      )
    @rest(
      method: "POST"
      path: "/...{args.input}"
      type: "alinBogdanM"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
