
  var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, (match, p1, p2, p3, offset, string) => {
    return [match, p1, p2, p3, offset, string].join(' - ')
  });
  //console.log(newString);  // abc - 12345 - #$*%

  var str = 'abc00c';
  var newstr = str.replace(/[^\d]*/,function (match,p1) {
      console.log(match,p1);
      switch(match){
        case 'abc':
            return '123'
      }
  });
  console.log(newstr);