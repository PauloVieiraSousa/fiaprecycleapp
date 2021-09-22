import { makeStyles } from 'react-native-elements';
import { Dimensions } from "react-native";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
    linearGradient: {
      height: 300
    },
    calloutContainer: {
      width: 160,
      height: "100%",
      paddingHorizontal: 16,
      paddingVertical: 16,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderRadius: 16,
      justifyContent: "center",
    },
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
    },
  
    calloutText: {
      color: "#0089a5",
      textDecorationLine: "underline",
      fontSize: 14,
    },
  
    calloutSmallText: {
      color: "#005555",
      fontSize: 10,
    },
  }))

export default useStyles;