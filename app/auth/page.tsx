import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import StateAuth from './_component/state'
import SocialAuth from './_component/social'
function AuthPage() {
	return (
		<div className='container max-w-md w-full h-screen flex justify-center items-center flex-col space-y-4'>
			<FaTelegram size={120} className='text-blue-500' />
			<div>
				<h1 className='text-4xl font-bold'>Telegram</h1>
			</div>
			<p className='text-center text-muted-foreground text-sm'>
				Telegram is a messaging app with focus on speed and security, its
				super-fast, simple and free
			</p>
			<StateAuth />
			<SocialAuth />
		</div>
	)
}

export default AuthPage
