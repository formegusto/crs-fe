import * as actions from "./actions";
import RootReducer from "../types";
import { connect } from "react-redux";

const mapState = ({ process }: RootReducer) => ({
  ...process,
});

const ProcessConnector = connect(mapState, actions);
export default ProcessConnector;
