function BMI2(){ 
  var x =document.getElementById('input10').value;
  var y =document.getElementById('input11').value;
  alert(Number(x)/(Number(y)**2));
if(document.getElementById('answer10').value=='<18.5'){
  alert('低体重')}
}
