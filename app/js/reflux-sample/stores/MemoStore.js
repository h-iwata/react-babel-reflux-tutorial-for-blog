'use strict';

import Reflux from "reflux";

import MemoActions from '../actions/MemoActions'

const MemoStore = Reflux.createStore({
  listenables: [MemoActions],

  memos: [],

  init() {
    this.memos = [];
  },

  onAddMemo(memo) {
    if (memo !== '') {
      this.memos.push(memo);
      this.trigger(this.memos);
    }
  },

});

export default MemoStore;
