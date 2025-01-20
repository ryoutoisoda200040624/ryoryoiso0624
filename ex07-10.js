function BMI2(){ 
  var x =document.getElementById('input10').value;
  var y =document.getElementById('input11').value;
  alert(Number(x)/(Number(y)**2));
}
  function taiju(){
    var x =document.getElementById('input10').value;
  var y =document.getElementById('input11').value;
    alert(Number(x)/(Number(y)**2));
if(Number(x)/(Number(y)**2).value<18.5){
  alert('低体重')}
    else if(Number(x)/(Number(y)**2).value>=25){
            alert('肥満')}
    
    else{
      alert('普通')}
}
