import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

export default styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 300,
        maxWidth: '80%',
    },
    listItem: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        width: '60%',
    },
    listContainer: {
        width: '80%',
        flex: 1,
    },
    scrollList: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    attempt: {
        backgroundColor: Colors.primary,
        color: 'white',
        fontWeight: 'bold',
        margin: 5,
        borderRadius: 15,
        alignItems: 'center'
    },
    landscapControls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        alignItems: 'center',

    }
});