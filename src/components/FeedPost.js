import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons,} from "@expo/vector-icons";
import LikeImage from './../../assets/images/like.png'
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const dummy_img =
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/user.png";
const FeedPost = ({post}) => {
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState(null);
    const navigation = useNavigation();

    return (
        <View style={styles.post}>

            <Pressable
                onPress={() => navigation.navigate("Profile", {id: post.User?.id})}
                style={styles.header}>
                <Image
                    source={{uri: dummy_img}}
                    style={styles.profileImage}/>
                <View>
                    <Text style={styles.name}>{post.User.name}</Text>
                    <Text style={styles.subtitle}>{post.createdAt}</Text>
                </View>
                <Entypo
                    name="dots-three-horizontal"
                    size={18}
                    color="gray"
                    style={styles.icon}/>
            </Pressable>

            {post.description && (
                <Text style={styles.description}>{post.description}</Text>
            )}
            {post.image && (
                <Image
                    source={{uri: post.image}}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}

            <View style={styles.footer}>
                <View style={styles.statsRow}>
                    <Image source={LikeImage} style={styles.likeIcon}/>
                    <Text style={styles.likedBy}>Elon Musk and {post.numberOfLikes} others</Text>
                    <Text style={styles.shares}>{post.numberOfShares} shares</Text>
                </View>

                <View style={styles.buttonsRow}>
                    <Pressable
                        onPress={() => setIsLiked(!isLiked)}
                        style={styles.iconButton}>
                        <AntDesign
                            name="like2"
                            size={18}
                            color={isLiked ? "royalblue" : "gray"}/>
                        <Text style={[
                            styles.iconButtonText,
                            {color: isLiked ? "royalblue" : "gray"},]}>Like
                        </Text>
                    </Pressable>
                    <View style={styles.iconButton}>
                        <FontAwesome5 name="comment-alt" size={16} color="gray"/>
                        <Text style={styles.iconButtonText}>Comment</Text>
                    </View>
                    <View style={styles.iconButton}>
                        <MaterialCommunityIcons
                            name="share-outline"
                            size={18}
                            color="gray"
                        />
                        <Text style={styles.iconButtonText}>Share</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        marginVertical: 5,
        width: "100%",
        backgroundColor: 'white',
    },
    header: {
        padding: 10,
        flexDirection: 'row',
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
    subtitle: {
        color: "gray",
    },
    icon: {
        marginLeft: "auto",
    },
    description: {
        lineHeight: 20,
        padding: 10,
        letterSpacing: 0.3,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
        marginTop: 10,
    },
    footer: {
        paddingHorizontal: 10,
    },
    statsRow: {
        flexDirection: "row",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 10,
        borderColor: "lightgray",
    },
    likeIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    likedBy: {
        color: "gray",
    },
    shares: {
        color: "gray",
        marginLeft: "auto",
    },
    buttonsRow: {
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    iconButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButtonText: {
        color: "gray",
        marginLeft: 5,
        fontWeight: "500",
    },
});
export default FeedPost


