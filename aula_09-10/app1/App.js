import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, ScrollView, TextInput, Button, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Nosso app</Text>

      <ScrollView style={styles.src}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since 1966, when designers at Letraset and James Mosley, the
          librarian at St Bride Printing Library in London, took a 1914
          Cicero translation and scrambled it to make dummy text for
          Letraset's Body Type sheets. It has survived not only many
          decades, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised thanks to these sheets
          and more recently with desktop publishing software like Aldus
          PageMaker and Microsoft Word including versions of Lorem Ipsum.
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </Text>
      </ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Teste"
      />

      <Button
        title="Botão"
        onPress={() => alert('Botão pressionado!')}
      />

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  src: {
    backgroundColor: '#df9999',
    maxHeight: '20%',
    width: '100%',
    marginVertical: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});