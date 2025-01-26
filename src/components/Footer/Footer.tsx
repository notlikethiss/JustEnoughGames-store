import React from 'react'

//styles
import './footer.style.scss'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="internal-footer">
				<div className="footer-left">
					<p className="footer-text">
						notlikethiss - 2023 <br />
						Вся размещенная информация на сайте не является
						публичной офертой. <br />
						Apple emojis provided by Apple. Apple® is a registered
						trademark of Apple Inc.
					</p>
				</div>
				<div className="footer-right">
					<div className="footer-socials">
						<Link to={'https://github.com/notlikethiss'}>
							<img
								src="https://i.imgur.com/M8hfcAn.png"
								alt="github"
								className="footer-image"
							/>
						</Link>
						<Link to={'https://t.me/ingwarddev'}>
							<img
								src="https://i.imgur.com/K93hlNg.png"
								alt="telegram"
								className="footer-image telegram"
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
