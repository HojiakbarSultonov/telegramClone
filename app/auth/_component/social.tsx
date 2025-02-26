import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

function SocialAuth() {
	return (
		<div className='grid grid-cols-2 w-full gap-2'>
			<Button variant={'outline'}>
				<span>Sign up with google</span>
				<FaGoogle />
			</Button>
			<Button variant={'secondary'}>
				<span>Sign up with github</span>
				<FaGithub />
			</Button>
		</div>
	)
}

export default SocialAuth
