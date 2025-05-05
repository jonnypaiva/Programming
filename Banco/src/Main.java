public class Main {

    public static void main(String[] args) {
        conta cc = new contaCorrente();
        cc.depositar(100);
        cc.transferir(100, cc);

        conta poupanca = new contaPoupanca();
        poupanca.depositar(200);


        cc.imprimirExtrato();
        poupanca.imprimirExtrato();
    }
}
