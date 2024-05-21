//ID's of sections to change with data
const TitleID = "Graphs_AA_ID";     //div
const GraphID = "Graphs_AB_Img_ID"; //img
const DescID = "Graphs_BA_ID";      //div
const ExtraID = "Graphs_BB_ID";     //div


function changeData_DCP() {
    //DC Power
    demoTestFunction("DCP");//temp
}


function changeData_ACP() {
    //AC Power
    demoTestFunction("ACP");//temp
}


function changeData_DY() {
    //Daily Yield Power
    demoTestFunction("DY");//temp
}


function changeData_TY() {
    //Total Yield Power
    demoTestFunction("TY");//temp
}

function demoTestFunction(type) {
    if (type == "DCP") {
        document.getElementById(TitleID).innerHTML = "DC Power";
        document.getElementById(GraphID).src = "images/SampleData/Graph_DCP.jpg";
        document.getElementById(DescID).innerHTML = "Comparison between the two plants in DC Power production from May 15 - June 17, 2020";
        document.getElementById(ExtraID).innerHTML = "Extra DCP";
    }
    else if (type == "ACP") {
        document.getElementById(TitleID).innerHTML = "AC Power";
        document.getElementById(GraphID).src = "images/SampleData/Graph_ACP.jpg";
        document.getElementById(DescID).innerHTML = "Comparison between the two plants in AC Power production from May 15 - June 17, 2020";
        document.getElementById(ExtraID).innerHTML = "Extra ACP";
    }
    else if (type == "DY") {
        document.getElementById(TitleID).innerHTML = "Daily Yield";
        document.getElementById(GraphID).src = "images/SampleData/Graph_DY.jpg";
        document.getElementById(DescID).innerHTML = "Power Produced Daily From May 15, 2020 to Jun 17, 2020";
        document.getElementById(ExtraID).innerHTML = "Extra DY";
    }
    else if (type == "TY") {
        document.getElementById(TitleID).innerHTML = "Total Yield";
        document.getElementById(GraphID).src = "images/SampleData/Graph_TY.jpg";
        document.getElementById(DescID).innerHTML = "Total";
        document.getElementById(ExtraID).innerHTML = "Extra TY";
    }
}