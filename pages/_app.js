import "@/styles/globals.css";
import 'react-datepicker/dist/react-datepicker.css';

import { BookingProvider } from "@/context/BookingContext";

export default function App({ Component, pageProps }) {
  return (
    <BookingProvider>
      <Component {...pageProps} />
    </BookingProvider>
  );
}
