import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SigninForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpw, setConfirmpw] = useState("");
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const validateForm = () => {
    let errors = {};

    if (!name) errors.name = "Username is required";
    if (!phone) errors.phone = "Phone Number is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (!confirmpw) errors.confirmpw = "Confirmation password is required";
    if (password !== confirmpw)
      errors.confirmpw = "Password and confirmation password do not match";

    if (password.length < 8)
      errors.password = "Pasword must be 8 characters long";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    const user = {
      name: name,
      phone: phone,
      email: email,
      password: password,
      confirmpw: confirmpw,
    };

    //Send post request to the Backend API to register the user
    axios
      .post("http://localhost:8000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "registration successful",
          "You have been registered successfully"
        );
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setConfirmpw("");
        setErrors({});
      })
      .catch((error) => {
        Alert.alert("registration Error", "An error occured while registering");
        console.log(error);
        console.log(response);
      });

    // if (validateForm()) {
    //   console.log("Submitted", name, phone, email, password, confirmpw);
    //   setName("");
    //   setPhone("");
    //   setEmail("");
    //   setPassword("");
    //   setConfirmpw("");
    //   setErrors({});
    // }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Name"
            value={name}
            onChangeText={setName}
          />
          {errors.name ? (
            <Text style={styles.errorText}>{errors.name}</Text>
          ) : null}

          <Text style={styles.text}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Phone"
            keyboardType="numeric"
            value={phone}
            onChangeText={setPhone}
          />
          {errors.phone ? (
            <Text style={styles.errorText}>{errors.phone}</Text>
          ) : null}

          <Text style={styles.text}>E mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}

          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

          <Text style={styles.text}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmpw}
            onChangeText={setConfirmpw}
          />
          {errors.confirmpw ? (
            <Text style={styles.errorText}>{errors.confirmpw}</Text>
          ) : null}

          <Button title="Submit" onPress={handleSubmit} />

          <Pressable onPress={() => navigation.navigate("OTP")}>
            <Text style={styles.signinoption}>Next</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
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

  signinoption: {
    textAlign: "center",
    color: "#87CEEB",
    paddingTop: 15,
  },

  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default SigninForm;
