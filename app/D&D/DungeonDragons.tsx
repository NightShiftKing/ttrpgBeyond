import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function DungeonDragonScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dungeons and Dragons Page</Text>
            <Link href="/D&D/D&DCharacterCreator" style={styles.button}>
              Character Creator
            </Link>
            <Link href="/D&D/D&DCharacterLoader" style={styles.button}>
              Saved Characters
            </Link>
            <Link href="/D&D/D&DGMtools" style={styles.button}>
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
