export let device = null;
import { moveToSite, params, appendDataToURL, currentURL } from './siteData.mjs';

if ((params?.get('device') != undefined)) {
    device = params.get('device');
} else {
    device = identifyUser();
    appendDataToURL(currentURL, "device", device);
    moveToSite("Home", device);
}

function identifyUser() {
    device = null;
    let userAgent = new UserAgent().parse(navigator.userAgent);
    let devices = {
        "isMobile": false,
        "isDesktop": false,
        "isBot": false
    }

    let cycle = 0;

    for (let item in userAgent) {

        if (item == "isMobile" || item == "isDesktop" || item == "isBot") {

            for (device in devices) {
                if (item == device) {
                    devices[device] = userAgent[item];
                }
            }
        }
    }

    device = null;
    if (devices["isMobile"] == true) { // mobile device

        device = "mobile";
        console.log("%cUser identified as a mobile device", "background-color: green");

    } else if (devices["isDesktop"] == true) { // Desktop device

        device = "desktop";
        console.log("%cUser identified as a desktop device", "background-color: darkgreen");


    } else if (devices["isBot"] == true) { // identified as bot

        device = "bot";
        console.warn("User identified as a bot");

    } else {
        console.group();
        console.error("no userAgent identified");
        console.table(userAgent);
        console.groupEnd();
    }
    return device;
}