import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CreatePostScreen from "../components/screens/CreatePostScreen";
import FeedScreen from "../components/screens/FeedScreen";

const Stack = createNativeStackNavigator();
const Navigator= () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Feed" component={FeedScreen} />
                <Stack.Screen name="Create Post" component={CreatePostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
