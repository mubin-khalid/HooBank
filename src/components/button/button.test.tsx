import { Button } from "@components/button/button.component";
import { render, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

describe("Button test", () => {
  test("Should render the specified label and register the click", () => {
    const onClick = vi.fn();
    const label = "This is a button";

    const { getByText, getByRole } = render(
      <Button onClick={onClick} text={label} />
    );

    const button = getByRole("button");

    expect(getByText(label)).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
