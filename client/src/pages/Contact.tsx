import { ContactForm } from "@/components/ContactForm";
import { usePageTitle } from "@/hooks/use-page-title";

export default function Contact() {
  usePageTitle({
    title: "Contact Us | Line-Marking.co.nz",
    description: "Get a free quote for line marking services. Contact Line-Marking.co.nz on 022 439 3344 or submit an enquiry online. Serving Christchurch and Auckland.",
    path: "/Contact/"
  });
  return (
    <div className="max-w-4xl mx-auto px-4 py-10" data-testid="page-contact">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Work Space Safety</h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Please feel free to contact us anytime for any enquiries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="space-y-4 mb-8">
            <div>
              <p className="font-semibold text-gray-800">Workspace Safety</p>
              <p className="text-gray-600">Halswell</p>
              <p className="text-gray-600">Christchurch</p>
            </div>

            <div>
              <p className="text-gray-600">
                Phone:{" "}
                <a href="tel:0224393344" className="text-blue-600 hover:underline" data-testid="link-phone">
                  (022 439 3344)
                </a>
              </p>
            </div>

            <div>
              <p className="text-gray-600">
                Email:{" "}
                <a href="mailto:rogeriotc2@gmail.com" className="text-blue-600 hover:underline" data-testid="link-email">
                  rogeriotc2@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
