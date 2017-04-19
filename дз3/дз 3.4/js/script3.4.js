 var lis = document.getElementsByTagName('li');

    for (i = 0; i < lis.length; i++) {
      var title = lis[i].firstChild.data;
      title = title.trim(); 
	  var childCount = lis[i].getElementsByTagName('li').length;
      alert(title + ': ' + childCount);
    }