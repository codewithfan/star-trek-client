document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value
    try{
        const response = await fetch(`https://star-trek-aliens-api.onrender.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('alienName').innerText = data.name
        document.getElementById('alienWorld').innerText = data.homeworld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFact
        document.getElementById('alienExamples').innerText = data.notableExample

        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.name
    } catch(error) {
        console.log(error)
    }
}