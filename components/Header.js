import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Header = ({ header, showForm }) => {
	return (
		<View style={style.header}>
			<Text style={style.headerSize}>{header}</Text>
			<Button title="Add" onPress={showForm} color="black" />
		</View>
	);
};

const style = StyleSheet.create({
	header: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: 30,
		// borderColor: "red",
		// borderWidth: 2,
		alignSelf: "stretch", //this makes the container take the whole width of the screen
		marginBottom: 20,
	},
	headerSize: {
		fontSize: 40,
		fontWeight: "bold",
	},
});

export default Header;
