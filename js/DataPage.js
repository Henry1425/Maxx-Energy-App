//ID's of sections to change with data
const TitleID = "Graphs_AA_ID";     //div
const GraphID = "Graphs_AB_Img_ID"; //img
const DescID = "Graphs_BA_ID";      //div
const ExtraID = "Graphs_BB_ID";     //div


function changeData_DCP() {
    fetch("/txt/DCP.txt").then(res => res.text()).then(text => assignData(text));
}


function changeData_ACP() {
    fetch("/txt/ACP.txt").then(res => res.text()).then(text => assignData(text));
}


function changeData_DY() {
    fetch("/txt/DY.txt").then(res => res.text()).then(text => assignData(text));
}


function changeData_TY() {
    fetch("/txt/TY.txt").then(res => res.text()).then(text => assignData(text));
}

function assignData(someData) {
    let someNewData = someData.split("<seperator>");
    document.getElementById(TitleID).innerHTML = someNewData[0];
    document.getElementById(GraphID).src = someNewData[1];
    document.getElementById(DescID).innerHTML = someNewData[2];
    document.getElementById(ExtraID).innerHTML = someNewData[3];
}