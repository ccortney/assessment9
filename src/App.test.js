import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const MockApp = () => {
  return (
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  )
}

describe("App", () => {
  test("renders without crashing", () => {
    render(<MockApp/>)
  });

  test("if matches snapshot", () => {
    const {asFragment} = render(<MockApp/>);
    expect(asFragment()).toMatchSnapshot();
  })

  test("if home renders", async () => {
    const { getByText } = render(<MockApp/>);
    const loadingElement = getByText(/Loading/i)
    expect(loadingElement).toBeInTheDocument();
  })
})
