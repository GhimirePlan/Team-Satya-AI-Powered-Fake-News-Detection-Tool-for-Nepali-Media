document.addEventListener('DOMContentLoaded', function () {
  const newsTextArea = document.getElementById('news-text');
  const feedbacktextarea = document.getElementById('news-text-fedback');
  const submitButton = document.getElementById('submit-button');
  const predictionResult = document.getElementById('prediction-result');
  const feedbackBtn = document.getElementById('feedback-btn');
  const toggleContainer = document.querySelector('.toggle-container');
  // const toggleSwitch = document.querySelector('.toggle-switch');
  const title = document.getElementById('title');
  const newsTextLabel = document.getElementById('news-text-label');
  const socialShareDiv = document.getElementById('social-share');
  const shareFacebookButton = document.getElementById('share-facebook');
  const shareTwitterButton = document.getElementById('share-twitter');
  const ReviewButton = document.getElementById('review-section');
  let currentLanguage = 'en';
  let reviewvalue = 0
  // Fake news prediction function
  predictionResult.firstElementChild.style.display = "none"
  predictionResult.style.display = "none"
  const reviewsbtns = ReviewButton.querySelectorAll(".review")
  for (let index = 0; index < reviewsbtns.length; index++) {
    const review = reviewsbtns[index];
    review.onclick = () => {
      reviewvalue = index + 1
      reviewsbtns.forEach((element, id) => {
        if (id < (index + 1)) {
          element.classList.add("active")
        } else {
          element.classList.remove("active")
        }
      });
    }
  }
  function predictNews(content) {
    if (window.chrome) {
      predictionResult.style.display = "block"
      predictionResult.firstElementChild.style.display = "block"
      predictionResult.lastElementChild.style.display = 'none'
      window.chrome.runtime.sendMessage({ command: 'CheckNewsForthis', clipboard: false, news: content }, (results) => {
        submitButton.disabled = false
        newsTextArea.nextElementSibling.innerHTML = ''
        predictionResult.firstElementChild.style.display = "none"
        predictionResult.lastElementChild.style.display = 'block'
        predictionResult.lastElementChild.querySelector(".description").innerHTML = results.searchfor
        predictionResult.lastElementChild.querySelector(".date").innerHTML = results.accuracy.toFixed(2)+"%"
        predictionResult.lastElementChild.querySelector(".source").innerHTML = results.authentic
        predictionResult.lastElementChild.querySelector(".source").onclick = null
        predictionResult.lastElementChild.querySelector("h3").innerHTML = ""
        if (results.connection !== false) {
          updateSocialShareButtons(content)
        }
        else {
          predictionResult.lastElementChild.querySelector(".source").onclick = null
          predictionResult.lastElementChild.querySelector("h3").style.color='red'
          predictionResult.lastElementChild.querySelector("h3").innerHTML = results.news.title
          predictionResult.lastElementChild.querySelector(".description").innerHTML = results.news.description
          predictionResult.lastElementChild.querySelector(".date").innerHTML = results.news.date
          predictionResult.lastElementChild.querySelector(".source").innerHTML = results.news.source.title
          socialShareDiv.style.display = 'none'
        }
      });
    }
  }
  // Update social share buttons
  function updateSocialShareButtons(message) {
    socialShareDiv.style.display = 'block'
    shareFacebookButton.onclick = function () {
      window.chrome.runtime.sendMessage({ command: "ShareResult", shareto: "facebook", searchfor: message })
    };
    shareTwitterButton.onclick = function () {
      window.chrome.runtime.sendMessage({ command: "ShareResult", shareto: "twitter", searchfor: message })

    };
    copyButton.onclick = function () {
      window.chrome.runtime.sendMessage({ command: "ShareResult", shareto: "Copy", searchfor: message }, (linkToCopy) => {
        navigator.clipboard
          .writeText(linkToCopy)
          .then(() => {
            feedbackMessage.style.display = "block";
            setTimeout(() => {
              feedbackMessage.style.display = "none";
            }, 2000);
          })
          .catch((error) => {
            console.error("Failed to copy the link:", error);
          });
      })
    };
  }
  // Update language
  function updateLanguage() {
    title.textContent = currentLanguage === 'en' ? 'News Authenticity Detector' : 'समाचार प्रमाणिकता परीक्षक';
    newsTextLabel.textContent = currentLanguage === 'en' ? 'Enter the news text:' : 'समाचारको पाठ प्रविष्ट गर्नुहोस्:';
    feedbackBtn.textContent = currentLanguage === 'en'
      ? 'Submit Feedback'
      : 'प्रतिक्रिया पेश गर्नुहोस्';
    submitButton.textContent = currentLanguage === 'en' ? 'Predict' : 'पूर्वानुमान गर्नुहोस्';
    newsTextArea.placeholder =
      currentLanguage === 'en' ? 'Paste or type news content here...' : 'यहाँ समाचारको पाठ टाइप वा पेस्ट गर्नुहोस्...';
    if (newsTextArea.nextElementSibling.textContent.trim()) {
      newsTextArea.nextElementSibling.innerHTML = currentLanguage === 'en'
        ? 'Please enter some news content!'
        : 'कृपया केही समाचार प्रविष्ट गर्नुहोस्!'
    }
    if (feedbacktextarea.nextElementSibling.textContent.trim()) {
      feedbacktextarea.nextElementSibling.innerHTML = currentLanguage === 'en'
        ? 'Please enter some content!'
        : 'कृपया केही सामग्री प्रविष्ट गर्नुहोस्!'
    }
  }
  socialShareDiv.style.display = 'none';
  // Predict news when submit button is clicked
  submitButton.addEventListener('click', function () {
    const newsContent = newsTextArea.value.trim();
    if (newsContent.length >= 5) {
      predictNews(newsContent);
      newsTextArea.value = ""
      submitButton.disabled = true

    } else {
      predictionResult.style.display = 'none';
      socialShareDiv.style.display = 'none';
      newsTextArea.nextElementSibling.innerHTML = currentLanguage === 'en'
        ? 'Please enter some news content!(atleast 5 character)'
        : 'कृपया केही समाचार प्रविष्ट गर्नुहोस्!'
    }
  });
  feedbackBtn.onclick = (e) => {
    e.preventDefault()
    const feedback = feedbacktextarea.value.trim();
    if (feedback.length >= 5) {
      if (reviewvalue > 0) {
        feedbacktextarea.nextElementSibling.innerHTML = ""
        feedbacktextarea.value = ''
        // ...
        feedbacktextarea.disabled = true
        feedbackBtn.disabled = true
        feedbacktextarea.innerHTML = 'Feedback Sent'
        ReviewButton.lastElementChild.innerHTML = ""
        if (window.chrome) {
          window.chrome.runtime.sendMessage({
            command: "Feedback",
            feedback,
            review: reviewvalue
          }, (response) => {
          });
        }
      } else {
        ReviewButton.lastElementChild.innerHTML = "Review is required."
      }

    } else {
      // predictionResult.style.display = 'none';
      // socialShareDiv.style.display = 'none';
      feedbacktextarea.nextElementSibling.innerHTML = currentLanguage === 'en'
        ? 'Please enter some content!(atleast 5 character)'
        : 'कृपया केही सामग्री प्रविष्ट गर्नुहोस्!'
    }
  }
  // Language toggle
  toggleContainer.onclick = () => {
    toggleContainer.classList.toggle('active');
    currentLanguage = currentLanguage === 'en' ? 'ne' : 'en';
    updateLanguage();
  }
  const copyButton = document.getElementById("copy-link");
  const feedbackMessage = document.getElementById("copy-feedback");
  // Initialize language
  updateLanguage();
});



