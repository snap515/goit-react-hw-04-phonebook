import css from './ContactList.module.css'

export const ContactList = ({ contactsList, onDeleteContact }) => {
  return (
      <ul className={css.contactList}>
      {contactsList.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id} ><p className={css.contactText}>{contact.name}: {contact.number}</p><button className={css.deleteBtn } onClick={()=>onDeleteContact(contact.id)}>Delete</button></li>
        )
      })}
      </ul>   
  )
}