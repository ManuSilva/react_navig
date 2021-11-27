import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Button, Provider as PaperProvider } from "react-native-paper";

import { routes } from "../Navigation";
import { useStoreActions } from "easy-peasy";



export function Tela_Home({ navigation }) {
	const changeType = useStoreActions((state) => state.tipo.toggle);


	const handleButtonPress_water = () => {
		changeType("water");
		navigation.navigate(routes.Lista)
	};

	const handleButtonPress_fire = () => {
		changeType("fire");
		navigation.navigate(routes.Lista)
	};

	const handleButtonPress_grass = () => {
		changeType("grass");
		navigation.navigate(routes.Lista)
	};

	return (

		<PaperProvider>
			<ScrollView style={styles.container}>
				<Button icon="fire" mode="contained" color="#e62e00" onPress={handleButtonPress_fire} style={styles.item}>Fogo</Button>
				<Button icon="water" mode="contained" color="#3366ff" onPress={handleButtonPress_water} style={styles.item}>Água</Button>
				<Button icon={require('../assets/grass.png')} mode="contained" color="#00cc00" onPress={handleButtonPress_grass} style={styles.item}>Grama</Button>
				<StatusBar style="auto" />
			</ScrollView>

		</PaperProvider >

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: '#FFFFFF',
		alignItens: "center",
		padding: 100,
	},
	item: {
		justifyContent: 'center',
		padding: 5,
		margin: 10,
	},


});

