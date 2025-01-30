'use client';
import { FC, ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./NavBar";

export const WebsiteLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}