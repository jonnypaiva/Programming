import java.util.Scanner;

abstract class Conta {
    protected double saldo;

    public Conta(double saldo) {
        this.saldo = saldo;
    }

    public abstract void sacar(double valor);

    public void exibirSaldo() {
        System.out.printf("Saldo Atual: %.2f%n", saldo);
    }
}

class ContaCorrente extends Conta {
    private double limite;

    public ContaCorrente(double saldo, double limite) {
        super(saldo);
        this.limite = limite;
    }

    @Override
    public void sacar(double valor) {
        if (saldo - valor >= -limite) {
            saldo -= valor;
        } else {
            System.out.println("Saque invalido: Excede limite");
        }
        exibirSaldo(); // Exibe o saldo atualizado
    }
}

class ContaPoupanca extends Conta {
    public ContaPoupanca(double saldo) {
        super(saldo);
    }

    @Override
    public void sacar(double valor) {
        if (saldo >= valor) {
            saldo -= valor;
        } else {
            System.out.println("Saque inválido: Saldo insuficiente");
        }
        exibirSaldo(); // Exibe o saldo atualizado
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String tipoConta = scanner.next();
        scanner.nextLine();
        scanner.nextLine();
        scanner.next();
        double saldoInicial = scanner.nextDouble();

        Conta conta;

        if (tipoConta.equalsIgnoreCase("Corrente")) {
            double limite = scanner.nextDouble();
            conta = new ContaCorrente(saldoInicial, limite);
        } else {
            conta = new ContaPoupanca(saldoInicial);
        }

        while (scanner.hasNextDouble()) {
            double valorSaque = scanner.nextDouble();
            conta.sacar(valorSaque);
        }

        scanner.close();
    }
}