import { StyleSheet } from 'react-native';
import { colorDark, dimensions } from './styleValues';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorDark.appBg,
      },
    headerText: {
        fontSize: dimensions.largeTextSize,
        color: colorDark.textColor,

        // EXPERIMENTAL
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    text: {
        color: colorDark.textColor,

        // EXPERIMENTAL
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    button: {
        backgroundColor: colorDark.appFirstColor,
        borderRadius: dimensions.buttonRadius,
        padding: dimensions.buttonPadding,
        margin: 5,
    },


    welcomeContainer: {
        backgroundColor: "red",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    welcomeTextDiv: {
        alignItems: 'center',
    },

    welcomeMenuDiv: {
        alignItems: 'center',
    },


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
        color: colorDark.textColor,
        fontSize: dimensions.normalTextSize,
        fontWeight: 'bold',
        flex: 1,
        flexWrap: 'wrap',
        flexShrink: 1, 
        textAlign: 'left',
    },

    movieScoreItemText: {
        color: colorDark.textColor,
        fontSize: dimensions.normalTextSize,
        textAlign: 'right',
        flexShrink: 0,
    },
});

