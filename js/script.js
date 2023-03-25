function addRow() {
	let table = document.getElementById("my-table");
	let row = table.insertRow(-1);
	let cellOne = row.insertCell(0);
	let cellTwo = row.insertCell(1);
	let cellThree = row.insertCell(2);
	let cellFour = row.insertCell(3);
	cellOne.innerHTML = "Enter your name";
	cellTwo.innerHTML = "Your profession";
	cellThree.innerHTML = "Contact";
	cellFour.innerHTML =
	  '<button class="e-btn" onclick="editRow(this)">Edit</button> <button class="d-btn" onclick="deleteRow(this)">Delete</button>';
  }

  function deleteRow(btn) {
	let row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
  }

  function editRow(btn) {
	let row = btn.parentNode.parentNode;
	let cells = row.getElementsByTagName("td");
	for (let i = 0; i < cells.length - 1; i++) {
	  let cell = cells[i];
	  let data = cell.innerHTML;
	  cell.innerHTML = '<input type="text" value="' + data + '">';
	}
	btn.innerHTML = "Save";
	btn.setAttribute("onclick", "saveRow(this)");
  }

  function saveRow(btn) {
	let row = btn.parentNode.parentNode;
	let cells = row.getElementsByTagName("td");
	for (let i = 0; i < cells.length - 1; i++) {
	  let cell = cells[i];
	  let input = cell.firstChild;
	  cell.innerHTML = input.value;
	}
	btn.innerHTML = "Edit";
	btn.setAttribute("onclick", "editRow(this)");
  }