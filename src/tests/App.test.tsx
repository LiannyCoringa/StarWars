import React from 'react';
import { getAllByAltText, render, screen } from '@testing-library/react';
import App from '../App';
import { vi } from 'vitest';
import mock from './mock';

describe('Testa a chamada da API', () => {
  global.fetch = vi.fn().mockResolvedValue({
    json: async () => (mock),
  });
  test('Testa se aparece "Carregando..."', () => {
    render(<App />);
    const loading = screen.getByRole('heading', { name: 'Carregando...' });
    expect(loading).toBeInTheDocument();
  });
  test('Testa a chamada da API', async () => {
    render(<App />);
    expect(global.fetch).toBeCalledTimes(4);
  });
  test('Testa se o Input e o Table renderiza corretamente', async () => {
    render(<App />);
    const input = await screen.findByTestId('name-filter');
    const table = await screen.findByRole('table');

    expect(input).toBeInTheDocument();
    expect(table).toBeInTheDocument();
  });
  test('Testa se o form renderiza', async () => {
    render (<App />);
    const selectColuna = await screen.findByTestId('column-filter');
    const selectOperad = await screen.findByTestId('comparison-filter');
    const inputValor = await screen.findByTestId('value-filter');
    const buttonFiltrar = await screen.findByRole('button', { name: 'Filtrar' });

    expect(selectColuna).toBeInTheDocument();
    expect(selectOperad).toBeInTheDocument();
    expect(inputValor).toBeInTheDocument();
    expect(buttonFiltrar).toBeInTheDocument();
  });

})
