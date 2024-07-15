var formBody = $('#form-body');
var submitted = document.getElementById('submit');
var optionsInput;

$.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz', function(data,status){
  var response = data;
  for(i=0; i<response.length; i++){
    var queBlock = document.createElement('div');
    queBlock.className='question';
    queBlock.id = 'question'+i;
    var queText = document.createTextNode('Q'+(+i+1)+'. '+response[i].question);
    queBlock.appendChild(queText);
    var seperation = document.createElement('hr');
    
    for (j=0; j<4; j++){
      optionsInput = document.createElement('input');
      optionsInput.type='radio';
      optionsInput.className='options';
      optionsInput.id = 'que'+i+'opt'+j;
      optionsInput.name =  'que'+i;
      optionsInput.value = response[i].options[j]
      var optionsLabel = document.createElement('label');
      optionsLabel.for = 'que'+i+'opt'+j;
      var optionsText = document.createTextNode(response[i].options[j]);
      optionsLabel.style.fontWeight = 'normal';
      var breaking = document.createElement('br');
      optionsLabel.appendChild(optionsText);
      queBlock.appendChild(breaking);
      queBlock.appendChild(optionsInput);
      queBlock.appendChild(optionsLabel);
      queBlock.appendChild(seperation);
    }
    formBody.append(queBlock);
  }
})

var score=0;

submitted.addEventListener('click', function(){
  for(i=0;i<4;i++){
    naming='que'+i;
    var current_que = document
  }
  //document.querySelector('input[name="answer"]:checked').value
})