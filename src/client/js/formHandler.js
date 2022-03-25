async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formUrl = document.getElementById('url').value
    //checkForName(formUrl)

    await fetch('/handlePostedData', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urlTarget: formUrl })
    })
    .then(res => res.json())
    .then(res => {
        //updateUI(res);
        console.log('updating UI')
    })


/*     console.log("::: Form Submitted :::")
    
    fetch('http://localhost:8080/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    }) */
}

export { handleSubmit }
