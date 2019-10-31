fetch("https://www.reddit.com/r/aww/.json")
    .then(res => res.json())
    .then(data => {

        for (childrenEl of data.data.children) {
            let article = document.querySelector(".main");
            let subredditEl = document.createElement("div");
            let pEL = document.createElement("p");
            subredditEl.appendChild(pEL)
            pEL.innerText = childrenEl.data.title;
            pEL.classList.add("aww")
            article.appendChild(subredditEl);

            let picEL = document.createElement("div")
            picEL.innerHTML = childrenEl.data.thumbnail

            article.appendChild(picEL)




        }
    })