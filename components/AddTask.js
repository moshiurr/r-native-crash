import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const AddTask = ({onSave}) => {

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const onAdd = () => {

    if (!title || !time) {
			alert("Please insert valid input");
			return;
		}

    onSave({id: 1, title: title, time: time});
    setTitle("")
    setTime("")
  };

  return (
    <View style={styles.container}> 
      <View>
        <TextInput placeholder="Task Title" value={title} style={styles.input} onChange={ e => setTitle(e.target.value)}/>
        <TextInput placeholder="Task Time" value={time} style={styles.input} onChange={ e => setTime(e.target.value)}/>
      </View>
      <View>
        <Button title="Save" color="green" onPress={onAdd} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
  },
  input: {
    padding: 5,
    marginBottom: 10,
  }
})

export default AddTask;
