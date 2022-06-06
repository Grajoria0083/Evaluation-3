localStorage.setItem("purchase", JSON.stringify(el))
let get_data = JSON.parse(localStorage.getItem("user"))
alert("Hurray! purchase successful")
// console.log("el", el.price)
// console.log("data", get_data[0].amount)
let total = +get_data[0].amount - +el.price
console.log(total)
document.getElementById("wallet_balance").innerText = total


let purchase = get_data = JSON.parse(localStorage.getItem("purchase"))
purchase.map(function (el) {
    let container = document.getElementById("voucher_list")

    let box = document.createElement("div")
    box.setAttribute("class", "voucher")

    let box_img = document.createElement("div")
    let box_p = document.createElement("div")

    let image = document.createElement("img")
    image.src = el.image
    let name = document.createElement("p")
    name.innerText = el.name
    let price = document.createElement("p")
    price.innerText = el.price
    let btn = document.createElement("button")
    btn.innerText = "buy"
    // btn.addEventListener("click", function () {
    //     // buy(el)
    box_img.append(image)
    box_p.append(name, price, btn)
    box.append(box_img, box_p)
    container.append(box)
})
