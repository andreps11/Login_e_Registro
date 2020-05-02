import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import { signOut } from '~/store/modules/auth/actions';

import {
  SignLink,
  SignLinkText,
  Container,
  Title,
  Info,
  Name,
  Email,
  ViewTitle,
} from './styles';

export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <ViewTitle>
        <Title>Perfil</Title>
      </ViewTitle>

      <Container>
        <Info>
          <Name>{profile.name}</Name>
          <Email>{profile.email}</Email>
        </Info>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="edit" size={25} color="#b91119" />
        </TouchableOpacity>
      </Container>

      <SignLink onPress={handleLogout}>
        <SignLinkText>Sair</SignLinkText>
      </SignLink>
    </Background>
  );
}
