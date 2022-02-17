const setOnLocalStorage = (store, action) => {
  switch (action.type) {
    case 'eventos/addNewEvent':
      localStorage.setItem(
        'eventos',
        JSON.stringify({ eventos: store.getState().eventos.eventos })
      );
      break;
    case 'usuarios/addNewUser':
      localStorage.setItem(
        'usuarios',
        JSON.stringify({ usuarios: store.getState().usuarios.usuarios })
      );
      break;
    case 'sales/addNewSale':
      localStorage.setItem(
        'sales',
        JSON.stringify({ sales: store.getState().sales.sales })
      );
      break;
    case 'tickets/setAllTickets':
      localStorage.setItem(
        'tickets',
        JSON.stringify({ tickets: store.getState().tickets.tickets })
      );
      break;
    case 'shopCart/emptyCart':
      localStorage.setItem(
        'shopCart',
        JSON.stringify({ cart: store.getState().shopCart.cart })
      );
      break;
    default:
      console.log(action.type);
      break;
  }
};

export default setOnLocalStorage;
