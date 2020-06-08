/*
var links = document.querySelectorAll('.row a');
for( var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener("click", ()=> {
        chrome.tabs.create({url:'https://'+ a.pathname})
    })
}
*/

document.querySelector('#mdn').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://developer.mozilla.org/fr/docs/Web/JavaScript'})
})
document.querySelector('#st').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://stackoverflow.com'})
})
document.querySelector('#git').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://github.com'})
})
document.querySelector('#fig').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://figma.com'})
})
document.querySelector('#lin').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://www.linkedin.com/'})
})
document.querySelector('#disc').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://discord.com'})
})
document.querySelector('#twi').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://www.twitch.tv'})
})
document.querySelector('#sla').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://slack.com'})
})
document.querySelector('#mail').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://mail.google.com'})
})
document.querySelector('#rd').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://reddit.com'})
})
document.querySelector('#yt').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://youtube.com'})
})
document.querySelector('#tw').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://twitter.com'})
})
document.querySelector('#fb').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://facebook.com'})
})
document.querySelector('#cs').addEventListener("click", ()=> {
    chrome.tabs.create({url:'https://intra.codeloccol.org'})
})