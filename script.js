let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [
    { name: "Paulo", number: "(47) 9923-7171" },
    { name: "Thiago", number: "(19) 9924-2828" },
    { name: "Alice", number: "(24) 3339-1455" },
    { name: "Andressa", number: "(21) 3338-5566" },
    { name: "Kayke", number: "(48) 3339-2121" },
]

function search() {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Contact Found, Name: ${contacts[i].name} Tel: ${contacts[i].number}`

            break
        } else {
            p.innerHTML = "Contact Not Found, Use The List"
        }

    }
}
