
import { render, screen, fireEvent } from '@testing-library/react';
import SideNavBar from "./components/SideNavBar"; 
import { FaHome, FaFileImport, FaCog, FaSignOutAlt } from 'react-icons/fa';  

describe('SideNavBar', () => {
  test('renders correctly with collapsed menu', () => {
    render(<SideNavBar />);

    
    expect(screen.getByRole('link', { name: /início/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /importar/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /configurações/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sair/i })).toBeInTheDocument();

    
    expect(screen.queryByText(/início/i)).toBeNull();
    expect(screen.queryByText(/importar/i)).toBeNull();
    expect(screen.queryByText(/configurações/i)).toBeNull();
    expect(screen.queryByText(/sair/i)).toBeNull();
  });

  test('toggles menu expansion when the button is clicked', () => {
    render(<SideNavBar />);

    const toggleButton = screen.getByRole('button');
    
    // Verifique se o menu está colapsado inicialmente
    expect(screen.queryByText(/início/i)).toBeNull();
    expect(screen.queryByText(/importar/i)).toBeNull();
    expect(screen.queryByText(/configurações/i)).toBeNull();
    expect(screen.queryByText(/sair/i)).toBeNull();

    
    fireEvent.click(toggleButton);

    
    expect(screen.getByText(/início/i)).toBeInTheDocument();
    expect(screen.getByText(/importar/i)).toBeInTheDocument();
    expect(screen.getByText(/configurações/i)).toBeInTheDocument();
    expect(screen.getByText(/sair/i)).toBeInTheDocument();
  });

  test('displays the correct logo image when menu is expanded and collapsed', () => {
    render(<SideNavBar />);

    const toggleButton = screen.getByRole('button');
    const logoImage = screen.getByAltText('Menu Toggle Icon');

    
    expect(logoImage.src).toContain('/assets/images/logo2.png');

    
    fireEvent.click(toggleButton);

    
    expect(logoImage.src).toContain('/assets/images/logo.png');
  });
});
