import { makeStyles } from 'react-native-elements';
import colors from '../../styles/colors';

const useStyles = makeStyles((theme) => ({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    linearGradient: {
      height: 300
    },
    cardAccount: {
      borderRadius: 10,
      marginTop: 150
    },
    viewAvatar : {
      position: "absolute",
      left: 100,
      top: -90
    },
    viewGroupInputs: {
      marginTop: 60
    },
    viewWallet: {
      marginTop: 120,
      padding: 20
    },
    viewAddress: {

    },
    viewSecret: {

    },
    label: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 10
    },
    dataText: {
      marginBottom: 10
    },
    viewActions: {
      padding: 20
    },
    button: {
      backgroundColor: colors.green
    }
  }))

export  default useStyles;