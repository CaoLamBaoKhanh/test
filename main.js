const name = document.querySelector(".name");
const date = document.querySelector(".date");
const email = document.querySelector(".email");
const manjors = document.querySelector(".manjors");
const AddStudent = document.querySelector(".AXC");
const tableStudent = document.querySelector("tbody");
const detlete = document.querySelector("delete");

let arrListStudent = JSON.parse(localStorage.getItem("student-list")) || [];

const arr = [];

function studentList() {
  // console.log(name.value);
  // console.log(date.value);
  // console.log(email.value);
  // console.log(manjors.value);

  let waring = "";
  if (name.value === "") {
    waring += "tên sinh viên sinh bị rỗng\n";
  }
  if (date.value === "") {
    waring += "ngày sinh không được để trống\n";
  }
  if (email.value === "") {
    waring += "email viên sinh bị rỗng\n";
  }
  if (manjors.value === "") {
    waring += "Ngành viên sinh bị rỗng\n";
  }
  if (waring !== "") {
    alert(waring);
  } else {
    tableStudent.innerHTML = "";
    const student = {
      id: Date.now(),
      name: name.value,
      date: date.value,
      email: email.value,
      manjors: manjors.value,
    };

    arrListStudent.push(student);
    const a = `<tr>
        <td class="value-student">${student.name}</td>
        <td class="value-student">${student.date}</td>
        <td class="value-student">${student.email}</td>
        <td class="value-student">${student.manjors}</td>
        <td><button class ="delete" data-id=${student.id} >xoá</button></td>
    </tr>`;
    arr.push(a);
    tableStudent.innerHTML = arr.join("");
    localStorage.setItem("student-list", JSON.stringify(arrListStudent));
  }
}
AddStudent.addEventListener("click", studentList);

window.addEventListener("load", () => {
  let html = "";
  console.log(arrListStudent);
  for (const student of arrListStudent) {
    const a = `<tr>
        <td class="value-student">${student.name}</td>
        <td class="value-student">${student.date}</td>
        <td class="value-student">${student.email}</td>
        <td class="value-student">${student.manjors}</td>
        <td><button class ="delete" data-id=${student.id} >xoá</button></td>
        </tr>`;
    html += a;
  }
  tableStudent.innerHTML = html;
});

console.log(tableStudent.querySelectorAll("tr"));

for (let i of tableStudent.querySelectorAll("tr")) {
    console.log(i);
  const btnDelete = i.querySelector("tr .delete");
  console.log(btnDelete);
  if(btnDelete){
    btnDelete.addEventListener("click", function () {
        const id = Number(btnDelete.dataset.id);
        const idx = arrListStudent.find((x) => x.id === id);
        console.log(id, idx);
        if (idx > -1) {
          arrListStudent.splice(idx, 1);
          localStorage.set('student-list', arrListStudent)
          let html = "";
          console.log(arrListStudent);
          for (const student of arrListStudent) {
            const a = `<tr>
            <td class="value-student">${student.name}</td>
            <td class="value-student">${student.date}</td>
            <td class="value-student">${student.email}</td>
            <td class="value-student">${student.manjors}</td>
            <td><button class ="delete" data-id=${student.id} >xoá</button></td>
            </tr>`;
            html += a;
          }
          tableStudent.innerHTML = html;
        }
      });
  }
}
