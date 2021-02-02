export const currentURL = new URL(window.location.href);
export const params = currentURL.searchParams;

// const sites = {

//     "Home": "https://dominic-terry.github.io/index.html",
//     "CVQ": "https://dominic-terry.github.io/cv-qualifications.html",
//     "SoftEng": "https://dominic-terry.github.io/soft-eng.html",
//     "SUAS": "https://dominic-terry.github.io/suas.html",
//     "Blog": "https://dominic-terry.github.io/blog.html",
//     "Contact": "https://dominic-terry.github.io/contact.html",
//     "Explorer": "https://dominic-terry.github.io/explorer.html",
//     "Playground": "https://dominic-terry.github.io/playground.html"

// }

/** 
 * 
 * used for local debug, remove for final and uncomment above
 * 
 */


const sites = {

    "Home": currentURL.href.split("/").slice(0,-1).join("/") + "/index.html",
    "CVQ": currentURL.href.split("/").slice(0,-1).join("/") + "/cv-qualifications.html",
    "SoftEng": currentURL.href.split("/").slice(0,-1).join("/") + "/soft-eng.html",
    "SUAS": currentURL.href.split("/").slice(0,-1).join("/") + "/suas.html",
    "Blog": currentURL.href.split("/").slice(0,-1).join("/") + "/blog.html",
    "Contact": currentURL.href.split("/").slice(0,-1).join("/") + "/contact.html",
    "Explorer": currentURL.href.split("/").slice(0,-1).join("/") + "/explorer.html",
    "Playground": currentURL.href.split("/").slice(0,-1).join("/") + "/playground.html"

}


const available = {

    "Home": true,
    "CVQ": false,
    "SoftEng": false,
    "SUAS": false,
    "Blog": false,
    "Contact": false,
    "Explorer": false,
    "Playground": false

}
/**
 * 
 * To here
 * 
 */

 


export function addBTNListeners(BTNS, device) {

    for (let BTN of BTNS) {
        BTN.addEventListener("click", redirect => {

            moveToSite(BTN.className.split(" ").pop(), device);

        });
    }
}


export function moveToSite(url, device) {

    if (available[url]) {
        let newSite = new URL(sites[url]);
        appendDataToURL(newSite, "device", device);

        window.location.href = newSite;
    } else {
        alert("Unfortuantly this page isn't finished yet, sorry!")
    }
}

export function appendDataToURL(url, key, data) {
    return url.searchParams.append(key, data);
}
