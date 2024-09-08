// api = https://dummyjson.com/quotes

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Declared All Variables and general function
let generateButton = document.getElementById('btn');
let quoteElement = document.getElementById('quote');
let authorElement = document.getElementById('author');
let copyBtn = document.getElementById('copyBtn');
let faRegular = document.getElementsByClassName('fa-regular')[0];
let tooltip = document.getElementById('tooltip');
let body = document.body;
let box = document.getElementsByClassName('box')[0]
let darkModeBtn = document.getElementsByClassName('darkModeBtn')[0]
const getStyle = (value) => window.getComputedStyle(value);


const Quotes = async () => {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Fetching API
    try {
        let api = await fetch('https://dummyjson.com/quotes?limit=1400')
        let res = await api.json()
        let random = Math.floor(Math.random() * 1390)
        let quote = res.quotes[random].quote;
        let author = res.quotes[random].author;
        // console.log('author:', author, typeof author)

        if (author.includes('(R.A)') || author.includes('Abu Bakr') || author.includes('Ali ibn Abi Talib') || author.includes('Umar ibn Al-Khattāb')) {
            let arr = author.split(' ');
            arr.unshift('Hazrat');
            let mainAuthor = arr.join(' ');
            // console.log(mainAuthor);
            authorElement.innerHTML = `~ ${mainAuthor}`;
        }
        else authorElement.innerHTML = `~ ${author}`;
        quoteElement.innerHTML = quote;
    }
    catch (err) { console.log(`Error Occured: ${err} `) }

    let textToCopy = document.getElementById('quote').innerHTML;
    let tweet = document.getElementById('twitter');
    let copyBtn = document.getElementById('copyBtn')

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Twitter Web Intent Functionality
    tweet.addEventListener('click', () => window.open(`https://twitter.com/intent/tweet?text=${textToCopy}`, '_blank'))

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Copy to Clipboard Functionality
    copyBtn.addEventListener('click', () => navigator.clipboard.writeText(textToCopy))
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> On Generate button Click adding Quotes Funciton
generateButton.addEventListener('click', Quotes)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Tooltip Functionality
copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    faRegular.classList.toggle('fa-solid')
    tooltip.style.visibility = 'visible'
    setTimeout(() => {
        faRegular.classList.remove('fa-solid')
        tooltip.style.visibility = 'hidden'
    }, 2000)
})


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Dark Mode Functionality

// console.log(window.getComputedStyle(document.body).getPropertyValue('background-color'))
// console.log(getStyle(body).getPropertyValue('background-color')  )

darkModeBtn.addEventListener('click', () => {
    // console.log(getStyle(body).getPropertyValue('background-color'))
    darkModeBtn.classList.toggle("toggleBtn")
    if (getStyle(body).getPropertyValue('background-color') == 'rgb(255, 255, 255)') {
        // console.log('yes')
        body.style.backgroundColor = 'rgb(64, 64, 64)';
        box.style.backgroundColor = 'rgb(41, 41, 41)';
        copyBtn.style.color = 'white';
        quoteElement.style.color = 'white';
        authorElement.style.color = 'white';

    }
    else {
        // console.log('no')
        body.style.backgroundColor = 'rgb(255, 255, 255)';
        box.style.backgroundColor = 'rgb(249, 237, 237)';
        copyBtn.style.color = 'black';
        authorElement.style.color = 'rgb(94, 94, 94)';
        quoteElement.style.color = 'black';
    }
})
