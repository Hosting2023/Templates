import { useEffect, useRef } from 'react';
import io, { ManagerOptions, SocketOptions } from 'socket.io-client';

export const useSocket = (
  extraOptions?: Partial<ManagerOptions & SocketOptions>,
) => {
  const socketHost = process.env.NEXT_PUBLIC_AUTH_WEBSOCKET_HOST;
  const { current: socket } = useRef(
    io(socketHost!, { autoConnect: false, ...extraOptions }),
  );

  useEffect(() => {
    if (socket) {
      socket.disconnect();
    }
  }, [socket]);

  const joinRoom = (room: string) => {
    if (socket) {
      socket.emit('join', room);
    }
  };

  const leaveRoom = (room: string) => {
    if (socket) {
      socket.emit('leave', room);
    }
  };

  return { socket, joinRoom, leaveRoom };
};
