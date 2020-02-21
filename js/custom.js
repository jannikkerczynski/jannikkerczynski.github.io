const scrollActions = () => {
  $(window).scroll(function() {
    if (window.scrollY >= 50) $(".scrolling").css("opacity", "0");
    if (window.scrollY >= 200) {
      $("nav").css("background-color", "#352E74");
      $(".languageList").css("background-color", "#352E74");
    } else {
      $("nav").css("background-color", "#ffffff00");
      $(".languageList").css("background-color", "#ffffff00");
      $(".scrolling").css("opacity", "1");
    }
  });
};

scrollActions();

$(".buttonSocialMedia").hover(
  function() {
    setTimeout(() => {
      $("#linkedIn").css("opacity", "1");
    }, 200);
    setTimeout(() => {
      $("#instagram").css("opacity", "1");
    }, 300);
    setTimeout(() => {
      $("#facebook").css("opacity", "1");
    }, 400);
  },
  function() {
    $("#facebook").css("opacity", "0");
    setTimeout(() => {
      $("#instagram").css("opacity", "0");
    }, 50);
    setTimeout(() => {
      $("#linkedIn").css("opacity", "0");
    }, 100);
  }
);

$(".buttonSocialMediaPT").hover(
  function() {
    setTimeout(() => {
      $("#linkedIn").css("opacity", "1");
    }, 200);
    setTimeout(() => {
      $("#instagram").css("opacity", "1");
    }, 300);
    setTimeout(() => {
      $("#facebook").css("opacity", "1");
    }, 400);
  },
  function() {
    $("#facebook").css("opacity", "0");
    setTimeout(() => {
      $("#instagram").css("opacity", "0");
    }, 50);
    setTimeout(() => {
      $("#linkedIn").css("opacity", "0");
    }, 100);
  }
);
$(".buttonSocialMediaDE").hover(
  function() {
    setTimeout(() => {
      $("#linkedIn").css("opacity", "1");
    }, 200);
    setTimeout(() => {
      $("#instagram").css("opacity", "1");
    }, 300);
    setTimeout(() => {
      $("#facebook").css("opacity", "1");
    }, 400);
  },
  function() {
    $("#facebook").css("opacity", "0");
    setTimeout(() => {
      $("#instagram").css("opacity", "0");
    }, 50);
    setTimeout(() => {
      $("#linkedIn").css("opacity", "0");
    }, 100);
  }
);

$(".navLanguage").click(function() {
  $(".languageList").css("height", "90px");
  $(".languageList").css("opacity", "1");
});
$("html").click(function(e) {
  if (!$(e.target).hasClass("navLanguage")) {
    $(".languageList").css("height", "0");
    $(".languageList").css("opacity", "0");
  }
});

$(function() {
  scrollActions();
});
