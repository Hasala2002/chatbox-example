function getReply(msg){
    tempmsg=msg;
    keycount=0;
fetch("./questions.json")
      .then(function(resp){
        // console.log(msg);
         return resp.json();
      })
      .then(function(data){
          for (i=0; i<2; i++){
          if(i==0){
              for (j=0; j<7; j++){
                  if(tempmsg == data[j].question){
                     return data[j].reply;
                    }
              for (k=0; k<5; k++){
                   if (tempmsg==data[j].questiondiffsyntax[k]){
                     return data[j].reply;
                   }
                }
                for (l=0; l<5; l++){
                    if (tempmsg.includes(data[j].keywords[l])){
                      keycount++;
                    }
                   
                 }
                 if(keycount==2){
                    return data[j].reply;
                }
            }
          }
          else { 
              return "I do not understand";
          }
        }
     })
     .then(function(temp){
          reply(temp);
     })
     ;
    }

function stripHtml(html){
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

function sendmsg(){
    var date = new Date();
var hours = date.getHours();
var mins = date.getMinutes();
var time = "am"
if(hours>12){
    hours=hours-12;
    time="pm"
}
var timestamp = hours+":"+mins+" "+time;
input=document.getElementById("msgbox");
textmsg=stripHtml(input.value);
    if (textmsg != ""){
    var chat = document.getElementById('chat');
    chat.scrollTop=+860;
    console.log(chat.scrollTop);
    var message = document.getElementById('msgbox').value;
chat.insertAdjacentHTML('beforeend','<div class="chatout"><span class="message">'+message+'</span><span class="timestampout">'+timestamp+'</span></div>');
document.getElementById('msgbox').value="";
replymsg = getReply(textmsg);

    }
}

function check(){
    console.log("hello");
}




function newmsg(){
    chat=document.getElementById("chat");
    input=document.getElementById("input");
    textmsg=stripHtml(input.value);
    if(textmsg !== ""){
    chat.insertAdjacentHTML('beforeend', '<div class="msg out">'+textmsg+'</div>');
    input.value="";   
    replymsg = getReply(textmsg);
    // reply(replymsg); 
}
    else{
        input.value="";
    }
}

function reply(answer){
    var chat = document.getElementById('chat');
    // chat.insertAdjacentHTML('beforeend', '<div class="msg in">'+answer+'</div>');
    chat.insertAdjacentHTML('beforeend','<div class="chatin"><span class="message">'+answer+'</span></div>');
}
