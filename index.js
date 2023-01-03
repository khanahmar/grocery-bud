const inp = document.querySelector("#inp");
const submit = document.querySelector(".btn");
const list = document.querySelector(".ul");
const showEl = document.querySelector(".show");

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
  showEl.innerText = "Item Added";
  showEl.classList.add("show-add");
  setTimeout(() => {
    showEl.innerText = "";
    showEl.classList.remove("show-add");
  }, 800);
  inp.value = "";
  delIcn.addEventListener("click", (e) => {
    liEl.remove();
  });
  editIcn.addEventListener("click", (e) => {
    inp.value = liEl.innerText;
    submit.innerText = "Edit it";
  });
});
submit.addEventListener("click", (e) => {
  if (submit.innerText == "Edit it") {
    liEl.innerText = inp.value;
    submit.innerText = "submit";
  }
});
