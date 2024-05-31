      // default state
      let removeButton = $("<button>").addClass("btn-remove").text("삭제");

      $("#list li").append(removeButton);

      $(".btn-remove").css("float", "right");

      // event listener: add item by click add button
      $("#btn-add").on("click", addItem);
      
      // event listener: add item by enter key with input string
      $("#item").on("keypress", (evt) => {
        if (window.event.keyCode == 13)
          addItem(evt);
      })

      $(".btn-remove").on("click", (evt) => {
        $(evt.target).parent().remove();
      });

      // function for event listener
      function addItem(evt) {
        let removeButton = $("<button>").addClass("btn-remove").text("삭제");
        let inputVal = $("#item").val().trim();
        if (inputVal !== "") {
          $("#list").append($("<li>").text(inputVal).append($(removeButton)));
            $("#item").val("").trigger("focus");
            $(".btn-remove:last-child").css("float", "right").on("click", (evt) => {
              $(evt.target).parent().remove();
            });
          }
      }