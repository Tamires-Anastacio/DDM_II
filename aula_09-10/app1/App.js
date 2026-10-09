import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text</Text>

      <ScrollView style={styles.src}>
        <Text>Conteúdo da rolagem</Text>
        <Text>Mais conteúdo</Text>
        <Text>Outro texto</Text>
      </ScrollView>

      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  src: {
    backgroundColor: '#df9999',
    maxHeight: '20%',
    width: '80%',
  },
});