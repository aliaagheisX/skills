$(function() {
  var defaultHeading = "basic";  // the type of heading content show
  $(".heading h4[show='" + defaultHeading + "']").addClass("active"); //to make the specific heading show

  // make height of charts dpend on attr [pre]
  $(".charts div").each(function() {
    var height = $(this).attr("pre") + "%";
    $(this).css("height", height);
  });

  // functions of navigation menu that affected on heading 
  // AT click or mouseover:  show heading dpend on it
  // AT click : make heading default 
  // AT mouseout : return to default heading 
  $(".navi div").on("click mouseover", function() {
      var navi = $(this).text().toLowerCase();
    
      if ($(".heading .active").attr("show") !== navi) {
        $(".heading h4")
          .removeClass("active");
        $(".heading h4[show='" + navi + "']")
          .addClass("active");
      }
    }) 
    .click(function() {
      defaultHeading = $(this)
        .text()
        .toLowerCase();
    })
    .mouseout(function() {
      if ($(".heading .active").attr("show") !== defaultHeading) {
        $(".heading h4")
          .removeClass("active");
        $(".heading h4[show='" + defaultHeading + "']")
          .addClass("active");
        
      }
    });
  
  // functions of navigation menu that affected on charts 
  // show charts according to click
  $(".navi div").click(function () {
    var navi = $(this).text().toLowerCase();
    if ($(".row.active").attr("show") !== navi) {
      $(".row")
        .removeClass("active");
      $(".row[show='" + navi + "']")
        .addClass("active");
    }
  });
  
  //at hover on charts show heading of it and at mouserout return to default heading
  //show precentage at hover
  $(".charts div").hover(function () {
    var navi = $(this).text().toLowerCase();
  
    $(".heading h4")
      .removeClass("active");
    $(".heading h4[show='" + navi + "']")
      .addClass("active");
    
    $(".precentage").text($(this).attr("pre") + "%");
  }, function () {
    $(".heading h4")
      .removeClass("active");
    $(".heading h4[show='" + defaultHeading + "']")
      .addClass("active");
    $(".precentage").text("");
  });
});



// libray sphere
if( ! $('#myCanvas').tagcanvas({
                textColour : "#F2C94C",
                outlineThickness : 0.5,
                outlineColour : '#fe0853',
                maxSpeed : 0.06,
                freezeActive:true,
                shuffleTags:true,
                shape:'sphere',
                zoom:1,
                noSelect:true,
                textFont:null,
                pinchZoom:true,
                freezeDecel:true,
                fadeIn:3000,
                initial: [0.3,-0.1],
                depth : 0.8
            })) {
            // TagCanvas failed to load
            $('#myCanvasContainer').hide();

        }