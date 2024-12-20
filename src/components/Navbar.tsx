"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ title: 'About Us', number: '01', redirect: '#' },
		{ title: 'Ongoing Events', number: '02', redirect: '#' },
		{ title: 'Event Archive', number: '03', redirect: '#' },
		{ title: 'Partners', number: '04', redirect: '#' },
		{ title: 'Contact us', number: '05', redirect: '#' },
	];

	const socialLinks = [
		{ title: 'Instagram', url: 'https://www.instagram.com/codehershk' },
		{ title: 'Linkedin', url: 'https://www.linkedin.com/company/codehershk/' },
		{ title: 'Email', url: 'mailto:codehershk@gmail.com' },
	];

	const toggleMenu = () => setIsOpen(!isOpen);

	useEffect(() => {
		//@ts-expect-error STFU
		const handleEscape = (e) => {
			if (e.key === 'Escape' && isOpen) {
				setIsOpen(false);
			}
		};

		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	}, [isOpen]);

	return (
		<>
			<header className="header">
				<div className="container">
					<div className="nav-row">
						<div className="nav-logo-row">
							<a href="/" className="website-link is--alt">
								{/* NOTE: ADD LOGO LATER */}
							</a>
						</div>
						<div className="nav-row__right">
							<button className="menu-button" onClick={toggleMenu}>
								<div className={"nav_bar " + (isOpen ? "active" : "")}>
									<div className="bar1"></div>
									<div className="bar2"></div>
									<div className="bar3_h"></div>
									<div className="bar4"></div>
								</div>
							</button>
						</div>
					</div>
				</div>
			</header>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						className="nav"
						initial={{ display: 'none' }}
						animate={{ display: 'block' }}
						exit={{ display: 'none' }}
						transition={{ ease: 'easeIn' }}
						>
						<motion.div
							className="overlay"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsOpen(false)}
							transition={{ ease: 'easeIn' }}
							/>

						<motion.div
							className="menu"
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '120%' }}
							transition={{ ease: 'easeInOut' }}
							>
							<div className="menu-bg">
								<motion.div
									className="bg-panel first"
									initial={{ x: '100%' }}
									animate={{ x: 0 }}
									transition={{ delay: 0, ease: "easeInOut" }}
								/>
								<motion.div
									className="bg-panel second"
									initial={{ x: '100%' }}
									animate={{ x: 0 }}
									transition={{ delay: 0.20, ease: "easeIn" }}
								/>
								<motion.div
									className="bg-panel"
									initial={{ x: '100%' }}
									animate={{ x: 0 }}
									transition={{ delay: 0.350, ease: "easeIn" }}
								/>
							</div>

							<div className="menu-inner">
								<ul className="menu-list">
									{menuItems.map((item, index) => (
										<motion.li
											key={item.number}
											className="menu-list-item"
											initial={{ y: '140%', rotate: 10, display: 'none' }}
											animate={{ y: 0, rotate: 0, display: 'block' }}
											transition={{ delay: .75 + (index * 0.1) }}
										>
											<a href={item.redirect} className="menu-link">
												<span className="eyebrow">{item.number}</span>
												<span className="menu-link-heading" data-text={item.title}>{item.title}</span>
												<div className="menu-link-bg" />
											</a>
										</motion.li>
									))}
								</ul>

								<motion.div
									className="menu-details"
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.55 }}
								>
									<p className="p-small"><b>Socials</b></p>
									<div className="socials-row">
										{socialLinks.map((link, index) => (
											<motion.a
												key={link.title}
												href={link.url}
												className="p-large text-link social-link"
												initial={{ y: '100%' }}
												animate={{ y: 0 }}
												transition={{ delay: 0.5 + (index * 0.2) }}
												target="_blank"
											>
												{link.title}
											</motion.a>
										))}
									</div>
								</motion.div>
							</div>
						</motion.div>
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;