import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { render, screen } from "@testing-library/react"
import {
  CognitoProvider,
  useCognitoContext,
} from "components/Providers/CognitoProvider"
import React from "react"
import { useCognito } from "utils/hooks/useCognito"

const queryClient = new QueryClient()

jest.mock("utils/hooks/useCognito")

const mockCognitoValues = {
  selectors: { user: { name: "test user" }, session: "sessionToken" },
  actions: {
    handleSignIn: jest.fn(),
    handleSignUp: jest.fn(),
    handleSignOut: jest.fn(),
    handleForgotPassword: jest.fn(),
    handleNewPasswordCreation: jest.fn(),
    handleCodeVerificationRequest: jest.fn(),
    handleCodeVerification: jest.fn(),
    getCurrentUser: jest.fn(),
    updateUserAttributes: jest.fn(),
  },
}

describe("CognitoProvider", () => {
  beforeEach(() => {
    ;(useCognito as jest.Mock).mockReturnValue(mockCognitoValues)
  })

  it("should render without crashing and display children", () => {
    const { unmount } = render(
      <QueryClientProvider client={queryClient}>
        <CognitoProvider>
          <div>Child Component</div>
        </CognitoProvider>
      </QueryClientProvider>
    )

    expect(screen.getByText("Child Component")).toBeInTheDocument()

    unmount()
  })

  describe("context actions", () => {
    let contextValues: any
    const TestComponent = () => {
      contextValues = useCognitoContext()
      return null
    }

    it("should call all action methods", () => {
      const { unmount } = render(
        <QueryClientProvider client={queryClient}>
          <CognitoProvider>
            <TestComponent />
          </CognitoProvider>
        </QueryClientProvider>
      )

      contextValues.handleSignIn()
      expect(mockCognitoValues.actions.handleSignIn).toHaveBeenCalled()

      contextValues.handleSignUp()
      expect(mockCognitoValues.actions.handleSignUp).toHaveBeenCalled()

      contextValues.handleSignOut()
      expect(mockCognitoValues.actions.handleSignOut).toHaveBeenCalled()

      contextValues.handleForgotPassword()
      expect(mockCognitoValues.actions.handleForgotPassword).toHaveBeenCalled()

      contextValues.handleNewPasswordCreation()
      expect(
        mockCognitoValues.actions.handleNewPasswordCreation
      ).toHaveBeenCalled()

      contextValues.handleCodeVerificationRequest()
      expect(
        mockCognitoValues.actions.handleCodeVerificationRequest
      ).toHaveBeenCalled()

      contextValues.handleCodeVerification()
      expect(
        mockCognitoValues.actions.handleCodeVerification
      ).toHaveBeenCalled()

      contextValues.getCurrentUser()
      expect(mockCognitoValues.actions.getCurrentUser).toHaveBeenCalled()

      contextValues.updateUserAttributes()
      expect(mockCognitoValues.actions.updateUserAttributes).toHaveBeenCalled()

      unmount()
    })
  })

  it("should provide all context values", () => {
    let contextValues: any
    const TestComponent = () => {
      contextValues = useCognitoContext()
      return null
    }

    const { unmount } = render(
      <QueryClientProvider client={queryClient}>
        <CognitoProvider>
          <TestComponent />
        </CognitoProvider>
      </QueryClientProvider>
    )

    expect(contextValues).toMatchObject({
      user: { name: "test user" },
      session: "sessionToken",
      handleSignIn: expect.any(Function),
      handleSignUp: expect.any(Function),
      handleSignOut: expect.any(Function),
      handleForgotPassword: expect.any(Function),
      handleNewPasswordCreation: expect.any(Function),
      handleCodeVerificationRequest: expect.any(Function),
      handleCodeVerification: expect.any(Function),
      getCurrentUser: expect.any(Function),
      updateUserAttributes: expect.any(Function),
    })

    unmount()
  })

  it("should return an empty object when no context values are provided", () => {
    ;(useCognito as jest.Mock).mockReturnValue({ selectors: {}, actions: {} })

    const TestComponent = () => {
      const context = useCognitoContext()
      expect(context).toEqual({})
      return null
    }

    const { unmount } = render(
      <QueryClientProvider client={queryClient}>
        <CognitoProvider>
          <TestComponent />
        </CognitoProvider>
      </QueryClientProvider>
    )

    unmount()
  })

  it("should handle undefined cognito values gracefully", () => {
    ;(useCognito as jest.Mock).mockReturnValue({
      selectors: { user: undefined, session: undefined },
      actions: mockCognitoValues.actions,
    })

    const TestComponent = () => {
      const { user, session } = useCognitoContext()
      expect(user).toBeUndefined()
      expect(session).toBeUndefined()
      return null
    }

    const { unmount } = render(
      <QueryClientProvider client={queryClient}>
        <CognitoProvider>
          <TestComponent />
        </CognitoProvider>
      </QueryClientProvider>
    )

    unmount()
  })

  it("should handle missing context gracefully", () => {
    const TestComponent = () => {
      try {
        const context = useCognitoContext()
        expect(context).toEqual({})
      } catch (error: any) {
        expect(error.message).toBe(
          "useCognitoContext must be used within CognitoProvider"
        )
      }
      return null
    }

    const { unmount } = render(<TestComponent />)

    unmount()
  })

  describe("useCognitoContext outside CognitoProvider", () => {
    it("should throw error if useCognitoContext is used outside CognitoProvider", () => {
      jest.spyOn(React, "useContext").mockImplementation(() => undefined as any)

      const TestComponent = () => {
        try {
          useCognitoContext()
        } catch (error: any) {
          expect(error.message).toBe(
            "useCognitoContext must be used within CognitoProvider"
          )
        }
        return null
      }

      const { unmount } = render(<TestComponent />)

      jest.restoreAllMocks()

      unmount()
    })
  })
})
