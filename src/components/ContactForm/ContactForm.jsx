import css from './ContactForm.module.css'

export const ContactForm = ({ onInputChange, onSubmit }) => {
  return (
    <form className={css.form } onSubmit={onSubmit}>
      <label className={css.label } htmlFor="nameInput">Name</label>
      <input className={css.input }type="text" id="nameInput" name="name" onChange={onInputChange} required placeholder="John"/>               

      <label className={css.label }htmlFor="telInput">Number</label>
      <input className={css.input }type="tel" id="telInput" name="number" onChange={onInputChange} required placeholder="123-45-67"/>

      <button className={css.submitBtn }type="submit">Add Contact</button>
    </form>
  )
}