import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import React from 'react'

function Settings() {
	return (
		<Button size={'icon'} variant={'secondary'}>
			<Menu />
		</Button>
	)
}

export default Settings
