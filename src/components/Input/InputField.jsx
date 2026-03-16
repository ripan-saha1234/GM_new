function InputField({ label, required, type = "text", placeholder }) {
    return (
      <div className="form-group">
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="form-input"
        />
      </div>
    );
  }
  
  export default InputField;