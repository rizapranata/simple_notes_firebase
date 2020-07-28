import  { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';
// hanya memakai export (tidak perlu pake 'default') dan pemanggilan harus menggunakan kurung kurawal '{}'
export const store = createStore(
   reducer,
   applyMiddleware(thunk)
);

/**
Default dari sebuah Dispatch pada Redux adalah harus bersifat syncronous
karna langsung me-return Object, namun karna ada 'asyncronous' entah itu untuk memproses data dari API maka kita memerlukan midleware lain yaitu "Redux Thunk"
 */