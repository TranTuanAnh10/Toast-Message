function toast({
    title= '',
    message= '',
    type= 'warning',
    duration= 3000
}){
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        const icons = {
            success: 'fa-solid fa-check',
            warning: 'fa-solid fa-check',
            error: 'fa-solid fa-circle-exclamation'
        }
        const icon = icons[type]
        toast.innerHTML=`
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
         main.appendChild(toast);
         setTimeout(function(){
             main.removeChild(toast);
         }, duration + 1000)
    }
}
function showSuccess(){
    toast({
    title: 'Success',
    message: 'Peaky Blinders một băng đảng khét tiếng xuất hiện ở Birmingham',
    type: 'success',
    duration: 3000
})
}
function showError(){
    toast({
    title: 'Error',
    message: 'Peaky Blinders một băng đảng khét tiếng xuất hiện ở Birmingham',
    type: 'error',
    duration: 3000
})
}