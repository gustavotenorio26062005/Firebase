import React from 'react';

const SeçãoDeComentários = ({ comentáriosExibidos, handleShowMoreComments, handleCreateComment, novoComentário, setNovoComentário, fotoDePerfil, setFotoDePerfil, handleLike, handleDislike, offsetComentário, comentários }) => {
  return (
    <div>
      <div id='left'>
        <h4>Deixe um comentário</h4>
      </div>
      <div className='form-container'>
        <input 
          id='comentario' 
          type="text" 
          placeholder="Escreva seu comentário aqui" 
          value={novoComentário}
          onChange={(e) => setNovoComentário(e.target.value)}
        />
        <div className='form-buttons'>
          <div className='like-dislike'>
            <button onClick={handleLike}>👍</button>
            <button onClick={handleDislike}>👎</button>
          </div>
          <button id='enviar' type="submit" onClick={handleCreateComment}>Enviar</button>
        </div>
        <input 
          id='profilePic' 
          type="text" 
          placeholder="URL da imagem do perfil" 
          value={fotoDePerfil}
          onChange={(e) => setFotoDePerfil(e.target.value)}
        />
      </div>
      <div className='comment-section'>
        <h4>Comentários</h4>
        {comentáriosExibidos.map((comentário, index) => (
          <div key={index} className="comment">
            <img src={comentário.profilePic || "https://tm.ibxk.com.br/2022/11/16/16132745594498.jfif"} alt="Profile" />
            <p>{comentário.comment}</p>
            <div className='like-dislike'>
              <button>👍</button>
              <button>👎</button>
            </div>
          </div>
        ))}
        {offsetComentário + 3 < comentários.length && (
          <button onClick={handleShowMoreComments}>Ver mais</button>
        )}
      </div>
    </div>
  );
};

export default SeçãoDeComentários;
