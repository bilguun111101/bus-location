import { FC } from "react";
import { LogInScreen } from "../screen";
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator();

const StackSection: FC = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Signin" component={LogInScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackSection
