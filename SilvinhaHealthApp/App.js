import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Silvinha Health APP</Text>
      </View>

      <View> syle= {styles.content}
      <Text style={styles.subTitle}>calculadora de imc</Text> 
      <view>
     

    </view>
      
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

<View style={{margintop: 25 }}>
        <Text style={styles.label}>altura</Text>
        <TextInput
        style={styles.Input}
        placeholder='ex. 1.70'
        keyboardtype='numeric'
          />
        <Text style={styles.label}>altura</Text>
        <TextInput
        style={styles.Input}
        placeholder='ex. 1.70'
        keyboardtype='numeric'
          />
      </View>

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
  }
});
