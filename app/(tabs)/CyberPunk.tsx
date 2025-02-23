import { Text, View, StyleSheet } from 'react-native';
import { Link } from "expo-router"; 
export default function CyperPunkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CyberPunk Page</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
