// https://type.fit/api/quotes
let button = document.getElementById('btn')
let quote = document.getElementById('quote')
let author = document.getElementById('author')


const Quotes = async () => {
    try {
        let api = await fetch('https://type.fit/api/quotes')
        let res = await api.json()

        let random = Math.floor(Math.random() * 16)

        res.forEach(e => {
            quote.innerHTML = res[random].text
            let Auth = res[random].author

            let AuthRep = Auth.replace(', type.fit', '')
            if (AuthRep.includes('type.fit')) {
                AuthRep = 'Unknown'
            }
            author.innerHTML = `~&nbsp;By&nbsp;${AuthRep}`

        });
    }

    catch (err) {
        console.log(`Error Occured: ${err} `);
    }

    let textToCopy = document.getElementById('quote').innerHTML

    // Twitter Web Intent

    let tweet = document.getElementById('twitter')
    tweet.addEventListener('click', (e) => {
        let twitUrl = `https://twitter.com/intent/tweet?text=${textToCopy}`
        window.open(twitUrl, '_blank')
    })


    //  Copy to Clipboard Functionality


    let copyBtn = document.getElementById('copyBtn')
    let faRegular = document.getElementsByClassName('fa-regular')[0]
    console.log(faRegular);
    console.log(copyBtn);

    copyBtn.addEventListener('click', (e) => {
        e.preventDefault()
        navigator.clipboard.writeText(textToCopy)

    })

}

button.addEventListener('click', Quotes)


let copyBtn = document.getElementById('copyBtn')
let faRegular = document.getElementsByClassName('fa-regular')[0]
let tooltip = document.getElementById('tooltip')

copyBtn.addEventListener('click', (e) => {
    e.preventDefault()

    faRegular.classList.toggle('fa-solid')
    tooltip.style.visibility = 'visible'
    setTimeout(() => {
        faRegular.classList.remove('fa-solid')
        tooltip.style.visibility = 'hidden'
    }, 2000)

})