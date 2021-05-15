import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

	const [idCounter, setIdCounter] = useState(1);

	// open Form event
	const openForm = () => {
		console.log("button pressed");
	};

	return (
		<View style={styles.container}>
			<Header header={"Task Tracker"} showForm={openForm} />
			<Tasks tasks={tasks} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
});
