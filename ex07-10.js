function BMI2(){ 
  var x =document.getElementById('input10').value;
  var y =document.getElementById('input11').value;
  alert(Number(x)/(Number(y)**2));
}
  function taiju(){
if(document.getElementById('answer11').value=='Number(x)/(Number(y)**2)<18.5'){
  alert('低体重')}
    else if(document.getElementById('answer12').value=='Number(x)/(Number(y)**2)>=25'){
            alert('肥満')}
    else if(document.getElementById('answer13').value=='18.5=<Number(x)/(Number(y)**2)<25')
         {alert('普通')}
    else{
      alert('不明')}
}
