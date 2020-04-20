import { StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/colors';

export default StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
      },
      headerAndroid: {
      },
      headerIOS: {
        borderBottomColor: '#ccc',
        borderBottomWidth:  1,
      },
      headerTitle: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 18
      }
});