// import { Loader2 } from 'lucide-react'
import ContactList from './_components/ContactList'

function HomePage() {
	return (
		<>
			<div className='w-80 h-screen border-r fixed inset-0 z-50'>
				{/* <div className='w-full h-[95vh] flex justify-center items-center'>
					<Loader2 size={50} className='animate-spin' />
				</div> */}
				<ContactList contacts={contacts} />
			</div>
		</>
	)
}

export default HomePage

const contacts = [
	{ email: 'john@gmail.com', _id: '1' },
	{ email: 'amile@gmail.com', _id: '2' },
	{ email: 'abdo@gmail.com', _id: '3' },
	{ email: 'billi@gmail.com', _id: '4' },
	{ email: 'faris@gmail.com', _id: '4' }
]
