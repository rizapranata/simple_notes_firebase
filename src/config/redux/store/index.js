import  { createStore } from 'redux';
import reducer from '../reducer';
// hanya memakai export (tidak perlu pake 'default') dan pemanggilan harus menggunakan kurung kurawal '{}'
export const store = createStore(reducer);
