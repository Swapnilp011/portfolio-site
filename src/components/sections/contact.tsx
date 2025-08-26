import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have a question, an opportunity, or just want to say hi? My inbox is always open. I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
