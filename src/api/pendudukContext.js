import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPenduduk } from "../redux/pendudukAct";

const PendudukContext = createContext();

export const usePenduduk = () => {
  return useContext(PendudukContext);
};

const PendudukProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const penduduk = useSelector((state) => state.penduduk.penduduk);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchPenduduk());
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <PendudukContext.Provider value={{ penduduk, loading, error }}>
      {children}
    </PendudukContext.Provider>
  );
};

export default PendudukProvider;
