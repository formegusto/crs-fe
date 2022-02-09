import { connect } from "react-redux";
import RootReducer from "../types";
import * as actions from "./actions";

const mapState = ({ config }: RootReducer) => ({
  ...config,
});

const ConfigConnector = connect(mapState, actions);
export default ConfigConnector;
