let openButton=document.getElementById('open') //variables
let closeButton=document.querySelector('.close')
let modalContainer=document.querySelector('.scnd_part')

openButton.addEventListener('click',function(){  //open button functionality
    modalContainer.style.display='block';
});

closeButton.addEventListener('click',function(){  //close button functionality
    modalContainer.style.display='none';
})