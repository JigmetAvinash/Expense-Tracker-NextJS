import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description: 'A simple expense tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<ClerkProvider>
			<html lang="en">
				<script
					data-name="BMC-Widget"
					data-cfasync="false"
					src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
					data-id="jigmet"
					data-description="Support me on Buy me a coffee!"
					data-message="Hey there! Thanks for taking this step. "
					data-color="#5F7FFF"
					data-position="Right"
					data-x_margin="18"
					data-y_margin="18"
					async
				></script>
				<body className={inter.className}>       
			<ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >{children} </ThemeProvider></body>
			</html>
		</ClerkProvider>
	);
}
