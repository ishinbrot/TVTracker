import React, { useEffect } from 'react';
import { StyleSheet, ScrollView, FlatList, View, TouchableOpacity } from 'react-native'
import { Divider, Text, Checkbox } from 'react-native-paper';
import Swipeout from 'react-native-swipeout';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListItem from './ListItem';

const ShowList = (props) => (


    <ScrollView style={styles.list}>
  
        {props.shows.map((el, index) => (
            <ListItem id={el.id} check={props.check} watched={el.watched} showName={el.value}/>
          
          
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    list: {
        textAlign: "center",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
    },
    item: {
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 10,
        flexDirection: 'row'
    },
    itemText: {
        fontSize: 22
    }

})
export default ShowList;