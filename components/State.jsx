import react, { useState } from "react"
import {
    Text,
    View,
    Button,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

let data = "Siya";

const state = () => {
    const [sudha, setsudha] = useState('Mahi');

    function Myname() {
        setsudha('pari')
        data = "Sum";
    }
    return (
        <View style={[styles.container, styles.horizontal]}>
            <Text >{sudha}</Text>
            <Text >{data}</Text>
            <Button title="click me" onPress={Myname}></Button>

            <ActivityIndicator />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="small" color="#0000ff" />
            <ActivityIndicator size="large" color="#00ff00" />
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });

export default state;