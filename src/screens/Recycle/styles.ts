import { makeStyles } from 'react-native-elements';
import colors from '../../styles/colors';

const useStyles = makeStyles((theme) => ({
  linearGradient: {
    height: 300
  },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewHeader: {

    },
    viewFooterCard: {
      display: 'flex',
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
    },
    viewQrCode: {
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      paddingTop: 20,
      height: 200
    },
    viewAttention: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 170,
      padding: 20
    },
    title: {
      fontSize: 20,
      color: colors.contrast
    },
    paragraph: {
      fontSize: 15,
      color: colors.contrast
    },
    paragraphWarning: {
      fontSize: 15,
      fontWeight: '700',
      marginLeft: 20,
      color: colors.yellow
    },
    card: {
      borderRadius: 10,
      marginTop: 10
    }
  }))

export  default useStyles;