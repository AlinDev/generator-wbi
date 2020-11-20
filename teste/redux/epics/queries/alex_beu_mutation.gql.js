import gql from "graphql-tag";

export const ALEX_BEU_MUTATION = gql`
  mutation alexBeu(
    $input:  Input!
    $formSerializer: any
  ) {
      alexBeu(
        input: $input
      )
    @rest(
      method: "POST"
      path: "/...{args.input}"
      type: "alexBeuM"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
