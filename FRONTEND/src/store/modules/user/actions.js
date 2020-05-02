export function updateSenhaRequest(data) {
  return {
    type: '@user/UPDATE_SENHA_REQUEST',
    payload: { data },
  };
}

export function updateSenhaSuccess(profile) {
  return {
    type: '@user/UPDATE_SENHA_SUCCESS',
    payload: { profile },
  };
}

export function updateSenhaFailure() {
  return {
    type: '@user/UPDATE_SENHA_FAILURE',
  };
}

export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}
