import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from "@material-ui/core/OutlinedInput";

class SimpleSelect extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired
    // items: PropTypes.object.isRequired
  };

  state = {
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  getSelectAir = () => {
    const { items } = this.props;
    if (!!items) {
      return Object.keys(items).map(key => {
        return (
          <MenuItem key={Math.random()} value={items[key].name}>
            {items[key].name}
          </MenuItem>
        );
      });
    }
  };

  render() {
    const {
      input: { name, onChange, value, ...restInput },
      ...rest
    } = this.props;

    return (
      <FormControl variant="outlined">
        <InputLabel
          ref={ref => {
            this.InputLabelRef = ref;
          }}
          htmlFor="outlined-age-simple"
        >
          {this.props.label}
        </InputLabel>
        <Select
          {...rest}
          name={name}
          inputProps={restInput}
          value={value}
          onChange={onChange}
          input={
            <OutlinedInput
              labelWidth={this.state.labelWidth}
              name={name}
              id="outlined-age-simple"
            />
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {/* {this.props.items.length &&
            this.props.items.map(({ name }) => (
              <MenuItem key={Math.random()} value={name}>
                {name}
              </MenuItem>
            ))} */}
          {this.getSelectAir()}
        </Select>
      </FormControl>
    );
  }
}

export default SimpleSelect;
