import React, {Component} from 'react';

import InputMask from 'react-input-mask';

class SearchInput extends Component {

    render(){
        return (
            <div className="field factor-form-search-input-container">
                <label className="label">{this.props.label}</label>
                <p className="control has-icons-right">
                    <InputMask
                        className={`input ${this.props.additionalClassName || 'is-full-width'}`}
                        type="text"
                        name={this.props.name}
                        placeholder={this.props.placeholder}
                        disabled={this.props.disabled}
                        defaultValue={this.props.initialValue}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        mask={this.props.mask}
                        onKeyPress={this.props.onKeyPress}
                    />
                    <span className="icon is-small is-right">
                        <i className="fa fa-search"></i>
                    </span>
                </p>
            </div>
        );
    }
}
export default SearchInput;