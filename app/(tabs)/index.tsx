import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weclome to Table Top Beyond</Text>
      </View>  

      <Link href="/CharacterCreator" style={styles.button}>
        Create Character 
      </Link>
      <Link href="/CharacterLoader" style={styles.button}>
        Load Character
      </Link>
      <Link href="/GMtools" style={styles.button}>
        Game Master Tools
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
