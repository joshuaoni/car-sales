import { ReuseableCard } from "../_components/index";
import { render, screen } from '@testing-library/react';

describe('Cardcontent is accurate', () => {
  beforeEach(() => {
    const car = {
      id: "13",
      name: "Nissan Range",
      year: "2022",
      capacity: "4 People",
      fuel: "gas",
      rating: "6.1km/1-litre",
      type: "Automatic",
      image: "/4.jpg",
      price: "440"
    }
    render(<ReuseableCard car={car} />);
  })

  it('prints name "Nissan Range" and year "2022"', () => {
    expect(screen.getByText(/Nissan Range/)).toBeInTheDocument();
    expect(screen.getByText(/2022/)).toBeInTheDocument();
  })
})