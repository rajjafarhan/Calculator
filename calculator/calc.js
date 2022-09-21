let string=" "
let buttons = document.querySelectorAll('.button')

Array.from(buttons).forEach((button)=>{

    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'Clear'){
            string=" ";
            document.querySelector('input').value = string;
        }
        
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }

    })
})


// let display=document.getElementsByClassName('display');
// let row=Array.from(document.getElementsByClassName('button'));
// row.map(button => {
//     button.addEventListener('click' , (e) => {
//         switch(e.target.innerText){
//             default:
//                 display.innerText += e.target.innerText;

//         };
//     });
// });