import ProductEdit from "@/app/addproduct/page";
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

  it("renders form fields and allows adding a product", () => {
    render(
      <Provider store={store}>
        <ProductEdit />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText("Product Name"), {
      target: { value: "New Product" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "New Description" },
    });
    fireEvent.change(screen.getByLabelText("Price"), {
      target: { value: 200 },
    });
    fireEvent.change(screen.getByLabelText("quantity"), {
      target: { value: 10 },
    });

    fireEvent.click(screen.getByRole("button", { name: /add product/i }));

    expect(mockRouter.back).toHaveBeenCalled();
  });
});
