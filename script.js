var modal = document.getElementById("myModal");
var btnComplete = document.querySelector(".btn-complete");
var btnReward = document.querySelectorAll('.progress-item[aria-active="true"] .btn-reward');
btnComplete.addEventListener('click', function() {
    modal.classList.add('hidden')
})

btnReward.forEach(element => {
    element.addEventListener('click', function() {
        modal.classList.remove('hidden');
    })
})