import { Button } from "@ui-kitten/components"
import { StyleSheet, Image, View } from "react-native";

const StartPage = () => {
    const icon = require('../../assets/images/logo.png')
    return (
        <View style={styles.layout}>
            <Image style={styles.icon} source={icon}/>
           <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button style={styles.button}>Login</Button>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button style={styles.button}>Register</Button>
                </View>
            </View>
        </View>
    )

}

export default StartPage

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#F9F6EE',
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonWrapper: {
    width: "100%",
  },
  button: {
    backgroundColor: '#2FC916'
  },
  icon: {
    width: 400,
    height: 400,
    marginBottom: 20,
  }
});