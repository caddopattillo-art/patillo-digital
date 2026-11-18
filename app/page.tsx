const services = [
  { n: "01", title: "Website design & development", desc: "A distinctive, considered website that makes your business easier to trust — and easier to choose." },
  { n: "02", title: "Landing pages", desc: "Focused campaign pages built around one clear message, one clear action and measurable outcomes." },
  { n: "03", title: "Conversion optimisation", desc: "Remove friction, sharpen your message and turn more of the attention you already earn into enquiries." },
  { n: "04", title: "Lead generation", desc: "A practical acquisition foundation that helps the right people discover you and take the next step." }
];

const projects = [
  { tag: "Brand experience · Concept", name: "Field Notes", type: "A considered digital home for a modern creative studio.", cls: "project-one", mark: "FN", note: "MAKE ROOM\nFOR GOOD WORK" },
  { tag: "E-commerce · Concept", name: "Sunday Ritual", type: "A calm, confident storefront for everyday essentials.", cls: "project-two", mark: "sunday", note: "SLOW DOWN.\nFEEL MORE." },
  { tag: "Professional services · Concept", name: "North Studio", type: "A clear point of view for a growing independent practice.", cls: "project-three", mark: "NORTH", note: "A CLEARER\nWAY FORWARD" }
];

const plans = [
  { name: "Essential", price: "$700", desc: "A confident online foundation for a business ready to look the part.", items: ["Custom one-page website", "Responsive mobile design", "Clear service messaging", "Contact form & essential SEO"], featured: false },
  { name: "Growth", price: "$1,100", desc: "A fuller digital presence designed to build trust and generate enquiries.", items: ["Up to 5 custom pages", "Conversion-focused structure", "Responsive design", "Contact form & SEO setup", "Launch support"], featured: true },
  { name: "Acquisition", price: "$1,500", desc: "A focused experience for brands ready to turn more visits into action.", items: ["Up to 7 custom pages", "Dedicated landing page", "Lead capture strategy", "Conversion-focused copy structure", "Analytics-ready setup"], featured: false }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Patillo Digital home"><span className="brand-mark">PD</span><span>PATILLO<br/>DIGITAL<span className="brand-dot">.</span></span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href="#work">Selected work</a><a href="#approach">Approach</a><a href="#pricing">Pricing</a></nav>
        <a className="header-cta" href="mailto:caddopattillo@gmail.com?subject=Discovery%20call%20—%20Patillo%20Digital">Let’s talk <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-kicker"><span className="status-dot"/> INDEPENDENT DIGITAL STUDIO <span className="kicker-line"/> BUILT FOR WHAT’S NEXT</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Make your<br/>next move <em>matter.</em></h1>
            <p className="hero-lede">We build thoughtful digital experiences that help ambitious businesses look sharper, earn trust and turn more attention into customers.</p>
            <div className="hero-actions"><a className="button button-dark" href="mailto:caddopattillo@gmail.com?subject=Let’s%20build%20something">Start a project <span>↗</span></a><a className="text-link" href="#work">Explore our work <span>↓</span></a></div>
            <div className="hero-footnote"><span>STRATEGY</span><i/> <span>DESIGN</span><i/> <span>DEVELOPMENT</span></div>
          </div>
          <div className="hero-art" aria-label="Abstract Patillo Digital brand artwork">
            <div className="art-orbit orbit-a"/><div className="art-orbit orbit-b"/><div className="art-orbit orbit-c"/>
            <div className="art-disc"><span>PD</span><small>DESIGN WITH<br/>DIRECTION</small></div>
            <div className="art-stamp">GOOD IDEAS<br/>DESERVE<br/>GOOD DIGITAL<br/>EXPERIENCES <b>✳</b></div>
            <div className="art-index">01 / 04</div>
          </div>
        </div>
        <div className="hero-bottom"><span>FOR SMALL BUSINESSES & GROWING BRANDS</span><span>INDEPENDENT BY DESIGN <b>↓</b></span></div>
      </section>

      <section className="intro section-pad">
        <p className="eyebrow">A BETTER DIGITAL FIRST IMPRESSION</p>
        <div className="intro-content"><h2>Your website should do<br/>more than <em>look good.</em></h2><div><p>It should make your value obvious. Give people a reason to believe in you. And make taking the next step feel natural.</p><p>Patillo Digital brings strategy, design and development together to create websites that work as hard as the people behind the business.</p><a className="text-link" href="#approach">A little about how we work <span>↗</span></a></div></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>Built around<br/><em>your next step.</em></h2></div><p className="section-aside">Clear thinking. Considered design.<br/>Digital work with a job to do.</p></div>
        <div className="service-list">{services.map(s => <article className="service-row" key={s.n}><span className="service-number">{s.n}</span><h3>{s.title}</h3><p>{s.desc}</p><a href="mailto:caddopattillo@gmail.com?subject=Service%20enquiry" aria-label={`Enquire about ${s.title}`}>↗</a></article>)}</div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-heading"><div><p className="eyebrow">A FEEL FOR THE POSSIBILITIES</p><h2>Selected <em>explorations.</em></h2></div><p className="section-aside">A glimpse at the kind of thoughtful<br/>digital worlds we love to create.</p></div>
        <div className="project-grid">{projects.map((p, i) => <article className="project-card" key={p.name}><div className={`project-visual ${p.cls}`}><span className="project-count">0{i+1} / CONCEPT</span><span className="project-mark">{p.mark}</span><span className="project-note">{p.note}</span><span className="project-spark">✳</span></div><div className="project-meta"><div><p className="project-tag">{p.tag}</p><h3>{p.name}</h3><p>{p.type}</p></div><span className="project-arrow">↗</span></div></article>)}</div>
        <p className="concept-note">These are illustrative concept explorations, not commissioned client projects.</p>
      </section>

      <section className="approach section-pad" id="approach">
        <div className="approach-top"><p className="eyebrow">THE PATILLO APPROACH</p><h2>Good work starts<br/>with <em>good questions.</em></h2></div>
        <div className="approach-bottom"><p className="approach-statement">No bloated process. No design for design’s sake. Just a clear, collaborative path from where you are to where you want to go.</p><div className="steps"><article><span>01</span><div><h3>Understand</h3><p>We get to know your business, audience and goals before deciding what the website needs to do.</p></div></article><article><span>02</span><div><h3>Shape</h3><p>We bring the message, structure and visual direction together into one considered experience.</p></div></article><article><span>03</span><div><h3>Build & launch</h3><p>We develop, refine and prepare your site to meet the world — with clarity at every step.</p></div></article></div></div>
      </section>

      <section className="pricing section-pad" id="pricing">
        <div className="section-heading"><div><p className="eyebrow">STRAIGHTFORWARD STARTING POINTS</p><h2>Choose your <em>momentum.</em></h2></div><p className="section-aside">Every project is different. These packages<br/>give us a useful place to begin.</p></div>
        <div className="pricing-grid">{plans.map(plan => <article className={`price-card ${plan.featured ? "price-featured" : ""}`} key={plan.name}>{plan.featured && <span className="popular-label">MOST POPULAR</span>}<p className="price-name">{plan.name}</p><h3>{plan.price}<small> USD</small></h3><p className="price-desc">{plan.desc}</p><a className={plan.featured ? "button button-light" : "button button-outline"} href={`mailto:caddopattillo@gmail.com?subject=${encodeURIComponent(plan.name + " package enquiry")}`}>Discuss this package <span>↗</span></a><div className="price-rule"/><p className="includes">WHAT’S INCLUDED</p><ul>{plan.items.map(item => <li key={item}><span>＋</span>{item}</li>)}</ul></article>)}</div>
        <p className="pricing-note">Prices are starting points in USD. Final scope, timeline and deliverables are confirmed in a written proposal before work begins.</p>
      </section>

      <section className="contact section-pad">
        <div className="contact-top"><p className="eyebrow">HAVE A GOOD ONE IN MIND?</p><span className="contact-star">✳</span></div>
        <h2>Let’s make<br/>something <em>matter.</em></h2>
        <div className="contact-bottom"><p>Tell us where you want to take your business. We’ll help you figure out the right next move.</p><a className="button button-light" href="mailto:caddopattillo@gmail.com?subject=Book%20a%20discovery%20call">Book a discovery call <span>↗</span></a></div>
      </section>

      <footer className="footer"><a className="brand footer-brand" href="#"><span className="brand-mark">PD</span><span>PATILLO<br/>DIGITAL<span className="brand-dot">.</span></span></a><p>Website conversion<br/>& customer acquisition.</p><a href="mailto:caddopattillo@gmail.com">caddopattillo@gmail.com ↗</a><span className="copyright">© {new Date().getFullYear()} PATILLO DIGITAL</span><span className="back-top"><a href="#">BACK TO TOP ↑</a></span></footer>
    </main>
  );
}