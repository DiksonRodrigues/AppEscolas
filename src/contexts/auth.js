/* eslint-disable react/prop-types, no-undef */
import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import RNFetchBlob from 'rn-fetch-blob';
import firebase from '../services/firebaseConnections';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // Aqui é pq não tá usando o setLoading... Tenta executar o app
  const [loading, setLoading] = useState(false);

  const [haveTeacher, setHaveTeacher] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      // const storageUser = await AsyncStorage.getItem('Auth_user');

      // if (storageUser) {
      setUser(JSON.parse(await AsyncStorage.getItem('Auth_user')));
      // }
    }
    loadStorage();
  }, []);

  async function storageUser(data) {
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  // função para logar o usuario
  async function signIn(email, senha) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((value) => {
        const { uid } = value.user;
        firebase
          .database()
          .ref('users')
          .child(uid)
          .once('value')
          .then((snapshot) => {
            const data = {
              uid,
              nome: snapshot.val().nome,
              avatar: snapshot.val().avatar,
              serie: snapshot.val().serie,
              nomeMae: snapshot.val().nomeMae,
              email: value.user.email,
              teacher: snapshot.val().teacher,
            };
            setUser(data);
            storageUser(data);
          });
      })
      .catch((error) => {
        console.log(error.code);
      });
  }

  // Função para Cadastrar usuario
  async function signUp(
    email,
    senha,
    nome,
    nomeMae,
    serie,
    turno,
    image,
    telefone,
    teacher
  ) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        const { uid } = firebase.auth().currentUser;

        // Isso é só para remover o file:// que aparece quando pega a url no image picker
        const uri = image.replace('file://', '');

        // Isso é chamado de mimeType, ou seja o tipo "do arquivo" bem entre aspas kkkkkkkk
        const mime = 'image/jpeg';

        // Aqui ele está criando a pasta alunos com a foto pegando o uid do usuário que está se cadastrando no momento
        let avatar = null;
        if (!teacher) {
          avatar = firebase.storage().ref().child('alunos').child(`${uid}.jpg`);
        } else {
          avatar = firebase
            .storage()
            .ref()
            .child('professores')
            .child(`${uid}.jpg`);
        }

        // Aqui como o nome já diz, ele pega o uri lê e transforma em base 64
        RNFetchBlob.fs
          .readFile(uri, 'base64')
          .then((data) => {
            // Aqui ele pega o mimetype e junta com o BASE64 ou seja vai ficar type: "image/jpeg;BASE64"
            return RNFetchBlob.polyfill.Blob.build(data, {
              type: `${mime};BASE64`,
            });
          })
          .then((blob) => {
            // Aqui ele transfoma a foto em blob e faz uns outros processos loucos que eu não faço ideia mais kkkkkk
            avatar.put(blob, { contentType: mime }).on(
              'state_changed',
              () => {},
              (error) => {
                console.log(error.code);
              },
              () => {
                // Aqui ele pega a url de download para salvar dentro do usuário e ser mais fácil de pegar quando o usuário logar
                avatar.getDownloadURL().then((url) => {
                  if (teacher === false) {
                    firebase.database().ref(serie).child(turno).set({
                      nome,
                    });

                    firebase
                      .database()
                      .ref('users')
                      .child(uid)
                      .set({
                        nome,
                        nomeMae,
                        serie,
                        turno,
                        avatar: url,
                        teacher,
                      })
                      .then(() => {
                        const data = {
                          uid,
                          nome,
                          email,
                          nomeMae,
                          serie,
                          turno,
                          avatar: url,
                          teacher,
                        };
                        setHaveTeacher(false);
                        setUser(data);
                        storageUser(data);
                      });
                  } else {
                    firebase
                      .database()
                      .ref('teacher')
                      .child(uid)
                      .set({
                        nome,
                        avatar: url,
                        teacher,
                      })
                      .then(() => {
                        const data = {
                          uid,
                          nome,
                          telefone,
                          avatar: url,
                          teacher,
                        };
                        setUser(data);
                        storageUser(data);
                        setHaveTeacher(true);
                      });
                  }
                });
              }
            );
          });
      })
      .catch((error) => {
        console.log(error.code);
      });
  }

  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  async function getPersonList(setDate) {
    // Aqui ele espera o firebase responder
    await firebase
      .database()
      .ref('alunos')
      .child('serie')
      .orderByChild('serie')
      .on('value', (snapshot) => {
        // A parte de cima é uma função de consulta do banco de dados

        // Aqui eu crio um array
        const listaAlunos = [];

        /*
         Essa é uma função que pega a resposta do firebase e o forEach procura
         e pega os itens dentro da resposta
        */

        snapshot.forEach((childItem) => {
          console.log(childItem);

          listaAlunos.push({
            key: childItem.key,
            avatar: childItem.val().serie,
            nome: childItem.val().nome,
          });
        });

        // Aqui é um if de segurança só
        if (listaAlunos.length === 0) {
          listaAlunos.push({
            key: '0',
            nome: 'Não há alunos registrados',
          });
        }

        // Aqui ele seta no date lá da tela Chamada a lista de alunos
        setDate(listaAlunos);
      });
  }

  async function forgotPassword(email) {
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log('enviado');
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signUp,
        signIn,
        forgotPassword,
        getPersonList,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthContext = createContext({ AuthProvider });

export default AuthProvider;
