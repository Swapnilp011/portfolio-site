import ContactForm from './contact-form';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-12">
           <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
           <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Have a question, an opportunity, or just want to say hi? My inbox is always open. Fill out the form below or contact me directly.
            </p>
        </div>
        <div className="max-w-xl mx-auto">
            <ContactForm />
            <div className="mt-8 text-center text-muted-foreground">
                <div className="flex items-center justify-center gap-4 mb-2">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:swapnildpawar011@gmail.com" className="hover:text-primary transition-colors">
                        swapnildpawar011@gmail.com
                    </a>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Phone className="h-5 w-5" />
                    <span>+91 7387336071</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
