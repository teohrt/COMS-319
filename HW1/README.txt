This is a multithreaded server-client chat application. 

Each client has two threads running. One for reading messages and one for sending messages. 

The server has an infinite loop that is always accepting client connections, creating threads to handle them, and storing their sockets and I/O streams in a ClientHandler object array. Each of the threads have an infinite loop that is constantly logging input to the server’s console from the client’s stream and then throwing that message into an output stream to the other clients. If one of the messages is ‘KMS’, then that connection is terminated.

---
HOW TO RUN IT

Open 3 terminals and navigate to the src directory of the projcet.

run 'javac Server.java'
run 'javac Client.java'

In the first terminal run 'java Server'
In the other two terminals run 'java Client'

At this point you can enter your name and then begin chatting with the other clients connected to the server.