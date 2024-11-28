import React, { useEffect, useRef } from 'react'
import './styles.css'
export default function Main() {
    //reference to side buton for content js
    const MainUiButton=useRef(document.createElement("div"))
    //creating reference to the menuitems for side buttons
    const referenceMenuDialog = useRef(document.createElement('dialog'))
    //store for recently selected text in document to send in request to check 
    const recentSelectedText=userRef("")
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
    useEffect(()=>{
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
        return ()=>{

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
            <ReportFrame MainSettings={MainSettings} />
            <FeedbackFrame MainSettings={MainSettings} />
        </>

    )
}
//component to show up the result of the 
function ResultFrame({ MainSettings }) {
    const mainResultUIFrame=userRef(document.createElement("dialog"))
    MainSettings.mainResultUIFrame=mainResultUIFrame
    return (
        <dialog ref={mainResultUIFrame}></dialog>
    )
}
//component to send report issues
function ReportFrame({ MainSettings }) {
    const ReportIssuesFrame=userRef(document.createElement("dialog"))
    MainSettings.ReportIssuesFrame=ReportIssuesFrame
    return (
        <dialog ref={ReportIssuesFrame}></dialog>
    )
}
//component to send feedback of users
function FeedbackFrame({ MainSettings }) {
    const FeedBackFrame=userRef(document.createElement("dialog"))
    MainSettings.FeedBackFrame=FeedBackFrame
    return (
        <dialog ref={FeedBackFrame}></dialog>
    )
}