
const utilityApp = [
    {
        name: "Encoders-Decoders",
        id: "encoder-decoder",
        operations: [
            {
                name: "URL Encode/Decode",
                operation: [
                    {
                        id: "btn-encode-url",
                        name: "Encode URL",
                        noOfInputs: 1,
                        placeholder: ["Enter URL"]
                    },
                    {
                        id: "btn-decode-url",
                        name: "Decode URL",
                        noOfInputs: 1,
                        placeholder: ["Enter URL"]
                    }
                ],
                id: "encode-decode-url"
            },
            {
                name: "Base64 Encode",
                operation: [{
                    id: "btn-base64-encode",
                    name: "Base64 Encode",
                    noOfInputs: 1,
                    placeholder: ["Enter Your Value"]
                }],
                id: "base64-encode"
            },
            {
                name: "Base64 Decode",
                operation: [{
                    id: "btn-base64-decode",
                    name: "Base64 Decode",
                    noOfInputs: 1,
                    placeholder: ["Enter Your Value"]
                }],
                id: "base64-decode",
            },
            {
                name: "MD5 Hash Generator",
                operation: [{
                    id: "btn-md5",
                    name: "Generate",
                    noOfInputs: 1,
                    placeholder: ["Enter Your Value"]
                }],
                id: "md5",
            },
            {
                name: "SHA-1 Hash Generator",
                operation: [{
                    id: "btn-sha1",
                    name: "Generate",
                    noOfInputs: 1,
                    placeholder: ["Enter Your Value"]
                }],
                id: "sha1",
            },
            {
                name: "SHA-256 Hash Generator",
                operation: [{
                    id: "btn-sha256",
                    name: "Generate",
                    noOfInputs: 1,
                    placeholder: ["Enter Your Value"]
                }],
                id: "sha256",
            },
            {
                name: "SHA-512 Hash Generator",
                operation: [{
                    id: "btn-sha512",
                    name: "Generate",
                    noOfInputs: 1,
                    placeholder: ["Enter Your Value"]
                }],
                id: "sha512",
            }
        ]
    },
    {
        name: "RGB-HEX Converter",
        id: "rgb-hex",
        operations: [
            {
                name: "RGB to HEX",
                operation: [{
                    name: "Convert",
                    id: "btn-rgbtohex",
                    noOfInputs: 3,
                    placeholder: ["Enter Red Value", "Enter Green Value", "Enter Blue Value"]
                }],
                id: "rgbtohex"
            },
            {
                name: "HEX to RGB",
                operation: [{
                    name: "Convert",
                    id: "btn-hextorgb",
                    noOfInputs: 1,
                    placeholder: ["Enter Hex Value eg:#345434"]
                }],
                id: "hextorgb"
            }
        ]
    },
    {
        name: "Timestamp Converter",
        id: "timestamp",
        operations: [
            {
                name: "Epoch Time to Human Date",
                operation: [{
                    name: "Convert",
                    id: "btn-epochtohuman",
                    noOfInputs: 1,
                    placeholder: ["Enter Millisecond Value"]
                }],
                id: "epochtohuman"
            },
            {
                name: "Human Date to Epoch Time",
                operation: [{
                    name: "Convert",
                    id: "btn-humantoepoch",
                    noOfInputs: 1,
                    placeholder: ["Enter Date eg: 2019,2,3"]
                }],
                id: "humantoepoch"
            }
        ]
    },
    {
        name: "Unit Converter",
        id: "unit",
        operations: [
            {
                name: "Meter To Kilometer",
                operation: [{
                    name: "Convert",
                    id: "btn-mtokm",
                    noOfInputs: 1,
                    placeholder: ["Enter Meter Value"]
                }],
                id: "mtokm"
            },
            {
                name: "Centimeter to Kilometer",
                operation: [{
                    name: "Convert",
                    id: "btn-cmtokm",
                    noOfInputs: 1,
                    placeholder: ["Enter Centimeter Value"]
                }],
                id: "cmtokm"
            },
            {
                name: "Kilometer to mile",
                operation: [{
                    name: "Convert",
                    id: "btn-kmtomile",
                    noOfInputs: 1,
                    placeholder: ["Enter Kilometer Value"]
                }],
                id: "kmtomile"
            }
        ]
    },
    {
        name: "Number Base Converter",
        id: "number-base",
        operations: [
            {
                name: "Binary To Decimal Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-binarytodecimal",
                    noOfInputs: 1,
                    placeholder: ["Enter Binary Value"]
                }],
                id: "binarytodecimal"
            },
            {
                name: "Binary To Hexadecimal Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-binarytohex",
                    noOfInputs: 1,
                    placeholder: ["Enter Binary Value"]
                }],
                id: "binarytohex"
            },
            {
                name: "Binary to Octal Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-binarytooctal",
                    noOfInputs: 1,
                    placeholder: ["Enter Binary Value"]
                }],
                id: "binarytooctal"
            },
            {
                name: "Decimal to Binary Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-decimaltobinary",
                    noOfInputs: 1,
                    placeholder: ["Enter Decimal Value"]
                }],
                id: "decimaltobinary"
            },
            {
                name: "Decimal to Hex Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-decimaltohex",
                    noOfInputs: 1,
                    placeholder: ["Enter Decimal Value"]
                }],
                id: "decimaltohex"
            },
            {
                name: "Decimal to Octal Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-decimaltooctal",
                    noOfInputs: 1,
                    placeholder: ["Enter Decimal Value"]
                }],
                id: "decimaltooctal"
            },
            {
                name: "Hex to Binary Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-hextobinary",
                    noOfInputs: 1,
                    placeholder: ["Enter Hex Value"]
                }],
                id: "hextobinary"
            },
            {
                name: "Hex to Decimal Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-hextodecimal",
                    noOfInputs: 1,
                    placeholder: ["Enter Hex Value"]
                }],
                id: "hextodecimal"
            },
            {
                name: "Hex to Octal Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-hextooctal",
                    noOfInputs: 1,
                    placeholder: ["Enter Hex Value"]
                }],
                id: "hextooctal"
            },
            {
                name: "Octal to Binary Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-octaltobinary",
                    noOfInputs: 1,
                    placeholder: ["Enter Octal Value"]
                }],
                id: "octaltobinary"
            },
            {
                name: "Octal to Decimal Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-octaltodecimal",
                    noOfInputs: 1,
                    placeholder: ["Enter Octal Value"]
                }],
                id: "octaltodecimal"
            },
            {
                name: "Octal to Hex Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-octaltohex",
                    noOfInputs: 1,
                    placeholder: ["Enter Octal Value"]
                }],
                id: "octaltohex"
            }
        ]
    },
    {
        name: "Text Tools/String Utilities",
        id: "text-tool-string",
        operations: [
            {
                name: "Lowercase Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-lowercase",
                    noOfInputs: 1,
                    placeholder: ["Enter some value"]
                }],
                id: "lowercase"
            },
            {
                name: "Uppercase Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-uppercase",
                    noOfInputs: 1,
                    placeholder: ["Enter some value"]
                }],
                id: "uppercase"
            },
            {
                name: "Reverse Converter",
                operation: [{
                    name: "Convert",
                    id: "btn-reverse",
                    noOfInputs: 1,
                    placeholder: ["Enter some value"]
                }],
                id: "reverse"
            },
            {
                name: "Character Count",
                operation: [{
                    name: "Convert",
                    id: "btn-count",
                    noOfInputs: 1,
                    placeholder: ["Enter some value"]
                }],
                id: "count"
            }
        ]
    }
]

