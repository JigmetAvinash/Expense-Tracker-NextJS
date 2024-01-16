"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { AlertOctagonIcon, Calendar, ChevronLeftSquare } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export default function Home(){
	const router = useRouter();
    const { isSignedIn } = useAuth()
	const ContinueToApp = () => {
        router.push("/MainApp");
	};
	const buttontext = isSignedIn ? "Your expense" : "Start Your Financial Planning"
	return (
		<>
			<center>
				<div className="items-center mt-[30vh] w-[80vh]">
					<h1 className="w-full h-full text-7xl">
						Expense Tracker! Track your expense!
					</h1>
					<p className="mt-3">
						Nowadays In the era of inflation and jobless-ness, we all need to
						plan for the future. Either it be emergenicies or a dream, financial
						planning it a must. That's why I have launched this open-source
						expense tracker with the help of firebase and clerk in order to
						provide you with a basic expense tracker and developers an
						opensource code to append the expense tracker on their own websites.
					</p>
				</div>
				<Button className=" mt-[15vh] w-[50vh]" onClick={ContinueToApp}>
					{buttontext}
				</Button>
				<p className="mt-1 text-slate-500">
					Made by
					<a href="https://linktr.ee/JAvinashKumar"> Avinash aka Chop</a>
					<a href="https://firebase.google.com"> using Firebase</a>,
					<a href="https://clerk.com">Clerk</a>
					<a href="https://ui.shadcn.com">, Shadcn-UI </a>
					and
					<a href="https://nextjs.org"> NextJS 14</a>
				</p>

				<Alert className="w-[70vh] mt-10">
					<AlertOctagonIcon />
					<AlertTitle>Heads up!</AlertTitle>
					<AlertDescription>
						This application is a demo, for the source code check <a href="https://github.com/repo">Check my github repo to append this into your website</a>
					</AlertDescription>
				</Alert>
			</center>
		</>
	);
};


