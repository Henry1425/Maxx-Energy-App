//ID's of sections to change with data
const TitleID = "Graphs_AA_ID";     //div
const GraphID = "Graphs_AB_Img_ID"; //img
const DescID = "Graphs_BA_ID";      //div
const ExtraID = "Graphs_BB_ID";     //div


function changeData_DCP() {
    //DC Power
    // demoTestFunction("DCP");//temp
    fetch("/txt/DCP.txt").then(res => res.text()).then(text => assignData(text));
}


function changeData_ACP() {
    //AC Power
    // demoTestFunction("ACP");//temp
    fetch("/txt/ACP.txt").then(res => res.text()).then(text => assignData(text));
}


function changeData_DY() {
    //Daily Yield Power
    // demoTestFunction("DY");//temp
    fetch("/txt/DY.txt").then(res => res.text()).then(text => assignData(text));
}


function changeData_TY() {
    //Total Yield Power
    // demoTestFunction("TY");//temp
    fetch("/txt/TY.txt").then(res => res.text()).then(text => assignData(text));
}

function assignData(someData) {
    let someNewData = someData.split("<seperator>");
    document.getElementById(TitleID).innerHTML = someNewData[0];
    document.getElementById(GraphID).src = someNewData[1];
    document.getElementById(DescID).innerHTML = someNewData[2];
    document.getElementById(ExtraID).innerHTML = someNewData[3];
}

// function demoTestFunction(type) {
//     if (type == "DCP") {
//         document.getElementById(TitleID).innerHTML = "DC Power";
//         document.getElementById(GraphID).src = "images/SampleData/Graph_DCP.jpg";
//         document.getElementById(DescID).innerHTML = "Comparison between the two plants in DC Power production from May 15 - June 17, 2020";
//         document.getElementById(ExtraID).innerHTML = "Extra DCP";
//     }
//     else if (type == "ACP") {
//         document.getElementById(TitleID).innerHTML = "AC Power";
//         document.getElementById(GraphID).src = "images/SampleData/Graph_ACP.jpg";
//         document.getElementById(DescID).innerHTML = "Comparison between the two plants in AC Power production from May 15 - June 17, 2020";
//         document.getElementById(ExtraID).innerHTML = "Extra ACP";
//     }
//     else if (type == "DY") {
//         document.getElementById(TitleID).innerHTML = "Daily Yield";
//         document.getElementById(GraphID).src = "images/SampleData/Graph_DY.jpg";
//         document.getElementById(DescID).innerHTML = "Power Produced Daily From May 15, 2020 to Jun 17, 2020";
//         document.getElementById(ExtraID).innerHTML = "Extra DY";
//     }
//     else if (type == "TY") {
//         document.getElementById(TitleID).innerHTML = "Total Yield";
//         document.getElementById(GraphID).src = "images/SampleData/Graph_TY.jpg";
//         document.getElementById(DescID).innerHTML = "Total";
//         document.getElementById(ExtraID).innerHTML = "Extra TY";
//     }
// }

document.getElementById('DN_DC_ID').addEventListener('click', function () {
    fetch('http://localhost:3000/maxgen_power')
        .then(response => response.json())
        .then(data => {
            // Process the data here
            console.log(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

//     var button = document.getElementById('dc-button');
//     if (button) {
//         button.addEventListener('click', function () {
//             fetch('http://localhost:3000/getData')
//                 .then(response => response.json())
//                 .then(data => {
//                     // Process the data here
//                     console.log(data);

//                 })
//                 .catch((error) => {
//                     console.error('Error:', error);
//                 });
//         });
//     }
// }
