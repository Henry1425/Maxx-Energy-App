//Default coloring for Landing Page
var LP_changedElements = [
    "tcbID",

    "navBar_ID",
    "navBar_href_Index_ID",
    "navBar_href_Data_ID",
    "navBar_href_Contact_ID",
    "navBar_href_About_ID",
    "navBar_href_Login_ID",

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

    "cp_csE_ID", "cp_cshE_ID", "cp_cspE_ID",

    "footer_ID",
    "footer_C_A_ID", "footer_C_B_ID",
    "footer_P_A_ID",
    "footer_F_A_ID", "footer_F_B_ID", "footer_F_C_ID"

];

var LP_changedElements_borders = [
    "tcbID",

    "navBar_Btn_Index_ID",
    "navBar_Btn_Data_ID",
    "navBar_Btn_Contact_ID",
    "navBar_Btn_About_ID",
    "navBar_Btn_Login_ID",

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

//Default coloring for Contact Page
var CP_changedElements = [
    "tcbID",

    "navBar_ID",
    "navBar_href_Index_ID",
    "navBar_href_Data_ID",
    "navBar_href_Contact_ID",
    "navBar_href_About_ID",
    "navBar_href_Login_ID",

    "CF_ID",
    "formarea_ID",
    "fname", "label_FN_ID",
    "lname", "label_LN_ID",
    "country", "label_C_ID",
    "subject", "label_S_ID",


    "fa_Submit_ID",

    "footer_ID",
    "footer_C_ID", "footer_C_A_ID", "footer_C_B_ID",
    "footer_OA_ID", "footer_OB_ID",
    "footer_P_ID", "footer_P_A_ID",
    "footer_F_ID", "footer_F_A_ID", "footer_F_B_ID", "footer_F_C_ID"

];

var CP_changedElements_borders = [
    "tcbID",

    "fa_Submit_ID",

    "navBar_Btn_Index_ID",
    "navBar_Btn_Data_ID",
    "navBar_Btn_Contact_ID",
    "navBar_Btn_About_ID",
    "navBar_Btn_Login_ID"
    
];

var CP_defaultColors_f = [];
var CP_defaultColors_bgc = [];
var CP_defaultColors_b = [];

//Default coloring for About Page
var AP_changedElements = [
    "tcbID",

    "navBar_ID",
    "navBar_href_Index_ID",
    "navBar_href_Data_ID",
    "navBar_href_Contact_ID",
    "navBar_href_About_ID",
    "navBar_href_Login_ID",

    "aboutMax_Info_ID",

    "footer_ID",
    "footer_C_ID", "footer_C_A_ID", "footer_C_B_ID",
    "footer_OA_ID", "footer_OB_ID",
    "footer_P_ID", "footer_P_A_ID",
    "footer_F_ID", "footer_F_A_ID", "footer_F_B_ID", "footer_F_C_ID"

];

var AP_changedElements_borders = [
    "tcbID",

    "navBar_Btn_Index_ID",
    "navBar_Btn_Data_ID",
    "navBar_Btn_Contact_ID",
    "navBar_Btn_About_ID",
    "navBar_Btn_Login_ID"
    
];

var AP_defaultColors_f = [];
var AP_defaultColors_bgc = [];
var AP_defaultColors_b = [];

//Default coloring for Data Page
var DP_changedElements = [
    "tcbID",
    "Graphs_Body_ID",
    "Graphs_Data_ID",
    "Graphs_AA_ID",
    "Graphs_AB_ID",
    "Graphs_BA_ID",
    "Graphs_BB_ID",

    "footer_ID",
    "footer_C_ID", "footer_C_A_ID", "footer_C_B_ID",
    "footer_OA_ID", "footer_OB_ID",
    "footer_P_ID", "footer_P_A_ID",
    "footer_F_ID", "footer_F_A_ID", "footer_F_B_ID", "footer_F_C_ID"
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
var CP_defaultColorsSaved = false;
var AP_defaultColorsSaved = false;

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
    else if (!CP_defaultColorsSaved && currentPage == "CP") {
        getDefaultColors();
        CP_defaultColorsSaved = true;
    }
    else if (!AP_defaultColorsSaved && currentPage == "AP") {
        getDefaultColors();
        AP_defaultColorsSaved = true;
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
        else if (currentPage == "CP") {
            for (let i = 0; i < CP_changedElements.length; i++) {
                document.getElementById(CP_changedElements[i]).style.color = CP_defaultColors_f[i];
                document.getElementById(CP_changedElements[i]).style.background = CP_defaultColors_bgc[i];
            }
            for (let i = 0; i < CP_changedElements_borders.length; i++) {
                document.getElementById(CP_changedElements_borders[i]).style.border = CP_defaultColors_b[i];
            }
        }
        else if (currentPage == "AP") {
            for (let i = 0; i < AP_changedElements.length; i++) {
                document.getElementById(AP_changedElements[i]).style.color = AP_defaultColors_f[i];
                document.getElementById(AP_changedElements[i]).style.background = AP_defaultColors_bgc[i];
            }
            for (let i = 0; i < AP_changedElements_borders.length; i++) {
                document.getElementById(AP_changedElements_borders[i]).style.border = AP_defaultColors_b[i];
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
        else if (currentPage == "CP") {
            for (let i = 0; i < CP_changedElements.length; i++) {
                document.getElementById(CP_changedElements[i]).style.color = ColorA;
                document.getElementById(CP_changedElements[i]).style.background = ColorB;
            }
            for (let i = 0; i < CP_changedElements.length; i++) {
                document.getElementById(CP_changedElements_borders[i]).style.border = "1px solid " + ColorA;
            }
        }
        else if (currentPage == "AP") {
            for (let i = 0; i < AP_changedElements.length; i++) {
                document.getElementById(AP_changedElements[i]).style.color = ColorA;
                document.getElementById(AP_changedElements[i]).style.background = ColorB;
            }
            for (let i = 0; i < AP_changedElements.length; i++) {
                document.getElementById(AP_changedElements_borders[i]).style.border = "1px solid " + ColorA;
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
    else if (currentPage == "CP") {
        for (let i = 0; i < CP_changedElements.length; i++) {
            CP_defaultColors_f.push(document.getElementById(CP_changedElements[i]).style.color);
            CP_defaultColors_bgc.push(document.getElementById(CP_changedElements[i]).style.background);
        }
        for (let i = 0; i < CP_changedElements_borders.length; i++) {
            CP_defaultColors_b.push(document.getElementById(CP_changedElements_borders[i]).style.border);
        }
    }
    else if (currentPage == "AP") {
        for (let i = 0; i < AP_changedElements.length; i++) {
            AP_defaultColors_f.push(document.getElementById(AP_changedElements[i]).style.color);
            AP_defaultColors_bgc.push(document.getElementById(AP_changedElements[i]).style.background);
        }
        for (let i = 0; i < AP_changedElements_borders.length; i++) {
            AP_defaultColors_b.push(document.getElementById(AP_changedElements_borders[i]).style.border);
        }
    }
}