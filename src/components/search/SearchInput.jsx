



function SearchInput({ htmlFor, type, name, hundelChange, value, inputStyle, label, placeholder }) {
    return (
        <div>
            <label htmlFor={htmlFor} className="block">{label}</label>
            <input id={htmlFor} type={type} name={name} onChange={(e) => { hundelChange(e) }} value={value} className={inputStyle} placeholder={placeholder} />
        </div>
    );
}

export default SearchInput;