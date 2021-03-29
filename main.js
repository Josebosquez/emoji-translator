// queries
const submitButton = document.querySelector('#submit-button');
const encodeLabel = document.querySelector('#encode')
const translateLabel = document.querySelector('#translate')
const madlibLabel = document.querySelector('madlib')
const searchedEmoji = document.querySelector("#search")
const randomLabel = document.querySelector('#random')



// addEventListener
submitButton.addEventListener('click', function () {
    const textInput = document.querySelector('#translator-input')
    let resultH1 = document.querySelector('#results')
    const radios = document.querySelectorAll("[type='radio']")
    let input = textInput.value
    let emojiObjects = search(input);
    const rand = Math.random();

    for (const radio of radios) {
        // if radio is selected, find out which one it is
        if (radio.checked === true) {
    // encode radio
            if (radio.value === "encode") {
                console.log(radio.value)
                resultH1.innerText = encode(input)
            }

    // translate radio
            else if (radio.value === 'translate') {
                console.log(radio.value)
                resultH1.innerText = translate(input)
            }
            
    //madlib radio
            else if (radio.value === 'madlib') {
                console.log(radio.value)
                resultH1.innerText = madlib(input)
            }

    //search radio
            else if (radio.value === 'search') {
                console.log(radio.value)
                resultH1.innerHtml = ""; // create the search if statement and make it as innerHtml not innerText.
                console.log(search(input)); // make the objects in the array display when i console log it.
                for (elements of emojiObjects){ 
                    console.log(elements.symbol);
                    const newPara = document.createElement("p");
                    newPara.innerText = elements.symbol;
                    resultH1.appendChild(newPara);
                }

    //random radio
            } else if (radio.value === "random"){
                console.log(radio.value)
                resultH1.innerHtml = math.floor(random() * 4)
                if (resultH1.innerText === 0){
                    // when random is hit, i want it to return the "radio" and click the submitButton.
                }
                if (resultH1.innerText === 1){
                }
                if (resultH1.innerText === 2){
                }
                if (resultH1.innerText === 3){
                }    
                
                return resultH1
                
            }
        }
        
    }
}
)

//search
// How do i do that? 
// i wanna make it return the emojis.symbol
// storing that returned element.
// using a dom element, create a paragraph to store that element. 
// return it to resultsH1.innerHTML.


//random
// create or re-use a random number generator
// use the add() function like we were taught

// when random is hit, i want it to return the "radio" and submit submitButton.



// function add(function("encode"), number2) {
//     return number1 + number2;
//   }