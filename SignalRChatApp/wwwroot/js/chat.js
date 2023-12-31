"use-strict"

var connection = new signalR.HubConnectionBuilder().withUrl("./chatHub").build();

document.getElementById("sendButton").disabled = true;

connection.on("RecieveMessage", function (message, user) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = `${user} says ${message}`;
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.Invoke("sendMessage", message, user).catch(function (err) {
        console.error(err.toString());
    });
    event.preventDefault();
});
