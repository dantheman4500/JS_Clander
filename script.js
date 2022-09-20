const modalEL = $('.modalOverlay')
const span = document.getElementsByClassName("close")[0];

//----------let user add a day to the slot----------//

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
      var event = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      localStorage.setItem(time, event);
//----------Handels the modal popup-------------//
        modalEL.show();
        $("#modalMsg").text(event+ "was marked on your planners!!!")
        
    });
//------------Hides Modals---------------------//
    span.onclick = function() {
        modalEL.hide();
    };
//--- get the hours --------------//
 
    function getHour(){
    var currentHour = moment().hour();

    $('.timeSlot').each(function () {
        var timeBlocks = parseInt($(this).attr('id').split('-')[1]);
        console.log(currentHour)
//---Changes the color of the text boxes---//

        if (timeBlocks < currentHour) {
            $(this).addClass('past');
          } else if (timeBlocks === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
//--------------------------------------------//
    });
}

getHour();

var interval = setInterval(getHour, 15000);

// -----------------------------//

$('#AM-9 .description').val(localStorage.getItem('AM-9'));
$('#AM-10 .description').val(localStorage.getItem('AM-10'));
$('#AM-11 .description').val(localStorage.getItem('AM-11'));
$('#PM-12 .description').val(localStorage.getItem('#PM-12'));
$('#PM-13 .description').val(localStorage.getItem('PM-13'));
$('#PM-14 .description').val(localStorage.getItem('PM-14'));
$('#PM-15 .description').val(localStorage.getItem('PM-15'));
$('#PM-16 .description').val(localStorage.getItem('PM-16'));
$('#PM-17 .description').val(localStorage.getItem('PM-17'));

// display current day and time on page
$('#currentDay').text(moment().format('dddd, MMMM Do',));
$('#currentTime').text(moment().format('LTS'));
});
