$(document).ready(function () {
    let input = "";
  
    function updateDisplay() {
      $("#display").val(input);
    }
  

    $(".btn").not(".equal, .clear, .delete").on("click", function () {
      const value = $(this).data("value");
      $(this).fadeOut(100).fadeIn(100);
      input += value;
      updateDisplay();
    });
  

    $(".clear").on("click", function () {
      $(this).fadeOut(100).fadeIn(100);
      input = "";
      updateDisplay();
    });
  

    $(".delete").on("click", function () {
      $(this).fadeOut(100).fadeIn(100);
      input = input.slice(0, -1);
      updateDisplay();
    });
  

    $(".equal").on("click", function () {
      $(this).fadeOut(100).fadeIn(100);
      try {
        const result = eval(input);
        input = result.toString();
        updateDisplay();
      } catch (error) {
        $("#display").val("Error");
        input = "";
  
      }
    });
  
    
    $(document).on("keydown", function (e) {
      const key = e.key;
  
      if (!isNaN(key) || "+-*/.".includes(key)) {
        input += key;
        updateDisplay();
      } else if (key === "Enter") {
        $(".equal").click();
      } else if (key === "Backspace") {
        input = input.slice(0, -1);
        updateDisplay();
      } else if (key === "Escape") {
        input = "";
        updateDisplay();
      }
    });
  });
  