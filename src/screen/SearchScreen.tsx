import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../containers/search/Search";
import Details from "../containers/search/Detail";

const SearchScreen: FC = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Detail" component={Details} />
    </Stack.Navigator>
  );
};

export default SearchScreen;
