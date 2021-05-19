import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const Header = ({ header, showForm, openform }) => {
	return (
		<View style={style.header}>
			<Text style={style.headerSize}>
				{header}
			</Text>
      <Button title={openform ? "Close" : "Add"} color={openform ? "black" : "skyblue"} onPress={showForm} />
		</View>
	);
};

const style = StyleSheet.create({
	header: {
		// flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
    // alignSelf: "streatch",
		// alignItems: "flex-start",
		marginTop: 40,
		// borderColor: "red",
		// borderWidth: 2,
    
    marginBottom: 10,
	},
	headerSize: {
		fontSize: 40,
		fontWeight: "bold",
	},
});

export default Header;
