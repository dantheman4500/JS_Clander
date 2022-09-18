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
        $("#modalMsg").text(event+ " was marked on your planners!!!")
        
    });
//------------Hides Modals---------------------//
    span.onclick = function() {
        modalEL.hide();
    };



//--- get the hours --------------//
 
    function getHour(){
    var currentHour = moment().hours();

    $('.timeSlot').each(function () {
        var timeBlocks = parseInt($(this).attr('id').split('-')[1]);
        console.log(timeBlocks)
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
});
