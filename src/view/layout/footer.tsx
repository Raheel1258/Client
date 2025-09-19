import Gradientbutton from '@/Components/ui/gradientbutton';
import { Input } from '@/Components/ui/input';
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

const Footer = () => {
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
    form.reset();
  };
  return (
    <footer className="bg-background text-white">
      <div className=" mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-4 gap-x-1">
          {/* Left Column - Branding */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 shrink-0">
                <img src={'/images/logo.png'} alt="Logo" className="h-8 w-10" />
                <span className="w-1/2 text-white font-sora text-lg font-semibold">
                  Open Source Economy
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed w-full">
              Open Source Economy is a non-profit organization dedicated to
              helping developers keep contributing to open source while
              receiving funding for their projects.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-sora text-lg font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-sora text-lg font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
            </ul>
          </div>

          {/* Right Column - Social & Newsletter */}
          <div>
            {/* Social Media Icons */}
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <span className="text-white text-sm font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <span className="text-white text-sm font-bold">X</span>
              </a>
              <a
                href="#"
                className="w-8 h-8  rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors "
              >
                <span className="text-white text-sm">▶</span>
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-sora text-lg font-semibold mb-4">
                Newsletter
              </h4>
              <div className="flex gap-2">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" mb-2 mt-2">
                            Your Email<span className="text-secondary">*</span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                type="email"
                                placeholder="Your Email"
                                className="bg-transparent pr-10 text-white border-gray-800"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
                <div className="pt-7 gap-2 flex justify-end">
                  <Gradientbutton onClick={form.handleSubmit(onSubmit)}>
                    {isPending ? <Loader /> : 'Subscribe'}
                  </Gradientbutton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900/50 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className=" text-sm">
              © Open Source Economy - Non profit organisation - CHE-440.058.692
              Switzerland
            </div>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Terms Of Service
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
