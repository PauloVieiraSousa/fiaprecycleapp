import { makeStyles } from 'react-native-elements';
import colors from '../../styles/colors';


const useStyles  = makeStyles((theme) => ({
    card: {
        borderRadius: 10
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 20
    },
    cardHeader : {
        marginRight: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewTitle:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
   
    title: {
        fontSize: 20,
        marginLeft: 10,
        color: colors.contrast
    }
})) 

export default useStyles;