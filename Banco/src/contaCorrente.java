public class contaCorrente extends conta{
    public static int SEQUENCIAL = 1;

    public contaCorrente(){
        super.agencia = conta.AGENCIA_PADRAO;
        super.numero = SEQUENCIAL++;
    }

    public void imprimirExtrato(){
        System.out.println("===Extrato de Conta Corrente===");
        imprimirInfosComuns();


    }

    protected void imprimirInfosComuns() {
        System.out.println(String.format("Agência: %d", super.agencia));
        System.out.println(String.format("Conta: %d", super.numero));
        System.out.println(String.format("Saldo: %.2f", super.saldo));
    }
}
