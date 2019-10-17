import React, { useState } from 'react'
import WordSearch from './WordSearch'
import {Mode} from '../types'

const SIZES = [10, 15, 20, 25, 30]

const MODES: { label: string, value: Mode }[] = [
  {
    label: 'Horizontal',
    value: 'horizontal'
  },
  {
    label: 'Vertical',
    value: 'vertical'
  },
  {
    label: 'Diagonal',
    value: 'diagonal'
  },
  {
    label: 'Trás pra frente',
    value: 'reversed'
  }
]

export default function App () {
  const [ state, setState ] = useState<{
    words: string[]
    size: number
    modes: Mode[]
    highlightWords: boolean
  }>({
    words: ['carro', 'bicicleta', 'brasil', 'curitiba', 'futebol', 'lambreta'],
    size: 20,
    modes: [
      'horizontal',
      'vertical',
      'diagonal',
      'reversed'
    ],
    highlightWords: true
  })

  return (
    <div className='container'>
      <h1>Gerador de caça-palavras</h1>
      <div className='field'>
        <label className='label' htmlFor='words'>Lista de palavras que você deseja incluir:</label>
        <textarea
          id='words'
          rows={10}
          value={state.words.join('\n')}
          onChange={e => setState({ ...state, words: e.target.value.split('\n') })}
        />
        <label htmlFor='words' className='help'>
          Insira uma palavra por linha. As palavras não podem ter acentos, caracteres especiais ou espaço. Palavras inválidas serão desconsideradas.
        </label>
      </div>
      <div className='field'>
        <label className='label' htmlFor='size'>Tamanho (linhas x colunas):</label>
        <select
          id='size'
          value={state.size.toString()}
          onChange={e => setState({ ...state, size: parseInt(e.target.value, 10) })}
        >
          {SIZES.map(size => (
            <option key={size} value={size.toString()}>{size}x{size}</option>
          ))}
        </select>
      </div>
      <div className='field'>
        <label className='label' htmlFor='modes'>Modos:</label>
        {MODES.map(mode => (
          <div key={mode.value}>
            <label className='checkbox'>
              <input
                type='checkbox'
                onChange={e => setState({
                  ...state,
                  modes: e.target.checked
                    ? state.modes.concat(mode.value)
                    : state.modes.filter(value => value !== mode.value)
                })}
                checked={state.modes.includes(mode.value)}
              />
              <span>{mode.label}</span>
            </label>
          </div>
        ))}
      </div>
      <div className='field'>
        <label htmlFor='options' className='label'>Opções de visualização:</label>
        <div>
          <label className='checkbox'>
            <input
              type='checkbox'
              checked={state.highlightWords}
              onChange={() => setState({ ...state, highlightWords: !state.highlightWords })}
            />
            <span>Destacar as palavras</span>
          </label>
        </div>
      </div>
      <WordSearch
        words={state.words}
        size={state.size}
        modes={state.modes}
        highlightWords={state.highlightWords}
        debug={false}
      />
      <div style={{ marginTop: 30 }}>
        <span className='label'>Dicas</span>
        <ul>
          <li>
            Você pode copiar o caça palavras e colar num documento Word ou editor semelhante.
          </li>
          <li>
            Algumas palavras podem não aparecer no caça-palavras por serem inválidas (possuem caracteres especiais, espaço, acentuação, etc) ou não foi possível encaixá-la no caça-palavras por falta de espaço.
          </li>
          <li>
            <a href='https://github.com/gsantiago/gerador-de-caca-palavras/issues/new'>Clique aqui</a> para enviar uma sugestão ou reportar um bug.
          </li>
          <li>
            <a href='https://github.com/gsantiago/gerador-de-caca-palavras'>Clique aqui</a> para conferir o código-fonte do projeto.
          </li>
        </ul>
      </div>
      <footer>
        Desenvolvido por <a href='https://github.com/gsantiago'>gsantiago</a>
      </footer>
    </div>
  )
}
