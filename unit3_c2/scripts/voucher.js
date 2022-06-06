let get_data = JSON.parse(localStorage.getItem("user"))
console.log(get_data[0].amount)
document.getElementById("wallet_balance").innerText = get_data[0].amount

async function show() {
    try {
        let res = await fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers')
        let data = await res.json()
        // console.log(data[0].vouchers)
        items(data[0].vouchers)
    } catch (err) {
        console.log(err)
    }
}
show()

function items(product) {
    let container = document.getElementById("voucher_list")
    product.map(function (el) {
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
        btn.addEventListener("click", function () {
            buy(el)
        })
        box_img.append(image)
        box_p.append(name, price, btn)
        box.append(box_img, box_p)
        container.append(box)

    })
}
function buy(el) {
    localStorage.setItem("purchase", JSON.stringify(el))
    let get_data = JSON.parse(localStorage.getItem("user"))
    if (get_data - +el.amount < 0)
        alert("Sorry! insufficient balance")
    else {
        alert("Hurray! purchase successful")
        // console.log("el", el.price)
        // console.log("data", get_data[0].amount)
        let total = +get_data[0].amount - +el.price
        console.log(total)
        document.getElementById("wallet_balance").innerText = total
    }
}
