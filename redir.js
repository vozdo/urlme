var urlmain = document.URL;
var md = document.URL.split("/")[3];
var key = document.URL.split("/")[4];
var id = document.URL.split("/")[5];

if (md == 'deep') {
  var redir = 'https://fopub.com/'+id+'';
} else {
  var redir = 'https://s.click.aliexpress.com/e/'+key;
}

window.location = redir;
