import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CreatePostScreen from "../components/screens/CreatePostScreen";
import FeedScreen from "../components/screens/FeedScreen";
import ProfileScreen from "../components/screens/ProfileScreen";
import {FontAwesome} from "@expo/vector-icons";
import UpdateProfileScreen from "../components/screens/UpdateProfileScreen";

const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Feed"
                    component={FeedScreen}
                    options={({navigation}) => ({
                        headerRight: () => (
                            <FontAwesome
                                onPress={() => navigation.navigate("Profile")}
                                name="user"
                                size={24}
                                color="gray"
                            />
                        ),
                    })}
                />
                <Stack.Screen name="Create Post" component={CreatePostScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
                <Stack.Screen name="Update Profile" component={UpdateProfileScreen}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator
