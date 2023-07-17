import { View, Text, StyleSheet, Image} from "react-native";

export default function UserScreen () {
    return (
        <View style={styles.container}>
           <Image
          style={{width: '100%', height: '100%'}}
          source={{uri:'https://wallpapercave.com/wp/wp3252661.jpg'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });