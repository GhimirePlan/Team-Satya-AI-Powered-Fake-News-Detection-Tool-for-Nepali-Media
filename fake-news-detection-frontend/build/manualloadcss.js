if (window.location.protocol !== 'chrome-extension:' && document.contentType.startsWith("text/") && window.location.host !== 'localhost:8000') {
    const mainstyletoloadcontent = document.createElement('style')
    mainstyletoloadcontent.innerHTML = `body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:0}code{font-family:source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace}#FakeNewsDetectorMainMenuButton{background-color:#faebd7!important;border-bottom-left-radius:30px;border-top-left-radius:30px;bottom:calc(50vh - 25px);box-shadow:0 0 2px 2px rgba(0,0,0,.479);-webkit-box-shadow:0 0 2px 2px rgba(0,0,0,.397);-moz-box-shadow:0 0 2px 2px rgba(0,0,0,.288);cursor:pointer;height:60px;overflow:hidden;position:fixed;right:0;width:30px;z-index:9998989898}#FakeNewsDetectorMainMenuButton:hover{background-color:#add8e6!important}#FakeNewsDetectorMainMenuButton::selection{background-color:initial}#FakeNewsDetectorMainMenuButton img{height:50px;width:30px}#FakeNewsDetectorMainMenuButton .inner{align-items:center;display:flex;height:100%;justify-content:center;width:100%}#FakeNewsDetectorMainMenuButton .inner svg{height:40px;width:20px}.mainMenuFrame{background-color:initial!important;border:none;color:#fff;font-size:15px;height:fit-content!important;min-width:100px;outline:0;overflow:visible;position:fixed;width:fit-content!important;z-index:999999!important}.mainMenuFrame .menus{display:flex;flex-direction:column}.mainMenuFrame .menus .option{align-items:center;border-bottom:1px solid rgba(173,216,230,.274);cursor:pointer;display:flex;font-size:15px;gap:10px;min-width:150px;padding:5px 15px}.mainMenuFrame .menus .option img{height:20px;width:20px}.mainMenuFrame.menu .texter{padding-left:0;padding-right:0}.mainMenuFrame .menus .option.active,.mainMenuFrame .menus .option:hover{background-color:#00ffff2e}.mainMenuFrame .texter{align-items:center;background-color:#7a4a0a;border-radius:2px;box-shadow:0 0 2px 2px rgba(0,0,0,.479);color:#fff;display:flex;flex-direction:column;justify-content:center;min-height:40px;min-width:max-content;padding:10px;width:100%}.formatter-frame .tool-button.focussed,.formatter-frame .tool-button:focus,.formatter-frame .tool-button:hover,.mainMenuFrame button.focused,.mainMenuFrame button:focus,.mainMenuFrame button:hover{background-color:#00ffff2e;color:#fff;cursor:pointer;outline:0}.mainMenuFrame .texter.tooltip{align-items:center}.mainMenuFrame .right{border:11px solid #0000;border-left:20px solid #7a4a0a;display:block;height:0;margin:20px;position:absolute;right:-50px;top:32px;top:77.5px;width:0}.mainMenuFrame button{align-items:center;background-color:initial;border:none;border-bottom:1px solid rgba(173,216,230,.274);color:#fff;display:flex;font-size:17px;font-weight:600;margin:0;min-height:30px;padding:5px 30px 5px 5px;position:relative;text-align:left;width:100%}.mainMenuFrame button .icon svg{height:20px;width:20px}.mainMenuFrame button:disabled{background-color:#7a4a0a!important;opacity:.6}.mainMenuFrame button .icon img{height:20px;width:20px}.mainMenuFrame button{padding-left:40px}dialog.result{border:none;box-shadow:0 0 2px 2px rgba(0,0,0,.479);-webkit-box-shadow:0 0 2px 2px rgba(0,0,0,.397);-moz-box-shadow:0 0 2px 2px rgba(0,0,0,.288);margin:auto;max-width:400px;min-width:150px;outline:0;padding:20px 0 20px 20px}fieldset textarea{border:none!important;font-size:15px;margin:0!important;min-width:220px;outline:none!important;padding:3px}fieldset legend{color:#06f;font-size:15px}dialog.Response{border:none;box-shadow:0 0 2px 2px rgba(0,0,0,.479);-webkit-box-shadow:0 0 2px 2px rgba(0,0,0,.397);-moz-box-shadow:0 0 2px 2px rgba(0,0,0,.288);margin:auto;max-width:400px;min-width:150px;outline:0;padding:20px}dialog.Response .main{align-items:center;display:flex;flex-direction:column;gap:10px;justify-content:center;max-width:400px;min-width:150px}dialog.Response button{border:1px solid blue;color:blue;margin:0}dialog.Response button:hover{background-color:blue;color:#fff}fieldset{width:100%}.error{color:red}fieldset input:-webkit-autofill,fieldset input:-webkit-autofill:active,fieldset input:-webkit-autofill:focus,fieldset input:-webkit-autofill:hover,fieldset input:focus,fieldset input:hover,fieldset select:-webkit-autofill,fieldset select:-webkit-autofill:active,fieldset select:-webkit-autofill:focus,fieldset select:-webkit-autofill:hover,fieldset textarea:-webkit-autofill,fieldset textarea:-webkit-autofill:active,fieldset textarea:-webkit-autofill:focus,fieldset textarea:-webkit-autofill:hover,fieldset textarea:focus,fieldset textarea:hover{border:none!important;box-shadow:0 0 0 #0000!important;margin:0!important;outline:0!important;outline:none!important;-webkit-transition:all 5000s ease-in-out 0s;transition:all 5000s ease-in-out 0s;-webkit-transition-property:background-color,color;transition-property:background-color,color}.content-component{max-height:400px;overflow-y:scroll;padding-right:5px}.content-component .description{text-align:justify}.loadingicon{text-align:center}.content-component .report{color:#00d9ff}.content-component .report:hover{text-decoration:underline}.content-component h3{font-weight:800;text-align:left}.content-component .date{font-weight:600;text-align:right;width:100%}.content-component .inner{align-items:center;display:flex;height:100%;justify-content:center;width:100%}dialog.mainMenuFrame{left:calc(100vw - 200px);min-height:40px!important;overflow:hidden;z-index:9998}dialog::backdrop{background-color:initial;opacity:0}#FakeNewsDetectorMainMenuButton dialog ::-webkit-scrollbar{height:5px;width:5px}#FakeNewsDetectorMainMenuButton dialog ::-webkit-scrollbar-track{background:#0000}#FakeNewsDetectorMainMenuButton dialog ::-webkit-scrollbar-thumb{background:#8cd1f1;border-radius:10px}#FakeNewsDetectorMainMenuButton dialog ::-webkit-scrollbar:hover{height:10px;width:10px}#FakeNewsDetectorMainMenuButton dialog ::-webkit-scrollbar-thumb:hover{background:#8cd1f1;height:10px;width:10px}*{box-sizing:border-box;margin:0;padding:0}#mainResultUIFrame{align-items:center;color:#333;display:flex;font-family:Roboto,sans-serif;height:max-content;justify-content:center;position:fixed;right:32px;top:10px;transition:background-color .3s ease,color .3s ease;width:400px;z-index:9998989898}#FakeNewsDetectorMainMenuButton .mainMenuFrame{overflow:visible}#mainResultUIFrame #language-switcher{align-items:center;display:flex;gap:18px;justify-content:center}#FakeNewsDetectorMainMenuButton .container{align-items:center;background-color:#fff;border-radius:20px;box-shadow:0 12px 30px #0000001a;box-shadow:0 0 2px 2px rgba(0,0,0,.479);-webkit-box-shadow:0 0 2px 2px rgba(0,0,0,.397);-moz-box-shadow:0 0 2px 2px rgba(0,0,0,.288);display:flex;flex-direction:column;gap:10px;height:100%;max-height:550px;overflow:hidden;overflow-y:scroll;padding:10px;transition:box-shadow .3s ease-in-out,transform .3s ease-in-out;width:400px}#FakeNewsDetectorMainMenuButton .container .content form{align-items:start;display:flex;flex-direction:column;width:100%}#FakeNewsDetectorMainMenuButton .container .content{width:100%}#FakeNewsDetectorMainMenuButton .container h3{text-align:center}#FakeNewsDetectorMainMenuButton .container:hover{transform:scale(1.02)}#FakeNewsDetectorMainMenuButton .container label{color:blue}#title{animation:fadeIn 1s ease-out;color:#2575fc;font-size:25px;font-weight:700;letter-spacing:1px;margin-bottom:20px;text-transform:uppercase}.toggle-container{align-items:center;background-color:#ccc;border-radius:25px;box-shadow:0 5px 15px #0000001a;cursor:pointer;display:flex;height:45px;justify-content:space-between;padding:5px;position:relative;transition:background-color .4s ease;width:100px}.toggle-switch{background-color:#fff;border-radius:50%;height:38px;left:3px;position:absolute;top:3px;transition:left .3s ease,transform .3s ease;width:38px}.toggle-container.active{background-color:#4caf50}.toggle-container.active .toggle-switch{left:55px;transform:scale(1.1)}.toggle-container .left,.toggle-container .right{color:#fff;font-size:18px;font-weight:700;opacity:.6;transition:opacity .3s ease}.toggle-container.active .left{opacity:.3}.toggle-container.active .right{opacity:1}textarea{border:2px solid #ddd;border-radius:8px;font-size:16px;margin-bottom:20px;overflow:hidden;padding:12px;resize:none;transition:border .3s ease,box-shadow .3s ease;width:100%}textarea:focus{border-color:#2575fc;box-shadow:0 0 8px #2575fc80}button{border:none;border-radius:8px;cursor:pointer;font-size:16px;margin:8px;padding:12px;transition:background-color .3s ease,transform .3s ease;width:100%}button:hover{transform:scale(1.05)}button#submit-button{background-color:#4caf50;color:#fff}button#submit-button:hover{background-color:#45a049}button#auto-paste{background-color:#2575fc;color:#fff}button#auto-paste:hover{background-color:#1c62db}.close-button{align-items:center;border-radius:50%;cursor:pointer;display:flex;height:30px;justify-content:center;position:absolute;right:12px;top:9px;width:30px;z-index:999!important}.close-button:hover{background-color:#e0ffff}#prediction-result{animation:fadeIn 1s ease-out;color:#333;font-size:18px;margin-top:20px}#feedback-section{background-color:#f9f9f9;border-radius:10px;box-shadow:0 4px 15px #0000001a;display:none;margin-top:20px;padding:20px}#feedback-header{color:#2575fc;font-size:20px;margin-bottom:15px}.radio-group{display:flex;justify-content:space-around;margin-top:15px}.radio-group label{color:#333;font-size:16px;transition:color .3s ease}.radio-group input[type=radio]{margin-right:8px}#feedback-form button{background-color:#2196f3;color:#fff}#feedback-form button:hover{background-color:#1976d2}body.dark-mode{background:linear-gradient(135deg,#1e1e1e,#333);color:#fff}#FakeNewsDetectorMainMenuButton .container.dark-mode{background-color:#222}textarea.dark-mode{border-color:#4caf50}button.dark-mode,textarea.dark-mode{background-color:#333;color:#fff}button.dark-mode:hover{background-color:#555}#feedback-header.dark-mode,#prediction-result.dark-mode,#title.dark-mode{color:#fff}#feedback-section.dark-mode{background-color:#444}.toggle-container.active.dark-mode{background-color:#4caf50}.toggle-switch.dark-mode{background-color:#fff}@media screen and (max-width:500px){#FakeNewsDetectorMainMenuButton .container{padding:30px;width:90%}button{width:100%}}#social-share{animation:fadeIn .8s ease-in-out;margin-top:20px;text-align:center}#social-share h3{color:#333;font-size:20px;font-weight:700;letter-spacing:1.2px;margin-bottom:1px}.share-buttons{gap:15px}.share-button,.share-buttons{display:flex;justify-content:center}.share-button{align-items:center;background:linear-gradient(45deg,#6a11cb,#2575fc);border:none;border-radius:50%;box-shadow:0 10px 20px #0000004d;color:#fff;cursor:pointer;height:30px;overflow:hidden;position:relative;transition:all .3s ease;width:30px}.share-button i{font-size:20px;z-index:2}.share-button:before{background:#fff3;content:"";height:200%;left:-100%;position:absolute;top:-100%;transform:rotate(45deg);transition:all .5s ease;width:200%;z-index:1}.share-button:hover{box-shadow:0 15px 30px #0006;transform:translateY(-5px)}.share-button:hover:before{left:0;top:0}.share-button:hover i{transform:scale(1.2)}.share-button:active{box-shadow:0 10px 20px #0003;transform:translateY(0)}.share-button.facebook{background:linear-gradient(45deg,#3b5998,#8b9dc3)}.share-button.twitter{background:linear-gradient(45deg,#1da1f2,#0e71c8)}.share-button.whatsapp{background:linear-gradient(45deg,#25d366,#128c7e)}@keyframes fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}fieldset .review svg{fill:gray;height:30px;width:30px}fieldset .review.active svg{fill:#f5de04}/*# sourceMappingURL=main.07a6a5fc.css.map*//* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body.MainChromeExtension and Background */
body.MainChromeExtension {
  font-family: 'Roboto', sans-serif;
  /* background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); */
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  width: 400px;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.479);
  -webkit-box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.397);
  -moz-box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.288);
  transition: background-color 0.3s ease, color 0.3s ease;
  z-index: 9998989898;
  padding-right: 0px;

}

body.MainChromeExtension .mainMenuFrame {
  overflow: visible;
}

body.MainChromeExtension #language-switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
}

/* Container Styling */
body.MainChromeExtension .container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
  background-color: #ffffff;
  height: 100%;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 550px;

}

body.MainChromeExtension .container .content form {
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
}

body.MainChromeExtension .container .content {
  width: 100%;
}

body.MainChromeExtension .container h3 {
  text-align: center;
}

body.MainChromeExtension .container:hover {
  transform: scale(1.02);
}

body.MainChromeExtension .container label {
  color: blue;
}

/* Title */
#title {
  font-size: 25px;
  font-weight: bold;
  color: #2575fc;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  animation: fadeIn 1s ease-out;
}

/* Language Toggle Container */
.toggle-container {
  position: relative;
  width: 100px;
  height: 45px;
  background-color: #ccc;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.toggle-switch {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 38px;
  height: 38px;
  background-color: #fff;
  border-radius: 50%;
  transition: left 0.3s ease, transform 0.3s ease;
}

.toggle-container.active {
  background-color: #4caf50;
}

.toggle-container.active .toggle-switch {
  left: 55px;
  transform: scale(1.1);
}

.toggle-container .left,
.toggle-container .right {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.toggle-container.active .left {
  opacity: 0.3;
}

.toggle-container.active .right {
  opacity: 1;
}

/* Textarea Styling */
textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  resize: none;
  /* Disable manual resizing */
  margin-bottom: 20px;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  /* Hide scrollbar */
}

/* Textarea Focus Effect */
textarea:focus {
  border-color: #2575fc;
  box-shadow: 0 0 8px rgba(37, 117, 252, 0.5);
}


button {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

button#submit-button {
  background-color: #4caf50;
  color: #fff;
}

button#submit-button:hover {
  background-color: #45a049;
}

button#auto-paste {
  background-color: #2575fc;
  color: #fff;
}

button#auto-paste:hover {
  background-color: #1c62db;
}

/* Prediction Result */
#prediction-result {
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  animation: fadeIn 1s ease-out;
}

#feedback-section {
  margin-top: 20px;
  display: none;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

#feedback-header {
  font-size: 20px;
  margin-bottom: 15px;
  color: #2575fc;
}

.radio-group {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}

.radio-group label {
  font-size: 16px;
  color: #333;
  transition: color 0.3s ease;
}

.radio-group input[type="radio"] {
  margin-right: 8px;
}

#feedback-form button {
  background-color: #2196f3;
  color: #fff;
}

#feedback-form button:hover {
  background-color: #1976d2;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dark Mode */
body.MainChromeExtension.dark-mode {
  background: linear-gradient(135deg, #1e1e1e, #333);
  color: #fff;
}

body.MainChromeExtension .container.dark-mode {
  background-color: #222;
}

textarea.dark-mode {
  background-color: #333;
  color: white;
  border-color: #4CAF50;
}

button.dark-mode {
  background-color: #333;
  color: #fff;
}

button.dark-mode:hover {
  background-color: #555;
}

#title.dark-mode,
#prediction-result.dark-mode,
#feedback-header.dark-mode {
  color: #fff;
}

#feedback-section.dark-mode {
  background-color: #444;
}

.toggle-container.active.dark-mode {
  background-color: #4caf50;
}

.toggle-switch.dark-mode {
  background-color: #fff;
}

/* Mobile responsiveness */


#social-share {
  margin-top: 20px;
  text-align: left;
  animation: fadeIn 0.8s ease-in-out;
}
.error{
  color: red;
}
#social-share h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 1px;
  font-weight: bold;
  letter-spacing: 1.2px;
}

.share-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

/* General Styles */
.share-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

.share-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6e48aa, #9d50bb);
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.share-button img,
.share-button i {
  width: 24px;
  height: 24px;
  filter: invert(1);
}

.share-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.share-button:active {
  transform: scale(0.95);
}

/* Tooltip for 'Copy Link' button */
.cpy {
  display: flex;
  justify-content: center;
}

#copy-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 5px 40px;
  border-radius: 20px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

#copy-link:hover {
  background-color: #0056b3;
  box-shadow: 0 8px 15px rgba(0, 123, 255, 0.2);
}

#copy-link:active {
  transform: scale(0.95);
}

/* Copy Feedback Message */
.copy-feedback-message {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  background-color: #28a745;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  animation: fadeOut 2s ease forwards;
}

.share-button.show-feedback + .copy-feedback-message {
  display: block;
}

.content-component {
  max-height: 400px;
  padding-right: 5px;
  overflow-y: scroll;
  font-size: 16px;

}

.content-component .description {
  text-align: justify;
}

.loadingicon {
  text-align: center;
}

.content-component .report {
  color: rgb(0, 217, 255);
}

.content-component .report:hover {
  text-decoration: underline;
}

.content-component h3 {
  text-align: left;
  font-weight: 800;
}

.content-component .date {
  font-weight: 600;
  width: 100%;
  text-align: right;
}

.content-component .inner {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes spinners-react-circular {
  0% {
    stroke-dashoffset: 306;
    stroke-dasharray: 96, 101;
  }

  50% {
    stroke-dashoffset: 270;
    stroke-dasharray: 80, 134;
  }

  100% {
    stroke-dasharray: 80, 174;
    stroke-dashoffset: 132;
  }
}

.review svg {
  height: 30px;
  width: 30px;
  fill: gray;
}

.review.active svg {
  fill: #f5de04;
}`
    document.head.appendChild(mainstyletoloadcontent)
    window.addEventListener("load", () => {
        const interval = setInterval(() => {
            if (document.querySelector("#FakeNewsDetectorMainMenuButton")) {
                document.querySelector("#FakeNewsDetectorMainMenuButton").prepend(mainstyletoloadcontent)
            }
        }, 1000);
    })
}