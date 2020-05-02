import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateSenhaSuccess, updateSenhaFailure } from './actions';

export function* updateSenha({ payload }) {
  try {
    const { email, password, confirmPassword } = payload.data;

    const profile = {
      email,
      password,
      confirmPassword,
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso!', 'Senha atualizada com sucesso');

    yield put(updateSenhaSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização da senha, verifique seus dados'
    );
    yield put(updateSenhaFailure());
  }
}

export default all([takeLatest('@user/UPDATE_SENHA_REQUEST', updateSenha)]);
