
const submitBtn = document.querySelector('button#submit-btn')
const main = document.querySelector('main')
const ratingCard = document.querySelector("#rating-card")
const thanksCard =(rating)=> `
<div class="bg-dark-blue max-w-xs p-6 py-7 rounded-lg text-center animate-toTop ">
      
  <div class="  flex items-center justify-center ">
    <img src="./images/illustration-thank-you.svg" alt="thank you" class="w-1/2">
  </div>
  <p class="my-4 text-[13.5px] bg-light-blue p-1 px-2 rounded-3xl m-auto text-orange w-fit"> You selected  ${rating} out of 5</p>
  <h3 class="my-4 text-xl font-bold text-white"> Thank you!</h3>
  <p class="my-4 text-med-grey text-[13.5px]"> We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!
  </p>

</div>`
let selectedRating 
// select all ratings buttons
const ratings = document.querySelectorAll('#ratings button span')
// create an array from nodeList
const ratingsArray = [...ratings]

ratingsArray.forEach(element => {
  element.addEventListener("click",()=>setNewRating(element))
});

submitBtn.addEventListener("click",submitRating)


// submit review
function submitRating (e){
  e.preventDefault()
  if (selectedRating) {
    main.innerHTML=thanksCard(selectedRating)
  }
}

// set new rating 
function setNewRating (element){
  selectedRating = element.innerHTML
}






// Tailwind css configuration
tailwind.config = {
    theme: {
      extend: {
        colors: {
            orange : "hsl(25, 97%, 53%)",
            "light-grey":"hsl(217, 12%, 63%)",
            "med-grey" : "hsl(216, 12%, 54%)",
            "light-blue" : "#303942",
            "dark-blue" : "hsl(213, 19%, 18%)",
            "v-dark-blue" : "hsl(216, 12%, 8%)"
        },
        fontFamily: {
            overpass: ['Overpass', 'sans-serif'],
          },
        fontSize:{
          "15" : "15px"
        },
        keyframes: {
          toTop: {
            '0%': { transform: 'translateY(-30px)',opacity:"0" },
            '100%': { transform: 'translateY(0)',opacity:"1" },
          }
        },
        animation: {
          toTop: 'toTop .2s ease-in-out 1',
        }
        
      }
    }
  }