import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Silvinha Health APP</Text>
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
  }  
});
