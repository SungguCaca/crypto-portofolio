import React from "react";
import { render } from "@testing-library/react";
import Portfolio from "../src/components/Portfolio";

describe("Portfolio component", () => {
  it("renders without crashing", () => {
    render(<Portfolio />);
  });

  it("renders the correct number of tabs", () => {
    const { getByText } = render(<Portfolio />);
    expect(getByText("Tokens")).toBeInTheDocument();
    expect(getByText("NFTs")).toBeInTheDocument();
  });

  it("switches tabs when clicking on a tab button", () => {
    const { getByText } = render(<Portfolio />);
    expect(getByText("Tokens")).toHaveClass("active");
    getByText("NFTs").click();
    expect(getByText("NFTs")).toHaveClass("active");
  });

  it("displays the correct data for the tokens tab", () => {
    const mockData = [
      {
        contract_name: "Token A",
        portfolio_percentage: 50,
        quote_rate: 1,
        balance: 10
      },
      {
        contract_name: "Token B",
        portfolio_percentage: 50,
        quote_rate: 2,
        balance: 20
      }
    ];
    const { getByText } = render(<Portfolio />);
    const tokensTab = getByText("Tokens");
    expect(tokensTab).toHaveClass("active");
    mockData.forEach((asset) => {
      expect(getByText(asset.contract_name)).toBeInTheDocument();
      expect(getByText(`${asset.portfolio_percentage}%`)).toBeInTheDocument();
      expect(getByText(`$${asset.quote_rate}`)).toBeInTheDocument();
      expect(getByText(asset.balance)).toBeInTheDocument();
    });
  });

  it("displays the correct data for the NFTs tab", () => {
    const { getByText } = render(<Portfolio />);
    const nftsTab = getByText("NFTs");
    expect(nftsTab).not.toHaveClass("active");
    expect(getByText("My NFT Collection")).toBeInTheDocument();
  });
});
