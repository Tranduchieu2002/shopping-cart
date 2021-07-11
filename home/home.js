var images = []
images[0] = './img/slide-1.png'
images[1] = 'https://photo-cms-kienthuc.zadn.vn/zoom/800/uploaded/nguyenanhson/2020_05_07/4/hot-girl-viet-mac-ao-dai-dep-nhat-dan-mang-goi-ten-co-gai-2k2.png'
images[2] = './img/slide-3.png'
images[3] = './img/slide-4.png'
const times = 3000
var sildeIMG = document.getElementById('img-slide')
var imgCurrent = 0
function interact(){
   sildeIMG.src = images[imgCurrent]
   if(imgCurrent < images.length-1)
   imgCurrent++
   else
    imgCurrent = 0
}
setInterval(interact,times)
sildeIMG.addEventListener('click',interact())