const nav = [
    { id: "encoder-decoder", path: "./encoder-decoder.html", name: "Encoders/Decoders" },
    { id: "rgb-hex", path: "./rgb-hex.html", name: "RGB/HEX Converter" },
    { id: "timestamp", path: "./timestamp.html", name: "Timestamp Converter" },
    { id: "unit", path: "./unit.html", name: "Unit Converter" },
    { id: "number-base", path: "./number-base.html", name: "Number Base Converter" },
    { id: "text-tool-string", path: "./text-tool-string.html", name: "Text Tools/String Utilities" }
]

const navEle = document.querySelector("nav");

for (let navitem of nav) {
    const link = document.createElement("a");
    link.setAttribute("href", navitem.path);
    link.id = navitem.id;
    link.innerText = navitem.name;
    navEle.appendChild(link);
}

window.onload = () => {
    nav.forEach(nav => {
        const currentUtility = window.location.pathname.split("/")[1];
        if (window.location.pathname.split("/")[1].includes(nav.id)) {
            document.getElementById(nav.id).classList.add("active");
            constructSelectedUtility(currentUtility.split(".")[0]);
        }
    })
}

const constructSelectedUtility = (id) => {
    const filteredUtilityApp = utilityApp.filter(app => app.id === id);
    const title = document.querySelector("#title-text");
    title.innerText = filteredUtilityApp[0].name;
    buildUtilityScreen(filteredUtilityApp[0].operations);
}


