// ✅ BookingContext.js optimizado para uso con BookingForm siempre montado
import { createContext, useContext, useState, useEffect } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [formIsSticky, setFormIsSticky] = useState(false);

  // Controla el scroll para activar sticky solo en escritorio
  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.75;
      const offset = window.scrollY;
      setFormIsSticky(offset > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BookingContext.Provider value={{ showForm, setShowForm, formIsSticky }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
