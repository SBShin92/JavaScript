const btn = document.createElement("button");
btn.innerText = "삭제";
btn.className = "btn-remove-element";
btn.style.float = "right";
$("#list li").append(btn);

$("#btn-add").on("click", addItem);
$("#item").on("click", addItem);
console.log($("#item"));
$("#list").on("click", ".btn-remove-element", removeItem);


//   const abc = document.querySelectorAll("#list li");
//   abc.forEach((x) => x.remove());

$("#list li").remove();

// $("#list li").each((idx, elem) => {
//     elem.remove();
// })

function addItem(evt) {
  const nw = document.createElement("li");
  const inputWord = $("#item").val().trim();
  if (inputWord !== "") {
    nw.innerText = inputWord;
    const btn = document.createElement("button");
    btn.innerText = "삭제";
    btn.className = "btn-remove-element";
    btn.style.float = "right";
    nw.appendChild(btn);
    $("#list").append(nw);
    $("#item").val("").focus();
  }
}

function removeItem(evt) {
  evt.target.parentElement.remove();
}