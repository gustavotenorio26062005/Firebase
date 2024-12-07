import React, { useEffect, useState } from 'react';
import { getAllAnimes, createAnime, getAnime, updateAnime, deleteAnime, createComment, getAllComments, incrementLike, incrementDislike } from './components/firebaseCrud';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importação do Bootstrap
import Header from './components/Header';
import Carrossel from './components/Carrossel';
import SeçãoDeComentários from './components/SeçãoDeComentários';
import SeçãoCRUD from './components/SeçãoCRUD';

const App = () => {
  const [animes, setAnimes] = useState([]);
  const [comentários, setComentários] = useState([]);
  const [comentáriosExibidos, setComentáriosExibidos] = useState([]);
  const [animeSelecionado, setAnimeSelecionado] = useState(null);
  const [novoAnime, setNovoAnime] = useState({ nome: '', descrição: '', imagemUrl: '' });
  const [animeId, setAnimeId] = useState('');
  const [novoComentário, setNovoComentário] = useState('');
  const [fotoDePerfil, setFotoDePerfil] = useState('');
  const [offsetComentário, setOffsetComentário] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const animes = await getAllAnimes();
      setAnimes(animes);

      const comentários = await getAllComments();
      setComentários(comentários);
      setComentáriosExibidos(comentários.slice(0, 3));
    };

    fetchData();
  }, []);

  const handleCreateAnime = async () => {
    await createAnime(novoAnime);
    const animes = await getAllAnimes();
    setAnimes(animes); // Recarrega os animes
  };

  const handleGetAnime = async () => {
    const animeData = await getAnime(animeId);
    if (animeData) {
      setAnimeSelecionado(animeData);
    } else {
      console.log("Anime não encontrado");
    }
  };

  const handleUpdateAnime = async () => {
    await updateAnime(animeId, novoAnime);
    const animes = await getAllAnimes();
    setAnimes(animes); // Recarrega os animes
    setAnimeSelecionado({ ...animeSelecionado, ...novoAnime });
  };

  const handleDeleteAnime = async () => {
    await deleteAnime(animeId);
    const animes = await getAllAnimes();
    setAnimes(animes); // Recarrega os animes
    if (animeSelecionado?.id === animeId) {
      setAnimeSelecionado(null);
    }
  };

  const handleCreateComment = async () => {
    const defaultProfilePic = "https://tm.ibxk.com.br/2022/11/16/16132745594498.jfif";
    await createComment({ profilePic: fotoDePerfil || defaultProfilePic, comment: novoComentário });
    const comentários = await getAllComments();
    setComentários(comentários);
    setComentáriosExibidos(comentários.slice(0, 3)); // Recarrega os comentários
    setNovoComentário(''); // Limpa o campo de comentário
    setFotoDePerfil(''); // Limpa o campo de URL da imagem do perfil
    setOffsetComentário(0); // Reseta o offset dos comentários
  };

  const handleShowMoreComments = () => {
    const newOffset = offsetComentário + 3;
    const newComments = comentários.slice(newOffset, newOffset + 3);
    setComentáriosExibidos(newComments);
    setOffsetComentário(newOffset);
  };

  const handleAnimeClick = async (id) => {
    const animeData = await getAnime(id);
    setAnimeSelecionado(animeData);
    setAnimeId(id);
  };

  const handleLike = async () => {
    if (!animeSelecionado) return;
    await incrementLike(animeSelecionado.id);
    const updatedAnime = await getAnime(animeSelecionado.id);
    setAnimeSelecionado(updatedAnime); // Atualiza os dados do anime
  };

  const handleDislike = async () => {
    if (!animeSelecionado) return;
    await incrementDislike(animeSelecionado.id);
    const updatedAnime = await getAnime(animeSelecionado.id);
    setAnimeSelecionado(updatedAnime); // Atualiza os dados do anime
  };

  return (
    <div>
      <Header animeSelecionado={animeSelecionado} />
      <div id='carrossel'>
        <Carrossel animes={animes} onImageClick={handleAnimeClick} />
      </div>
      <SeçãoDeComentários
        comentáriosExibidos={comentáriosExibidos}
        handleShowMoreComments={handleShowMoreComments}
        handleCreateComment={handleCreateComment}
        novoComentário={novoComentário}
        setNovoComentário={setNovoComentário}
        fotoDePerfil={fotoDePerfil}
        setFotoDePerfil={setFotoDePerfil}
        handleLike={handleLike}
        handleDislike={handleDislike}
        offsetComentário={offsetComentário}
        comentários={comentários}
      />
      <SeçãoCRUD
        animeId={animeId}
        setAnimeId={setAnimeId}
        novoAnime={novoAnime}
        setNovoAnime={setNovoAnime}
        handleCreateAnime={handleCreateAnime}
        handleGetAnime={handleGetAnime}
        handleUpdateAnime={handleUpdateAnime}
        handleDeleteAnime={handleDeleteAnime}
      />
    </div>
  );
};

export default App;
