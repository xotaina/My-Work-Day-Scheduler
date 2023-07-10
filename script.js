// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $(".saveBtn").on("click", function () {
      const timeBlockId = $(this).siblings('.taskBin').attr("id"); // Get the id of the time-block
      const description = $(this).siblings(".taskBin").text().trim(); // Get the user input description
      const temp = localStorage.getItem("plan") ? JSON.parse(localStorage.getItem("plan")) : [];
      temp.push({ timeBlockId, description });
      localStorage.setItem("plan", JSON.stringify(temp)); // Save the description in local storage using the timeBlockId as the key
    });
  
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    const currentHour = moment().hour();
  
    $(".time-block").each(function () {
      const timeBlockId = $(this).children('.taskBin').attr("id");
      const hour = parseInt(timeBlockId.split("-")[1]);
      console.log(timeBlockId.split("-")[1]);
      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    $(".time-block").each(function () {
      const timeBlockId = $(this).children('.taskBin').attr("id");
      const description = JSON.parse(localStorage.getItem('plan'));
      for (const iterator of description) {
        console.log(iterator);
        if (timeBlockId === iterator.timeBlockId) {
          $(this).find(".taskBin").text(iterator.description);
        }
      }
    });
  
    // TODO: Add code to display the current date in the header of the page.
    const currentDate = moment().format("MMMM D, YYYY");
    $("#currentDay").text(currentDate);
  });
  
  $(".taskBin").on("click", "p", function () {
    const text = $(this).text().trim();
    const textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
  });
  
  $(".taskBin").on("blur", "textarea", function () {
    const text = $(this).val().trim();
    const taskP = $("<p>").addClass("taskItem").text(text);
    $(this).replaceWith(taskP);
  });
  
  setInterval(changeColorHour, 1000 * 60 * 60);
  getCurrentDate();
  changeColorHour();