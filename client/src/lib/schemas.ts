const PROVIDER = {
  "@type": "LocalBusiness",
  "name": "Line-Marking.co.nz",
  "telephone": "+64224393344",
  "url": "https://line-marking.co.nz",
};

const STANDARD_FAQS = [
  {
    "@type": "Question",
    "name": "How long does line marking last?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Typically 18–24 months depending on traffic volume and surface preparation.",
    },
  },
  {
    "@type": "Question",
    "name": "Do you work after hours?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we offer night and weekend scheduling at standard rates.",
    },
  },
];

export function servicePageSchema(
  name: string,
  description: string,
  url: string,
  extraFaqs: Array<{ question: string; answer: string }> = []
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": name,
        "description": description,
        "url": `https://line-marking.co.nz${url}`,
        "provider": PROVIDER,
        "areaServed": { "@type": "Country", "name": "New Zealand" },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          ...STANDARD_FAQS,
          ...extraFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
          })),
        ],
      },
    ],
  };
}
