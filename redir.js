var urlmain = document.URL;
var md = document.URL.split("/")[3];
var key = document.URL.split("/")[4];
var id = document.URL.split("/")[5];

if (md == 'deep') {
  var redir = setTimeout("location.href = 'http://s.click.aliexpress.com/deep_link.htm?aff_short_key='+key+'&dl_target_url=https://www.aliexpress.com/item/'+id+'.html';",1*3000);
} else {
  var redir = setTimeout("location.href = 'https://s.click.aliexpress.com/e/'+key;",1*3000);
}

window.location = redir;
