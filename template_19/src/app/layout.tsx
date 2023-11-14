import React from "react";
import './globals.scss'
import type {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Personalized maid services',
	description: 'Personalized maid services',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body id={'body'}>
				{children}
			</body>
		</html>
	)
}

export default RootLayout;
