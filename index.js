function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            let body = document.querySelector('body');
            let p = document.createElement('p');
            p.textContent = object.id;
            body.appendChild(p);
        })
        .catch(function(error) {
            let body = document.querySelector('body');
            let p = document.createElement('p');
            p.textContent = error.message;
            body.appendChild(p);
        });
}