import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventosCreadosCard from '../../components/EventCards/EventosCreadosCard';
import FilterAndSearchBarGeneral from '../../components/FilterAndSearchBar/general/FilterAndSearchBarGeneral';
import { setFilteredEvents } from '../../redux/features/eventsSlice';
import { load, setLength } from '../../redux/features/filtersSlice';
import getEarliestDate from '../../utils/getEarliestDate';
import { defaultDate, returnDate } from '../../utils/returnDate';
import parseJwt from '../../utils/ParseJwt';

const perPage = 6;

const MisEntradas = () => {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const eventos = useSelector((state) => state.eventos);
  const filters = useSelector((state) => state.filtros);
  const dispatch = useDispatch();

  useEffect(() => {
    const minDate = returnDate(filters.minDate);
    const maxDate = returnDate(filters.maxDate);

    const events = eventos.eventos.filter(
      (event) =>
        event.idOwner === sesion._id &&
        event.category.indexOf(filters.category) >= 0 &&
        getEarliestDate(event.dates) >= minDate &&
        getEarliestDate(event.dates) <=
          (maxDate !== defaultDate ? maxDate : getEarliestDate(event.dates)) &&
        (event.state === filters.state || filters.state === '')
    );

    dispatch(setLength(events.length));
    dispatch(setFilteredEvents(events.slice(0, filters.page * perPage)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, eventos.eventos, filters]);

  return (
    <div className="App">
      <h1 className="m-4">MIS EVENTOS CREADOS</h1>
      <FilterAndSearchBarGeneral />
      <main className="eventops__main container d-flex flex-column flex-grow-1">
        <div className="d-flex flex-column flex-grow-1 gap-3">
          <section className="eventos-filtrados d-flex flex-grow-1">
            <div className="container">
              <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
                {eventos.filteredEvents?.map((evento) => (
                  <EventosCreadosCard evento={evento} key={evento._id} />
                ))}
              </div>
            </div>
          </section>
          {eventos.eventos.length > filters.page * perPage &&
          filters.length > filters.page * perPage ? (
            <button
              onClick={() => dispatch(load())}
              className="btn btn-primary btn-lg rounded-pill align-self-center px-5"
            >
              Cargar Más
            </button>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
};

export default MisEntradas;