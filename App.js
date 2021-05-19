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
			time: "May 19th 10pm",
			reminder: false,
		},
	]);

	const [formOpen, setFormOpen] = useState(false);

	const [idCounter, setIdCounter] = useState(2);

	// open Form event
	const openForm = () => {
		// console.log("button pressed");
		setFormOpen(!formOpen);
	};

	//delete event
	const deleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id));
	};

<<<<<<< HEAD
	//addTask
	const addTask = task => {
=======
	//addTask event
	const addTask = task => {

>>>>>>> d6c46494d634a42537ccdb5a919c1b1a6752b107
		const newTask = { ...task, id: idCounter };

		setIdCounter(idCounter + 1);
		setTasks([...tasks, newTask]);
	};

<<<<<<< HEAD
=======
  //delete task event
	const deleteTask = id => {
		console.log("delete", id);
		setTasks(tasks.filter(task => task.id !== id));
	};


>>>>>>> d6c46494d634a42537ccdb5a919c1b1a6752b107
	return (
		<View style={styles.container}>
			<Header
				header={"Task Tracker"}
				showForm={openForm}
				openform={formOpen}
				style={styles.header}
			/>
			{formOpen && <AddTask onSave={addTask} />}
			{tasks.length < 1 ? (
				<Text> No task to track</Text>
			) : (
				<Tasks tasks={tasks} onDelete={deleteTask} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		marginTop: 100,
		// justifyContent: "center",
		// alignItems: "center",
		// borderColor: "blue",
		// borderWidth: 2,
<<<<<<< HEAD
		paddingLeft: 20,
		paddingRight: 20,
	},
	header: {
		marginBottom: 10,
=======
    paddingLeft: 20,
    paddingRight: 20,
		//alignItems: "center",
		minHeight: 300,
		marginTop: 20,
		// margin: 5,
		// borderWidth: 1,
		// borderColor: "blue",
		// borderRadius: 5,

>>>>>>> d6c46494d634a42537ccdb5a919c1b1a6752b107
	},
});
