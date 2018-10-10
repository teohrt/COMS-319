import java.io.FileInputStream;
import java.io.FileNotFoundException;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;


public class TicTacToe extends Application {

	private GridPane pane;
	private char currentPlayer = 'X';
	private char winner = ' ';
	private Cell[][] cell = new Cell[3][3];
	private Label statusMsg = new Label("Welcome to TIC TAC TOE!! X's turn.");
	
	public static void main(String[] args) {
		launch(args);
	}

	public class Cell extends Pane {
		private char player = ' ';

		public Cell() {
			setStyle("-fx-border-color : black");
			this.setPrefSize(150, 150);
			this.setOnMouseClicked(e -> {
				try {
					handleClick();
				} catch (FileNotFoundException e1) {
					e1.printStackTrace();
				}
			});
		}

		private void handleClick() throws FileNotFoundException {
			// Handling blank cells when the game hasn't been won
			if (player == ' ' && currentPlayer != ' ') {
				setPlayer(currentPlayer);

				if (hasWon(currentPlayer)) {
					statusMsg.setText("Congratulations, " + currentPlayer + " won the game!");
					winner = currentPlayer;
					currentPlayer = ' ';

					endGameButton(this);
				}
				else if (isBoardFull()) {
					statusMsg.setText("It's a draw!");
					currentPlayer = ' ';
					
					endGameButton(this);
				}
				else {
					currentPlayer = (currentPlayer == 'X') ? 'O' : 'X'; 
					statusMsg.setText(currentPlayer + " must play.");
				}
			}

			// Handling end of game / incorrect piece
			else if (isBoardFull()) {
				statusMsg.setText("It's a draw!");
			}
			else if(currentPlayer == ' ') {
				if (isBoardFull()) {
					statusMsg.setText("Congratulations, " + winner + " won the game!");
				}
			}
			else {
				statusMsg.setText(currentPlayer + " can't play here. Pick an empty cell!");
			}
		}

		public char getPlayer() {
			return player;
		}

		public void setPlayer(char player) throws FileNotFoundException {
			if (player == 'X') {
				this.player = player;
				FileInputStream input = new FileInputStream("x.jpg");
				Image image = new Image(input);
				ImageView imageView = new ImageView(image);
				imageView.setFitHeight(150);
				imageView.setFitWidth(150);
				getChildren().add(imageView);
			}
			else if (player == 'O') {
				this.player = player;
				FileInputStream input = new FileInputStream("o.jpg");
				Image image = new Image(input);
				ImageView imageView = new ImageView(image);
				imageView.setFitHeight(150);
				imageView.setFitWidth(150);
				getChildren().add(imageView);
			}
		}
	}

	@Override
	public void start(Stage primaryStage) throws Exception {
		pane = new GridPane();
		for (int i = 0 ; i < 3; i++) {
			for (int j = 0 ; j < 3; j++) {
				cell[i][j] = new Cell();
				pane.add(cell[i][j], j, i);
			}
		}

		BorderPane borderPane = new BorderPane();
		borderPane.setCenter(pane);
		borderPane.setBottom(statusMsg);

		Scene scene = new Scene(borderPane, 450, 460);
		primaryStage.setTitle("Tic Tac Toe");
		primaryStage.setScene(scene);
		primaryStage.show();
	}

	public boolean isBoardFull() {
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				if (cell[i][j].getPlayer() == ' ') {
					return false;
				}
			}
		}
		return true;
	}

	public boolean hasWon(char player) {
		for (int i = 0; i < 3; i++) {
			if (cell[i][0].getPlayer() == player && cell[i][1].getPlayer() == player && cell[i][2].getPlayer() == player) {
				return true;
			}
			if (cell[0][i].getPlayer() == player && cell[1][i].getPlayer() == player && cell[2][i].getPlayer() == player) {
				return true;
			}
		}
		if (cell[0][0].getPlayer() == player && cell[1][1].getPlayer() == player && cell[2][2].getPlayer() == player) {
			return true;
		}
		if (cell[0][2].getPlayer() == player && cell[1][1].getPlayer() == player && cell[2][0].getPlayer() == player) {
			return true;
		}
		return false;
	}

	public void endGameButton(Cell cell) {
		Button button = new Button("Play Again!");
		button.setLayoutX(35);
		button.setLayoutY(70);
		button.setOnMouseClicked(e -> reset());
		cell.getChildren().add(button);
	}
	
	public void reset() {
		for (int i = 0 ; i < 3; i++) {
			for (int j = 0 ; j < 3; j++) {
				cell[i][j].getChildren().clear();
				cell[i][j] = new Cell();
				pane.add(cell[i][j], j, i);
			}
		}
		currentPlayer = 'X';
		statusMsg.setText("Welcome to TIC TAC TOE!! X's turn.");
	}
}

