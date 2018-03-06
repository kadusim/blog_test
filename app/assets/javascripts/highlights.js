// funciona
// document.addEventListener("turbolinks:load", function() {
//   hljs.initHighlightingOnLoad();
// })

// funciona
// $(document).on("turbolinks:load", function(){
//   hljs.initHighlightingOnLoad();
// })

// funciona
$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
