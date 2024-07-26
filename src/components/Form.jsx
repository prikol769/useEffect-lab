import { useState } from "react";

const Form = ({ movieSearch }) => {
  const [formData, setFormData] = useState({ searchTerm: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    movieSearch(formData.searchTerm);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          value={formData.searchTerm}
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
