import ProductListing from "@/app/components/muilisting/page";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

// Mock the useRouter hook
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("ProductListing Component", () => {
  const mockRouter = {
    push: jest.fn(),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  const mockProducts = [
    {
      _id: 123,
      name: "Product 1",
      description: "Description 1",
      price: 100,
      quantity: 4,
      created_at: "2023-12-01T08:05:08.187Z",
    },
    {
      _id: 456,
      name: "Product 2",
      description: "Description 2",
      price: 200,
      quantity: 2,
      created_at: "2024-01-28T10:03:49.747Z",
    },
  ];

  it("renders products correctly", () => {
    render(<ProductListing products={mockProducts} />);

    // Check if product details are displayed
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
    });
  });

  it("navigates to product detail page when 'View Product' button is clicked", () => {
    render(<ProductListing products={mockProducts} />);

    const viewButton = screen.getAllByText("View Product")[0];
    fireEvent.click(viewButton);

    expect(mockRouter.push).toHaveBeenCalledWith("/productdetail/123");
  });

  it("navigates to edit product page when 'Edit Product' button is clicked", () => {
    render(<ProductListing products={mockProducts} />);

    const editButton = screen.getAllByText("Edit Product")[0];
    fireEvent.click(editButton);

    expect(mockRouter.push).toHaveBeenCalledWith("/editproduct/123");
  });

  it("renders no products if product list is empty", () => {
    render(<ProductListing products={[]} />);

    expect(screen.queryByText(/View Product/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Edit Product/)).not.toBeInTheDocument();
  });
});
