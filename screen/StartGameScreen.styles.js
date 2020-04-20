import { StyleSheet } from 'react-native';

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
      width: 300,
      maxWidth: '80%',
      alignItems: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15
    },
    button: {
      width: 100,
    },
    input: {
      width: 50,
      textAlign: 'center',  
    }
  });