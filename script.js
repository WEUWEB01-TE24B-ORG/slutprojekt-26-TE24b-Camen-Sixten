function handleSubmit(event) {
    event.preventDefault();
    
    getUser = document.querySelector("input").value;
    getText = document.querySelector("textarea").value;

    
    div = document.createElement("div");
    h2 = document.createElement("h2");
    p = document.createElement("p");
    
    h2.textContent = getUser;
    p.textContent = getText;
    
    div.classList.add("forumform");
    div.classList.add("kommetar");
    
    div.appendChild(h2);
    div.appendChild(p);
    
    document.querySelector(".kommentarer").appendChild(div);
    
    document.querySelector("textarea").value = "";
}