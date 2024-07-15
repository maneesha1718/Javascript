var emojiPage = document.getElementById('emoji');
var displaySection = document.getElementById('sec2');
var colourSection = document.getElementById('Page1');
var eyesSection = document.getElementById('Page2');
var mouthSection = document.getElementById('Page3');
var Next = document.getElementById('next_button');
var Previous = document.getElementById('prev_button');

var selectedPage = 'Page1';

if (selectedPage === 'Page1'){
  Previous.style.visibility='hidden';
}


var face = document.createElement('span');
face.style.height = 170 + 'px';
face.style.width = 170 + 'px';
face.style.border = 0 + 'px';
displaySection.appendChild(face);

function faceColour(id){
  face.style.border = 10 + 'px' + ' solid' + ' black';
  face.style.borderRadius = 50 + '%';
  eyesSection.style.display='inline-block';
  colourSection.style.display='none';
  Previous.style.visibility='visible';
  selectedPage = 'Page2';
  switch(id){
    case 'orange':
      face.style.backgroundColor = 'orange';
      break;
    case 'green': 
      face.style.backgroundColor = 'rgb(1, 186, 1)';
      break;
    case 'red': 
      face.style.backgroundColor = 'red';
      break;
  }
}

var eye = document.createElement('img');
eye.className = "eye_align";
function eyeChange (id){
  switch(id){
    case 'eye1':
      eye.src='Emoji parts/eye-0.svg';
      break;
    case 'eye2':
      eye.src='Emoji parts/eye-1.svg';
      break;
    case 'eye3':
      eye.src='Emoji parts/eye-2.svg';
      break;
    case 'eye4':
      eye.src='Emoji parts/eye-3.svg';
      break;
    case 'eye5':
      eye.src='Emoji parts/eye-4.svg';
      break;
  }
  face.appendChild(eye)
}

var mouth = document.createElement('img');
mouth.className = "mouth_align";
function mouthChange (id){
  switch(id){
    case 'mouth1':
      mouth.src='Emoji parts/mouth-0.svg';
      break;
    case 'mouth2':
      mouth.src='Emoji parts/mouth-1.svg';
      break;
    case 'mouth3':
      mouth.src='Emoji parts/mouth-2.svg';
      break;
    case 'mouth4':
      mouth.src='Emoji parts/mouth-3.svg';
      break;
    case 'mouth5':
      mouth.src='Emoji parts/mouth-4.svg';
      break;
  }
  face.appendChild(mouth)
}



function pageChange (id){
  var currentPage = selectedPage.substr(-1)
  console.log(currentPage);
  switch(id){
    case 'next_button':
      Previous.style.visibility='visible';
      if(currentPage<3){
        selectedPage = 'Page'+(+currentPage+1);
        console.log(selectedPage)
        document.getElementById('Page'+currentPage).style.display = 'none';
        document.getElementById(selectedPage).style.display = 'inline-block';
        if(selectedPage==='Page3'){
          Next.style.visibility='hidden';
        }
      }
      break;
      case 'prev_button':
        Next.style.visibility='visible';
        if(currentPage>1){
          selectedPage = 'Page'+(+currentPage-1);
          console.log(selectedPage)
          document.getElementById('Page'+currentPage).style.display = 'none';
          document.getElementById(selectedPage).style.display = 'inline-block';
          if(selectedPage==='Page1'){
            Previous.style.visibility='hidden';
          }
        }
        break;
  }
}