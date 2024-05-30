const frm = document.getElementById("register-form");
// const frm = document.forms["register-form"];
console.log(frm);

$("#register-form").on("submit", evt => {
    evt.preventDefault();
    if (evt.target.userId.value.trim() === ""){
        alert("input name!!");
        frm.userId.focus();
        return;
    }

    if (frm.email.value.trim() === "") {
        alert("input Email!!!!");
        frm.email.focus();
        return;
    }
    
    if (frm.userPass.value.trim() === "") {
        alert("input password!!!!");
        frm.userPass.focus();
        return;
    }

    if (frm.userPassConfirm.value.trim() !== frm.userPass.value.trim()) {
        alert("input valid password confirm!!!!");
        frm.userPassConfirm.focus();
        return;
    }
    if ($("#register-form #user-desc").val().trim() === "") {
        alert("input desc!!!!");
        $("#register-form #user-desc").focus();
        return;
    }

    let message = frm.gender.value === "male" ? "남자" : "여자";
    console.log(message);

    let checkCnt = 0;
    for (let i = 0; i < frm.fav.length; i++) {
        if (frm.fav[i].checked) {
            checkCnt++;
        }
    }
    if (checkCnt === 0) {
        alert("select 1 or more fav!!!");
    }
    console.log(frm.telecom);
    console.log(frm.telecom.value);
    console.log(frm.telecom.options[frm.telecom.selectedIndex].value);

    if (!frm.terms.checked) {
        alert("check term!!!!!");
    }
});