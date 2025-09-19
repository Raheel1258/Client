import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNewsletter } from '@/hooks/newslettter-hook';
import { newsletterSchema } from '@/schema/newsletter-schema';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/Components/ui/form';
import { Loader } from 'lucide-react';

const Emailsubscription = () => {
  const { mutate: NewsletterMutation, isPending } = useNewsletter();

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof newsletterSchema>) => {
    NewsletterMutation({
      email: data.email,
    });
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-blue-100 mb-2 mt-2">
                  Your Email<span className="text-secondary">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-transparent pr-10 text-white placeholder:text-blue-300 border-gray-800"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="px-8 bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-400 hover:to-fuchsia-500"
          >
            {isPending ? <Loader /> : 'Submit'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Emailsubscription;
