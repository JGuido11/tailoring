import './styles/css/styles.css';
import { Main } from './Components/Main/Main';
import { DrawerProvider } from './Context/DrawerContent';

export default function App() {
  return (
    <DrawerProvider>
      <Main />
    </DrawerProvider>
  );
}
