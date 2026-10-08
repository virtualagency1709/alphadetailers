import React, { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is the difference between Ceramic Coating and Paint Protection Film (PPF)?',
      a: 'Ceramic Coating is a liquid polymer that chemically bonds with your factory paint, providing immense hydrophobic slickness, UV protection, chemical resistance, and rich mirror gloss. PPF (Paint Protection Film) is a thick, 200-micron thermoplastic urethane physical film that absorbs direct mechanical impacts like highway stone chips, minor scratches, and key marks with instant thermal self-healing. For ultimate protection, we often install PPF on high-impact areas and top-coat with ceramic!'
    },
    {
      q: 'How long does the 10H Ceramic Coating process take at your studio?',
      a: 'A certified 10H coating treatment typically takes 24 to 48 hours. This includes multi-stage chemical decontamination, ultrasonic paint depth auditing, 2 to 3 stages of precision compound and polish correction, clean-room coating application, and short-wave infrared thermal curing to ensure the coating completely hardens before entering Delhi traffic.'
    },
    {
      q: 'Why choose Alpha Detailers over a neighborhood car wash?',
      a: "Normal roadside car washes use hard groundwater, aggressive laundry detergents, and dirty cloths that cause 90% of swirl marks and clearcoat hazing. Alpha Detailers is an accredited detailing studio utilizing pH-balanced imported snow foams, 3-bucket grit-guard wash systems, 1000 GSM plush microfiber towels, and hospital-grade steam machinery that protects your car's clearcoat."
    },
    {
      q: 'Do you offer vehicle pickup and drop service across Delhi NCR?',
      a: 'Yes! For all major Ceramic Coating, Graphene Shield, and Full PPF packages, we provide doorstep vehicle inspection and safe, insured pickup and drop services across Delhi, Noida, Ghaziabad, and Gurgaon.'
    },
    {
      q: 'How does the self-healing feature of your TPU PPF work?',
      a: 'Our premium aliphatic TPU films feature an elastomeric polymer top coat. When fine scratches, wash swirls, or branch marks occur, ambient sunlight heat or warm water triggers the memory polymers to reflow into their original uniform structure, making scratches vanish without any repainting!'
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg viewBox="0 0 24 24">
              <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
            </svg>
            Clarity & Guidance
          </div>
          <h2 className="section-title">COMMON <span className="text-gradient-red">QUESTIONS</span></h2>
          <p className="section-subtitle">
            Everything you need to know about protecting your vehicle with Alpha Detailers Delhi.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <svg
                    className="faq-icon-chevron"
                    viewBox="0 0 24 24"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                </button>
                <div
                  className="faq-content"
                  style={{
                    maxHeight: isOpen ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease'
                  }}
                >
                  <p className="faq-text">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
