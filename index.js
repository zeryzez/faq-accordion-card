var question = document.querySelectorAll(".boutton")
var image = document.querySelectorAll(".arrow")
var answer = document.querySelectorAll(".answer")



for(var i = 0; i< question.length; i++){
        question[i].addEventListener('click', () => {
          question[i].style.color = 'red'
        })
}
