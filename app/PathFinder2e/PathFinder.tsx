import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function PathfinderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PathFinder Page</Text>
            <Link href="/PathFinder2e/PFCharacterCreator" style={styles.button}>
              Character Creator
            </Link>
            <Link href="/PathFinder2e/PFCharacterLoader" style={styles.button}>
              Saved Characters
            </Link>
            <Link href="/PathFinder2e/PFGMtools" style={styles.button}>
              Game Master Tools
            </Link>
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
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    backgroundColor: '#7393B3',
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
});
