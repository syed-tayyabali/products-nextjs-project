import CartPage from "@/app/addtocart/page";
import productsReducer from "@/features/products/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

const mockCartItems = [
  { _id: "1", name: "Product 1", price: 50, quantity: 2 },
  { _id: "2", name: "Product 2", price: 30, quantity: 1 },
];

describe("CartPage Component", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        productsState: productsReducer,
      },
      preloadedState: {
        productsState: { cart: mockCartItems },
      },
    });
  });

  it("renders cart items correctly", () => {
    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Price: $50")).toBeInTheDocument();
    expect(screen.getByText("Price: $30")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
  });

  it("calculates and displays the total price", () => {
    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    expect(screen.getByText("Total: $130")).toBeInTheDocument();
  });

  it("removes an item from the cart when delete button is clicked", () => {
    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    const deleteButtons = screen.getAllByLabelText("Remove from cart");
    fireEvent.click(deleteButtons[0]);

    const updatedCart = store.getState().productsState.cart;
    expect(updatedCart).toHaveLength(1);
    expect(updatedCart[0]._id).toBe("2");
  });

  it("shows 'Your cart is empty.' when no items are in the cart", () => {
    store = configureStore({
      reducer: {
        productsState: productsReducer,
      },
      preloadedState: {
        productsState: { cart: [] },
      },
    });

    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });
});
