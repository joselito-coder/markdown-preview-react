import React, { Component } from 'react'
import Heading from './components/Heading';
import Markdown from './components/Markdown';
import PreviewState from './contexts/PreviewState';

export default class App extends Component {
  render() {
    return (
      <>
        <PreviewState>
          <Heading />
          <Markdown />
        </PreviewState>
      </>
    )
  }
}
