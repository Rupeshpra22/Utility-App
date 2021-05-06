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
        name: "Base64 Decode",
        operation: [{ id: "btn-base64-decode", name: "Base64 Decode" }],
        id: "base64-decode"
    },
    {
        name: "Base64 Encode",
        operation: [{ id: "btn-base64-encode", name: "Base64 Encode" }],
        id: "base64-encode"
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

const section = document.querySelector(".section");
for (let encoderDecoder of encoderDecoders) {
    const container = document.createElement("div");
    container.classList.add("container");
    container.id = `${encoderDecoder.id}`
    container.innerText = `${encoderDecoder.name}`
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
    inputEle.id = "input-"+filteredApp[0].id;
    parentEle.appendChild(appName);
    parentEle.appendChild(message);
    parentEle.appendChild(inputEle);
    const button = document.createElement("div");
    button.classList.add("button");
    for (let operation of filteredApp[0].operation) {
        const btn = document.createElement("input");
        btn.type = "button";
        btn.value = operation.name;
        btn.id = operation.id
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

const encoderDecoder = document.querySelector("#encode-decode-url");
const base64Decode = document.querySelector("#base64-decode");
const base64Encode = document.querySelector("#base64-encode");
const md5 = document.querySelector("#md5");
const sha1 = document.querySelector("#sha1");
const sha256 = document.querySelector("#sha256");
const sha512 = document.querySelector("#sha512");

encoderDecoder.addEventListener('click', (event) => {
    const appId = event.target.id;
    constructSelectedApp(appId);
})

base64Decode.addEventListener("click", (event) => {
    const appId = event.target.id;
    constructSelectedApp(appId);
})
base64Encode.addEventListener("click", (event) => {
    const appId = event.target.id;
    constructSelectedApp(appId);
})
md5.addEventListener("click", (event) => {
    const appId = event.target.id;
    constructSelectedApp(appId);
})
sha1.addEventListener("click", (event) => {
    const appId = event.target.id;
    constructSelectedApp(appId);
})
sha256.addEventListener("click", (event) => {
    const appId = event.target.id;
    constructSelectedApp(appId);
})
sha512.addEventListener("click", (event) => {
    const appId = event.target.id;
    constructSelectedApp(appId);
})

document.querySelector(".main").addEventListener("DOMSubtreeModified", () => {
    const btnEncode = document.querySelector("#btn-encode-url");
    const btnDecode = document.querySelector("#btn-decode-url");
    const btnBase64Decode = document.querySelector("#btn-base64-decode");
    const btnBase64Encode = document.querySelector("#btn-base64-encode");
    const btnMd5 = document.querySelector("#btn-md5");
    const btnSha1 = document.querySelector("#btn-sha1");
    const btnSha256 = document.querySelector("#btn-sha256");
    const btnSha512 = document.querySelector("#btn-sha512");
    
    if (btnEncode != null) {
        btnEncode.addEventListener("click", () => {
            document.querySelector(".output").innerText = encodeURIComponent(document.querySelector("#input-encode-decode-url").value);
        })
    }
    if(btnDecode!=null){
        btnDecode.addEventListener("click", () => {
            document.querySelector(".output").innerText = decodeURIComponent(document.querySelector("#input-encode-decode-url").value)
        })
    }

    if(btnBase64Decode!=null){
        btnBase64Decode.addEventListener("click", () => {
            document.querySelector(".output").innerText = atob(document.querySelector("#input-base64-decode").value).toString('base64')
        })
    }

    if(btnBase64Encode!=null){
        btnBase64Encode.addEventListener("click", () => {
            document.querySelector(".output").innerText = btoa(document.querySelector("#input-base64-encode").value).toString('base64')
        })
    }

    if(btnMd5!=null){
        btnMd5.addEventListener("click", () => {
            document.querySelector(".output").innerText = CryptoJS.MD5(document.querySelector("#input-md5").value)
        })
    }

    if(btnSha1!=null){
        btnSha1.addEventListener("click", () => {
            document.querySelector(".output").innerText = CryptoJS.SHA1(document.querySelector("#input-sha1").value)
        })
    }

    if(btnSha256!=null){
        btnSha256.addEventListener("click", () => {
            document.querySelector(".output").innerText = CryptoJS.SHA256(document.querySelector("#input-sha256").value)
        })
    }

    if(btnSha512!=null){
        btnSha512.addEventListener("click", () => {
            document.querySelector(".output").innerText = CryptoJS.SHA512(document.querySelector("#input-sha512").value)
        })
    }
})