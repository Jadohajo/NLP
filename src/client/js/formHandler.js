

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
   // checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/', {method: 'POST', body: JSON.stringify({key: formText}), headers: {'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res.text
    })
    
}


//axios get request

// axios.get('http://localhost:8081/')
// .then(function (response) {
//     console.log(response.data);
//     document.getElementById('results').innerHTML = response.data
// })
// .catch(function (error) {
//     console.log(error);
// })



export { handleSubmit }





