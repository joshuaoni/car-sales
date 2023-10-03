import { Navbar } from "../_components/index";
import { render, screen } from '@testing-library/react';
import { OutlinedInput } from "@mui/material";

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  OutlinedInput: jest.fn(() => <div>Outlined Input</div>),
}))

const mockedOutlinedInput = jest.mocked(OutlinedInput);

describe('Navbar text displayed', () => {
  beforeEach(() => {
    render(<Navbar />);
  })

  it('prints "Relevance" and "All brands"', () => {
    expect(screen.getByText(/Relevance/)).toBeInTheDocument();
    expect(screen.getByText(/All brands/)).toBeInTheDocument();
  })
})

describe('Presence of components', () => {
  beforeEach(() => {
    mockedOutlinedInput.mockClear();
    render(<Navbar />)
  })

  it('renders outline input once', () => {
    expect(mockedOutlinedInput).toHaveBeenCalledTimes(1);
  })
})