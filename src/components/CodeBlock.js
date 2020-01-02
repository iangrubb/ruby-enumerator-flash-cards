
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired
  };


  render() {
    const { value } = this.props;
    return (
      <SyntaxHighlighter language={'ruby'} style={agate}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;