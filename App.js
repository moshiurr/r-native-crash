import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
export default function App() {
	const [tasks, setTasks] = useState([
		{
			id: 0,
			title: "Call Alif",
			time: "May 21st 9pm",
			reminder: true,
		},
		{
			id: 1,
			title: "Call Rahman",
			time: "May 19st 10pm",
			reminder: false,
		},
	]);

	// const [showForm, setShowForm] = useState(false);

	const [idCounter, setIdCounter] = useState(2);

	// open Form event
	const openForm = () => {
		console.log("button pressed");
	};

	//addTask event
	const addTask = task => {
		const newTask = { ...task, id: idCounter };

		setIdCounter(idCounter + 1);
		setTasks([...tasks, newTask]);
	};

	//delete task event
	const deleteTask = id => {
		console.log("delete", id);
		setTasks(tasks.filter(task => task.id !== id));
	};

	return (
		<View style={styles.container}>
			<Header header={"Task Tracker"} showForm={openForm} />
			<AddTask onAdd={addTask} />
			<Tasks tasks={tasks} onDelete={deleteTask} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		minHeight: 300,
		marginTop: 20,
		// margin: 5,
		// borderWidth: 1,
		// borderColor: "blue",
		// borderRadius: 5,
	},
});
