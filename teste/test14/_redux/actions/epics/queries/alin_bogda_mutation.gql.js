import gql from "graphql-tag";

export const ALIN_BOGDA_MUTATION = gql`
  mutation alinBogda(
    $input:  Input!
    $formSerializer: any
  ) {
      alinBogda(
        input: $input
      )
    @rest(
      method: "POST"
      path: "/...{args.input}"
      type: "alinBogdaM"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
