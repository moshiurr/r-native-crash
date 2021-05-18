import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ id, title, time, onDelete }) => {
	return (
		<TouchableOpacity style={style.container}>
			<View>
				<Text> {title} </Text>
				<Text> {time} </Text>
			</View>
			<View>
				<Button
					title="delete"
					color="red"
					onPress={() => {
						onDelete(id);
					}}
				/>
			</View>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
	},
});

export default Task;
