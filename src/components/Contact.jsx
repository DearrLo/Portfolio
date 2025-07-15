import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xvgqpyze"); 

  return (
    <section id="contact" className="w-full bg-neutral-800 py-20 px-6 text-white relative z-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-redhat font-redhat mb-6">Me contacter</h2>
        <p className="mb-10 font-redhat text-white-400">Pour me contacter, ça se passe par ici.</p>

        {state.succeeded ? (
          <p className="text-white-500 text-lg font-bold">✅ Merci pour votre message ! Je vous répondrais au plus vite !</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-redhat text-white">
                Nom
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-redhat text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-redhat text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="mt-1 block w-full rounded-md bg-neutral-800 border border-neutral-700 text-white py-2 px-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="border border-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition duration-200"
            >
              {state.submitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
