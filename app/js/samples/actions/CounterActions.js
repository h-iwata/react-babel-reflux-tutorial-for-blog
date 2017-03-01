export default class CounterActions {
  static increase(num = 1) {
      return {
          type: "INC_COUNTER",
          num
      };
  };
}
