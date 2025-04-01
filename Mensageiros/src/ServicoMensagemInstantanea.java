public abstract class ServicoMensagemInstantanea {
    public abstract void enviarMensagem();
    public abstract void receberMensagem(); 
    
   // public abstract void salvarHistoricoMensagem();


protected void validarConectadoInternet(){
    System.out.println("Verificando conexão de internet...");
}
}



//Método Herança
//Para a realização da utilização de todas as funcionalidades de uma classe, onde, uma ou mais classes utilizam dos mesmos métodos, é realizado a criação de uma classe de serviço,
//onde, é criados todos os métodos "ações" ou "caracteristicas", para que essa possa ser compartilhada com as demais classes.
//Exemplo acima, as ações são as mesmas realizadas pelo MSNMessenger, Facebook e Telegram.
/*     public void enviarMensagem(){

        validarConectadoInternet();
        System.out.println("Enviando Mensagem...");
        salvarHistoricoMensagem();


        }

    public void receberMensagem(){
        System.out.println("Recebendo Mensagem...");
    }

    private void validarConectadoInternet(){
        System.out.println("Validando Conexão de Rede...");
    }

    private void salvarHistoricoMensagem(){
        System.out.println("Salvando histórico de mensagens...");
    }
} */



//Método Abstrato
/*public abstract class ServicoMensagemInstantanea {
    public abstract void enviarMensagem();
    public abstract void receberMensagem();     
}
 */