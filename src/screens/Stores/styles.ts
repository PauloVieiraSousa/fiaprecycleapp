import { makeStyles } from 'react-native-elements';
import colors from '../../styles/colors';

const useStyles = makeStyles((theme) => ({
    container: {
      
    },
    linearGradient: {
      height: 300,
      paddingTop: 50
    },
    cardStore: {
      borderRadius: 10
    },
    titleStore: {
      fontSize: 15,
      fontWeight: '700'
    },
    label: {
      color: colors.black
    },
    viewCardContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    viewIcon: {

    },
    content: {
      width: 250,
    }
  }))

export  default useStyles;