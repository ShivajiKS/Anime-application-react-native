import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimeHome from '../animeHome';
import AnimeInfo from '../animeInfo';
const Stack = createNativeStackNavigator();

export function MainRoutingStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={AnimeHome} />
            <Stack.Screen name="AnimeInfo" component={AnimeInfo} options={{ headerShown: true, title: "" }} />
        </Stack.Navigator>
    );
}
