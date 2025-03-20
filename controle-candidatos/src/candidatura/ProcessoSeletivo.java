package candidatura;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class ProcessoSeletivo {
    public static void main(String[] args){
        String [] candidatos = {"FELIPE", "MONICA", "JULIA", "PAULO", "AUGUSTO"};
        for(String candidato: candidatos){
            entrandoEmContato(candidato);
        }
    }

    static void entrandoEmContato(String candidato){

        int tentativasRealizadas = 1;
        boolean continuarTentanto = true;
        boolean atendeu = false;
        do{
            atendeu = atender();
            continuarTentanto = !atendeu;
            if (continuarTentanto) 
                tentativasRealizadas++;
            else
                System.out.println("CONTATO REALIZADO COM SUCESSO");
                
            

        }while (continuarTentanto && tentativasRealizadas<3); 

            if (atendeu)
                System.out.println("CONSEGUIMOS CONTATO COM " + candidato + " NA " + tentativasRealizadas + " TENTATIVAS");
            else
                System.out.println("NÃO CONSEGUIMOS CONTATO COM " + candidato + ", NÚMERO MÁXIMO DE TENTATIVAS :" + tentativasRealizadas + " TENTATIVAS");
            
        
        }  

    static boolean atender(){
        return new Random().nextInt(3)==1;

    }




    static void imprimirSelecionados() {
        String [] candidatos = {"FELIPE", "MONICA", "JULIA", "PAULO", "AUGUSTO"};
        System.out.println("Imprimindo a lista de candidatos informando o indice do elemento");

        for(int indice=0; indice<candidatos.length; indice++){
            System.out.println("O candidado de número " + (indice+1) + " é: "+ candidatos[indice]);
        }
        
        System.out.println("Forma abreviada de interação for each");

        for(String candidado: candidatos ){
            System.out.println("O candidado selecionado foi " + candidado);
        }
    }
    static void selecaoCandidatos(){
        String [] candidatos = {"FELIPE", "MONICA", "JULIA", "PAULO", "AUGUSTO", "TEREZA", "FABRICIO", "MIRELA", "DANIELA", "JORGE"};

        int candidatosSelecionados = 0;
        int candidadosAtual = 0;
        double salarioBase=2000.0;

        while (candidatosSelecionados < 5 && candidadosAtual < candidatos.length) {
            String candidato = candidatos[candidadosAtual];
            double salarioPretendido = valorPretendido();
            
            System.out.println("O Candidato " + candidato + " solicitou este valor de salário: " + salarioPretendido);
            if (salarioBase >= salarioPretendido) {
                System.out.println("O candidato " + candidato + " foi selecionado para a vaga.");
                candidatosSelecionados++;
                
            }
            candidadosAtual++;
        }


    }

    static double valorPretendido(){
        return ThreadLocalRandom.current().nextDouble(1800, 2500);
    }

    static void analisarCandidato(double salarioPretendido){
        double salarioBase = 2000.0;
        if (salarioBase > salarioPretendido){
        System.out.println("LIGAR PARA O CANDIDATO");
        }
        else if (salarioBase == salarioPretendido){
        System.out.println("LIGAR COM A CONTRA-PROPOSTA");
        }
        else {
            System.out.println("AGUARDANDO RESULTADO DOS DEMAIS CANDIDATOS");
        }
    }
}
