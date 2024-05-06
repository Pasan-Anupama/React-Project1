import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const OTPSubmitForm = () => {
  const [OTP, setOTP] = useState("");
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const validateForm = () => {
    let errors = {};

    if (!OTP) errors.OTP = "Enter OTP sent to your mail";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", OTP);
      setOTP("");
      setErrors({});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>OTP Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP Code"
          keyboardType="numeric"
        />
        {errors.OTP ? <Text style={styles.errorText}>{errors.OTP}</Text> : null}

        <Button
          title="Sign Up"
          onPress={() => {
            // {errors.OTP ? null : navigation.navigate("Home Page");}
            handleSubmit();
            navigation.navigate("Home Page");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  text: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },

  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },

  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default OTPSubmitForm;
