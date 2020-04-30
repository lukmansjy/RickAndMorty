import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ItemRowFull = ({label, value}) => {
  return (
    <View style={styles.wrapperRow}>
        <View style={{flex: 2}}>
        <Text style={styles.txtLabel}>{label}</Text>
        </View>
        <View style={{flex: 8}}>
        <Text style={styles.txtValue}>{value}</Text>
        </View>
    </View>
  );
}


// Style
const styles = StyleSheet.create({
    wrapperRow: {
        flexDirection: 'row'
    },
    txtLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#424242'
    },
    txtValue: {
        fontSize: 16,
        color: '#424242'
    }
  })


export default ItemRowFull