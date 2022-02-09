import React from "react";
import { ConnectedProps } from "react-redux";
import { connect, Socket } from "socket.io-client";
import ConfigConnector from "../store/config/connector";

type Props = ConnectedProps<typeof ConfigConnector>;
function SocketListener({ socket, connectSocket }: Props) {
  React.useEffect(() => {
    if (!socket) {
      const API_SERVER = process.env.REACT_APP_API_SERVER;
      const SOCKET_PATH = process.env.REACT_APP_SOCKET_PATH;

      const io: Socket = connect(`${API_SERVER}`, {
        path: `/${SOCKET_PATH}`,
        transports: ["websocket"],
      });

      io.on("connect", () => {
        connectSocket(io);
      });
    }
  }, [socket, connectSocket]);
  return <></>;
}

export default ConfigConnector(SocketListener);
