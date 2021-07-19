import React, { useState } from 'react';
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {

  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {propriedades.items.slice(0,6).map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`${itemAtual.html_url}`}>
                <img src={itemAtual.avatar_url} />
                <span>{itemAtual.login}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}



export default function Home(props) {
  const usuarioAleatorio = props.githubUser;
  const [comunidades, setComunidades] = useState([])
  const [jogos, setJogos] = useState([])

  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'gustavoguanabara',
    'flaviohenriquealmeida',
    'vradan'
  ]

  const [recomendados, setRecomendados] = useState([])

  React.useEffect(() => {

    fetch('https://api.github.com/users/peas/followers')
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta) {
      setRecomendados(respostaCompleta);
    })

    fetch('https://graphql.datocms.com/', {

      method: 'POST',
      headers: {
        'Authorization': '8a9dae46a4d11c4b068c4e074af42b',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        "query": `query {
          allCommunities {
            id
            title
            imageUrl
            link
            creatorSlug
        
          }
        }`}),
    })
      .then((resposta) => resposta.json())
      .then((respostaCompleta) => {

        const comunidadesDato = respostaCompleta.data.allCommunities;
        setComunidades(comunidadesDato)
      })

    fetch('https://graphql.datocms.com/', {

      method: 'POST',
      headers: {

        'Authorization': '8a9dae46a4d11c4b068c4e074af42b',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({

        'query': `query {
            allGames {
              id
              title
              coverUrl
              link
          
            }
          }`}),
    })
      .then((resposta) => resposta.json())
      .then((respostaCompleta) => {

        const jogosDato = respostaCompleta.data.allGames;
        setJogos(jogosDato);
      })


  }, [])

  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a), {usuarioAleatorio}
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={(evento) => {

              evento.preventDefault();
              const dadosForm = new FormData(evento.target)

              const comunidade = {
                title: dadosForm.get('title'),
                imageUrl: dadosForm.get('image'),
                link: dadosForm.get('link'),
                creatorSlug: usuarioAleatorio
              }

              fetch('/api/comunidades', {

                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(comunidade)
              })
                .then(async (response) => {

                  const dados = await response.json();
                  const comunidade = dados.registroCriado
                  const comunidadesAtualizadas = [...comunidades, comunidade]
                  setComunidades(comunidadesAtualizadas)
                })


            }}>
              <div>
                <input placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  type="text"
                />
              </div>
              <div>
                <input placeholder="Qual vai ser o link da sua comunidade?"
                  name="link"
                  aria-label="Qual vai ser o link da sua comunidade?"
                  type="text"
                />
              </div>
              <button>Criar Comunidade</button>

            </form>

          </Box>
          <ProfileRelationsBox title="Amizades recomendadas:" items={recomendados}  />
          
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.slice(0, 6).map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>

            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={itemAtual.link}>
                      <img src={itemAtual.imageUrl} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Jogos Favoritos ({jogos.length})
            </h2>

            <ul>
              {jogos.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={itemAtual.link}>
                      <img src={itemAtual.coverUrl} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN

  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {

    headers: {

      Authorization: token
    }
  })
    .then((resposta) => resposta.json())

  if (!isAuthenticated) {

    return {

      redirect: {

        destination: '/login',
        permanent: false
      }
    }
  }

  const { githubUser } = jwt.decode(token)

  return {
    props: {

      githubUser
    }
  }
}