import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import Map from './screens/Map';
import * as Location from 'expo-location';
import MainAppBar from './components/MainAppBar';
import Settings from './screens/Settings';
import React, {useState} from 'react';
import { PaperProvider } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const settings = {
  backgroundColor: '#ffff'
}

const icons = {
  location_not_known: 'crosshairs-question',
  location_searching: 'crosshairs',
  location_found: 'crosshairs-gps'
}

export default function App() {

  const Stack = createStackNavigator();

  const [icon, setIcon] = useState(icons.location_not_known);
  const [location, setLocation] = useState({
        latitude: 65.0800,
        longitude: 25.4800,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
  })
  const [mapType, setMapType] = useState('standard')

  const getUserPosition = async () => {
    setIcon(icons.location_searching)
    let {status} = await Location.requestForegroundPermissionsAsync();
    try{
        if(status !== 'granted'){
            console.log('Permission to access location was denied');
            return;
        }
        const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
        setLocation({...location, "latitude": position.coords.latitude, "longitude": position.coords.longitude})
    }catch(error){
        console.log(error);
    }
 }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Map'
          screenOptions = {{header: (props) =>
          <MainAppBar {...props}
          backgroundColor={settings.backgroundColor}
          icon={icon}
          getUserPosition={getUserPosition}/>}}
          >
          <Stack.Screen name ='Map'>
            {() =>
            <Map location={location} mapType={mapType} />
            }
          </Stack.Screen>
          <Stack.Screen name='Settings'>
            {() =>
            <Settings mapType={mapType} setMapType={setMapType} backgroundColor={settings.backgroundColor}/>
            }
          </Stack.Screen>
          </Stack.Navigator>
          </NavigationContainer>
          </PaperProvider>
        
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
  },
});
