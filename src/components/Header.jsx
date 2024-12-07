import React from 'react';

const Header = ({ animeSelecionado }) => {
  return (
    <div id='top'>
      {animeSelecionado ? (
        <div>
          <img
            src={animeSelecionado.imagemUrl}
            alt={animeSelecionado.nome}
            style={{ width: '480px', height: 'auto' }}
          />
        </div>
      ) : (
        <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '25%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
          <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }} src="https://www.canva.com/design/DAGWT5FKlz8/XQBGEKStHnZg6hoylDXo7Q/view?embed" allowFullScreen allow="fullscreen"></iframe>
        </div>
      )}
      <div id='descrição' className='container' style={{ textAlign: 'center' }}>
        <h1>{animeSelecionado?.nome || 'Anime-list de Extensão IFSP 2'}</h1>
        <p>{animeSelecionado?.descrição || 'Clique em um anime para ver os detalhes. Este é um site para listar e avaliar animes desenvolvidos pelos alunos do IFSP.'}</p>
        {animeSelecionado && (
          <div>
            <span>👍 {animeSelecionado.likes || 0}</span>
            <span>👎 {animeSelecionado.dislikes || 0}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
