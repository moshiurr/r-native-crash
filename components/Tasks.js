import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Task from "./Task";


const Tasks = ({ tasks, onDelete }) => {
	return (
<<<<<<< HEAD
		<ScrollView>
=======
		<View style={style.container}>
>>>>>>> d6c46494d634a42537ccdb5a919c1b1a6752b107
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

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "stretch",
		// alignItems: "center",
	},
});

export default Tasks;
