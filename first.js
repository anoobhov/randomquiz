const questionBank = [
  {
    question: "Who developed the C programming language?",
    options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Ken Thompson"],
    answer: "Dennis Ritchie",
  },
  {
    question: "Which programming language is known as the language of the web?",
    options: ["JavaScript", "Python", "C#", "Ruby"],
    answer: "JavaScript",
  },
  {
    question: "Which programming language is designed specifically for data analysis?",
    options: ["R", "Python", "MATLAB", "SAS"],
    answer: "R",
  },
  {
    question: "Who invented the light bulb?",
    options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "George Westinghouse"],
    answer: "Thomas Edison",
  },
  {
    question: "Who worked for Edison and claimed to have built a death ray?",
    options: ["Nikola Tesla", "Thomas Edison", "George Westinghouse", "Alexander Graham Bell"],
    answer: "Nikola Tesla",
  },
  {
    question: "Which scientist reportedly considered cats to be his only close companions?",
    options: ["Nikola Tesla", "Charles Darwin", "Albert Einstein", "Isaac Newton"],
    answer: "Nikola Tesla",
  },
  {
    question: "Who is said to have once stuck a knitting needle in his ear to understand sound vibrations?",
    options: ["Alexander Graham Bell", "Isaac Newton", "Thomas Edison", "Louis Pasteur"],
    answer: "Alexander Graham Bell",
  },
  {
    question: "Which scientist discovered penicillin by accident in his messy lab?",
    options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
    answer: "Alexander Fleming",
  },
  {
    question: "Which scientist wrote an opera to explain the solar system?",
    options: ["Galileo Galilei", "Johannes Kepler", "Isaac Newton", "Carl Sagan"],
    answer: "Johannes Kepler",
  },
  {
    question: "Who was known to forget basic tasks but solved the mystery of motion?",
    options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Niels Bohr"],
    answer: "Isaac Newton",
  },
  {
    question: "Which scientist is said to have worked on his theories while living on only coffee and cookies?",
    options: ["Albert Einstein", "Marie Curie", "Nikola Tesla", "Werner Heisenberg"],
    answer: "Albert Einstein",
  },
  {
    question: "Which famous physicist famously failed his university entrance exams?",
    options: ["Albert Einstein", "Stephen Hawking", "Isaac Newton", "Niels Bohr"],
    answer: "Albert Einstein",
  },
  {
    question: "Who kept a detailed diary of his experiments with 30,000 records of sound vibrations?",
    options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Charles Darwin"],
    answer: "Alexander Graham Bell",
  },
  {
    question: "Who reportedly invented 700+ devices but had only a few patented?",
    options: ["Nikola Tesla", "Thomas Edison", "Charles Babbage", "Isaac Newton"],
    answer: "Nikola Tesla",
  },
  {
    question: "Which scientist discovered the planetary orbits were elliptical?",
    options: ["Johannes Kepler", "Galileo Galilei", "Isaac Newton", "Edwin Hubble"],
    answer: "Johannes Kepler",
  },
  {
    question: "Who turned down a knighthood because he believed science should stay free of politics?",
    options: ["Albert Einstein", "Francis Crick", "Michael Faraday", "Stephen Hawking"],
    answer: "Michael Faraday",
  },
  {question: "Which scientist reportedly used his cat's purring as inspiration for inventing the rotary engine?",
    options: ["Nikola Tesla", "Robert Stirling", "Felix Wankel", "James Watt"],
    answer: "Felix Wankel"
},
{
    question: "Which famous physicist refused to wear socks, considering them unnecessary?",
    options: ["Albert Einstein", "Nikola Tesla", "Isaac Newton", "Stephen Hawking"],
    answer: "Albert Einstein"
},
{
    question: "Which country has more sheep than people?",
    options: ["New Zealand", "Australia", "Iceland", "Ireland"],
    answer: "New Zealand"
},
{
    question: "Who was known to work standing up for hours because he believed it kept his brain sharp?",
    options: ["Leonardo da Vinci", "Nikola Tesla", "Charles Darwin", "Marie Curie"],
    answer: "Leonardo da Vinci"
},
{
    question: "What peculiar item did Galileo Galilei reportedly drop from the Leaning Tower of Pisa?",
    options: ["Feathers", "Cannonballs", "A bag of apples", "His notebook"],
    answer: "Cannonballs"
},
{
    question: "Which scientist slept only two hours a day using 'polyphasic sleep' cycles?",
    options: ["Nikola Tesla", "Thomas Edison", "Leonardo da Vinci", "Benjamin Franklin"],
    answer: "Leonardo da Vinci"
},
{
    question: "Which country has a 'penguin patrol' to guide penguins safely across roads?",
    options: ["New Zealand", "South Africa", "Argentina", "Chile"],
    answer: "New Zealand"
},
{
    question: "Who once claimed to have developed a machine to communicate with Martians?",
    options: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Isaac Newton"],
    answer: "Nikola Tesla"
},
{
    question: "Which scientist had a dog trained to respond to mathematical questions by barking?",
    options: ["Albert Einstein", "Marie Curie", "Isaac Newton", "Charles Darwin"],
    answer: "Charles Darwin"
},
{
    question: "What strange habit did Nikola Tesla have regarding his meals?",
    options: ["He calculated their volume before eating", "He only ate in silence", "He never ate the same meal twice", "He only ate raw vegetables"],
    answer: "He calculated their volume before eating"
},
{
    question: "Which country has a tradition of living inside giant potato-shaped houses?",
    options: ["Idaho, USA", "Finland", "Scotland", "Canada"],
    answer: "Idaho, USA"
},
{
    question: "Which scientist once caused an explosion in his lab and calmly took notes on its effects?",
    options: ["Robert Oppenheimer", "Isaac Newton", "Marie Curie", "Michael Faraday"],
    answer: "Michael Faraday"
},
{
    question: "Which species was accidentally discovered during a scientist's coffee break?",
    options: ["Penicillin", "Nematodes", "DNA helix", "X-rays"],
    answer: "Penicillin"
},
{
    question: "Which scientist used to balance peacock feathers on his nose for fun?",
    options: ["Isaac Newton", "Nikola Tesla", "Charles Darwin", "Galileo Galilei"],
    answer: "Charles Darwin"
},
{
  question: "Which scientist once got into a fistfight over who discovered calculus?",
  options: ["Isaac Newton", "Gottfried Leibniz", "Albert Einstein", "Leonhard Euler"],
  answer: "Isaac Newton"
},
{
  question: "Which scientist reportedly named his dog 'Cyanide' as a joke?",
  options: ["Marie Curie", "Alexander Fleming", "Isaac Newton", "Niels Bohr"],
  answer: "Marie Curie"
},
{
  question: "Which famous inventor built a 'ghost detector' to capture spirits?",
  options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "James Watt"],
  answer: "Thomas Edison"
},
{
  question: "What did Charles Darwin famously eat while studying different species?",
  options: ["A sample of every animal he studied", "Exotic fruits", "Insects", "Unusual fish"],
  answer: "A sample of every animal he studied"
},
{
  question: "Which scientist was afraid of pearls and refused to be near them?",
  options: ["Marie Curie", "Thomas Edison", "Nikola Tesla", "Charles Darwin"],
  answer: "Nikola Tesla"
},
{
  question: "Which planet is sometimes closer to Earth than Venus, even though it's farther away in orbit?",
  options: ["Mercury", "Mars", "Jupiter", "Neptune"],
  answer: "Mercury"
},
{
  question: "What strange invention did Thomas Edison claim would let you speak to the dead?",
  options: ["Spirit phone", "Ghost recorder", "Phantom transmitter", "Soul amplifier"],
  answer: "Spirit phone"
},
{
  question: "Which scientist lost his entire Nobel Prize medal because he melted it to avoid Nazi confiscation?",
  options: ["Niels Bohr", "Otto Hahn", "Max Planck", "Lise Meitner"],
  answer: "Niels Bohr"
}
];

 
function randomselector()
{
    const data  = new Set()
    while(data.size!=5)
    {
        const index = Math.floor(Math.random()*(questionBank.length))
        data.add(questionBank[index])
    }

    return [...data]
}

