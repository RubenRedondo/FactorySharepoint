/*
    COLORS
 */

const colors = {
    "mainColor" : "#006729",
    "black": "#000000",
    
    
    "xs-dark-gray": "#5A5A5A",
    "dark-gray": "#9E9E9E",
    "medium-gray": "#AFAFAF",
    "gray": "#C4C4C4",
    "light-gray": "#C6C6C6",
    "xs-light-gray": "#DFDFDF",
    "soft-white": "#EEEEEE",
    
    "green" : "#65A518",
    "light-green": "#65A51833",
    "hover-greem": "#6EB31B",
    "active-green": "#578C15",
    
    "aqua": "#00A3A8",
    
    "orange-light": "#F7B500",
    "orange-medium": "#F77C00",
    
    "red": "#E60018",
    "medium-red": "#c51628",
    "light-red": "#ff4155",
    
    // State colors:
    "error": "#E60018",
    
}

export const tagColors = {
    1: colors["orange-light"],
    2: colors["orange-medium"],
    3: colors.red,
    4: colors.green
}

export const themes = {
    "normal" : {
        normal: colors.green,
        hover: colors["hover-greem"],
        active: colors["active-green"],
        textColor: "white"
    },
    "disabled": {
        normal: colors.gray,
        hover: colors.gray,
        active: colors.gray,
        textColor: colors["dark-gray"]
    },
    "red": {
        normal: colors.red,
        hover: colors["light-red"],
        active: colors["medium-red"],
        textColor: "white"
    },
    "bordered": {
        normal: 'transparent',
        border: "black",
        hover: colors["medium-gray"],
        active: colors["light-gray"],
        textColor: "black"
    },
}

export default colors;
