import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/Components/ui/card';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/Components/ui/form';
import { Input } from '@/Components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { contactSchema } from '@/schema/contactschema';
import { useContactForm } from '@/hooks/contactform-hook';
import { Textarea } from '@/Components/ui/textarea';
import { Loader } from 'lucide-react';
import Errormessage from '@/errors/Errormessage';
import { AxiosError } from 'axios';
import Gradientbutton from '@/Components/ui/gradientbutton';

const ContactSection = () => {
  const {
    mutate: contactFormMutation,
    isPending,
    isError,
    error,
  } = useContactForm();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      linkedInUrl: '',
      message: '',
    },
  });
  // Function to handle form submission
  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    contactFormMutation({
      name: data.name,
      email: data.email,
      linkedInUrl: data.linkedInUrl,
      message: data.message,
    });
    form.reset();
  };
  // Error message
  if (isError && error) {
    const axiosError = error as AxiosError<{
      error?: string;
      detail?: string;
      message?: string;
    }>;

    const handleReturnToForm = () => {
      window.location.reload();
    };

    return (
      <div className="flex justify-center items-center py-16">
        <Errormessage
          onClose={handleReturnToForm}
          SendAnotherMessage={handleReturnToForm}
          statuscode={axiosError?.response?.status || 500}
          message={
            axiosError?.response?.data?.detail ||
            axiosError?.message ||
            'Server error'
          }
          error={axiosError}
        />
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center py-8 md:py-16 px-4">
      <Card className="w-full max-w-2xl bg-background/60 border border-blue-900/40 shadow-[0_0_80px_-30px_rgba(236,72,153,0.45)] backdrop-blur rounded-2xl">
        <CardHeader className="">
          <CardTitle className="text-2xl md:text-4xl text-white">
            Get In Touch
          </CardTitle>
          <CardDescription className=" text-sm md:text-base mt-4 md:mt-6 space-y-4">
            This is so that we can get in contact with you in case any
            opportunity comes up
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base mb-2 mt-2">
                        Your Full Name<span className="text-secondary">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Your Full Name"
                          className="bg-transparent pr-10 text-white border-gray-800 text-sm md:text-base"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base mb-2 mt-2">
                        Your Email<span className="text-secondary">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="email"
                            placeholder="Your Email"
                            className="bg-transparent pr-10 text-white border-gray-800 text-sm md:text-base"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                name="linkedInUrl"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base mb-2 mt-2">
                      Your Linkedin
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="Your Linkedin URL"
                        className="bg-transparent text-white border-gray-800 text-sm md:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-blue-100 text-sm md:text-base mt-4">
                      Your Message<span className="text-secondary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message..."
                        className="min-h-32 md:min-h-40 bg-transparent text-white border-gray-800 text-sm md:text-base"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 flex justify-center md:justify-end">
                <Gradientbutton onClick={form.handleSubmit(onSubmit)}>
                  {isPending ? <Loader /> : 'Send'}
                </Gradientbutton>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactSection;
