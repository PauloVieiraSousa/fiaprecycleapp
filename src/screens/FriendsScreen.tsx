import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
})

class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
          <FontAwesome5 name={'comments'} size={100}/>
       
       </View>
    );
  }
}



export default FriendsScreen;