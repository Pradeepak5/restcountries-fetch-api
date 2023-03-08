fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => countries(data))
.catch(()=>{
    const error = document.createElement("p");
    error.innerHTML = "reload and wait for few seconds....";
    document.getElementById("root").appendChild(error);
})

const countries = (data) =>{
    data.forEach((ele)=>{
        const h1Ele = document.createElement("h1");
        h1Ele.innerHTML = ele.name;
        document.getElementById("root").appendChild(h1Ele);
        const img = document.createElement("img");
        img.src = ele.flags.svg;
        img.style.width ="100px"
        document.getElementById("root").appendChild(img); 
        const pEle1 = document.createElement("p");
        pEle1.innerHTML = "Capital : "+ele.capital;
        document.getElementById("root").appendChild(pEle1); 
        const pEle2 = document.createElement("p");
        pEle2.innerHTML = "Region : "+ele.region;
        document.getElementById("root").appendChild(pEle2); 
        const pEle3 = document.createElement("p");
        pEle3.innerHTML = "Country-Code : "+ele.currencies;
        document.getElementById("root").appendChild(pEle3);
        const btn1 = document.createElement("button");
        btn1.innerHTML = "click me";
        document.getElementById("root").appendChild(btn1);
    })
}