import React, { useEffect, useRef, useState } from 'react'
import { SpinnerCircular } from 'spinners-react';

import './styles.css'
export default function Main() {
    //reference to side buton for content js
    const MainUiButton = useRef(document.createElement("div"))
    //creating reference to the menuitems for side buttons
    const referenceMenuDialog = useRef(document.createElement('dialog'))
    //store for recently selected text in document to send in request to check 
    const recentSelectedText = useRef("")
    const MainSettings = {
        onreportAdd: () => {
        },
        onissueAdd: () => {
        },
        onresultRequested: () => {
        },
        onresultResponse: () => {
        }
    }
    //don dom loaded
    useEffect(() => {
        const requestFakeNewsCheck=()=>{
        }
        MainUiButton.current.onclick = () => {
            const options = [
                'Check Selected',
                'Open Detector UI',
                'Setting',
                'Send Feedback',
                'Report Issue'
            ]
            referenceMenuDialog.current.querySelector(".texter").innerHTML = ''
            for (let index = 0; index < options.length; index++) {
                let proceed = true
                if (index === 0) {
                    if (document.getSelection()) {
                        if (!document.getSelection().toString().trim()) {
                            proceed = false
                        } else {
                            recentSelectedText.current = document.getSelection().toString().trim()
                        }
                    } else {
                        proceed = false
                    }
                }
                if (proceed) {
                    const button = document.createElement("button")
                    button.innerHTML = options[index]
                    button.onclick = (e) => {
                        e.preventDefault()
                        if (index === 0) {
                            if (recentSelectedText.current) {
                                requestFakeNewsCheck(recentSelectedText.current)
                            }
                        }
                        if (index === 1) {
                            MainSettings.mainResultUIFrame.current.showModal()
                        }
                        if (index === 2) {
                            MainSettings.FeedBackFrame.current.showModal()
                        }
                        if (index === 3) {
                            MainSettings.ReportIssuesFrame.current.showModal()
                        }
                        referenceMenuDialog.current.close()
                    }
                    referenceMenuDialog.current.querySelector(".texter").appendChild(button)
                }

            }
            referenceMenuDialog.current.showModal()
            const rect = referenceMenuDialog.current.getBoundingClientRect()
            referenceMenuDialog.current.querySelector(".right").style.top = `${rect.height / 2 - 40}px`
            referenceMenuDialog.current.style.left = `calc(100vw - ${rect.width + 66}px)`
            referenceMenuDialog.current.style.top = `calc(100vh/2 - ${rect.height / 2 - 10}px)`
        }
        referenceMenuDialog.current.focus = -1
        //Handling the keydown event to manage context menu up and down
        referenceMenuDialog.current.onkeydown = (e) => {
            e.preventDefault()
            //handling menu down event
            if (e.key === "ArrowDown") {
                const buttons = referenceMenuDialog.current.querySelectorAll("button")
                if (referenceMenuDialog.current.focus === buttons.length - 1 || referenceMenuDialog.current.focus === -1) {
                    referenceMenuDialog.current.focus = 0
                    buttons[referenceMenuDialog.current.focus].focus();
                } else {
                    referenceMenuDialog.current.focus++;
                    buttons[referenceMenuDialog.current.focus].focus();
                }
            }
            //handling menu up event
            if (e.key === "ArrowUp") {
                const buttons = referenceMenuDialog.current.querySelectorAll("button")
                if (referenceMenuDialog.current.focus <= 0) {
                    referenceMenuDialog.current.focus = buttons.length - 1
                    buttons[referenceMenuDialog.current.focus].focus();
                } else {
                    referenceMenuDialog.current.focus--;
                    buttons[referenceMenuDialog.current.focus].focus();
                }
            }
            //clicking the focused button when enter clicked
            if (e.key === "Enter") {
                const buttons = referenceMenuDialog.current.querySelectorAll("button")
                try {
                    buttons[referenceMenuDialog.current.focus].click()
                } catch (error) {

                }
            }
            return false
        }
        //close menu when clicked outside the box
        referenceMenuDialog.current.onclick = (e) => {
            const rect = referenceMenuDialog.current.getBoundingClientRect()
            if (e.x < rect.x || e.x > rect.x + rect.width + 5 || e.y < rect.y + 15 || e.y > rect.y + rect.height - 15) {
                referenceMenuDialog.current.close()
            }
        }

        //on dom destroyed
        return () => {

        }
    })
    return (
        <>
            <div>
                <div className="inner" ref={MainUiButton}>
                    <img src="https://kalika37.github.io/ReactBounceBallAndTodo/content-icon.jpg" alt="" />
                </div >
                <dialog className='mainMenuFrame menu' ref={referenceMenuDialog}>
                    <div className="texter">
                        <button>Check Selected</button>
                        <button>Open Detector UI</button>
                        <button>Setting</button>
                        <button>Send Feedback</button>
                        <button>Report Issue</button>
                    </div>
                    <div className="right">
                    </div>
                </dialog>
            </div>
            <ResultFrame MainSettings={MainSettings} />
            <UIWindow MainSettings={MainSettings} />
            <ReportFrame MainSettings={MainSettings} />
            <FeedbackFrame MainSettings={MainSettings} />
        </>

    )
}
//component to show ui of extension
function UIWindow({ MainSettings }) {
    const MainUIFrame = useRef(document.createElement("dialog"))
    const newsTextArea = useRef(document.createElement("div"));
    const feedbacktextarea = useRef(document.createElement("div"));
    const submitButton = useRef(document.createElement("div"));
    const predictionResult = useRef(document.createElement("div"));
    const feedbackBtn = useRef(document.createElement("div"));
    const toggleContainer = useRef(document.createElement("div"));
    const title = useRef(document.createElement("div"));
    const newsTextLabel = useRef(document.createElement("div"));
    const feedbackHeader = useRef(document.createElement("div"));
    const socialShareDiv = useRef(document.createElement("div"));
    const shareFacebookButton = useRef(document.createElement("div"));
    const CopyLink = useRef(document.createElement("div"));
    const shareTwitterButton = useRef(document.createElement("div"));
    const shareWhatsAppButton = useRef(document.createElement("div"));
    MainSettings.MainUIFrame = MainUIFrame
    useEffect(() => {
        let currentLanguage="en"
        MainUIFrame.showModal = () => {
            predictionResult.current.firstElementChild.style.display = "none"
            MainUIFrame.current.ShowModal()
        }
        // Fake news prediction function
        predictionResult.current.firstElementChild.style.display = "none"
        function predictNews(content) {
            
        }
        
        // Update language
        function updateLanguage() {
            title.current.textContent = currentLanguage === 'en' ? 'Fake News Detection' : 'झुटो समाचार पत्ता लगाउने';
            newsTextLabel.current.textContent = currentLanguage === 'en' ? 'Enter the news text:' : 'समाचारको पाठ प्रविष्ट गर्नुहोस्:';
            feedbackHeader.current.textContent = currentLanguage === 'en' ? 'Insert News\' Text Here:' : 'यहाँ समाचारको पाठ राख्नुहोस्:';
            feedbackBtn.current.textContent =currentLanguage === 'en'
            ? 'send Feedback'
            : 'प्रतिक्रिया पठाउनुहोस्';
            submitButton.current.textContent = currentLanguage === 'en' ? 'Predict' : 'पूर्वानुमान गर्नुहोस्';
            newsTextArea.current.placeholder =
                currentLanguage === 'en' ? 'Paste or type news content here...' : 'यहाँ समाचारको पाठ टाइप वा पेस्ट गर्नुहोस्...';

            if (newsTextArea.current.nextElementSibling.textContent.trim()) {
                newsTextArea.current.nextElementSibling.innerHTML = currentLanguage === 'en'
                    ? 'Please enter some news content!'
                    : 'कृपया केही समाचार प्रविष्ट गर्नुहोस्!'
            }
            if (feedbacktextarea.current.nextElementSibling.textContent.trim()) {
                feedbacktextarea.current.nextElementSibling.innerHTML = currentLanguage === 'en'
                    ? 'Please enter some content!'
                    : 'कृपया केही सामग्री प्रविष्ट गर्नुहोस्!'
            }
        }
        socialShareDiv.current.style.display = 'none';
        // Predict news when submit button is clicked
        submitButton.current.addEventListener('click', function () {
            const newsContent = newsTextArea.value.trim();
            if (newsContent.length >= 5) {
                predictNews(newsContent);
                newsTextArea.value = ""
                submitButton.current.disabled = true

            } else {
                predictionResult.current.style.display = 'none';
                socialShareDiv.current.style.display = 'none';
                newsTextArea.current.nextElementSibling.innerHTML = currentLanguage === 'en'
                    ? 'Please enter some news content!(atleast 5 character)'
                    : 'कृपया केही समाचार प्रविष्ट गर्नुहोस्!'
            }
        });
        feedbackBtn.onclick = (e) => {
            e.preventDefault()
            const feedback = feedbacktextarea.current.value.trim();
            if (feedback.length >= 5) {
                feedbacktextarea.current.nextElementSibling.innerHTML = ""
                feedbacktextarea.current.value = ''
                // ...
                MainUIFrame.current.close()
                if (window.chrome) {
                    window.chrome.runtime.sendMessage({
                        command: "Feedback",
                        feedback
                    }, (response) => {
                    });
                }

            } else {
                // predictionResult.current.style.display = 'none';
                // socialShareDiv.current.style.display = 'none';
                feedbacktextarea.current.nextElementSibling.innerHTML = currentLanguage === 'en'
                    ? 'Please enter some content!(atleast 5 character)'
                    : 'कृपया केही सामग्री प्रविष्ट गर्नुहोस्!'
            }
        }


        // Language toggle
        toggleContainer.current.onclick = () => {
            toggleContainer.current.classList.toggle('active');
            currentLanguage = currentLanguage === 'en' ? 'ne' : 'en';
            updateLanguage();
        }

        // Initialize language
        updateLanguage();
        return () => {

        }
    })
    return (
        <dialog ref={MainUIFrame}>
            <div id='mainResultUIFrame'>
                <div className="container">
                    <header>
                        <h3 id=".current" ref={title}>Fake News Detection</h3>
                        <div id="language-switcher">
                            <div className="toggle-container" ref={toggleContainer} id="toggle-container">
                                <div className="toggle-switch" id="toggle-switch"></div>
                                <span className="label left" id="en-label">EN</span>
                                <span className="label right" id="ne-label">NE</span>
                            </div>
                            <img src="https://kalika37.github.io/ReactBounceBallAndTodo/fake-news-icon.png" alt="Logo" width="100px" height="70px" style={{ width: '100px' }} />
                        </div>
                    </header>

                    <div className="content">
                        <form id="news-form">
                            <label htmlFor="news-text" ref={newsTextLabel} id="news-text-label">Enter the news text:</label>
                            <textarea id="news-text" ref={newsTextArea} placeholder="Paste or type news content here..."></textarea>
                            <div className="error" ></div>
                            <button type="button" id="submit-button" ref={submitButton}>Predict</button>
                        </form>

                        <p id="prediction-result" ref={predictionResult}>
                            <div className="loadingicon">
                                <SpinnerCircular thickness={200} speed={300} />
                            </div>
                            <div className="content-component">
                                <h3> </h3>
                                <div className="description">
                                </div>
                                <div className="date">
                                </div>
                                <div className="source report">

                                </div>
                            </div>
                        </p>
                        <div id="social-share" ref={socialShareDiv} style={{
                            displa: "none"
                        }}>
                            <h2 id="feedback-header" ref={feedbackHeader}>Insert News' Text Here:</h2>
                            <textarea id="news-text-fedback" placeholder="Enter Feedback..." ref={feedbacktextarea} ></textarea>
                            <div className="error"></div>
                            <div className="button-group">
                                <button id="feedback-btn" ref={feedbackBtn}>Send Feedback</button>
                            </div>
                            <h3>Share this result:</h3>
                            <div className="share-buttons">
                                <button className="share-button" id="share-facebook" ref={shareFacebookButton}>
                                    <img src="https://facebook.com/favicon.ico" alt="" />
                                </button>
                                <button className="share-button" id="share-twitter" ref={shareTwitterButton}>
                                    <img src="https://x.com/favicon.ico" alt="" />
                                </button>
                                <button className="share-button" id="share-whatsapp" ref={shareWhatsAppButton}>
                                    <img src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/whatsapp-512.png" alt="" />
                                </button>
                                <button className="share-button" id="share-link" ref={CopyLink}>
                                    Copy
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </dialog>
    )
}
//component to show up the result of the 
function ResultFrame({ MainSettings }) {
    const mainResultUIFrame = useRef(document.createElement('dialog'))
    const loading = useRef(document.createElement('div'))
    const resultframe = useRef(document.createElement('div'))
    const sharebuttons = useRef(document.createElement('div'))
    MainSettings.mainResultUIFrame=mainResultUIFrame
    return <>
        <dialog className='result' ref={mainResultUIFrame}>
            <div className="inner">
                <div className="loadingicon" ref={loading}>
                    <SpinnerCircular thickness={200} speed={300} />
                </div>
                <div className="content-component" ref={resultframe}>
                    <h3> News From Nepal</h3>
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis nisi eos aperiam veritatis vitae dolorum exercitationem corrupti praesentium ea, eligendi maxime alias minus dolorem dolore! Doloremque inventore voluptatem eius?
                    </div>
                    <div className="date">
                        2<sup>nd</sup> November
                    </div>
                    <div className="source report">

                    </div>
                    <div id="social-share" style={{
                        displa: "none"
                    }} ref={sharebuttons}>
                        
                        <h3>Share this result:</h3>
                        <div className="share-buttons">
                            <button className="share-button" id="share-facebook">
                                <img src="https://facebook.com/favicon.ico" alt="" />
                            </button>
                            <button className="share-button" id="share-twitter">
                                <img src="https://x.com/favicon.ico" alt="" />
                            </button>
                            <button className="share-button" id="share-whatsapp">
                                <img src="https://cdn3.iconfinder.com/data/icons/social-media-chamfered-corner/154/whatsapp-512.png" alt="" />
                            </button>
                            <button className="share-button" id="share-more">
                                more
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    </>
}
//component to send report issues
function ReportFrame({ MainSettings }) {
    const ReportIssuesFrame = useRef(document.createElement("dialog"))
    const [issue, setIssue] = useState("")
    const [error, setError] = useState("")
    const onclickButton=()=>{
        
    }
    MainSettings.ReportIssuesFrame = ReportIssuesFrame
    return <>
        <dialog className='Response' ref={ReportIssuesFrame}>
            <div className="main">
                <h3>Send Feedback - Fake News Detector</h3>
                <fieldset>
                    <legend>Feedback Detail</legend>
                    <textarea name="feedback" placeholder='Enter Your Message...' id="issue" value={issue} onChange={(e) => { setIssue(e.target.value) }}></textarea>
                </fieldset>
                <div className="highlight error">
                    {error}
                </div>
                <button onClick={onclickButton}> Submit </button>
            </div>
        </dialog>
    </>
}
//component to send feedback of users
function FeedbackFrame({ MainSettings }) {
    const FeedBackFrame = useRef(document.createElement("dialog"))
    const [feedback, setFeedback] = useState("")
    const [error, setError] = useState("")
    const onclickButton=()=>{

    }
    MainSettings.FeedBackFrame = FeedBackFrame
    return <>
        <dialog className='Response' ref={FeedBackFrame}>
            <div className="main">
                <h3>Send Feedback - Fake News Detector</h3>
                <fieldset>
                    <legend>Feedback Detail</legend>
                    <textarea name="feedback" placeholder='Enter Your Message...' id="issue" value={feedback} onChange={(e) => { setFeedback(e.target.value) }}></textarea>
                </fieldset>
                <div className="highlight error">
                    {error}
                </div>
                <button onClick={onclickButton}> Submit </button>
            </div>
        </dialog>
    </>
}