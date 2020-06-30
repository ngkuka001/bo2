var modal = document.getElementById("myModal");
var btnComplete = document.querySelector(".btn-complete");
var btnReward = document.querySelectorAll('.progress-item .btn-reward');
btnComplete.addEventListener('click', function () {
    modal.classList.add('hidden')
})

btnReward.forEach(button => {
    button.addEventListener('click', function () {
        if(this.classList.contains('active')) {
            modal.classList.remove('hidden');
            this.classList.remove('active');
        }
    })
})