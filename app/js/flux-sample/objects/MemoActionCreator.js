import Dispatcher from './Dispatcher';
import MemoActionType from './MemoActionType';

class MemoActionCreator  {

  addMemo(memo) {
    Dispatcher.dispatch({
      actionType: MemoActionType.ADD_MEMO,
      memo: memo
    });
  }
}

export default new MemoActionCreator();
