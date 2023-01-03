const inp = document.querySelector("#inp");
const submit = document.querySelector(".btn");
const list = document.querySelector(".ul");
const showEl = document.querySelector(".show");

const itemEl = JSON.parse(localStorage.getItem("list"));

window.addEventListener("load", (e) => {
  itemEl.forEach((item) => {
    const liEl = document.createElement("li");
    liEl.innerText = item.text;

    const editIcn = document.createElement("div");
    editIcn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i
  >`;
    editIcn.classList.add("edit");
    const delIcn = document.createElement("div");

    delIcn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    liEl.appendChild(editIcn);
    liEl.appendChild(delIcn);

    list.appendChild(liEl);
    delIcn.addEventListener("click", (e) => {
      liEl.remove();
      updateLs();
    });
  });
});

submit.addEventListener("click", (e) => {
  const liEl = document.createElement("li");
  liEl.innerText = inp.value;

  const editIcn = document.createElement("div");
  editIcn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i
  >`;
  editIcn.classList.add("edit");
  const delIcn = document.createElement("div");

  delIcn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  liEl.appendChild(editIcn);
  liEl.appendChild(delIcn);

  list.appendChild(liEl);

  updateLs();

  showEl.innerText = "Item Added";
  showEl.classList.add("show-add");
  setTimeout(() => {
    showEl.innerText = "";
    showEl.classList.remove("show-add");
  }, 800);
  inp.value = "";
  delIcn.addEventListener("click", (e) => {
    liEl.remove();
    updateLs();
  });
  editIcn.addEventListener("click", (e) => {
    inp.value = liEl.innerText;
    submit.innerText = "Edit it";
    updateLs();
  });
});
submit.addEventListener("click", (e) => {
  if (submit.innerText == "Edit it") {
    liEl.innerText = inp.value;
    submit.innerText = "submit";
  }
});

function updateLs() {
  todosEl = document.querySelectorAll("li");
  console.log(todosEl);
  let arr = [];
  todosEl.forEach((todo) => {
    arr.push({
      text: todo.innerText,
    });
  });
  localStorage.setItem("list", JSON.stringify(arr));
}
