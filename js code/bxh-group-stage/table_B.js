let SHEET_RANGE_B_1 = 'A5:J7';

let FULL_URL_TABLE_B = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITLE}&range=${SHEET_RANGE_B_1}`;

fetch(FULL_URL_TABLE_B)
.then((res) => res.text())
.then((rep) => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    let dataBody = document.getElementById('table_ranktable_B');
    for (let i = 0; i < data.table.rows.length; i++) {
        let rowData = data.table.rows[i].c;
let row = document.createElement('tr');
let cell1 = document.createElement('td');
let cell2 = document.createElement('td');
let cell3 = document.createElement('td');
let cell4 = document.createElement('td');
let cell5 = document.createElement('td');
let cell6 = document.createElement('td');
let cell7 = document.createElement('td');
let cell8 = document.createElement('td');
let cell9 = document.createElement('td');

// Assuming rowData[0].v contains the source URL for the image
let imageSrcB = rowData[0].v;
const regex = /\/d\/(.+?)\/view/;
const logoteamB = imageSrcB.match(regex);
const fileIdB = logoteamB[1];
let image = document.createElement('img');
image.src = `https://drive.google.com/thumbnail?id=${fileIdB}`;
image.classList.add('team-logo')

cell1.appendChild(image); // Append the img element to cell1
function updateTextContentB() {
if (window.innerWidth > 768) {
  cell2.textContent = rowData[1].v;

} else {

    cell2.textContent = rowData[2].v;
}
}
// Initial setup based on window width
updateTextContentB();

// Update text content on window resize
window.addEventListener('resize', updateTextContentB);
cell3.textContent = rowData[3].v;
cell4.textContent = rowData[4].v;
cell5.textContent = rowData[5].v;
cell6.textContent = rowData[6].v;
cell7.textContent = rowData[7].v;
cell8.textContent = rowData[8].v;
cell9.textContent = rowData[9].v;

cell1.classList.add('first-col');
cell2.classList.add('second-col');
cell1.classList.add('sticky-col');
cell2.classList.add('sticky-col');

row.appendChild(cell1);
row.appendChild(cell2);
row.appendChild(cell3);
row.appendChild(cell4);
row.appendChild(cell5);
row.appendChild(cell6);
row.appendChild(cell7);
row.appendChild(cell8);
row.appendChild(cell9);

        dataBody.appendChild(row);
    }
    });