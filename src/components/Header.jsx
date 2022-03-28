import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const containerStyle = {
    backgroundColor: '#2A67AD',
    alignItems: 'center'
}

const titleStyle = {
    fontSize: 30,
    color: '#FFF',
    padding: 10
}

function Header({title}){
    return(
        <View style = {style.container}>
            <Text style={style.title}>{title}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#2A67AD',
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 30,
        color: '#FFF',
        padding: 10
    }
});

export default Header;