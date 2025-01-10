import ProductEdit from "@/app/editproduct/[productId]/page";
import productsReducer from "@/features/products/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ProductEdit Component", () => {
  let store: any;
  const mockRouter = { back: jest.fn() };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    store = configureStore({
      reducer: {
        productsState: productsReducer,
      },
    });
  });

  const mockProduct = {
    _id: "123",
    name: "Test Product",
    description: "Test Description",
    price: 100,
  };

  it("renders form fields with product data", () => {
    store.dispatch({
      type: "products/getProductById/fulfilled",
      payload: mockProduct,
    });

    render(
      <Provider store={store}>
        <ProductEdit params={{ productId: 123 }} />
      </Provider>
    );

    expect(screen.getByLabelText("Product Name")).toHaveValue("Test Product");
    expect(screen.getByLabelText("Description")).toHaveValue(
      "Test Description"
    );
    expect(screen.getByLabelText("Price")).toHaveValue(100);
  });

  it("updates product when 'Update Product' button is clicked", () => {
    render(
      <Provider store={store}>
        <ProductEdit params={{ productId: 123 }} />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText("Product Name"), {
      target: { value: "Updated Product" },
    });

    fireEvent.click(screen.getByText("Update Product"));

    expect(mockRouter.back).toHaveBeenCalled();
  });

  it("deletes product when 'Delete Product' button is clicked", () => {
    render(
      <Provider store={store}>
        <ProductEdit params={{ productId: 123 }} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Delete Product"));

    expect(mockRouter.back).toHaveBeenCalled();
  });
});
