import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'

import axios from 'axios'
import Card from '../components/Card'

const HomePage = ({navigation}) => {

  const [state, setState] = useState({
    data: null
  })

  useEffect(()=>{
    if(!state.data){
      axios.get('https://rickandmortyapi.com/api/character', {
        params: {
          page: 1
        }
      }).then( res => {
        setState({
          data: res.data.results
        })
      }).catch( err => {
        console.log(err)
        alert('Ambil data bermasalah, pastikan internet aktif')
      })
      
    }
  })

  const toDetail = data =>{
    navigation.navigate('DetailPage',{data: data})
  }

  return (
    <View>
      <FlatList 
        data={state.data}
        renderItem={
            ({item, index}) => <Card data={item} index={index} key={item.id} onPress={data => toDetail(data)}/>
        }
        keyExtractor= { (item, index) => index.toString() }/>
    </View>
  );
}

export default HomePage