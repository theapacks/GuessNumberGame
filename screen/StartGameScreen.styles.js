import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      fontFamily: 'open-sans-bold',
      marginVertical: 10
    },
    inputContainer: {
      minWidth: 300,
      maxWidth: '95%',
      width: '80%',
      alignItems: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15
    },
    button: {
      width: Dimensions.get('window').width / 4,
    },
    input: {
      width: 50,
      textAlign: 'center',  
    }
  });