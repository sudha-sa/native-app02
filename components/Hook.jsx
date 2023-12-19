import { Button, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const hook = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.warn("Hi Medidek")
    },[])
  return (
    <View>
      <Text>hook</Text>
      <Button title='updatedCount' onPress={()=>setCount(2)}/>
    </View>
  )
}

export default hook
