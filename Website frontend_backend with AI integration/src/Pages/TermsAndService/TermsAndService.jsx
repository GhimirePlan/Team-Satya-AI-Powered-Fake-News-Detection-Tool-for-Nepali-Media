import React, { useEffect } from "react";
import "./TermsAndService.scss";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function TermsAndService(props) {
  useEffect(() => {
    tsParticles.load("particles", particles);
  }, []);

  return (
    <>
      <div className="tos">
        <div className="tos__header padding" id="particles">
          <h1 className="tos__header__heading">Terms of Service</h1>
        </div>
        <div className="tos__body padding">
          <div className="document">
            <h2 className="bold-head">Terms and Conditions for AI-Powered Fake News Detection Tool</h2>
            {/* Terms and Conditions Section */}
            <section>
              <h3 className="bold-head">1. Introduction</h3>
              <p>
                Welcome to the AI-Powered Fake News Detection Tool by Team Satya. This service is designed to help Nepali media and the public in identifying and combating misinformation and fake news. By accessing or using the Tool, you (the "User") agree to comply with these Terms and Conditions (the "Terms"). These Terms govern your access to and use of the Tool, along with all associated features and services. Please take the time to read these Terms carefully before using the Tool. If you do not agree to these Terms, you are not permitted to use the Tool.
              </p>
            </section>

            <section>
              <h3 className="bold-head">2. Usage Rights</h3>
              <p>
                The Tool is provided to you under a limited, non-exclusive, and non-transferable license. This means you have the right to access and use the Tool solely for its intended purpose: analyzing news articles and detecting potential misinformation or fake news. Your access is granted for personal, non-commercial use, and you must adhere to the following terms:
              </p>
              <ul>
                <li>Attempt to reverse engineer, decompile, or otherwise tamper with the Tool’s underlying code or software.</li>
                <li>Modify, distribute, or redistribute the Tool in any way.</li>
                <li>Use the Tool in a manner that would violate any local, state, or international laws.</li>
                <li>Attempt to exploit or access any data or features of the Tool that are not intended to be made available.</li>
              </ul>
              <p>
                Unauthorized use of the Tool can result in the suspension or termination of your access and may lead to legal action.
              </p>
            </section>

            {/* Rest of the Terms Sections remain unchanged */}
            <section>
              <h3 className="bold-head">3. Accuracy Disclaimer</h3>
              <p>
                The AI algorithms utilized in the Tool are designed to offer insightful and accurate analyses of news content, specifically identifying signs of misinformation, bias, or unreliability. However, due to the complex and ever-changing nature of misinformation, we cannot guarantee that the Tool will always be 100% accurate or provide correct results in every case.
              </p>
              <p>
                We strongly recommend that you treat the results as an informative guide and not as definitive proof. You should always cross-check the flagged content with other reliable sources or fact-checking platforms before drawing conclusions.
              </p>
            </section>
            {/* Continue with the rest of the Terms... */}
            {/* Our Services Section */}
            <section>
              <h3 className="bold-head">Our Services</h3>
              <p>
                The AI-powered Fake News Detection Tool by Team Satya offers a range of services designed to assist the Nepali media and the general public in identifying and combating misinformation. Our goal is to promote digital literacy, enhance media credibility, and reduce the spread of false or misleading news content in Nepal. Below are the key services provided by the Tool:
              </p>
              <h4 className="bold-head">Fake News Detection and Analysis</h4>
              <p>
                Our core service is the ability to detect potential fake news or misinformation in Nepali-language news articles. By leveraging state-of-the-art artificial intelligence (AI) and machine learning algorithms, the Tool analyzes news content in real-time to provide the following insights:
              </p>
              <ul>
                <li><strong>Credibility Classification:</strong> The Tool assesses the reliability of news content and provides a probability score indicating whether the news article is likely to be credible or fake.</li>
                <li><strong>Bias and Sensationalism Detection:</strong> We analyze the language used in the article to identify possible signs of bias, sensationalism, or emotional manipulation.</li>
              </ul>

              <h4 className="bold-head">News Source Scraping and Data Collection</h4>
              <p>
                The Tool is designed to scrape news articles from multiple trusted Nepali news sources, such as:
              </p>
              <ul>
                <li>E-Kantipur</li>
                <li>Annapurna Post</li>
                <li>Kathmandu Post</li>
                <li>Fact check</li>
                <li>Some other small websites</li>
              </ul>
              <p>
                Our data collection mechanism ensures that the Tool is continuously updated with the latest news content, which is essential for training and improving the AI model over time. We gather both Nepali and English news articles, providing a broader scope for fake news detection in the region.
              </p>

              <h4 className="bold-head">AI Model Training and Customization</h4>
              <p>
                To improve the Tool’s ability to accurately detect fake news, we employ AI and Natural Language Processing (NLP) models that are trained on large datasets. These datasets include both publicly available datasets like LIAR and FakeNewsNet, and Nepali-language-specific news data. Our AI models:
              </p>
              <ul>
                <li><strong>Train on Nepali Data:</strong> We fine-tune AI models to understand the linguistic and cultural nuances of the Nepali language, which is crucial for accurate fake news detection in the local context.</li>
                <li><strong>Continuous Learning:</strong> The AI model continuously learns from new data and feedback, ensuring improved accuracy over time.</li>
              </ul>

              <h4 className="bold-head">Feedback and Reporting Mechanism</h4>
              <p>
                We value user feedback to help improve the accuracy and usefulness of the Tool:
              </p>
              <ul>
                <li><strong>Flagging System:</strong> If you believe the Tool has misclassified a news article (either as fake when it's true or vice versa), you can submit feedback and report the issue for review.</li>
                <li><strong>Improvement Suggestions:</strong> Users are encouraged to provide suggestions for new features or improvements, helping us better serve the needs of the Nepali public in the fight against fake news.</li>
              </ul>

              <h4 className="bold-head">Research and Data Analysis</h4>
              <p>
                Our Tool supports research by providing access to data and insights regarding the prevalence of fake news and misinformation in Nepali media:
              </p>
              <ul>
                <li><strong>Data Analytics:</strong> We collect and analyze data on trends in fake news across various Nepali news sources, which can be valuable for journalists, academics, and policymakers.</li>
                <li><strong>Research Reports:</strong> Periodically, we release research findings and reports that outline the most common types of misinformation circulating in Nepal, along with potential solutions.</li>
              </ul>

              <h4 className="bold-head">Service Commitment</h4>
              <p>
                At Team Satya, we are committed to providing an accurate, reliable, and user-friendly service. Our team continually works on improving the Tool to ensure that it meets the evolving needs of Nepali media and the public. We aim to be at the forefront of combating misinformation and empowering users with the tools and knowledge necessary to make informed decisions.
              </p>
              <p>
                If you have any questions or suggestions about the services we offer, feel free to reach out to us.
              </p>
            </section>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsAndService;
