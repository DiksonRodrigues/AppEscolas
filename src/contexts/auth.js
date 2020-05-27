import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnections';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({AuthProvider});

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [serie, setSerie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    async function loadStorage(){
        const storageUser = await AsyncStorage.getItem('Auth_user');   

        if(storageUser){
            setUser(JSON.parse(storageUser));
        }}
     loadStorage();
    
  }, []);

  //função para logar o usuario
  async function signIn(email, senha){
     await firebase.auth().signInWithEmailAndPassword(email, senha) 
     .then(value => {
         let uid = value.user.uid;
         firebase.database().ref('users').child(uid).once('value')
          .then((snapshot)=> {
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: value.user.email,
            };
               setUser(data);
               storageUser(data);
          })
     })
     .catch((error)=> {
        alert(error.code);
     });
  }



  //Função para Cadastrar usuario
  async function signUp(email, senha, nome){
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(async (value)=>{
        let {uid, email} = value.user;
        await firebase.database().ref('users').child(uid).set({
          nome
        })
        .then(() =>  {
           let data = {
              uid,
              nome,
              email,
           };
           setUser(data);
           storageUser(data);
        })
    })
        .catch((error)=> {
            alert(error.code);
        });
  }
       
   async function storageUser(data){
       await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
   }

   async function signOut(){
       await firebase.auth().signOut();
       await AsyncStorage.clear()
       .then(()=> {
          setUser(null);
       })
   }
  return(
    <AuthContext.Provider value={{ signed:!!user, user, loading, signUp, signIn, signOut }}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;