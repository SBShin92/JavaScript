console.log(document.all);
console.log($(document));

let mainImage = $("#main-image");
console.log(mainImage);
console.log(mainImage[0].getAttributeNames()); // jquery 객체는 wrapper형태인 것을 생각
console.log(`title: ${mainImage.attr("title")}`); // get
mainImage.attr("title", `제품: ${mainImage.attr("title")}`); // set

let subs = $(".sub-image");
console.log(subs);
subs.each((i, m) => $(m).attr("title", `이름: ${$(m).attr("title")}`));

mainImage.on("click", evt => alert("well, well, well..."));
subs.on("click", (evt) => {
  mainImage.attr("title", $(evt.target).attr("title"));
  mainImage.attr("src", $(evt.target).attr("src"));
  $("#product-info h2").text($(evt.target).attr("title"));
});

let keyword = $("#keyword");
keyword.on("keyup", evt => {
  $("#btn-search").text(`검색 ${keyword.val()}`);
});
