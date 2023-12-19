import {
    Text,
    View,
    Button
} from 'react-native';

let data = 60;
const fruit = (val) =>{
    data = 40;
    console.warn(data)
}
const UserPro = () => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Company Name: Medidek</Text>
            <Text style={{ fontSize: 15 }}>{data}</Text>
            <Button title='Press me' onPress={fruit()} color={'red'}/>
            <Button title='Press me' onPress={()=>fruit("Hi siya")} color={'red'}/>
        </View>
    )
}


export default UserPro;