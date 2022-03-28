import { checkUrl } from "./validationChecker";

async function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formUrl = document.getElementById("url").value;

    // validating url input by user
    if (checkUrl(formUrl)) {
        await fetch("/handlePostedData", {
            method: "POST",
            credentials: "same-origin",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ urlTarget: formUrl }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log("res", res);
                // updateUI(res);
               updateUI(res);
            });
        

    } else {
        alert("Please enter a valid URL");
    }
}

// Update UI
function updateUI(res) {
    document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById("polarity").innerHTML = `Polarity: ${res.score_tag}`;
}

export { handleSubmit, updateUI };
