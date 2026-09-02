import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | MehndiGo Wedding Concierge Desk",
  description: "Get in touch with MehndiGo customer support or wedding concierge team. Call +91 9257890600 or email mehendigo@gmail.com for instant assistance.",
  alternates: { canonical: "https://mehndigo.in/contact" }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-6 md:px-12 py-10 w-full">
        <Breadcrumb items={[{ name: "Contact Us", url: "/contact" }]} />

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-luxury-green mb-4">
            Contact Wedding Concierge
          </h1>
          <p className="text-luxury-green/80 text-sm md:text-base leading-relaxed">
            Have questions about custom bridal packages, guest booking teams, or artist registration? Our dedicated support desk is available 7 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Contact Details */}
          <div className="space-y-6 bg-white p-8 rounded-3xl border border-luxury-gold/20 shadow-md">
            <h2 className="font-serif font-bold text-2xl text-luxury-green border-b border-luxury-gold/15 pb-4">
              Support Channels
            </h2>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-luxury-green">Phone Hotline</h3>
                <p className="text-xs text-neutral-600 mt-0.5">+91 9257890600</p>
                <span className="text-[10px] text-luxury-gold font-semibold">Available 9 AM - 9 PM IST</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-luxury-green">Email Desk</h3>
                <p className="text-xs text-neutral-600 mt-0.5">mehendigo@gmail.com</p>
                <span className="text-[10px] text-neutral-400">Response within 2 hours</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-luxury-green">Corporate Headquarters</h3>
                <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                  Chanda Tower, 101-103, Gandhi Path Rd, opp. Grand Utsav Garden, near Agarwal Caters, Girnar Colony, Block E, Vaishali Nagar, Jaipur, Rajasthan 302021
                </p>
                <a
                  href="https://maps.google.com/?q=Chanda+Tower,+101-103,+Gandhi+Path+Rd,+opp.+Grand+Utsav+Garden,+near+Agarwal+Caters,+Girnar+Colony,+Block+E,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-luxury-gold hover:underline mt-1 block"
                >
                  <MapPin className="w-3.5 h-3.5" /> Navigate on Google Maps ↗
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-luxury-gold/10 text-luxury-gold flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-luxury-green">WhatsApp Admin Desk</h3>
                <a
                  href="https://wa.me/919257890600?text=Hello%20MehndiGo%20Admin%2C%20I%20have%20an%20enquiry%20regarding%20booking%20an%20artist."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-luxury-gold font-bold hover:underline mt-0.5 block"
                >
                  +91 9257890600 (Chat Directly with Admin)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Inquiry Box */}
          <div className="bg-luxury-cream/40 p-8 rounded-3xl border border-luxury-gold/20 shadow-md">
            <h2 className="font-serif font-bold text-2xl text-luxury-green mb-4">
              Send an Inquiry
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-luxury-green mb-1">Full Name</label>
                <input type="text" required placeholder="Enter your name" className="w-full px-4 py-3 rounded-xl border border-luxury-gold/20 text-sm focus:outline-none focus:border-luxury-gold bg-white" />
              </div>
              <div>
                <label className="block text-xs font-bold text-luxury-green mb-1">Phone Number</label>
                <input type="tel" required placeholder="+91 Mobile number" className="w-full px-4 py-3 rounded-xl border border-luxury-gold/20 text-sm focus:outline-none focus:border-luxury-gold bg-white" />
              </div>
              <div>
                <label className="block text-xs font-bold text-luxury-green mb-1">Event Type & Date</label>
                <input type="text" placeholder="e.g. Wedding Mehendi on Oct 15" className="w-full px-4 py-3 rounded-xl border border-luxury-gold/20 text-sm focus:outline-none focus:border-luxury-gold bg-white" />
              </div>
              <div>
                <label className="block text-xs font-bold text-luxury-green mb-1">Message</label>
                <textarea rows={3} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 rounded-xl border border-luxury-gold/20 text-sm focus:outline-none focus:border-luxury-gold bg-white"></textarea>
              </div>
              <button type="submit" className="w-full py-3.5 bg-luxury-gold hover:bg-luxury-gold-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-gold transition-all">
                Submit Inquiry to Admin
              </button>
            </form>
          </div>
        </div>

        {/* Live Interactive Google Map Section */}
        <div className="mb-16">
          <div className="bg-white p-6 rounded-3xl border border-luxury-gold/20 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="font-serif font-bold text-xl text-luxury-green flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-luxury-gold" /> Head Office Location Map
                </h2>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Chanda Tower, 101-103, Gandhi Path Rd, Vaishali Nagar, Jaipur, Rajasthan 302021
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Chanda+Tower,+101-103,+Gandhi+Path+Rd,+opp.+Grand+Utsav+Garden,+near+Agarwal+Caters,+Girnar+Colony,+Block+E,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-luxury-gold hover:underline whitespace-nowrap"
              >
                Open in Google Maps ↗
              </a>
            </div>
            <div className="h-[360px] rounded-2xl overflow-hidden border border-luxury-gold/15">
              <iframe
                title="MehndiGo Corporate Headquarters Location"
                src="https://maps.google.com/maps?q=Chanda+Tower,+101-103,+Gandhi+Path+Rd,+opp.+Grand+Utsav+Garden,+near+Agarwal+Caters,+Girnar+Colony,+Block+E,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
