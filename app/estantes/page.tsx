import ShelfSelector from "../components/estante";
import DSideNavBar from '../components/NavBarAdmin';

const shelvesData = [
  { id: 1, link: '/prateleira1', name: 'Prateleira 1' },
  { id: 2, link: '/prateleira/2', name: 'Prateleira 2' },
  { id: 3, link: '/prateleira/3', name: 'Prateleira 3' },
];

export default function Estantes() {
  
  return (
    <div >
      <DSideNavBar/>
      <ShelfSelector shelves={shelvesData} />
    </div>
  );
}