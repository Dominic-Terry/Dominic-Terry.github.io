export const currentURL = new URL(window.location.href);
export const params = currentURL.searchParams;

const sites = {

    "Home": "https://dominic-terry.github.io/index.html",
    "CVQ": "https://dominic-terry.github.io/cv-qualifications.html",
    "SoftEng": "https://dominic-terry.github.io/soft-eng.html",
    "SUAS": "https://dominic-terry.github.io/suas.html",
    "Blog": "https://dominic-terry.github.io/blog.html",
    "Contact": "https://dominic-terry.github.io/contact.html",
    "Explorer": "https://dominic-terry.github.io/explorer.html",
    "Playground": "https://dominic-terry.github.io/playground.html"

}

export function moveToSite(url, device) {
    let newSite = new URL(sites[url]);
    appendDataToURL(newSite, "device", device);

    console.log(newSite);
    //go to newsite
}

export function appendDataToURL(url, variable, data) {
    url.searchParams.append(variable, data);
}