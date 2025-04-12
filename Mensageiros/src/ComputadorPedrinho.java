public class ComputadorPedrinho {
    public static void main(String[] args) {
        
        ServicoMensagemInstantanea smi = null;

        String appEscolhido="msn";

        if(appEscolhido.equals("msn"))
            smi = new MSNMenseger();
        else if (appEscolhido.equals("fb"))
            smi = new FacebookMensenger();
        else if (appEscolhido.equals("tl"))
            smi = new Telegram();


        smi.enviarMensagem();
        smi.receberMensagem();}
}