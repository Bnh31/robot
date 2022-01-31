// api key



// 9a9d930d044743ad9b920e0f8eb1cb1a
const api_key = '9a9d930d044743ad9b920e0f8eb1cb1a'
const url = `http://api.voicerss.org/?key=1234567890QWERTY&hl=en-us&src=Hello, world!`
const audio =document.querySelector('audio')
const button =document.querySelector('button')
const spinner =document.querySelector('.spinner')

const spinner_show =()=>{
    spinner.hidden =false
}
const spinner_hide =()=>{
    spinner.hidden =true
}
spinner_hide()



button.addEventListener('click',async()=>{
    spinner_show()
    const random1000=Math.floor(Math.random()*1000)
    const get = await axios.get('https://type.fit/api/quotes')
    const joke =get.data[random1000].text
    audio.src=`http://api.voicerss.org/?key=9a9d930d044743ad9b920e0f8eb1cb1a&hl=en-us&src=${joke}`
    button.innerText=joke
    spinner_hide()
    
   

})
