import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 28,
        marginBottom: 10,
        marginTop: 25,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 20,
        color: '#737380'
    },

    incidentList: {
        marginTop: 3,
    },

    incident: {
        padding: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        marginBottom: 8
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },

    datailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'

    }

});