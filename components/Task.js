import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const Task = ({id, title, time, onDelete}) => {
  return (
    <View style={style.container}>
      <View>
        <Text> {title} </Text>
        <Text> {time} </Text>
      </View>
     <View>
        <Button title="delete" color="red" onPress={() => {onDelete(id)}}/>
     </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  }
})

export default Task;