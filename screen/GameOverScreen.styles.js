import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/colors';

export default styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        minWidth: 300,
        maxWidth: '95%',
        width: '80%',
    },    
    image: {
        width: '100%',
        height: '100%',

    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,
    },
    resultsText: {
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    },
    resultsContainer: {
        marginVertical: Dimensions.get('window').width / 60,
        marginHorizontal:   40,
    },
    highlight: {
        color: Colors.primary,
        fontWeight: 'bold',
        
    }
});