// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import { test, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BookShop } from "../pages/book-shop/book-shop";
import { data } from "../data";

afterEach(cleanup);

test("heading of ProductList item is displayed", async () => {
  render(<BookShop data={data} />);

  const heading = screen.getByRole("heading", { level: 1, name: /Books/i });
  expect(heading).toBeInTheDocument();
});

test("first list element name is displayed", async () => {
  render(<BookShop data={data} />);

  const productItem = screen.getAllByTestId("product-item-name")[0];
  expect(productItem).toHaveTextContent("Martyr!");
});

test("cart component is displayed and has a total value of $0.00", async () => {
  render(<BookShop data={data} />);

  const orderTotal = screen.getByTestId("order-total");
  expect(orderTotal).toHaveTextContent("$0.00");
});

test("Order total is $20.00 after adding item to the cart", async () => {
  render(<BookShop data={data} />);

  const ulElement = screen.getByTestId("list");

  if (!ulElement) {
    throw new Error("ul element not found");
  }

  const firstUlElement = ulElement.children[0];

  const button = firstUlElement.querySelectorAll("button")[1];
  await userEvent.click(button);

  const orderTotal = screen.getByTestId("order-total");
  expect(orderTotal).toHaveTextContent("$20.00");
});

test("Order total is $40.00 after twice first element from cart", async () => {
  render(<BookShop data={data} />);

  const ulElement = screen.getByTestId("list");

  if (!ulElement) {
    throw new Error("ul element not found");
  }

  const firstUlElement = ulElement.children[0];

  const buttons = firstUlElement.querySelectorAll("button");

  if (buttons.length < 2) {
    throw new Error("Not enough buttons found");
  }

  const addItemButton = buttons[1];
  await userEvent.click(addItemButton);
  await userEvent.click(addItemButton);

  const orderTotal = screen.getByTestId("order-total");
  expect(orderTotal).toHaveTextContent("$40.00");
});

test("Order total is 0.00 after adding and removing same element from cart", async () => {
  render(<BookShop data={data} />);

  const ulElement = screen.getByTestId("list");

  if (!ulElement) {
    throw new Error("ul element not found");
  }

  const firstUlElement = ulElement.children[0];

  const buttons = firstUlElement.querySelectorAll("button");

  if (buttons.length < 2) {
    throw new Error("Not enough buttons found");
  }

  const addItemButton = buttons[1];
  const removeItemButton = buttons[0];
  await userEvent.click(addItemButton);
  await userEvent.click(removeItemButton);

  const orderTotal = screen.getByTestId("order-total");
  expect(orderTotal).toHaveTextContent("$0.00");
});
