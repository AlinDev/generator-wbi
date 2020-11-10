import gql from "graphql-tag";

export const ITEM_SERVICE_MUTATION = gql`
  mutation itemService(
    $input:  Input!
    $formSerializer: any
  ) {
      itemService(
        input: $input
      )
    @rest(
      method: "POST"
      path: "/...{args.input}"
      type: "itemServiceM"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
