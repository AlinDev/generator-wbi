import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import <%= props.page %> from "./pages/"
const Stack = createStackNavigator();

const <%= props.chapter %>Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="<%= props.page %>"
         component={<%= props.page %>}
        options={{ headerShown: false }}
        initialParams={null}
      />

    </Stack.Navigator>
  );
};

export default <%= props.hapter %>Navigation;
