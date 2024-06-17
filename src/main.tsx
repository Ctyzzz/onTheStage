import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import Router from './Router';
import { store } from '@redux/store';
import './static/index.scss';

const rootElement = document.getElementById('root')!;
const queryClient = new QueryClient()

ReactDOM.createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
  </QueryClientProvider>
);
