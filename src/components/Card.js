import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

import ItemRow from './ItemRow'

const Card = ({data, onPress})=>{
    return(
        <TouchableOpacity onPress={()=>onPress(data)}>
            <View style={styles.cardWrapper}>
                <Image source={{ uri: data.image }} alt="Poster" style={styles.imgCard}/>
                <View style={styles.containerDetailCard}>
                    <Text style={styles.txtName}>{data.name}</Text>

                    <ItemRow label={{left: 'Status', right: 'Species'}}
                            value={{left: data.status, right: data.species}}/>
                    <ItemRow label={{left: 'Gender', right: ''}}
                            value={{left: data.gender, right: ''}}/>

                    <Text style={styles.txtDetail}>Origin {data.origin.name}, Location {data.location.name}.</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


// Style
const styles = StyleSheet.create({
    cardWrapper: {
        marginHorizontal: 16,
        marginVertical: 8,
        position: 'relative',
        borderWidth: .6,
        borderColor: '#b2b2b2',
        borderStyle: 'solid',
        borderRadius: 6, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4
    },
    imgCard: {
        width: '100%',
        height: 400,
        borderRadius: 6
    },
    containerDetailCard: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, .6)',
        width: '100%',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6
    },
    txtName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#424242',
        textAlign: 'center',
        marginBottom: 6,
        borderBottomColor: '#898989',
        borderBottomWidth: .7,
        paddingBottom: 2
    },
    txtDetail: {
        fontSize: 16,
        textAlign: 'center',
        color: '#424242',
        marginBottom: 4
    }
})


export default Card