const section = document.querySelector(".section");
const buildUtilityScreen = (operations) => {
    document.querySelector(".section").innerHTML = ``;
    for (let operation of operations) {
        const container = document.createElement("a");
        container.classList.add("container");
        container.id = `${operation.id}`
        container.href = "#main"
        container.innerText = `${operation.name}`
        container.onclick = () => constructSelectedApp(container.id, operations)
        section.appendChild(container)
    }
}


const main = document.querySelector(".main");
main.id = "main";
const defaultMessage = document.createElement("div");
defaultMessage.innerText = "Please Select One App From Above";
defaultMessage.classList.add("default-message");
main.appendChild(defaultMessage);

const constructSelectedApp = (appId, operations) => {
    defaultMessage.style.display = "none";
    main.innerHTML = ``;
    const parentEle = document.createElement("div");
    parentEle.classList.add("parent")
    const appName = document.createElement("h3");
    appName.classList.add("default-padding");
    appName.style.textAlign = "center";
    const filteredApp = operations.filter(app => app.id === appId);
    appName.innerText = filteredApp[0].name;
    const message = document.createElement("div");
    message.classList.add("default-padding");
    message.innerText = "Please Enter Your Input Below : "
    parentEle.appendChild(appName);
    parentEle.appendChild(message);
    for (let i = 0; i < filteredApp[0].operation[0].noOfInputs; i++) {
        var inputEle = document.createElement("input");
        inputEle.type = "text";
        inputEle.placeholder = filteredApp[0].operation[0].placeholder[i]
        inputEle.classList.add("input-text");
        inputEle.id = "input-" + filteredApp[0].id + i;
        parentEle.appendChild(inputEle);
    }
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
    window.location.hash = appId;
}

const operationFunc = (value, id) => {
    switch (id) {
        case "btn-encode-url": encodeUrl(value); break;
        case "btn-decode-url": decodeUrl(value); break;
        case "btn-base64-encode": base64Encode(value); break;
        case "btn-base64-decode": base64Decode(value); clearInput(); break;
        case "btn-md5": md5(value); break;
        case "btn-sha1": sha1(value); break;
        case "btn-sha256": sha256(value); break;
        case "btn-sha512": sha512(value); break;
        case "btn-rgbtohex": rgbtohex(); break;
        case "btn-hextorgb": hextorgb(value); break;
        case "btn-epochtohuman": epochToHumanDate(value); break;
        case "btn-humantoepoch": humanToEpochTime(value); break;
        case "btn-mtokm": meterToKilometer(value); break;
        case "btn-cmtokm": centimeterToKilometer(value); break;
        case "btn-kmtomile": kilometerToMile(value); break;
        case "btn-binarytodecimal": binaryToDecimal(value); break;
        case "btn-binarytohex": binaryToHex(value); break;
        case "btn-binarytooctal": binaryToOctal(value); break;
        case "btn-decimaltobinary": decimalToBinary(value); break;
        case "btn-decimaltohex": decimalToHex(value); break;
        case "btn-decimaltooctal": decimalToOctal(value); break;
        case "btn-hextobinary": hexToBinary(value); break;
        case "btn-hextodecimal": hexToDecimal(value); break;
        case "btn-hextooctal": hexToOctal(value); break;
        case "btn-octaltobinary": octalToBinary(value); break;
        case "btn-octaltodecimal": octalToDecimal(value); break;
        case "btn-octaltohex": octalToHex(value); break;
        case "btn-lowercase": lowercase(value); break;
        case "btn-uppercase": uppercase(value); break;
        case "btn-reverse": reverse(value); break;
        case "btn-count": count(value); break;
    }
}

const encodeUrl = (value) => {
    document.querySelector(".output").innerText = encodeURIComponent(value);
    clearInput();
}

const decodeUrl = (value) => {
    document.querySelector(".output").innerText = decodeURIComponent(value);
    clearInput();
}

