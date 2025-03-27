import { Button } from "@ui-kitten/components"
import { StyleSheet, Image, View } from "react-native";
import Login from "./Login";
import { useRouter } from "expo-router";

import React from 'react';
import supabase from "../config/supabaseClient";
import { useFetchData } from "./hooks/useSupabaseTable";

const StartPage = () => {

  const router = useRouter();
  const icon = require('../../assets/images/logo.png')
  const data = useFetchData("allergies")
  console.log(data)
  
    return (
        <View style={styles.layout}>
            <Image style={styles.icon} source={icon}/>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button onPress={() => router.navigate("/onboarding/Login")} style={styles.button}>Login</Button>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button style={styles.button} onPress={() => router.navigate("/onboarding/Register")}>Register</Button>
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