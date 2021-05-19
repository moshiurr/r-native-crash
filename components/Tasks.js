import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Task from "./Task"


const Tasks = ({ tasks, onDelete }) => {
	return (
		<View style={style.container}>
			{tasks.map(task => (
				<Task key={task.id} id={task.id} title={task.title} time={task.time} onDelete={onDelete} />
			))}
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "stretch",
		// alignItems: "center",
	},
});

export default Tasks;
