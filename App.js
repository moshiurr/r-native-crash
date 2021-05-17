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
const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
}

//addTask
const addTask = task => {
		const newTask = { ...task, id: idCounter };

		setIdCounter(idCounter + 1);
		setTasks([...tasks, newTask]);
	};


	return (
		<View style={styles.container}>
			<Header header={"Task Tracker"} showForm={openForm} openform={formOpen} style={styles.header}/>
      {formOpen && <AddTask onSave={addTask}/>}
			{tasks.length < 1 ? <Text> No task to track</Text> : <Tasks tasks={tasks} onDelete={deleteTask} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: "center",
    // borderColor: "blue",
		// borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
	},
  header: {
    marginBottom: 10,
  }
});
