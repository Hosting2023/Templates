import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export type States = {
  isOpen: boolean;
  isOpenSignIn: boolean;
  isOpenSignUp: boolean;
  isOpenConditions: boolean;
  isOpenResetPassword: boolean;
  isOpenForgotPassword: boolean;
  isOpenNotifications: boolean;
  isOpenBlacklist: boolean;
  isOpenSecurity: boolean;
  isOpenReviews: boolean;
  isOpenCart: boolean;
  isOpenLogout: boolean;
};

export type Actions = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handlerToggleModal: () => void;
  handlerSignIn: () => void;
  handlerSignUp: () => void;
  handlerConditions: () => void;
  handlerResetPassword: () => void;
  handlerForgotPassword: () => void;
  handlerNotifications: () => void;
  handlerBlacklist: () => void;
  handlerSecurity: () => void;
  handlerReviews: () => void;
  handlerCart: () => void;
  handlerLogout: () => void;
};

type ModalHook = {
  states: States;
  actions: Actions;
};

export const useModals = (): ModalHook => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSignIn, setIsOpenSignIn] = useState<boolean>(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState<boolean>(false);
  const [isOpenConditions, setIsOpenConditions] = useState<boolean>(false);
  const [isOpenForgotPassword, setIsOpenForgotPassword] =
    useState<boolean>(false);
  const [isOpenResetPassword, setIsOpenResetPassword] =
    useState<boolean>(false);
  const [isOpenNotifications, setIsOpenNotifications] =
    useState<boolean>(false);
  const [isOpenBlacklist, setIsOpenBlacklist] = useState<boolean>(false);
  const [isOpenSecurity, setIsOpenSecurity] = useState<boolean>(false);
  const [isOpenReviews, setIsOpenReviews] = useState<boolean>(false);
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
  const [isOpenLogout, setIsOpenLogout] = useState<boolean>(false);

  const handlerToggleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handlerSignIn = useCallback(() => {
    setIsOpen(false);
    setIsOpenSignIn(!isOpenSignIn);
  }, [isOpenSignIn]);

  const handlerSignUp = useCallback(() => {
    setIsOpenSignIn(false);
    setIsOpen(false);
    setIsOpenSignUp(!isOpenSignUp);
  }, [isOpenSignUp]);

  const handlerConditions = useCallback(() => {
    setIsOpen(false);
    setIsOpenConditions(!isOpenConditions);
  }, [isOpenConditions]);

  const handlerForgotPassword = useCallback(() => {
    setIsOpenSignIn(false);
    setIsOpen(false);
    setIsOpenForgotPassword(!isOpenForgotPassword);
  }, [isOpenForgotPassword]);

  const handlerResetPassword = useCallback(() => {
    setIsOpenForgotPassword(false);
    setIsOpenResetPassword(!isOpenResetPassword);
  }, [isOpenResetPassword]);

  const handlerNotifications = useCallback(() => {
    setIsOpenNotifications((prev) => !prev);
  }, [isOpenNotifications]);

  const handlerBlacklist = useCallback(() => {
    setIsOpenBlacklist((prev) => !prev);
  }, [isOpenBlacklist]);

  const handlerSecurity = useCallback(() => {
    setIsOpenSecurity((prev) => !prev);
  }, [isOpenSecurity]);

  const handlerReviews = useCallback(() => {
    setIsOpenReviews((prev) => !prev);
  }, [isOpenReviews]);

  const handlerCart = useCallback(() => {
    setIsOpenCart((prev) => !prev);
  }, [isOpenCart]);

  const handlerLogout = useCallback(() => {
    setIsOpenLogout((prev) => !prev);
  }, [isOpenLogout]);

  return {
    states: {
      isOpen,
      isOpenSignIn,
      isOpenSignUp,
      isOpenConditions,
      isOpenResetPassword,
      isOpenForgotPassword,
      isOpenNotifications,
      isOpenBlacklist,
      isOpenSecurity,
      isOpenReviews,
      isOpenCart,
      isOpenLogout,
    },
    actions: {
      setIsOpen,
      handlerToggleModal,
      handlerSignIn,
      handlerSignUp,
      handlerConditions,
      handlerResetPassword,
      handlerForgotPassword,
      handlerNotifications,
      handlerBlacklist,
      handlerSecurity,
      handlerReviews,
      handlerCart,
      handlerLogout,
    },
  };
};
