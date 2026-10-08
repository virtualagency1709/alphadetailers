import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Ultrasonic Inspection',
      desc: 'We map the clearcoat thickness in microns across all panels using electronic gauges to verify safe polishing limits.'
    },
    {
      num: '02',
      title: 'Deep Decontamination',
      desc: 'Iron fall-out dissolution, tar extraction, and grade-refined claying to remove embedded industrial fallout.'
    },
    {
      num: '03',
      title: 'Multi-Stage Correction',
      desc: 'Dual-action and rotary compounding under high-CRI inspection LED halos to systematically level swirls and defects.'
    },
    {
      num: '04',
      title: 'Nanocoat Infusion',
      desc: 'Application of 10H ceramic or self-healing TPU in a positive-pressure, dust-evacuated climate studio.'
    },
    {
      num: '05',
      title: 'Infrared Shortwave Bake',
      desc: 'Infrared thermal curing at 65°C to catalyze molecular cross-linking before delivery with warranty certificate.'
    }
  ];

  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Surgical Accuracy
          </div>
          <h2 className="section-title">THE ALPHA <span className="text-gradient-red">MASTER PROTOCOL</span></h2>
          <p className="section-subtitle">
            Every vehicle entrusted to our Delhi studio undergoes a 5-stage laboratory grade restoration workflow to ensure flawless finish.
          </p>
        </div>

        <div className="process-steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="process-step-card">
              <div className="step-num-badge">{step.num}</div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
