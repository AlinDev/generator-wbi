import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const <%= Name %>Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
         component={}
        options={{ headerShown: false }}
        initialParams={null}
      />

    </Stack.Navigator>
  );
};

export default <%= Name %>Navigation;
