
if (localStorage.getItem("lang")!=null) setLang(localStorage.getItem("lang"));

function setLang(lang){
  //console.log(lang);
  localStorage.setItem("lang", lang);


  switch (lang) {
    case 'en':
      $("#langSelection").text("English");
      break;
    case 'jp':
      $("#langSelection").text("日本語");
      break;
    case 'cn':
      $("#langSelection").text("簡中");
      break;
    case 'zh':
      $("#langSelection").text("繁中");
      break;      
  }
  
  $("[id*='ml-']").each(function(id,element) {
    var idArr = element.id.split('-');
    $("#ml-"+idArr[1]).text(multiLangsTable[idArr[1]+"_"+lang]);
  });
}