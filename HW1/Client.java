import java.io.*;
import java.net.*;
import java.util.Scanner;

public class Client 
{	 
	    public static void main(String args[]) throws UnknownHostException, IOException 
	    {
	        Scanner scanner = new Scanner(System.in);
	        
	        //User name prompt
			System.out.print("\n>Enter your Name (Type in your name, then press Enter) : ");
			String userName = scanner.nextLine();
			System.out.println("\nType and press ENTER to chat. Type 'KMS' to exit...\n---------------------------------------------------\n");
			
	        Socket s = new Socket("127.00.0.1", 1234);
	        DataInputStream dis = new DataInputStream(s.getInputStream());
	        DataOutputStream dos = new DataOutputStream(s.getOutputStream());
	        
	        Thread sendMessage = new Thread(new Runnable() 
	        {
	            public void run() {
	            	
	            	boolean alive = true;
	            	
	                while (alive) {
	                    String msg = scanner.nextLine();
	                    
	                    try {
	                        // Stream the message
	                        dos.writeUTF("(" + userName + ") : " + msg);
	                    } catch (IOException e) {
	                        System.out.println("***Goodbye!\n");
	                        alive = false;
	                    }
	                }
	            }
	        });
	        
	        Thread readMessage = new Thread(new Runnable() 
	        {
	            public void run() {
	 
	            	boolean alive = true;
	                while (alive) {
	                    try {
	                        // Read from the server
	                        System.out.println(dis.readUTF());
	                    } catch (IOException e) {
	                        System.out.println("\n***Everything died!");
	                        alive = false;
	                    }
	                }
	            }
	        });
	 
	        sendMessage.start();
	        readMessage.start();
	 
	    }
	}