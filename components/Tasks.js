import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tasks = ({ tasks }) => {
	return (
		<View>
			{tasks.map(task => (
				<Text key={task.id}>{task.title}</Text>
			))}
		</View>
	);
};

export default Tasks;
