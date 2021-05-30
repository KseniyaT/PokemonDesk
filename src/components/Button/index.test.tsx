/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from './index';

describe('Button', () => {
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
      render(<Button />, container);
    });
    expect(container?.innerHTML).toBeDefined();
  });

  it('renders with children', () => {
    act(() => {
      render(<Button>Test text</Button>, container);
    });
    const button = document.querySelector('button');
    expect(button?.innerHTML).toBe('Test text');
    expect(button?.classList.contains('root--full')).toBeFalsy();
    expect(button?.getAttribute('button-schema')).toEqual('green');
    expect(button?.getAttribute('button-size')).toEqual('regular');
    expect(button?.getAttribute('onClick')).toBeFalsy();
  });

  it('renders with current props', () => {
    act(() => {
      render(<Button size="small" className="test" schema="blue" fullWidth />, container);
    });
    const button = document.querySelector('button');
    expect(button?.classList.contains('test')).toBeTruthy();
    expect(button?.classList.contains('root--full')).toBeTruthy();
    expect(button?.getAttribute('button-size')).toBe('small');
    expect(button?.getAttribute('button-schema')).toBe('blue');
  });

  it('if onClick is passed it should be called', () => {
    const onClick = jest.fn();
    act(() => {
      render(<Button onClick={onClick} />, container);
    });

    const button = document.querySelector('button');

    act(() => {
      button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(onClick).toHaveBeenCalledTimes(1);

    act(() => {
      for (let i = 0; i < 5; i += 1) {
        button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      }
    });

    expect(onClick).toHaveBeenCalledTimes(6);
  });
});
