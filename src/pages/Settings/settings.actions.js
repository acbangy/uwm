export const UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS';
export const updateUserSettings = (userIndex, user) => ({
    type: UPDATE_USER_SETTINGS,
    userIndex,
    user
})
