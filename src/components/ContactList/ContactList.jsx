import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList({ data }) {
  return (
    <ul className={css.list}>
      {data.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
}
