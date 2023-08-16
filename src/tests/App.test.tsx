import React from 'react';
import { getAllByAltText, render, screen } from '@testing-library/react';
import App from '../App';
import { vi } from 'vitest';
import mock from './mock';
import userEvent from '@testing-library/user-event';

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
  test('Testa se ao pesquisar um planeta, apenas ele aparece', async () => {
    render(<App />);
    const input = await screen.findByTestId('name-filter');
    userEvent.type(input, 'Tatooine');
    const planet = await screen.findByText('Tatooine');
    expect(planet).toBeInTheDocument();
  });
  test('Ao selecionar um filtro, ele aparece com o button x', async () => {
    render(<App />);
    const selectColuna = await screen.findByTestId('column-filter');
    const selectOperad = await screen.findByTestId('comparison-filter');
    const inputValor = await screen.findByTestId('value-filter');
    const buttonFiltrar = await screen.findByRole('button', { name: 'Filtrar' });

    userEvent.selectOptions(selectColuna, 'rotation_period');
    userEvent.selectOptions(selectOperad, 'igual a');
    userEvent.type(inputValor, '24');
    userEvent.click(buttonFiltrar);

    const filtro = await screen.findByTestId('filter');
    expect(filtro).toBeInTheDocument();
  });
  test('Testa se ao colocar o filtro, apenas o planeta especifico aparece', async () => {
    render(<App />);
    const selectColuna = await screen.findByTestId('column-filter');
    const selectOperad = await screen.findByTestId('comparison-filter');
    const inputValor = await screen.findByTestId('value-filter');
    const buttonFiltrar = await screen.findByRole('button', { name: 'Filtrar' });

    userEvent.selectOptions(selectColuna, 'rotation_period');
    userEvent.selectOptions(selectOperad, 'igual a');
    userEvent.type(inputValor, '24');
    userEvent.click(buttonFiltrar);

    const yavin = await screen.findByText('Yavin IV');
    expect(yavin).toBeInTheDocument();

    userEvent.selectOptions(selectColuna, 'diameter');
    userEvent.selectOptions(selectOperad, 'maior que');
    userEvent.type(inputValor, '12300');
    userEvent.click(buttonFiltrar);
    expect(yavin).not.toBeInTheDocument();
  })
})
