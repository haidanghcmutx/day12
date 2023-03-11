var process = document.querySelector('.process')
var range = document.querySelector('.range')
var value = document.querySelector('.process span')

function updateProcess(percent) {
    process.style.width = `${percent}%`
    value.innerHTML = `${percent}%`
}

range.addEventListener('mousemove', function(e) {
    var processWidth = e.pageX - this.offsetLeft
    var percent = Math.round((processWidth / this.offsetWidth)*100)
    updateProcess(percent)
})

updateProcess(30)