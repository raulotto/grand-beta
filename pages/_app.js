import "@/styles/globals.css";
import 'react-datepicker/dist/react-datepicker.css';

import { BookingProvider } from "@/context/BookingContext";
import BodyWrapper from "@/components/BodyWrapper";

export default function App({ Component, pageProps }) {
  return (
    <BookingProvider>
      <BodyWrapper />
      <Component {...pageProps} />
    </BookingProvider>
  );
}
