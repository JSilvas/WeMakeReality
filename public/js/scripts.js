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

//Project Gallery: Modal Filtering 

$(document).ready(function(){

  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          //$('.filter').removeClass('hidden');
          $('.filter').show('3000');
      }
      else
      {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
          $(".filter").not('.'+value).hide('5000');
          $('.filter').filter('.'+value).show('5000');
          
      }
  });
  
  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

// Project Modal: Tab Navigation

$('#pills-tab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#pills-tab a[href="#about-teachersLens"]').tab('show') // Select tab by name
$('#pills-tab a[href="#inspiration-teachersLens"]').tab('show') // Select first tab
$('#pills-tab a[href="#milestones-teachersLens"]').tab('show') // Select last tab
$('#pills-tab a[href="#research-teachersLens"]').tab('show') // Select third tab
$('#pills-tab a[href="#get-involved-teachersLens"]').tab('show') // Select third tab

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