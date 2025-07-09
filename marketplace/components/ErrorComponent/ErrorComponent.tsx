interface ErrorComponentProps {
  onReset: () => void
}

export const ErrorComponent = ({ onReset }: ErrorComponentProps) => {
  return (
    <div
      data-testid="error-component"
      className="mx-auto py-10 w-96 text-center"
    >
      <h2 className="font-base mb-10 font-semibold">Something went wrong!</h2>
    </div>
  )
}
