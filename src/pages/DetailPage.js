import React from 'react'
import { View, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import ItemRowFull from '../components/ItemRowFull';
import ItemRow from '../components/ItemRow';

const DetailPage = ({route}) => {
  const data = route.params.data

  const getDate = str => {
    return str.substring(0, 10)
  }

  const totalEpisode = data =>{
    return `${data.length} Episode`
  }

  return (
    <ScrollView>
      <Image source={{ uri: data.image }} alt="Poster" style={{width: '100%', height: 400}}/>

      <View style={{marginVertical: 16, marginHorizontal: 16}}>

        <ItemRow label={{left: 'Status', right: 'Species'}}
                  value={{left: data.status, right: data.species}}/>
        <ItemRow label={{left: 'Gender', right: ''}}
                  value={{left: data.gender, right: ''}}/>

        <View style={{marginTop: 8}}>
          <ItemRowFull label="Origin" value={data.origin.name}/>
          <ItemRowFull label="Location" value={data.location.name}/>
          <ItemRowFull label="Created" value={getDate(data.created)}/>
          <ItemRowFull label="Total Eps" value={totalEpisode(data.episode)}/>
        </View>

      </View>
    </ScrollView>
  );
}

export default DetailPage