package candidatura;

import java.util.concurrent.ThreadLocalRandom;

public class ProcessoSeletivo {
    public static void main(String[] args){
        selecaoCandidatos();
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
