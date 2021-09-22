import { StyleSheet } from 'react-native';
import {  makeStyles } from 'react-native-elements';
import colors from '../../styles/colors';

const useStyles = makeStyles((theme) => ({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    linearGradient: {
      display: "flex",
      justifyContent: "center",
      height: "100%",
    },
    viewInputGroup: {
      marginTop: 10
    },
    cardLogin: {
      borderRadius: 10,
    },
    title: {
      textAlign: "center",
      fontSize: 30,
      fontWeight: "700"
    },
    button: {
      backgroundColor: colors.contrast
    }
  }))

export  default useStyles;