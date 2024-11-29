import React from 'react';
import './Footer.scss'

function Footer(props) {
    return (
        <div>
            
			<section className="footer">
				<div className="footer__socials">
					<a href="https://twitter.com" target='_blank'>
						<img
							src={window.getStatic("assets/twitter.png")}
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					<a href="https://www.youtube.com" target='_blank'>
						<img
							src={window.getStatic("assets/youtube.png")}
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					
				</div>
				<p className="footer__copyrights-text">Copyright © 2023 Satya's Lie Guard. All Rights Reserved.</p>
			</section>
        </div>
    );
}

export default Footer;