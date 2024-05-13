//Default coloring
var d_bgi = "url(../images/background-Image.jpg)";        //Background image
var changedElements = [
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

var changedElements_borders = [
    "tcbID",

    "cp_cs_ID", "cp_csBtn_ID",
    "cp_csA_ID", "cp_csBtnA_ID",
    "cp_csB_ID", "cp_csBtnB_ID",
    "cp_csC_ID", "cp_csBtnC_ID",
    "cp_csD_ID", "cp_csBtnD_ID",
    "cp_csE_ID"
];

var defaultColors_f = [];
var defaultColors_bgc = [];
var defaultColors_b = [];

//Light mode
// var LM_bgi = "url(../images/???.jpg)";
var LM_text = "#4f4f4f";
var LM_bgc = "#ffffff";

//Dark mode
// var DM_bgi = "url(../images/???.jpg)";
var DM_text = "#ffffff";
var DM_bgc = "#13294B";

//Contrast mode(s)?


//Color Swaping
var currentColorMode = "Default";
var defaultColorsSaved = false;

function toggleColorMode() {

    if (!defaultColorsSaved) {
        getDefaultColors();
        defaultColorsSaved = true;
    }

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
    else {

    }
}

function changeModes(Mode) {
    if (Mode == "D") {
        for (let i = 0; i < changedElements.length; i++) {
            document.getElementById(changedElements[i]).style.color = defaultColors_f[i];
            document.getElementById(changedElements[i]).style.background = defaultColors_bgc[i];
        }
        for (let i = 0; i < changedElements_borders.length; i++) {
            document.getElementById(changedElements_borders[i]).style.border = defaultColors_b[i];
        }
    }
    else {
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
        for (let i = 0; i < changedElements.length; i++) {
            document.getElementById(changedElements[i]).style.color = ColorA;
            document.getElementById(changedElements[i]).style.background = ColorB;
        }
        for (let i = 0; i < changedElements.length; i++) {
            document.getElementById(changedElements_borders[i]).style.border = "1px solid " + ColorA;
        }
    }
}

function getDefaultColors() {
    //Font/background
    for (let i = 0; i < changedElements.length; i++) {
        defaultColors_f.push(document.getElementById(changedElements[i]).style.color);
        defaultColors_bgc.push(document.getElementById(changedElements[i]).style.background);
    }
    //border
    for (let i = 0; i < changedElements_borders.length; i++) {
        defaultColors_b.push(document.getElementById(changedElements_borders[i]).style.border);
    }
}

































//Attempt with find by class instead of id
/*
var theElementsClassList = [];
function changeModes(Mode) {
    if (Mode == "D") {

        for (let x = 0; x < theElementsClassList.length; x++) {
            for (let y = 0; y < theElementsClassList[x].length; y++) {
                theElementsClassList[x][y].style.color = defaultColors_f[x][y];
                theElementsClassList[x][y].style.background = defaultColors_bgc[x][y];
            }
        }

    }
    else if (Mode == "LM") {

        for (let x = 0; x < theElementsClassList.length; x++) {
            for (let y = 0; y < theElementsClassList[x].length; y++) {
                theElementsClassList[x][y].style.color = LM_text;
                theElementsClassList[x][y].style.background = LM_bgc;
            }
        }
        
    }
    else if (Mode == "DM") {
        
        for (let x = 0; x < theElementsClassList.length; x++) {
            for (let y = 0; y < theElementsClassList[x].length; y++) {
                theElementsClassList[x][y].style.color = DM_text;
                theElementsClassList[x][y].style.background = DM_bgc;
            }
        }

    }
}

function getDefaultColors() {

    //Fills theElementsClassList with arrays of classes
    for (let i = 0; i < changedElements.length; i++) {
        theElementsClassList.push(document.getElementsByClassName(changedElements[i]));
    }

    //document.getElementById("tcbID").value = theElementsClassList[1][0].innerHTML;

    //goes through theElementsClassList outter array
    for (let i = 0; i < theElementsClassList.length; i++) {

        let cArray = [];
        let bgArray =  [];

        //goes through theElementsClassList inner arrays and pushes them to temp arrays
        for (let j = 0; j < theElementsClassList[i].length; j++) {
            let tempArray = theElementsClassList[i];
            cArray.push(tempArray[j].style.color);
            bgArray.push(tempArray[j].style.background);
        }
        //pushes temp arrays t default color arrays
        defaultColors_f[i].push(cArray);
        defaultColors_bgc[i].push(bgArray);
    }

}
*/