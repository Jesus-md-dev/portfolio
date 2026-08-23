import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console or error reporting service
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Get current language from localStorage or default to Spanish
      const currentLang = localStorage.getItem('preferredLanguage') || 'es';
      const isSpanish = currentLang === 'es';
      
      // Custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-800 text-white">
          <div className="text-center p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">
              {isSpanish ? 'Oops! Algo salió mal' : 'Oops! Something went wrong'}
            </h2>
            <p className="mb-6 text-gray-300">
              {isSpanish 
                ? 'Ha ocurrido un error inesperado. Por favor, recarga la página para continuar.'
                : 'An unexpected error has occurred. Please reload the page to continue.'
              }
            </p>
            <button
              onClick={this.handleReload}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              {isSpanish ? 'Recargar página' : 'Reload page'}
            </button>
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-red-400">
                  {isSpanish ? 'Detalles del error (desarrollo)' : 'Error details (development)'}
                </summary>
                <pre className="mt-2 text-xs bg-black p-2 rounded overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;