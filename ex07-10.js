function BMI2(){ 
  var x =document.getElementById('input10').value;
  var y =document.getElementById('input11').value;
  alert(Number(x)/(Number(y)**2));
}
  function taiju(){
if(document.getElementById('answer10').value=='Number(x)/(Number(y)**2)<18.5'){
  alert('低体重')}
    else if(document.getElementById('answer10').value=='Number(x)/(Number(y)**2)>=25'){
            alert('肥満')}
    
    else{
      alert('普通')}
}
