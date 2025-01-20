
  function taiju(){
    var x =document.getElementById('input10').value;
  var y =document.getElementById('input11').value;
    alert(Number(x)/(Number(y)**2));
    var nan =Number(x)/(Number(y)**2).value;
if(nan<18.5){
  alert('低体重')}
    else if(nan>=25){
            alert('肥満')}
    
    else{
      alert('普通')}
}
