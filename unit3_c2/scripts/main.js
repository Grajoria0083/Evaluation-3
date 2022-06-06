
let arr = [];

function customer(n, e, ad, am) {
    this.name = n
    this.email = e
    this.address = ad
    this.amount = am
}

function userData(event) {
    event.preventDefault()
    let form = document.getElementById("form")
    let name = form.name.value
    let email = form.email.value
    let address = form.address.value
    let amount = form.amount.value

    let d = new customer(name, email, address, amount)
    arr.push(d)
    localStorage.setItem("user", JSON.stringify(arr))
    console.log(arr)
    let user = document.getElementById("email");
    user.innerText = null;
}

