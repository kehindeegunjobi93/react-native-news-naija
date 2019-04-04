import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppName = () => {
return (
    <View style={styles.Background}>
    <Text style={styles.Header}>News Naija</Text>
    </View>
)

}


const styles = StyleSheet.create({
    Header: { 
      alignSelf: 'center',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold'
    },
    Background: {
      backgroundColor: 'green',
      padding: 10
    }
})

export default AppName;