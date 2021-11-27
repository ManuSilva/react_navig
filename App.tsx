import React from 'react';
import { QueryClient, QueryClientProvider} from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "./Navigation";

import { StoreProvider } from "easy-peasy";

import { store } from "./easy-peasy/store";
import { Tela_Home } from "./Telas/Home";
import { Tela_Scrow } from "./Telas/Lista";

// Create client
const queryClient = new QueryClient();

// Create Stack
const Stack = createNativeStackNavigator();


// --------------------------------------------------------------------//
//                            Executar APP
// --------------------------------------------------------------------//

export default function App() {
	return (
		<StoreProvider store={store}>
			<QueryClientProvider client={queryClient}>
				<NavigationContainer>
					<Stack.Navigator initialRouteName={routes.Home} screenOptions={{
						headerStyle: {
							backgroundColor: '#ff4d4d',
						},
						headerTintColor: '#fff',
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}>
						<Stack.Screen name={routes.Home} component={Tela_Home} />
						<Stack.Screen name={routes.Lista} component={Tela_Scrow} />
					</Stack.Navigator>
				</NavigationContainer>
			</QueryClientProvider>
		</StoreProvider>
	);
}

