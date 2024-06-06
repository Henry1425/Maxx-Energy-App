// write a Javascript function that will change the data displayed on the Datapage.html page The function should take in a parameter that will determine what data to display. The function should change the title, graph, description, and extra information displayed on the page based on the parameter passed in. The function should be called when a button is clicked on the page.It should also get the data from the database and display it on the page.

function changeData(parameter) {
  // Get data from the database based on the parameter
  const data = fetchDataFromDatabase(parameter);

  // Update the title
  const titleElement = document.getElementById('title');
  titleElement.textContent = data.title;

  // Update the graph
  const graphElement = document.getElementById('graph');
  graphElement.src = data.graphUrl;

  // Update the description
  const descriptionElement = document.getElementById('description');
  descriptionElement.textContent = data.description;

  // Update the extra information
  const extraInfoElement = document.getElementById('extra-info');
  extraInfoElement.textContent = data.extraInfo;
}

// Function to fetch data from the database
function fetchDataFromDatabase(parameter) {
  // Implement your logic to fetch data from the database based on the parameter

  // Return the fetched data
  return {
    title: 'New Title',
    graphUrl: 'https://example.com/graph.png',
    description: 'New Description',
    extraInfo: 'New Extra Information'
  };
}

// Add event listener to the button
const button = document.getElementById('button');
button.addEventListener('click', function () {
  const parameter = 'example'; // Replace with the actual parameter value
  changeData(parameter);
});



