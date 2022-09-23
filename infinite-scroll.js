const div = document.querySelector("#infinite-table");

const table = document
  .querySelector("#infinite-table")
  .getElementsByTagName("tbody")[0];



const LoadRows = () => {
  for (let i = 0; i < 20; i++) {
    let row = table.insertRow(-1);
    row.insertCell(0).innerHTML = Math.floor(Math.random() * 101);
    row.insertCell(1).innerHTML = Math.floor(Math.random() * 101);
    row.insertCell(2).innerHTML = Math.floor(Math.random() * 101);
    row.insertCell(3).innerHTML = Math.floor(Math.random() * 101);
    row.insertCell(4).innerHTML = Math.floor(Math.random() * 101);
    row.insertCell(5).innerHTML = Math.floor(Math.random() * 101);
  }
};

div.addEventListener("scroll", () => {
  if (div.scrollTop + div.clientHeight >= div.scrollHeight) LoadRows();
});

LoadRows();