import { handleActions } from "redux-actions";

type RegistStore = {};
type Payload = {};

const registStore: RegistStore = {};
const RegistReducer = handleActions<RegistStore, Payload>({}, registStore);

export default RegistReducer;
