import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <view style={styles.titlebox}>
        <text style={StyleSheet.TITLETEXT}>Silvinha Health APP</text>
      </view>
    
      <StatusBar STYLE="auto" /> 
    <View>  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
