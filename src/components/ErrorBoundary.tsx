import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });
    
    // Log error to console
    console.error('Uncaught error:', error, errorInfo);
    
    // Here you could also send the error to an error reporting service
    // Example: sendToErrorReportingService(error, errorInfo);
  }

  private handleRefresh = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen flex items-center justify-center bg-gray-100"
          role="alert"
          aria-live="assertive"
        >
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-4">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-4 p-4 bg-gray-100 rounded overflow-auto">
                <p className="text-sm font-mono text-red-600 mb-2">Error: {this.state.error.toString()}</p>
                {this.state.errorInfo && (
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={this.handleRefresh}
                className="bg-primary-orange text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
                aria-label="Refresh the page"
              >
                Refresh Page
              </button>
              <a
                href="mailto:hello.detailmotoph@gmail.com"
                className="text-primary-orange border border-primary-orange px-4 py-2 rounded hover:bg-primary-orange hover:text-white transition-colors text-center"
                aria-label="Contact support via email"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 