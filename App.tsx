import { UserProvider } from './src/context';
import StackSection from './src/navigation/StackSection';
import { HomeScreen, LogInScreen } from './src/screen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <StackSection />
      </NavigationContainer>
    </UserProvider>
  );
}