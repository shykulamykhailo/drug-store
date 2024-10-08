import { createContext, useContext, useEffect, useState } from 'react';
import { loadStoreData, saveStoreData } from '../utils/storage';

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
    const [storeData, setStoreData] = useState(loadStoreData());

    useEffect(() => {
        saveStoreData(storeData);
    }, [storeData]);

    const addProduct = (product) => {
        const existingProduct = storeData.find(
            (item) => item.id === product.id
        );
        if (existingProduct) {
            const updateProducts = storeData.map((item) =>
                item.id === product.id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                          productPrice: (
                              (item.quantity + 1) *
                              item.price
                          ).toFixed(2),
                      }
                    : item
            );
            setStoreData(updateProducts);
        } else {
            setStoreData([
                ...storeData,
                { ...product, productPrice: product.price },
            ]);
        }
    };

    const handleIncrement = (productId) => {
        const updatedCart = storeData.map((item) =>
            item.id === productId
                ? {
                      ...item,
                      quantity: item.quantity + 1,
                      productPrice: ((item.quantity + 1) * item.price).toFixed(
                          2
                      ),
                  }
                : item
        );
        setStoreData(updatedCart);
    };

    const handleDecrement = (productId) => {
        const updatedCart = storeData
            .map((item) => {
                if (item.id === productId) {
                    if (item.quantity === 1) {
                        handleRemove(productId);
                        return null;
                    } else {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                            productPrice: (
                                (item.quantity - 1) *
                                item.price
                            ).toFixed(2),
                        };
                    }
                }
                return item;
            })
            .filter((item) => item !== null);
        setStoreData(updatedCart);
    };

    const handleRemove = (productId) => {
        const updatedCart = storeData.filter((item) => item.id !== productId);
        setStoreData(updatedCart);
    };

    const handleClear = () => {
        setStoreData([]);
    };

    const calculateTotalPrice = () => {
        return storeData
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };

    console.log(storeData);

    return (
        <StoreContext.Provider
            value={{
                storeData,
                addProduct,
                handleIncrement,
                handleDecrement,
                handleRemove,
                handleClear,
                calculateTotalPrice,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
