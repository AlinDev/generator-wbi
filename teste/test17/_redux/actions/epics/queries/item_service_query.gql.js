import gql from "graphql-tag";

export const ITEM_SERVICE_QUERY = gql`
  query itemService(
      $input:  Input!
      $formSerializer: any
  ) {
    itemService(
      input: $input
    )
    @rest(
      method:  "GET"
      path: "/...{args.input}"
      type: "itemServiceQ"
      bodySerializer: $formSerializer
    ) {
    __typename
    }
  }
`;
