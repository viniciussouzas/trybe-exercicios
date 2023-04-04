export const actionCreatorCounter = (increment = 1) => ({ 
  type: 'INCREMENT_COUNTER',
  payload: increment,
});

export const actionCreatorClicks = () => ({
  type: 'INCREMENT_CLICK',
});