import { StatusBar } from 'expo-status-bar';
import { Center, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <NativeBaseProvider>
        <Center>
          <Text>Hello Redux</Text>
        </Center>
      </NativeBaseProvider>
  );
}


