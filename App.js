import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AnimeHome from './src/animeHome';
import AnimeInfo from './src/animeInfo';
import { MainRoutingStack } from './src/routing/stack';
export default function App() {
  return (
    <>
      <NavigationContainer>
        <MainRoutingStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

