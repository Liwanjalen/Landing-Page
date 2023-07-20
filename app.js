$("button").click(function (e) {
  console.log(e.target.value);
  $("html,body").animate(
    {
      scrollTop: $(e.target.value).offset().top,
    },
    "slow"
  );
});
