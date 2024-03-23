import { StyleSheet } from 'react-native';
import { colors, dimensions } from './styleValues';



export default StyleSheet.create({
    container: {
        flex: 1,
        padding: dimensions.appPadding,
        backgroundColor: colors.appBg,
      },

    containerNoPadding: {
        flex: 1,
        backgroundColor: colors.appBg,
      },

    headerText: {
        fontSize: dimensions.largeTextSize,
        color: colors.textColor,

        // EXPERIMENTAL
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    headerTextSec: {
        fontSize: dimensions.largeTextSize,
        color: colors.textColorSec,

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

    textSec: {
        color: colors.textColorSec,
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: dimensions.itemPadding,
    },

    welcomeDiv: {
        alignItems: 'center',
    },

    /*welcomeMenuDiv: {
        alignItems: 'center',
    },*/


    calendarContainer: {
        flexDirection: 'row',
        paddingTop: dimensions.itemPadding,
        paddingBottom: dimensions.itemPadding,
        marginRight: dimensions.itemMargin,
        
    },

    calendarItem: {
        backgroundColor: colors.appFirstColor,
        alignItems: 'center',
        padding: dimensions.itemPadding,
        borderRadius: dimensions.buttonRadius,
        marginLeft: dimensions.itemMargin,

    },


    movieContainer: {
        flexDirection: 'column',
        paddingTop: dimensions.itemPadding,
        paddingBottom: dimensions.itemPadding,
    },

    movieDiv: {
        flexDirection: 'row',
        marginRight: dimensions.itemMargin,
        paddingTop: dimensions.itemPadding,
        paddingBottom: dimensions.itemPadding,
    },

    movieItemDiv: {
        height: 320,
        width: 200,
        alignItems: 'flex-end',
        flexDirection: 'row',
        padding: dimensions.buttonPadding,
        backgroundColor: colors.appFirstColor,
        borderRadius: dimensions.buttonRadius,
        marginLeft: dimensions.itemMargin,

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


    movieDetailsPoster: {
        flex: 1,
        backgroundColor: colors.appFirstColor,
        height: 450,
    },

    movieDetailsTitleDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: dimensions.itemPadding,
        paddingBottom: dimensions.itemPadding,
    },

    movieDetailsInfoDiv: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: colors.appFirstColor,

    },

    movieDetailsTypeDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: dimensions.itemPadding,
        paddingBottom: dimensions.itemPadding,
    },

    movieDetailsDescDiv: {
        paddingBottom: dimensions.itemPadding,
    },

    hallSelectionContainer: {
        padding: dimensions.appPadding,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },

    hallTitleDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    hallSeatsDiv: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    hallFlatList: {
        
    },

    hallSeatsDescDiv: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    hallSeatItem: {
        backgroundColor: colors.appFirstColor,
        padding: dimensions.buttonPadding,
        aspectRatio: 1,
        margin: dimensions.seatItemMargin,
        justifyContent: 'center',
        alignItems: 'center',
        width: dimensions.seatItemWidth, // Replace with the desired width
        height: dimensions.seatItemHeight, // Replace with the desired height
    },

    hallSeatsSelectionContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: dimensions.appPadding,
        backgroundColor: colors.appWhite,
        borderTopLeftRadius: dimensions.buttonRadius,
        borderTopRightRadius: dimensions.buttonRadius,
    },

    hallSeatAvailable: {
        backgroundColor: colors.appBg,
        borderColor: colors.appFirstColor,
        borderWidth: 3,
        padding: dimensions.buttonPadding,
        borderRadius: dimensions.buttonRadius,

    },

    hallSeatReserved: {
        backgroundColor: colors.appFirstColor,
        padding: dimensions.buttonPadding,
        borderRadius: dimensions.buttonRadius,
    },

    hallSeatSelected: {
        backgroundColor: colors.appSecColor,
        padding: dimensions.buttonPadding,
        borderRadius: dimensions.buttonRadius,
    },
    
});