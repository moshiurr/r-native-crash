import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
	return (
		<ScrollView>
			{tasks.map(task => (
				<Task
					key={task.id}
					id={task.id}
					title={task.title}
					time={task.time}
					onDelete={onDelete}
				/>
			))}
		</ScrollView>
	);
};

export default Tasks;
