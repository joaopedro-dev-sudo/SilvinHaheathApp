import { useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons"

export default function App() {
  const [height, setHeight] = useState(null);
  const [weight, setweight] = useState(null);
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("calcular");
  const [messageImc, setMessageImc] = useState("prencha o peso e a altura");

  function imcCalculator() {
    // (peso / (altura * altura))
    setImc((weight / (height * height)).toFixed(2))
  }
  function validateIMC() {
    if (weight != null && height != null)
      {
        Keyboard.dismiss();
        imcCalculator();
        setHeight(null);
        setweight(null);
        setTextButton("calcular novamente");
        setMessageImc("seu IMC é igual a:");
        return;
    }
    setImc(null);
    setTextButton("calcular");
    setMessageImc("prencha o peso e a altura")
  }
  
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Silvinha Health APP</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subTitle}>calculadora de imc</Text>

        <View>
          <Text style={styles.label}>altura</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height ?? ''}
            placeholder='ex. 1.70'
            keyboardtype='numeric'
          />
        </View>

        <View style={{ margintop: 25 }}>
          <Text style={styles.label}>altura</Text>
          <TextInput
            style={styles.input}
            onChangeText={setweight}
            value={weight ?? ''}
            placeholder='ex. 1.70'
            keyboardtype='numeric'
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => validateIMC()}>
          <Ionicons name={"calculator-sharp"} size={24} color="#edf2f4" />
          <Text style={styles.text}>{textButton}</Text>
        </TouchableOpacity>

        <View style={styles.imcContainer}>
          <Text style={styles.imctext}>{messageImc}</Text>
          <Text style={styles.imcResult}>{imc}</Text>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf2f4',
  },
  tittleBox: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 100,
    backgroundColor: '#ef233c',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  titleText: {
    color: '#edf2f4',
    fontsize: 28,
    fontweight: 'bold',
    marginbottom: 20,
  },
  content: {
    flex: 1,
    padding: 40,
    width: '100%',
    backgroundcolor: '#edf2f4',
  },
  subTitle: {
    textalingn: 'center',
    fontSize: 24,
    color: '#f233c',
    fontweight: 'bold',
    marginbottom: 40,
  },
  label: {
    color: '#000',
    fontSize: 18,
  },
  input: {
    height: 45,
    width: '100%',
    fontSize: 18,
    bordercolor: '#ef233c',
    borderWidth: 3,
    marginvertical: 5,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    flexdirection: 'row',
    justifyContent: 'center',
    alingnItems: 'center',
    backgroundColor: '#ef233c',
    borderradius: 15,
    margintop: 40,
    marginbottom: 10,
  },
  text: {
    color: '#edf2f4',
    fontSize: 24,
    fontweight: 'bold',
    marginleft: 5
  },
  imcContainercointainer:{
    flex: 1,
    alingnItems: 'center',
    justifycontent: 'center',
    width: '100%',
  },
  imctext: {
    fontSize: 18,
    color: '#ef233c',
    fontweight: 'bold'
  },
  imcResult: {
    fontSize: 48,
    color: '#ef233c',
    fontweight: 'bold'
  }
})
