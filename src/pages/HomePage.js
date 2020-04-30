import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, Image } from 'react-native'

import axios from 'axios'
import Card from '../components/Card'

const HomePage = ({navigation}) => {

  const [state, setState] = useState({
    data: [],
    page: 0,
    refreshing: false,
    netWorkErr: false
  })

  useEffect(()=>{
    if(!state.page && !state.refreshing && !state.netWorkErr){
      getData()
    }
  })

  const toDetail = data =>{
    navigation.navigate('DetailPage',{data: data})
  }

  const getData = ()=>{
    if(!state.refreshing){
      setState({
        ...state,
        refreshing: true
      })
      axios.get('https://rickandmortyapi.com/api/character', {
          params: {
            page: state.page + 1
          }
        }).then( res => {
          setState({
            ...state,
            data: state.data.concat(res.data.results),
            page: state.page + 1,
            refreshing: false,
            netWorkErr: false
          })
        }).catch( err => {
          setState({
            ...state,
            refreshing: false,
            netWorkErr: true
          })
          console.log(err)
        })
    }
  }

  const refreshData = () =>{
    setState({
      ...state,
      data: [],
      page: 0
    })
  }

  const renderFooter = ()=>{
    if(state.refreshing){
      return(
        <View>
          <Text style={{alignSelf: 'center', marginVertical: 70}}>Loading....</Text>
        </View>
      )
    }else{
      return null
    }
  }

  return (
    <View>
      <FlatList 
        data={state.data}
        renderItem={
            ({item, index}) => <Card data={item} index={index} key={item.id} onPress={data => toDetail(data)}/>
        }
        keyExtractor={ (item, index) => index.toString() }
        onEndReached={()=>getData()}
        ListFooterComponent={renderFooter}
        refreshing={state.refreshing}
        onRefresh={()=> refreshData()}/>
    </View>
  );
}

export default HomePage