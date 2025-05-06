import java.util.Scanner;

class Conta {
    private String titular;
    private int numeroConta;
    private double saldo;

    public Conta(String titular, int numeroConta, double saldo) {
        this.titular = titular;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    public double consultarSaldo() {
        return saldo;
    }

    public boolean sacar(double valor) {
        if (valor > saldo) {
            return false;
        }
        saldo -= valor;
        return true;
    }

    public void depositar(double valor) {
        saldo += valor;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String titular = sc.nextLine();
        int numeroConta = sc.nextInt();
        double saldoInicial = sc.nextDouble();

        Conta conta = new Conta(titular, numeroConta, saldoInicial);

        if (sc.hasNextDouble()) {
            double valorSaque = sc.nextDouble();
            if (!conta.sacar(valorSaque)) {
                System.out.println("Saque inválido: Saldo insuficiente");
                System.out.println("Saldo Atual: " + String.format("%.2f", conta.consultarSaldo()));
                return;
            }
        }

        if (sc.hasNextDouble()) {
            double valorDeposito = sc.nextDouble();
            conta.depositar(valorDeposito);
        }

        System.out.println("Saldo Atualizado: " + String.format("%.2f", conta.consultarSaldo()));

        sc.close();
    }
}