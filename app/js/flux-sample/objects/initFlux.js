import MemoStore from './MemoStore';
import Dispatcher from './Dispatcher';
import MemoActionType from './MemoActionType';

export default function() {
  Dispatcher.register(function(payload) {
    switch(payload.actionType) {
      case MemoActionType.ADD_MEMO:
        MemoStore.addMemo(payload.memo);
        break;
    }
  });
}
