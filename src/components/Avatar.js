import ImagePicker from 'react-native-image-picker';

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
