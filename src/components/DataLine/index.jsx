import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataLine = ({ label, data }) => (
  <View style={style.line}>
    <Text style={style.text}>{label}</Text>
    <Text style={style.text}>{data}</Text>
  </View>
);

const style = StyleSheet.create({
  line: {
    backgroundColor: '#E8EAFF',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#F5F5F5',
  },
  text: {
    color: '#212121',
  }
});

export default DataLine;
