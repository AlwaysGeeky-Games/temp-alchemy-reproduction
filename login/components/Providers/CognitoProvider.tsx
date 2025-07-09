"use client"

import { createContext, ReactNode, useContext } from "react"
import {
  CognitoActions,
  CognitoSelectors,
  useCognito,
} from "utils/hooks/useCognito"

type CognitoContextValues = CognitoSelectors & CognitoActions

const CognitoContext = createContext({} as CognitoContextValues)

export const useCognitoContext = () => {
  const context = useContext(CognitoContext)

  if (context === undefined) {
    throw new Error("useCognitoContext must be used within CognitoProvider")
  }

  return context
}

interface CognitoProviderProps {
  children: ReactNode
}

export const CognitoProvider = ({ children }: CognitoProviderProps) => {
  const {
    selectors: { user, session },
    actions: {
      handleSignIn,
      handleSignUp,
      handleSignOut,
      handleForgotPassword,
      handleNewPasswordCreation,
      handleCodeVerificationRequest,
      handleCodeVerification,
      getCurrentUser,
      updateUserAttributes,
      handleOAuthCodeExchange,
    },
  } = useCognito()

  return (
    <CognitoContext.Provider
      value={{
        user,
        session,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        handleForgotPassword,
        handleNewPasswordCreation,
        handleCodeVerificationRequest,
        handleCodeVerification,
        getCurrentUser,
        updateUserAttributes,
        handleOAuthCodeExchange,
      }}
    >
      {children}
    </CognitoContext.Provider>
  )
}
