let params = {};
let regex = /([^&=]+)=([^&]*)/g, m
while(m=regex.exec(location.href)){
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}
if(Object.keys(params).length > 0) localStorage.setItem("authInfo", JSON.stringify(params));
//Showing only url and hiding the url containing token
window.history.pushState({}, document.title, "/" + "profile.html");
//saving token to the local storage in browser
let info = JSON.parse(localStorage.getItem("authInfo"));
//getting all the required dom ids
let divResult = document.getElementById("result");
let totalMessages = document.getElementById("total");
let slider = document.getElementById("number");

//main
slider.onchange = () => {
    divResult.innerHTML = "";
    let maxResults = slider.value;
    totalMessages.innerHTML = "Total Messages: " + maxResults;
    getMessages(maxResults);
}

function getMessages(maxResults){
    fetch("https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=" + maxResults, {
    method: "GET",
    headers: {
        authorization: `Bearer ${info.access_token}`
    }
    })
    .then(data => data.json())
    .then((emails)=> {
        Array.from(emails.messages).forEach((message) => {
            let emailId = message.id;
            fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${emailId}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${info.access_token}`
                }
            })
            .then((info) => info.json())
            .then((info) => {
                console.log(info);
                let res = {};
                Array.from(info.payload.headers).forEach((message) => {
                    console.log(message);
                    if(message.name == "Date" || message.name == "From" || message.name == "To" || message.name == "Subject"){
                        res[message.name] = message.value;
                    }
                })
                divResult.innerHTML += `
                <tr>
                    <td>${res["Date"]}</td>
                    <td>${res["From"]}</td>
                    <td>${res["To"]}</td>
                    <td>${res["Subject"]}</td>
                </tr>
                `
            });
        });
    });
}

function logout(){
    fetch(
        "https://oauth2.googleapis.com/revoke?token=" + info["access_token"], 
        {
            method: "POST",
            headers: {"Content-type":"application/x-www-form-urlencoded"}
        }
    )
    .then(() => {
        location.href = "http://127.0.0.1:5500/index.html"
    });
}
