let date = document.querySelector('#currentDay')
let saveButton = document.querySelector('.saveBtn')
let inputField = document.querySelector('.form-control')
// Initalizes Current date
var Today = moment().format("MMMM D, YYYY")
date.textContent = Today;

// Color Code Text Boxes 
  hour = moment().format('H')

$('.form-control').each(function(){
  let hourSelector = parseInt($(this).attr('id'));
  
  if (hourSelector > hour) {
    $(this).addClass("future");
} else if (hourSelector == hour) {
    $(this).addClass("present");
} else {
    $(this).addClass("past");
}
console.log(hour)
})


// When save button clicked data stored in local storage
jQuery('.saveBtn').on('click', function(){

      var time = $(this).siblings(".hour").text();
      var todo = $(this).siblings(".todo").val();

      localStorage.setItem(time, todo);
})


// Function for when page refreshed data stays 
function saveOnRefresh() {

  $(".hour").each(function() {
      var hour = $(this).text();
      var todo = localStorage.getItem(hour);

      if(todo !== null) {
          $(this).siblings(".todo").val(todo);
      }
  });
}

saveOnRefresh()
