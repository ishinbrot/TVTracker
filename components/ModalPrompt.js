import React, { useState } from 'react';

import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const ModalPrompt = (props) => {
    const [textInput, setTextInput] = useState('');

    handleChangeTextInput = (text) => {
        setTextInput(text);
    }
    saveChanges = (textInput) => {
        setTextInput('');
        props.save(textInput);
    }
    cancelChanges = () => {
        setTextInput('');
        props.close();
    }
    return (

        <Modal visible={props.show} transparent={true} animationType={"fade"} onRequestClose={() => props.close()}>
            <View style={styles.modalView}>
                <TextInput style={styles.textInput} placeholder={props.hint} value={textInput} onChangeText={handleChangeTextInput} autoFocus={true} autoCapitalize="words" />
                <View style={styles.buttonSection}>
                    <View style={styles.customButton}>
                        <Button title="CANCEL" onPress={() => cancelChanges()} />
                    </View>
                    <View style={styles.customButton}>
                        <Button title="ADD" onPress={() => saveChanges(textInput)} />
                    </View>
                </View>
            </View>
        </Modal>

    )
};

const styles = StyleSheet.create({
    modalView: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modal: {
        backgroundColor: '#00000080',
        marginRight: 40,
        marginLeft: 40,
        flex: 1,
        marginTop: 22,

    },
    textInput: {
        color: "#FFFFFF"
    },
    buttonSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    customButton: {
        //  height: 40,
        padding: 20
    }
})

export default ModalPrompt;