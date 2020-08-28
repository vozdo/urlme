var urlmain = document.URL;
var md = document.URL.split("/")[3];
var key = document.URL.split("/")[4];
var id = document.URL.split("/")[5];

if (md == '') {
  var redir = 'https://fopub.com/'+key+'&dl_target_url=https://fopub.com/'+id+'';
} else {
  var redir = 'https://fopub.com/'+key;
}

window.location = redir;
