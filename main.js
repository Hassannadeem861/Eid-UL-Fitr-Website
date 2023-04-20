// Swal.fire('آپ سب لوگوں کو میری طرف سے عید الفطر مبارک ہو۔');

let timerInterval
Swal.fire({
    title: ' سب لوگوں کو عیدالفطر مبارک ہو۔ ',
    html: 'I will close in <b></b> milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
}).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
})



var typed = new Typed('#typing', {
    strings: ["عید الفطر مبارک."],
    typeSpeed: 50,
    backspeed: 50,
    loop: true,
});