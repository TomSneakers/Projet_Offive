import React from 'react';
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function Layout({ children }) {
   return(
		<div className="layout">
			<Header />
			{children}
			<Footer />	
		</div>
	 )
}
export default Layout