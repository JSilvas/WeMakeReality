$( document ).ready(
  
  // Enable Dynamic Tabs in Project Details
  $('.nav-tabs a').click(function(){
    $(this).tab('show');
  }),

  // Reset iframe content when project modals are closed
  $(".project").on('hidden.bs.modal', function (e) {
    $(".project iframe").attr("src", $(".project iframe").attr("src"));
  })

);

// Disable Smooth Scroll animation for accessibility concerns
// $(this).click(function(event) {
//   if ($('#animation').prop('checked')) {
//     event.preventDefault();
//     $('html, body').animate({scrollTop: $target.offset().top}, 1000, function() {
//       location.hash = target;
//       $target.focus();
//       if ($target.is(":focus")) {
//         return !1;
//       } else {
//         $target.attr('tabindex', '-1');
//         $target.focus()
//       }
//     })
//   }
// });