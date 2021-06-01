/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from './index';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('renders', () => {
    act(() => {
      render(<Heading />, container);
    });
    expect(container?.innerHTML).toBeDefined();
  });

  it('renders with children', () => {
    act(() => {
      render(<Heading>Test text</Heading>, container);
    });
    expect(container?.textContent).toBe('Test text');
  });

  it('renders with param tag', () => {
    act(() => {
      render(<Heading tag="h2" />, container);
    });
    expect(container?.querySelector('h2')).not.toBeNull();
  });
});
