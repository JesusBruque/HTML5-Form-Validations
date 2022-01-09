const data = {
    card:"",
    cvc:"",
    amount:"",
    firstName:"",
    lastName:"",
    city:"",
    state:"",
    postalCode:"",
    message:""
};

window.onload = function () {
    const form = document.querySelector("#form");

    const errorFormat = `<div class="alert alert-danger" role="alert">
                        Enter the data correctly
                        </div>`;

    const validateForm = () => {
        if (data.card.length !== 16){
            const errorCard = document.querySelector("#error-card");
            errorCard.innerHTML = errorFormat;
        }

        if (data.cvc.length !== 3){
            const errorCvc = document.querySelector("#error-cvc");
            errorCvc.innerHTML = errorFormat;
        }

        if (data.amount == ""){
            const errorAmount = document.querySelector("#error-amount");
            errorAmount.innerHTML = errorFormat;
        }

        if (data.firstName == ""){
            const errorFirstName = document.querySelector("#error-first-name");
            errorFirstName.innerHTML = errorFormat;
        }

        if (data.lastName == ""){
            const errorLastName = document.querySelector("#error-last-name");
            errorLastName.innerHTML = errorFormat;
        }

        if (data.city == ""){
            const errorCity = document.querySelector("#error-city");
            errorCity.innerHTML = errorFormat;
        }

        if (data.state == ""){
            const errorState = document.querySelector("#error-state");
            errorState.innerHTML = errorFormat;
        }

        if (data.postalCode.length !== 5){
            const errorPostalCode = document.querySelector("#error-postal-code");
            errorPostalCode.innerHTML = errorFormat;
        }

        if (data.mastercard == ""){
            const errorCheck = document.querySelector("#error-check");
            errorCheck.innerHTML = errorFormat;
        }

    }

    form.addEventListener("change", event => {
        let nameInput = event.target.name;

        if(nameInput === "radioMastercad" || nameInput === "radioVisa" || nameInput === "radioDiners" || nameInput === "radioAmerican"){
            data[event.target.name] = event.target.checked;       
        } else {
            data[event.target.name] = event.target.value;
        }
        
        console.log(data);
    })

    

    form.addEventListener("submit", event => {
        event.preventDefault();
        validateForm();
        console.log("submit");
    })
}

