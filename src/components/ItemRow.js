import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ItemRow = ({label, value}) => {
  return (
    <View style={styles.wrapperRow}>
        <View style={styles.containerRowLeft}>
            <Text style={styles.txtLabel}>{label.left}</Text>
            <Text style={styles.txtValue}>{value.left}</Text>
        </View>
        <View style={styles.containerRowRight}>
            <Text style={styles.txtLabel}>{label.right}</Text>
            <Text style={styles.txtValue}>{value.right}</Text>
        </View>
    </View>
  );
}


// Style
const styles = StyleSheet.create({
    wrapperRow: {
        flexDirection: 'row'
    },
    containerRowLeft: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      marginRight: 28,
      marginBottom: 4
    },
    containerRowRight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginLeft: 28,
        marginBottom: 4
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

export default ItemRow