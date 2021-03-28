// queries
const submitButton = document.querySelector('#submit-button');
const radios = document.querySelectorAll("[type='radio']")
const encodeLabel = document.querySelector('#encode')
const translateLabel = document.querySelector('#translate')
const madlibLabel = document.querySelector('madlib')

// addEventListener
submitButton.addEventListener('click', function () {
    const textInput = document.querySelector('#translator-input')
    const resultH1 = document.querySelector('#results')
    
    for (const radio of radios) {
        // if radio is selected, find out which one it is
        if (radio.checked) {
            console.log(radio.value)
            if (radio.value === "encode"){
                let input = textInput.value
                resultH1.innerText = encode(input)
            } 
            if (radio.value === 'translate'){
                input = textInput.value
                resultH1.innerText = translate(input)
            }
            if (radio.value === 'madlib'){
                input = textInput.value
                resultH1.innerText = madlib(input)
            }
            if (radio.value === 'search'){
                input = textInput.value
                resultH1.innerText = madlib(input)
            }
        }

        
    }
})