const base64Encode = (value) => {
    document.querySelector(".output").innerText = atob(value);
    clearInput();
}

const base64Decode = (value) => {
    document.querySelector(".output").innerText = btoa(value);
    clearInput();
}

const md5 = (value) => {
    document.querySelector(".output").innerText = CryptoJS.MD5(value);
    clearInput();
}

const sha1 = (value) => {
    document.querySelector(".output").innerText = CryptoJS.SHA1(value);
    clearInput();
}

const sha256 = (value) => {
    document.querySelector(".output").innerText = CryptoJS.SHA256(value);
    clearInput();
}

const sha512 = (value) => {
    document.querySelector(".output").innerText = CryptoJS.SHA512(value);
    clearInput();
}

const epochToHumanDate = (value) => {
    let humanDate = new Date(Number(value));
    document.querySelector(".output").innerText = `{ Year : ${humanDate.getFullYear()}, Month : ${humanDate.getMonth()}, Date : ${humanDate.getDate()}, Hours : ${humanDate.getHours()}, Minutes : ${humanDate.getMinutes()}, Seconds: ${humanDate.getSeconds()}}`;
    clearInput();
}

const humanToEpochTime = (value) => {
    document.querySelector(".output").innerText = Date.parse(value);
    clearInput();
}
const rgbtohex = () => {
    let red = document.querySelector("#input-rgbtohex0").value;
    let green = document.querySelector("#input-rgbtohex1").value;
    let blue = document.querySelector("#input-rgbtohex2").value;
    red = Number(red).toString(16);
    green = Number(green).toString(16);
    blue = Number(blue).toString(16);
    if (red.length == 1)
        red = "0" + red;
    if (green.length == 1)
        green = "0" + green;
    if (blue.length == 1)
        blue = "0" + blue;
    document.querySelector(".output").innerText = "#" + red + green + blue;
    clearInput();
}

const hextorgb = (value) => {
    let red = 0, green = 0, blue = 0;
    if (value.length == 4) {
        red = "0x" + value[1] + value[1];
        green = "0x" + value[2] + value[2];
        blue = "0x" + value[3] + value[3];
    } else if (value.length == 7) {
        red = "0x" + value[1] + value[2];
        green = "0x" + value[3] + value[4];
        blue = "0x" + value[5] + value[6];
    }
    document.querySelector(".output").innerText = "rgb(" + +red + "," + +green + "," + +blue + ")";
    clearInput();
}

const meterToKilometer = (value) => {
    document.querySelector(".output").innerText = (value / 1000).toFixed(2);
    clearInput();
}

const centimeterToKilometer = (value) => {
    document.querySelector(".output").innerText = (value / 100000).toFixed(2);
    clearInput();
}

const kilometerToMile = (value) => {
    document.querySelector(".output").innerText = (value * 0.621371).toFixed(2);
    clearInput();
}

const binaryToDecimal = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 2).toString(10);
    clearInput();
}

const binaryToHex = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 2).toString(16);
    clearInput();
}

const binaryToOctal = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 2).toString(8);
    clearInput();
}

const decimalToBinary = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 10).toString(2);
    clearInput();
}

const decimalToHex = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 10).toString(16);
    clearInput();
}

const decimalToOctal = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 10).toString(8);
    clearInput();
}

const hexToBinary = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 16).toString(2);
    clearInput();
}

const hexToDecimal = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 16).toString(10);
    clearInput();
}

const hexToOctal = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 16).toString(8);
    clearInput();
}

const octalToBinary = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 8).toString(2);
    clearInput();
}

const octalToDecimal = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 8).toString(10);
    clearInput();
}

const octalToHex = (value) => {
    document.querySelector(".output").innerText = parseInt(value, 8).toString(16);
    clearInput();
}

const lowercase = (value) => {
    document.querySelector(".output").innerText = value.toLowerCase();
    clearInput();
}

const uppercase = (value) => {
    document.querySelector(".output").innerText = value.toUpperCase();
    clearInput();
}

const reverse = (value) => {
    let spliitedValue = value.split("");
    let reversedValue = spliitedValue.reverse();
    document.querySelector(".output").innerText = reversedValue.join("");
    clearInput();
}

const count = (value) => {
    document.querySelector(".output").innerText = value.length;
    clearInput();
}

const clearInput = () => {
    document.querySelectorAll(".input-text").forEach(input => input.value = "")
}