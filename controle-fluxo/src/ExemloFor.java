public class ExemloFor {
    public static void main(String[] args) {
        String alunos[] = {"FELIPE", "JONAS", "JULIA", "MARCOS"};

        for (int x=0; x<alunos.length; x++) {
            System.out.println("O aluno no indice x=" + x + " é " + alunos[x]);
        }
    }
}
////o for each pode realizar a redução do for
/// String alunos[] = {"FELIPE", "JONAS", "JULIA", "MARCOS"};
// for(String aluno : alunos){
//      System.outprintln("Nome do aluno é: " + aluno);
//}