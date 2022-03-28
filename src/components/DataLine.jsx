import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DataLine({label, data}){
    return(
        <View style={style.line}>
            <Text>{label}</Text>
            <Text>{data}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    line: {
      paddingTop: 3,
      paddingBottom: 3,
      borderWidth: 1,
      borderColor: '#c5c5c5',
    }
  });

export default DataLine;