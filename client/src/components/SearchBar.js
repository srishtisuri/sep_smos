import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getItems } from '../actions/itemActions';
import Autosuggest from 'react-autosuggest';
import '../css/searchBar.css'
class SearchBar extends Component {
  constructor(props) {
    super(props);

    if (!this.props.fetched) {
      this.props.dispatch(getItems());
    }

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.items.filter(item =>
      item.name.toLowerCase().includes(inputValue)
    );
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const getSuggestionValue = suggestion => suggestion.name;

    // Use your imagination to render suggestions.
    const renderSuggestion = suggestion => (
      <div className="bg-light">
        {suggestion.name}
      </div>
    );

    const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for a product',
      value: value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.search.value,
    fetched: state.items.fetched,
    items: state.items.items
  }
}

export default withRouter(connect(mapStateToProps)(SearchBar));