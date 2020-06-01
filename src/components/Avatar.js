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

export const escolherImagem = (setAvatar) => {
  const options = {
    title: 'Selecionar foto de perfil',
    cancelButtonTitle: 'Cancelar',
    takePhotoButtonTitle: 'Tirar uma foto...',
    chooseFromLibraryButtonTitle: 'Escolher uma foto de sua biblioteca...',
  };
  ImagePicker.showImagePicker(options, (imagem) => {
    setAvatar(imagem.uri);
  });
};
