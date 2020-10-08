var h1 = document.getElementsByTagName('h1');

Array.from(h1).forEach(function(htag){
    htag.textContent = 'Lol';
});