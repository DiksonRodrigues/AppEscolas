// import RNFetchBlob from 'rn-fetch-blob';
// import firebase from '../services/firebaseConnections'
import ImagePicker from 'react-native-image-picker';


// window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
// window.Blob = Blob
// const Fetch = RNFetchBlob.polyfill.Fetch;
// window.fetch = new Fetch({
//   auto: true,
//   binaryContentTypes: ['image/'],
// }).build();


export const escolherImagem = setAvatar => {
  const options = {
    title: 'Selecionar foto de perfil',
    cancelButtonTitle: 'Cancelar',
    takePhotoButtonTitle: 'Tirar uma foto...',
    chooseFromLibraryButtonTitle: 'Escolher uma foto de sua biblioteca...',
  };
  ImagePicker.showImagePicker(options, imagem => {
  
     setAvatar(imagem.uri);
  });
}
    // if (imagem.uri) {
    //   console.log(uri)
    //   setAvatar(uri);
      // let uri = imagem.uri.replace('file://', '');

    //   RNFetchBlob.fs
    //     .readFile(uri, 'base64')
    //     .then(data => {
    //       return RNFetchBlob.polyfill.Blob.build(data, {
    //         type: 'image/jpeg;BASE64',
    //       });
    //     })
    //     .then(blob => {
        
    //         let img = firebase
    //         .storage()
    //         .ref()
    //         .child('images')
    //         .child(`teste.jpg`);
    
    //       img.put(blob, {contentType: 'image/jpeg'}).on(
    //          'state_changed',
    //          error => {
    //          console.log(error.code);
    //          },
    //         () => {
    //            img.getDownloadURL().then(url => {
    //              console.log(url)
    //              setAvatar(url);                
    //            });
    //          },
    //        );
    //     });
//      }
//   });
// };