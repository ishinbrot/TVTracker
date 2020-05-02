// src/screens/Home.js

import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'



function ShowOverview() {
  const [isPromptOpen, setShowPrompt] = useState(false);
  const [showList, setShowList] = useState([]);
  return (
    <View style={[styles.container, isPromptOpen ? { backgroundColor: 'rgba(0,0,0,0.5)' } : '']}>

    <ShowList shows={showList} check={check} />
    <ModalPrompt show={isPromptOpen} hint="Please enter a name of a show" save={SaveShow} close={onClose} />

    <FAB
      style={styles.fab}
      small
      icon="plus"
      onPress={() => AddSeason()}
    />

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default ShowOverview
