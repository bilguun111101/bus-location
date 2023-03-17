import React, { useState } from 'react';
import auth from "@react-native-firebase/auth";
import { Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";

export const LogIn = () => {
  const { container, content, logo, input, button, text } = styles;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const signIn = async() => {
    try {
        await auth().signInWithEmailAndPassword(email, password)
    } catch (error) { console.log(error) }
  }
  return (
    <SafeAreaView style={container}>
      <View style={content}>
        <Image source={require("../../../assets/logo.png")} style={logo} />
        <View>
          <TextInput 
            style={{ ...input, marginBottom: 23 }}
            onChangeText={setEmail}
            value={email}
            placeholder="И-мэйл"
          />
          <TextInput
            style={{ ...input, marginBottom: 66 }}
            onChangeText={setPassword}
            value={password}
            placeholder="Нууц үг"
          />
        </View>
        <TouchableOpacity style={button} onPress={signIn}>
          <Text style={text}>Нэвтрэх</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 39,
    width: '100%',
  },
  logo: {
    width: 180,
    height: 53,
    marginBottom: 47,
  },
  input: {
    fontSize: 16,
    width: '100%',
    lineHeight: 19,
    borderRadius: 6,
    borderWidth: 0.8,
    fontWeight: '400',
    paddingVertical: 13,
    borderColor: '#CECCCC',
    paddingHorizontal: 19,
  },
  button: {
    width: '100%',
    borderRadius: 6,
    paddingVertical: 13,
    backgroundColor: '#000',
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    lineHeight: 19,
    fontWeight: '500',
    textAlign: 'center',
  }
})
