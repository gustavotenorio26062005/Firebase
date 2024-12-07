import React from 'react';

const SeçãoCRUD = ({ animeId, setAnimeId, novoAnime = {}, setNovoAnime, handleCreateAnime, handleGetAnime, handleUpdateAnime, handleDeleteAnime }) => {
  return (
    <div id="crud-container">
      <h4>CRUD Animes</h4>
      <input
        type="text"
        placeholder="ID do anime para ler/atualizar/deletar"
        value={animeId}
        onChange={(e) => setAnimeId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nome"
        value={novoAnime.nome || ''}
        onChange={(e) => setNovoAnime({ ...novoAnime, nome: e.target.value })}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={novoAnime.descrição || ''}
        onChange={(e) => setNovoAnime({ ...novoAnime, descrição: e.target.value })}
      />
      <input
        type="text"
        placeholder="URL da imagem"
        value={novoAnime.imagemUrl || ''}
        onChange={(e) => setNovoAnime({ ...novoAnime, imagemUrl: e.target.value })}
      />
      <div className="crud-buttons">
        <button onClick={handleCreateAnime}>Criar Anime</button>
        <button onClick={handleGetAnime}>Ler Anime</button>
        <button onClick={handleUpdateAnime}>Atualizar Anime</button>
        <button onClick={handleDeleteAnime}>Deletar Anime</button>
      </div>
    </div>
  );
};

export default SeçãoCRUD;
