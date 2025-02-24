import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weclome to Table Top Beyond</Text>
        <Text style={styles.text}>Pick a system!</Text>
      </View>  

      <Link href="/D&D/DungeonDragons" style={styles.button}>
        Dungeons and Dragons 5e
      </Link>
      <Link href="/CyberPunkRed/CyberPunk" style={styles.button}>
        CyberPunk Red
      </Link>
      <Link href="/PathFinder2e/PathFinder" style={styles.button}>
        PathFinder 2e
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',

  },
  header:{
    padding: 20,

  },
  title:{
    color: '#fff',
    fontSize: 40,

    padding: 20
  },
  text: {
    color: '#fff',
    fontSize: 20
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
