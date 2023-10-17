'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { toast } from '@/components/ui/use-toast';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  inquiry: z
    .string()
    .min(2, {
      message: 'Question must be atleast 2 characters long.',
    })
    .max(200, 'Max Character Length is 200'),
});

export function InquiryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inquiry: '',
    },
  });

  const watchAllFields = form.watch();

  console.log(watchAllFields);

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{data.inquiry}</code>
        </pre>
      ),
    });
    console.log(data.inquiry);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='inquiry'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ask me a question</FormLabel>
              <FormControl>
                <Input
                  placeholder='What is the dosage of Nitro to administer to a STEMI postive patient?'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}

export default InquiryForm;
