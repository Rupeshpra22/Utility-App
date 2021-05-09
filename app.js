const encoderDecoders = [
    {
        name: "URL Encode/Decode",
        operation: [
            { id: "btn-encode-url", name: "Encode URL" },
            { id: "btn-decode-url", name: "Decode URL" }
        ],
        id: "encode-decode-url"
    },
    {
        name: "Base64 Encode",
        operation: [{ id: "btn-base64-encode", name: "Base64 Encode" }],
        id: "base64-encode"
    },
    {
        name: "Base64 Decode",
        operation: [{ id: "btn-base64-decode", name: "Base64 Decode" }],
        id: "base64-decode"
    },
    {
        name: "MD5 Hash Generator",
        operation: [{ id: "btn-md5", name: "Generate" }],
        id: "md5"
    },
    {
        name: "SHA-1 Hash Generator",
        operation: [{ id: "btn-sha1", name: "Generate" }],
        id: "sha1"
    },
    {
        name: "SHA-256 Hash Generator",
        operation: [{ id: "btn-sha256", name: "Generate" }],
        id: "sha256"
    },
    {
        name: "SHA-512 Hash Generator",
        operation: [{ id: "btn-sha512", name: "Generate" }],
        id: "sha512"
    }
]

const navId = [
    { name: "encoder-decoder" },
    { name: "rgb-hex" },
    { name: "timestamp" },
    { name: "unit" },
    { name: "number-base" },
    { name: "text-tool-string" }
]
// Array.from(navEle.children[0].classList).includes("active")
//window.location.pathname.split("/")[1].includes("timestamp")

window.onload = () => {
    navId.forEach(id=>{
        if(window.location.pathname.split("/")[1].includes(id.name)){
            document.getElementById(id.name).classList.add("active");
            return;
        }
    })    
}

const section = document.querySelector(".section");
for (let encoderDecoder of encoderDecoders) {
    const container = document.createElement("div");
    container.classList.add("container");
    container.id = `${encoderDecoder.id}`
    container.innerText = `${encoderDecoder.name}`
    container.onclick = () => constructSelectedApp(container.id)
    section.appendChild(container)
}

const main = document.querySelector(".main");
const defaultMessage = document.createElement("div");
defaultMessage.innerText = "Please Select One App From Above";
defaultMessage.classList.add("default-message");
main.appendChild(defaultMessage);

const constructSelectedApp = (appId) => {
    defaultMessage.style.display = "none";
    main.innerHTML = ``;
    const parentEle = document.createElement("div");
    parentEle.classList.add("parent")
    const appName = document.createElement("h3");
    appName.classList.add("default-padding");
    const filteredApp = encoderDecoders.filter(app => app.id === appId);
    appName.innerText = filteredApp[0].name;
    const message = document.createElement("div");
    message.classList.add("default-padding");
    message.innerText = "Please Enter Your Input Below : "
    const inputEle = document.createElement("input");
    inputEle.type = "text";
    inputEle.placeholder = "Enter some value";
    inputEle.classList.add("input-text");
    inputEle.id = "input-" + filteredApp[0].id;
    parentEle.appendChild(appName);
    parentEle.appendChild(message);
    parentEle.appendChild(inputEle);
    const button = document.createElement("div");
    button.classList.add("button");
    for (let operation of filteredApp[0].operation) {
        const btn = document.createElement("input");
        btn.type = "button";
        btn.value = operation.name;
        btn.id = operation.id;
        btn.onclick = () => operationFunc(inputEle.value, btn.id)
        btn.classList.add("operation")
        button.appendChild(btn);
        parentEle.appendChild(button);
    }
    const outputParent = document.createElement("h3");
    outputParent.classList.add("output-container")
    outputParent.innerText = "Output :"
    const output = document.createElement("div");
    output.classList.add("output");
    outputParent.appendChild(output);
    parentEle.appendChild(outputParent)
    main.appendChild(parentEle);
}

const operationFunc = (value, id) => {
    switch (id) {
        case "btn-encode-url": document.querySelector(".output").innerText = encodeURIComponent(value); clearInput(); break;
        case "btn-decode-url": document.querySelector(".output").innerText = decodeURIComponent(value); clearInput(); break;
        case "btn-base64-encode": document.querySelector(".output").innerText = atob(value); clearInput(); break;
        case "btn-base64-decode": document.querySelector(".output").innerText = btoa(value); clearInput(); break;
        case "btn-md5": document.querySelector(".output").innerText = CryptoJS.MD5(value); clearInput(); break;
        case "btn-sha1": document.querySelector(".output").innerText = CryptoJS.SHA1(value); clearInput(); break;
        case "btn-sha256": document.querySelector(".output").innerText = CryptoJS.SHA256(value); clearInput(); break;
        case "btn-sha512": document.querySelector(".output").innerText = CryptoJS.SHA512(value); clearInput(); break;
    }
}

const clearInput = () => {
    document.querySelector(".input-text").value = ""
}