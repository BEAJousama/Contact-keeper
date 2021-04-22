import React, {useContext, useEffect, useRef} from 'react'
import ContactContext from '../context/contact/contactContext'

const FilterContact = () => {
    // const [text, setText] = useState("");
    const text = useRef('')
    const contactContext = useContext(ContactContext);
    const {filtered, filterContact, filterClear} = contactContext;
    useEffect(() => {
        if (filtered === null){
            text.current.value = ''
        }
    }, [])
    const onChange = e =>{
        // setText(e.target.value)
        if (text.current.value !== ""){
        filterContact(e.target.value);}
        else {
            filterClear()
        }
    }
    return (
        <div>
               <input
                type="text"
                placeholder="Search Contact"
                name="search"
                ref={text}
                onChange = {onChange}
                />
        </div>
    )
}

export default FilterContact
