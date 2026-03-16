function TextAreaField({ label, required, placeholder }) {
    return (
      <div className="form-group">
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
        <textarea
          placeholder={placeholder}
          className="form-textarea"
          rows="4"
        ></textarea>
      </div>
    );
  }
  
  export default TextAreaField;