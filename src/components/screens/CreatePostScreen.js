import {View, Text, StyleSheet, Image, TextInput, Button, Platform, KeyboardAvoidingView} from "react-native";
import {useState} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {Entypo} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import {useNavigation} from "@react-navigation/native";


const user = {
    id: "u1",
    image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
    name: "Vadim Savin",
};


const CreatePostScreen = () => {
    // const insets = useSafeAreaInsets();
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    const onPost = () => {
        console.warn("Posting: ", description);
        setDescription("");
        navigation.goBack()
    };
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={[styles.container, {marginBottom: 10}]}
            contentContainerStyle={{flex: 1}}
            keyboardVerticalOffset={150}>

            <View style={styles.header}>
                <Image source={{uri: user.image}} style={styles.profileImage}/>
                <Text style={styles.name}>{user.name}</Text>
                <Entypo
                    onPress={pickImage}
                    name="images"
                    size={24}
                    color="limegreen"
                    style={styles.icon}
                />
            </View>

            <TextInput
                placeholder="What's on your mind?"
                value={description}
                onChangeText={setDescription}
                multiline/>
            <Image source={{uri: image}} style={styles.image}/>

            <View style={styles.buttonContainer}>
                <Button onPress={onPost} title="Post" disabled={!description}/>
            </View>

        </KeyboardAvoidingView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
        paddingTop: 30,
        marginTop: 50,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginRight: 10,
    },
    name: {
        fontWeight: "500",
    },
    image: {
        width: "50%",
        aspectRatio: 4 / 3,
        alignSelf: 'center'
    },
    buttonContainer: {
        marginTop: 'auto'
    },
    icon: {
        marginLeft: 'auto'
    },

});

export default CreatePostScreen;
