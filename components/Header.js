import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Header = ({ header, showForm }) => {
	return (
		<View style={style.header}>
			<Text style={style.headerSize}>
				{header} <Button title="Add" onPress={showForm} />{" "}
			</Text>
		</View>
	);
};

const style = StyleSheet.create({
	header: {
		// flex: 1,
		// flexDirection: "row",
		// justifyContent: "space-around",
		// alignItems: "flex-start",
		marginTop: 30,
		borderColor: "red",
		borderWidth: 2,
	},
	headerSize: {
		fontSize: 25,
		fontWeight: "bold",
	},
});

export default Header;
