import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataLine = ({ label, data }) => (
  <View style={style.line}>
    <Text style={style.label}>{label}</Text>
    <Text style={style.text}>{data}</Text>
  </View>
);

const style = StyleSheet.create({
  line: {
    backgroundColor: '#EEE',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#F4F4F4',
  },
  label: {
    color: '#000',
    fontSize: 16,
    marginVertical: 5
  },
  text: {
    color: '#797979',
  }
});

export default DataLine;
