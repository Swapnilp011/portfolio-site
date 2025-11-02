import ContactForm from './contact-form';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-12">
           <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
           <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Have a question, an opportunity, or just want to say hi? My inbox is always open. Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
        </div>
        <div className="max-w-xl mx-auto">
            <ContactForm />
        </div>
      </div>
    </section>
  );
}
