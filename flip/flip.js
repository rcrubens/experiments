const card = document.querySelector("#card")
card.addEventListener("click", (e)=> {
    card.classList.toggle("flip")
})
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'
  })