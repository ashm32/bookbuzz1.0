import React, { useState } from 'react';

const Search = ({ onSearch, submitError, dataNull }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState("");

  const validateSearchQuery = () => {
    const errors = {};

    if (searchQuery.trim() === '') {
      errors.search = '*A keyword is required.  ';
      console.log('*A keyword is required');
    }
    console.log(searchQuery + " @Search")

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateSearchQuery();

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    onSearch(searchQuery);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    React.createElement('div', { id: 'searchBar', className: 'w-75 mx-auto' },
      React.createElement('form', { onSubmit: handleSubmit, className: 'd-flex' },
        React.createElement('input', {
          type: 'text',
          name: 'search',
          placeholder: 'Enter a magic word...',
          className: 'me-2',
          'aria-label': 'Search',
          value: searchQuery,
          onChange: handleChange,
        }),
        React.createElement('button', { type: 'submit', variant: 'outline-success' }, 'Search')
      ),
      React.createElement('div', { id: 'HelpBlock', muted: true },
        errors.search && React.createElement('span', null, errors.search),
        submitError && React.createElement('span', { id: 'error' }, 'Technical error!'),
        dataNull && React.createElement('span', { id: 'null' }, 'No results were found. Please try again!')
      )
    )
  );
};

export default Search;
