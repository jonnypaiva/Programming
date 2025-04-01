public class FacebookMensenger extends ServicoMensagemInstantanea {
        public void enviarMensagem(){
                validarConectadoInternet();
                System.out.println("Enviando mensagem pelo Faceboook");
        }
        public void receberMensagem(){
                System.out.println( "Recebendo mensagem pelo Facebook");
        }
}