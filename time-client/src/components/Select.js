import React from 'react';
import Select from 'react-select';
 
const options = [
  { value: true, label: 'Completed' },
  { value: false, label: 'Undone' },
  { value: null, label: 'All' }
];
 
class Selectorstuff extends React.Component {
  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => { 
    this.setState({ selectedOption});
    console.log(selectedOption)
    this.props.filterDays(selectedOption.value)
  };

  render() {
    const { selectedOption } = this.state;
 
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default Selectorstuff