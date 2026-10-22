export default function Contact() {
  const email = 'tomirismuratova75@gmail.com'

  return (
    <main className="contact-page">
      <section className="contact-intro">
        <span className="eyebrow">LET'S CONNECT</span>

        <h1>
          Have an idea?
          <br />
          <em>Let's talk.</em>
        </h1>

        <p>
          I'm always open to creative conversations,
          new ideas and collaborations in design
          and architecture.
        </p>
      </section>

      <section className="contact-card">
        <div>
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Send me an email</h2>
          <p>
            Have a question or a project in mind?
            I'd love to hear from you.
          </p>
        </div>

        <a
          className="contact-email"
          href={`mailto:${email}`}
        >
          {email} ↗
        </a>
      </section>
    </main>
  )
}