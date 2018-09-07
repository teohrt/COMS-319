import java.io.*;
import java.util.*;
import java.net.*;

// Server class
public class Server 
{
	static Vector<ClientHandler> clients = new Vector<>();

	public static void main(String[] args) throws IOException 
	{
		System.out.println("Chat Server Started...\n----------------------\n");
		ServerSocket ss = new ServerSocket(1234);
		Socket s;
		
		// Grab clients
		while (true) 
		{
			s = ss.accept();
			System.out.println("New client connected : " + s);

			DataInputStream dis = new DataInputStream(s.getInputStream());
			DataOutputStream dos = new DataOutputStream(s.getOutputStream());

			// Object to handle request
			ClientHandler handler = new ClientHandler(s, dis, dos);

			Thread t = new Thread(handler);
			clients.add(handler);
			
			t.start();
		}
	}
}

class ClientHandler implements Runnable 
{
	final DataInputStream dis;
	final DataOutputStream dos;
	Socket s;
	boolean isloggedin;

	public ClientHandler(Socket s, DataInputStream dis, DataOutputStream dos) {
		this.dis = dis;
		this.dos = dos;
		this.s = s;
		this.isloggedin=true;
	}

	public void run() {
		while (true) 
		{
			try
			{
				// Log message
				String received = dis.readUTF();
				System.out.println(received);

				// Die
				if(received.substring(received.length() -3 ).equals("KMS")){
					this.isloggedin=false;
					this.s.close();
					break;
				}

				for (ClientHandler c : Server.clients) 
				{
					// Log message to every client that didn't type it
					if (c.isloggedin==true && c.s != this.s) 
					{
						c.dos.writeUTF(received);
						break;
					}
				}
			}
			catch (IOException e) {
				break;
			}
		}
		try
		{
			this.dis.close();
			this.dos.close();
		}
		catch (IOException e) {
			e.printStackTrace();
		}
	}
}