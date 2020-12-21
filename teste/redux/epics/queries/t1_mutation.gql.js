import gql from "graphql-tag";

export const T1_MUTATION = gql`
  mutation t1($input: Input!, $formSerializer: any) {
    t1(input: $input)
      @rest(
        method: "POST"
        path: "/...{args.input}"
        type: "t1M"
        bodySerializer: $formSerializer
      ) {
      __typename
    }
  }
`;
