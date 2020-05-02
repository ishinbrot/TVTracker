import React from 'react';
import { StyleSheet, ScrollView, FlatList, View, TouchableHighlight, Button } from 'react-native'
import { Divider, Text, Checkbox } from 'react-native-paper';
import Swipeable from 'react-native-swipeable-row';



const swipeableText = [
    <TouchableHighlight><Text>DELETING</Text></TouchableHighlight>,
    <TouchableHighlight><Text>DELETING</Text></TouchableHighlight>
];
const ListItem = (props) => (

    <View style={styles.item}  key={props.id}>
        <Divider />
        <Swipeable leftContent={swipeableText} rightButtons={swipeableText}>
            <Text style={styles.itemText}>{props.showName}</Text>
            <Checkbox onPress={() => props.check(props.showName, props.watched, props.id)} status={props.watched ? 'checked' : 'unchecked'} />

        </Swipeable >
    </View>
)

const styles = StyleSheet.create({

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

export default ListItem;