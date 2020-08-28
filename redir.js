var urlmain = document.URL;
var md = document.URL.split("/")[3];
var key = document.URL.split("/")[4];
var id = document.URL.split("/")[5];

if (md == 'deep') {
  var redir = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+key+'&dl_target_url=https://fopub.com/'+id+'';
} else {
  var redir = 'https://fopub.com/e/'+id;
}

window.location = redir;
