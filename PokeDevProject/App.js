import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/Components/Header/Header';
import { ContainerApp } from './Style';
import { Home } from './src/Screen/Home';

export default function App() {
  return (
    <ContainerApp>
      
      <Header/>

      <Home/>

      <StatusBar
      style="auto" 
      backgroundColor="#b81414"
      translucent={true}
      />

    </ContainerApp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
