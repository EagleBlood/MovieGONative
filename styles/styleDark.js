import { StyleSheet } from 'react-native';
import { colors, dimensions } from './styleValues';



export default StyleSheet.create({
    container: {
        flex: 1,
        padding: dimensions.appPadding,
        backgroundColor: colors.appBg,
      },
    headerText: {
        fontSize: dimensions.largeTextSize,
        color: colors.textColor,

        // EXPERIMENTAL
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    text: {
        color: colors.textColor,
        fontSize: dimensions.normalTextSize,

        // EXPERIMENTAL
        flexWrap: 'wrap',
        flexShrink: 1,
    },

    textDim: {
        color: colors.appThirdColor,
        fontSize: dimensions.normalTextSize,

        // EXPERIMENTAL
        flexWrap: 'wrap',
        flexShrink: 1,
    },

    button: {
        backgroundColor: colors.appFirstColor,
        borderRadius: dimensions.buttonRadius,
        padding: dimensions.buttonPadding,
        margin: 5,
    },


    homeContainer: {
        backgroundColor: colors.appBg,
        flexDirection: 'column',
    },

    homeHeaderText: {
        color: colors.textColor,
        fontSize: dimensions.largeTextSize,
        marginLeft: dimensions.appPadding,
    },


    welcomeContainer: {
        marginLeft: dimensions.appPadding,
        marginRight: dimensions.appPadding,
        backgroundColor: "red",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    welcomeDiv: {
        alignItems: 'center',
    },

    /*welcomeMenuDiv: {
        alignItems: 'center',
    },*/


    calendarContainer: {
        backgroundColor: "blue",
        flexDirection: 'row',
    },

    calendarItem: {
        backgroundColor: "darkblue",
        alignItems: 'center',
        marginRight: dimensions.itemMargin,
    },


    movieContainer: {
        backgroundColor: "green",
        flexDirection: 'column',
    },

    movieDiv: {
        flexDirection: 'row',
    },

    movieItemDiv: {
        height: 200,
        width: 200,
        alignItems: 'flex-end',
        flexDirection: 'row',
        padding: dimensions.buttonPadding,
        backgroundColor: "darkgreen",
        marginRight: dimensions.itemMargin,
    },

    movieTitleItemText: {
        color: colors.textColor,
        fontSize: dimensions.normalTextSize,
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap',
        flexShrink: 1, 
        textAlign: 'left',
    },

    movieScoreItemText: {
        color: colors.textColor,
        fontSize: dimensions.normalTextSize,
        textAlign: 'right',
        flexShrink: 0,
    },


    ticketItemDiv: {
        backgroundColor: colors.appBg,
        borderRadius: dimensions.buttonRadius,
    },

    ticketDiv: {
        borderRadius: dimensions.buttonRadius,
        backgroundColor: colors.appFirstColor,
        flexDirection: 'col',
        justifyContent: 'center',
        alignItems: 'left',
        padding: dimensions.buttonPadding,
    },

    ticketInfoDiv: {
        paddingTop: dimensions.buttonPadding,
        paddingBottom: dimensions.buttonPadding,
        flexDirection: 'column',
        alignItems: 'left',
    },

    ticketExpandedDiv: {
        flexDirection: 'col',
        justifyContent: 'center',
        alignItems: 'left',
        padding: dimensions.buttonPadding,
        borderBottomWidth: 2,
        borderColor: colors.appSecColor,
    },

    ticketExpandedInfoDiv: {
        paddingTop: dimensions.buttonPadding,
        paddingBottom: dimensions.buttonPadding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    ticketAdditionalDetails: {
        backgroundColor: colors.appBg,
        color: colors.textColor,
        fontSize: dimensions.normalTextSize,
        textAlign: 'left',
    },

    ticketExpandText: {
        color: colors.textColor,
        fontSize: dimensions.normalTextSize,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    ticketSeatText: {
        padding: dimensions.buttonPadding,
        backgroundColor: colors.appSecColor,
        color: colors.textColor,
        fontSize: dimensions.normalTextSize,
    },

    ticketTypeText: {
        color: colors.textColor,
        fontSize: dimensions.normalTextSize,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },

    ticketFinallText: {
        fontSize: dimensions.largeTextSize,
        color: colors.textColor,
        textAlign: 'right',

        // EXPERIMENTAL
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    
});