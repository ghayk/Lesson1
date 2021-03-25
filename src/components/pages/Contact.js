import ContactForm from '../ContactForm'
import ContextContactProvider from '../../context/ContextContactForm'

export default function Contact() {
  return (
    <ContextContactProvider>
      <ContactForm />
    </ContextContactProvider>
  )
}
