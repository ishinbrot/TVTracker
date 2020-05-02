// src/screens/Home.js

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import ShowList from '../components/ShowList';
import ModalPrompt from '../components/ModalPrompt';
import {addShowToList, markShowAsWatched} from '../actions/ShowActions'
import { FAB } from 'react-native-paper';


function Home({ navigation }) {

  const [isPromptOpen, setShowPrompt] = useState(false);
 // const [showList, setShowList] = useState([]);
  const dispatch = useDispatch();

  const showList = useSelector(state => state);
  const AddShow = () => {
    console.log('in here');
    setShowPrompt(true);
    //   navigation.navigate('AddShow', { name: 'Add Show' })
  }
  const SaveShow = (showName) => {
    console.log('Show added ' + showName);
    dispatch(addShowToList(showName, showList.length));
    setShowPrompt(false);
    
    // navigation.navigate('AddShow', { name: 'Add Show' })
  }
  const deleteShow = (id) => {
    console.log('deleting')
    dispatch(deleteShow(id));
  }
  const check = (showName, watched, index) => {
    dispatch(markShowAsWatched(showName, watched, index));

  }
  const onClose = () => {
    setShowPrompt(false);
    console.log('Canceled adding show');
  }
  return (
    <View style={[styles.container, isPromptOpen ? { backgroundColor: 'rgba(0,0,0,0.5)' } : '']}>

      <ShowList shows={showList} check={check} />
      <ModalPrompt show={isPromptOpen} hint="Please enter a name of a show" save={SaveShow} close={onClose} />

      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => AddShow()}
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
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
  },
})

export default Home

// src/screens/Detail.js