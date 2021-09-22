import { makeStyles } from 'react-native-elements';
import colors from '../../styles/colors';


const useStyles  = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 10,
        marginTop: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.primary
    }
})) 

export default useStyles;