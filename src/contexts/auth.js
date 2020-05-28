import React, { useState, createContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../services/firebaseConnections';

export const AuthContext = createContext({ AuthProvider });

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
      }
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
              email: value.user.email,
            };
            setUser(data);
            storageUser(data);
          });
      })
      .catch((error) => {
        alert(error.code);
      });
  }

  // Função para Cadastrar usuario
  async function signUp(email, senha, nome, nomeMae, serie, turno) {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(async (value) => {
        const { uid, email } = value.user;

        await firebase.database().ref(serie).child(turno).set({
          nome,
        });

        await firebase
          .database()
          .ref('users')
          .child(uid)
          .set({
            nome,
            nomeMae,
            serie,
            turno,
          })
          .then(() => {
            const data = {
              uid,
              nome,
              email,
              nomeMae,
              serie,
              turno,
            };
            setUser(data);
            storageUser(data);
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
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signUp, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
