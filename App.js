import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from './components/SplashScreen';
import Login from './Screens/Login';
import Navigation from './Navigator/Navigation';

export default function App() {
  return (
   <Navigation/>
  );
}

