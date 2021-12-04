/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function demo(){
   var result = document.getElementById('result2');
    
    var dateTime = new Date();
    var hours = dateTime.getHours();
     var minutes = dateTime.getMinutes();
      var sec = dateTime.getSeconds();
      
   var Watch =   hours+':' + minutes+':'+ sec;
      
      result.innerHTML = Watch;
}
setInterval(demo, 1000);