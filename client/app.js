const loginForm = document.getElementById("welcome-form");
const messagesSection = document.getElementById("messages-section");
const messagesList = document.getElementById("messages-list");
const addMessageForm = document.getElementById("add-messages-form");
const userNameInput = document.getElementById("username");
const messageContentInput = document.getElementById("message-content");

let userName = "";

function login(event) {
  event.preventDefault();

  const username = userNameInput.value.trim();

  if (username === "") {
    alert("Nazwa użytkownika nie może być pusta!");
    return;
  }
  userName = username;

  loginForm.classList.remove("show");

  messagesSection.classList.add("show");

  console.log("Witaj,", userName);
}
loginForm.addEventListener("submit", login);

function sendMessage(event) {
  event.preventDefault();

  const messageInput = messageContentInput.value;
  if (!messageInput.length) {
    alert("Wiadomość nie może być pusta");
  } else {
    addMessage(userName, messageInput);
    messageContentInput.value = "";
  }
}
addMessageForm.addEventListener("submit", sendMessage);

function addMessage(author, content) {
  const message = document.createElement("li");
  message.classList.add("message");
  message.classList.add("message--received");
  if (author === userName) message.classList.add("message--self");
  message.innerHTML = `
      <h3 class="message__author">${userName === author ? "You" : author}</h3>
      <div class="message__content">
        ${content}
      </div>
    `;
  messagesList.appendChild(message);
}

userNameInput.setAttribute("autoComplete", "off");
messageContentInput.setAttribute("autoComplete", "off");
