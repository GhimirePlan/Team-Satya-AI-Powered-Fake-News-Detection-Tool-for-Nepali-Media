import React from 'react'
import './styles.css'
export default function Main() {
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
                chromeExtension
            </div>
            <ResultFrame MainSettings={MainSettings} />
            <ReportFrame MainSettings={MainSettings} />
            <FeedbackFrame MainSettings={MainSettings} />
        </>

    )
}
function ResultFrame({ MainSettings }) {
    return (
        <dialog></dialog>
    )
}
function ReportFrame({ MainSettings }) {
    return (
        <dialog></dialog>
    )
}
function FeedbackFrame({ MainSettings }) {
    return (
        <dialog></dialog>
    )
}