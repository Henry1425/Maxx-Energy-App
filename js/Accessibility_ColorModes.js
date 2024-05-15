//Default coloring for Landing Page
var LP_changedElements = [
    "tcbID",

    // "cardModal_ID",
    // "cardModal_Stuff_A",
    // "cardModal_Stuff_B",
    // "cardModal_Stuff_C",

    "centerPage_ID",

    "cp_cs_ID", "cp_csh_ID", "cp_csp_ID", "cp_csb_ID", "cp_csBtn_ID",
    "cp_csA_ID", "cp_cshA_ID", "cp_cspA_ID", "cp_csAb_ID", "cp_csBtnA_ID",
    "cp_csB_ID", "cp_cshB_ID", "cp_cspB_ID",  "cp_csBb_ID", "cp_csBtnB_ID",
    "cp_csC_ID", "cp_cshC_ID", "cp_cspC_ID",  "cp_csCb_ID", "cp_csBtnC_ID",
    "cp_csD_ID", "cp_cshD_ID", "cp_cspD_ID",  "cp_csDb_ID", "cp_csBtnD_ID",

    "cp_csE_ID", "cp_cshE_ID", "cp_cspE_ID"
];

var LP_changedElements_borders = [
    "tcbID",

    "cp_cs_ID", "cp_csBtn_ID",
    "cp_csA_ID", "cp_csBtnA_ID",
    "cp_csB_ID", "cp_csBtnB_ID",
    "cp_csC_ID", "cp_csBtnC_ID",
    "cp_csD_ID", "cp_csBtnD_ID",
    "cp_csE_ID"
];

var LP_defaultColors_f = [];
var LP_defaultColors_bgc = [];
var LP_defaultColors_b = [];

//Default coloring for Data Page
var DP_changedElements = [
    "tcbID",
    "Graphs_Body_ID",
    "Graphs_Data_ID",
    "Graphs_AA_ID",
    "Graphs_AB_ID",
    "Graphs_BA_ID",
    "Graphs_BB_ID"
];

var DP_changedElements_borders = [
    "tcbID",
    "Graphs_Body_ID",
    "Graphs_Data_ID",
    "Graphs_AA_ID",
    "Graphs_AB_ID",
    "Graphs_BA_ID",
    "Graphs_BB_ID"
];

var DP_defaultColors_f = [];
var DP_defaultColors_bgc = [];
var DP_defaultColors_b = [];

//Light mode
var LM_text = "#4f4f4f";
var LM_bgc = "#ffffff";

//Dark mode
var DM_text = "#ffffff";
var DM_bgc = "#13294B";

//Color Swaping
var currentColorMode = "Default";
var currentPage = "";
var LP_defaultColorsSaved = false;
var DP_defaultColorsSaved = false;

//Sets the color mode to the next
function toggleColorMode(thePage) {

    //Makes sure current page has default colors recorded
    currentPage = thePage;
    if (!LP_defaultColorsSaved && currentPage == "LP") {
        getDefaultColors();
        LP_defaultColorsSaved = true;
    }
    else if (!DP_defaultColorsSaved && currentPage == "DP") {
        getDefaultColors();
        DP_defaultColorsSaved = true;
    }

    //Applies new mode colors
    if (currentColorMode == "Default") {
        document.getElementById("tcbID").innerHTML = "Light Mode";
        currentColorMode = "LightMode";
        changeModes("LM");
    }
    else if (currentColorMode == "LightMode") {
        document.getElementById("tcbID").innerHTML = "Dark Mode";
        currentColorMode = "DarkMode";
        changeModes("DM");
    }
    else if (currentColorMode == "DarkMode") {
        document.getElementById("tcbID").innerHTML = "Default";
        currentColorMode = "Default";
        changeModes("D");
    }
}

//Applies color changes
function changeModes(Mode) {
    //Returns colors back to default
    if (Mode == "D") {
        if (currentPage == "LP") {
            for (let i = 0; i < LP_changedElements.length; i++) {
                document.getElementById(LP_changedElements[i]).style.color = LP_defaultColors_f[i];
                document.getElementById(LP_changedElements[i]).style.background = LP_defaultColors_bgc[i];
            }
            for (let i = 0; i < LP_changedElements_borders.length; i++) {
                document.getElementById(LP_changedElements_borders[i]).style.border = LP_defaultColors_b[i];
            }
        }
        else if (currentPage == "DP") {
            for (let i = 0; i < DP_changedElements.length; i++) {
                document.getElementById(DP_changedElements[i]).style.color = DP_defaultColors_f[i];
                document.getElementById(DP_changedElements[i]).style.background = DP_defaultColors_bgc[i];
            }
            for (let i = 0; i < DP_changedElements_borders.length; i++) {
                document.getElementById(DP_changedElements_borders[i]).style.border = DP_defaultColors_b[i];
            }
        }
    }
    else {
        //Applies new colors matching the current mode
        let ColorA = "";
        let ColorB = "";
        if (Mode == "LM") {
            ColorA = LM_text;
            ColorB = LM_bgc;
        }
        else if (Mode == "DM") {
            ColorA = DM_text;
            ColorB = DM_bgc;
        }
        if (currentPage == "LP") {
            for (let i = 0; i < LP_changedElements.length; i++) {
                document.getElementById(LP_changedElements[i]).style.color = ColorA;
                document.getElementById(LP_changedElements[i]).style.background = ColorB;
            }
            for (let i = 0; i < LP_changedElements.length; i++) {
                document.getElementById(LP_changedElements_borders[i]).style.border = "1px solid " + ColorA;
            }
        }
        else if (currentPage == "DP") {
            for (let i = 0; i < DP_changedElements.length; i++) {
                document.getElementById(DP_changedElements[i]).style.color = ColorA;
                document.getElementById(DP_changedElements[i]).style.background = ColorB;
            }
            for (let i = 0; i < DP_changedElements.length; i++) {
                document.getElementById(DP_changedElements_borders[i]).style.border = "1px solid " + ColorA;
            }
        }
    }
}

//Gets the default colors for the current page
function getDefaultColors() {
    if (currentPage == "LP") {
        for (let i = 0; i < LP_changedElements.length; i++) {
            LP_defaultColors_f.push(document.getElementById(LP_changedElements[i]).style.color);
            LP_defaultColors_bgc.push(document.getElementById(LP_changedElements[i]).style.background);
        }
        for (let i = 0; i < LP_changedElements_borders.length; i++) {
            LP_defaultColors_b.push(document.getElementById(LP_changedElements_borders[i]).style.border);
        }
    }
    else if (currentPage == "DP") {
        for (let i = 0; i < DP_changedElements.length; i++) {
            DP_defaultColors_f.push(document.getElementById(DP_changedElements[i]).style.color);
            DP_defaultColors_bgc.push(document.getElementById(DP_changedElements[i]).style.background);
        }
        for (let i = 0; i < DP_changedElements_borders.length; i++) {
            DP_defaultColors_b.push(document.getElementById(DP_changedElements_borders[i]).style.border);
        }
    }
}