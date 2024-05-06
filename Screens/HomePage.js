import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function HomePageScreen( {route, navigation} ) {
    // const { name } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.form}>

        <Text style={styles.text}>Name</Text>
        <TextInput  style={styles.input} placeholder='Enter Name'/>

        <Text style={styles.text}>Phone Number</Text>
        <TextInput style={styles.input} placeholder='Enter Phone' keyboardType='numeric'/>

        <Text style={styles.text}>E mail</Text>
        <TextInput style={styles.input} placeholder='Enter Email'/>

        <Text style={styles.text}>Password</Text>
        <TextInput style={styles.input} placeholder='Enter Password' secureTextEntry/>

        <Text style={styles.text}>Confirm Password</Text>
        <TextInput style={styles.input} placeholder='Confirm Password' secureTextEntry/>

        <Button title='Next' onPress={() => navigation.navigate("OTP")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    justifyContent: 'center',
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
});
