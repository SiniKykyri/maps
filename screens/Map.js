import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

export default function Map(props){

   /* const getUserPosition = async () => {
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

     useEffect(() => {
        getUserPosition();
     }, []);
    

    const[location, setLocation] = useState({
        latitude: 65.0800,
        longitude: 25.4800,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
*/
    return (
        <MapView
        style={styles.map}
        region={props.location}
        mapType={props.mapType}
        />
    )
}

const styles = StyleSheet.create({
    map:{
        height: '100%',
        width: '100%'
    }
});