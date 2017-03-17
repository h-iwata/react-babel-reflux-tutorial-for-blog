import EventEmitter from 'event-emitter'

class MemoStore {

  static get CHANGE_EVENT() {
    return 'changeEvent';
  }

  constructor() {
    this.emitter = new EventEmitter();
    this.memos = [];
  }

  addMemo(memo) {
    if (memo === '') {
      return;
    }
    this.memos.push(memo);
    this.emitChange();
  }

  emitChange(){
    this.emitter.emit(this.CHANGE_EVENT, this.memos);
  }

  addChangeListener(callback) {
    this.emitter.on(this.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.emitter.removeListener(this.CHANGE_EVENT, callback);
  }
}
module.exports = new MemoStore();
