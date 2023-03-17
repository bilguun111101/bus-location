import { useUser } from "../context";
import { FC, useEffect } from "react";
import { HomeScreen, LogInScreen } from "../screen";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackSection: FC = () => {
  const navigation = useNavigation();
  const { access, user } = useUser();
  useEffect(() => {
    if(access && user) navigation.navigate("Home" as never)
  }, [access, user])
  return (
    <Stack.Navigator>
        <Stack.Screen name="Signin" component={LogInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackSection
