import { useState } from 'react'
import PropTypes from 'prop-types'
import css from './ContactForm.module.css'

const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
const handleChange = ({ currentTarget: { value, name } }) => {
    if (name === 'name') {
        setName(value);
    } else if (name === 'number') {
        setNumber(value);
        }
    }
const  handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(name, number);
    reset();
    }
const reset = () => {
    setName('')
    setNumber('')
    }
return    (
            <form onSubmit={handleSubmit} className={css.form__container}>
                <label className={css.form__label}>
                    Name
                    <input className={css.form__input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleChange}
                    value={name}
                    />
                </label>
                <label className={css.form__label}>
                    Number
                    <input className={css.form__input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                     onChange={handleChange}
                    value={number}
                    />
                </label>
        <button className={css.form__button} type="submit" >Add contact</button>
            </form>
        )
    }
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
    };
export default ContactForm;