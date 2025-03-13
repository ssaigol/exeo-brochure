const data = [];

for (let i = 0; i < 10; i++) {
  const employee = {};
  employee.employee = `Employee${i}`;
  employee.boards = [];
  data.push(employee);
}

data.forEach((employee) => {
  for (let i = 0; i < 5; i++) {
    employee.boards.push(`Board${i}`);
  }
});

const sidebar = document.getElementById("employees");
const boardsBar = document.getElementById("boards");
const mainContainer = document.getElementById("main-container");

data.forEach((employee, index) => {
  const employeeName = employee.employee;
  const sidebarName = document.createElement("div");
  sidebarName.textContent = employeeName;
  sidebarName.classList.add("employee");
  sidebarName.dataset.employeeCode = index;
  sidebar.append(sidebarName);
});

const employees = document.getElementsByClassName("employee");

[...employees].forEach((employee) => {
  employee.addEventListener("click", (e) => {
    while (boardsBar.firstChild) {
      boardsBar.removeChild(boardsBar.firstChild);
    }
    const employeeCode = e.target.dataset.employeeCode;
    data[employeeCode].boards.forEach((board) => {
      const boardName = document.createElement("div");
      boardName.textContent = board;
      boardName.classList.add("board");
      boardName.dataset.board = board;
      boardsBar.append(boardName);

      boardName.addEventListener("click", () => {
        while (mainContainer.firstChild) {
          mainContainer.removeChild(mainContainer.firstChild);
        }
        for (let i = 0; i < 10; i++) {
          const card = document.createElement("div");
          card.textContent = `Card ${i}`;
          card.classList.add("card");
          mainContainer.append(card);
        }
      });
    });
  });
});
