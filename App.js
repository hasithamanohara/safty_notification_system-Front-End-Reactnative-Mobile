import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Running from './screens/Running';
import EmergancyPerson from './screens/emegacyPerson';
import Walking from './screens/Walking';
import Biking from './screens/Biking';
import EmergencyH from './screens/Emergency/EmergencyH';
import ForMoresu from './screens/Emergency/EmgSubject/ForMoresu';
import EmgManageHome from './components/EmgManageHome';
import ShowFamEmg from './components/Family/ShowFamEmg';
import ShowFam from './components/Family/ShowFam';
import ManageFam from './screens/Emergency/ManageEmg/ManageFam';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Activity" component={HomeScreen}
            options={{ headerTitleAlign: 'center', headerShown: true }} />
          <Stack.Screen name="Running" component={Running}
            options={{ headerTitleAlign: 'center' }} />
          <Stack.Screen name="EmgPerson" component={EmergancyPerson}
            options={{ headerTitleAlign: 'center', headerShown: true }} />
          <Stack.Screen name="Walking" component={Walking}
            options={{ headerTitleAlign: 'center', headerShown: true }} />
          <Stack.Screen name="Biking" component={Biking}
            options={{ headerTitleAlign: 'center', headerShown: true }} />
          <Stack.Screen name="EmergencyH" component={EmergencyH}
            options={{ headerTitleAlign: 'center', headerShown: true }} />
          <Stack.Screen name="ForMoresu" component={ForMoresu}
            options={{ headerTitleAlign: 'center', headerShown: true }} />
          <Stack.Screen name="EmgManageHome" component={EmgManageHome}
            options={{ headerTitleAlign: 'center', headerShown: true }} />
          <Stack.Screen name="ShowFamEmg" component={ShowFamEmg}
            options={{ headerTitleAlign: 'center', headerShown: true }} />
          <Stack.Screen name="ShowFam" component={ShowFam}
            options={{ headerTitleAlign: 'center', headerShown: true }} />
          <Stack.Screen name="ManageFam" component={ManageFam}
            options={{ headerTitleAlign: 'center', headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}


