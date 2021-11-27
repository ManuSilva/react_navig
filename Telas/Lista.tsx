import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useQuery } from "react-query";
import { useStoreState} from "easy-peasy";

export function Pokemon({ obj }) {

	const cor = useStoreState((state) => state.tipo.mode.cor);
	const styles_item = StyleSheet.create({
		item: {
			flexDirection: 'row',
			justifyContent: 'center',
			flexWrap: 'wrap',
			padding: 10,
			margin: 2,
			borderColor: '#2a4944',
			borderWidth: 1,
			backgroundColor: cor,
		},
	});
	return (
		<View style={styles_item.item}>
			<Text> {obj.pokemon.name[0].toUpperCase() + obj.pokemon.name.substring(1)}</Text>
		</View>
	);
}

//------------- Segmento da tela com o ScrollView  ---------------------//
export function Tela_Scrow() {


	const get_url = useStoreState((state) => state.tipo.mode.url);
	const url = "https://pokeapi.co/api/v2/type/" + get_url;

	const [currentPage, setCurrentPage] = useState(url);

	const { isLoading, error, data } = useQuery(currentPage, () =>
		fetch(currentPage).then((res) => res.json())
	);

	if (isLoading) {
		return (
			<View style={styles.container}>
				<Text>Carregando...</Text>
			</View>
		);
	}

	if (error) {
		return (
			<View style={styles.container}>
				<Text>Erro ao carregar os dados...</Text>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.container_list}>

				<FlatList
					data={data.pokemon}
					renderItem={({ item }) => <Pokemon obj={item} />}
					keyExtractor={(item) => item.name}
					extraData={currentPage}
				/>
			</View>
			<StatusBar style="auto" />
		</View>
	);


}

// --------------------------------------------------------------------//
//                            STYLES
// --------------------------------------------------------------------//

const styles = StyleSheet.create({

	container: {
		flex: 1,
		alignContent: 'center',
		backgroundColor: '#ffffff',
		padding: 20,
	},
	container_list: {
		flex: 1,
		flexDirection: 'column',
		padding: 0,
	}
});

