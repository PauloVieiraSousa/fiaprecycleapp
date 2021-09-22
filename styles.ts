import {
    StyleSheet,
  } from 'react-native';
import colors from './src/styles/colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center'
    },
    footer: {
      display: 'flex', 
      alignContent: "center", 
      alignItems: "center", 
      backgroundColor: colors.gray
    }
  })

export default styles;