import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const Task = ({ task, onDelete }) => {
	return (
		<TouchableOpacity>
			<View style={style.container}>
				<View>
					<Text>{task.title}</Text>
					<Text>{task.time}</Text>
				</View>
				<Button title="Delete" color="red" onPress={() => onDelete(task.id)} />
			</View>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	container: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-evenly",
		backgroundColor: "#f4f4f4",
		margin: 5,
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
});

export default Task;
