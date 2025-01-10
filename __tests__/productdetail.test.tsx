import ProductDetail from "@/app/productdetail/[productId]/page";
import productsReducer from "@/features/products/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { Provider } from "react-redux";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ProductDetail Component", () => {
  let store: any;
  const mockRouter = { back: jest.fn() };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    store = configureStore({
      reducer: {
        productsState: productsReducer,
      },
      //   middleware: [thunk],
    });
  });

  it("renders product details and allows adding to cart", () => {
    render(
      <Provider store={store}>
        <ProductDetail params={{ productId: 1 }} />
      </Provider>
    );

    expect(screen.getByText(/Add to Cart/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("quantity"), {
      target: { value: 5 },
    });

    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));

    expect(mockRouter.back).not.toHaveBeenCalled();
  });
});
