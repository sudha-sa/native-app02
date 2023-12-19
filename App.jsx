
import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import CompanyData from "./components/Companydata"
import State from './components/State';
import Flatlist from './components/Flatlist';
import Image from "./components/Image"
import KeyBoardavoiding from './components/Keyboardavoiding'
import Modal from "./components/Modal"
import Hook from './components/Hook'

// const name = 'siya'
function fruit() {
  return 'apple';
}

const App = () => {
  return (
    <ScrollView>
      <View>
        <Text style={{ fontSize: 20 }}>hello i am Here</Text>
        {/* <Text>{name}</Text> */}
        <Text>{fruit()}</Text>
        <Button title='press something here'></Button>
        <Button title='press here too'></Button>
        <UserData />
        <CompanyData />
        <State />
        <Flatlist />
        <Image />
        <KeyBoardavoiding />
        <Modal/>
        <Hook/>
      </View>
    </ScrollView>
  )
}

const UserData = () => {
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Name: Siya</Text>
      <Text style={{ fontSize: 15 }}>Age:22</Text>

    </View>
  )
}

export default App;
