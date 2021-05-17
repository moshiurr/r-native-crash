import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";

const AddTask = ({ onAdd }) => {
	const [title, setTitle] = useState("");
	const [time, setTime] = useState("");

	const onSubmit = e => {
		e.preventDefault();

		// if (!title || !time) {
		// 	alert("Please insert valid input");
		// 	return;
		// }

		onAdd({ title, time });

		setTitle("");
		setTime("");
	};

	return (
		<View style={style.container}>
			<TextInput
				placeholder="title"
				style={style.input}
				onChange={e => {
					setTitle(e.target.value);
				}}
			/>
			<TextInput
				placeholder="Time"
				style={style.input}
				onChange={e => {
					setTime(e.target.value);
				}}
			/>
			<View style={style.btn}>
				<Button title="Save" onPress={onSubmit} color="green" />
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		// flex: 1,
		// alignSelf: "stretch",
		justifyContent: "center",
		alignItems: "center",
		borderColor: "red",
		borderWidth: 2,
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
