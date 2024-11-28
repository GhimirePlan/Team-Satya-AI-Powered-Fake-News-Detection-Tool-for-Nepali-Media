import React, { useRef } from 'react'
import './styles.css'
export default function Main() {
    //reference to side buton for content js
    const MainUiButton=useRef(document.createElement("div"))
    //creating reference to the menuitems for side buttons
    const referenceMenuDialog = useRef(document.createElement('dialog'))
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