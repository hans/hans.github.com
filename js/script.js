var container = $('#container');
var footnotes = $('div.footnotes');

$('a.footnote').each(function() {
  var el = $(this);

  el.qtip({
    content: {
      text: footnotes.find('li' + el.attr('href').replace(':', '\\:') + ' p').clone()
    },
    hide: {
      delay: 75,
      fixed: true
    }
  });
});

$(".paper a.bibtex-link").click(function(e) {
  //e.preventDefault();
  $(this).closest(".paper").find(".paper-bibtex").toggle();
  return false;
})
