import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
  return (
  <View style={styles.container}>
    <Text style= {styles.H1}>TOP 10 Xvideos TERROR</Text>
    <View style={styles.contentContainer}>

        <Image source= {require('./assets/images/A-mae.png')} style={styles.image}/>
        <Image source= {require('./assets/images/bruxa.png')} style={styles.image}/>
        <Image source= {require('./assets/images/corra.png')} style={styles.image}/>
        <Image source= {require('./assets/images/grave.png')} style={styles.image}/>
            </View>
        <View style={styles.contentContainer}>
        <Image source= {require('./assets/images/sorria.png')} style={styles.image}/>
        <Image source= {require('./assets/images/telefone.png')} style={styles.image}/>
        <Image source= {require('./assets/images/nao-olhe.png')} style={styles.image}/>
        <Image source= {require('./assets/images/hereditario.png')} style={styles.image}/>
        <Image source= {require('./assets/images/inoscente.png')} style={styles.image}/>
          </View>
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#444',
    
  },
  image:{
    width: 300,
    height: 500,
    borderRadius: 30,
    boorder: '3px solid black',
    margin: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',

  },
  H1: {
    color:'red',
    fontSize: 45,
    textAlign:'center',
    fontweight:'900',
    justifyContent:"center",
  },
});