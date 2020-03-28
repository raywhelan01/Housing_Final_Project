// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
}
function updatefilters() {
   let date = d3.select("#datetime").property("value");
   let city = d3.select("#cityname").property("value");
   let state = d3.select("#statename").property("value");
   let country = d3.select("#countryname").property("value");
   let shape = d3.select("#shape").property("value");
   
   let filteredData = tableData;
   if (date!="") {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData_date = filteredData.filter(row => row.datetime === date);
    buildTable(filteredData_date); }
    else {buildTable(filteredData);};
    if ((date!="") && (city!="")) {
        filteredData_city = filteredData_date.filter(row => row.city === city);
        buildTable(filteredData_city);}
    else if ((date=="") && (city!="")) {
        filteredData_city = filteredData.filter(row => row.city === city);
        buildTable(filteredData_city); }
    else {buildTable(filteredData); };
        };

d3.selectAll("#filter-btn").on("click", updatefilters);
// Build the table when the page loads
buildTable(tableData);





