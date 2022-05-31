const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const mesageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMsg);

function sendMsg(){
  let content = messageIn.value;
  if (content === '') {
    alert('Please Enter Valid Value. Current Value Is Empty')  
  }
  else{
    messageOut.innerHTML = content;
    messageIn.value = '';
  }
}

