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
    return (
        <dialog></dialog>
    )
}
//component to send report issues
function ReportFrame({ MainSettings }) {
    return (
        <dialog></dialog>
    )
}
//component to send feedback of users
function FeedbackFrame({ MainSettings }) {
    return (
        <dialog></dialog>
    )
}