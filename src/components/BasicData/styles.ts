import { makeStyles } from 'react-native-elements';
import colors from '../../styles/colors';


const useStyles  = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 10,
        marginTop: 20,
        marginBottom: 20,
        paddingRight: 10,
        justifyContent: 'space-between'
    },
    viewAvatar : {
        marginRight: 10
    },
    viewData: {
        display: 'flex',
        justifyContent: 'center'
    },
    label:{
        fontSize: 15,
        color: colors.primary,
        fontWeight: '500'
    },
    iconEdit: {
     color: colors.primary
    },
    viewButton: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})) 

export default useStyles;