
import ContactForm from './contact-form';
import { Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href="mailto:swapnildpawar011@gmail.com" className="hover:text-primary transition-colors">
                          swapnildpawar011@gmail.com
                      </a>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>+91 7387336071</span>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
