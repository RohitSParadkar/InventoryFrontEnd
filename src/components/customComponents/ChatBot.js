import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [data, setData] = useState([]);
  const apiKey = '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';
  const apiUrl =
    'https://api.openai.com/v1/engines/text-devinci-002/completions';
  const [textInput, setTextInput] = useState('');

  const handleSend = async () => {
    try {
      const prompt = textInput;
      const response = await axios.post(
        apiUrl,
        {
          prompt: prompt,
          max_tokens: 1024,
          temperature: 0.5,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        },
      );

      const text = response.data.choices[0].text;
      setData([
        ...data,
        {type: 'user', text: textInput},
        {type: 'bot', text: text},
      ]);
      setTextInput('');
    } catch (error) {
      console.error('Error sending request:', error.message);
      console.error('Error details:', error);
    }
  };

  return (
    <View style={styles.chatContainer}>
      <Text>ChatBot</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', padding: 10}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: item.type === 'user' ? 'green' : 'red',
              }}>
              {item.type === 'user' ? 'Ninza' : 'Bot'}
            </Text>
            <Text style={styles.bot}>{item.text}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={text => setTextInput(text)}
        placeholder="Ask me"
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    marginTop: 3,
  },
  body: {
    backgroundColor: '#ffffff',
    width: '102%',
    margin: 10,
  },
  bot: {
    fontSize: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    width: '90%',
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'blue',
    width: '90%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
