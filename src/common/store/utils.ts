export function createAction<T>(type: string, payload?: T) {
  return {
    type,
    payload,
  };
}
