import { StyleSheet } from 'react-native';
import { colors, dimensions } from './styleDark';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBg,
    },

    loginRegisterContainer: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.appBg,
        paddingTop: dimensions.paddingTopBottom,
        paddingLeft: dimensions.paddingLeftRight,
        paddingRight: dimensions.paddingLeftRight,
        paddingBottom: dimensions.paddingTopBottom,
        justifyContent: 'space-between',
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

        // EXPERIMENTAL
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    grayText: {
        color: colors.appThirdColor,
        fontSize: dimensions.smallTextSize,

        // EXPERIMENTAL
        flexWrap: 'wrap',
        flexShrink: 1,
    },


    button: {
        backgroundColor: colors.appSecColor,
        borderRadius: dimensions.buttonRadius,
        padding: dimensions.buttonPadding,
        margin: 5,
        textAlign: 'center',
    },

    buttonText:{
        color: colors.textColor,
        textAlign: 'center',
        fontSize: dimensions.normalTextSize,
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

    input: {
        width: '100%',
        height: dimensions.inputHigh,
        backgroundColor: 'transparent',
        color: colors.appThirdColor,
        borderWidth: 1,
        fontSize: dimensions.smallTextSize,
        borderColor: colors.appThirdColor,
        borderRadius: dimensions.inputRadius,
        paddingLeft: dimensions.inputPadding,
    },

    checkbox: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        padding: 0,
        margin: 0,
    },

    loginElementsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    boldText: {
        fontWeight: 'bold',
    },

    highlightText: {
        color: colors.appSecColor,
    },


    gapContainer: {
        display: 'flex',
        gap: dimensions.itemGap,
    },

    separator: {
        height: dimensions.separator,
    },


    // Login Register Screens

    lr_bottomText: {
        color: colors.textColor,
        textAlign: 'center',
        fontSize: dimensions.smallTextSize,
    },

});

