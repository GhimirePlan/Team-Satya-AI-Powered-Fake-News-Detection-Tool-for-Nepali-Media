
function ismobile() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        a = true;
    } else {
        a = false;
    }
    return a;
}
const user = {
    connection: false,
    status: true,
    searchfor: datas['content'],
    news: {
        description: "Something went wrong while loading response. Try again",
        title: "Invalid Response By Server",
        date: "",
        source: {
            title: "",
            url: ""
        }
    }
};
chrome.contextMenus.removeAll()
chrome.contextMenus.create(
    { id: Date.now().toString(), title: `Chek if this is a fake News`, contexts: ["selection"] });
chrome.contextMenus.onClicked.addListener((e) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "Context_Menu_clicked", text: e.selectionText });
    });

}
)
var generatePassword = (
    length = 64,
    characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
) =>
    Array.from(crypto.getRandomValues(new Uint32Array(length)))
        .map((x) => characters[x % characters.length])
        .join('')
class HTTP {
    static cookiesExpireson = 3
    static origionHost = 'http://localhost:8000/'
    static POST(url, datas) {
        try {
            return new Promise((response, reject) => {
                const promise = chrome.cookies
                    .getAll(
                        {
                            url: this.origionHost
                        }
                    )
                    .then(
                        (cookies) => (
                            {
                                url: this.origionHost,
                                cookies
                            }
                        )
                    );
                datas['chromeruntimeid'] = chrome.runtime.id
                datas['csrfmiddlewaretoken'] = generatePassword()
                promise.then(document => {
                    const cookiesall = {}
                    for (let index = 0; index < document.cookies.length; index++) {
                        const cookie = document.cookies[index];
                        cookiesall[cookie.name] = cookie.value

                    }
                    const data = new FormData()
                    const proceedAction = () => {
                        for (const key in datas) {
                            data.append(key, datas[key])
                        }
                        try {
                            fetch(this.origionHost + url,
                                {
                                    method: "POST",
                                    body: data
                                })
                                .then(function (res) {
                                    try {
                                        response(res.json())
                                    } catch (error) {
                                        response({
                                            connection: false,
                                            status: true,
                                            searchfor: datas['content'],
                                            news: {
                                                description: "Something went wrong while loading response. Try again",
                                                title: "Invalid Response By Server",
                                                date: "",
                                                source: {
                                                    title: "",
                                                    url: ""
                                                }
                                            }
                                        })
                                    }
                                }).catch(res => {

                                    response({
                                        connection: false,
                                        status: true,
                                        searchfor: datas['content'],
                                        news: {
                                            description: "Request Failed deu to connection lost. Check you wifi connection and try again..",
                                            title: "Network Connection Failed",
                                            date: "",
                                            source: {
                                                title: "",
                                                url: ""
                                            }
                                        }
                                    })
                                })
                        } catch (error) {

                            console.log(error)
                        }
                    }
                    if (cookiesall["csrftoken"]) {
                        datas['csrfmiddlewaretoken'] = cookiesall["csrftoken"]
                        proceedAction()
                    } else {
                        var date = new Date();
                        date.setTime(date.getTime() + (this.cookiesExpireson * 24 * 60 * 60 * 1000));
                        chrome.cookies.set({
                            url: this.origionHost,
                            name: '_csrftoken',
                            value: datas['csrfmiddlewaretoken'],
                            expirationDate: date.getTime()
                        })
                        chrome.cookies.set({
                            url: this.origionHost,
                            name: 'csrftoken',
                            value: datas['csrfmiddlewaretoken'],
                            expirationDate: date.getTime()
                        })
                        chrome.cookies.set({
                            url: this.origionHost,
                            name: 'csrfmiddleware',
                            value: datas['csrfmiddlewaretoken'],
                            expirationDate: date.getTime()
                        })
                        setTimeout(() => {
                            proceedAction()
                        }, 1000);
                    }

                })

            })
        } catch (error) {

        }
    }
    static GET(url) {
        return new Promise((response, reject) => {
            fetch(url,
                {
                    method: "GET",
                })
                .then(function (res) { return response(res.json()); })
        })
    }

}

class SharesTo {
    static OurLink = HTTP.origionHost + 'searchreasult?q='
    static whatsapp = `https://wa.me/?url=`
    static facebook = `https://www.facebook.com/sharer/sharer.php?u=`
    static twitter = `https://twitter.com/intent/tweet?url=`
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'CheckNewsForthis') {
        HTTP.POST('search_for_extension', {
            content: message.news
        }).then(res => {
            sendResponse(res)
        })
        return true
    }
    if (message.command === "ShareResult") {
        if (message.shareto === 'more') {

        } else {
            const url = `${SharesTo[message.shareto]}` + `${SharesTo.OurLink}${message.searchfor}`
            setTimeout(() => {
                chrome.tabs.create({
                    url
                })
            }, 5000);
        }
    }
    if (message.command === "ReportIssue") {
        HTTP.POST('report_news', {
            content: message.message
        })
    }
    if (message.command === "Feedback") {
        HTTP.POST('send_feedback', {
            content: message.message
        })
    }
});