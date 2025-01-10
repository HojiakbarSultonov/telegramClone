import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { emailSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function signIn() {
	const form = useForm<z.infer<typeof emailSchema>>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			email: ''
		}
	})
	function onSubmit(values: z.infer<typeof emailSchema>) {
		console.log(values)
	}
	return (
		<div className='w-full'>
			<p className='text-center text-muted-foreground text-sm'>
				Telegram is a messaging app with focus on speed and security, its
				super-fast, simple and free
			</p>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder='info@hadji.com'
										className='h-10 bg-secondary'
										{...field}
									/>
								</FormControl>

								<FormMessage className='text-xs text-red-500' />
							</FormItem>
						)}
					/>
					<Button type='submit' size={'lg'} className='w-full'>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default signIn
