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
        <TextInput placeholder="Task Title" value={title} style={styles.input} onChangeText={ text => setTitle(text)}/>
        <TextInput placeholder="Task Time" value={time} style={styles.input} onChangeText={ text => setTime(text)}/>
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
		height: 40,
		minWidth: 400,
		padding: 10,
		marginBottom: 20,
	},

	btn: {
		alignSelf: "stretch",
	},
});


export default AddTask;
