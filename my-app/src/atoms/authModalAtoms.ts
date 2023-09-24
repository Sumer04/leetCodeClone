import {atom} from 'recoil';
type AuthModalState={
    isOpen:boolean;
    type:'login' | 'register' | 'forgotPassword';
};
const intialAuthMoadalState : AuthModalState =
{
    isOpen : false,
    type : 'login',
};
export const authMoadalState = atom<AuthModalState>({
    key: 'authModalState',
    default :intialAuthMoadalState,
});