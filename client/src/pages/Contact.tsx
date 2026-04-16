import { ContactForm } from "@/components/ContactForm";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Contact() {
  usePageTitle({
    title: "Contact Us | Line-Marking.co.nz",
    description: "Get a free quote for line marking services. Contact Line-Marking.co.nz on 022 439 3344 or submit an enquiry online. Serving Christchurch, Auckland and all of New Zealand.",
    path: "/Contact/"
  });
  return (
    <div data-testid="page-contact">
      <div className="bg-blue-600 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Contact Line-Marking.co.nz</h1>
          <p className="text-white/90 text-lg">We're here to help you create a safer, more efficient, and more compliant workplace.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-5">Get in Touch</h2>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-sm">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Call Rogerio</p>
                  <a href="tel:0224393344" className="text-blue-600 hover:underline text-lg font-bold" data-testid="link-phone">
                    022 439 3344
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-sm">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <a href="mailto:linemarking.services.nz@gmail.com" className="text-blue-600 hover:underline" data-testid="link-email">
                    linemarking.services.nz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 font-bold text-sm">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Based In</p>
                  <p className="text-gray-600">Halswell, Christchurch</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-md p-5">
              <h3 className="font-bold text-gray-800 mb-2">Service Areas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Christchurch • Canterbury • Auckland • Waikato • South Island • North Island
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-5">Get a Free Quote</h2>
            <p className="text-gray-600 mb-4 text-sm">Tell us about your project and we'll provide a fast, accurate estimate.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
