import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    },    
    image: {
        width: '100%',
        height: '100%',

    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        marginVertical: 10,
    },
    resultsText: {
        fontSize: 20,
    },
    highlight: {
        color: Colors.primary,
        fontWeight: 'bold',
        
    }
});