import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';


function Logo() {
  return (
    <Image
      source={require('./assets/logo.png')} 
    />
  )
}

function Onboarding1({navigation}) {
  // const navigation = useNavigation();
  return (
    <View style={styles1.container}>
      <View style={{margin:10}}>
        <Logo></Logo>
      </View>
      
      {/* <View style={styles.imageContainer}>
        <ImageBackground 
          source={require("./assets/on1.png")}
          resizeMode="contain">
          <View style={{height:'100%',width:'100%'}} />
        </ImageBackground>
      </View> */}

      <View >
        <Image
        source={require('./assets/on1.png')} 
        />
      </View>
      
      <View style={styles1.textContainer}>
        <Text style={styles1.headText}>Welcome RunFri</Text>
        <Text style={styles1.normalText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
        </Text>

        <View style={styles1.buttonArea}>
          <TouchableOpacity style={styles1.customBtn} onPress={() => navigation.navigate('Page 2')}>
            <Text style={{color:'white'}}>Next</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{width:100}} onPress={() => { }}>
            <Text style={{color:'#6871BC'}}>Skip</Text>
          </TouchableOpacity>
        </View>

        
      </View>

    </View>
  )
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    backgroundColor: '#000A3B'
  },

  // imageContainer: {
  //   width: '100%',
  //   height: '30%'
  // }

  textContainer: {
    width: '90%',
    height: '30%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginTop: 35,
    marginBottom: 45,
    padding: 20,
    alignItems : 'center'
  },

  headText: {
    // marginTop: '10%',
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 700,
    color: '#6871BC'
  },

  normalText: {
    fontSize: 14, 
    color: '#756F6F',
    marginBottom: 10,
    textAlign: 'center'
    // marginTop: 'auto', 
    // marginBottom: 0
  },

  buttonArea: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  customBtn: {
    backgroundColor: '#00ACA1',
    width: 150,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 'auto',
    // marginBottom: 30,
  }

});


function HomeScreen({navigation}) {

  return (
    <View style={styles2.container}>
      <View style={styles2.top}>
        <View style={styles2.elip}>
          <Image source={require('./assets/on3.png')}
          style={{ width: '90%', height: '90%', resizeMode: 'stretch'}} />
        </View>
      </View>
      <View style={styles2.panel}>
        <Text style={styles2.headText}>Fitness <Text style={{ color: '#57B97D' }}>stats</Text></Text>
        <Text style={{fontSize: 14, color: '#756F6F', marginTop: 'auto', marginBottom: 0}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ipsum
        </Text>
        <TouchableOpacity style={styles2.customBtn} onPress={() => navigation.navigate("Page 3")}>
          <Text style={styles2.customBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles2.pagination}>
        <View style={styles2.dotN}>
          <View style={styles2.dotT}>
            <View style={styles2.dotS}/>
          </View>
        </View>
        <View style={styles2.dot}></View>
        <View style={styles2.dot}></View>
        <View style={styles2.dot}></View>
      </View>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: { 
    width: '100%',
    height: '100%',
    backgroundColor: '#DADADA',
    alignItems: 'center',
  },

  top: {
    width: '100%',
    height: '50%',
    backgroundColor: '#43C3B3',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },

  elip: {
    backgroundColor: '#C9C2FB',
    width: Dimensions.get('window').width*0.7,
    height: Dimensions.get('window').width*0.7,
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  panel: {
    width: 320,
    height: 336,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 105,
    marginTop: '85%',
    paddingLeft: 29,
    paddingRight: 29,
    zIndex: 999,
    flex: 1,
    position: 'relative',
    alignItems: 'center',
  },

  headText: {
    marginTop: '10%',
    fontSize: 25,
    fontWeight: 700,
  },

  customBtn: {
    backgroundColor: '#0E1E22',
    width: 250,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 30,
  },

  customBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 600,
  },

  pagination: {
    flexDirection: 'row',
    bottom: 50,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#666666',
    marginLeft: 5,
    marginRight: 5,
  },

  dotS: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#252529',
  },

  dotN: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#252529',
    marginRight: 2.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dotT: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
  }
}) 

function Screen3 () {
  const navigation = useNavigation();
    return (
      <View style={{backgroundColor: '#ff9d4a', alignItems: 'center', justifyContent: 'center' }}>
      <View style={{width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.35, alignItems: 'center', justifyContent: 'center' }}></View>
      <View style={{width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.3}}>
      <Image style={{
        width: Dimensions.get('window').width,
        height: '100%'
        }} source={require('./assets/on4.png')} />
      </View>
      <View style={{padding: 20, width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.35, alignItems: 'left',justifyContent: 'center', flexDirection: 'row',}}>
          <View style={{flex: 3, justifyContent: 'center', }}>
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold', marginBottom: 20}}>Run together</Text>
  
            <Text style={{ fontSize: 14, color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta ipsum</Text>
          </View>
          <View style={{flex: 1, paddingTop: 50, alignItems: 'flex-end'}}>
            <TouchableOpacity onPress={() =>
              navigation.navigate('Screen4', {name: 'Jane'})}>
                <Image style={{width: 50, height: 50}} source={require('./assets/next-icon.png')}/>
            </TouchableOpacity>
          </View>
      </View>
      </View>
    );
  };



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Page 1" component={Onboarding1} options={{headerShown: false}} />
        <Stack.Screen name="Page 2" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Page 3" component={Screen3} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

