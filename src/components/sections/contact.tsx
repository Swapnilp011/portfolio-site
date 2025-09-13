import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center">
           <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
           <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Have a question, an opportunity, or just want to say hi? My inbox is always open. I&apos;ll get back to you as soon as possible.
            </p>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
            <Button asChild variant="outline" size="lg">
                <a href="mailto:swapnildpawar011@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    swapnildpawar011@gmail.com
                </a>
            </Button>
            <Button asChild variant="outline" size="lg">
                <a href="tel:7387336071">
                    <Phone className="mr-2 h-5 w-5" />
                    +91 7387336071
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
