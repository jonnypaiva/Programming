import java.util.Scanner;

public class Contador {
	public static void main(String[] args) {
		Scanner terminal = new Scanner(System.in);
		System.out.println("Digite o primeiro parâmetro");
		int parametroUm = terminal.nextInt();
		System.out.println("Digite o segundo parâmetro");
		int parametroDois = terminal.nextInt();
		
		int contagem = parametroDois - parametroUm;
		System.out.println("Teremos o total de: " + contagem + " ocorrências.");
		
		try {
			contar(parametroUm, parametroDois);
		
		}catch (ParametrosInvalidosException e) {
			System.out.println(e.getMessage());
		}
		
	}
	static void contar(int parametroUm, int parametroDois ) throws ParametrosInvalidosException {
		if (parametroUm >= parametroDois){
			throw new ParametrosInvalidosException("O segundo parâmtro deve ser maior que o primeiro");
		}		

		
		for (int i = parametroUm; i<= parametroDois; i++){
			System.out.println("Imprimindo o número: " + i);
		}
	}
}