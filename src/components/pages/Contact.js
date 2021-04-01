import ContactForm from '../ContactForm'
import ContextContactProvider from '../../context/ContextContactForm'

export default function Contact(props) {
  return (
    <ContextContactProvider>
      <ContactForm {...props} />
    </ContextContactProvider>
  )
}
