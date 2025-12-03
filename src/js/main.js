// Selecionando elementos
const formList = document.querySelector("#form")
const inputlist = document.querySelector("#input-items")
const list = document.querySelector("#main-list")

const messageContainer = document.querySelector("#message-container")

const messageRemove = messageContainer.querySelector(".message-text-remove")
const messageAdd = messageContainer.querySelector(".message-text-add")

const message_config = {
  add: {
    text: messageAdd.textContent,
    cssClass: messageAdd.getAttribute("class"),
  },
  remove: {
    text: messageRemove.textContent,
    cssClass: messageRemove.getAttribute("class"),
  },
}

messageAdd.remove()
messageRemove.remove()

inputlist.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!inputlist.value) return
    createItem()
  }
})

formList.addEventListener("submit", function (e) {
  e.preventDefault()
  const inputListValue = inputlist.value
  if (!inputListValue) return
  createItem()
})

function createItem() {
  const item = document.createElement("li")
  const chk = document.createElement("input")
  const p = document.createElement("p")
  const img = document.createElement("img")
  item.appendChild(chk)
  item.appendChild(p)
  item.appendChild(img)
  chk.setAttribute("type", "checkbox")
  chk.classList.add("item-check")
  p.textContent = inputlist.value
  img.setAttribute("src", "./assets/image/remove.png")
  img.setAttribute("alt", "Remover item")
  img.classList.add("remove-icon")
  list.appendChild(item)
  clearInput()
  displayMessage("add")
}

function clearInput() {
  inputlist.value = ""
  inputlist.focus()
}
// Remover mensagem
list.addEventListener("click", function (e) {
  const element = e.target
  if (element.classList.contains("remove-icon")) {
    const itemRemove = element.parentNode
    itemRemove.remove()
    displayMessage("remove")
  }
})

// console.log(message_config.add.text, message_config.add.cssClass)
// console.log(message_config.remove.text, message_config.remove.cssClass)

function displayMessage(type) {
  const config = message_config[type]

  const message = document.createElement("p")
  const span = document.createElement("span")

  message.innerText = config.text
  message.classList.add(config.cssClass)

  message.style.display = "inline-block"

  span.textContent = "!"
  span.classList.add("message-icon")

  message.prepend(span)
  messageContainer.appendChild(message)
  setTimeout(function () {
    messageContainer.innerHTML = ""
  }, 5000)
}
