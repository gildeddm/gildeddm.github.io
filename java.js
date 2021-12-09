  
/* active link on clicking */
            var btns = 
                $("#navigation .navbar-nav .nav-link");
  
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click",
                                      function () {
                    var current = document
                        .getElementsByClassName("active");
  
                    current[0].className = current[0]
                        .className.replace(" active", "");
  
                    this.className += " active";
                });
            }


  /* Bootstrap tag filter  */
$(document).ready(function() {


  $(".btn-tag").click(function(eventObject) {
    var tag = $(this).html();
    var totalPanel = document.getElementsByClassName("panel").length;
    eventObject.preventDefault();
    for (var x = 1; x <= totalPanel; x++  ){
      console.log("json: " + JSON.stringify($("#project" + x ).html()));
      if(JSON.stringify($("#project" + x ).html()).indexOf(tag) >= 0 ){
        //console.log( JSON.stringify($("#project" + x ).html()) );
        $("#project" + x ).hide();
        $("#project" + x ).fadeIn();
      } else {
        $("#project" + x ).hide();
      };
      //console.log(tag);
      //console.log(JSON.stringify($("#project" + x ).html()).indexOf(tag));
    }
    //console.log(tag);

  });
  //console.log("total panel: " + document.getElementsByClassName("panel").length );

});
