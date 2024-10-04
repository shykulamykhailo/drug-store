import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Store from './features/store/Store';
import ShoppingCart from './features/shoppingCart/ShoppingCart';
import GlobalStyles from './styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StoreProvider } from './context/StoreContext';
import OrdersHistory from './ui/OrdersHistory';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <BrowserRouter>
                <StoreProvider>
                    <Routes>
                        <Route path="/" element={<AppLayout />}>
                            <Route path="store" element={<Store />} />
                            <Route
                                path="shoppingCart"
                                element={<ShoppingCart />}
                            />
                            <Route path="history" element={<OrdersHistory />} />
                        </Route>
                    </Routes>
                </StoreProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
