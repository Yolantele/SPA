import { Result } from 'antd'
import React, { Component, ReactNode, ErrorInfo } from 'react'

interface ErrorBoundaryState {
  hasError?: boolean
}

const ErrorUI = (): JSX.Element => {
  return (
    <Result
      status='error'
      title={'Something went wrong.'}
      subTitle={'Please try again later.'}
      style={{ margin: 50 }}
    />
  )
}

class ErrorBoundary extends Component<ErrorBoundaryState> {
  public static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  public state: ErrorBoundaryState = {
    hasError: false
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // where error logger can go
    console.log('err -->', error, errorInfo)
  }

  public render(): ReactNode {
    const { hasError } = this.state

    if (hasError) {
      return <ErrorUI />
    }

    return this.props.children
  }
}

export default ErrorBoundary
