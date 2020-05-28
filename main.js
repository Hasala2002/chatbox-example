
function sendmsg(){
    if (document.getElementById('msgbox').value != ""){
    var chat = document.getElementById('chat');
    chat.scrollTop=+860;
    console.log(chat.scrollTop);
    var message = document.getElementById('msgbox').value;
chat.insertAdjacentHTML('beforeend','<div class="chatout"><span class="message">'+message+'</span><span class="timestampout">09.00 am</span></div>');
document.getElementById('msgbox').value="";
    }
}

function check(){
    console.log("hello");
}