const form = document.getElementById('quizForm')
const problem = randomselector()
const correct_answer = {};

problem.forEach((obj,index)=>{
    const div_element = document.createElement('div')
    div_element.className='question'

    const paragraph = document.createElement('p')
    paragraph.textContent=`Q${index+1}. ${obj.question}`
    correct_answer[`q${index+1}`] = obj.answer

    div_element.appendChild(paragraph)
    


    //Now creating 4 options:
    obj.options.forEach((option)=>{
        const label = document.createElement('label')
        const input = document.createElement('input')
        input.type="radio"
        input.name=`q${index+1}`
        input.value = option
        label.appendChild(input)
        label.appendChild(document.createTextNode(option))
        div_element.appendChild(label)
        div_element.appendChild(document.createElement('br'));
    })
    form.appendChild(div_element)
})

const button = document.createElement('button')
button.type='submit'
button.className='submit-btn'
button.textContent='Submit'
form.appendChild(button)

//Now checking the answers
form.addEventListener('submit',(event)=>{
    event.preventDefault()

    const form_data=new FormData(form)

    let result = 0
    for(let[key,value] of form_data.entries())
    {
      if(value===correct_answer[key])
        result++
    }

    const res_div = document.getElementById('out')
    res_div.textContent=`score is ${result} out of 5`
})